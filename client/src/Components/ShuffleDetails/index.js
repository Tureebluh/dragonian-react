import React, {Component} from 'react';
import { GridList, GridListTile, Card, Avatar, Typography } from '@material-ui/core';
import "./ShuffleDetails.css";

class ShuffleDetails extends Component {
  constructor(){
    super();
    this.state = {
      shuffleName: "Shuffle",
      submissions: [],
      users: [],
      controller: new AbortController()
    }
  }

  componentDidMount(){
    let payload = {
        shuffleID: this.props.activeID,
        steamid: this.props.steamid,
    };
    
    let submissions = [];
    let users = [];
    let idList = new Set();

    fetch('/api/shuffle/details', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: this.state.controller.signal
    }).then(res => {
        return res.json();
    }).then(resJson => {
      if(typeof resJson[0][0] !== 'undefined'){
        resJson[0].forEach(sub => {
            submissions.push(sub);
            if(!idList.has(sub.r1_SteamID)){
              users.push({
                personaname: sub.r1_personaname,
                avatarfull: sub.r1_avatarfull,
                SteamID: sub.r1_SteamID
              });
              idList.add(sub.r1_SteamID);
            }
            if(!idList.has(sub.r2_SteamID)){
              users.push({
                personaname: sub.r2_personaname,
                avatarfull: sub.r2_avatarfull,
                SteamID: sub.r2_SteamID
              });
              idList.add(sub.r2_SteamID);
            }
            if(!idList.has(sub.r3_SteamID)){
              users.push({
                personaname: sub.r3_personaname,
                avatarfull: sub.r3_avatarfull,
                SteamID: sub.r3_SteamID
              });
              idList.add(sub.r3_SteamID);
            }
            if(!idList.has(sub.r4_SteamID)){
              users.push({
                personaname: sub.r4_personaname,
                avatarfull: sub.r4_avatarfull,
                SteamID: sub.r4_SteamID
              });
              idList.add(sub.r4_SteamID);
            }
        });
        return {
          shuffleName: resJson[0][1]['Name'],
          submissions: submissions,
          users: users,
        };
      } else {
          return {};
      }
    }).then(result => {
        if(typeof result.submissions[0] !== undefined){
            console.log(result);
            this.setState({
                submissions: result.submissions,
                users: result.users,
                shuffleName: result.shuffleName,
            });
        }
    }).catch(error => console.error(error));
  }

  componentWillUnmount(){
    this.state.controller.abort();
  }

  render () {
    return (
      <>
        <Card id="ShuffleDetails" tabIndex={-1}>
            <h1 id="modal-title">{this.state.shuffleName}</h1>
            <p id="modal-description">All contributors for these submissions</p>
            <GridList cellHeight={100} cols={4} spacing={20} className="GridList">
              {this.state.users.map(user => (
                <GridListTile key={user.SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={"/profile/" + user.SteamID}>
                    <Avatar alt="Steam Profile Picture" src={user.avatarfull} className="ShuffleParticipant" />
                    <Typography>{user.personaname}</Typography>
                  </a>
                </GridListTile>
              ))}
            </GridList>

            <h2>Final Round</h2>
            <hr />
            <GridList cellHeight={75} cols={4} spacing={20} className="GridList">
              {this.state.submissions.map(sub => (
                <GridListTile key={sub.r4_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r4_workshop_URL} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Round Four" className="Round RoundFour">R4</Avatar>
                  </a>
                </GridListTile>
              ))}
            </GridList>

            <h2>Third Round</h2>
            <hr />
            <GridList cellHeight={75} cols={4} spacing={20} className="GridList">
              {this.state.submissions.map(sub => (
                <GridListTile key={sub.r3_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r3_workshop_URL} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Round Three" className="Round RoundThree">R3</Avatar>
                  </a>
                </GridListTile>
              ))}
            </GridList>

            <h2>Second Round</h2>
            <hr />
            <GridList cellHeight={75} cols={4} spacing={20} className="GridList">
              {this.state.submissions.map(sub => (
                <GridListTile key={sub.r2_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r2_workshop_URL} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Round Two" className="Round RoundTwo">R2</Avatar>
                  </a>
                </GridListTile>
              ))}
            </GridList>

            <h2>First Round</h2>
            <hr />
            <GridList cellHeight={75} cols={4} spacing={20} className="GridList">
              {this.state.submissions.map(sub => (
                <GridListTile key={sub.r1_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r1_workshop_URL} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Round One" className="Round RoundOne">R1</Avatar>
                  </a>
                </GridListTile>
              ))}
            </GridList>
            <Typography className="disclaimer">Clicking one of the buttons above will open the workshop link in a new tab.</Typography>
        </Card>
      </>
    );
  }
}

export default ShuffleDetails;