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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.48 85.04" className={this.props.className}>
      <g data-name={this.props.dataName}>
        <g data-name={this.props.dataName}>
          <path
            d="M119 13.28a15.23 15.23 0 00-10.79-10.74C98.73 0 60.74 0 60.74 0s-38 0-47.46 2.54A15.21 15.21 0 002.54 13.28C0 22.75 0 42.52 0 42.52s0 19.77 2.54 29.24A15.21 15.21 0 0013.28 82.5C22.75 85 60.74 85 60.74 85s38 0 47.47-2.54A15.23 15.23 0 00119 71.76c2.53-9.47 2.53-29.24 2.53-29.24s-.05-19.77-2.53-29.24z"
            fill={this.props.fill}
          ></path>
          <path
            d="M48.59 60.74L80.16 42.52 48.59 24.3 48.59 60.74z"
            fill="white"
          ></path>
        </g>
      </g>
    </svg>
      </>
    );
  }
}

export default Icon;