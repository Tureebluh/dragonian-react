import React, {Component} from 'react';
import { Grid, MobileStepper, Button, Typography, Container } from '@material-ui/core';
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
    const youtubeLinks = ["https://www.youtube.com/embed/nJTvpmKP1i0",
                          "https://www.youtube.com/embed/1mDJzz7Yrzw",
                          "https://www.youtube.com/embed/dYOFx5n4hAg"];
    return (
      <>
        <Container>
          <Grid container spacing={1} className="HomePanel Jumbotron">
            <Grid item xs={12} lg={6}>
              <Typography variant={'h3'}>Live Reviews Hosted By Featured Planet Coaster Creator R3dDragon</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="HomePanel Twitch">
            <Grid item xs={12} lg={6}>
              <Typography variant={'h3'}>Live Reviews Hosted By Featured Planet Coaster Creator R3dDragon</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="HomePanel Shuffle">
            <Grid item xs={12} lg={6}>
                <Typography variant={'h3'}>Unique Dragonian Community Shuffle Events</Typography>
              </Grid>
            </Grid>
          <Grid container spacing={1} className="HomePanel Collab">
            <Grid item xs={12} lg={6}>
              <Typography variant={'h3'}>Amazing Dragonian Community Collaborations!</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="videoContainer">
                <iframe width="560" height="315" src={youtubeLinks[this.state.activeCollab]} frameBorder="0"
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
