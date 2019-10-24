import React, {Component} from 'react';
import { Typography, Container, Button } from '@material-ui/core';
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

  shufflePlayers(round){
    let payload = {
      round: round
    };
    fetch('/admin/shuffleplayers', {
      credentials: 'include',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.result === 'Completed'){
        if(round < 4){
          this.shufflePlayers(round + 1);
        } else {
          alert('All rounds shuffled');
        }
      }
    }).catch(error => {
      alert(error.result);
    });
  }

  render () {
    return (
      <>
        <Container className="Moderator">
          <Typography className="Title">Create Shuffle</Typography>
          <Button onClick={()=>{this.shufflePlayers(2)}} variant="contained" color="primary" className="Submit">Shuffle Players</Button>
        </Container>
      </>
    );
  }
}

export default Moderator;
