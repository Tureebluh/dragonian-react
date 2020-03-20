import React, {Component} from 'react';
import { GridList, GridListTile, Card, Avatar, Typography, Backdrop, CircularProgress } from '@material-ui/core';
import "./ProfileShuffleDetails.css";

class ProfileShuffleDetails extends Component {
  constructor(){
    super();
    this.state = {
      shuffleName: "Shuffle",
      submissions: [],
      users: [],
      controller: new AbortController(),
      loading: false,
    }
  }

  componentDidMount(){
    this.setState({
      loading: true,
    });
    let payload = {
        shuffleID: this.props.activeID,
        steamid: this.props.steamid,
    };
    
    let submissions = [];
    let users = {};
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
              users[sub.r1_SteamID] = {
                personaname: sub.r1_personaname,
                avatarfull: sub.r1_avatarfull,
                SteamID: sub.r1_SteamID
              };
              idList.add(sub.r1_SteamID);
            }
            if(!idList.has(sub.r2_SteamID)){
              users[sub.r2_SteamID] = {
                personaname: sub.r2_personaname,
                avatarfull: sub.r2_avatarfull,
                SteamID: sub.r2_SteamID
              };
              idList.add(sub.r2_SteamID);
            }
            if(!idList.has(sub.r3_SteamID)){
              users[sub.r3_SteamID] = {
                personaname: sub.r3_personaname,
                avatarfull: sub.r3_avatarfull,
                SteamID: sub.r3_SteamID
              };
              idList.add(sub.r3_SteamID);
            }
            if(!idList.has(sub.r4_SteamID)){
              users[sub.r4_SteamID] = {
                personaname: sub.r4_personaname,
                avatarfull: sub.r4_avatarfull,
                SteamID: sub.r4_SteamID
              };
              idList.add(sub.r4_SteamID);
            }
        });
        return {
          shuffleName: resJson[0][1]['Name'],
          submissions: submissions,
          users: users
        };
      } else {
          return {};
      }
    }).then(result => {
        if(typeof result.submissions !== undefined){
            this.setState({
                submissions: result.submissions,
                users: result.users,
                shuffleName: result.shuffleName,
                loading: false
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
        <Card id="ProfileShuffleDetails" tabIndex={-1}>
            <h1 id="modal-title">{this.state.shuffleName}</h1>
            <p id="modal-description">Contributors for each round</p>
            <hr />
            <GridList cellHeight={25} cols={4} spacing={20} className="GridList Header">
              <GridListTile key={1} rows={1} cols={1} className="GridListTile">
                <Typography>R1</Typography>
              </GridListTile>
              <GridListTile key={2} rows={1} cols={1} className="GridListTile">
                <Typography>R2</Typography>
              </GridListTile>
              <GridListTile key={3} rows={1} cols={1} className="GridListTile">
                <Typography>R3</Typography>
              </GridListTile>
              <GridListTile key={4} rows={1} cols={1} className="GridListTile">
                <Typography>R4</Typography>
              </GridListTile>
            </GridList>
            <hr />
            {this.state.submissions.map(sub => (
              <GridList cellHeight={75} cols={4} spacing={20} className="GridList Submission">
                <GridListTile key={"R1" + sub.r1_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r1_profileurl} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Steam Profile Picture" src={this.state.users[sub.r1_SteamID].avatarfull} className="ShuffleParticipant" />
                  </a>
                </GridListTile>
                <GridListTile key={"R2" + sub.r2_SteamID} rows={1} cols={1} className="GridListTile">
                <a href={sub.r2_profileurl} target="_BLANK" rel="noopener noreferrer">
                  <Avatar alt="Steam Profile Picture" src={this.state.users[sub.r2_SteamID].avatarfull} className="ShuffleParticipant" />
                </a>
                </GridListTile>
                <GridListTile key={"R3" + sub.r3_SteamID} rows={1} cols={1} className="GridListTile">
                  <a href={sub.r3_profileurl} target="_BLANK" rel="noopener noreferrer">
                    <Avatar alt="Steam Profile Picture" src={this.state.users[sub.r3_SteamID].avatarfull} className="ShuffleParticipant" />
                  </a>
                </GridListTile>
                <GridListTile key={"R4" + sub.r4_SteamID} rows={1} cols={1} className="GridListTile">
                <a href={sub.r4_profileurl} target="_BLANK" rel="noopener noreferrer">
                  <Avatar alt="Steam Profile Picture" src={this.state.users[sub.r4_SteamID].avatarfull} className="ShuffleParticipant" />
                </a>
                </GridListTile>
              </GridList>
            ))}

            <Backdrop className="Backdrop" open={this.state.loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>
        </Card>
      </>
    );
  }
}

export default ProfileShuffleDetails;