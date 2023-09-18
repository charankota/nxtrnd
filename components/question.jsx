'use client'
import React from 'react'

export default function Question({ que }) {
    let question = que;
    const styleObj = {
        color: 'white',
        backgroundColor: 'red',
        fontSize: '40',
    };

    if (question) {
        question = question
            .replace(/(<([br>]+)>)/gi, "")
            .replace(/(<p)/gim, "<div class='imgdiv'")
            .replace(/<\/p>/gim, "</div>")
            ;
        question = question.replace("font-size: 10px", "");
    }
    function createMarkup(c) {
        return { __html: c };
    }
    return (
        <div className='w-full'>
            <div
                className="mb-2"
                dangerouslySetInnerHTML={createMarkup(que)}

            ></div>
        </div >
    )
}
