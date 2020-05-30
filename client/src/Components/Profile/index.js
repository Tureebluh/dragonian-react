import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import "./Profile.css";
import { Avatar, Grid, Button, GridList, GridListTile, Backdrop,
   GridListTileBar, IconButton, Tooltip, Zoom, Slide, Modal, CircularProgress, Typography, Card } from '@material-ui/core';
import { MdInfoOutline } from 'react-icons/md';
import ProfileShuffleDetails from '../ProfileShuffleDetails';
import SteamIcon from '../Images/SteamIcon';
import DefaultShuffle from '../Images/DefaultShuffle';
import BetaTester from '../Images/BetaTester';
import LazyDragon from '../Images/LazyDragon';

class Profile extends Component {
  constructor(){
    super();

    this.state = {
        userPic: '',
        userName: '',
        lastLogin: '',
        CreatedDate: '',
        verified: 0,
        shuffles: [],
        modalOpen: false,
        howToVerifyOpen: false,
        activeModalID: 0,
        steamid: 0,
        profileurl: '',
        key: 0,
        loading: false,
        icons: {
          Default: <DefaultShuffle className="ShuffleIcon"/>,
          BetaTester: <BetaTester className="ShuffleIcon"/>,
        },
    }
    this.handleShufflePopover = this.handleShufflePopover.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleVerification = this.handleVerification.bind(this);

    //Could be a single toggle function if split is not needed later
    this.handleHowToVerifyOpen = this.handleHowToVerifyOpen.bind(this);
    this.handleHowToVerifyClose = this.handleHowToVerifyClose.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true,
    });
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
            profileurl: resJson[0][0].profileurl,
            lastLogin: new Date(resJson[0][0].LastLogIn).toDateString(),
            CreatedDate: new Date(resJson[0][0].CreatedDate).toDateString(),
            verified: resJson[0][0].verified,
            steamid: payload.steamid,
        });
      }
    }).catch(error => console.error(error));

    fetch('/api/profile/user/shuffles', {
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
          shuffles: resJson[0],
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    }).catch(error => console.error(error));
  }

  handleVerification()
  {
    this.setState({
      loading: true,
    });
    fetch('/api/profile/user/verify', {
      credentials: 'include',
      method: 'GET'
    }).then(res => {
        return res.json();
    }).then(resJson => {
      if(resJson.result === true){
        this.setState({
          loading: false,
          verified: true,
        });
      } else {
        this.setState({
          loading: false,
          verified: false,
        });
      }
    }).catch(error => console.error(error));
  }

  handleShufflePopover(shuffleID){
    if(typeof shuffleID !== 'undefined'){
      this.setState({
        activeModalID: shuffleID,
        modalOpen: true,
      });
    }
  }

  handleModalClose(){
    this.setState({
      modalOpen: false
    });
  }

  handleHowToVerifyClose(){
    this.setState({
      howToVerifyOpen: false
    });
  }

  handleHowToVerifyOpen(){
    this.setState({
      howToVerifyOpen: true
    });
  }

  render () {
    return (
      <>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;" />
          <meta name="description" content="Easily get to any Dragonians Steam page and see all your progress in past Collaboration Shuffle Events" />
          <title>Dragon's Lair - User Profile Page - Past Shuffle Events</title>
          <html lang="en" />
        </Helmet>
        <Grid container className="ProfileContainer">
            {(this.state.userPic !== '') ?
              <>
                <Grid item xs={12} lg={4} className="UserPanel">
                    <Avatar className="UserAvatar" src={this.state.userPic} alt="User Profile Picture"/>
                    <h3>{this.state.userName}</h3>
                      <a href={this.state.profileurl} target="_BLANK" rel="noopener noreferrer">
                        <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Steam Profile">
                          <span>
                            <SteamIcon/>
                          </span>
                        </Tooltip>
                      </a>
                    
                    <h6>Member since: {this.state.CreatedDate}</h6>
                    <h6>Last Login: {this.state.lastLogin}</h6>
                    {(this.state.verified ? <Button variant="contained" color="primary">Verified</Button> :
                                            <>
                                            <Button onClick={this.handleVerification} variant="contained" color="secondary">Not Verified</Button>
                                            <Typography onClick={() => this.handleHowToVerifyOpen()} className="HelpText">How do I verify?</Typography>
                                            </>)}
                </Grid>
                <Grid item xs={12} lg={8} className="ShufflePanel">
                    <GridList cellHeight={200} cols={6} spacing={20} className="GridList">
                      <GridListTile key="Subheader" cols={6} className="GridListTitle">
                        <h2>Shuffles</h2>
                      </GridListTile>
                      {this.state.shuffles.map(shuffle => (
                        <GridListTile key={shuffle.Shuffle_ID} rows={1} cols={1} className="GridListTile">
                          {this.state.icons[shuffle.Poster]}
                          <GridListTileBar
                            title={shuffle.Name}
                            className="GridListTileBar"
                            actionIcon={
                              <Tooltip TransitionComponent={Zoom} className="Tooltip" title="More Info">
                                <IconButton onClick={() => this.handleShufflePopover(shuffle.Shuffle_ID)} style={{color: 'white'}} aria-label={`info about ${shuffle.Name}`}>
                                  <MdInfoOutline />
                                </IconButton>
                              </Tooltip>
                            }
                          />
                        </GridListTile>
                       ))}
                    </GridList>
                </Grid>
              </>
            : 
                <Grid item xs={12} className="UserPanel">
                    <h1>No user found</h1>
                    <LazyDragon className="LazyDragon"/>
                </Grid>
            }
            <Backdrop className="Backdrop" open={this.state.loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>
        </Grid>
        
        <Modal 
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
          onClick={this.handleModalClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          aria-modal="true"
          id="ShuffleModal"
        >
          <Slide direction="right" in={this.state.modalOpen} mountOnEnter unmountOnExit>
            <ProfileShuffleDetails steamid={this.state.steamid} activeID={this.state.activeModalID}/>
          </Slide>
        </Modal>
        <Modal 
          open={this.state.howToVerifyOpen}
          onClose={this.handleHowToVerifyClose}
          onClick={this.handleHowToVerifyClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          aria-modal="true"
          id="HowToVerifyModal"
        >
          <Slide direction="right" in={this.state.howToVerifyOpen} mountOnEnter unmountOnExit>
            <Card className="HowToVerify">
              <SteamIcon className="SteamIcon"/>
              <h1>How To Change<br/> Steam Workshop Privacy Settings</h1>
              <Typography>
                By default, Steam Profile Privacy Settings are set to Friends Only.  Normally this is a great thing,
                but it unfortunately means the system is unable to see whether you own a copy of Planet Coaster.
                <br/>
                <br/>
                In order to maintain the integrity of our voting process, you will need to set your Steam Profile to public and
                click the Red <Button variant="contained" color="secondary">Not Verified</Button> Button
                on your Profile Page.  Once you have verified with the system, you are free to change the settings to whatever you wish.
              </Typography>
              <Typography>For assistance with changing your profile settings, you can visit this <a target="_BLANK" rel="noopener noreferrer" href="https://support.steampowered.com/kb_article.php?ref=4113-YUDH-6401">Steam Support Page</a></Typography>
            </Card>
          </Slide>
        </Modal>
      </>
    );
  }
}

export default Profile;