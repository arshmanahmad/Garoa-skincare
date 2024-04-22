import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import NavBar from '../../components/NavBar/NavBar'
import StraightLinesBox from '../../components/StraightLinesBox/StraightLinesBox'
const LandingPage = () => {
    const [showLabelBox, setShowLabelBox] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabelBox(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <React.Fragment>
            <div className="landingPage_box">
                <div className="landing_section">
                    {showLabelBox && <NavBar />}
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
                                Studio-BA is<br />
                                a multidisciplinary design practice.
                            </p>}
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment >
    )
}

export default LandingPage