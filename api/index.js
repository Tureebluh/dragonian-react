import express from 'express';
import dbpool from '../dbpool';
import fetch from 'node-fetch';

const router = express.Router();
let ShuffleVotingOptions = {};

/*********************************************************************************************************************************
*
*                                                        CONTENT-MANAGEMENT
*
**********************************************************************************************************************************/
//Returns back the collaboration youtube video links
router.get('/youtube/collab', (req, res) => {
    dbpool.getConnection( (err, connection) => {
        if (err) throw err;
        connection.query('CALL Get_Collab_Links(true);', (error, results, fields) => {
            connection.release();
            if (error) throw error;
            res.send(results);
        });
    });
});

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
                                res.send({result: true});
                                connection.release();
                                if (error) throw error;
                        });
                    });
                } else {
                    res.send({result: false});
                }
            })
            .catch(err => console.error(err));
        } else {
            res.send({result: true});
        }
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


//Returns back the users voted status
router.get('/shuffle/voting/verify', (req, res) => {
    if(req.isAuthenticated()){
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Get_Active_Voting();', (error, results, fields) => {
                if (error) throw error;
                
                if(results[0][0].Active === '1')
                {
                    connection.query('CALL Verify_Shuffle_Voting(' + dbpool.escape(req.user.steamid) + ');',
                    (errorTwo, resultsTwo, fields) => {
                        connection.release();
                        if (errorTwo) throw error;
                        if(resultsTwo[0][0].Voted === '1')
                        {
                            req.user.voted = true;
                            res.send({Voted: true, Active: true});
                        }
                        else
                        {
                            req.user.voted = false;
                            res.send({Voted: false, Active: true});
                        }
                    });
                }
                else
                {
                    res.send({Active: false});
                }
            });
            
        });
    }
    else
    {
       res.send({Active: false});
    }
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

//Returns back the shuffle progress for the request shuffleID
router.post('/shuffle/voting/submit', (req, res) => {
    if(!req.body.shuffleStyleID || !req.body.shuffleThemeID)
    {
        res.send({Error: "Submission field value missing. Vote was not successfully submitted."});
    }
    else if(req.user.voted)
    {
        res.send({Error: "You have already voted."});
    }
    else if(!req.isAuthenticated())
    {
        res.send({Error: "You're not logged in."});
    }
    else if(!req.user.verified)
    {
        res.send({Error: "You must verify your account on the profile page."});
    }
    else if(req.user.roles.includes('Shuffle Banned'))
    {
        res.send({Error: "You do not have access to Shuffle Events."});
    }
    else
    {
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Insert_Voting_Submission('   + dbpool.escape(req.body.shuffleThemeID) +
                                                        ',' + dbpool.escape(req.body.shuffleStyleID) +
                                                        ',' + dbpool.escape(req.user.steamid) +
                                                        ');',
            (error, results, fields) => {
                connection.release();
                if (error) throw error;
                req.user.voted  = true;
                res.send({Success: "Vote successfully submitted. Thank you for participating!"});
            });
        });
    }
});

//Returns back all the shuffle_ID's and Name's of all the shuffles
router.post('/shuffle/registration/submit', (req, res) => {
    if(!req.isAuthenticated())
    {
        res.send({Error: "You're not logged in."});
    } 
    else if(req.user.roles.includes('Shuffle Banned'))
    {
        res.send({Error: "You do not have access to Shuffle Events."});
    }
    else if(!req.body.ShuffleID)
    {
        res.send({Error: "Error: No ShuffleID Provided. Please contact the administrator if the problem continues."});
    }
    else if(!req.user.verified)
    {
        res.send({Error: "You must verify your account on the profile page."});
    }
    else
    {
        dbpool.getConnection( (err, connection) => {
            if (err) throw err;
            connection.query('CALL Insert_Shuffle_Submission(' + 
                                        dbpool.escape(req.body.ShuffleID) + ',' + 
                                        dbpool.escape(req.user.steamid) +
                                         ');', (error, results, fields) => {
                connection.release();
                if (error) throw error;
                if(results.affectedRows)
                {
                    res.send({Success: "Your entry into the Shuffle was successful. Thank you for your participation!"});
                }
                else
                {
                    res.send({Success: "You're already participating in this Shuffle."});
                }
            });
        });
    }
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