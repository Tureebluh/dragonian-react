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

//Administrators can POST to this endpoint for contest creation
router.post('/create/shuffle', (req, res) => {
    if(req.isAuthenticated() && (req.user.roles.includes('Administrator') || req.user.roles.includes('Shuffle Moderator'))){
        dbpool.getConnection( (err, connection) => {

            let roundOne = new Date(req.body.shuffleRoundOne.toString());

            let roundTwo = new Date(req.body.shuffleRoundTwo.toString());

            let roundThree = new Date(req.body.shuffleRoundThree.toString());

            let roundFour = new Date(req.body.shuffleRoundFour.toString());

            let endDate = new Date(req.body.shuffleEndDate.toString());

            if(req.body.shuffleID > 0) {
                connection.query('CALL Upsert_Shuffle(' + dbpool.escape(req.body.shuffleID) +
                                                            ',' + dbpool.escape(req.body.shuffleName) +
                                                            ',' + dbpool.escape(roundOne.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundTwo.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundThree.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundFour.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(endDate.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(req.body.shuffleDescription) + 
                                                        ',' + ((typeof req.body.shuffleActive === 'undefined') ? 0 : 1) +
                                                        ',@insertID);',
                (error, results, fields) => {
                    if (error) throw error;
                });
                
            } else {
                let insertID = 0;
                connection.query('CALL Upsert_Shuffle(' + null +
                                                            ',' + dbpool.escape(req.body.shuffleName) +
                                                            ',' + dbpool.escape(roundOne.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundTwo.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundThree.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(roundFour.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(endDate.toISOString().replace('T', ' ')) +
                                                            ',' + dbpool.escape(req.body.shuffleDescription) + 
                                                        ',' + ((typeof req.body.shuffleActive === 'undefined') ? 0 : 1) +
                                                        ',@insertID);', 
                (error, results, fields) => {
                    if (error) throw error;
                });
            }

            if(err) throw err;

            connection.release();
            res.redirect('/admin/shuffle' + '?result=success');
        });
    } else {
        res.redirect('/auth/verification/failed');
    }
});

//Shuffle players for every round
router.get('/shuffleplayers', (req, res) => {
    if(req.isAuthenticated() && req.user.roles.includes('Administrator')){
        //Create server shuffle object to get active shuffle
        let serverShuffle = new ServerShuffle();

        //Check for active shuffle and save to servershuffle obj
        serverShuffle.getActiveShuffle()
        .then((shuffle)=>{
            serverShuffle = shuffle;
            console.log('\nActive shuffle found: ID#' + serverShuffle['Shuffle_ID']);
            let msg = "";
            let err = "";
            for(let i = 2; i <= 4; i++)
            {
                msg = TryShuffleRound(i, serverShuffle);
                if(msg !== "Success")
                {
                    err = msg;
                }
            }
            if(err === "")
            {
                res.send({result: msg})
            }
            else
            {
                res.send({result: err});
            }
            
        }).catch(err => {
            res.send({result: err});
        });
    } else {
        res.send({result: 'No Active Shuffle'});
    }
});
async function TryShuffleRound(round, serverShuffle)
{
    console.log('\nAttempting shuffle of round ' + round);
    await serverShuffle.shuffleByRound(round)
    .then(msg => {
        return msg;
    }).catch(err => {
        return err;
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