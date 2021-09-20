import React, { useRef, useState, useEffect } from "react";


const UseRef = () => {
    const [renderCount, setRenderCount] = useState(1);
    const ulRef = useRef();

    const refHandle = () => {
        console.log(ulRef.current);
    }

    useEffect(() => {
        ulRef.current = renderCount
    })

    const renderHandle = () => {
        setRenderCount(prev => prev = ulRef.current + 1)
    }

    return (
        <div>
            <h3>col render {renderCount}</h3>
            <button onClick={renderHandle}>Render</button>
            <ul ref={ulRef}>
                <li>useRef агар компонет рендер булганида уша ulRef киймати узгармасин десак ишлатишимиз лозим</li>
            </ul>
            <button onClick={refHandle}>ref ui</button>
        </div>
    )
}

export default UseRef;