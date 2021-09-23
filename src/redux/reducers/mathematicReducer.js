import { DEVIDE_COUNTER, MULTIPLY_COUNTER } from "../actions/mathematic/types"

const initialState = {
    counter: 0
}

export default function mathematicReducer(state = initialState, action) {
    switch (action.type) {
        case DEVIDE_COUNTER: return { counter: state.counter / action.payload };
        case MULTIPLY_COUNTER: return { counter: state.counter * action.payload };
        default: return state
    }
}