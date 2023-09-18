'use client'
import React, { useEffect, useMemo, useRef } from 'react'
import style from '../../styles/wave.module.css'
import Script from 'next/script'
import wave from '@/public/js/wave'

export default function WaveCtr() {

    return (
        <>
            <h1>WaveCtr</h1>
            <canvas id='canvas' className={`${style.canvas}`}></canvas>
            <span id='spn'>Hello</span>

            <Script src="/public/js/wave.js" strategy="afterInteractive" />
        </>
    )
}
