import React from 'react'
import { Card } from 'semantic-ui-react'
import './ListingCard.css'

export default class ListingCard extends React.Component {

    

    localClickHandler = () => {
       
        this.props.inCartHandler(this.props.listingObj.id)
        
        this.props.addToCartHandler(this.props.listingObj.id)
    }

   

    render() {
        return(
            <Card fluid color="black" centered >
            <div>
                <div className="image">
                    <img className="crop-img" src={this.props.listingObj.img} alt="img" />
                </div>
                <div className="content">
                    <div className="header">{this.props.listingObj.instrument_type}</div>
                </div>
                <div className="extra content">
                    <span>
                        <div className="history">Background: {this.props.listingObj.history}</div>
                        <div className="weight">Weight: {this.props.listingObj.weight}</div>
                        <div className="age">Age: {this.props.listingObj.age}</div>
                        <div className="used?">{this.props.listingObj.used ? "Used" : "New"}</div>
                        <div className="price">Price: {this.props.listingObj.price}$</div>
                        <div className="username">Person Selling: {this.props.listingObj.user.username}</div>
                        {this.props.user.length == 0 ? <div></div> : <button onClick={this.localClickHandler}>Add to Cart</button>}
                    </span>
                </div>
                <br />
            </div>
            </Card>
        )
    }
}