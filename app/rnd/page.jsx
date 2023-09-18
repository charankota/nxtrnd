'use client'
import React, { useEffect } from 'react'
//import { useGlobalContext } from '../Context/storedata';
import { PostContext } from '../Context/PostContext';
import { useContext } from "react";
import Link from 'next/link';
import style from '../../styles/rnd.module.css'
import LevelFinishComponent from '../../components/genrl/levelfinishcomponent'


export default function page() {
    // const { userId, setUserId, data, setData } = useGlobalContext();
    // const { userId, data } = useGlobalContext();
    // const Cxt = useGlobalContext();
    // const value = useContext(Cxt);

    const { posts, rnd, changeRnd, rndDisplay, user } = useContext(PostContext);
    console.log('Posts : ' + rnd.toString());
    useEffect(() => {
        changeRnd('ABCDEF');

    }, []);

    const click = () => {
        rndDisplay();
    }

    return (
        <div className='h-full bg-black'>
            <LevelFinishComponent />

        </div>
    )
}

{/* <p>{userId}</p>
            {data.map((e, i) => <p key={i}>{e.firstName} - {e.lastName}</p>)} */}
