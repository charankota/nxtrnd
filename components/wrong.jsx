import React from 'react'
import style from '../styles/wrong.module.css'

export default function WrongtAns() {
    return (
        <div className={`${style.wrongans} flex items-center justify-center h-56`}>
            <ul className={`${style.divcorrect}`}>
                <li>W</li>
                <li>R</li>
                <li>O</li>
                <li>N</li>
                <li>G</li>
            </ul>

            <div className={`${style.divcircle}`}>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
        </div>
    )
}
