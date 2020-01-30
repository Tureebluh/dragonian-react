import React, {Component} from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { MdAssignmentTurnedIn, MdAssignmentLate } from 'react-icons/md'
import "./Shuffles.css";

class Shuffles extends Component {
  constructor(){
    super();

    this.state = {
      
    }
    this.joinEvent = this.joinEvent.bind(this);
  }

  componentDidMount(){
    
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
        <Container className="Container">
          <Grid className="GridContainer" container>
            <Grid className="GridItem" item xs={12} md={6}>
              <img alt="Shuffle Banner" className="Banner" src="/img/Shuffle_Banner.svg"/>
            </Grid>
            <Grid className="GridItem" item xs={12} md={6}>
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
            </Grid>
            <Grid className="GridItem" item xs={12}>
              <img alt="Shuffle Banner" className="HowTo" src="/img/Shuffle_HowTo.svg"/>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Shuffles;
