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
        fetch('http://localhost:3000/api/v1/listings/1')
            .then(response => response.json())
            .then(listingData => this.setState({ listingArray: listingData}))
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            //the nav bar is going to hold the render functions
            <div>
                <NavBar />
                <ButtonToolbar>
                    <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
                    <InstrumentModal show={this.state.addModalShow} onHide={addModalClose}></InstrumentModal>
                </ButtonToolbar>
            </div>
        )
    }
}

export default MainContainer