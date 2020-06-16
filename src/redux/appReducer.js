import {
    SET_MIN_NUMBER1,
    SET_MIN_NUMBER2,
    SET_MAX_NUMBER1,
    SET_MAX_NUMBER2,
    SET_OPERATOR,
    SET_NUMBER_EXERCISES,
    ON_START,
    ON_GAME,
    ON_FINISH,
    SET_ERRORS,
    SHOW_ALERT,
    HIDE_ALERT,
    RESET_MATHEMATICAL_EXPRESSIONS,
    GENERATION_MATHEMATICAL_EXPRESSIONS,
    FINISH_GENERATION_MATHEMATICAL_EXPRESSIONS,
    START_GENERATION_MATHEMATICAL_EXPRESSIONS,
    CLICK_GAME_BUTTON,
    SET_CURRENT_ANSWER, USER_RESPONSE
} from './types'

import Operators from "../constants/operators"

const initialState = {numberExercises: 10,
    minNumber1: 1,
    minNumber2: 1,
    maxNumber1: 10,
    maxNumber2: 10,
    operator: Operators.addition,
    start: true,
    game: false,
    finish: false,
    alert: [],
    mathematicalExpressions: [],
    startGenerationMathematicalExpressions: false,
    idCurrentExercise: 1,
    currentAnswer: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_MIN_NUMBER1:
            return {...state, minNumber1: action.payload}
        case SET_MIN_NUMBER2:
            return {...state, minNumber2: action.payload}
        case SET_MAX_NUMBER1:
            return {...state, maxNumber1: action.payload}
        case SET_MAX_NUMBER2:
            return {...state, maxNumber2: action.payload}
        case SET_OPERATOR:
            return {...state, operator: action.payload}
        case SET_NUMBER_EXERCISES:
            return {...state, numberExercises: action.payload}
        case SET_ERRORS:
            return {...state, errors: action.payload}
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: []}
        case ON_START:
            return {...state, start: true, game: false, finish: false}
        case ON_GAME:
            return {...state, start: false, game: true, finish: false}
        case ON_FINISH:
            return {...state, start: false, game: false, finish: true}
        case    RESET_MATHEMATICAL_EXPRESSIONS:
            return {...state, mathematicalExpressions: []}
        case    GENERATION_MATHEMATICAL_EXPRESSIONS:
            return {...state, mathematicalExpressions: [...state.mathematicalExpressions, action.payload]}
        case START_GENERATION_MATHEMATICAL_EXPRESSIONS:
            return {...state, startGenerationMathematicalExpressions: true}
        case FINISH_GENERATION_MATHEMATICAL_EXPRESSIONS:
            return {...state, startGenerationMathematicalExpressions: false}
        case CLICK_GAME_BUTTON:
            return {...state, currentAnswer: Number(String(state.currentAnswer) + String(action.payload))}
        case SET_CURRENT_ANSWER:
            return {...state, currentAnswer: action.payload}
        case USER_RESPONSE:

            let stateChange = {};
            let idCurrentExercise = state.idCurrentExercise;
            if (state.numberExercises === idCurrentExercise) {
                stateChange = {...stateChange, start: false, game: false, finish: true};
            }
            else {
                stateChange = {...stateChange, idCurrentExercise:state.idCurrentExercise+1};
            }

            stateChange = {...stateChange, currentAnswer:0};

            stateChange = {...stateChange, mathematicalExpressions: state.mathematicalExpressions.map(item => {
                    if(item.id === idCurrentExercise) {
                        return {
                            ...item,
                            userAnswer: state.currentAnswer,
                        }
                    }
                    return item;
                })
            }

            return {...state,  ...stateChange}

        default:
            return state
    }
}
