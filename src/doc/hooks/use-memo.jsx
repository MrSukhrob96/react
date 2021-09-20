import React, { useMemo, useState, useEffect } from "react"

function complexComputed(num) {
    let i = 0;
    while (i < 1000_000_000) i++

    return num * 2
}

const UseMemo = () => {
    const [number, setNumber] = useState(5);
    const [changeColor, setChangeColor] = useState(false);

    const styles = useMemo(() => ({
        color: changeColor ? 'red' : 'yellow'
    }), [changeColor])

    /*
    *
    * Агар компонент render вактида малум бир кийин функцияга тегишли булмаса у холда шу useMemo ишлатилади
    * 
    */
    const computedNumber = useMemo(() => {
        return complexComputed(number);
    }, [number])

    useEffect(() => {
        console.log("style changed")
    }, [styles])

    return (
        <>
            <h3 style={styles}>{computedNumber || 1}</h3>
            <button onClick={() => setNumber(number => number + 1)}>Add</button>
            <button onClick={() => setNumber(number => number - 1)}>remove</button>
            <button onClick={() => setChangeColor(changeColor => changeColor = !changeColor)}>Change color</button>
        </>
    );
}

export default UseMemo;