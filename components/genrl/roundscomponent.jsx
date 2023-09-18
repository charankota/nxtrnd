import React from 'react'
import style from '../../styles/rounds.module.css'
import lvl1 from '../../public/images/lvl1.png'
import Image from 'next/image'
import WaveCtr from '../../components/graphics/wavectr'

export default function RoundsComponent() {
    return (
        <>
            <div className='text-center'>
                <div className='flex justify-center mt-20 text-blue-400 font-sans lg:text-8xl md:text-6xl font-extrabold content-center'>
                    <div>Levels</div>
                </div>
                <div className="flex flex-row p-8 gap-20 mt-7 justify-center mx-auto flex-wrap ">
                    <div className={`${style.card} lg:basis-1/3 sm:basis-0 p-4 `}>
                        <div className={`${style.bg} ${style.uwu}`} />
                        <div className={`${style.bg}`} />
                        <div className={`${style.content}`}>
                            <div className={`${style.img}`}>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                </svg>
                            </div>
                            <div className={`${style.h1}`}>
                                Johnathon
                                <br />
                                F. Stag
                            </div>
                            <div className="{`${style.p}`}">
                                Professional human
                                <p>I do human things such as exist, eat foot, and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.card} basis-1/3`}>
                        <div className={`${style.bg} ${style.uwu}`} />
                        <div className={`${style.bg}`} />
                        <div className={`${style.content}`}>
                            <div className={`${style.img}`}>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                </svg>
                            </div>
                            <div className={`${style.h1}`}>
                                Johnathon
                                <br />
                                F. Stag
                            </div>
                            <div className="{`${style.p}`}">
                                Professional human
                                <p>I do human things such as exist, eat foot, and work.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.card} basis-1/3`}>
                        <div className={`${style.bg} ${style.uwu}`} />
                        <div className={`${style.bg}`} />
                        <div className={`${style.content}`}>
                            <div className={`${style.img}`}>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                </svg>
                            </div>
                            <div className={`${style.h1}`}>
                                Johnathon
                                <br />
                                F. Stag
                            </div>
                            <div className="{`${style.p}`}">
                                Professional human
                                <p>I do human things such as exist, eat foot, and work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='min-h-screen h-full w-full'>
                <div className={`${style.lvl}  flex flex-col justify-center `}>
                    <div className='flex justify-center mt-20 text-blue-400 font-sans lg:text-8xl md:text-6xl font-extrabold content-center'>
                        <div>Levels</div>
                    </div>
                    <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-5'>
                        <div className={`${style.block} text-white text-center`}>
                            Level 1
                        </div>
                        <div className={`${style.block} text-white text-center`}>
                            Level 2
                        </div>
                        <div className={`${style.card} lg:basis-1/3 sm:basis-0 p-4 `}>
                            <div className={`${style.bg} ${style.uwu}`} />
                            <div className={`${style.bg}`} />
                            <div className="">
                                <div className="">
                                    Johnathon 12
                                    <br />
                                    F. Stag
                                </div>
                                <div className="">
                                    Professional human
                                    <p>I do human things such as exist, eat foot, and work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className='min-h-screen bg-black h-full w-full'>
                <div className={`${style.lvl}  flex flex-col justify-center `}>
                    <div className='flex justify-center mt-20 text-blue-400 font-sans lg:text-8xl md:text-6xl font-extrabold content-center'>
                        <div>Levels</div>
                    </div>
                    <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-5'>
                        <div className='flex justify-center text-white items-center bg-slate-400 h-64'>
                            <Image src='/images/lvl1.png'
                                width={200}
                                height={200}
                                alt=''
                            />
                        </div>
                        <div className='flex justify-center text-white items-center bg-slate-500 h-64'>
                            <Image src='/images/lvl1.png'
                                width={200}
                                height={200}
                                alt=''
                            />
                        </div>
                        <div className={` flex justify-center text-white items-center bg-slate-700 h-64`}>
                            <Image src='/images/lvl1.png'
                                width={200}
                                height={200}
                                alt=''
                            />
                        </div>
                    </div>
                </div> */}



            {/* <div className={`${style.ocean} `}>
                <div className={`${style.wave} `} />
                <div className={`${style.wave} `} />
                <div className={`${style.wave} `} />
                <div className={`${style.wave} `} />
                <div className={`${style.wave} `} />
            </div> */}

            { }

        </>
    )
}
