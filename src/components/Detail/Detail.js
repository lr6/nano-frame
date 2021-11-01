import React, { Component } from 'react'

import './Detail.css'
import test from './images/test.png'
export default class Detail extends Component {
    render() {
        return (
            <div>
                <div className={ 'title' }>Detail</div>
                <img src={test} />
            </div>
        )
    }
}
