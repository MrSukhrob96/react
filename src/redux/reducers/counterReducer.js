import { INCREAMENT_COUNTER, DECREAMENT_COUNETR } from "../actions/counter/types";

const initialState = {
    counter: 0
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREAMENT_COUNTER: return { counter: state.counter + action.payload };
        case DECREAMENT_COUNETR: return { counter: state.counter - action.payload };
        default: return state;
    }
}