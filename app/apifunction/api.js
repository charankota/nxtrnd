import axios from 'axios';


// import Cors from 'cors'

// // Initializing the cors middleware
// const cors = Cors({
//     methods: ['GET', 'HEAD'],
// })
let baseURL = "";
{
    process.env.NODE_ENV !== 'production' ?
        baseURL = "http://localhost:5234/api/Concept/" :
        baseURL = "https://msc.harshmobile.shop/api/Concept/"
}
//const baseURL = "http://localhost:5234/api/Concept/"
//const baseURL = "https://msc.harshmobile.shop/api/Concept/"
//const baseURL = "https://192.168.0.241:45456/api/Concept/"


//const baseURL = "https://192.168.0.241:45464/api/Concept" //"http://103.170.169.26:3035/api/Concept/"

//http://localhost:5234/api/Concept/TestQuestions?testid=474018

//console.log('Env : ' + process.env.NODE_ENV);

export const login = async (logindata) => {
    const logdata = JSON.stringify(logindata);
    const response = await axios.post(`${baseURL}LoginUser`, logdata, { headers: { 'Content-Type': 'application/json' } });    //console.log(response.data.user.id);
    return response.data
}

export const testlist = async () => {
    // const response = await axios.get(`${baseURL}VlcTestList`).then((response) => {

    //     var x = response.data.test;
    //     console.log('tList : ' + x[0].subject);
    //     console.log('object : ' + x);
    //     return response;
    // });

    const url = `${baseURL}VlcTestList`
    console.log(url);
    //const res = await fetch(`${ip}api/Phoenix/TestSyllabus?testid=${testid}`);
    try {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to Load Center List`);
        }
        let data = await res.json();
        data = data.test;
        console.log(data.test);
        return data;
    } catch (error) {
        console.log('Failed to Load Test List', error);
    }
}

export const getTestQuestions = async (tid, lvl, studentid) => {

    const url = `${baseURL}TestQuestions?testid=${tid}&lvl=${lvl}&studentid=${studentid}`
    console.log(url);
    //const res = await fetch(`${ip}api/Phoenix/TestSyllabus?testid=${testid}`);
    try {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Failed to Load Center List`);
        }
        let data = await res.json();
        console.log('Test :' + data.per);
        //data = data.test;

        return data;
    } catch (error) {
        console.log('Failed to Load Test List', error);
    }
};

export const getTestList = async (batchid, studentid) => {
    const res = await fetch(
        `${ip}api/Phoenix/TestList?batchid=${batchid}&sid=${studentid}`
    );


    if (!res.ok) return new Error("Something went wrong");

    return await res.json();
};

export const updateStudentAns = async (ans) => {
    const res = await fetch(`${baseURL}UpdateVlcAns`, {
        method: 'POST',
        body: JSON.stringify(ans),
        //mode: 'no-cors',
        //origin: 'http://localhost:3000',
        // headers: {
        //     'Content-Type': 'application/json',
        //     "Access-Control-Allow-Credentials": "true",
        //     //"Access-Control-Allow-Origin": "*",

        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // }
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
                "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
            "Access-Control-Max-Age": "86400",
        },
    });

    console.log(res);

    return await res.json();
}

export const insertStudentAns = async (ans) => {

    const res = await fetch(`${baseURL}InsertVlcAns`, {
        method: 'POST',
        body: JSON.stringify(ans),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();


    // const res = fetch(`${baseURL}InsertVlcAns`, {
    //     method: 'POST',
    //     body: JSON.stringify(ans),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then((response) => {
    //     response.json();
    // })
    //     .then((json) => { console.log(json); return (json) });


    //const result = response.status.toString;

    //console.log(response.ok);
}