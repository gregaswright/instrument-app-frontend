import React from 'react'
import ListedInstrumentCard from '../component/ListedInstrumentCard'
import { Card } from 'semantic-ui-react'
import InstrumentModal from '../component/InstrumentModal'
import {Button} from 'react-bootstrap'

export default class ListedInstrumentContainer extends React.Component {

    state = {
        api: [],
        addModalShow: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/')
            .then(r => r.json())
            .then(data => this.setState({ api: data}))
    }

    handleSubmit = (listingObj) => {
        const hardData = {...listingObj, user_id: this.props.user.id, in_cart: false, user: this.props.user}
        fetch("http://localhost:3000/api/v1/listings/", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(hardData)
        })
        .then(r => r.json())
        .then(newListing => this.setState({ api: [...this.state.api, newListing] }))
        .catch(console.log)
    }

    renderListedInstruments() {
        let filteredListingArray = this.state.api.filter(listing => listing.user_id === this.props.user.id)
        return filteredListingArray.map(listing => <ListedInstrumentCard 
            key={listing.id}
            brand={listing.brand}
            instrumentType={listing.instrument_type}
            history={listing.history}
            weight={listing.weight}
            age={listing.age}
            used={listing.used}
            price={listing.price}
            img={listing.img}
            username={listing.user.username}
            />) 
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            <>
            <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
            <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} handleSubmit={this.handleSubmit} />
            <Card.Group itemsPerRow={2}>
                {this.renderListedInstruments()}
            </Card.Group>

            </>
        )
    }
}
