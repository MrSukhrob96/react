import React from 'react'

export default function Slot(props) {
    return (
        <div>
            <div>{props.top}</div>
            <hr/>
            <div>{props.bottom}</div>
        </div>
    )
}
