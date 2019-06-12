import React, {Component} from 'react';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem } from '@material-ui/core';
import { MdMenu } from "react-icons/md";


class Navbar extends Component {
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

  //Do API calls here
  componentDidMount(){
    
  }

  render () {
    return (
      <AppBar position="static" color="default">
          <Toolbar className="Toolbar">
            <IconButton edge="start" className="IconButtonMenu" color="inherit" aria-label="Menu">
              <MdMenu />
            </IconButton>
            <Typography variant="h6" className="Title">
              Dragon's Lair
            </Typography>
            <div>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <Avatar alt="Default Profile" src="/img/userdefault.png" className="Avatar"/>
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
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;