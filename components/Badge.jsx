import React from 'react'

export default function Badge({children, round = false, color = "grey"}) {
    
    return (
        <div className={`badge ${color}`} data-round={round}>
            {children}
        </div>
    )
}