import React, {Component} from 'react';
import './UserButton.css';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { MdAccountCircle } from "react-icons/md";


class UserButton extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    this.state = {
        anchorEl: null
    }
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu(e){
    this.setState({
      anchorEl: e.currentTarget
    });
  }

  handleClose(e){
    this.setState({
      anchorEl: null
    });
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
            <MdAccountCircle/>
            </IconButton>
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
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
  }
}

export default UserButton;