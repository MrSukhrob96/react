import React, { useState } from "react";

const UseState = ({ count }) => {
    const [counter, setCounter] = useState([2, 5, 6]);

    const incrementHandle = () => {
        const rendomNumber = parseInt(Math.random() * 10 + count);
        setCounter((counter) => [...counter, rendomNumber]);
    }

    return (
        <>
            <h3>{ JSON.stringify( counter )}</h3>
            <button onClick={incrementHandle}>Increament</button>
        </>
    )
}

export default UseState;