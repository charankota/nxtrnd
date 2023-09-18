exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 3372:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1479))

/***/ }),

/***/ 4110:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostContext: () => (/* binding */ PostContext),
/* harmony export */   PostProvider: () => (/* binding */ PostProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ PostContext,PostProvider auto */ 


const PostContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const PostProvider = ({ children })=>{
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: 1,
            title: "Post 1",
            description: "Description of Post 1"
        }
    ]);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [userType, setUserType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [rnd, setRnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Charan123");
    const [studentId, setStudentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [examId, setExamId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [examLevel, setExamLevel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Easy");
    const [totCorrect, setTotCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [qno, setQno] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const changeRnd = (val)=>{
        setRnd(val);
    };
    const setStdId = (val)=>{
        setStudentId(val);
    };
    const setUsr = (val)=>{
        setUser(val);
        console.log(val);
    };
    const setUsrType = (val)=>{
        setUserType(val);
    };
    const setExmId = (val)=>{
        setExamId(val);
    };
    const rndDisplay = ()=>{
        console.log("Rnd : " + rnd);
    };
    setRnd: ()=>{};
    const addPost = (newPost)=>{
        setPosts([
            ...posts,
            newPost
        ]);
    };
    const editPost = (id, updatedPost)=>{
        setPosts((prevPosts)=>{
            return prevPosts.map((post)=>{
                if (post.id === id) {
                    return {
                        ...post,
                        ...updatedPost
                    };
                }
                return post;
            });
        });
    };
    const deletePost = (id)=>{
        const updatedPosts = posts.filter((post)=>post.id !== id);
        setPosts(updatedPosts);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostContext.Provider, {
        value: {
            totCorrect,
            setTotCorrect,
            studentId,
            setStdId,
            user,
            setUsr,
            examId,
            setExmId,
            userType,
            setUsrType,
            rnd,
            changeRnd,
            rndDisplay,
            examLevel,
            setExamLevel
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: children
        })
    });
};


/***/ }),

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/Context/PostContext.js

const proxy = (0,module_proxy.createProxy)(String.raw`J:\ReactTut\concept_test\app\Context\PostContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["PostContext"];

const e1 = proxy["PostProvider"];

;// CONCATENATED MODULE: ./app/layout.tsx



//import { GlobalContextProvider } from './Context/storedata'

const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "h-full p-3 bg-gray-900",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;