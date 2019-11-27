import React, {Component} from 'react'
import './Task.css'


class Task extends Component {

    constructor() {
        super();
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChangeMin.bind(this);

        this.state = {
            number1: this.getRandom(1, 50),
            number2: this.getRandom(1, 50),
            result: "",
            numberErrors: 0,
            numberСorrect: 0,
            minValue:1,
            maxValue:100
        };
    }

    handleChangeMin(event) {
        this.setState(() => {
            {
                return {
                    number1: this.state.number1,
                    number2: this.state.number2,
                    numberErrors: this.state.numberErrors,
                    numberСorrect: this.state.numberСorrect,
                    result: "",
                    minValue: Number(event.target.value),
                    maxValue:this.state.maxValue
                }
            }

        })
    }

    render() {
        return (
            <div>

                <span className="countnumberСorrect">{"Количество решенных:" + this.state.numberСorrect}</span>
                <span className="countnumberErrors">{"Количество ошибок:" + this.state.numberErrors}</span>

                Min: <input type="text" value={this.state.minValue} onChange={this.handleChange} />
                Max: <input type="text" value={this.state.maхvalue} onChange={this.handleChange} />

                <TaskButton by={1} incrementMethod={this.increment}/>
                <TaskButton by={2} incrementMethod={this.increment}/>
                <TaskButton by={3} incrementMethod={this.increment}/>

                <TaskButton by={4} incrementMethod={this.increment}/>
                <TaskButton by={5} incrementMethod={this.increment}/>
                <TaskButton by={6} incrementMethod={this.increment}/>

                <TaskButton by={7} incrementMethod={this.increment}/>
                <TaskButton by={8} incrementMethod={this.increment}/>
                <TaskButton by={9} incrementMethod={this.increment}/>

                <TaskButton by={0} incrementMethod={this.increment}/>


                <span className="count">{"" + this.state.number1 + " + " + this.state.number2 + " = " + this.state.result}</span>


                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
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

                if (newResult != String(this.state.number1 + this.state.number2).substr(0, newResult.length)) {
                    newNumberErrors = this.state.numberErrors + 1;
                    newResult = "";
                }
                else if (newResult == String(this.state.number1 + this.state.number2)) {
                    newNumber1 = this.getRandom(1, 50);
                    newNumber2 = this.getRandom(1, 50);
                    newNumberСorrect = this.state.numberСorrect + 1;
                    newResult = "";
                }
                return {
                    number1: newNumber1,
                    number2: newNumber2,
                    result: newResult,
                    numberErrors: newNumberErrors,
                    numberСorrect: newNumberСorrect
                }

            }
        );
    }

    reset() {
        this.setState(() => {
            {
                return {
                    number1: this.getRandom(1, 5),
                    number2: this.getRandom(1, 5),
                    numberErrors: 0,
                    numberСorrect: 0,
                    result: "",
                    minValue: this.state.minValue,
                    maxValue:this.state.maxValue
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
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>{this.props.by}</button>
            </div>
        )
    }
}

export default Task;
!