import React from 'react'

export default class Wallet extends React.Component {

    state = {
        amount: 0
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.addToWalletHandler(parseInt(this.state.amount))
        this.setState({amount: 0})
    }

    render() {
        return(
            <>
            <h1>Add Money to My Wallet</h1>
            <span>
                <form onSubmit={this.submitHandler}>
                    <input type="number" name="amount" placeholder="amount" value={this.state.amount} onChange={this.changeHandler}/>
                    <input type="submit" value="submit"/>
                </form>
            </span>
            </>
        ) 
        
    }

}