import React from "react";
import "../../public/assets/css/onPages.css";
import logo from "../../public/assets/images/logo.png"
import Navigation from "../components/Navigation";
import GetProfile from "../components/GetProfile";

class Profile extends React.Component
{
    render()
    {
        return (
            <div id="Profile" className="min-h-screen">
                <div id="profileLogo" className="flex flex-col items-center py-8">
                    <header className="w-full mb-4">
                        <Navigation />
                    </header>
                    <img src={logo} alt="logo" className="w-32 h-32 mb-4" />
                </div>
                <img alt="Back" className="w-8 h-8 mb-4 cursor-pointer" />
                <GetProfile />
            </div>
        );
    }
}

export default Profile;