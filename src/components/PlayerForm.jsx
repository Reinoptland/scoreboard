import React, { Component } from 'react'

class PlayerForm extends Component {
  state = {
    newPlayerName: ''
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewPlayer(this.state.newPlayerName)
    this.setState({ newPlayerName: '' })
  }

  handleChange = (event) => {
    this.setState({ newPlayerName: event.target.value })
  }

  render(){

    return (
      <div > 
        <form onSubmit={this.handleSubmit} >
          <label>name</label>
          <input 
            onChange={this.handleChange} 
            value={this.state.newPlayerName}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default PlayerForm