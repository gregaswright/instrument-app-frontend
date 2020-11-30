import React from 'react'
import NavBar from '../component/NavBar'
import {Button, ButtonToolbar} from 'react-bootstrap'
import InstrumentModal from '../component/InstrumentModal'
// import ListingContainer from './container/ListingContainer'

class MainContainer extends React.Component {

    state = {
        listingArray: [],
        addModalShow: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/')
            .then(response => response.json())
            .then(listingData => this.setState({ listingArray: listingData}))
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        console.log(this.state.listingArray)
        return (
            <div>
                <NavBar />
                    <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
                    <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} />
            </div>
        )
    }
}

export default MainContainer