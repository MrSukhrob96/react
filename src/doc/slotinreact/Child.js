import React from 'react'

export default function Child({children}) {
    return (
        <div>
            <button>{children}</button>
        </div>
    )
}
