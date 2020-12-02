import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form, Segment } from 'semantic-ui-react'

const options = [
    {key: 'n', text: 'New', value: 'new'},
    {key: 'u', text: "Used", value: 'used'}
]

export default class InstrumentModal extends React.Component{

    state = {}

    handleSubmit = () => {
        this.setState({ instrument_type: '', brand: '', used: '', weight: '', age: '', price: '', history: '' })
        console.log(this.state)
    }

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
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className="form container">
                            <Segment inverted>
                            <Form inverted onSubmit={this.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Instrument Type' placeholder='e.g. Guitar' />
                                    <Form.Input fluid label='Brand' placeholder='e.g. Fender' />
                                    <Form.Select
                                        fluid
                                        label='Used/New'
                                        options={options}
                                        placeholder=''
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Weight' placeholder='Pounds' />
                                    <Form.Input fluid label='Age' placeholder='Years' />
                                    <Form.Input fluid label='Price' placeholder='$0.00' />
                                </Form.Group>
                                <Form.TextArea label='History' placeholder='Tell us more about the background of the instrument...' />
                                <Form.Button content='Submit'>Submit</Form.Button>
                            </Form>
                            </Segment>
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
