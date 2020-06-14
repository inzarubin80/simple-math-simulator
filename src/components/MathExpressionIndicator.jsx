import React from 'react'
import {connect} from "react-redux"
import Expression from "./Expression"
import Loader from "./Loader"
import Card from 'react-bootstrap/Card'

const MathExpressionIndicator = ({numberExercises, mathematicalExpressions}) => {
    return (
        <div>

            <h3>Придумываем примеры</h3>

            <Loader/>

            <Card style={{"width": 400, "marginLeft": "auto", "marginRight": "auto"}}>

                {mathematicalExpressions.map((expressions, key) =>
                    (<Expression
                        number1={expressions.number1}
                        number2={expressions.number2}
                        operator={expressions.operator}
                        big={false}
                        key={key}
                        result="?"/>))}

            </Card>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberExercises: state.app.numberExercises,
        mathematicalExpressions: state.app.mathematicalExpressions
    }
}

export default connect(mapStateToProps, null)(MathExpressionIndicator);


