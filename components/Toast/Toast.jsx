import React from 'react'
import { BiCheckCircle } from "react-icons/bi"
import { PiWarningCircle } from "react-icons/pi"
import { VscError } from "react-icons/vsc"
import { IoInformationCircleOutline } from "react-icons/io5"

export default function Toast({ type = "information" }){
    const data = type === 'success' ?
        {
            icon: <BiCheckCircle />,
            headline: 'Success',
            text: 'Your work has been saved'
        } : type === 'warning' ?
        {
            icon: <PiWarningCircle />,
            headline: 'Warning',
            text: 'A network error was detected'
        } : type === 'error' ?
        {
            icon: <VscError />,
            headline: 'Error',
            text: 'Please re-save your work again'
        } : {
            icon: <IoInformationCircleOutline />,
            headline: 'Information',
            text: 'Please read updated information'
        }
    
    
    return (
        <div className="toast" data-type={type}>
            {data.icon}
            <div className="toast-content">
                <p className="toast-headline">{data.headline}</p>
                <p>{data.text}</p>
            </div>
        </div>
    )
}