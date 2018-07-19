import React from 'react'
import LoginUser from '../../containers/LoginUser/LoginUser';
import CreateUser from '../../containers/CreateUser/CreateUser';
const Login = () => {
  return (
    <div className="login-container">
      <div className="create-user">
        <CreateUser />
      </div>
      <div className="login-user">
        <LoginUser />
      </div>
    </div>
  )
}

export default Login; 