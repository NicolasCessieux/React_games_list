import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='Card'>

                <img src={this.props.game.pochette} alt='' />

                <h1>{this.props.game.name}</h1>

                <p>{this.props.game.description}</p>

                <p>{this.props.game.id}</p>
                
                <NavLink to={`/trailer/${this.props.game.id}`}>
                    <button
                        className='PromoButton'
                        type='button'
                        onClick=''
                        >See the trailer
                    </button>
                </NavLink>

                <button
                    className='Button'
                    type='button'
                    onClick={() => this.props.removeGame(this.props.game.id)}
                    >Remove
                </button>

            </div>
        );
    }
}
 
export default Game;