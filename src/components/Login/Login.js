import React from 'react'
import LoginUser from '../../containers/LoginUser/LoginUser';
import CreateUser from '../../containers/CreateUser/CreateUser';
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="create-user-container">
        <CreateUser />
      </div>
      <div className="login-user-container">
        <LoginUser />
      </div>
    </div>
  )
}

export default Login; 