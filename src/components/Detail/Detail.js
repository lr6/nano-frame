import React, { Component } from 'react'

import style from './Detail.css'
import test from './images/test.png'
export default class Detail extends Component {
    render() {
        return (
            <div>
                <div className={style.title}>Detail</div>
                <img src={test} />
            </div>
        )
    }
}
