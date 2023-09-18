exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 1544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LevelFinishComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_levelfinish_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9225);
/* harmony import */ var _styles_levelfinish_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_levelfinish_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_Context_PostContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1479);






function LevelFinishComponent() {
    const { examLevel, setExamLevel, user } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_Context_PostContext__WEBPACK_IMPORTED_MODULE_3__.PostContext);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let W = window.innerWidth;
        let H = window.innerHeight;
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        const maxConfettis = 150;
        const particles = [];
        const possibleColors = [
            "DodgerBlue",
            "OliveDrab",
            "Gold",
            "Pink",
            "SlateBlue",
            "LightBlue",
            "Gold",
            "Violet",
            "PaleGreen",
            "SteelBlue",
            "SandyBrown",
            "Chocolate",
            "Crimson"
        ];
        function randomFromTo(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
        }
        function confettiParticle() {
            this.x = Math.random() * W; // x
            this.y = Math.random() * H - H; // y
            this.r = randomFromTo(11, 33); // radius
            this.d = Math.random() * maxConfettis + 11;
            this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
            this.tilt = Math.floor(Math.random() * 33) - 11;
            this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
            this.tiltAngle = 0;
            this.draw = function() {
                context.beginPath();
                context.lineWidth = this.r / 2;
                context.strokeStyle = this.color;
                context.moveTo(this.x + this.tilt + this.r / 3, this.y);
                context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
                return context.stroke();
            };
        }
        function Draw() {
            const results = [];
            // Magical recursive functional love
            requestAnimationFrame(Draw);
            context.clearRect(0, 0, W, window.innerHeight);
            for(var i = 0; i < maxConfettis; i++){
                results.push(particles[i].draw());
            }
            let particle = {};
            let remainingFlakes = 0;
            for(var i = 0; i < maxConfettis; i++){
                particle = particles[i];
                particle.tiltAngle += particle.tiltAngleIncremental;
                particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
                particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;
                if (particle.y <= H) remainingFlakes++;
                // If a confetti has fluttered out of view,
                // bring it back to above the viewport and let if re-fall.
                if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
                    particle.x = Math.random() * W;
                    particle.y = -30;
                    particle.tilt = Math.floor(Math.random() * 10) - 20;
                }
            }
            return results;
        }
        window.addEventListener("resize", function() {
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }, false);
        // Push new confetti objects to `particles[]`
        for(var i = 0; i < maxConfettis; i++){
            particles.push(new confettiParticle());
        }
        // Initialize
        canvas.width = W;
        canvas.height = H;
        Draw();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_levelfinish_module_css__WEBPACK_IMPORTED_MODULE_4___default().h1)} bg-white font-bold`,
                children: [
                    " Level Complete !",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/test/exam",
                            children: [
                                "Go to ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-red-500",
                                    children: [
                                        " ",
                                        examLevel
                                    ]
                                }),
                                " Level"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                id: "canvas",
                className: `${(_styles_levelfinish_module_css__WEBPACK_IMPORTED_MODULE_4___default().canvas)}`
            })
        ]
    });
}


/***/ }),

/***/ 9225:
/***/ ((module) => {

// Exports
module.exports = {
	"h1": "levelfinish_h1__3s5wI",
	"canvas": "levelfinish_canvas__aiAYg"
};


/***/ })

};
;