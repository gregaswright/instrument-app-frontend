import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form, Segment } from 'semantic-ui-react'

const options = [
    {key: 'n', text: 'New', value: 'new'},
    {key: 'u', text: "Used", value: 'used'}
]

export default class InstrumentModal extends React.Component{

    state = {
        instrument_type: '', 
        brand: '', 
        used: '', 
        weight: '', 
        age: '', 
        price: '', 
        history: '',
        submittedInstrument_Type: '', 
        submittedBrand: '', 
        submittedUsed: '', 
        submittedWeight: '', 
        submittedAge: '', 
        submittedPrice: '', 
        submittedHistory: ''
    }

    handleChange = (e, {name, value}) => {
        this.setState({[name]: value});
    }

    handleSubmit = () => {
        const { instrument_type, brand, used, weight, age, price, history } = this.state

        this.setState({ submittedInstrument_Type: instrument_type, submittedBrand: brand, submittedUsed: used, submittedWeight: weight, submittedAge: age, submittedPrice: price, submittedHistory: history })
        console.log(this.state)
    }

    render() {
        const { instrument_type, brand, used, weight, age, price, history, submittedInstrument_Type, submittedBrand, submittedUsed, submittedWeight, submittedAge, submittedPrice, submittedHistory } = this.state
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
                            <Form inverted onSubmit={this.handleSubmit}>
                                <Form.Group widths='equal'>
                                    <Form.Input name='instrument_type' value={instrument_type} fluid label='Instrument Type' placeholder='e.g. Guitar' />
                                    <Form.Input name='brand' value={brand} fluid label='Brand' placeholder='e.g. Fender' />
                                    <Form.Select
                                        fluid
                                        label='Used/New'
                                        options={options}
                                        placeholder=''
                                        name="used"
                                        value={used} 
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input name='weight' value={weight} fluid label='Weight' placeholder='Pounds' />
                                    <Form.Input name='age' value={age} fluid label='Age' placeholder='Years' />
                                    <Form.Input name='price' value={price} fluid label='Price' placeholder='$0.00' />
                                </Form.Group>
                                <Form.TextArea name='history' value={history} label='History' placeholder='Tell us more about the background of the instrument...' />
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
