import React from 'react'
import { TbInbox } from "react-icons/tb"
import { CgClose } from "react-icons/cg"


export default function Tooltip({children, color = 'black', style = 'bold'}){
    return (
        <div className="tooltip" data-color={color} data-style={style}>
            <TbInbox className="tooltip_icon" />
            <div className="tooltip_content">
                {children}
            </div>
            <button className="tooltip_dismiss" aria-label="close tooltip">
                <CgClose />
            </button>
            <div className="tooltip_corner"></div>
        </div>
    )
}