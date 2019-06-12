import Shuffle from './Shuffle'

const onload = () => {

    fetch('/api/shuffle/active', {credentials: 'include'})
    .then(res =>{
        return res.json();
        //Return res in JSON form to next then()
    }).then(resJson =>{
        if(typeof resJson[0][0] !== 'undefined'){
            let roundOne = new Date(resJson[0][0].RoundOneStart);

            let roundTwo = new Date(resJson[0][0].RoundTwoStart);

            let roundThree = new Date(resJson[0][0].RoundThreeStart);

            let roundFour = new Date(resJson[0][0].RoundFourStart);

            let endDate = new Date(resJson[0][0].EndDate);

            let activeShuffle = new Shuffle(
                resJson[0][0].Shuffle_ID,
                resJson[0][0].Name,
                roundOne,
                roundTwo,
                roundThree,
                roundFour,
                endDate,
                resJson[0][0].Description
            );
            return activeShuffle;
        } else {
            return {};
        }
        //Create obj and return to next then()
    }).then(shuffleObj => {
        if(shuffleObj.hasOwnProperty('_Shuffle_ID')){
            document.querySelector('#activeShuffle').innerHTML = shuffleObj.activeDiv();
            document.querySelector('#submitEntrySection').innerHTML = shuffleObj.submissionDiv();
            document.querySelector('#submitEntrySection').classList.toggle('hidden');
            document.querySelector('#nextRoundTimer').innerHTML = shuffleObj.timerDiv();
            document.querySelector('#nextRoundTimer').classList.toggle('hidden');
            setInterval(() => {
                document.querySelector('#nextRoundTimer').innerHTML = shuffleObj.timerDiv();
            }, 1000);
            document.querySelector('#shuffleIDHidden').value = shuffleObj.Shuffle_ID;
            shuffleObj.workshopDiv();

            //Events to toggle placeholder on submission field for better UX
            document.querySelector('#submissionURL').addEventListener('focusin', (event) => {
                event.target.setAttribute('placeholder', '');
            });
            document.querySelector('#submissionURL').addEventListener('focusout', (event) => {
                event.target.setAttribute('placeholder', 'Type/paste your workshop link here');
            });

            document.querySelector('#submitShuffleUser').addEventListener('click', event => {
                if(!document.querySelector('.contestSubmissionForm').checkValidity()){
                    return;
                } else {
                    event.preventDefault();
                    let payload = {
                        submissionURL: document.querySelector('#submissionURL').value,
                        shuffleID: document.querySelector('#shuffleIDHidden').value,
                        verifySubmissionCB: 1
                    };

                    fetch('/api/shuffle/submit', {
                        credentials: 'include',
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(res => {
                        return res.json();
                    }).then(resJson => {
                            let notify = document.querySelector('#showErrorSuccess');
                            notify.classList.toggle('hidden');
                            if(resJson.result === 'Success'){
                                notify.innerHTML = '<h1 class="success-notification">Shuffle submitted successfully. Thank you for participating in our community events!</h1>';
                            } else if(resJson.result === 'No Terms'){
                                notify.innerHTML = '<h1 class="error-notification">Shuffle failed to submit. You must accepts the terms above.</h1>';
                            } else if(resJson.result === 'Bad URL'){
                                notify.innerHTML = '<h1 class="error-notification">Shuffle failed to submit. Please verify the workshop link and try again.</h1>';
                            }
                            setTimeout(()=>{
                                notify.innerHTML = '';
                                notify.classList.toggle('hidden');
                            }, 5000);
                    }).catch(error => console.error(error));
                }
            });
        }  else {
            let tempString = '';
            tempString += 'The shuffle has ended.<br>Be sure to check out the live stream for future website announcements and more!<br>';
            tempString += '<a href="https://www.twitch.tv/r3ddragons" target="_blank"><img style="width: 35%; margin-top: 3rem;" src="img/twitch_purple_combo.svg"></a>';
            document.querySelector('#activeShuffle').innerHTML = tempString;
        }
    }).catch(error => {
        document.querySelector('#showErrorSuccess').innerHTML = 
            '<h1 class="error-notification">Unauthorized Access. Please contact the administrator.</h1>';
        console.error(error);
    });
}

export default onload;