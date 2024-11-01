import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navigation extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            showNav: false,
        };
        this.toggleNavigation = this.toggleNavigation.bind(this);
        this.closeNavigation = this.closeNavigation.bind(this);
    }

    toggleNavigation()
    {
        this.setState((prevState) => ({
            showNav: !prevState.showNav,
        }));
    }

    closeNavigation()
    {
        this.setState({ showNav: false });
    }

    render()
    {
        const username = localStorage.getItem("username");

        return (
            <div id="NavTab">
                <button onClick={this.toggleNavigation}>
                    <h2>
                        {this.state.showNav ? "Menu" : "Menu"}
                    </h2>
                </button>
                {this.state.showNav && (
                    <div id="Navigation" onMouseLeave={this.closeNavigation}>
                        <h1>RecordShare</h1>
                        <nav>
                            <Link to="/">Home</Link>
                        </nav>
                        <nav>
                            {username ?
                            (
                                <button>Lougout</button>
                            )
                            :
                            (
                                <>
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/login">Login/Register</Link>
                                </>
                            )}
                        </nav>
                    </div>)
                }
            </div>
        );
    }
}

export default Navigation;