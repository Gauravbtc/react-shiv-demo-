import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SignUp extends Component {
  propTypes:{
		users: PropTypes.array
	}

  constructor(){
		super();
		this.state= {users: (this.users || [])}
	}

	onUser(user){
		this.state.users.push(user)
		this.setState({
			users: this.state.users
		});
    console.log(user)
	}

  render(){
    const users = this.state.users.map((user,i) =>
			<User key={i} email={user.email} password ={user.password} number= {user.number} />
		);
    return(
      <div>
        <SignUpForm onUser={this.onUser.bind(this)} />
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Passwod</th>
              <th>Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    );
  }
}


class SignUpForm extends Component{
  propTypes: {
		onUser: PropTypes.func
	}

  constructor(props)
  {
    super(props);
    this.state = { email: '', password: '', number: ''};
  }

  changeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  changePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  changeNumber(e){
    this.setState({
      number: e.target.value
    });
  }

  addUser(e){
    e.preventDefault();
    this.props.onUser({
      email: this.state.email,
      password: this.state.password,
      number: this.state.number
    });
    this.setState({
			email: '',
      password: '',
			number: ''
		});
  }
  render(){
    return(
      <div>
      <form onSubmit={this.addUser.bind(this)}>
        <div>
          <label htmlFor='email'>Email</label>
          <div><input type='text' id='email' value={this.state.email} onChange={this.changeEmail.bind(this)} placeholder='Title' /></div>
        </div>
        <div>
          <label htmlFor='Pasword'>Password</label>
          <div><input type='password' id='author' value={this.state.password} onChange={this.changePassword.bind(this)} /></div>
        </div>
        <div>
          <label htmlFor='Phone No'>Phone No</label>
          <div><input type='number' id='read' value={this.state.number} onChange={this.changeNumber.bind(this)} /></div>
        </div>
        <div>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
      </div>
    );
  }
}



class User extends Component{
  constructor(props){
		super(props);
	}
  render(){
    return(
        <tr>
          <td>{this.props.email}</td>
          <td>{this.props.password}</td>
          <td>{this.props.number}</td>
        </tr>
    );
  }
}
