import React, {Component} from 'react';
import { Container, Grid, Button, Backdrop, CircularProgress, Card, CardActionArea,
  CardActions, CardContent, CardMedia, Typography, Modal, Slide, Divider } from '@material-ui/core';
import LinearProgressWithLabel from '../LinearProgressWithLabel';
import { MdAssignmentTurnedIn, MdAssignmentLate, MdAssessment } from 'react-icons/md';
import "./Shuffles.css";
import ShuffleBanner from '../Images/ShuffleBanner';
import NoActiveShuffle from '../Images/NoActiveShuffle';
import ShuffleHowTo from '../Images/ShuffleHowTo';
import ShuffleVoting from '../ShuffleVoting';

class Shuffles extends Component {
  constructor(){
    super();

    this.state = {
      activeShuffle: false,
      loading: false,
      isHowToModalOpen: false,
      isVotingModalOpen: false,
      themeVotes: [],
      styleVotes:[],
      themeTotalVotes: 0,
      styleTotalVotes: 0,
      shufflePoster: "#",
      errorMessage: "",
      successMessage: "",
      refreshPage: false,
    }
    this.joinEvent = this.joinEvent.bind(this);
    this.handleHowToModalClose = this.handleHowToModalClose.bind(this);
    this.handleVotingModalClose = this.handleVotingModalClose.bind(this);
    this.handleVotingModalOpen = this.handleVotingModalOpen.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
    
    fetch('/api/shuffle/voting/verify')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Active)
      {
        let voted = resJson.Voted;
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
            voted: voted,
            votingActive: true,
            themeVotes: resJson.themeResults[0],
            styleVotes: resJson.styleResults[0],
            themeTotalVotes: themeTotalVotes,
            styleTotalVotes: styleTotalVotes,
          });
        }).catch(error => console.error(error));
      }
      else
      {
        fetch('/api/shuffle/registration/active')
        .then(res => {
          return res.json();
        }).then(resJson => {
          if(resJson[0][0]){
            let temp = resJson[0][0];
            this.setState({
              registrationActive: true,
              votingActive: false,
              hasBeenShuffled: (temp.Shuffled === 1 ? true : false),
              shuffleName: temp.Name,
              shufflePoster: temp.Poster,
              shuffleTheme: temp.Theme,
              shuffleStyle: temp.Style,
              shuffleID: temp.ShuffleID,
              loading: false,
            });
          } else {
            this.setState({
              registrationActive: false,
              votingActive: false,
              loading: false,
              voted: false,
            });
          }
        }).catch(error => console.error(error));
      }
    }).catch(error => console.error(error));
  }

  joinEvent(e){
    if(this.props.user.loggedIn && this.state.shuffleID)
    {
      this.setState({
        loading: true,
      });
      let payload = {
        ShuffleID: this.state.shuffleID,
      };
  
      fetch('/api/shuffle/registration/submit', {
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
        if(resJson.Error)
        {
          this.setState({
            loading: false,
            errorMessage: resJson.Error,
            successMessage: "",
          });
        }
        else
        {
          this.setState({
            loading: false,
            successMessage: resJson.Success,
            errorMessage: "",
          });
        }
      }).catch(error => console.error(error));
    }
    else
    {
      alert("You must be logged in to join the event.");
    }
  }

  handleShufflePopover(){
      this.setState({
        isHowToModalOpen: true,
      });
  }

  handleHowToModalClose(){
    this.setState({
      isHowToModalOpen: false,
    });
  }

  handleVotingModalOpen(){
    this.setState({
      isVotingModalOpen: true,
    });
  }
  handleVotingModalClose(){
    this.setState({
      isVotingModalOpen: false,
      refreshPage: true
    });
  }

  render () {
    return (
      <>
        {this.state.refreshPage ? <></>: <></>}
        <Container className="ShuffleContainer">
          <Grid className="GridContainer" container>
            <Grid className="GridItem" item xs={12}>
              <ShuffleBanner className="Banner"/>
              <Button className="HowItWorksButton" color="primary" variant="contained" onClick={() => this.handleShufflePopover()}>Learn more</Button>
            </Grid>
            {(this.state.votingActive) ? 
              (!this.state.voted && this.props.user.loggedIn && this.props.user.verified) ?
              
                <Grid item xs={12} lg={6} className="VotingActiveGrid">
                  <Typography className="VotingNowText">Voting for the next <br/> Dragonian Shuffle is now live!</Typography>
                  <Button className="VotingActiveButton" color="primary" variant="contained" onClick={this.handleVotingModalOpen}>Vote Now</Button>
                </Grid>
              
              :
              <>
                <Grid item xs={12} lg={6}>
                  <Card className="VotingResultsPanel">
                    <CardContent>
                      <Typography className="VotingActiveText"><MdAssessment/> Voting Results <MdAssessment/></Typography>
                      <Divider/>
                      <Typography className="VotingActiveText" style={{textAlign: "justify", marginTop: 2 + 'em'}} variant="h4">Styles</Typography>
                      {this.state.styleVotes.map(style=>(
                        <>
                        <LinearProgressWithLabel breakpoint={40} key={style.shuffle_style_id} className="LinPro" variant="determinate" value={(style.Votes / this.state.styleTotalVotes)* 100} label={style.Style + ' - ' + style.Votes + ' vote(s)'}/>
                        </>
                      ))}
                      <Divider className="Divider"/>
                      <Typography className="VotingActiveText" style={{textAlign: "justify", marginTop: 2 + 'em'}} variant="h4">Themes</Typography>
                      {this.state.themeVotes.map(theme=>(
                        <LinearProgressWithLabel breakpoint={40} key={theme.shuffle_theme_id} className="LinPro" variant="determinate" value={(theme.Votes / this.state.themeTotalVotes)* 100} label={theme.Theme + ' - ' + theme.Votes + ' vote(s)'}/>
                      ))}
                      <Divider/>
                      <Typography style={{marginTop: 2 + 'em', fontSize: 1.3 + 'em'}}>Thank you for participating in the voting process!</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            : <>
                        
              </>}

            {(this.state.registrationActive && !this.state.hasBeenShuffled) ?
              <Grid className="GridItem Details" item xs={12} sm={6}>
                <Card className="ActiveShuffle" tabIndex={-1}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={this.state.shuffleName}
                      className="CardMedia"
                      image={this.state.shufflePoster}
                      title={this.state.shuffleName}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {this.state.shuffleName}
                      </Typography>
                      <Typography className="SecondaryText" variant="h5" color="textSecondary" component="h2">
                        Theme: {this.state.shuffleTheme}
                        <br/>
                        Style: {this.state.shuffleStyle}
                      </Typography>
                      <Typography className="ErrorMessage">{this.state.errorMessage}</Typography>
                      <Typography className="SuccessMessage">{this.state.successMessage}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>

                  {this.props.user.loggedIn ?
                    <Button
                      variant="contained"
                      color="primary"
                      className="SignUpButton"
                      size="large"
                      onClick={this.joinEvent}
                      startIcon={< MdAssignmentTurnedIn />}
                    >
                      Join Event
                    </Button>
                    :
                    <Button
                      variant="contained"
                      color="primary"
                      className="SignUpButton"
                      size="large"
                      disabled
                      startIcon={< MdAssignmentLate />}
                    >
                      Login Required
                    </Button>
                  }
                  </CardActions>
                </Card>
              </Grid>
            : 
              <Grid className="GridItem NoShuffle" item xs={12} sm={6}>
                <NoActiveShuffle alt="No Active Shuffles"/>
              </Grid>
            }

          </Grid>
          <Backdrop className="Backdrop" open={this.state.loading}>
            <CircularProgress color="inherit"/>
          </Backdrop>

          <Modal 
            open={this.state.isHowToModalOpen}
            onClose={this.handleHowToModalClose}
            onClick={this.handleHowToModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            aria-modal="true"
            id="HowToModal"
          >
            <Slide direction="right" in={this.state.isHowToModalOpen} mountOnEnter unmountOnExit>
              <ShuffleHowTo alt="Shuffle How It Works"/>
            </Slide>
          </Modal>

          <Modal 
            open={this.state.isVotingModalOpen}
            onClose={this.handleVotingModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            aria-modal="true"
            id="VotingModal"
          >
            <Slide direction="right" in={this.state.isVotingModalOpen} mountOnEnter unmountOnExit>
              <ShuffleVoting close={this.handleVotingModalClose}/>
            </Slide>
          </Modal>

        </Container>
      </>
    );
  }
}

export default Shuffles;
