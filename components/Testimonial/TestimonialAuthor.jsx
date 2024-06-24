import React from 'react'
import { TestimonialContext } from './Testimonial'

export default function TestimonialAuthor({name, business, title}) {
    const { src, logo } = React.useContext(TestimonialContext)
    
    const divClasses = !logo ? "testimonial-author w-img" : "testimonial-author"
    
    return (
        <div className={divClasses}>
            <p className="name">{name}</p>
            { logo && <span className="divider">/</span> }
            <p className="details">{`${business}, ${title}`}</p>
        </div>
    )
}