import React from 'react'
import {connect} from 'react-redux'
import Card from "react-bootstrap/Card";
import {onStart} from "../redux/actions";


const GameOverScreen = ({numberExercises, mathematicalExpressions, onStart}) => {

    let numberCorrectAnswers = 0;
    let numberMistakes = 0;
    let rating = 0;


    mathematicalExpressions.map((item) => {
        if (item.answer === item.userAnswer) {
            numberCorrectAnswers++
        }
        else {
            numberMistakes++
        }
    })

    let p = numberCorrectAnswers / numberExercises;

    if (p === 1) {
        rating = 5;
    }
    else if (p >= 0.8) {
        rating = 4;
    }
    else if (p >= 0.6) {
        rating = 3;
    }
    else {
        rating = 2;
    }

    return (

        <div style={{}}>

            <Card style={{"width": 400, "marginLeft": "auto", "marginRight": "auto", "marginTop": 20}}>

                <div className="card-body">

                    <h5 className="card-title">Поздравляю!!!</h5>
                    <h5 className="card-title">Вы прошли испытание!!!</h5>

                    <p align="left" className="card-text">Решено правильно: {numberCorrectAnswers} </p>
                    <p align="left" className="card-text">Количество ошибок: {numberMistakes} </p>
                    <p align="left" className="card-text">Ваша оценка: {rating} </p>

                    <button onClick={onStart} className="btn btn-primary">Повторить</button>

                </div>
            </Card>


            <table className="table" style={{"width": 400,  "marginLeft": "auto", "marginRight": "auto", "marginTop": 20}}>
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Пример</th>
                    <th scope="col">Ответ</th>
                    <th scope="col">Правильный ответ</th>
                </tr>
                </thead>
                <tbody>
                {mathematicalExpressions.map((expressions, key) => (
                        <tr key={expressions.id} >
                            <th scope="row">{expressions.id}</th>
                            <td>{expressions.number1 + " " + expressions.operator + " " + expressions.number2} </td>
                            <td>{expressions.userAnswer}</td>
                            <td>{expressions.answer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberExercises: state.app.numberExercises,
        mathematicalExpressions: state.app.mathematicalExpressions
    }
}

const mapDispatchToProps = {
    onStart
}

export default connect(mapStateToProps, mapDispatchToProps)(GameOverScreen);
