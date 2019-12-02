import React from 'react'
import './Logo.css'

function Logo() {
    return (
        <div className="Logo">
            <img className="Logo__image" src="https://dummyimage.com/50x50/cccccc/909090.png&text=logo" alt=""/>
            <p className="Logo__text">roots</p>
        </div>
    );
}

export default Logo