import React, {Component} from 'react'
import  './Counter.css'

class Counter extends Component {

    constructor() {
        super();
        this.state =
            {
                count: 0
            }
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
            this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div>
                <CounterButton by={1}  incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5}  incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.count}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    increment(by) {
        this.setState(
            () => {
                //console.log(by);
                return {count: this.state.count + by}
            }
        );
    }

    decrement(by) {
        this.setState(
            () => {
                return {count: this.state.count -by}
            }
        );
    }

    reset() {
        this.setState(
            () => {
                return {count: 0}
            }
        );
    }


}

class CounterButton extends Component{
    constructor() {
        super();
    }
    render  ()  {
        return (


            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }
}

export default Counter;
