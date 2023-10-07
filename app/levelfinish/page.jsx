'use client'
import { useEffect } from 'react';
//import { useGlobalContext } from '../Context/storedata';
import LevelFinishComponent from '../../components/genrl/levelfinishcomponent';


export default function LevelFinish() {
    // const { userId, setUserId, data, setData } = useGlobalContext();
    // const { userId, data } = useGlobalContext();
    // const Cxt = useGlobalContext();
    // const value = useContext(Cxt);


    //console.log('Posts : ' + rnd.toString());
    useEffect(() => {
        //changeRnd('ABCDEF');
    }, []);

    const click = () => {
        rndDisplay();
    }

    return (
        <div className='h-full bg-black'>
            {/* {console.log('Elevel :' + examLevel)} */}
            {/* {examLevel === "Complete" ? <CompleteExam /> : } */}
            <LevelFinishComponent />
        </div>
    )
}

{/* <p>{userId}</p>
            {data.map((e, i) => <p key={i}>{e.firstName} - {e.lastName}</p>)} */}
