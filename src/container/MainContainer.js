import React from 'react'
import NavBar from '../component/NavBar'
import ListingContainer from './ListingContainer'
import { Route, withRouter } from 'react-router-dom'
import FavoriteCard from '../component/FavoriteCard'
import ListedInstrumentCard from '../component/ListedInstrumentCard'
import ListedInstrumentContainer from './ListedInstrumentContainer'
import CartContainer from '../container/CartContainer'

class MainContainer extends React.Component {

    state = {
        user: [],
        currentUserCart: null
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`},
        })
            .then(resp => resp.json())
            .then(data => this.setState({ user: data.user }))
        } else {
            this.props.history.push("/listings")
        }
    }

    signupHandler = (userObj) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userObj}),
        })
        .then(response => response.json())
        .then(userData => {
            localStorage.setItem("token", userData.jwt)
            this.setState({ user: userData.user }, () => this.props.history.push("/listings"))
            this.createCart(userData.user.id)
        })
    }

    createCart = (UserId) => {
        fetch('http://localhost:3000/api/v1/carts', {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cart: {
                user_id: UserId,
                history: false
            }}),
        })
        .then(response => response.json())
        .then(cartData => this.setState({ currentUserCart: cartData }))
    }

    addToCartHandler = (listingId) => {
        console.log(listingId)
        console.log(this.state.user.carts[0].id)
        console.log(this.state.user.carts[0])
        fetch('http://localhost:3000/api/v1/items', {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ item: {
                cart_id: this.state.user.carts[0].id,
                listing_id: listingId
            }}),
        })
        .then(response => response.json())
        .then(console.log)
    }

    

    loginHandler = (userInfo) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({ user: userInfo}),
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            this.setState({ user: data.user }, () => this.props.history.push("/listings"))
        })
    }

    logOutHandler = () => {
        localStorage.removeItem("token")
        this.props.history.push("/listings")
        this.setState ({user: []})
    }

    renderFavorite = () => {

    }

    render() {
        console.log(this.state.user)
        return (
            <div className="main-container">
                <NavBar loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.user} logOutHandler={this.logOutHandler} />

                <Route path="/listings" render={() => <ListingContainer addToCartHandler={this.addToCartHandler} user={this.state.user}/>}/>
                <Route path="/favorites" render={() => <FavoriteCard />}/>
                <Route path="/listed-instruments" render={() => <ListedInstrumentContainer user={this.state.user} />}/>
                <Route path="/cart" render={() => <CartContainer />}/>

            </div>
        )
    }
}

export default withRouter(MainContainer)