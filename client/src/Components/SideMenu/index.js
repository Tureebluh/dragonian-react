import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import './SideMenu.css';
import { SwipeableDrawer, List, ListItem, Divider, Container, ListItemIcon, Grid, Link, Tooltip, Zoom, Avatar, Typography } from '@material-ui/core';
import { MdHome, MdPeople, MdSettings } from "react-icons/md";

class SideMenu extends Component {
  constructor(){
    super();
    //Add state variables and bindings here
    this.state = {
        
    }
  }

  render () {
    const AdapterLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
    
    return (
        <SwipeableDrawer
            open={this.props.drawerOpen}
            onClose={this.props.toggleDrawer()}
            onOpen={this.props.toggleDrawer()}
        >
            <div
                className="SideMenu"
                role="presentation"
                onClick={this.props.toggleDrawer()}
                onKeyDown={this.props.toggleDrawer()}
            >
                <List className="List">
                    <ListItem className="ListItemLogo" button key="Logo">
                        <Avatar className="BrandLogo" component="span" src="/img/dragonegg_eyes.svg" alt="Baby Dragon Hatching"/>
                        <Typography variant="h6" className="Title">
                            Dragon's Lair
                        </Typography>
                    </ListItem>
                    <Link exact component={AdapterLink} className="Link" to="/">
                        <ListItem className="ListItem" button key="Home">
                        <ListItemIcon><MdHome/></ListItemIcon>
                            Home
                        </ListItem>
                    </Link>
                    <Link component={AdapterLink} className="Link" to="/shuffles">
                        <ListItem className="ListItem" button key="Shuffles">
                        <ListItemIcon><MdPeople/></ListItemIcon>
                            Community Shuffles
                        </ListItem>
                    </Link>
                    {(this.props.user.loggedIn && this.props.user.roles.includes('Moderator')) ? 
                        <Link component={AdapterLink} className="Link" to="/moderator">
                            <ListItem className="ListItem" button key="Shuffles">
                            <ListItemIcon><MdSettings/></ListItemIcon>
                                Moderator Panel
                            </ListItem>
                        </Link>
                    : null}
                </List>

                <Divider className="Divider"/>
                <Container className="Footer">

                    <Grid container className="GridSiteMap">
                        <Grid item xs={4}>
                            <Link component={AdapterLink} className="Link" to="/about-us">About Us</Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link component={AdapterLink} className="Link" to="/terms-of-service">Terms of Service</Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link component={AdapterLink} className="Link" to="/privacy-policy">Privacy Policy</Link>
                        </Grid>
                    </Grid>
                    
                    <Grid container className="GridSocial">
                        <Grid item xs={4}>
                            <a href="https://discord.gg/GabcMqK" target="_BLANK" rel="noopener noreferrer">
                                <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Join Community Discord">
                                    <img style={{height: 2.6+'em'}} alt="Discord Logo" className="social-media" src="/img/discord_logo.svg"/>
                                </Tooltip>
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.youtube.com/channel/UC2DTPpS9zb--p9Rm7jZPKrA" target="_BLANK" rel="noopener noreferrer">
                                <Tooltip TransitionComponent={Zoom} className="Tooltip" title="YouTube Channel">
                                    <img alt="YouTube Logo" className="social-media" src="/img/youtube_light.svg"/>
                                </Tooltip>
                            </a>
                        </Grid>
                        <Grid item xs={4}>
                            <a href="https://www.twitch.tv/r3ddragons" target="_BLANK" rel="noopener noreferrer">
                                <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Watch Live on Twitch">
                                    <img alt="Twitch Logo" className="social-media" src="/img/glitchbadge_purple.svg"/>
                                </Tooltip>
                            </a>
                        </Grid>
                    </Grid>
                    
                </Container>
            </div>
        </SwipeableDrawer>
    );
  }
}

export default SideMenu;