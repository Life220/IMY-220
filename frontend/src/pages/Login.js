import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { login } from "../../../backend/api";
import Register from "../components/Register";

class Login extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      username: "",
      password: "",
      register: false
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    const success = await login(username, password);
    
    if (success)
    {
      localStorage.setItem("username", username);
      navigate("/"); 
    }
    else
    {
      alert("Invalid username or password");
    }
  };

  handleRegister = () => {
    this.setState((prevState) => ({ register: !prevState.register }));
  };

  render()
  {
    const { username, password, register } = this.state;

    return (
      <div>
        <header>
          <Navigation />
        </header>
        
        <div className="flex justify-center">
          <div className="flex flex-col items-center mt-2 p-10 greetBack w-80">
            <h1>RecordShare</h1>
            <div className="flex flex-col w-52 m-2 gap-1">
              {!register ?
              (
                <>
                <h3>Username</h3>
                <input className="text-black" type="text" name="username" value={username} onChange={this.handleInputChange} placeholder="John1234"></input>
                <p>Password</p>
                <input className="text-black" type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="********"></input>
                <button className="mt-2" onClick={this.handleLogin}>Login</button>
                <button className="mt-4" onClick={this.handleRegister}>Register</button>
                </>
              )
              :
              (
                <>
                <Register />
                <button className="mt-4" onClick={this.handleRegister}>Login</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
