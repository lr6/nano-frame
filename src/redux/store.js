import { createStore, applyMiddleware } from 'redux'
import combineReducers from './reducers'
import promiseMiddleware from "@/redux/middleware/promiseMiddleware";

let store = createStore(combineReducers,
    applyMiddleware(promiseMiddleware))

export default store
