import React, {Component} from 'react';
import { Card, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Grid, Button, IconButton } from '@material-ui/core';
import { MdClose } from 'react-icons/md';
import "./ShuffleVoting.css";

class ShuffleVoting extends Component {
    constructor(){
        super();
        this.state = {
            theme: [],
            style: [],
            chosenTheme: "",
            chosenStyle: "",
            errorMessage: "",
            successMessage: "Choose one Style and Theme and click 'Send Vote'",
            controller: new AbortController(),
            submitDisabled: true,
        }
        this.handleStyleChange = this.handleStyleChange.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);
        this.handleVotingSubmit = this.handleVotingSubmit.bind(this);
    }

    componentDidMount(){
        fetch('/api/shuffle/voting/options', {
            signal: this.state.controller.signal
        })
        .then(res => {
            return res.json();
        }).then(resJson => {
            if(typeof resJson[0][0] !== 'undefined')
            {
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
                });
            }
        }).catch(error => console.error(error));
    }

    componentWillUnmount(){
        this.state.controller.abort();
    }

    handleStyleChange(event){
        if(this.state.chosenTheme)
        {
            this.setState({
                chosenStyle: event.target.value,
                errorMessage: "",
                successMessage: "",
                submitDisabled: false,
            });
        }
        else
        {
            this.setState({
                chosenStyle: event.target.value,
                errorMessage: "Please choose a Theme",
                successMessage: "",
                submitDisabled: true,
            });
        }
        
    }
  
    handleThemeChange(event){
        if(this.state.chosenStyle)
        {
            this.setState({
                chosenTheme: event.target.value,
                chosenThemeID: event.target.key,
                errorMessage: "",
                successMessage: "",
                submitDisabled: false,
            });
        }
        else
        {
            this.setState({
                chosenTheme: event.target.value,
                errorMessage: "Please choose a Style",
                successMessage: "",
                submitDisabled: true,
            });
        }
    }

    handleVotingSubmit()
    {
        if(this.state.chosenStyle && this.state.chosenTheme)
        {
            let themeID;
            let styleID;
            this.state.style.forEach(style => {
                if(style.Name === this.state.chosenStyle)
                {
                    styleID = style.ID;
                }
            });
            this.state.theme.forEach(theme => {
                if(theme.Name === this.state.chosenTheme)
                {
                    themeID = theme.ID;
                }
            });
            
            let payload = {
                shuffleThemeID: themeID,
                shuffleStyleID: styleID,
            };
        
            fetch('/api/shuffle/voting/submit', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                signal: this.state.controller.signal
            }).then(res => {
                return res.json();
            }).then(resJson => {
                if(resJson.Error)
                {
                    this.setState({
                        errorMessage: resJson.Error
                    });
                }
                else
                {
                    if(resJson.Success)
                    {
                        this.setState({
                            successMessage: resJson.Success
                        });
                    }
                }
            }).catch(error => console.error(error));
        }
        else
        {
            this.setState({
                errorMessage: "Must choose Theme and Style",
                submitDisabled: true,
            });
        }
    }

    render () {
        return (
        <>
            <Card id="ShuffleVoting" tabIndex={-1}>
                <FormControl component="fieldset" className="ShuffleVotingFC">
                    <Grid container>
                        <Grid item xs={12} className="VotingClose"><IconButton onClick={this.props.close}><MdClose /></IconButton></Grid>
                        
                        <Grid item xs={6}>
                            <FormLabel component="legend">Styles</FormLabel>
                            <RadioGroup aria-label="Style Choice" name="StyleChoice" value={this.state.chosenStyle} onChange={(event)=>this.handleStyleChange(event)}>
                                {
                                    this.state.style.map(style => (
                                        <FormControlLabel key={style.ID} value={style.Name} control={<Radio />} label={style.Name} />
                                    ))
                                }
                            </RadioGroup>
                        </Grid>

                        <Grid item xs={6}>
                            <FormLabel style={{textAlign: "right"}} component="legend">Themes</FormLabel>
                            <RadioGroup aria-label="Theme Choice" name="ThemeChoice" value={this.state.chosenTheme} onChange={(event)=>this.handleThemeChange(event)}>
                                {
                                    this.state.theme.map(theme => (
                                        <FormControlLabel key={theme.ID} value={theme.Name} control={<Radio />} label={theme.Name} labelPlacement="start" />
                                    ))
                                }
                            </RadioGroup>
                        </Grid>

                        
                        <Grid item xs={6}>
                            <Button className="SubmitVotingButton" onClick={this.handleVotingSubmit} variant="contained" color="primary" disabled={this.state.submitDisabled}>Send Vote</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <FormLabel className="ErrorMessage" component="legend">{this.state.errorMessage}</FormLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel className="SuccessMessage" component="legend">{this.state.successMessage}</FormLabel>
                        </Grid>
                    </Grid>
                </FormControl>
            </Card>
        </>
        );
    }
}

export default ShuffleVoting;