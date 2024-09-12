import React from "react";
import Navigation from "../components/Navigation";

class Login extends React.Component
{
  render()
  {
    return (
      <div>
        <Navigation />
        <h1>RecordShare</h1>
        <h3>Username</h3>
        <input type="text" placeholder="John1234"></input>
        <p>Password</p>
        <input type="text" placeholder="********"></input>
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
