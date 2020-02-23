import React, {Component} from 'react';
import { GridList, GridListTile, Card, Backdrop, CircularProgress, IconButton, ListSubheader, GridListTileBar, Icon } from '@material-ui/core';
import { FaVoteYea } from 'react-icons/fa';
import { GiSpikedDragonHead } from 'react-icons/gi';
import "./ShuffleVoting.css";

class ShuffleVoting extends Component {
  constructor(){
    super();
    this.state = {
      loading: false,
      theme: [],
      style: [],
    }
  }

  componentDidMount(){
    this.setState({
        loading: true,
    });

    fetch('/api/shuffle/voting/options')
    .then(res => {
        return res.json();
    }).then(resJson => {
        if(typeof resJson[0][0] !== 'undefined'){
            let tempTheme = [];
            let tempStyle = [];
            resJson[0].forEach(option => 
            {
                if(option.IsTheme === '1')
                {
                    tempTheme.push(option);
                }
                else 
                {
                    tempStyle.push(option);
                }
            });
            this.setState({
                theme: tempTheme,
                style: tempStyle,
                loading: false,
            });
        }
    }).catch(error => console.error(error));
  }

  componentWillUnmount(){
    this.state.controller.abort();
  }

  render () {
    return (
      <>
        <Card id="ShuffleVoting" tabIndex={-1}>
            <GridList cellHeight={180} className="ShuffleVotingThemes">
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Themes</ListSubheader>
                </GridListTile>
                {this.state.theme.map(theme => 
                (
                    <GridListTile key={theme.ID}>
                        {theme.Icon}
                        <GridListTileBar
                            title={theme.Name}
                            actionIcon={
                                <IconButton aria-label={`info about {theme.Name}`} className="ThemeButton">
                                    <FaVoteYea />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <GridList cellHeight={180} className="ShuffleVotingThemes">
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Styles</ListSubheader>
                </GridListTile>
                {this.state.style.map(style => 
                (
                    <GridListTile key={style.ID}>
                        {style.Icon}
                        <GridListTileBar
                            title={style.Name}
                            actionIcon={
                                <IconButton aria-label={`info about {style.Name}`} className="StyleButton">
                                    <FaVoteYea />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
            <Backdrop className="Backdrop" open={this.state.loading}>
              <CircularProgress color="inherit"/>
            </Backdrop>
        </Card>
      </>
    );
  }
}

export default ShuffleVoting;