import React, {Component} from 'react';
import './Navbar.css';
import UserButton from '../UserButton';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Hidden } from '@material-ui/core';
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
            <IconButton onClick={this.props.toggleDrawer()} edge="start" className="IconButtonMenu" color="inherit" aria-label="Menu">
              <MdMenu />
            </IconButton>
              <Avatar component="span" src="/img/dragonegg_hatched.svg" alt="Baby Dragon Hatching"/>
              <Hidden smDown>
                <Typography variant="h6" className="Title">
                    Dragon's Lair
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant="h6" className="Title"></Typography>
              </Hidden>
            <UserButton/>
          </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;