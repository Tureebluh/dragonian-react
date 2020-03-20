import express from 'express';
import dbpool from '../dbpool';
import ServerShuffle from './ServerShuffle';

const router = express.Router();


router.get('/roles/shuffleban/all', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;

            connection.query('CALL Get_Users_By_Role(' + '"Shuffle Banned"' + ');', 
            (error, results, fields) => {
                connection.release();
                if (error) throw error;
                res.send(results);
            });
        });
    } else {
        res.redirect('/');
    }
});

router.post('/roles/add/shuffleban', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;

            if(req.body.steamid !== '') {
                connection.query('CALL Insert_User_Role_Assoc(' + dbpool.escape(req.body.steamid) + ',' + '"Shuffle Banned"' + ');', 
                (error, results, fields) => {
                    connection.release();
                    if (error) throw error;
                    res.send({result: 'Success'});
                });
            } else {
                res.send({});
            }
        });
    } else {
        res.redirect('/');
    }
});

router.post('/roles/remove/shuffleban', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
            dbpool.getConnection( (err, connection) => {
                if(err) throw err;
                req.body.steamid.forEach(element => {
                    console.log(element);
                    connection.query('CALL Delete_User_Role_Assoc(' + dbpool.escape(element) + ',' + '"Shuffle Banned"' + ');', 
                    (error, results, fields) => {
                        if (error) throw error;
                    });
                });
            connection.release();
            res.send({result: 'Success'});
            });
    } else {
        res.redirect('/');
    }
});

router.get('/roles/siteban/all', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;

            connection.query('CALL Get_Users_By_Role(' + '"Banned"' + ');', 
            (error, results, fields) => {
                connection.release();
                if (error) throw error;
                res.send(results);
            });
        });
    } else {
        res.redirect('/');
    }
});

router.post('/roles/add/siteban', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;

            if(req.body.steamid !== '') {
                connection.query('CALL Insert_User_Role_Assoc(' + dbpool.escape(req.body.steamid) + ',' + '"Banned"' + ');', 
                (error, results, fields) => {
                    connection.release();
                    if (error) throw error;
                    res.send({result: 'Success'});
                });
            } else {
                res.send({});
            }
        });
    } else {
        res.redirect('/');
    }
});

router.post('/roles/remove/siteban', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
            dbpool.getConnection( (err, connection) => {
                if(err) throw err;
                req.body.steamid.forEach(element => {
                    console.log(element);
                    connection.query('CALL Delete_User_Role_Assoc(' + dbpool.escape(element) + ',' + '"Banned"' + ');', 
                    (error, results, fields) => {
                        if (error) throw error;
                    });
                });
            connection.release();
            res.send({result: 'Success'});
            });
    } else {
        res.redirect('/');
    }
});

//Administrators can POST to this endpoint for shuffle creation
router.get('/create/shuffle', (req, res) => {
    if(req.isAuthenticated() && (req.user.roles.includes('Administrator'))){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;
            connection.query('CALL Create_Shuffle();',
            (error, results, fields) => {
                if (error) throw error;
                connection.release();
                if(results.affectedRows)
                {
                    res.send({Success: true});
                }
                else
                {
                    res.send({Failed: true});
                }
            });
        });
    } else {
        res.send({Error: "Unauthorized access."})
    }
});

//Administrators can POST to this endpoint for shuffle creation
router.get('/voting/stop', (req, res) => {
    if(req.isAuthenticated() && (req.user.roles.includes('Administrator'))){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;
            connection.query('CALL Get_Active_Voting();', (error, results, fields) => {
                if (error) throw error;
                if(results[0][0].Active === '1')
                {
                    connection.query('CALL End_Shuffle_Voting(' + dbpool.escape(results[0][0]['Shuffle_ID']) + ');',
                    (error, results, fields) => {
                        if (error) throw error;
                        connection.release();
                        if(results.affectedRows)
                        {
                            res.send({Success: true});
                        }
                        else
                        {
                            res.send({Failed: true});
                        }
                    });
                }
                else
                {
                    res.send({Failed: true});
                }
            });
        });
    } else {
        res.send({Error: "Unauthorized access."})
    }
});

//Shuffle players for every round
router.get('/shuffleplayers', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        //Create server shuffle object
        let serverShuffle = new ServerShuffle();

        //Check for active shuffle
        serverShuffle.getActiveShuffle()
        .then((shuffle)=>{
            console.log('\nActive shuffle found: ID#' + shuffle['Shuffle_ID']);
            let resultJson = {};
            let err = false;
            shuffle.getSubmissions()
            .then(result => {
                if(result)
                {
                    for(let i = 2; i <= 4; i++)
                    {
                        resultJson = TryShuffleRound(i, shuffle, result);
                        if(resultJson.Error)
                        {
                            err = true;
                        }
                    }
                    if(!err)
                    {
                        res.send({Success: true});
                    }
                    else
                    {
                        res.send({Error: err});
                    }
                }
            })
            .catch(err => {
                res.send({Error: err});
            });
        }).catch(err => {
            res.send({Error: err});
        });
    } else {
        res.send({result: 'Unauthorized Access'});
    }
});
async function TryShuffleRound(round, shuffle, result)
{
    await shuffle.shuffleByRound(round, result)
    .then(success => {
        return {Success: success};
    }).catch(err => {
        return {Error: err};
    });
}


//Search database for user matching search query
router.post('/search/users', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        dbpool.getConnection( (err, connection) => {
            if(err) throw err;

            if(req.body.search !== '') {
                connection.query('CALL Search_Users(' + dbpool.escape(req.body.search) + ');', 
                (error, results, fields) => {
                    connection.release();
                    if (error) throw error;
                    res.send(results);
                });
            } else {
                res.send({});
            }
        });
    } else {
        res.redirect('/');
    }
});

export default router;