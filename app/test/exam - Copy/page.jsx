'use client'
import { motion } from 'framer-motion'
import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import Nextbutton from '../../../components/nextbutton'
import Optionbox from '../../../components/optionbox'
import QueAnalysisComponent from '../../../components/queanalysiscomponent'
import Question from '../../../components/question'
import TimerUp from '../../../components/timerup'
import Youtube from '../../../components/youtube'
import { PostContext } from '../../Context/PostContext'
import { getTestQuestions, updateStudentAns } from '../../apifunction/api'



export default function page() {

    const { barTot, setBarTot, totQue, setTotQue, studentId, examId, examLevel, setExamLevel, totCorrect, setTotCorrect, user } = useContext(PostContext);
    const [test, setTest] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [optionChecked, setOptionChecked] = useState('');
    const [testData, setTestData] = useState("");
    const [stAns, setStAns] = useState([]);
    const [show, setShow] = useState(false);
    const [paperLength, setPaperLength] = useState(true);
    const [isCorrect, setIsCorrect] = useState('wrong');
    const [insertSummary, setInsertSummary] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [levelComplete, setLevelComplete] = useState(false);
    const [chkTot, setChkTot] = useState(0);
    const [totQ, setTotQ] = useState(0);
    //const [totCorrect, setTotCorrect] = useState(0);
    const searchParams = useSearchParams();

    const id = searchParams.get('id');
    const title = searchParams.get('tmasterid');

    let ANS = [];
    let userResponse = false;
    const router = useRouter();
    //let paperLength = true;

    useEffect(() => {
        // setUserId('2');
        // setData([
        //     { firstName: 'Tim' },
        //     { lastName: 'Kyle' },
        //     { firstName: 'Michael' }
        // ]);



        setIsLoading(true);
        const fetchData = async () => {
            let exmLevel = examLevel;
            var data = await getTestQuestions(474056, exmLevel, studentId); //fetch(`http://localhost:5234/api/Concept/TestQuestions?testid=474018`);

            setBarTot(data.per);
            console.log('Data :' + data.correct);
            setTestData(data.test);
            setTest(data.test[0]);
            setIsLoading(false);
            setTotQue(data.test.length);
            setTotCorrect(data.correct);
            setTotQ(data.totQ);
        };

        fetchData();

        sessionStorage.setItem("totq", 0);
    }, []);

    const checkAns = (data) => {
        data.map((item, index) => {
            console.log(item.id);
        });
    };

    function toggleShow() {
        setShow(!show);
    }

    function strContains(str2) {
        return stAns?.includes(str2.toString());
    }

    const stAnsClick = (e) => {
        e.preventDefault();
        //console.log(e);
        const crtType = e.target.type;
        //console.log(crtType);
        if (crtType === "radio") {
            setOptionChecked(e.target.value);
            console.log('RADIO');
        }
        console.log(e.target.value);
    }

    const btnCheckclick = async () => {
        toggleShow();

        let ansID = "";
        let optAns = test["option"];
        optAns.map((item) => {
            if (item.answers === true) {
                ansID = item.id;
            }
        });

        //const compareValue = string1.localeCompare(string2)
        if (ansID.toString() === stAns.toString()) {
            userResponse = true;
            setIsCorrect('correct');
            //let paperlength = testData.length;
            setTotCorrect(totCorrect + 1);
            //console.log('PBar :' + progressBarValue);
            //nextLevel();

        } else {
            userResponse = false;
            setIsCorrect('wrong');
        }

        const ID = document.getElementById('exDtlid').innerText;
        const qID = document.getElementById('qid').innerText;
        const qtime = document.getElementById('quetimeup').innerText;
        //const stAns = getAnsChecked();
        const ansObj =
        {
            "id": ID,
            // "vlcExamId": examId,
            // "studentId": studentId,
            "questionId": qID,
            "stAns": stAns,
            "qtime": qtime,
            "isCorrect": userResponse,
            "marksObtain": 0,
            "marksNegative": 0,
            // "qlevel": examLevel,
        }

        let cData = [{
            tot: 0,
            crt: 0,
            wrg: 0,
        }];

        setChkTot(chkTot + 1);

        const insertData = async () => {
            setIsLoading(true);
            const res = await updateStudentAns(ansObj);
            console.log('response: ' + res['correct']);

            if (res['tot'] != null) {
                console.log('Tot : ' + res['tot']);
                document.getElementById('totattempt').innerText = res['tot'];
            } else {
                document.getElementById('totattempt').innerText = '';
            }


            document.getElementById('totcorrect').innerText = res['correct'];
            let incorrect = parseInt(res['attempted']) - parseInt(res['correct']);
            document.getElementById('totincorrect').innerText = incorrect;

            cData = [{
                tot: res['tot'],
                crt: res['correct'],
                wrg: incorrect,
            }];

            setChartData(cData);
            setInsertSummary(res);
            setIsLoading(false);
            //console.log('Insert data: ' + data);
            //return data;
        }

        var ss = await insertData();
        console.log('data: ' + insertSummary['correct']);
        setStAns("");
    }

    useEffect(() => {
        console.log('chrData : ' + chartData);
    }, [chartData]);

    const btnNextclick = () => {
        let qno = sessionStorage.getItem("totq");
        // console.log('levelCompleteF :' + levelComplete);
        console.log('TotQue : ' + totQue);
        // console.log('Length : ' + testlist.length);

        //const totQueLength = sessionStorage.getItem("totq");
        console.log('QNoLen :' + chkTot);
        if (totQue == chkTot) {
            setPaperLength(false);
            console.log("Complete123");
            if (levelComplete === true) {
                router.push('/levelfinish');
            } else {
                router.push('/');
            }

        }

        if (levelComplete === true) {
            console.log('levelComplete :' + levelComplete);
            alert('levelComplete');
            if (examLevel === "Easy") {
                setExamLevel("Medium");
            } else if (examLevel === "Medium") {
                //console.log('ExLvl : ' + examLevel);
                setExamLevel("Hard");
            }

            router.push('/levelfinish');
            //return;
        }
        userResponse = false;
        toggleShow();


        console.log('PLength :' + paperLength);
        if (qno < testData.length) {
            console.log('CQNO :' + qno)
            setTest(testData[1 + parseInt(qno)]);
            sessionStorage.setItem("totq", 1 + parseInt(qno));
            qno = sessionStorage.getItem("totq");
            console.log('CQNO :' + qno)
        } else {
            setPaperLength(false);
        }
        // console.log(ansObj)
        // console.log('Insert : ' + fetchData);


        //console.log(testData[qno]["option"]);
    }

    const progressBarValue = parseInt((totCorrect / totQ) * 100);
    const reDirt = () => {
        redirect('/levelfinish');
    };
    useEffect(() => {
        let x = progressBarValue;
        if (x >= 50) {
            setLevelComplete(true);
            //redirect('/rnd');
        }
        console.log('PBarFun :' + x);
    }, [totCorrect])

    return (
        <>
            { }
            {/* <div className='bg-white'>
                <p>{userId}</p>
                <p>List:</p>
                {data.map((e, i) => <p key={i}>{e.firstName} - {e.lastName}</p>)}
            </div> */}
            <div className='w-full '>
                <div className='w-full bg-slate-300 p-2'>
                    <h1>{user.userName?.toString()}</h1>
                </div>

                <div className='w-full'>
                    <main role="main" className="w-full mx-auto px-1 mb-2">
                        <div className="md:flex content-center flex-wrap -mx-2 p-3 bg-grey rounded shadow-lg">
                            <div className="md:flex md:w-1/2 lg:w-1/2 px-1 py-2">
                                <Youtube />
                            </div>

                            {
                                paperLength ?
                                    <div className="md:flex md:w-1/2 lg:w-1/2 px-1 py-2">
                                        <div className="md:flex-1 p-4 rounded text-lg shadow-lg bg-white border-b border-r border-grey-dark">


                                            {!show ? <motion.div
                                                initial={{ scaleY: 0 }}
                                                animate={{ scaleY: 1 }}
                                                exit={{ scaleY: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <div className='bg-gradient-to-r from-rose-700 to-amber-600 text-yellow-50 p-2'>
                                                    Remaining Time : <TimerUp max={60} />
                                                </div>

                                                <div className='p-2'>
                                                    QNo : <span id="qno"> {test['qno']}</span>
                                                    -- <span id="qid"> {test['questionId']}</span>
                                                    -- <span id="exDtlid"> {test['id']}</span>
                                                </div>
                                                <div className='border-4 border-violet-400
                                            overflow-auto max-h-56 p-1 rounded scrollbar-thin scrollbar-track-indigo-600
                                            scrollbar-thumb-cyan-300'>
                                                    <Question que={test["question"]} />
                                                </div>
                                                <div className='border-4 overflow-auto max-h-56 rounded mt-1
                                            scrollbar-thin scrollbar-track-indigo-600
                                            scrollbar-thumb-cyan-300'>
                                                    <Optionbox opt={test["option"]} rnd={Math.random() * 100} typ={test["level"]} setStAns={setStAns} stAnsClick={stAnsClick} />
                                                </div>

                                            </motion.div> :
                                                <div className='parent flex flex-col h-[450px] p-2 bg-gray-300  w-full'>
                                                    <QueAnalysisComponent response={isCorrect} qid={test["questionId"]} chartdata={chartData} barvalue={progressBarValue} />
                                                </div>
                                            }

                                            <div className="mt-4">
                                                <Nextbutton click={btnNextclick} check={btnCheckclick} chkshow={show} />
                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            }
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

