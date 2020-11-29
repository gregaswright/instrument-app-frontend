import React from 'react'
// import ListingContainer from './container/ListingContainer'

class MainContainer extends React.Component {

    state = {
        listingArray: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/listings/1')
  .then(response => response.json())
  .then(listingData => this.setState({ listingArray: listingData}));
    }

    render() {
        console.log(this.state.listingArray)
        return (
            <h4>Stuff</h4>
        );
    }
}

export default MainContainer