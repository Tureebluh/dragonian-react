import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import { Grid, MobileStepper, Button, Container, Divider, Link, Modal, Slide, Typography, Backdrop, CircularProgress, Card } from '@material-ui/core';
import LinearProgressWithLabel from '../LinearProgressWithLabel';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdAssessment } from "react-icons/md";
import "./Home.css";
import Tureebluh from '../Images/Tureebluh';
import RedDragon from '../Images/RedDragon';
import ShuffleBanner from '../Images/ShuffleBanner';
import DiscordIcon from '../Images/DiscordIcon';
import TwitchIcon from '../Images/TwitchIcon';
import ShuffleVoting from '../ShuffleVoting';
import TitleBanner from '../Images/TitleBanner';


class Home extends Component {
  constructor(){
    super();

    this.state = {
      activeCollab: 0,
      youtubeLinks: [],
      themeVotes: [],
      styleVotes:[],
      themeTotalVotes: 0,
      styleTotalVotes: 0,
      modalOpen: false,
      loading: false,
      voted: false,
      activeShuffle: false,
    }
    this.handleNextCollab = this.handleNextCollab.bind(this);
    this.handlePrevCollab = this.handlePrevCollab.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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
        });
      } 
    }).catch(error => console.error(error));

    fetch('/api/shuffle/voting/verify')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Active)
      {
        this.setState({
          voted: resJson.Voted,
          activeShuffle: true,
        });
        fetch('/api/shuffle/voting/results')
        .then(res => {
          return res.json();
        }).then(resJson => {
          
          let themeTotalVotes = 0;
          let styleTotalVotes = 0;
          resJson.themeResults[0].forEach(theme=>{
            themeTotalVotes += Number(theme.Votes);
          });
          resJson.styleResults[0].forEach(style=>{
            styleTotalVotes+= Number(style.Votes);
          });
          this.setState({
            loading: false,
            themeVotes: resJson.themeResults[0],
            styleVotes: resJson.styleResults[0],
            themeTotalVotes: themeTotalVotes,
            styleTotalVotes: styleTotalVotes,
          });
        }).catch(error => console.error(error));
      }
      else
      {
        this.setState({
          activeShuffle: false,
          loading: false,
          voted: false,
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
  handleModalOpen(){
    this.setState({
      modalOpen: true,
    });
  }
  handleModalClose(){
    this.setState({
      modalOpen: false
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
            {(this.state.activeShuffle) ? 
              (!this.state.voted && this.props.user.loggedIn && this.props.user.verified) ?
              <>
                <Grid item xs={6}>
                  <Tureebluh className="Banner" />
                </Grid>
                <Grid item xs={6} className="VotingActiveGrid">
                  <Typography className="VotingNowText">Voting for the next <br/> Dragonian Shuffle is now live!</Typography>
                  <Button className="VotingActiveButton" color="primary" variant="contained" onClick={this.handleModalOpen}>Vote Now</Button>
                </Grid>
              </>
              :
              <>
                <Grid item xs={12} lg={6}>
                  <Tureebluh className="Banner" />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Card className="VotingResultsPanel">
                    <Typography className="VotingActiveText"><MdAssessment/> Current Poll Results <MdAssessment/></Typography>
                    <Divider/>
                    <Typography className="VotingActiveText" style={{textAlign: "justify", marginTop: 2 + 'em'}} variant="h4">Styles</Typography>
                    {this.state.styleVotes.map(style=>(
                      <LinearProgressWithLabel breakpoint={40} key={style.shuffle_style_id} className="LinPro" variant="determinate" value={(style.Votes / this.state.styleTotalVotes)* 100} label={style.Style + ' - ' + style.Votes + ' vote(s)'}/>
                    ))}
                    <Divider className="Divider"/>
                    <Typography className="VotingActiveText" style={{textAlign: "justify", marginTop: 2 + 'em'}} variant="h4">Themes</Typography>
                    {this.state.themeVotes.map(theme=>(
                      <LinearProgressWithLabel breakpoint={40} key={theme.shuffle_theme_id} className="LinPro" variant="determinate" value={(theme.Votes / this.state.themeTotalVotes)* 100} label={theme.Theme + ' - ' + theme.Votes + ' vote(s)'}/>
                    ))}
                  </Card>
                </Grid>
              </>
            : <>
                  <Grid item xs={6}>
                    <Tureebluh className="Banner" />
                  </Grid>
              </>}
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
                <h3>Dragonian Community <br/> Shuffle Events <br/> 4-Player Mini-Collabs</h3>
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

          <Modal 
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            aria-modal="true"
            id="VotingModal"
          >
            <Slide direction="right" in={this.state.modalOpen} mountOnEnter unmountOnExit>
              <ShuffleVoting close={this.handleModalClose}/>
            </Slide>
          </Modal>

          
        </Container>
      </>
    );
  }
}

export default Home;
