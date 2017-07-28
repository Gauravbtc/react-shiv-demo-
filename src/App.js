import React, { Component } from 'react';
import User from './user';
import Timer from  './timer'
import Expression from './expression'
import Comment from './comment'
import EventDemo from './eventdemo'
import ReactDOM from 'react-dom';

class App extends Component {


  render() {
    const user = {
    	firstName: 'Gaurav',
    	lastName: 'Makwana',
    	address: {
    		add1: 'Shivam Soc',
    		add2: 'Cambay'
    	}
    };

    const numbers = [1,2,3];
    return (
      <div>
        <Welcome name="gaurav"/>
        <User user = {user} />
        <Timer />
        <EventDemo />
        <Comment date={comment.date} text={comment.text} author={comment.author}/>
        <Expression numbers = {numbers} />
      </div>
    );
  }
}


const comment = {
 date: new Date(),
 text: "This is my first comment",
 author: {
   fName: "Gaurav",
   lName: "Makwana",
   avatarUrl: "http://vitaminocean.com//assets/vitamin-logo-79a9be84e7bd8b42ddb0e604261336f4f8811b08b6828d7cba9b5240fde3a428.svg"
 }
};
// function tick() {
//   return (
//     <Timer date = {new Date()} />
//   );
// }
// setInterval(tick, 1000)
//
 //
 //<Expression />
// function tick() {
//   return (
//     <Timer date = {new Date()} />
//   );
// }


// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// setInterval(tick, 1000);
// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root1')
//   );
// }





//proups

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//const element = <Welcome name="Sara" />;
//const element =

// ReactDOM.render(
//   element,
//   document.getElementById('root1')
// );

export default App;
