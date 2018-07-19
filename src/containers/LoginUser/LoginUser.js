import React, { Component } from 'react'

export class LoginUser extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <form>
        <input
          className="login_user"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="login_user"
          type="text"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default LoginUser;