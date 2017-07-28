import React, {Component} from 'react';

export default class Comment extends Component{
  render(){
    return(
      <div class="comment-info">
  		<h3>Comment Component</h3>
  			<UserInfo user={this.props.author}/>
  			<p><b>Commented Date:</b> {formateDate(this.props.date)}</p>
  			<p><b>Comment Text:</b> {this.props.text}</p>
  		</div>
    );
  }
}

function Avatar(props){
	return(
		<span>
			<b>Profile Picture:</b> <img src={props.user.avatarUrl} alt={props.user.fName} height="100px"/>
		</span>
	);
}

function UserInfo(props){
	return(
		<div class="user-info">
			<Avatar user={props.user} />
			<p>Comment by: {formatName(props.user)}</p>
		</div>
	);
}

function formateDate(date){
	return date.toLocaleTimeString();
}

function formatName(user) {
  return user.fName + ' ' + user.lName;
}
