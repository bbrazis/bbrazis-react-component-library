import React from 'react'
import TestimonialImage from './TestimonialImage'
const TestimonialContext = React.createContext()

export default function Testimonial({children, img = "", logo = ""}) {
    
    return (
        <TestimonialContext.Provider value={{img,logo}}>
            <div className="testimonial">
                <TestimonialImage />
                {
                    img && <div className="testimonial-backdrop"></div>
                }
                {children}
                {
                    !img &&
                        <div className="dot-wrapper">
                            <img src="../images/dot-pattern.svg" alt="" />
                        </div>
                }
            </div>
        </TestimonialContext.Provider>
    )
}

export { TestimonialContext }