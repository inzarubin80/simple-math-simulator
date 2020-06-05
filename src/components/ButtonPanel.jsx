import React from 'react'
import GameButton from './GameButton.jsx'

const ButtonPanel = ({increment}) => {
    return (
        <div className="component-button-panel">

            <div>
                <GameButton by={7} incrementMethod={increment}/>
                <GameButton by={8} incrementMethod={increment}/>
                <GameButton by={9} incrementMethod={increment}/>
            </div>

            <div>
                <GameButton by={4} incrementMethod={increment}/>
                <GameButton by={5} incrementMethod={increment}/>
                <GameButton by={6} incrementMethod={increment}/>
            </div>

            <div>
                <GameButton by={1} incrementMethod={increment}/>
                <GameButton by={2} incrementMethod={increment}/>
                <GameButton by={3} incrementMethod={increment}/>
            </div>

            <div>
                <GameButton by={0} className="btn btn-outline-primary" incrementMethod={increment}/>
            </div>

        </div>

    );
}

export  default  ButtonPanel;
