import React, {Component} from 'react';


export default class EventDemo extends Component{

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

  }
  render(){
    return(
			<div>
        <h3>Event Ex </h3>
        <button className ="btn-primary" onClick={this.handleClick.bind(this)}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button><br/><br/>
        <button onClick={press}>
          Press Me
        </button>

			</div>
		);
  }
}


function press(){
  alert("Button has press")
}
