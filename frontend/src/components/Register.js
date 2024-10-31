import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getProfile, register } from "../../../backend/api";

class Register extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      username: "",
      password: "",
      bio: "",
      email: "",
      image: null
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = async () => {
    const { username, password, image, bio, email } = this.state;
    console.log("Get prof")
    const response = await getProfile(username);
    
    if (response === false)
    {
      console.log("Start reg")
        const registered = await register(username, password, image, bio, email);
        if (registered)
        {
            alert("Registered succesfully, welcome " + username);
            localStorage.setItem("username", username);
            // navigate("/");
        }
        else
        {
            alert("An error occured when registering")
        }
    }
    else
    {
      console.log("DID NOT Start reg")

        alert("Username already in use");
    }
  };

  render()
  {
    const { username, password, bio, email } = this.state;

    return (
        <div className="flex flex-col w-52 align-center gap-1">
            <p>Profile Picture (optional)</p>
            <input
                type="file"
                name="image"
                accept="image/*"
                onChange={this.handleImageChange}
                />
            <h3>Email</h3>
            <input className="text-black" type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="john.wick@recordshare.com"></input>
            <h3>Username</h3>
            <input className="text-black" type="text" name="username" value={username} onChange={this.handleInputChange} placeholder="John1234"></input>
            <p>Password</p>
            <input className="text-black" type="password" name="password" value={password} onChange={this.handleInputChange} placeholder="********"></input>
            <p>Bio</p>
            <textarea className="text-black" type="text" name="bio" value={bio} onChange={this.handleInputChange} placeholder="Boogie man"></textarea>
            <button className="mt-2" onClick={this.handleRegister}>Register</button>
        </div>
    );
  }
}

export default Register;
