import React, {Component} from 'react';
import { Typography, Container, Button, Grid, Card } from '@material-ui/core';
import "./Moderator.css";

class Moderator extends Component {
  constructor()
  {
    super();

    this.state = 
    {
      
    }
    this.shufflePlayers = this.shufflePlayers.bind(this);
    this.startVoting = this.startVoting.bind(this);
    this.endVoting = this.endVoting.bind(this);
  }

  componentDidMount()
  {
    
  }

  shufflePlayers()
  {
    fetch('/admin/shuffleplayers', 
    {
      credentials: 'include',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.result === 'Success')
      {
        alert('All rounds shuffled');
      }
      else
      {
        alert(resJson.result);
      }
    }).catch(error => {
      alert(error.result);
    });
  }

  startVoting()
  {
    fetch('/admin/create/shuffle', 
    {
      credentials: 'include',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Success)
      {
        alert('Shuffle successfully started.');
      }
      else
      {
        alert('Another shuffle is already being voted on.');
      }
    }).catch(error => {
      alert(error);
    });
  }

  endVoting()
  {
    fetch('/admin/voting/stop', 
    {
      credentials: 'include',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Success)
      {
        alert('Voting successfully ended.');
      }
      else
      {
        alert('Either voting has already ended or no votes were cast.');
      }
    }).catch(error => {
      alert(error);
    });
  }

  render () {
    return (
      <>
        <Container className="Moderator">
          <Grid container className="ModeratorContainer">

            <Grid item xs={12} md={6} className="GridItem">
              <Card className="Card">
                <Typography className="Title">Start Voting</Typography>
                <Button onClick={()=>{this.startVoting()}} variant="contained" color="primary" className="Submit">Start Voting</Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} className="GridItem">
              <Card className="Card">
                <Typography className="Title">End Voting</Typography>
                <Button onClick={()=>{this.endVoting()}} variant="contained" color="primary" className="Submit">End Voting</Button>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} className="GridItem">
              <Card className="Card">
                <Typography className="Title">Shuffle Players</Typography>
                <Button onClick={()=>{this.shufflePlayers()}} variant="contained" color="primary" className="Submit">Shuffle Players</Button>
              </Card>
            </Grid>
            
          </Grid>
        </Container>
      </>
    );
  }
}

export default Moderator;
