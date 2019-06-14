import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import About from '../About';
import PrivacyPolicy from '../PrivacyPolicy';
import TOS from '../TOS';
import Home from '../Home';


class App extends Component {
  constructor(){
    super();
    //App controls state as a single source of truth
    //Pass data down to children through props
    //Add state variables and bindings here
    this.state = {
      drawerOpen: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  //Do API calls here
  componentDidMount(){
    
  }

  toggleDrawer(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  //Add sub components of App here
  render () {
    return (
      <Router>
        <>
          <Navbar toggleDrawer={()=>this.toggleDrawer}/>
          <SideMenu drawerOpen={this.state.drawerOpen} toggleDrawer={()=>this.toggleDrawer}/>
          <Route exact path="/" component={Home}/>
          <Route path="/about-us/" component={About}/>
          <Route path="/privacy-policy/" component={PrivacyPolicy}/>
          <Route path="/terms-of-service/" component={TOS}/>
        </>
      </Router>
    );
  }
}

export default App;
