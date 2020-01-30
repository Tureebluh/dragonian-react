import React, {Component} from 'react';
import './Navbar.css';
import UserButton from '../UserButton';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
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
            <img alt="Dragons Lair Banner" className="Banner" src="/img/Title_Banner_Top.svg"/>
            <span className="FlexSpacer"></span>
            <UserButton user={this.props.user}/>
          </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;