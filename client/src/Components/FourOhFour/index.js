import React, {Component} from 'react';
import { Container } from '@material-ui/core';
import LazyDragon from '../Images/LazyDragon';
import "./FourOhFour.css";

class FourOhFour extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <Container className="FourOhFour">
          <h1>Hmm... this is awkward.</h1>
          <LazyDragon alt="Lazy Dragon" className="LazyDragon"/>
          <h3>Page not found <br/> 404 Error</h3>
        </Container>
      </>
    );
  }
}

export default FourOhFour;