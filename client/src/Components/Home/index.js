import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import { Grid, MobileStepper, Button, Container, Divider, Zoom, Tooltip, Link } from '@material-ui/core';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";

class Home extends Component {
  constructor(){
    super();

    this.state = {
      activeCollab: 0
    }
    this.handleNextCollab = this.handleNextCollab.bind(this);
    this.handlePrevCollab = this.handlePrevCollab.bind(this);
  }

  componentDidMount(){
    
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

    const youtubeLinks = ["https://www.youtube.com/embed/OoZQTdyORYg",
                          "https://www.youtube.com/embed/nJTvpmKP1i0",
                          "https://www.youtube.com/embed/1mDJzz7Yrzw",
                          "https://www.youtube.com/embed/dYOFx5n4hAg"];
    return (
      <>
        <Container className="HomeContainer">
          {((this.props.user.loggedIn) && !(this.props.user.voted)) ? null : null }
          <Grid container spacing={0} className="HomePanel Jumbotron">
            <Grid item xs={12}>
              <img alt="Dragons Lair Banner" className="Banner" src="/img/dragonian_banner.png"/>
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Twitch">
            <Grid className="TextPanel" item xs={12} lg={6}>
              <h3>Live Reviews Hosted By <br/> Planet Coaster&reg; <br/> Featured Creator <br/> R3dDragon</h3>
              <a href="https://www.twitch.tv/r3ddragons" target="_BLANK" rel="noopener noreferrer">
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Watch Live on Twitch">
                      <img alt="Twitch Logo" className="social-media" src="/img/glitchbadge_purple.svg"/>
                  </Tooltip>
              </a>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img alt="Dragons Lair Banner" className="Banner" src="/img/twitch_live.png"/>
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Shuffle">
            <Grid item xs={12} lg={6}>
              <img alt="Dragons Lair Banner" className="Banner" src="/img/shuffle_banner.png"/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <h3>Dragonian Community Shuffle Events <br/> Unique 4-Player <br/> Team PlanCo Art Event</h3>
                <Link component={AdapterLink} to="/shuffles"><Button variant="contained" color="primary">Learn more</Button></Link>
            </Grid>
          </Grid>
          <Divider/>
          <Grid container spacing={0} className="HomePanel Collab">
            <Grid item xs={12} lg={6}>
              <h3>Dragonian Community PlanCo Collaborations <br/> Multiple themes to suit any style.</h3>
              <a href="https://discord.gg/GabcMqK" target="_BLANK" rel="noopener noreferrer">
                  <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Join Community Discord">
                      <img style={{height: 2.6+'em'}} alt="Discord Logo" className="social-media" src="/img/discord_logo.svg"/>
                  </Tooltip>
              </a>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="videoContainer">
                <iframe title="Collaboration Video" width="560" height="315" src={youtubeLinks[this.state.activeCollab]} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <MobileStepper
                variant="progress"
                steps={youtubeLinks.length}
                position="static"
                activeStep={this.state.activeCollab}
                className="CollabMobileStepper"
                nextButton={
                  <Button size="small" onClick={this.handleNextCollab} disabled={this.state.activeCollab === youtubeLinks.length - 1}>
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
        </Container>
      </>
    );
  }
}

export default Home;
