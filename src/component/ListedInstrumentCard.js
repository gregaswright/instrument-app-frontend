import React from 'react'
import { Card } from 'semantic-ui-react'
import './ListingCard.css'

export default class ListedInstrumentCard extends React.Component{

    render() {
        return (
            <Card fluid color="black" centered className="complete-card">
            <div>
                <div className="image">
                    <img className="crop-img" src={this.props.img} alt="img" />
                </div>
                <div className="content">
                    <div className="header">{this.props.instrumentType}</div>
                </div>
                <div className="extra content">
                    <span>
                        <div className="history">Background: {this.props.history}</div>
                        <div className="weight">Weight: {this.props.weight}</div>
                        <div className="age">Age: {this.props.age}</div>
                        <div className="used?">{this.props.used ? "Used" : "New"}</div>
                        <div className="price">Price: {this.props.price}</div>
                        <div className="username">You Have Listed This Instrument</div>
                    </span>
                </div>
                <br />
            </div>
            </Card>
        )
    }
}
