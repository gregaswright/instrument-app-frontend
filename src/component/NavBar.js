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
        cart: []
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

    isUser = () => {
        return this.props.user.length === 0 ? <></> : <li className="welcome-user">Welcome {this.props.user.username}</li>
    }

    componentDidMount(){
        fetch("http://localhost:3000/api/v1/carts")
            .then(r => r.json())
            .then(data => this.setState({cart: data}))
    }

    showCartNum = () => {
        this.state.cart.map((cart, index) => {
            return cart.user_id === this.props.user.id ? <>s</> : <>s</>
        })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Instruments<i className="fas fa-music"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.barsClick ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.barsClick ? 'nav-menu active' : 'nav-menu'}>
                {this.isUser()}
                {MenuItems.map((item, index) => {
                    if(item.title === "Cart"){
                        return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}{this.showCartNum}</a></li>
                        )
                    }
                    return(
                        <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
                    )
                })}
                </ul>
                { this.props.user.length === 0 ? this.renderButtons() : <Button onClick={this.props.logOutHandler}>Log Out</Button>}
                
            </nav>
        )
    }
}

export default Navbar

