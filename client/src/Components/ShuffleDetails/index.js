import React, {Component} from 'react';
import { Card } from '@material-ui/core';
import "./ShuffleDetails.css";

class ShuffleDetails extends Component {
  constructor(){
    super();

    this.state = {
      shuffleName: "Shuffle",
    }
  }

  componentDidMount(){
    let payload = {
        shuffleID: this.props.activeID,
        steamid: this.props.steamid,
    };
    
    fetch('/api/shuffle/details', {
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
      if(typeof resJson[0][0] !== 'undefined'){
        let userDict = {
            shuffleName: resJson[0][1]['Name']
        };
        resJson[0].forEach(sub => {
            console.log(sub);
            userDict[sub.SteamID] = {
                personaname: sub.personaname,
                avatarfull: sub.avatarfull,
            }
        });
        return userDict;
      } else {
          return {};
      }
    }).then(userDict => {
        if(Object.entries(userDict).length !== 0 && userDict.constructor === Object){
            console.log(userDict);
            this.setState({
                shuffleName: userDict.shuffleName,
            });
        }
    }).catch(error => console.error(error));
  }

  render () {
    return (
      <>
        <Card id="ShuffleDetails" tabIndex={-1}>
            <h1 id="modal-title">{this.state.shuffleName}</h1>
            <p id="modal-description">Contributors listed for each round.</p>
            <h2>Round 1</h2>
            <hr />

        </Card>
      </>
    );
  }
}

export default ShuffleDetails;