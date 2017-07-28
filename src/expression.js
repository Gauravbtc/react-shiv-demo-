import React, {Component} from 'react';

export default class Expression extends Component {
  render(){
		return(
			<div>
        <h5>List Component</h5>
        <NumberList numbers = {this.props.numbers} />
			</div>
		);
	}
}


function operations() {
  return(
    <div>
    Add::  { 1 + 1 }<br/>
    Sub:: { 1 - 1 }<br/>
    Mul:: { 10 * 5}<br/>
    Div:: { 10 / 2}<br/>
    </div>
  );
}


function NumberList(props)
{
  const numbers = props.numbers;
  const listitems = numbers.map((number) => <li>{number * 2}</li>);
  return (
    <ul>{listitems}</ul>
  );

}
