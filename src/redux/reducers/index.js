import { combineReducers } from "redux";
import counter from "./counterReducer";
import mathematic from "./mathematicReducer";

export default combineReducers({
    counter,
    mathematic
})