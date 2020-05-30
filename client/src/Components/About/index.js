import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import {Container, Grid, Divider, Typography, Tooltip, Zoom, Button } from '@material-ui/core';
import TitleBanner from '../Images/TitleBanner';
import Tureebluh from '../Images/Tureebluh';
import RedDragon from '../Images/RedDragon';
import TwitchIcon from '../Images/TwitchIcon';
import DiscordIcon from '../Images/DiscordIcon';
import "./About.css";

class About extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <Helmet>
          <meta http-equiv="Content-Type" content="text/html;" />
          <meta name="description" content="We maintain a mature art community that started back in 2017 and still thrives to this day." />
          <title>Dragon's Lair - About Us - Father and Son - Tureebluh and R3dDragon</title>
          <html lang="en" />
        </Helmet>
        <Container className="AboutContainer">
          <Grid container spacing={0} className="AboutPanel">
              <Grid item xs={12}>
                <TitleBanner alt="Dragon's Lair Banner" className="Banner"/>
              </Grid>
              <Grid item xs={5}>
                <Tureebluh alt="Tureebluh" className="Banner"/>
                <Typography variant="h4">Tureebluh</Typography>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={6}>
                <RedDragon alt="Dragons Lair Banner" className="Banner"/>
                <Typography variant="h4">R3dDragon</Typography>
              </Grid>
              <Grid item xs={12} className="Divider"><Divider /></Grid>
              <Grid item xs={12}>
                <p>
                  Our father-son duo started in 2017 and continues on to this day.  From it's inception this community has maintained the mission
                  of creating a mature, respectful art community for anyone to enjoy.  We provide a show to display our communities 
                  amazing artwork with a fair and free approach to what content is shown.  You can visit our Twitch page by clicking here.
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Watch Live on Twitch">
                    <a href="https://twitch.tv/r3ddragons" target="_BLANK" rel="noopener noreferrer">
                        <TwitchIcon fill="#9146FF" alt="Twitch Logo" className="social-media"/>
                    </a>
                  </Tooltip>
                </p>
              </Grid>
              <Grid item xs={12}>
                <p>
                  We wanted to come up with a game that removed the competitive aspect of most events and offered
                  the ability to collaborate with fellow players. With this in mind, we developed the Community Shuffle.
                  These are completely randomized by the system for fairness and each player must own a license of the chosen game
                  to participate. You can learn more by exploring the shuffle page here.
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Go To Shuffle Page">
                    <Button className="LearnMoreButton" variant="contained" color="primary" href="/shuffles">Community Shuffles</Button>
                  </Tooltip>
                  <br/>
                </p>
              </Grid>
              <Grid item xs={12}>
                <p>
                  We encourage positivity and exploring the bounds of creativity.  We actively run a mature Discord server for anyone
                  interested in joining a friendly art community.  Community members are able to post submissions to be showcased on Livestream
                  from within the Discord server.  If you'd like to check out what the Discord server has to offer, you can join by clicking here.
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Join Discord Server">
                    <a href="https://discord.gg/GabcMqK" target="_BLANK" rel="noopener noreferrer">
                        <DiscordIcon fill="#738ADB" alt="Discord Logo" className="social-media"/>
                    </a>
                  </Tooltip>
                </p>
              </Grid>
        </Grid>
        </Container>
      </>
    );
  }
}

export default About;
