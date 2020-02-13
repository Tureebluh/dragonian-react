import React, {Component} from 'react';
import { Typography, Container, Button, Grid, Card } from '@material-ui/core';
import "./Moderator.css";

class Moderator extends Component {
  constructor(){
    super();

    this.state = {
      
    }
    this.shufflePlayers = this.shufflePlayers.bind(this);
  }

  componentDidMount(){
    
  }

  shufflePlayers(){
    fetch('/admin/shuffleplayers', {
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
      if(resJson.result === 'Success'){
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

  render () {
    return (
      <>
        <Container className="Moderator">
          <Grid container className="ModeratorContainer">
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
