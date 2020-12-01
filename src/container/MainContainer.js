import React from 'react'
import NavBar from '../component/NavBar'
import {Button, ButtonToolbar} from 'react-bootstrap'
import InstrumentModal from '../component/InstrumentModal'
import ListingContainer from './ListingContainer'
// import ListingContainer from './container/ListingContainer'

class MainContainer extends React.Component {

    state = {
        addModalShow: false
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            <div>
                <NavBar />
                <ListingContainer />
                    <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
                    <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} />
            </div>
        )
    }
}

export default MainContainer