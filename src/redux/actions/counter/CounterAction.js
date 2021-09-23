import { DECREAMENT_COUNETR, INCREAMENT_COUNTER } from "./types";

const increamentCounterHandle = (number) => dispatch => {
    return dispatch({
        type: INCREAMENT_COUNTER,
        payload: number
    })
}

const decreamentCounterHandle = (number) => dispatch => {
    return dispatch({
        type: DECREAMENT_COUNETR,
        payload: number
    })
}

export {
    increamentCounterHandle,
    decreamentCounterHandle
}