import React, {Component} from 'react';
import { NavLink as RouterLink } from "react-router-dom";
import './SideMenu.css';
import { SwipeableDrawer, List, ListItem, Divider, Container, ListItemIcon, Grid, Link, Tooltip, Zoom } from '@material-ui/core';
import { MdHome, MdPeople, MdSettings } from "react-icons/md";
import DiscordIcon from '../Images/DiscordIcon';
import TwitchIcon from '../Images/TwitchIcon';
import YoutubeIcon from '../Images/YoutubeIcon';
import TitleBannerTwo from '../Images/TitleBannerTwo';


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
                    <TitleBannerTwo className="Banner"/>
                    
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
                    {(this.props.user.loggedIn && (this.props.user.roles.includes('Moderator') ||
                                                    this.props.user.roles.includes('Administrator'))
                    ) ? 
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
                            <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Join Discord Server">
                                <a href="https://discord.gg/GabcMqK" target="_BLANK" rel="noopener noreferrer">
                                    <span>
                                        <DiscordIcon fill="#738ADB" className="social-media"/>
                                    </span>    
                                </a>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4}>
                            <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Follow Us On YouTube">
                                <a href="https://www.youtube.com/channel/UC2DTPpS9zb--p9Rm7jZPKrA" target="_BLANK" rel="noopener noreferrer">
                                    <span>
                                        <YoutubeIcon fill="red" className="social-media"/>
                                    </span>    
                                </a>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={4}>
                            <Tooltip TransitionComponent={Zoom} className="Tooltip" title="Watch Live on Twitch">
                                <a href="https://twitch.tv/r3ddragons" target="_BLANK" rel="noopener noreferrer">
                                    <span>
                                        <TwitchIcon fill="#9146FF" className="social-media"/>
                                    </span>
                                </a>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    
                </Container>
            </div>
        </SwipeableDrawer>
    );
  }
}

export default SideMenu;