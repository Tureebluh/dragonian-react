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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 148 183"
          className={this.props.className}
        >
          <image
            width="148"
            height="183"
            opacity="0.8"
            xlinkHref="data:image/png;base64,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"
          ></image>
          <path
            fill="#e2e6ce"
            d="M25.2 91.8a76.7 76.7 0 011.9-18.2C32.5 51.8 51.6 25.3 74.3 25c26.6-.4 49 35.6 49 66.8 0 36.9-21.9 66.8-49 66.8s-49.1-29.9-49.1-66.8z"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M25.2 91.8a76.7 76.7 0 011.9-18.2C32.5 51.8 51.6 25.3 74.3 25c26.6-.4 49 35.6 49 66.8 0 36.9-21.9 66.8-49 66.8s-49.1-29.9-49.1-66.8z"
          ></path>
          <path
            fill="#ffd5af"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M45.9 86.4c-6.5 2-16.2-5.1-17.6-13-.6-3.2.2-6.1.8-8.7s1.6-5.9 3.8-7.4c.5-.4 1.6-1.1 8.7-1 5 0 7.5.1 9.1.9a11.5 11.5 0 016.2 8.3c.4 3.3-1.6 3.4-3.7 11.5-.5 2.3-.7 3.5-1.8 5.1a10.7 10.7 0 01-5.5 4.3z"
          ></path>
          <path
            fill="#f39ec8"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M91.6 37c-1.4 1.1.5 3.5.2 10.8-.1 2.5-.4 2.4-.9 7.3s-.9 8.9 0 10.7 5.2 5.5 8.3 4.9 5.2-8 8.4-8.1c1.6-.1 3.7 1.7 6.4 8.8 2.4 9.6 3.5 11.5 4 11.4s.8-8-.4-14.7a61.5 61.5 0 00-3.1-10.9 40.4 40.4 0 00-6-11C103 39.5 93.9 34.8 91.6 37z"
          ></path>
          <path
            fill="#ffd7b3"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M109.1 88.1c-8.5-.8-21.7 19.1-16 31.5a23.3 23.3 0 0011.5 10.7c2.4 1 3.5 1.5 5 1.3 7.1-1.1 12.8-16.6 9.4-29.5-.3-1.1-3.5-13.5-9.9-14z"
          ></path>
          <path
            fill="#daeb94"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M41.3 134.3c-1.5 1.1.7 7.5 4.3 12.1s7.7 6.4 13.1 8.8 6.6 2.1 8.5 1.7 4.5-1 5.5-4-.8-6.3-3.4-8c-5-3.1-10.3 3.1-15.4.1-3.3-1.9-2.6-5.5-7.9-9-1.1-.8-3.6-2.5-4.7-1.7z"
          ></path>
          <path
            fill="#a7b6eb"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M75.4 79c7.1 2.7 8.9 27.4-3.3 36.6-5.2 4-12.2 4.3-12.9 4.3-3.4.1-8.4.3-10-2.8s2.4-8.7 3-9.4c3.5-4.1 6.1-3 8.5-6.2s-.6-9.3 2.3-15.1 8.8-8.7 12.4-7.4z"
          ></path>
          <path
            fill="#dfeea1"
            stroke="#231f20"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="0.5"
            d="M60.9 31.2c0 2.1 4.7 4 8 4.3s8.3-.2 10.1-3.9c.6-1.4 1-3.7-.1-5.1-3.3-4-17.9.9-18 4.7z"
          ></path>
        </svg>
      </>
    );
  }
}

export default Icon;