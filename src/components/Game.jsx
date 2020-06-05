import React, {Component} from 'react'
import './Game.css'
import '../Bootstrap.css'
import AnswerList from './AnswerList'
import Expression from './Expression'
import ButtonPanel from './ButtonPanel'

export default class Game extends Component {

    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMax = this.handleChangeMax.bind(this);

        this.state = {
            number1: this.getRandom(1, 100),
            number2: this.getRandom(1, 100),
            result: "",
            numberErrors: 0,
            numberСorrect: 0,
            minValue: 1,
            maxValue: 100,
            story: []
        };
    }

    handleChangeMin(e) {

        let min = Number(e.target.value);

        this.setState({
                    number1: this.getRandom(min, this.state.maxValue),
                    number2: this.getRandom(min, this.state.maxValue),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: min,
                    maxValue: this.state.maxValue,
                    story: []
        })
    }

    handleChangeMax(e) {

        let max = Number(e.target.value);

        this.setState((prev) => {
            {
                return {
                    number1: this.getRandom(this.state.minValue, max),
                    number2: this.getRandom(this.state.minValue, max),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: this.state.minValue,
                    maxValue: max,
                    story: []
                }
            }

        })
    }

    render() {
        return (
            <div className="wa box_div">

                <Expression number1={this.state.number1}  number2={this.state.number2 } result={this.state.result}/>

                <ButtonPanel increment={this.increment}/>

                <div>
                    <button className="button-reset" onClick={this.reset}>Reset</button>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">min:</span>
                    </div>
                    <input type="number" className="form-control" min={1} value={this.state.minValue}
                           onChange={this.handleChangeMin} aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">max:</span>
                    </div>
                    <input type="number" className="form-control" min={1} value={this.state.maxValue}
                           onChange={this.handleChangeMax} aria-describedby="basic-addon1"/>
                </div>

                <h4 >Количество ошибок:{this.state.numberErrors}</h4>
                <h4 >Количество решенных: {this.state.numberСorrect}</h4>

                <AnswerList story={this.state.story}/>

            </div>
        )
    }

    increment(by) {
        this.setState(
            (prev) => {
                let newNumber1 = prev.number1;
                let newNumber2 = prev.number2;
                let newNumberErrors = prev.numberErrors;
                let newNumberСorrect = prev.numberСorrect;
                let newResult = prev.result + by;

                let story;

                if (newResult != String(this.state.number1 + this.state.number2).substr(0, newResult.length)) {

                    story = [...this.state.story, {
                        task: "" + this.state.number1 + " + " + this.state.number2 + " = " + newResult,
                        itsTrue: false
                    }];
                    newNumberErrors = this.state.numberErrors + 1;
                    newResult = "";

                }
                else if (newResult == String(this.state.number1 + this.state.number2)) {

                    story = [...this.state.story, {
                        task: "" + this.state.number1 + " + " + this.state.number2 + " = " + newResult,
                        itsTrue: true
                    }];

                    newNumber1 = this.getRandom(this.state.minValue, this.state.maxValue);
                    newNumber2 = this.getRandom(this.state.minValue, this.state.maxValue);
                    newNumberСorrect = this.state.numberСorrect + 1;
                    newResult = "";

                }
                else {

                    story = [...this.state.story];
                }
                return {

                    number1: newNumber1,
                    number2: newNumber2,
                    result: newResult,
                    numberErrors: newNumberErrors,
                    numberСorrect: newNumberСorrect,
                    story: story
                }

            }
        );
    }

    reset() {
        this.setState((prev) => {
            {
                return {
                    number1: this.getRandom(this.state.minValue, this.state.maxValue),
                    number2: this.getRandom(this.state.minValue, this.state.maxValue),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: prev.minValue,
                    maxValue: prev.maxValue,
                    story: []
                }
            }
        })
    }

    getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
