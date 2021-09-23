import React, { useState, useRef } from "react";

function Test({ showHandle }) {
    const [val] = useState(1);

    return (
        <div>
            <button onClick={showHandle.bind(this, val)}>Show</button>
        </div>
    );
}

function App() {
    const [visable, setVissabe] = useState(false);
    const valRef = useRef(0);

    const vissabeHandle = (val) => {
        valRef.current = val
        setVissabe(prev => prev = !prev)
    }

    return (
        <>
            {visable
                ?
                <p>
                    Showed text
                </p>
                : null
            }
            <Test showHandle={vissabeHandle} />
        </>
    );
}

export default App;

