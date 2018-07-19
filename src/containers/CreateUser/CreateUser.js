import React, { Component } from 'react';

export class CreateUser extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
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
        <h3>Create Account</h3>
        <input
          className="create-user"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={this.handleChange}
        />
        <input
          className="create-user"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          className="create-user"
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <button>Create Account</button>
      </form>
    )
  }
}

export default CreateUser;