import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import About from '../About';
import PrivacyPolicy from '../PrivacyPolicy';
import TOS from '../TOS';
import Home from '../Home';
import Shuffles from '../Shuffles';
import Profile from '../Profile';
import FourOhFour from '../FourOhFour';
import Moderator from '../Moderator';


class App extends Component {
  constructor(){
    super();
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
          steamprofile: resJson.User.profileurl,
          username: resJson.User.personaname,
          steamid: resJson.User.steamid,
          verified: resJson.User.verified,
          voted: resJson.User.voted,
          roles: resJson.User.roles,
        });
      } else {
        this.setState({
          loggedIn: false,
          userPic: '#',
          username: 'Guest',
          steamid: '0',
          verified: false,
          voted: false,
          roles: [],
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
      roles: this.state.roles,
      voted: this.state.voted,
    };
    return (
      <Router>
        <>
          <Navbar user={user} toggleDrawer={()=>this.toggleDrawer}/>
          <SideMenu user={user} drawerOpen={this.state.drawerOpen} toggleDrawer={()=>this.toggleDrawer}/>
          <Switch>
            <Route exact path="/" render={() => <Home user={user} />}/>
            <Route path="/shuffles/" component={Shuffles} user={user}/>
            <Route path="/moderator/" component={Moderator} user={user}/>
            <Route path="/profile/:steamid" component={Profile}/>
            <Route path="/about-us/" component={About}/>
            <Route path="/privacy-policy/" component={PrivacyPolicy}/>
            <Route path="/terms-of-service/" component={TOS}/>
            <Route component={FourOhFour}/>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
