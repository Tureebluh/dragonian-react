import express from 'express';
import dbpool from '../dbpool';
import fetch from 'node-fetch';

const router = express.Router();
let ShuffleVotingOptions = {};

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

//Returns back the shuffle options and caches for one hour
router.get('/shuffle/voting/options', (req, res) => {
    if(ShuffleVotingOptions.Results && (ShuffleVotingOptions.Modified + 3600000) > Date.now())
    {
        res.send(ShuffleVotingOptions.Results);
    }
    else
    {
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Get_Shuffle_Options(true);', (error, results, fields) => {
                connection.release();
                if (error) throw error;
                ShuffleVotingOptions.Results = results;
                ShuffleVotingOptions.Modified = Date.now();
                res.send(results);
            });
        });
    }
});

//Returns back the collaboration youtube video links
router.get('/shuffle/youtube/collab', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_Collab_Links(true);', (error, results, fields) => {
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