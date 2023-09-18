'use client'
import React, { useEffect } from 'react'
//import { useGlobalContext } from '../Context/storedata';

import Link from 'next/link';
import LevelFinishComponent from '../../../components/genrl/levelfinishcomponent'


export default function page() {

    return (
        <div className='h-full bg-black'>
            <LevelFinishComponent />
        </div>
    )
}

{/* <p>{userId}</p>
            {data.map((e, i) => <p key={i}>{e.firstName} - {e.lastName}</p>)} */}
