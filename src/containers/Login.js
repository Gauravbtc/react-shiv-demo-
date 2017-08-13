import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup,FormControl, ControlLabel,} from 'react-bootstrap';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange(event){
      this.setState({
        [event.target.id]: event.target.value
      });
    }

  handleSubmit(event){
    event.preventDefault();
    let username = this.state.username;
    let pwd = this.state.password;
    if(username =="admin" && pwd == "admin"){
      const userToken = "Welcome";
      this.props.updateUserToken(userToken);
      this.props.history.push('/');
    }
    else {
      alert("wrog");
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange.bind(this)} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
              type="password" />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={ ! this.validateForm() }
            type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
