import React from 'react'
import NavBar from '../component/NavBar'
// import ListingContainer from './container/ListingContainer'

class MainContainer extends React.Component {

    state = {
        listingArray: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/1')
            .then(response => response.json())
            .then(listingData => this.setState({ listingArray: listingData}))
    }

    render() {
        console.log(this.state.listingArray)
        return (
            //the nav bar is going to hold the render functions
            <NavBar />
        )
    }
}

export default MainContainer