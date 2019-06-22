import React, {Component} from 'react';
import "./Profile.css";
import { Avatar, Grid, Button } from '@material-ui/core';

class Profile extends Component {
  constructor(){
    super();

    this.state = {
        userPic: '',
        userName: '',
        lastLogin: '',
        CreatedDate: '',
        verified: 0
    }
  }

  componentDidMount(){
    let payload = {
        steamid: this.props.match.params.steamid
    };

    fetch('/api/profile/user/details', {
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
        this.setState({
            userPic: resJson[0][0].avatarfull,
            userName: resJson[0][0].personaname,
            lastLogin: new Date(resJson[0][0].LastLogIn).toDateString(),
            CreatedDate: new Date(resJson[0][0].CreatedDate).toDateString(),
            verified: resJson[0][0].verified
        });
    }
    }).catch(error => console.error(error));
  }

  render () {
    return (
      <>
        <Grid container className="ProfileContainer">
            {(this.state.userPic !== '') ? 
                <Grid item xs={12} lg={6} className="UserPanel">
                    <Avatar className="UserAvatar" src={this.state.userPic} alt="User Profile Picture"/>
                    <h3>{this.state.userName}</h3>
                    <h6>Member since: {this.state.CreatedDate}</h6>
                    <h6>Last Login: {this.state.lastLogin}</h6>
                    {(this.state.verified ? <Button variant="contained" color="primary">Verified</Button> :
                                            <Button variant="contained" color="secondary">Not Verified</Button>)}
                </Grid>
            : 
                <Grid item xs={12} className="UserPanel">
                    <h1>No user found</h1>
                    <img alt="Lazy Dragon" style={{maxWidth: 5 + 'em'}} src="/img/dragon_sm.svg"></img>
                </Grid>
            }
        </Grid>
      </>
    );
  }
}

export default Profile;