'use client'
import React, { useEffect, useState } from 'react'
import { Chart } from "chart.js"
import style from '../styles/piechart.module.css'
//import jump from '../public/images/jump1.gif'
import Image from 'next/image'


export default function PieChart(props) {
    console.log('CrtDTT : ' + props.chartdata[0]['wrg']);
    const [crtTot, setCrtTot] = useState(0);
    const [crtCorrect, setCrtCorrect] = useState(0);
    const [crtwrong, setCrtWrong] = useState(0);

    useEffect(() => {
        setCrtTot(props.chartdata[0]['tot']);
        setCrtCorrect(props.chartdata[0]['crt']);
        setCrtWrong(props.chartdata[0]['wrg']);
    }, []);



    let tot = props.chartdata[0]['tot'];
    let correct = props.chartdata[0]['crt'];
    let wrg = props.chartdata[0]['wrg'];


    useEffect(() => {
        if (myChart) {
            myChart.destroy();
        }
        var barColors = [

            "#00aba9",
            "#2b5797",
            "#e8c3b9",
            "#1e7145", "#b91d47",
        ];

        var ctx = document.getElementById('myChart').getContext('2d');
        console.log('TTT : ' + wrg);
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Tot", "Correct", "X"],
                datasets: [{
                    data: [crtTot, crtCorrect, crtwrong],
                    borderColor: [
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: barColors,
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
    }, [crtwrong])


    // backgroundColor: [
    //     "rgb(60,186,159,0.1)",
    //     "rgb(255,165,0,0.1)",
    //     "rgb(196,88,80,0.1)",
    // ],

    return (
        <section>
            <section className="h-56 justify-center items-center bg-slate-50">
                {/* <Image src={jump} alt='' width="150" height="150"></Image> */}


                {/*  <button>buttonCharan</button> */}

                {/* <div className={`${style.piediv} relative m-auto lg: w-full sm:w-48  h-auto bg-white`} > */}
                <canvas id='myChart' height="100%" className="w-full h-full"></canvas>
                { }
                { }
            </section>
        </section >
    )
}

//<canvas id='myChart' height="100%" className="w-full h-full"></canvas> 