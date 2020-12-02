import React from 'react'
import { Card } from 'semantic-ui-react'

export default class ListedInstrumentCard extends React.Component{

    render() {
        return (
            <Card>
            <div>
                <div className="image">
                    <img src="" alt="img" />
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
                        <div className="username">Person Selling: {this.props.username}</div>
                    </span>
                </div>
                <br />
            </div>
            </Card>
        )
    }
}
