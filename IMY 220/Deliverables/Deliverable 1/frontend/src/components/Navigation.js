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
        return (
            <div id="NavTab">
                <button onClick={this.toggleNavigation}>
                    {this.state.showNav ? "Hide Menu" : "Show Menu"}
                </button>
                {this.state.showNav && (
                    <div id="Navigation" onMouseLeave={this.closeNavigation}>
                        <h1>RecordShare</h1>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/Profile">Login</Link>
                        </nav>
                    </div>)
                }
            </div>
        );
    }
}

export default Navigation;