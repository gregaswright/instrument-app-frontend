import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form, Segment } from 'semantic-ui-react'

const options = [
    {key: 'n', text: 'New', value: false},
    {key: 'u', text: "Used", value: true}
]

export default class InstrumentModal extends React.Component{

    state = {
        instrument_type: '', 
        brand: '', 
        used: null, 
        weight: '', 
        age: '', 
        price: '', 
        history: '',
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    }

    render() {
        const { instrument_type, brand, used, weight, age, price, history } = this.state
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className="form container">
                            <Segment inverted>
                            <Form inverted onSubmit={(e) => {
                                this.props.handleSubmit(this.state)
                            }}>
                                <Form.Group widths='equal'>
                                    <Form.Input onChange={this.handleChange} name='instrument_type' value={instrument_type} fluid label='Instrument Type' placeholder='e.g. Guitar' />
                                    <Form.Input onChange={this.handleChange} name='brand' value={brand} fluid label='Brand' placeholder='e.g. Fender' />
                                    <Form.Select
                                        fluid
                                        label='Used/New'
                                        options={options}
                                        placeholder=''
                                        name="used"
                                        value={used}
                                        onChange={this.handleChange} 
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input onChange={this.handleChange} name='weight' value={weight} fluid label='Weight' placeholder='Pounds' />
                                    <Form.Input onChange={this.handleChange} name='age' value={age} fluid label='Age' placeholder='Years' />
                                    <Form.Input onChange={this.handleChange} name='price' value={price} fluid label='Price' placeholder='$0.00' />
                                </Form.Group>
                                <Form.TextArea onChange={this.handleChange} name='history' value={history} label='History' placeholder='Tell us more about the background of the instrument...' />
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
