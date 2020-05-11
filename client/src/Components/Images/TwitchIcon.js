import React, {Component} from 'react';

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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.74 87.67" className={this.props.className}>
          <g data-name="Layer 2">
            <path
              d="M5.89 0L0 15.05v61.49h20.94v11.13h11.77l11.12-11.13h17l22.9-22.89V0zm70 49.72L62.81 62.81H41.87L30.75 73.93V62.81H13.08v-55h62.81zM62.81 22.9v22.87H55V22.9zm-20.94 0v22.87H34V22.9z"
              fill={this.props.fill}
              data-name={this.props.dataName}
            ></path>
          </g>
        </svg>
      </>
    );
  }
}

export default Icon;