import Operators from "../constants/operators";

export const сreateMathExpression = (minNumber1, minNumber2, maxNumber1, maxNumber2, operator, key) => {
    if (operator === Operators.addition) {

        const valueNumber1 = getRandom(minNumber1, maxNumber1);
        const valueNumber2 = getRandom(minNumber2, maxNumber2);

        return {
            id: key,
            number1: valueNumber1,
            number2: valueNumber2,
            operator: operator,
            userAnswer: "",
            answer: valueNumber1 + valueNumber2
        };
    }
    else if (operator === Operators.multiplication)
    {
        const valueNumber1 = getRandom(minNumber1, maxNumber1);
        const valueNumber2 = getRandom(minNumber2, maxNumber2);

        return {
            id: key,
            number1: valueNumber1,
            number2: valueNumber2,
            operator: operator,
            userAnswer: 0,
            answer: valueNumber1 * valueNumber2
        };
    }
}

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}