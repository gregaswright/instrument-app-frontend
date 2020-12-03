import React from 'react'
import { Card } from 'semantic-ui-react'

export default class CartCard extends React.Component {

    state = {
        enoughFunds: ""
    }

    localRemoveFromCart = () => {
        this.props.removeFromCartHandler(this.props.itemObj.listing.id)
        this.props.deleteHandler(this.props.itemObj.id)
        
    }

    localPurchaseHandler = () => {
        if (this.props.user.wallet >= this.props.itemObj.listing.price) {
           
            this.props.subtractFromWalletHandler(this.props.itemObj.listing.price)
            this.props.buyListing(this.props.itemObj.listing.id) 
        } else if (this.props.user.wallet < this.props.itemObj.listing.price) {
            this.setState({ enoughFunds: "Not Enough Funds in Wallet"})
            setTimeout(() => { this.setState({ enoughFunds: ""})}, 2000)
        }
    }


    render() {
        console.log(this.props)
        return (
            <Card>
            <div>
                <h3>{this.state.enoughFunds}</h3>
                <div className="image">
                    <img src="" alt="img" />
                </div>
                <div className="content">
                    <div className="header">{this.props.itemObj.listing.brand}</div>
                </div>
                <div className="extra content">
                    <span>
                        <div className="history">History: {this.props.itemObj.listing.history}</div>
                        <div className="weight">Weight: {this.props.itemObj.listing.history}</div>
                        <div className="age">Age: {this.props.itemObj.listing.history}</div>
                        <div className="used?">{this.props.itemObj.listing.used ? "Used" : "New"}</div>
                        <div className="price">Price: {this.props.itemObj.listing.price}</div>
                        <button onClick={this.localRemoveFromCart}>Remove From Cart</button>
                        <button onClick={this.localPurchaseHandler}>Purchase</button>
                    </span>
                </div>
                <br />
            </div>
            </Card>
        )
    }
   
}