import React from 'react'
import './VerticalBar.css'
const VerticalBar = ({ text, number, className }) => {
    return (
        <div className={`VerticalBarContainer ${className}`}> <p className='verticalBar_number'>{number}</p><p className='verticalBar_text'>{text}</p></div>
    )
}

export default VerticalBar