import React from 'react'
import './NavBar.css'

const NavBar = ({ classForChange }) => {
    return (
        <React.Fragment>
            <div className={`navBar_box ${classForChange}`}>
                <p>STUDIO-BA®</p>
                <p>Sao Paulo 11:56 AM</p>
                <p>London 02:57 PM</p>
                <p>Summary</p>
            </div>
        </React.Fragment>
    )
}

export default NavBar