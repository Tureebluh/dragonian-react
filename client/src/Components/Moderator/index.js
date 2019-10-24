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

  shufflePlayers(){
    fetch('/admin/shuffleplayers', {
      credentials: 'include',
      method: 'post'
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      alert(resJson.result);
    }).catch(error => console.error(error));
  }

  render () {
    return (
      <>
        <Container className="Moderator">
          <Typography className="Title">Create Shuffle</Typography>
          <Button onClick={()=>{this.shufflePlayers()}} variant="contained" color="primary" className="Submit">Shuffle Players</Button>
        </Container>
      </>
    );
  }
}

export default Moderator;
