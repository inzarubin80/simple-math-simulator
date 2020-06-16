import Operators from "../constants/operators";

export const сreateMathExpression = (minNumber1, minNumber2, maxNumber1, maxNumber2, operator, key) => {

    if ((operator === Operators.addition) || (operator === Operators.multiplication)) {

        const valueNumber1 = getRandom(minNumber1, maxNumber1);
        const valueNumber2 = getRandom(minNumber2, maxNumber2);

        let answerValue = 0;

        if (operator === Operators.addition) {
            answerValue = valueNumber1 + valueNumber2;
        }
        else {
            answerValue = valueNumber1 * valueNumber2;
        }

        //console.log(answerValue);

        return {
            id: key,
            number1: valueNumber1,
            number2: valueNumber2,
            operator: operator,
            userAnswer: 0,
            answer:  answerValue
        };
    }

}

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}