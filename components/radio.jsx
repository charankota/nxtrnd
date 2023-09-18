'use client'
import React, { useEffect, useState } from 'react'

export default function Radio(props) {
    const [optionValue, setOptionValue] = useState("");
    const [checked, setChecked] = useState(false);

    let optionDisplay = props.opt;
    const optionid = props.id;

    if (optionDisplay) {
        optionDisplay = optionDisplay
            .replace(/(<([br>]+)>)/gi, "")
            .replace(/(<p)/gim, "<div class='imgdiv'")
            .replace(/<\/p>/gim, "</div>")
            ;
    }
    function createMarkup(c) {
        return { __html: c };
    }

    const radioClick = (e) => {
        setOptionValue("");
        setOptionValue(e.target.value);
        console.log('radioClick : ' + optionValue);
        setChecked(true);
        //e.target.checked = true;
        props.stAnsClick(e);
    }

    return (
        <>
            {optionValue} -- {optionid}
            {console.log('OO : ' + optionValue)}
            <div className="flex gap-10">
                <div className="inline-flex items-center">
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="html"
                        data-ripple-dark="true"
                    >
                        <input
                            id="html"
                            name="studentans"
                            type="radio"
                            checked={checked}
                            value={optionid}
                            onChange={(e) => radioClick(e)}
                            // onChange={props.stAnsClick}
                            className="before: content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-500 text-pink-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                        />
                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pink-500 opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                            >
                                <circle data-name="ellipse" cx={8} cy={8} r={8} />
                            </svg>
                        </div>
                    </label>
                    <div className="flex items-center">
                        <label
                            className="mt-px cursor-pointer select-none font-light text-black"
                            htmlFor="html"
                        >
                            <div
                                className="mb-2"
                                dangerouslySetInnerHTML={createMarkup(optionDisplay)}

                            ></div>
                        </label>
                    </div>
                </div>
            </div>

        </>
    )
}
