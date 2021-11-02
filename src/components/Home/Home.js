import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    _handClick() {
        this.setState({
            count: ++this.state.count
        })
    }

    render() {
        return(
            <div>
                <div>Home + add + seven</div>
                <div>计数： {this.state.count}</div>
                <button onClick={() => this._handClick()}>add</button>
            </div>
        )
    }
}
