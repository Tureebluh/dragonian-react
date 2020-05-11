import React, {Component} from 'react';
import TwitchLive from './twitch_live.png';

class Icon extends Component {
  constructor(){
    super();

    this.state = {
      
    }
  }

  componentDidMount(){
    
  }

  render () {
    return (
      <>
        <img alt="Reddragon Live On Twitch" src={TwitchLive}/>
      </>
    );
  }
}

export default Icon;