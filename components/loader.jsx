import React from 'react'

export default function Loader({ color }) {
    return (
        <div className=" w-[30px] h-[30px] flex justify-center items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 to-pink-500 animate-spin">
                <div className="h-5 w-5 rounded-full bg-gray-200" />
            </div>
        </div>


    )
}
