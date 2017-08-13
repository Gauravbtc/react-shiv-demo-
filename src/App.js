import React, { Component } from 'react';
import User from './user';
import Timer from  './timer'
import Expression from './expression'
import Comment from './comment'
import EventDemo from './eventdemo'
import ReactDOM from 'react-dom';
import NameForm from './nameform';
import Home from './home';
import Contact from './contact';
import Calculator from './calculator';
import Books from './books';
import SignUp from './signup';
import Routes from './Routes';
import { withRouter,Link } from 'react-router-dom';
import { Nav,NavItem,Navbar} from 'react-bootstrap';
import RouteNavItem from './components/RouteNavItem';
import NotFound from './containers/NotFound';

import './menu.css';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    userToken: null,
    };
  }

  // updateUserToken(userToken){
  //   console.log(userToken);
  //   this.setState({
  //   userToken: userToken
  //   });
  // }

  updateUserToken = (userToken) => {
  this.setState({
    userToken: userToken
  });
}

  handleNavLink (event){
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
  }

  handleLogout(event){
  event.preventDefault();
  this.updateUserToken(null);
  this.props.history.push('/login');

}
  render() {
    const childProps = {
      userToken: this.state.userToken,
      updateUserToken: this.updateUserToken,
    };
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
      <div className="App container">
          <Navbar fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Gaurav</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              {this.state.userToken ? [<NavItem onClick={this.handleLogout.bind(this)}>Logout</NavItem>,
                  <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/contact">Contact</RouteNavItem> ]
              : [ <RouteNavItem key={1} onClick={this.handleNavLink.bind(this)} href="/signup">Signup</RouteNavItem>,
              <RouteNavItem key={2} onClick={this.handleNavLink.bind(this)} href="/login">Login</RouteNavItem> ] }

             </Nav>
           </Navbar.Collapse>
          </Navbar>
          <Routes childProps={childProps}/>
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


// class Home extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Home...</h1>
//          </div>
//       )
//    }
// }
//
// export default Home;


//const element = <Welcome name="Sara" />;
//const element =

// ReactDOM.render(
//   element,
//   document.getElementById('root1')
// );

// handleNavLink = (event) => {
//   event.preventDefault();
//   this.props.history.push(event.currentTarget.getAttribute('href'));
// }

//export default App;
export default withRouter(App);
