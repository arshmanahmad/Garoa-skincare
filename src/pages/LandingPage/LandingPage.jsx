import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import NavBar from '../../components/NavBar/NavBar'
import ImageWrapper from '../../components/ImageWrapper/ImageWrapper'
import img1 from '../../assets/images/4e76867b-7651-4778-917b-38d3e4b17f78_Render_01+3.png'
import img2 from '../../assets/images/f8ac95a6-d5a5-489a-97da-564bf60ba010_image+1.png'
const LandingPage = () => {
    const [showLabelBox, setShowLabelBox] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabelBox(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <React.Fragment>
            <div className="landingPage_box">
                <div className="landing_section">
                    <NavBar />
                    <h1 className='landingPage_mainHeading'>Garoa Skincare</h1>
                    <ImageWrapper
                        imageSrc={img1}
                        height="33rem"
                        width="100%"
                        classForAnimation="main_image"
                    />
                    <div className={`landingPage_labelBox ${showLabelBox ? 'show' : ''}`}>
                        <div>
                            <p>
                                Client : Garoa Skincare<br />
                                Project : Branding & Website<br />
                                Year : 2021<br />
                            </p>
                        </div>
                        <div>
                            <p>
                                Disciplines
                            </p>
                            <p className='disciplines'>
                                Branding<br />
                                Web Design<br />
                                Development<br />
                                Photography<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="landingPage_linkContainer">
                    <div ></div>
                    <div>
                        <a href="" className='landingPage_link'>Visit live site↗</a>
                    </div>
                </div>
                <ImageWrapper
                    imageSrc={img2}
                    height="33.8rem"
                    width="100%"
                    classForAnimation="second_image"
                />
            </div>
        </React.Fragment>
    )
}

export default LandingPage