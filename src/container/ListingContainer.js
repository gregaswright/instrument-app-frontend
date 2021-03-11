import React from 'react'
import { Card } from 'semantic-ui-react'
import ListingCard from '../component/ListingCard'
import '../component/ListingCard.css'



export default class ListingContainer extends React.Component {
    state = {
        api: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/')
            .then(r => r.json())
            .then(data => this.setState({ api: data}))
    }

    
    inCartHandler = ( listingId) => {
        console.log( listingId)
        fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                listing: {
                    in_cart: true
                }
            }),
        })
        .then(response => response.json())
        .then(() => {
            let copiedApi= [...this.state.api]
            let index = copiedApi.findIndex(listingObj => listingObj.id === listingId)
            copiedApi.splice(index, 1)
            this.setState({ api: copiedApi})
        })
        .catch(console.log)
    }
    
    renderListing = () => {
        let filterByCart = this.state.api.filter(listings => listings.in_cart === false)
        let filteredByListingArray = filterByCart.filter(listing => listing.user_id != this.props.user.id)
        return filteredByListingArray.map(listing => <ListingCard key={listing.id} listingObj = {listing} addToCartHandler={this.props.addToCartHandler } inCartHandler={this.inCartHandler} user={this.props.user}/>)
    }

    render() {
        return(
            <>
            <h1>All Current Listings</h1>
            <div className="listing-container">
                <Card.Group itemsPerRow={2}>
                    {this.renderListing()}
                </Card.Group>
            </div>
            </>
        )
    }
}