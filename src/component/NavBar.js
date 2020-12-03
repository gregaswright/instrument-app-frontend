import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "./Button"
import Signup from "./Signup"
import Login from "./Login"
import './NavBar.css'

class Navbar extends Component {
    state = { 
        barsClick: false,
        signupClick: false,
        loginClick: false,
    }

    handleClick = () => {
        this.setState({ barsClicked: !this.state.barsClick })
    }

    handleSignupClick = () => {
        this.setState({signupClick: !this.state.signupClick})
    }

    handleLoginClick = () => {
        this.setState({loginClick: !this.state.loginClick})
    }

    renderButtons = () => {
        return (
            <>
                <Button onClick={this.handleSignupClick}>Sign Up</Button>
                {this.state.signupClick ? <Signup signupHandler={this.props.signupHandler} /> : null}
                <Button onClick={this.handleLoginClick}>Login</Button>
                {this.state.loginClick ? <Login loginHandler={this.props.loginHandler} /> : null}
            </>
        )
    }

    renderNavItems() {
        MenuItems.map((item, index) => {
            return(
                    <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
        })
    }

    renderSingleNavItem() {
        return(
            <li><a className={MenuItems[0].cName} href={MenuItems[0].url}>{MenuItems[0].title}</a></li>
        )
    }

    render() {
        console.log(this.props.user)
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Instruments<i className="fas fa-music"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.barsClick ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.barsClick ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                    )
                })}
                <h3>My Wallet: {this.props.user.wallet}$</h3>
                </ul>
                { this.props.user.length === 0 ? this.renderButtons() : <Button onClick={this.props.logOutHandler}>Log Out</Button>}
                
            </nav>
        )
    }
}

export default Navbar

