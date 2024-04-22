import React from 'react'
import './ImageWrapper.css'

const ImageWrapper = ({ imageSrc, height, width, classForAnimation }) => {


    return (
        <React.Fragment>
            <div style={{ height: height, width: width }} className={`img_wrapper ${classForAnimation}`}>
                <img className='img_wrapperImg' src={imageSrc} alt="" />
            </div>
        </React.Fragment>
    );
};

export default ImageWrapper;
