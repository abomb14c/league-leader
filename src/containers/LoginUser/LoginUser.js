import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/updateUser/updateUser';
import './login-user.css';

export class LoginUser extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h3 className="login-title">Login</h3>
        <input
          className="login-user"
          type="text"
          name="email"
          value={this.state.username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          className="login-user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button className="login-button">Login</button>
      </form>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  handleLogin: (user) => dispatch(updateUser(user))
});

export default connect(null, mapDispatchToProps)(LoginUser);