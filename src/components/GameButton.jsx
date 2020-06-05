import React, {Component} from 'react'

class GameButton extends Component {
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

export default  GameButton;