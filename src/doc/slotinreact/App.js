import React, { useState, useRef } from "react";

import Slot from "./Slot";
import Child from "./Child";

function App() {
    return (
        <Slot top={ <Child>First Btn</Child> } bottom={ <Child>Second Child</Child> } />
    );
}

export default App;