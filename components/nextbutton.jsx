import React, { useState } from 'react'

export default function Nextbutton(props) {

    const NextBtn = () => {
        return (
            <div className="" key={Math.random() * 100}>
                <button onClick={props.click}
                    className=" bottom-0 left-0 middle none center rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    N E X T
                </button>
            </div>
        )
    }

    const CheckBtn = () => {
        return (
            <div className="" key={Math.random() * 100}>
                <button onClick={props.check} key={Math.random() * 100}
                    className="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true"
                >
                    C H E C K ANS
                </button>
            </div>
        )
    }


    return (
        <>
            {props.chkshow ? <NextBtn /> : <CheckBtn />}
        </>
    )
}
