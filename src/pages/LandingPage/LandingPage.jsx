import React, { useEffect, useState } from 'react'
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar'
import StraightLinesBox from '../../components/StraightLinesBox/StraightLinesBox'
import AnimatedCircles from '../../components/AnimatedCircles/AnimatedCircles'
import CaptionBar from '../../components/CaptionBar/CaptionBar'
const LandingPage = () => {
    const [showLabelBox, setShowLabelBox] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabelBox(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])
    const handleWheelScroll = (evt) => {
        evt.preventDefault();
        setScrollPosition(scrollPosition + evt.deltaY);
    };
    return (
        <React.Fragment>
            <div
                id='container'
                className="landingPage_box"
                onWheel={handleWheelScroll}
                style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
                <div className="landingPage_section1">
                    {showLabelBox && <NavBar />}
                    {showLabelBox && <AnimatedCircles />}
                    <StraightLinesBox />
                    <div className="landingPage_paraBox">
                        <div className='small_para'>
                            {showLabelBox && <p>
                                N 40°14`2.16"<br />
                                W 26°12`13.4"
                            </p>}
                        </div>
                        <div className='big_para'>
                            {showLabelBox && <p>
                                <span className='nanoSized_para'>(Working Worldwide)</span>Studio-BA is<br />
                                a multidisciplinary design practice.
                            </p>}
                        </div>
                    </div>
                </div>
                <div className="landingPage_section2">
                    <NavBar classForChange="navBarChange" />
                    <div className="caption_container">
                        <CaptionBar text="FOREWORD" number="3" />
                        <CaptionBar text="APPROACH" number="5" />
                        <CaptionBar text="PROCESS" number="6" />
                        <CaptionBar text="SELECTED PROJECTS" number="12" />
                        <CaptionBar text="AWARDS & RECOGNITIONS" number="22" />
                        <CaptionBar text="CONTACT US" number="24" />
                        <CaptionBar text="COLOPHON" number="25" />
                    </div>
                    <p className='bigHeading'>SUMMARY</p>
                </div>


            </div>
        </React.Fragment >
    )
}

export default LandingPage