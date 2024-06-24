import React from 'react'
import { IoCheckmarkCircle, IoCloseCircle, IoInformationCircle, IoWarning } from "react-icons/io5"

export default function Banner({children, type = "neutral"}) {
    return (
        <div className={`banner ${type}`}>
            {
                type === "error" ? 
                    <IoCloseCircle /> :
                type === "attention" ? 
                    <IoWarning /> :
                type === "success" ? 
                    <IoCheckmarkCircle /> :
                <IoInformationCircle />
            }
            {children}
        </div>
    )
}