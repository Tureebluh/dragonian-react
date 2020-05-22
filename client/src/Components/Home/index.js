import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import { Grid, MobileStepper, Button, Container, Divider, Link, Backdrop, CircularProgress } from '@material-ui/core';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";
import Tureebluh from '../Images/Tureebluh';
import RedDragon from '../Images/RedDragon';
import ShuffleBanner from '../Images/ShuffleBanner';
import DiscordIcon from '../Images/DiscordIcon';
import TwitchIcon from '../Images/TwitchIcon';
import TitleBanner from '../Images/TitleBanner';


class Home extends Component {
  constructor(){
    super();

    this.state = {
      activeCollab: 0,
      youtubeLinks: [],
      loading: false,
    }
    this.handleNextCollab = this.handleNextCollab.bind(this);
    this.handlePrevCollab = this.handlePrevCollab.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
    fetch('/api/youtube/collab')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson[0][0]){
        let temp = [];

        resJson[0].forEach(obj => {
          temp.push(obj.url);
        });

        this.setState({
          youtubeLinks: temp,
          loading: false,
        });
      } 
    }).catch(error => console.error(error));
  }

  handleNextCollab(){
    this.setState({
      activeCollab: this.state.activeCollab + 1
    });
  }
  handlePrevCollab(){
    this.setState({
      activeCollab: this.state.activeCollab - 1
    });
  }

  render () {
    const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

    return (
      <>
        <Container className="HomeContainer">
          <Grid container spacing={0} className="HomePanel Jumbotron">
            <Grid item xs={12}>
              <TitleBanner className="Banner Title"/>
            </Grid>
            <Grid item xs={12}>
              <Tureebluh className="SoloBanner" />
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Twitch">
            
            <Grid className="TextPanel" item xs={12} lg={6}>
              <h3>Chat live with<br/> Planet Coaster&reg; <br/> Featured Creator <br/> R3dDragon</h3>
              <a href="https://www.twitch.tv/r3ddragons" target="_BLANK" rel="noopener noreferrer">
                <TwitchIcon fill="#9146FF" className="social-media"/>
              </a>
            </Grid>
            <Grid item xs={12} lg={6}>
              <RedDragon className="TwitchLiveImg" />
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Shuffle">
            <Grid item xs={12} lg={6}>
              <ShuffleBanner className="Banner" />
            </Grid>
            <Grid item xs={12} lg={6}>
                <h3>Dragonian Shuffle<br/>4-Player Team<br/>Collaboration Events</h3>
                <Link component={AdapterLink} to="/shuffles"><Button variant="contained" color="primary">Learn more</Button></Link>
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Collab">
            <Grid item xs={12} lg={6}>
              <h3>Dragonian Community <br/> Collaborations <br/> Multiple themes to suit any style.</h3>
              <a href="https://discord.gg/GabcMqK" target="_BLANK" rel="noopener noreferrer">
                <DiscordIcon fill="#738ADB" className="social-media"/>
              </a>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="videoContainer">
                <iframe title="Collaboration Video" width="560" height="315" src={this.state.youtubeLinks[this.state.activeCollab]} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <MobileStepper
                variant="progress"
                steps={this.state.youtubeLinks.length}
                position="static"
                activeStep={this.state.activeCollab}
                className="CollabMobileStepper"
                nextButton={
                  <Button size="small" onClick={this.handleNextCollab} disabled={this.state.activeCollab === this.state.youtubeLinks.length - 1}>
                    Next
                    {<MdKeyboardArrowRight />}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={this.handlePrevCollab} disabled={this.state.activeCollab === 0}>
                    {<MdKeyboardArrowLeft />}
                    Back
                  </Button>
                }
              />
            </Grid>
          </Grid>

          <Backdrop className="Backdrop" open={this.state.loading}>
            <CircularProgress color="inherit"/>
          </Backdrop>
        </Container>
      </>
    );
  }
}

export default Home;
