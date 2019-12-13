import React, {Component} from 'react'
import './Task.css'
import './Bootstrap.css'


class Task extends Component {

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


        this.setState(() => {
            {
                return {
                    number1: this.getRandom(min, this.state.maxValue),
                    number2: this.getRandom(min, this.state.maxValue),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: min,
                    maxValue: this.state.maxValue,
                    story: []
                }
            }

        })
    }

    handleChangeMax(e) {

        let max = Number(e.target.value);


        this.setState(() => {
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
            <div class="wa box_div">

                <h1><span
                    className="badge badge-secondary">{"" + this.state.number1 + " + " + this.state.number2 + " = " + this.state.result}</span>
                </h1>

                <div className="component-button-panel">

                    <div>
                        <TaskButton by={7} incrementMethod={this.increment}/>
                        <TaskButton by={8} incrementMethod={this.increment}/>
                        <TaskButton by={9} incrementMethod={this.increment}/>
                    </div>

                    <div>
                        <TaskButton by={4} incrementMethod={this.increment}/>
                        <TaskButton by={5} incrementMethod={this.increment}/>
                        <TaskButton by={6} incrementMethod={this.increment}/>
                    </div>

                    <div>
                        <TaskButton by={1} incrementMethod={this.increment}/>
                        <TaskButton by={2} incrementMethod={this.increment}/>
                        <TaskButton by={3} incrementMethod={this.increment}/>
                    </div>


                    <div>
                        <TaskButton by={0} className="btn btn-outline-primary" incrementMethod={this.increment}/>
                    </div>

                </div>


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

                <h4>Количество ошибок: <span className="badge badge-secondary">{this.state.numberErrors}</span></h4>
                <h4>Количество решенных: <span className="badge badge-secondary">{this.state.numberСorrect}</span></h4>

                <NumberList story={this.state.story}/>

            </div>
        )
    }


    increment(by) {
        this.setState(
            () => {
                let newNumber1 = this.state.number1;
                let newNumber2 = this.state.number2;
                let newNumberErrors = this.state.numberErrors;
                let newNumberСorrect = this.state.numberСorrect;
                let newResult = this.state.result + by;

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
        this.setState(() => {
            {
                return {
                    number1: this.getRandom(this.state.minValue, this.state.maxValue),
                    number2: this.getRandom(this.state.minValue, this.state.maxValue),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: this.state.minValue,
                    maxValue: this.state.maxValue,
                    story: []
                }
            }


        })
    }


    getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

}


class TaskButton extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button className="button"
                        onClick={() => this.props.incrementMethod(this.props.by)}>{this.props.by}</button>
            </div>
        )
    }
}


function NumberList(props) {


    const listItems = props.story.map((number) =>
        <li className = {number.itsTrue ? "correctly" : "wrongly"} >{number.task}</li>
    );
    return (
        <ul className="box_block">{listItems}</ul>
    );
}


export default Task;
