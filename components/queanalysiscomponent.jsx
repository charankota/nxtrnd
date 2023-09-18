import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import ChartDisplay from './piechart'
import CorrectAns from './correct'
import WrongAns from './wrong'
import Loader from './loader'
import style from '../styles/Queanalysis.module.css'
//import { Chart } from "chart.js"
// Initialization for ES Users
// import {
//   Chart,
//   initTE,
// } from "tw-elements";

// initTE({ Chart });




export default function QueAnalysisComponent(props) {
  const response = props.response;
  const crtData = props.chartdata;
  const barvalue = props.barvalue;
  console.log('cData : ' + response);

  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };


  // useEffect(() => {
  //   console.log('Inner : Loaded')
  //   let tot = document.getElementById('totattempt').innerText;
  //   let correct = document.getElementById('totcorrect').innerText;
  //   let incorrect = document.getElementById('totincorrect').innerText;
  // }, []);


  return (
    <motion.div
      className="main__container h-[450px]" initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ x: "100%", opacity: 0 }} transition={{ duration: 2 }}
    >


      <div className='child flex-1 h-[430px] mx-auto bg-[#2d00aa] w-full p-2'>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-2">
          <div className={`bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} style={{ width: `${barvalue}%` }}> {barvalue} %</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-2  h-[375px]">
          <div className='flex flex-col items-center justify-center'>
            {response === 'correct' ? <CorrectAns /> : <WrongAns />}
          </div>
          <div className={`${style.glow} flex flex-col items-center justify-center`}>
            <div>Attempted : {props.chartdata.length == "" && <Loader />} <span className="font-bold" id='totattempt'>0</span></div>
            <div className='mt-3'>Correct : {props.chartdata.length == "" && <Loader />}<span className="font-bold" id='totcorrect'></span> </div>
            <div className='mt-3'>InCorrect : {props.chartdata.length == "" && <Loader />}<span className="font-bold" id='totincorrect'></span> </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


//<div className='h-full bg-slate-500'>{crtData.length > 0 && <ChartDisplay chartdata={props.chartdata} rnd={Math.random} />}</div>
//<ChartDisplay chartdata={props.chartdata} />