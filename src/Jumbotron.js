import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'

export default class ErndoJumbotron extends React.Component {
  render () {
    return (
      <Jumbotron>
        <h1>Erndo is sooooo great</h1>
        <p>You're gonna love it!</p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    )
  }
}
