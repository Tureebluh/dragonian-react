import React, {Component} from 'react';
import './UserButton.css';
import { IconButton, Menu, MenuItem, Avatar, Tooltip, Zoom } from '@material-ui/core';


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
      let tempUrl = window.location.protocol + '//' + window.location.host + '/' + 'auth/login';
      if(tempUrl.includes('3000')){
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
            <IconButton
              aria-label="Account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
              className="ProfileButton"
            >
              {(this.props.user.loggedIn) ? <Avatar src={this.props.user.userPic} alt="User Profile Picture"/>
                                          : <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Login">
                                              <Avatar aria-label="Login" src="/img/Steam_logo.svg" alt="Steam Login Button"/>
                                            </Tooltip>}
              
            </IconButton>
            {(this.props.user.loggedIn) ? 
              <Menu
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            : null }
        </div>
    );
  }
}

export default UserButton;