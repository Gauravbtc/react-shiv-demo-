import React, {Component} from 'react';


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
		return(
			<div>
        <h2>Clock</h2>
				<FormateDate date = { this.state.date} />
			</div>
		);
	}
}


function FormateDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}
