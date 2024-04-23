import React from 'react'
import './CaptionBar.css'
const CaptionBar = ({ text, number }) => {
    return (
        <div className='captionContainer'><span className='caption_text'>{text}</span> <span className='caption_number'>{number}</span></div>
    )
}

export default CaptionBar