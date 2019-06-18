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
      drawerOpen: false,
      loggedIn: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  //Do API calls here
  componentDidMount(){
    fetch('/auth/verify', {
      credentials: 'include',
      method: 'GET'
    })
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Authentication === 'true'){
        this.setState({
          loggedIn: true,
          userPic: resJson.User.avatarfull,
          username: resJson.User.personaname,
          steamid: resJson.User.steamid,
          verified: resJson.User.verified,
          roles: resJson.User.roles
        });
      } else {
        this.setState({
          loggedIn: false,
          userPic: '#',
          username: 'Guest',
          steamid: '0',
          verified: false,
          roles: []
        });
      }
    }).catch(error => console.error(error));
  }

  toggleDrawer(){
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  userLogout(){
    fetch('/auth/logout')
    .then(res => {
      return res.json();
    }).then(resJson => {
      if(resJson.Authentication === 'false'){
        this.setState({
          loggedIn: false
        });
      }
    }).catch(error => console.error(error));
  }

  //Add sub components of App here
  render () {
    const user = {
      loggedIn: this.state.loggedIn,
      userLogout: this.userLogout,
      userPic: this.state.userPic,
      username: this.state.username,
      steamid: this.state.steamid,
      verified: this.state.verified,
      roles: this.state.roles
    };
    return (
      <Router>
        <>
          <Navbar user={user} toggleDrawer={()=>this.toggleDrawer}/>
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
