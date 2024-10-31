import React from "react";
import "../../public/assets/css/onPages.css";
import logo from "../../public/assets/images/logo.png"
import Navigation from "../components/Navigation";
import GetProfile from "../components/GetProfile";

class Profile extends React.Component {
    render() {
        return (
            <div id="Profile">
                <div id="profileLogo">
                    <header>
                        <Navigation />
                    </header>
                    <img src={logo} alt="logo" />
                </div>
                <img alt="Back" />
                <GetProfile username={username}/>
            </div>
        );
    }
}

export default Profile;