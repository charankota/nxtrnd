'use client'
import React from 'react'
//http://localhost:5234/api/Concept/TestSyllabus?testid=474018
export default function Youtube(props) {
    return (
        <>

            <div className="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark aspect-[16/9]">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/mz6M20bWlTg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen=""
                ></iframe>
            </div>

        </>
    )
}
