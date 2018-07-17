import React, { PureComponent } from 'react';
import Player from './Player'
import PlayerForm from './PlayerForm'

class Scoreboard extends PureComponent {
  state = {
    players: [{
      name: 'Munish',
      score: 0,
    },
    {
      name: 'Jackson',
      score: 0,
    }, {
      name: 'Rein',
      score: 0
    }]
  }

  renderPlayers = () => {
    return this.state.players.map(player => {
      return <Player 
        name={player.name} 
        incrementMe={() => this.incrementScore(player.name)} 
        key={player.name} 
        score={player.score}
      />
    }) 
  }

  addNewPlayer = (name) => {
    const newPlayer = {
      name: name,
      score: 0 
    }
    const newPlayers = this.state.players.concat(newPlayer)
    this.setState({ players: newPlayers })
  }

  incrementScore = (playerName) => {
    const newPlayers = this.state.players.map(player => {
      if(player.name === playerName){
        return {
          ...player,
          score: player.score + 1
        }
      }
      return player
    })

    this.setState({
      players: newPlayers
    })
  }

  render() {
    return (
      <div>
        { this.renderPlayers() }
        <PlayerForm addNewPlayer={this.addNewPlayer}/>
      </div>
    );
  }
}

export default Scoreboard;
