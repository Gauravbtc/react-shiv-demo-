import React, {Component} from 'react';

export default class User extends Component{
	render(){
		return(
			<div>
				Name: {formatName(this.props.user)}<br/>
				Address: {formatAddress(this.props.user.address)}<br/><br/>
				<b>Call function with tag</b><br/>
				<App/>
			</div>
		);
	}
}


// const user = {
// 	firstName: 'Harper',
// 	lastName: 'Perez',
// 	comments: {
// 		com1: 'tt',
// 		com2: 'tttt'
// 	}
// };

function formatName(user) {
	console.log("User:"+ user)
  return user.firstName + ' ' + user.lastName
}


function formatAddress(address){
	return address.add1 + ' ' + address.add2;
}


//create element
const createexp = React.createElement(
  'h5',
  {className: 'greeting'},
  '9586049525,'
);


// function creexp(){
// 	return createexp;
// }
//proups exp


function Welcome(props) {
  return <h5>Hello, {props.name}</h5>;
}


function App() {
  return (
    <div>
      <Welcome name="Shivam" />
      <Welcome name="Karan" />
      <Welcome name="Raj" />
    </div>
  );
}
//
//
// function propsexp()
// {
//  	return <Welcome name="gaurav makwana" />
// }
