import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { increamentCounterHandle, decreamentCounterHandle } from "./actions/counter/CounterAction";

const ReduxComponent = (props) => {
    return (
        <div>
            {props.counter.counter}
            <button onClick={props.increamentCounterHandle.bind(this, 3)}>ADD</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, { increamentCounterHandle })(ReduxComponent);