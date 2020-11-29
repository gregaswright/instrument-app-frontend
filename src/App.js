import React from 'react'
import './App.css';
import Header from './Header'
import MainContainer from './container/MainContainer'

class App extends React.Component {
  
  render(){
    return (
      <div className="app">
      <Header />
        <div className="login-bar">
          <h3>Log-in</h3><h3>Sign-up</h3>

        </div>
      <MainContainer />
      </div>
    );
  }
  
}

export default App;
