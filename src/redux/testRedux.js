import {
    increment,
    decrement,
    reset
} from "@/redux/actions/counter"

import store from './store'

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// 发起dispatch
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

unsubscribe()
