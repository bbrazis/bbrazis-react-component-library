import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5"

export default function CardIcon({children}) {
    
    return (
            <div className="card-icon">
                { !children && <IoCloudUploadOutline /> }
                { children && {children} }
            </div>
        )
}