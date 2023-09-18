import React from 'react'
import style from '../styles/correct.module.css'

export default function CorrectAns() {
    return (
        <>
            <div className={`${style.glow} flex items-center justify-center lg:h-56 sm: h-28`}>
                <div className={`${style.glow} sm:text-sm`}>
                    <h1>CORRECT</h1>
                </div>

                {/* <ul className={`${style.glow} sm:text-sm`}>
                    <li>C</li>
                    <li>O</li>
                    <li>R</li>
                    <li>R</li>
                    <li>E</li>
                    <li>C</li>
                    <li>T</li>
                </ul> */}
            </div>
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
        </>
    )
}
