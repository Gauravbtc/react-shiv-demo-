import React, {Component} from 'react';

export default class NameForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
             formValues: {}
         }
    }

  handleChange(event){
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
    formValues[name] = value;
    this.setState({formValues})
     //this.setState({value: event.target.value});
  }




  // handleChangeText(event){
  //   this.setState({value: event.target.value});
  // }


  handleSubmit(event) {
   event.preventDefault();

   console.log(this.state.formValues);

   //alert("test"+ this.state.formValues.name);

 }


  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
      <label> Name:
        <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
      </label> <label>{this.state.formValues.name}</label> <br />
      <label> Email:
          <input type="text" name="email" placeholder="Email" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
      </label> <label>{this.state.formValues.email}</label> <br />
      <label>
        Select User: <label>{this.state.formValues.user}</label> <br />
          <select name="user" value={this.state.formValues["user"]} onChange={this.handleChange.bind(this)}>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
            <option value="client">Client</option>
          </select>
        </label><br />

      <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}


function handleChangeText(){
alert("Button has press")
}


// function FormValue(props){
//   return alert("jj");
//   //return <h1>Hello, {props.name.name}</h1>;
// }
