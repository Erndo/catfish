import React, { Component } from 'react'
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
        <div id='section__sign-up' className='section__sign-up'>
          hiii
        </div>
        <div id='section__business' className='section__business'>
          byyeee
        </div>
        <footer>
        </footer>
      </div>
    )
  }
}

export default App
