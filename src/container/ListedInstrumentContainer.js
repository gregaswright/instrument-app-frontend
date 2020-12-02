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

    renderListedInstruments() {
        this.state.api.map(listing => { 
            if (listing.user.username === this.props.user.username)
                return <ListedInstrumentCard 
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
                />
            
        })  
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            <>
            <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
            <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} />
            <Card.Group itemsPerRow={2}>
                {this.renderListedInstruments()}
            </Card.Group>

            </>
        )
    }
}
