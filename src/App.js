import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Nav from './Nav'
import Jumbotron from './Jumbotron'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
