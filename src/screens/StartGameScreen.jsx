import React from "react";
import InputNumber from "../components/InputNumber";
import Expression from "../components/Expression";
import Operators from "../constants/operators";
import InputRange from "../components/InputRange";
import {connect} from 'react-redux';


import {setOperator,
    setMaxNumber1,
    setMaxNumber2,
    setMinNuber1,
    setMinNuber2,
    setNumberExercises,
    showAlert,
    onGame} from '../redux/actions';
import Alert from "../components/Alerts";
import Spinner from "react-bootstrap/Spinner";

const StartGameScreen = ({
                             minNumber1,
                             maxNumber1,
                             minNumber2,
                             maxNumber2,
                             operator,
                             numberExercises,
                             setOperator,
                             setMaxNumber1,
                             setMaxNumber2,
                             setMinNuber1,
                             setMinNuber2,
                             setNumberExercises,
                             showAlert,
                             alert,
                             onGame
                         }) => {


    const onStartHandler = () => {

        let errors = [];

        if (minNumber1>maxNumber1) {
            errors.push("Ошибка настройки диапазона первого числа");
        }
        if (minNumber2>maxNumber2) {
            errors.push("Ошибка настройки диапазона второго числа");
        }

        if (errors.length) {
            showAlert(errors);
        }
        else {
            onGame(minNumber1, minNumber2, maxNumber1, maxNumber2, operator, numberExercises);
        }

    }

    return (

        <div>

            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>

            <h3>Настраиваем упражнение</h3>

            <div className="card" style={{"width": 400, "marginLeft": "auto", "marginRight": "auto", "marginTop": 20}}>

                {alert.map((text, id) => (<Alert text={text} key={id}/>))}

                <InputNumber title={"Количество задач"} onChange={setNumberExercises} value={numberExercises}/>

                <InputRange title={"Первое число"} maxValue={maxNumber1} minValue={minNumber1}
                            onChangeMin={setMinNuber1} onChangeMax={setMaxNumber1}/>
                <InputRange title={"Второе число"} maxValue={maxNumber2} minValue={minNumber2}
                            onChangeMin={setMinNuber2} onChangeMax={setMaxNumber2}/>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Операция</label>
                    <select className="form-control" id="exampleFormControlSelect1"
                            onChange={(event) => setOperator(event.target.value)}>

                        <option>{Operators.addition}</option>
                        <option>{Operators.multiplication}</option>


                    </select>
                </div>

                <Expression number1={"[" + minNumber1 + "..." + maxNumber1 + "]"} operator={operator}
                            number2={"[" + minNumber2 + "..." + maxNumber2 + "]"} result="?"/>
                <button className="btn btn-primary" onClick={() => onStartHandler()}> Старт</button>

            </div>
        </div>);
};

const mapStateToProps = state => {
    return {
        minNumber1: state.app.minNumber1,
        minNumber2: state.app.minNumber2,
        maxNumber1: state.app.maxNumber1,
        maxNumber2: state.app.maxNumber2,
        operator: state.app.operator,
        numberExercises: state.app.numberExercises,
        alert: state.app.alert
    }
}

const mapDispatchToProps = {
    setOperator,
    setMaxNumber1,
    setMaxNumber2,
    setMinNuber1,
    setMinNuber2,
    setNumberExercises,
    showAlert,
    onGame
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGameScreen);