import {
    SET_MIN_NUMBER1,
    SET_MIN_NUMBER2,
    SET_MAX_NUMBER1,
    SET_MAX_NUMBER2,
    SET_OPERATOR,
    SET_NUMBER_EXERCISES,
    SHOW_ALERT,
    HIDE_ALERT,
    ON_START,
    ON_FINISH,
    ON_GAME,
    GENERATION_MATHEMATICAL_EXPRESSIONS,
    RESET_MATHEMATICAL_EXPRESSIONS,
    START_GENERATION_MATHEMATICAL_EXPRESSIONS,
    FINISH_GENERATION_MATHEMATICAL_EXPRESSIONS,
    CLICK_GAME_BUTTON,
    SET_CURRENT_ANSWER,
    USER_RESPONSE
} from './types'

import {сreateMathExpression} from '../service/mathGenerator'

export const onStart = () => {

}

export const setCurrentAnswer = (currentAnswer) =>{
    return {
        type: SET_CURRENT_ANSWER,
        payload: currentAnswer
    }
}


export const clickGameButton = (numeral) => {
    return {
        type: CLICK_GAME_BUTTON,
        payload: numeral
    }
}

export const startGenerationMathematicalExpressions = () => {
    return {
        type: START_GENERATION_MATHEMATICAL_EXPRESSIONS
    }
}

export const finishGenerationMathematicalExpressions = () => {
    return {
        type: FINISH_GENERATION_MATHEMATICAL_EXPRESSIONS
    }
}


export const onGame = (minNumber1, minNumber2, maxNumber1, maxNumber2, operator, numberExercises) => {

    return dispatch => {

        dispatch(startGenerationMathematicalExpressions())

        dispatch({
            type: ON_GAME
        })

        let count = 0;

        const timer = setInterval(() => {

            count++;
            if (count >= numberExercises) {
                clearInterval(timer);
            }

            let expression = сreateMathExpression(minNumber1, minNumber2, maxNumber1, maxNumber2, operator, count);

            dispatch(generationMathematicalExpressions(expression));

            if (count === numberExercises){
                setTimeout(() => {
                    dispatch(finishGenerationMathematicalExpressions())
                }, 200);
            }
        }, 200)

    }
}

export const onFinich = () => {
    return {
        type: ON_FINISH
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}


export function hideAlert() {
    return {
        type: HIDE_ALERT,
        payload: []
    }
}

export const setMinNuber1 = (number) => {
    return {
        type: SET_MIN_NUMBER1,
        payload: number
    }
}

export const setMinNuber2 = (number) => {
    return {
        type: SET_MIN_NUMBER2,
        payload: number
    }
}

export const setMaxNumber1 = (number) => {
    return {
        type: SET_MAX_NUMBER1,
        payload: number
    }
}

export const setMaxNumber2 = (number) => {
    return {
        type: SET_MAX_NUMBER2,
        payload: number
    }
}

export const setOperator = (operator) => {
    return {
        type: SET_OPERATOR,
        payload: operator
    }
}

export const setNumberExercises = (number) => {
    return {
        type: SET_NUMBER_EXERCISES,
        payload: number
    }
}

export const generationMathematicalExpressions = (expressions) => {
    return {
        type: GENERATION_MATHEMATICAL_EXPRESSIONS,
        payload: expressions
    }
}

export const resetMathematicalExpressions = () => {
    return {
        type: RESET_MATHEMATICAL_EXPRESSIONS
    }
}

export const userResponse = () => {
    return {
        type: USER_RESPONSE
    }
}

