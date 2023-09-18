import React, { useState, useEffect } from 'react'
import Radio from './radio'
import Checkbox from './checkbox'
import { motion, AnimatePresence } from 'framer-motion'

export default function Optionbox(props) {
    const [option, setOption] = useState([]);
    //const [checked, setChecked] = useState(false);
    const [optValue, setOptValue] = useState([]);
    const [divbackgroundColor, setDivBackGroundColor] = React.useState("black")

    let qType = props.typ;
    let rnd = props.rnd;
    useEffect(() => {
        setOption(props.opt);
        console.log(props.opt);

    }, [rnd])

    function createMarkup(c) {
        return { __html: c };
    }

    const display = (optionDisplay) => {
        optionDisplay = optionDisplay
            .replace(/(<([br>]+)>)/gi, "")
            .replace(/(<p)/gim, "<div class='imgdiv'")
            .replace(/<\/p>/gim, "</div>")
            ;

        return optionDisplay;
    };

    const radioClick = (e) => {
        const evt = e.target;
        //setOptValue("");
        //props.setStAns(evt.value + "|");
        props.setStAns(evt.value);
        setOptValue(evt.value);
        //setChecked(true);
        setDivBackGroundColor("")
        //e.target.checked = true;
        //props.stAnsClick(e);
    }

    function strContains(str2) {
        //console.log('XX : ' + optValue);
        return optValue?.includes(str2.toString());
    }




    function RadioGenrate(props) {
        return (
            <div className="flex gap-10 ">
                {/* <div className="inline-flex items-center bg-blue-100 w-full mt-2 rounded-md" style={strContains(props.id.toString() ? "" : ""}> */}
                <div className={`inline-flex items-center w-full mt-2 rounded-md ${strContains(props.id) && ' bg-blue-100'}`}>
                    <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="html"
                        data-ripple-dark="true"
                    >
                        <input
                            id={props.id}
                            name="studentans"
                            type="radio"
                            value={props.id}
                            checked={strContains(props.id.toString())}
                            onChange={(e) => radioClick(e)}
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
                    <div className="flex items-center  align-middle">
                        <label
                            className="mt-px cursor-pointer select-none font-light text-black"
                            htmlFor="html"
                        >
                            <div
                                className="mb-2 "
                                dangerouslySetInnerHTML={createMarkup(display(props.opt))}

                            ></div>
                        </label>
                    </div>
                </div>
            </div >
        )
    };

    //console.log(qType);
    return (
        <div className=''>

            {option?.map((item, i) => {
                return (
                    <div key={i}>
                        <RadioGenrate id={item.id} opt={item.options} />
                        {/* <Radio opt={item.options} id={item.id} stAnsClick={props.stAnsClick} /> */}
                        {/* <Checkbox /> */}
                    </div>
                )
            })}
        </div>
    )
}
