import React from 'react'
import { Card } from 'semantic-ui-react'
import CartCard from '../component/CartCard'
import '../component/ListingCard.css'


export default class CartContainer extends React.Component {

    state = {
        api: [],
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/items/')
            .then(r => r.json())
            .then(data => this.setState({ api: data}))
    }

    renderListing = () => {
        return this.state.api.map(item => <CartCard key={item.id} itemObj = {item} deleteHandler = {this.deleteHandler} removeFromCartHandler={this.removeFromCartHandler} user={this.props.user} subtractFromWalletHandler={this.props.subtractFromWalletHandler} buyListing={this.buyListing}/>)
    }

    deleteHandler = (itemId) => {
        console.log(itemId)
        fetch(`http://localhost:3000/api/v1/items/${itemId}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
            },
        })
        .then(response => response.json())
        .then(() => {
            let copiedApi= [...this.state.api]
            let index = copiedApi.findIndex(itemObj => itemObj.id === itemId)
            copiedApi.splice(index, 1)
            this.setState({ api: copiedApi})
        })
    }

    removeFromCartHandler = ( listingId) => {
        console.log( listingId)
        fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                listing: {
                    in_cart: false
                }
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);})
        .catch(console.log)
    }


    buyListing = (listingId) => {
        fetch(`http://localhost:3000/api/v1/listings/${listingId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
          },
        })
        .then(response => response.json())
        .then(() => {
          let copiedApi= [...this.state.api]
          let index = copiedApi.findIndex(listingObj => listingObj.id === listingId)
          copiedApi.splice(index, 1)
          this.setState({ api: copiedApi})
      })
    }

   

    render() {
        console.log(this.props)
        return (
            <>
            <h1>My Cart</h1>
            <div className="listing-container">
            <Card.Group itemsPerRow={2}>
                {this.renderListing()}
            </Card.Group>
            </div>
            </>
        
        )
    }
}