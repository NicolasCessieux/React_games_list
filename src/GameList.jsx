import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Game from './Game';
import ThemeSelection from './ThemeSelection';

class GameList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          games: [],
          theme: "",
         }
    }
  
    componentWillMount() {
      axios.get(`games.json`)
        .then(res => {
          this.setState({ games: res.data });
          this.props.handleApi(res.data);
        })
    }

    removeGame = (id) => {
      const games = this.state.games;
      //games.find((game, i) => {if(game.id === id)})
      for (let i = 0; i < games.length; i ++) {
        if (games[i].id === id) {
          games.splice(i, 1);
        }
      }
      this.setState({ games: games });
    }

    handleThemeChange = (e) => {
      this.setState({ theme: e });
    }

    render() { 
      if (this.state.theme !== ""){
        return (
          <div>
            <ThemeSelection
              games= {this.state.games}
              key= {this.state.games.id}
              handleThemeChange= {this.handleThemeChange}
            />
            <div className='List'>
              {
                this.state.games
                .filter(game =>
                  game.theme === this.state.theme
                )
                .map(game =>
                  <Game 
                    game= {game}
                    key= {game.id}
                    removeGame= {this.removeGame}
                  />
                )
              }
            </div>
          </div>
        );
      } return (
          <div>
            <ThemeSelection
              games= {this.state.games}
              key= {this.state.games.id}
              handleThemeChange= {this.handleThemeChange}
            />
            <div className='List'>
              {
                this.state.games
                .map(game =>
                  <Game 
                    game= {game}
                    key= {game.id}
                    removeGame= {this.removeGame}
                  />
                )
              }
            </div>
          </div>
        );
    }
}
 
export default GameList;
