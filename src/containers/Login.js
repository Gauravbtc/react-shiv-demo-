import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup,FormControl, ControlLabel,} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
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
      this.setState({ isLoading: true });
      const userToken = "Welcome";
      this.props.updateUserToken(userToken);
      this.props.history.push('/');
      //console.log(this.props.isLoading);
    }
    else {
      alert("wrog username or password");
      this.setState({username: '',password: '',isLoading: false})
      this.props.history.push('/Login')
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
          <LoaderButton
            block
            bsSize="large"
            disabled={ ! this.validateForm() }
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…" />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
