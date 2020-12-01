import React from 'react'
import MenuItems from '../component/MenuItems'
import NavBar from '../component/NavBar'
import {Button, ButtonToolbar} from 'react-bootstrap'
import InstrumentModal from '../component/InstrumentModal'
import ListingContainer from './ListingContainer'
import { Route, withRouter } from 'react-router-dom'
import FavoriteCard from '../component/FavoriteCard'
import ListedInstrumentCard from '../component/ListedInstrumentCard'

class MainContainer extends React.Component {

    state = {
        addModalShow: false,
        user: null
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
        .then(userData => this.setState({ user: userData.user }))
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
        .then(console.log)
        .then(data => {
            localStorage.setItem("token", data.jwt)
            this.setState({ user: data.user }, () => this.props.history.push("/listings"))
        })
    }

    logOutHandler = () => {
        localStorage.removeItem("token")
        this.props.history.push("/listings")
        this.setState ({user: null})
    }

    renderFavorite = () => {

    }

    renderListedInstruments = () => {

    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            <div className="main-container">
                <NavBar loginHandler={this.loginHandler} signupHandler={this.signupHandler} user={this.state.user} logOutHandler={this.logOutHandler} />

                <Route path="/listings" render={() => <ListingContainer />}/>
                <Route path="/favorites" render={() => <FavoriteCard />}/>
                <Route path="/listed-instruments" render={() => <ListedInstrumentCard />}/>

                <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
                <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} />
            </div>
        )
    }
}

export default withRouter(MainContainer)