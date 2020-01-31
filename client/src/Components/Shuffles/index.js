import React, {Component} from 'react';
import { Container, Grid, Button, Backdrop, CircularProgress, Card, CardActionArea,
  CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { MdAssignmentTurnedIn, MdAssignmentLate } from 'react-icons/md';
import "./Shuffles.css";

class Shuffles extends Component {
  constructor(){
    super();

    this.state = {
      activeShuffle: false,
      loading: false,
    }
    this.joinEvent = this.joinEvent.bind(this);
  }

  componentDidMount(){
    this.setState({
      loading: true
    });
    fetch('/api/shuffle/registration/active')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson){
        let temp = resJson[0][0];
        console.log(temp);
        this.setState({
          activeShuffle: true,
          shuffleName: temp.Name,
          shufflePoster: temp.Poster,
          shuffleTheme: temp.Theme,
          shuffleStyle: temp.Style,
          loading: false,
        });
      }
    }).catch(error => console.error(error));
  }

  joinEvent(e){
    if(this.props.user.loggedIn)
    {
      alert("" + this.props.user.username);
    }
    else
    {
      alert("Not logged in");
    }
  }

  render () {
    return (
      <>
        <Container className="ShuffleContainer">
          <Grid className="GridContainer" container>
            <Grid className="GridItem" item xs={12} sm={6}>
              <img alt="Shuffle Banner" className="Banner" src="/img/Shuffle_Banner.svg"/>
            </Grid>
            {!this.state.activeShuffle ?
              <Grid className="GridItem Details" item xs={12} sm={6}>
                <Card tabIndex={-1}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={this.state.shuffleName}
                      height="340"
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
                <img alt="No Active Shuffles" className="HowTo" src="/img/NoActiveShuffle.svg"/>
              </Grid>
            }
            <Grid className="GridItem" item xs={12}>
              <img alt="Shuffle How It Works" className="HowTo" src="/img/Shuffle_HowTo.svg"/>
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

export default Shuffles;
