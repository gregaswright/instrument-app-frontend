import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export default class InstrumentModal extends React.Component{

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
                        <div className="form container">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Instrument Type</Form.Label>
                                    <Form.Control placeholder="e.g: Guitar"/>
                                </Form.Group>
                            </Form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
