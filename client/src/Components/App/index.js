import React, {Component} from 'react';
import "./App.css";
import Navbar from '../Navbar';
import { Button } from '@material-ui/core';



class App extends Component {
  constructor(){
    super();
    //App controls state as a single source of truth
    //Pass data down to children through props
    this.state = {
      
    };
  }

  //Do API calls here
  componentDidMount(){
    
  }

  //Add sub components of App here
  render () {
    return (
      <>
        <Navbar />
      </>
    );
  }
}

export default App;
