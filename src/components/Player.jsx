// src/components/Player.jsx

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    incrementMe: PropTypes.func.isRequired
  }

  
  render(){
    return (
      <div > 
        What a player {this.props.name}
        <button onClick={this.props.incrementMe}>+</button>
        {this.props.score}
      </div>
    )
  }
}

export default Player