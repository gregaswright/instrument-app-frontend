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
        return this.state.api.map(listing => <ListingCard 
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
        return(
            <Card.Group itemsPerRow={2}>
                {this.renderListing()}
            </Card.Group>
        )
    }
}