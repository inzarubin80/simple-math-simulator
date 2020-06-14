import React from 'react'
import '../components/Game.css'
import {connect} from 'react-redux'
import ButtonPanel from '../components/ButtonPanel'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'
import {clickGameButton, setCurrentAnswer,userResponse} from "../redux/actions";

const GameScreen = ({mathematicalExpressions, idCurrentExercise, currentAnswer, clickGameButton, setCurrentAnswer, userResponse}) => {

    const expression = mathematicalExpressions.find(exercise => exercise.id === idCurrentExercise);

    const handleChange = (event) => {
        setCurrentAnswer(Number(event.target.value));
    }

    return (<div>

        <h3>Считаем примеры</h3>

        <Card style={{"width": 400, "marginLeft": "auto", "marginRight": "auto"}}>

            <h5>Пример №{idCurrentExercise}</h5>

            <Card style={{"marginTop":5,"marginLeft": "auto", "marginRight": "auto", "display": "flex", "flexDirection": "row", "flexWrap": "nowrap", "textAlign": "center" }}>
                <h4 style={{"width": "60%"}}> {"" + expression.number1 + " " + expression.operator + " " + expression.number2 + " = " }</h4>
                <input style={{"width": "35%",  "marginRight": 0, "marginLeft": "auto"}}  type="number" value={currentAnswer} onChange={(event)=>handleChange(event)} />
            </Card>

            <div style={{"marginLeft": "auto", "marginRight": "auto", "margin":5}} >
                <button style={{"margin":5, "width": "30%"}} onClick={userResponse} className="btn btn-success">Отправить</button>
                <button className={"btn btn-danger"} style={{"margin":5, "width": "30%"}} onClick={()=>setCurrentAnswer(0)} >Очистить</button>
            </div>

            <ButtonPanel style={{"marginTop":5}} increment={clickGameButton}/>

        </Card>

        <ProgressBar now={100 * (idCurrentExercise-1) / mathematicalExpressions.length}
                     style={{"marginTop": 20, "height": "35px"}}/>
    </div>)
}

const mapStateToProps = state => {
    return {
        mathematicalExpressions: state.app.mathematicalExpressions,
        currentAnswer: state.app.currentAnswer,
        idCurrentExercise: state.app.idCurrentExercise
    }
}

const mapDispatchToProps = {
    clickGameButton,setCurrentAnswer,userResponse
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);