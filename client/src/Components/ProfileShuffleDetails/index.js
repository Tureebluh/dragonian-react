import React, {Component} from 'react';
import { GridList, GridListTile, Card, Avatar, Typography, Tooltip, Zoom, Backdrop, CircularProgress } from '@material-ui/core';
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
            this.setState({
                submissions: result.submissions,
                users: result.users,
                shuffleName: result.shuffleName,
                loading: false,
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
            <h3 id="modal-description">My Team Members</h3>
            <GridList cellHeight={120} cols={4} spacing={20} className="GridList">
              {this.state.users.map(user => (
                <GridListTile key={user.SteamID} rows={1} cols={1} className="GridListTile">
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title={"Go to " + user.personaname + "'s Profile"}>
                    <a href={"/profile/" + user.SteamID}>
                      <Avatar alt="Steam Profile Picture" src={user.avatarfull} className="ShuffleParticipant" />
                      <Typography>{user.personaname}</Typography>
                    </a>
                  </Tooltip>
                </GridListTile>
              ))}
            </GridList>
            <Backdrop className="Backdrop" open={this.state.loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>
        </Card>
      </>
    );
  }
}

export default ProfileShuffleDetails;