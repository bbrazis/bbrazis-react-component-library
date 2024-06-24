import React from 'react'
import { ImQuotesLeft } from "react-icons/im"
import { TestimonialContext } from './Testimonial'

export default function TestimonialQuote({children}){
    const { img, logo } = React.useContext(TestimonialContext)
    
    return (
        <div className="testimonial-content">
            {
                img ? 
                    <ImQuotesLeft /> :
                logo ? 
                    <img src={logo} className="testimonial-logo" alt="" /> :
                null
            }
            {children}
        </div>
    )
}
