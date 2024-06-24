import React from 'react'
import { TestimonialContext } from './Testimonial'

export default function TestimonialImage() {
    const { img } = React.useContext(TestimonialContext)
    const imagePath = img

    return (
        <>
            {
                imagePath ? 
                    <div className="testimonial-img_wrapper">
                        <img src={imagePath} alt="" className="testimonial-img" />
                    </div> :
                    null
            }
        </>
    )
}