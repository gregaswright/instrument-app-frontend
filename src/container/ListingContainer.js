import React from 'react'
import { Card } from 'semantic-ui-react'
import ListingCard from '../component/ListingCard'

export default class ListingContainer extends React.Component {
    state = {
        api: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/')
            .then(r => r.json())
            .then(data => this.setState({ api: data}))
    }

    renderListing = () => {
        let filteredListingArrayByUser = this.state.api.filter(listing => listing.user_id != this.props.user.id)
        return filteredListingArray.map(listing => <ListingCard key={listing.id} listingObj = {listing} addToCartHandler={this.props.addToCartHandler} />)
    }

    render() {
        return(
            <Card.Group itemsPerRow={2}>
                {this.renderListing()}
            </Card.Group>
        )
    }
}