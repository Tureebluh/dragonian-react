import dbpool from '../dbpool';

class ServerShuffle {
    constructor(Shuffle_ID) {
        this._Shuffle_ID = Shuffle_ID;
    }

    set Shuffle_ID(Shuffle_ID){
        this._Shuffle_ID = Shuffle_ID;
    }
    get Shuffle_ID(){
        return this._Shuffle_ID;
    }

    getActiveShuffle(){
        return new Promise((resolve, reject) => {
            dbpool.getConnection((err, connection) => {
                if (err) { throw err; }
                connection.query('CALL Get_Active_Shuffle();', (error, results, fields) => {
                    connection.release();
                    if (error) { throw error; }
                    if (typeof results[0][0] !== 'undefined') {
                        if(results[0][0].Shuffled === 1){
                            reject('Has already been shuffled');
                        } else {
                            resolve(new ServerShuffle(results[0][0].ShuffleID));
                        }
                    } else {
                        reject('No active shuffle');
                    }
                });
            });
        });
    }

    getSubmissions()
    {
        return new Promise((resolve, reject) => {
            dbpool.getConnection((err, connection) => {
                if (err) { throw err; }
                connection.query('CALL Get_Submissions_For_Shuffling(' + dbpool.escape(this.Shuffle_ID) + ');', (error, results, fields) => {
                    connection.release();
                    if (error) { throw error; }
                    
                    if (typeof results[0][0] !== 'undefined') {
                        resolve(results);
                    }
                    else
                    {
                        reject("Failed");
                    }
                });
            });
        });   
    }

    //Shuffle pieces for given round
    shuffleByRound(round, result){
        return new Promise((resolve, reject) => {
            let totalIteration = 0;
            let assigned = [];
            
            round = Number(round);
            if(round === 2)
            {
                this.shuffledArray = result;
            }
            
            this.attemptShuffle(assigned, this.shuffledArray, round, totalIteration)
            .then(shuffled => {
                this.shuffledArray = shuffled;

                dbpool.getConnection((err, connection) => {
                    if (err) { throw err; }
                    this.shuffledArray[0].forEach(element => {
                        switch(round){
                            case 2:
                                this.updateSubmissionInDB(element['shuffle_submission_ID'], element['r2_SteamID'], round, connection)
                                .then(message => {
                                    console.log(message);
                                }).catch(err => {
                                    console.error(err);
                                });
                                break;
                            case 3:
                                this.updateSubmissionInDB(element['shuffle_submission_ID'], element['r3_SteamID'], round, connection)
                                .then(message => {
                                    console.log(message);
                                }).catch(err => {
                                    console.error(err);
                                });
                                break;
                            case 4:
                                this.updateSubmissionInDB(element['shuffle_submission_ID'], element['r4_SteamID'], round, connection)
                                .then(message => {
                                    console.log(message);
                                }).catch(err => {
                                    console.error(err);
                                });
                                break;
                        }
                    });
                    connection.release();
                    resolve("Success");
                });
            })
            .catch(err => {
                reject(err);
            });
        });
    }

    attemptShuffle(assigned, results, round, totalIteration){
        return new Promise((resolve, reject) => {
            //Loop through each shuffle submission received - element.r1_steamID will be the assigned ID
            results[0].forEach(element => {
                //Create container to hold steamid of submission after it has been assigned a person
                let match = false;
                let index = 0;
                //Loop until a random submission is selected that element(user) hasn't worked on
                while(!match){
                    if(totalIteration > ((results[0].length) * 5)){
                        reject('Failed');
                    }
                    totalIteration++;
                    //Index will randomly select a submission to match
                    index = Math.floor(Math.random()*results[0].length);
                    
                    //Do additional checks for each round. Ensures user never works on the same piece twice
                    //Once a valid submission is randomly selected, user is added to assigned
                    switch(round){
                        case 2:
                            if(!assigned.includes(results[0][index]['r1_SteamID'])){
                                if(element['r1_SteamID'] !== results[0][index]['r1_SteamID']){
                                    results[0][index]['r2_SteamID'] = element['r1_SteamID'];
                                    assigned.push(results[0][index]['r1_SteamID']);
                                    match = true;
                                }
                            } else if(assigned.length === results[0].length) {
                                match = true;
                            }
                            break;
                        case 3:
                            if(!assigned.includes(results[0][index]['r1_SteamID'])){
                                if((element['r1_SteamID'] !== results[0][index]['r1_SteamID']) &&
                                    (element['r1_SteamID'] !== results[0][index]['r2_SteamID'])){

                                    results[0][index]['r3_SteamID'] = element['r1_SteamID'];
                                    assigned.push(results[0][index]['r1_SteamID']);
                                    match = true;
                                }
                                //If selected submission has been assigned, see if it would be a good fit for this user as well
                                //Check to make sure already assigned user has another valid submission to use
                            } else if((element['r1_SteamID'] !== results[0][index]['r1_SteamID']) &&
                                        (element['r1_SteamID'] !== results[0][index]['r2_SteamID']) ){
                                for(let k = 0; k < results[0].length; k++){
                                    let elem = results[0][k];

                                    totalIteration++;
                                    if((elem['r1_SteamID'] !== results[0][index]['r3_SteamID']) &&
                                        (elem['r2_SteamID'] !== results[0][index]['r3_SteamID']) &&
                                        (elem['r3_SteamID'] !== results[0][index]['r3_SteamID']) &&
                                        (!assigned.includes(elem['r1_SteamID']))){
                                        
                                        elem['r3_SteamID'] = results[0][index]['r3_SteamID'];
                                        results[0][index]['r3_SteamID'] = element['r1_SteamID'];
                                        assigned.push(elem['r1_SteamID']);
                                        match = true;
                                        break;
                                    }
                                }
                            } else if(assigned.length === results[0].length) {
                                match = true;
                            }
                            break;
                        case 4:
                            if(!assigned.includes(results[0][index]['r1_SteamID'])){
                                if((element['r1_SteamID'] !== results[0][index]['r1_SteamID']) &&
                                    (element['r1_SteamID'] !== results[0][index]['r2_SteamID']) &&
                                    (element['r1_SteamID'] !== results[0][index]['r3_SteamID']) ){
                                    
                                    results[0][index]['r4_SteamID'] = element['r1_SteamID'];
                                    assigned.push(results[0][index]['r1_SteamID']);
                                    match = true;
                                }
                                //If selected submission has been assigned, see if it would be a good fit for this user as well
                                //Check to make sure already assigned user has another valid submission to use
                            } else if((element['r1_SteamID'] !== results[0][index]['r1_SteamID']) &&
                                        (element['r1_SteamID'] !== results[0][index]['r2_SteamID']) &&
                                            (element['r1_SteamID'] !== results[0][index]['r3_SteamID']) ){
                                //Loop through each piece finding a match for our randomly selected BP
                                for(let k = 0; k < results[0].length; k++){
                                    let elem = results[0][k];

                                    totalIteration++;
                                    if((elem['r1_SteamID'] !== results[0][index]['r4_SteamID']) &&
                                        (elem['r2_SteamID'] !== results[0][index]['r4_SteamID']) &&
                                        (elem['r3_SteamID'] !== results[0][index]['r4_SteamID']) &&
                                        (!assigned.includes(elem['r1_SteamID']))){
                                        
                                        elem['r4_SteamID'] = results[0][index]['r4_SteamID'];
                                        results[0][index]['r4_SteamID'] = element['r1_SteamID'];
                                        assigned.push(elem['r1_SteamID']);
                                        match = true;
                                        break;
                                    }
                                }
                            } else if(assigned.length === results[0].length) {
                                match = true;
                            }
                            break;
                    }
                }
            });//End of forEach
            resolve(results);
        });   
    }

    updateSubmissionInDB(subID, steamID, round, connection){
        return new Promise((resolve, reject) => {
            connection.query('CALL Update_Shuffle_Submission(' + dbpool.escape(subID) + ',' + 
                                        dbpool.escape(steamID) + ',' +
                                        dbpool.escape(round) + ');', (error, results, fields) => {
                resolve(steamID + ' assigned to ' + subID + ' for Round ' + round);
            });
        });
    }
}

export default ServerShuffle;