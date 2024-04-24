import React, { useEffect, useState } from 'react'
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar'
import StraightLinesBox from '../../components/StraightLinesBox/StraightLinesBox'
import AnimatedCircles from '../../components/AnimatedCircles/AnimatedCircles'
import CaptionBar from '../../components/CaptionBar/CaptionBar'
import VerticalBar from '../../components/VerticalBar/VerticalBar';
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
                    {showLabelBox && <NavBar />}
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
                <div className="landingPage_section3">
                    {showLabelBox && <NavBar />}
                    <div className="vertical_barContainer">
                        <VerticalBar text="FOREWORD" number="3" />
                    </div>
                    <div className="section3_parasContainer">
                        <div className="section3_para1">
                            <p>
                                Bruno is currently part of the Jury board for two of the most renowned awards in the industry Awwwards and Webby Awards.
                            </p>
                        </div>
                        <div className="section3_para2">
                            <p>
                                Studio—BA® is an award-winning design and art direction practice working with a broad range of clients across a mix of disciplines that includes web design, creative direction, graphic design, and photography together with an extensive community of collaborators: photographers, 3d artists, and creative developers to deliver bespoke design projects. With an international client list,  the practice can work alone or in collaboration with design agencies,   and bureaus, past experiences include partnerships with Jam3, Sapient Razorfish and Publicis Groupé.
                            </p>
                        </div>
                        <div className="section3_para3">
                            <p>
                                Since the start of the practice in 2010, Bruno has received awards and nominations from The FWA, Awwwards, Webby Awards, Visuelle, CSS Design Awards, AIGA, Typewolf, Behance, Muzli, and others.   Bruno is frequently called to be a part of jury boards of world renowned creative competitions. Currently a proud juror of the Webby Awards (The International Academy of Digital Arts and Sciences®) and Awwwards.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="landingPage_section4">
                    {showLabelBox && <NavBar />}
                    <div className="img_container">
                    </div>
                    <VerticalBar className="second_verticalBar" text="APPROACH" number="5" />
                </div>


            </div>
        </React.Fragment >
    )
}

export default LandingPage