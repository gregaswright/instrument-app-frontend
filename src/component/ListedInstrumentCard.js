import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap'
import InstrumentModal from '../component/InstrumentModal'

export default class ListedInstrumentCard extends React.Component{
    state = {
        addModalShow: false
    }

    render() {
        let addModalClose = () => this.setState({ addModalShow: false })
        return (
            <div>
                <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>Add Listing</Button>
                <InstrumentModal show={this.state.addModalShow} onHide={addModalClose} />
            </div>
        )
    }
}
