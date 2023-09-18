"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 1575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vz: () => (/* binding */ testlist),
/* harmony export */   tU: () => (/* binding */ updateStudentAns),
/* harmony export */   x4: () => (/* binding */ login),
/* harmony export */   y5: () => (/* binding */ getTestQuestions)
/* harmony export */ });
/* unused harmony exports getTestList, insertStudentAns */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3258);

const baseURL = "http://localhost:5234/api/Concept/";
//http://localhost:5234/api/Concept/TestQuestions?testid=474018
const login = async (logindata)=>{
    const logdata = JSON.stringify(logindata);
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(`${baseURL}LoginUser`, logdata, {
        headers: {
            "Content-Type": "application/json"
        }
    }); //console.log(response.data.user.id);
    return response.data;
};
const testlist = async ()=>{
    // const response = await axios.get(`${baseURL}VlcTestList`).then((response) => {
    //     var x = response.data.test;
    //     console.log('tList : ' + x[0].subject);
    //     console.log('object : ' + x);
    //     return response;
    // });
    const url = `${baseURL}VlcTestList`;
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
        console.log("Failed to Load Test List", error);
    }
};
const getTestQuestions = async (tid, lvl, studentid)=>{
    const url = `${baseURL}TestQuestions?testid=${tid}&lvl=${lvl}&studentid=${studentid}`;
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
        console.log("Failed to Load Test List", error);
    }
};
const getTestList = async (batchid, studentid)=>{
    const res = await fetch(`${ip}api/Phoenix/TestList?batchid=${batchid}&sid=${studentid}`);
    if (!res.ok) return new Error("Something went wrong");
    return await res.json();
};
const updateStudentAns = async (ans)=>{
    const res = await fetch(`${baseURL}UpdateVlcAns`, {
        method: "PUT",
        body: JSON.stringify(ans),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await res.json();
};
const insertStudentAns = async (ans)=>{
    const res = await fetch(`${baseURL}InsertVlcAns`, {
        method: "POST",
        body: JSON.stringify(ans),
        headers: {
            "Content-Type": "application/json"
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
};


/***/ })

};
;