import React from 'react'
import {connect} from "react-redux"
import Spinner from 'react-bootstrap/Spinner'


const MathExpressionIndicator = ({numberExercises, mathematicalExpressions}) => {
    return (
        <div>


            <h3>Придумываем примеры</h3>

            <Spinner animation="border" variant="primary" />

            <table className="table" style={{"width": 400,  "marginLeft": "auto", "marginRight": "auto", "marginTop": 20}}>
                <thead>
                <tr>
                    <th scope="col">№</th>
                    <th scope="col">Пример</th>
                </tr>
                </thead>
                <tbody>
                {mathematicalExpressions.map((expressions, key) => (
                    <tr key={expressions.id}>
                        <th scope="row">{expressions.id}</th>
                        <td>{expressions.number1 + " " + expressions.operator + " " + expressions.number2} </td>
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

export default connect(mapStateToProps, null)(MathExpressionIndicator);


