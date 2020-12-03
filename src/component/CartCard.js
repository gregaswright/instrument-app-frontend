import React from 'react'
import { Card } from 'semantic-ui-react'

export default class CartCard extends React.Component {

    localRemoveFromCart = () => {
        this.props.removeFromCartHandler(this.props.itemObj.listing.id)
        this.props.deleteHandler(this.props.itemObj.id)
        
    }



    render() {
        console.log(this.props.itemObj.id)
        return (
            <Card fluid color="black" centered>
            <div>
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
                        <button>Purchase</button>
                    </span>
                </div>
                <br />
            </div>
            </Card>
        )
    }
}