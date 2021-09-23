import React from 'react'

const LazyLoadComponent = React.lazy(() => import("./LazyLoadComponent"));

export default function index() {
    return (
        <div>
            <LazyLoadComponent />
        </div>
    )
}
