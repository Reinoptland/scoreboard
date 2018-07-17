import React, { PureComponent } from 'react';
import Player from './Player'

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
    console.log(this.state)
    return (
      <div>
        { this.renderPlayers() }
      </div>
    );
  }
}

export default Scoreboard;
