import React, { useEffect, useState } from 'react'
import './NavBar.css'

const NavBar = ({ classForChange }) => {
    const [changeText, setChangeText] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setChangeText(true)
        }, 4000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <React.Fragment>
            <div className={`navBar_box ${classForChange}`}>
                <p className='first_link'>STUDIO-<span className='changeText'>{changeText ? "BA®" : "BRUNZOARIZIO®"}</span></p>
                <p>Sao Paulo 11:56 AM</p>
                <p>London 02:57 PM</p>
                <p className='last_link'>Summary</p>
            </div>
        </React.Fragment>
    )
}

export default NavBar