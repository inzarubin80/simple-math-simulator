import React from 'react'
import './Game.css'

const Expression = ({number1, number2, operator, result, big=true}) => {

    return (
        <div className="card">
            <div className="card-body">

                {big && <h4>{"" + number1 + " " + operator + " " + number2 + " = " + result}</h4>}
                {!big && <h5>{"" + number1 + " " + operator + " " + number2 + " = " + result}</h5>}

            </div>
        </div>
    );
}

export  default  Expression;
