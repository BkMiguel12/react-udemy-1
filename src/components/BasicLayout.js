import React from 'react'

export default function BasicLayout(props) {

    const { children } = props;

    return (
        <div>
            <h1>My App</h1>
            <div>{children}</div>
        </div>
    )
}
