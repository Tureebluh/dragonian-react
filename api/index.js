import express from 'express';
import dbpool from '../dbpool';
import fetch from 'node-fetch';

const router = express.Router();

/*********************************************************************************************************************************
*
*                                                           USER-PROFILE
*
**********************************************************************************************************************************/
//Gets users details like created date and last login etc.
router.post('/profile/user/details', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_User_Profile_Details(' + dbpool.escape(req.body.steamid) +
                                                        ');',
            (error, results, fields) => {
                res.send(results);
                connection.release();
                if (error) throw error;
        });
    });
});
//Gets users shuffles that they've completed
router.post('/profile/user/shuffles', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_User_Profile_Shuffles(' + dbpool.escape(req.body.steamid) +
                                                        ');',
            (error, results, fields) => {
                res.send(results);
                connection.release();
                if (error) throw error;
        });
    });
});

//Get users verified status for planet coaster
router.get('/profile/user/verify', (req, res) => {
    if(req.isAuthenticated()){
        if(req.user.verified === false) {
            //Check to see if user owns - Planet Coaster (493340)
            fetch('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key='
            + process.env.STEAM_API_KEY + '&format=json&input_json={"steamid":' + req.user.steamid + ', "appids_filter":' + '[493340]}')
            .then(res => {
                //Return response to next call as JSON
                return res.json();
            })
            .then(resJson => {
                //If the game count is equal to 1 it was found, other wise user fails verification
                if(resJson.response['game_count'] === 1){
                    dbpool.getConnection( (err, connection) => {
                        if (err) throw err;
                        connection.query('CALL Update_User_Verified(1,' + dbpool.escape(req.user.steamid) +
                                                                        ');',
                            (error, results, fields) => {
                                req.user.verified = true;
                                res.send({result: 1});
                                connection.release();
                                if (error) throw error;
                        });
                    });
                } else {
                    res.send({result: 0});
                }
            })
            .catch(err => console.error(err));
        } else {
            res.send({result: 1});
        }
    } else {
        res.redirect('/auth/verification/failed');
    }
});


/*********************************************************************************************************************************
*
*                                                           SHUFFLES
*
**********************************************************************************************************************************/


//Report the specified workshop_URL for Admin review
router.post('/shuffle/report', (req, res) => {
    if(req.isAuthenticated() && !req.user.roles.includes('Shuffle Banned') && req.user.verified){
        if(typeof req.body.submissionURL !== 'undefined'){
                dbpool.getConnection( (err, connection) => {
                    if (err) throw err;
                    connection.query('CALL Insert_Shuffle_Report(' + dbpool.escape(req.user.steamid) + 
                                                                ',' + dbpool.escape(req.body.submissionURL) +
                                                                ');',
                        (error, results, fields) => {
                            res.send({result: 'Success'});
                            connection.release();
                            if (error) throw error;
                    });
                });
        } else {
            res.send({result: 'Failed'});
        } 
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Enters the user into the specified shuffle by ID
router.post('/shuffle/submit/', (req, res) => {
    if(req.isAuthenticated() && !req.user.roles.includes('Shuffle Banned') && req.user.verified){
        if(typeof req.body.verifySubmissionCB !== 'undefined'){
            if(req.body.shuffleID && (req.body.submissionURL.indexOf('https://steamcommunity.com/sharedfiles/filedetails/?id=') === 0) ||
                                    req.body.submissionURL.indexOf('https://steamcommunity.com/workshop/filedetails/?id=') === 0){
                dbpool.getConnection( (err, connection) => {
                    if (err) throw err;
                    connection.query('CALL Upsert_Shuffle_Submission(' + dbpool.escape(req.body.shuffleID) +
                                                                    ',' + dbpool.escape(req.user.steamid) +
                                                                    ',' + dbpool.escape(req.body.submissionURL) +
                                                                    ');',
                        (error, results, fields) => {
                            res.send({result:'Success'});
                            connection.release();
                            if (error) throw error;
                    });
                });
            } else {
                res.send({result: 'Bad URL'});
            }
        } else {
            res.send({result: 'No Terms'});
        } 
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Returns back the workshopURL for that round
router.post('/shuffle/workshop/random', (req, res) => {
    if(req.isAuthenticated() && !req.user.roles.includes('Shuffle Banned') && req.user.verified){
        if(req.body.shuffleID){
            dbpool.getConnection( (err, connection) => {
                if (err) throw err;
                connection.query('CALL Get_Shuffle_Link('   + dbpool.escape(req.user.steamid) +
                                                        ',' + dbpool.escape(req.body.shuffleID) +
                                                        ');',
                    (error, results, fields) => {
                        connection.release();
                        if (error) throw error;
                        res.send(results);
                });
            });
        } else {
            res.send({});
        }
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Returns back all the shuffle_ID's and Name's of all the shuffles
router.get('/shuffle/names/all', (req, res) => {
    if(req.isAuthenticated() && !req.user.roles.includes('Shuffle Banned')){
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Get_All_Shuffle_Names();', (error, results, fields) => {
                connection.release();
                if (error) throw error;
                res.send(results);
            });
        });
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Returns back all data associated with the @param shuffleID
router.get('/shuffle/all/:shuffleID', (req, res) => {
    if(req.isAuthenticated() && !req.user.roles.includes('Shuffle Banned')){
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Get_Shuffle_By_ID(' + dbpool.escape(req.params.shuffleID) + ');', (error, results, fields) => {
                connection.release();
                if (error) throw error;
                res.send(results);
            });
        });
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Returns back the shuffle with active registration
router.get('/shuffle/registration/active', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_Active_Shuffle();', (error, results, fields) => {
            connection.release();
            if (error) throw error;
            res.send(results);
        });
    });
});

//Returns back the shuffle progress for the request shuffleID
router.post('/shuffle/details', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_All_Shuffle_Submissions('   + dbpool.escape(req.body.shuffleID) +
                                                    ',' + dbpool.escape(req.body.steamid) +
                                                    ');',
        (error, results, fields) => {
            connection.release();
            if (error) throw error;
            res.send(results);
        });
    });
});

export default router;
