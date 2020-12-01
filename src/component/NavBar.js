import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import Signup from "./Signup"
import './NavBar.css'

class Navbar extends Component {
    state = { 
        barsClick: false,
        signupClick: false
    }

    handleClick = () => {
        this.setState({ barsClicked: !this.state.barsClick })
    }

    handleSignupClick = () => {
        this.setState({signupClick: !this.state.signupClick})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Instruments<i className="fas fa-music"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.barsClick ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.barsClick ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })}
                </ul>
                <Button onClick={this.handleSignupClick}>Sign Up</Button>
                {this.state.signupClick ? <Signup signupHandler={this.props.signupHandler}/> : null}
            </nav>
        )
    }
}

export default Navbar