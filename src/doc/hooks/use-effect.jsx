import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(1);
    const [post, setPost] = useState("post");

    useEffect(() => {
        console.log("componenDidUpdate count / Компонент обнавлён")
    }, [count])

    useEffect(() => {
        console.log("componenDidUpdate post / Компонент обнавлён")
    }, [post]);

    useEffect(() => {
        console.log("componentDidMount")
        return () => {
            console.log("componentWillUnmount / Комонент удалён")
        }
    }, [])

    return (
        <>
            {count}
            <button onClick={() => setCount((count) => count + 1)}>UseEffect Count</button>
            <button onClick={() => setPost((post) => post + Math.random() * 100)}>UseEffect Post</button>
        </>
    )
}

export default UseEffect;