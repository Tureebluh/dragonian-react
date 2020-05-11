import React, {Component} from 'react';
import { Container, Grid, Button, Backdrop, CircularProgress, Card, CardActionArea,
  CardActions, CardContent, CardMedia, Typography, Modal, Slide } from '@material-ui/core';
import { MdAssignmentTurnedIn, MdAssignmentLate } from 'react-icons/md';
import "./Shuffles.css";
import ShuffleBanner from '../Images/ShuffleBanner';
import NoActiveShuffle from '../Images/NoActiveShuffle';
import ShuffleHowTo from '../Images/ShuffleHowTo';

class Shuffles extends Component {
  constructor(){
    super();

    this.state = {
      activeShuffle: false,
      loading: false,
      modalOpen: false,
      shufflePoster: "#",
      errorMessage: "",
      successMessage: "",
    }
    this.joinEvent = this.joinEvent.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
    fetch('/api/shuffle/registration/active')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson[0][0]){
        let temp = resJson[0][0];
        this.setState({
          activeShuffle: true,
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
          loading: false,
        });
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
        modalOpen: true,
      });
  }

  handleModalClose(){
    this.setState({
      modalOpen: false,
    });
  }

  render () {
    return (
      <>
        <Container className="ShuffleContainer">
          <Grid className="GridContainer" container>
            <Grid className="GridItem" item xs={12} sm={6}>
              <ShuffleBanner className="Banner"/>
              <Button className="HowItWorksButton" color="primary" variant="contained" onClick={() => this.handleShufflePopover()}>Learn more</Button>
            </Grid>
            {(this.state.activeShuffle && !this.state.hasBeenShuffled) ?
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
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
            onClick={this.handleModalClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            aria-modal="true"
            id="HowToModal"
          >
            <Slide direction="right" in={this.state.modalOpen} mountOnEnter unmountOnExit>
              <ShuffleHowTo alt="Shuffle How It Works"/>
            </Slide>
          </Modal>

        </Container>
      </>
    );
  }
}

export default Shuffles;
