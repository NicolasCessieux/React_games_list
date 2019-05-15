import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import GameList from './GameList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  handleApi = (e) => {
    this.setState({ games: e });
  }
  
  render() { 
    return (
      <div className="App">
  
        <Switch>
          <Route
            exact path="/"
            render={(routeProps) => (
              <GameList {...routeProps} handleApi={this.handleApi} />
            )}
          />
          { this.state.games
            .map(game =>
              <Route
                path={`/trailer/${game.id}`}
                component={() => {
                  window.location = `${game.trailer}`; return null;
                }}
              />
            )}
        </Switch>
  
      </div>
    );
  }
}
 
export default App;

//<Route path="/détails/:id" component=/>