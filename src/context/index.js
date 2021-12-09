import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {
    state = {
        screen: 0,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }

    nextHandler = () => {
        // only set next Screen, 
        // when there is at least 2 players
        this.setState((prevState) => ({
            screen: 1
        }))
    }

    render() {
        return (
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                next: this.nextHandler
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export {
    MyContext,
    MyProvider
}