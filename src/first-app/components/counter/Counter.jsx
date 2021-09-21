import React, { useState } from "react";

function Counter() {
    const [state, setState] = useState(0);

    return (
        <>
            <h3>{state}</h3>
            <button onClick={() => setState((prev) => prev + 1)}>Add</button>
        </>
    );
}

export default Counter;