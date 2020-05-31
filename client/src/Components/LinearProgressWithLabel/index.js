import React, {Component} from 'react';
import './LinearProgressWithLabel.css';
import { LinearProgress } from '@material-ui/core';


class LinearProgressWithLabel extends Component {
  constructor(props){
    super(props);
    //Add state variables and bindings here
    this.state = {
        
    }
    this.myRef = React.createRef();
  }

  componentDidMount(){
    let height = this.myRef.current.clientHeight;
    let textNode = document.createTextNode(this.props.label);
    let spanNode = document.createElement("span");
    spanNode.appendChild(textNode);
    // eslint-disable-next-line
    let attrStr = 'height: ' + height + 'px;' + 'line-height:' + height + 'px;';
    spanNode.classList.add('label');
    
    if(this.props.value < this.props.breakpoint){
      attrStr += 'margin-right:' + ((100 - this.props.value) - (this.props.value + 25) ) + '%;';
      spanNode.setAttribute('style', attrStr);
      spanNode.classList.add('label-right');
      this.myRef.current.appendChild(spanNode);
    } else {
      spanNode.setAttribute('style', attrStr);
      spanNode.classList.add('label-left');
      this.myRef.current.firstElementChild.appendChild(spanNode);
    }
  }

  render () {
    return (
        <>
          <LinearProgress ref={this.myRef} {...this.props} />
        </>
    );
  }
}

export default LinearProgressWithLabel;