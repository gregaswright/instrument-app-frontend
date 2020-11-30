import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export default class InstrumentModal extends Component{

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            create new listing
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        add in form field for new listing
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
