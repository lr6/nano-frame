import axios from 'axios'

export default store => next => action => {
    const { dispatch, getState } = store
    // 如果dispatch 来的是一个function,不做处理,直接下一步
    if (typeof action === "function") {
        action(dispatch, getState)
        return
    }
    // 解析action
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action

    // 没有promise
    if (!action.promise) {
        return next(action)
    }

    // 解析types
    const [
        REQUEST,
        SUCCESS,
        FAILURE
    ] = types

    // 开始请求的时候,发一个action
    next({
        ...rest,
        type: REQUEST
    })

    // 定义请求成功的方法
    const onFulfilled = result => {
        next({
            ...rest,
            result,
            type: SUCCESS
        })
        if (afterSuccess) {
           afterSuccess(dispatch, getState, result)
        }
    }

    // 定义请求失败的方法
    const onRejected = error => {
        next({
            ...rest,
            error,
            type: FAILURE
        })
    }

    return promise(axios).then(onFulfilled, onRejected).catch(error => {
        console.error('MIDDLEWARE ERROR:', error);
        onRejected(error)
    })

}
