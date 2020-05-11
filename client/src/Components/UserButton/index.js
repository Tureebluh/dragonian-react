import React, {Component} from 'react';
import './UserButton.css';
import { IconButton, Avatar, Tooltip, Zoom} from '@material-ui/core';
import { MdPowerSettingsNew } from 'react-icons/md';


class UserButton extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    this.state = {
        anchorEl: null
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleMenu(e){
    if(this.props.user.loggedIn){
      this.setState({
        anchorEl: e.currentTarget
      });
    } else {
      // eslint-disable-next-line
      let tempUrl = window.location.protocol + '//' + window.location.host + '/' + 'auth/login';
      if(tempUrl.includes(':3000')){
        tempUrl = 'http://localhost:5000/auth/login';
      }
      window.open(tempUrl, '_self');
    }
  }

  handleClose(e){
    this.setState({
      anchorEl: null
    });
  }

  handleLogout(e){
    this.props.user.userLogout();
  }

  render () {
    return (
        <div>
            {(this.props.user.loggedIn) ? <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Logout">
                                            <IconButton onClick={this.handleLogout} color="default" className="LogoutButton" aria-label="Logout">
                                              <MdPowerSettingsNew />
                                            </IconButton>
                                          </Tooltip> : null}
            <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              className="ProfileButton"
            >
              {(this.props.user.loggedIn) ? <Tooltip TransitionComponent={Zoom} className="Tooltip" title="My Profile">
                                              <a href={"/profile/" + this.props.user.steamid}>
                                                <Avatar className="UserAvatar" src={this.props.user.userPic} alt="User Profile Picture"/>
                                              </a>
                                            </Tooltip>
                                          : <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Login With Steam">
                                              <Avatar/>
                                            </Tooltip>}
              
            </IconButton>
        </div>
    );
  }
}

export default UserButton;