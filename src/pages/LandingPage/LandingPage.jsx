import React, { useEffect, useRef, useState } from 'react'
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar'
import StraightLinesBox from '../../components/StraightLinesBox/StraightLinesBox'
import AnimatedCircles from '../../components/AnimatedCircles/AnimatedCircles'
import CaptionBar from '../../components/CaptionBar/CaptionBar'
import VerticalBar from '../../components/VerticalBar/VerticalBar';
const LandingPage = () => {
    const [showLabelBox, setShowLabelBox] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabelBox(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleWheelScroll = (evt) => {
            evt.preventDefault();
            setScrollPosition(prevScrollPosition => prevScrollPosition + evt.deltaY);
        };
        const handleKeyDown = (evt) => {
            const scrollStep = 150;
            if (evt.key === 'ArrowUp' || evt.key === 'ArrowRight') {

                setScrollPosition(prevScrollPosition => prevScrollPosition + scrollStep);
            } else if (evt.key === 'ArrowDown' || evt.key === 'ArrowLeft') {
                setScrollPosition(prevScrollPosition => prevScrollPosition - scrollStep);
            }
        };
        window.addEventListener("wheel", handleWheelScroll, { passive: false });
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("wheel", handleWheelScroll);
            window.removeEventListener("keydown", handleKeyDown);

        };
    }, [scrollPosition, []]);

    return (
        <React.Fragment>
            {showLabelBox && <NavBar />}
            <div style={{ overflowX: 'auto', overflowX: "hidden", whiteSpace: 'nowrap', width: '100%', height: '100vh' }}>
                <div
                    id='container'
                    className="landingPage_box"
                    style={{ width: '500vw', height: '100%', backgroundColor: '#f1efed', transform: `translateX(-${scrollPosition}px)` }}
                >
                    <div className="landingPage_section1">
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
                    <div
                        className="landingPage_section3"

                    >
                        <div className="vertical_barContainer" >
                            <VerticalBar text="FOREWORD" number="3" />
                        </div>
                        <div className="section3_parasContainer">
                            <div className="section3_para1">
                                <p>
                                    Bruno is currently part<br /> of the Jury board for two<br /> of the most renowned<br /> awards in the <br />industry Awwwards<br /> and Webby Awards.
                                </p>
                            </div>
                            <div className="section3_para2">
                                <p>
                                    Studio—BA® is an award-winning <br />design and art direction practice<br /> working with a broad range of<br /> clients across a mix of disciplines <br />that includes web design, creative<br /> direction, graphic design, and<br /> photography together with an <br />extensive community of collaborators<br />: photographers, 3d artists, and creative<br /> developers to deliver bespoke<br /> design projects. With an international<br /> client list,  the practice can<br /> work alone or in collaboration with design <br />agencies,   and bureaus, past experiences include<br /> partnerships with Jam3, Sapient<br /> Razorfish and Publicis Groupé.
                                </p>
                            </div>
                            <div className="section3_para3">
                                <p>
                                    Since the start of the practice in 2010,<br /> Bruno has received awards and nominations<br /> from The FWA, Awwwards, Webby Awards,<br /> Visuelle, CSS Design Awards, AIGA, <br />Typewolf, Behance, Muzli, and others. <br />  Bruno is frequently called to be<br /> a part of jury boards of world<br /> renowned creative competitions. <br />Currently a proud juror of the <br />Webby Awards (The International Academy <br />of Digital Arts and Sciences®)<br /> and Awwwards.
                                </p>
                            </div>
                        </div>
                        <div className="img_container">
                        </div>
                    </div>
                    <div className="landingPage_section5">
                        <VerticalBar className="second_verticalBar" text="APPROACH" number="5" />
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default LandingPage