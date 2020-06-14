import React from 'react';
import './App.css';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Header from './components/Header';
import MathExpressionIndicator from './components/MathExpressionIndicator';

import {connect} from 'react-redux'

const App = ({start, game, finish, startGenerationMathematicalExpressions}) => {

    let content = <StartGameScreen/>;

    if (game) {
        if (startGenerationMathematicalExpressions) {
            content = <MathExpressionIndicator/>;
        } else
        {
            content = <GameScreen/>;
        }
    }
    else if (finish) {
         content = <GameOverScreen/>;
    }

    return (
    <div className="App">
        <Header/>
        {content}
        </div>);
}


const mapStateToProps = state => {
    return {
        start:  state.app.start,
        game:   state.app.game,
        startGenerationMathematicalExpressions:state.app.startGenerationMathematicalExpressions,
        finish: state.app.finish,
        errors: state.app.errors
    }
}

export default connect(mapStateToProps) (App);
