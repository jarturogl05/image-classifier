import React from 'react'

export default function Preview({file}) {
    const path = file[0].preview;
    return (
        <div>
            <img src={path}></img>
        </div>
    )
}
