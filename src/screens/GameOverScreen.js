import React from 'react'
import {connect} from 'react-redux'
import Card from "react-bootstrap/Card";


const GameOverScreen = ({numberExercises, mathematicalExpressions}) => {

    let numberCorrectAnswers = 0;
    let numberMistakes = 0;
    let rating = 0;



    mathematicalExpressions.map((item)=>{
        if (item.answer===item.userAnswer) {
            numberCorrectAnswers++
        }
        else {
            numberMistakes++
        }
    })

    let p = numberCorrectAnswers/numberExercises;

    if (p===1) {
        rating = 5;
    }
    else if (p>=0.8) {
        rating = 4;
    }
    else if (p>=0.6) {
        rating = 3;
    }
    else {
        rating = 2;
    }

    return (<Card style={{"width": 400, "marginLeft": "auto", "marginRight": "auto"}}>

        <div className="card-body">

            <h5 className="card-title">Поздравляю!!!</h5>
            <h5 className="card-title">Вы прошли испытание!!!</h5>

            <p align="left" className="card-text">Решено правильно:{numberCorrectAnswers} </p>
            <p align="left" className="card-text">Количество ошибок: {numberMistakes} </p>
            <p align="left" className="card-text">Ваша оценка: {rating} </p>

            <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>

    </Card>)

}

const mapStateToProps = state => {
    return {
        numberExercises: state.app.numberExercises,
        mathematicalExpressions: state.app.mathematicalExpressions
    }
}

export default connect(mapStateToProps, null)(GameOverScreen);
