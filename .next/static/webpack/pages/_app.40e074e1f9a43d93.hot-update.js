"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n.Body {\\r\\n  background: #031b34;\\r\\n}\\r\\n.bg_gradient {\\r\\n  /* ff 3.6+ */\\r\\n\\r\\n  /* safari 5.1+,chrome 10+ */\\r\\n\\r\\n  /* opera 11.10+ */\\r\\n\\r\\n  /* ie 10+ */\\r\\n\\r\\n  /* global 92%+ browsers support */\\r\\n  background: radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n}\\r\\n.bg_text {\\r\\n  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);\\r\\n  -webkit-background-clip: text;\\r\\n          background-clip: text;\\r\\n  -webkit-background-clop: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n.section_padding {\\r\\n  padding: 4rem 6rem;\\r\\n}\\r\\n\\r\\n.section_margin {\\r\\n  margin: 4rem 6rem;\\r\\n}\\r\\n.scale-up-center {\\r\\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\\r\\n}\\r\\n@keyframes scale-up-center {\\r\\n  0% {\\r\\n    transform: scale(0.5);\\r\\n  }\\r\\n  100% {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 550px) {\\r\\n  /* mobile devices */\\r\\n  .section_padding {\\r\\n    padding: 4rem 2rem;\\r\\n  }\\r\\n  .section_margin {\\r\\n    margin: 4rem 2rem;\\r\\n  }\\r\\n}\\r\\n.gpt3_navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 2rem 6rem;\\r\\n}\\r\\n.gpt3_navbar_links {\\r\\n  flex: 1 1;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n}\\r\\n.gpt3_navbar_logo {\\r\\n  margin-right: 2rem;\\r\\n  width: 62px;\\r\\n  height: 16px;\\r\\n}\\r\\n.gpt3_navbar_logo img {\\r\\n  width: 62px;\\r\\n  height: 16px;\\r\\n}\\r\\n.gpt3_navbar_links_container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n.gpt3_navbar_links_sign {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n.gpt3_navbar_links_container p,\\r\\n.gpt3_navbar_links_container p,\\r\\n.gpt3_navbar_links_container p {\\r\\n  color: #ffffff;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n  margin: 0 1rem;\\r\\n  cursor: pointer;\\r\\n  color: #fff;\\r\\n}\\r\\n.gpt3_navbar_links_sign button,\\r\\n.gpt3_navbar_links_sign button {\\r\\n  padding: 0.5rem 1rem;\\r\\n  color: #fff;\\r\\n  background: #ff4820;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n  line-height: 25px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n .header_text {\\r\\n   flex: 1 1;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    flex-direction: column;\\r\\n    margin-left: 6rem;\\r\\n\\r\\n} \\r\\n.header_text h1,\\r\\n.header_text h1{\\r\\n\\r\\n  width: 614px;\\r\\n\\r\\n  \\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 800;\\r\\n  font-size: 62px;\\r\\n  line-height: 75px;\\r\\n  /* or 121% */\\r\\n  \\r\\n  letter-spacing: -0.04em;\\r\\n  \\r\\n  background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  background-clip: text;\\r\\n  text-fill-color: transparent;\\r\\n  \\r\\n}\\r\\n.header_text p{\\r\\n \\r\\n  width: 554px;\\r\\n\\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  line-height: 27px;\\r\\nfont-family: 'Manrope';\\r\\nfont-style: normal;\\r\\nfont-weight: 400;\\r\\nfont-size: 20px;\\r\\nline-height: 27px;\\r\\ncolor: #81AFDD;\\r\\n  }\\r\\n  .header_input {\\r\\n    width: 456px;\\r\\n    margin: 2rem 0 1rem;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    \\r\\n}\\r\\n\\r\\n.header_input input {\\r\\n    flex: 2 1;\\r\\n    min-height: 50px;\\r\\n\\r\\n    font-weight: 400;\\r\\n    font-size: 20px;\\r\\n    line-height: 28px;\\r\\n    background: #052D56;\\r\\n    border: none;\\r\\n    padding: 0 1rem;\\r\\n    outline: none;\\r\\n  color: #fff;\\r\\n    border-top-left-radius: 5px;\\r\\n    border-bottom-left-radius: 5px;\\r\\n}\\r\\n.header_input button {\\r\\nwidth: 174px;\\r\\nbackground: #FF4820;\\r\\ncolor: #fff;\\r\\nborder-radius: 0px 5px 5px 0px;\\r\\nborder: none; \\r\\nfont-style: normal;\\r\\nfont-weight: 700;\\r\\nfont-size: 20px;\\r\\n}\\r\\n.header_people{\\r\\n  display:flex;\\r\\n  justify-content: flex-start;\\r\\n  width: 100%;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n.header_people img{\\r\\n  width: 186.6px;\\r\\n  height: 36px;\\r\\n}\\r\\n.header_people p{\\r\\n\\r\\n  width: 581.92px;\\r\\n  height: 37.61px;\\r\\n  left: 333.37px;\\r\\n  top: 736.28px;\\r\\n  \\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  font-size: 12px;\\r\\n  line-height: 38px;\\r\\n\\r\\n  \\r\\n  color: #FFFFFF;\\r\\n  \\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;;EAOZ,2BAA2B;;EAO3B,iBAAiB;;EAOjB,WAAW;;EAOX,iCAAiC;EACjC;;;;GAIC;AACH;AACA;EACE,qEAAqE;EACrE,6BAAqB;UAArB,qBAAqB;EACrB,6BAA6B;EAC7B,oCAAoC;AACtC;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;AACA;EAGE,wEAAwE;AAC1E;AAYA;EACE;IAEE,qBAAqB;EACvB;EACA;IAEE,mBAAmB;EACrB;AACF;;AAEA;EACE,mBAAmB;EACnB;IACE,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;AACF;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,SAAO;EACP,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;AACA;;;EAGE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,eAAe;EACf,WAAW;AACb;AACA;;EAEE,oBAAoB;EACpB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;CAEC;GACE,SAAO;IACN,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,iBAAiB;;AAErB;AACA;;;EAGE,YAAY;;;EAGZ,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,YAAY;;EAEZ,uBAAuB;;EAEvB,qEAAqE;EACrE,6BAA6B;EAC7B,oCAAoC;EACpC,qBAAqB;EACrB,4BAA4B;;AAE9B;AACA;;EAEE,YAAY;;EAEZ,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB,sBAAsB;AACtB,kBAAkB;AAClB,gBAAgB;AAChB,eAAe;AACf,iBAAiB;AACjB,cAAc;EACZ;EACA;IACE,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;IACI,SAAO;IACP,gBAAgB;;IAEhB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,aAAa;EACf,WAAW;IACT,2BAA2B;IAC3B,8BAA8B;AAClC;AACA;AACA,YAAY;AACZ,mBAAmB;AACnB,WAAW;AACX,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB,gBAAgB;AAChB,eAAe;AACf;AACA;EACE,YAAY;EACZ,2BAA2B;EAC3B,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,YAAY;AACd;AACA;;EAEE,eAAe;EACf,eAAe;EACf,cAAc;EACd,aAAa;;EAEb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;;;EAGjB,cAAc;;AAEhB\",\"sourcesContent\":[\"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n.Body {\\r\\n  background: #031b34;\\r\\n}\\r\\n.bg_gradient {\\r\\n  /* ff 3.6+ */\\r\\n  background: -moz-radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n\\r\\n  /* safari 5.1+,chrome 10+ */\\r\\n  background: -webkit-radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n\\r\\n  /* opera 11.10+ */\\r\\n  background: -o-radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n\\r\\n  /* ie 10+ */\\r\\n  background: -ms-radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n\\r\\n  /* global 92%+ browsers support */\\r\\n  background: radial-gradient(\\r\\n    circle at 3% 25%,\\r\\n    rgba(0, 40, 83, 1) 0%,\\r\\n    rgba(4, 12, 24, 1) 100%\\r\\n  );\\r\\n}\\r\\n.bg_text {\\r\\n  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);\\r\\n  background-clip: text;\\r\\n  -webkit-background-clop: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n}\\r\\n.section_padding {\\r\\n  padding: 4rem 6rem;\\r\\n}\\r\\n\\r\\n.section_margin {\\r\\n  margin: 4rem 6rem;\\r\\n}\\r\\n.scale-up-center {\\r\\n  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)\\r\\n    both;\\r\\n  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes scale-up-center {\\r\\n  0% {\\r\\n    -webkit-transform: scale(0.5);\\r\\n    transform: scale(0.5);\\r\\n  }\\r\\n  100% {\\r\\n    -webkit-transform: scale(1);\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n@keyframes scale-up-center {\\r\\n  0% {\\r\\n    -webkit-transform: scale(0.5);\\r\\n    transform: scale(0.5);\\r\\n  }\\r\\n  100% {\\r\\n    -webkit-transform: scale(1);\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 550px) {\\r\\n  /* mobile devices */\\r\\n  .section_padding {\\r\\n    padding: 4rem 2rem;\\r\\n  }\\r\\n  .section_margin {\\r\\n    margin: 4rem 2rem;\\r\\n  }\\r\\n}\\r\\n.gpt3_navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 2rem 6rem;\\r\\n}\\r\\n.gpt3_navbar_links {\\r\\n  flex: 1;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n}\\r\\n.gpt3_navbar_logo {\\r\\n  margin-right: 2rem;\\r\\n  width: 62px;\\r\\n  height: 16px;\\r\\n}\\r\\n.gpt3_navbar_logo img {\\r\\n  width: 62px;\\r\\n  height: 16px;\\r\\n}\\r\\n.gpt3_navbar_links_container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n.gpt3_navbar_links_sign {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n.gpt3_navbar_links_container p,\\r\\n.gpt3_navbar_links_container p,\\r\\n.gpt3_navbar_links_container p {\\r\\n  color: #ffffff;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n  margin: 0 1rem;\\r\\n  cursor: pointer;\\r\\n  color: #fff;\\r\\n}\\r\\n.gpt3_navbar_links_sign button,\\r\\n.gpt3_navbar_links_sign button {\\r\\n  padding: 0.5rem 1rem;\\r\\n  color: #fff;\\r\\n  background: #ff4820;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n  line-height: 25px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n .header_text {\\r\\n   flex: 1;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-start;\\r\\n    flex-direction: column;\\r\\n    margin-left: 6rem;\\r\\n\\r\\n} \\r\\n.header_text h1,\\r\\n.header_text h1{\\r\\n\\r\\n  width: 614px;\\r\\n\\r\\n  \\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 800;\\r\\n  font-size: 62px;\\r\\n  line-height: 75px;\\r\\n  /* or 121% */\\r\\n  \\r\\n  letter-spacing: -0.04em;\\r\\n  \\r\\n  background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);\\r\\n  -webkit-background-clip: text;\\r\\n  -webkit-text-fill-color: transparent;\\r\\n  background-clip: text;\\r\\n  text-fill-color: transparent;\\r\\n  \\r\\n}\\r\\n.header_text p{\\r\\n \\r\\n  width: 554px;\\r\\n\\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  font-size: 20px;\\r\\n  line-height: 27px;\\r\\nfont-family: 'Manrope';\\r\\nfont-style: normal;\\r\\nfont-weight: 400;\\r\\nfont-size: 20px;\\r\\nline-height: 27px;\\r\\ncolor: #81AFDD;\\r\\n  }\\r\\n  .header_input {\\r\\n    width: 456px;\\r\\n    margin: 2rem 0 1rem;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    \\r\\n}\\r\\n\\r\\n.header_input input {\\r\\n    flex: 2;\\r\\n    min-height: 50px;\\r\\n\\r\\n    font-weight: 400;\\r\\n    font-size: 20px;\\r\\n    line-height: 28px;\\r\\n    background: #052D56;\\r\\n    border: none;\\r\\n    padding: 0 1rem;\\r\\n    outline: none;\\r\\n  color: #fff;\\r\\n    border-top-left-radius: 5px;\\r\\n    border-bottom-left-radius: 5px;\\r\\n}\\r\\n.header_input button {\\r\\nwidth: 174px;\\r\\nbackground: #FF4820;\\r\\ncolor: #fff;\\r\\nborder-radius: 0px 5px 5px 0px;\\r\\nborder: none; \\r\\nfont-style: normal;\\r\\nfont-weight: 700;\\r\\nfont-size: 20px;\\r\\n}\\r\\n.header_people{\\r\\n  display:flex;\\r\\n  justify-content: flex-start;\\r\\n  width: 100%;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n.header_people img{\\r\\n  width: 186.6px;\\r\\n  height: 36px;\\r\\n}\\r\\n.header_people p{\\r\\n\\r\\n  width: 581.92px;\\r\\n  height: 37.61px;\\r\\n  left: 333.37px;\\r\\n  top: 736.28px;\\r\\n  \\r\\n  font-family: 'Manrope';\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  font-size: 12px;\\r\\n  line-height: 38px;\\r\\n\\r\\n  \\r\\n  color: #FFFFFF;\\r\\n  \\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN1SDtBQUN2SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLDZCQUE2QixpQkFBaUIsZ0JBQWdCLDhCQUE4QixLQUFLLGVBQWUsMEJBQTBCLEtBQUssa0JBQWtCLHVSQUF1UixLQUFLLGNBQWMsNEVBQTRFLG9DQUFvQyxvQ0FBb0Msb0NBQW9DLDJDQUEyQyxLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyx5QkFBeUIsd0JBQXdCLEtBQUssc0JBQXNCLCtFQUErRSxLQUFLLGdDQUFnQyxVQUFVLDhCQUE4QixPQUFPLFlBQVksNEJBQTRCLE9BQU8sS0FBSyw4Q0FBOEMsa0RBQWtELDJCQUEyQixPQUFPLHVCQUF1QiwwQkFBMEIsT0FBTyxLQUFLLGtCQUFrQixvQkFBb0IscUNBQXFDLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IsZ0JBQWdCLG9CQUFvQixrQ0FBa0MsMEJBQTBCLEtBQUssdUJBQXVCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssMkJBQTJCLGtCQUFrQixtQkFBbUIsS0FBSyxrQ0FBa0Msb0JBQW9CLDBCQUEwQixLQUFLLDZCQUE2QixvQkFBb0IsZ0NBQWdDLDBCQUEwQixLQUFLLDBHQUEwRyxxQkFBcUIsdUJBQXVCLHNCQUFzQixxQkFBcUIsc0JBQXNCLGtCQUFrQixLQUFLLHVFQUF1RSwyQkFBMkIsa0JBQWtCLDBCQUEwQix1QkFBdUIsc0JBQXNCLHdCQUF3QixtQkFBbUIsb0JB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a0IsdUJBQXVCLHFCQUFxQixvQkFBb0IsS0FBSyxtQkFBbUIsbUJBQW1CLGtDQUFrQyxrQkFBa0IsdUJBQXVCLEtBQUssdUJBQXVCLHFCQUFxQixtQkFBbUIsS0FBSyxxQkFBcUIsMEJBQTBCLHNCQUFzQixxQkFBcUIsb0JBQW9CLG1DQUFtQyx5QkFBeUIsdUJBQXVCLHNCQUFzQix3QkFBd0IsK0JBQStCLFdBQVcsbUJBQW1CO0FBQ2hvWDtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy5jc3M/ZDY1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbi5Cb2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMzFiMzQ7XFxyXFxufVxcclxcbi5iZ19ncmFkaWVudCB7XFxyXFxuICAvKiBmZiAzLjYrICovXFxyXFxuXFxyXFxuICAvKiBzYWZhcmkgNS4xKyxjaHJvbWUgMTArICovXFxyXFxuXFxyXFxuICAvKiBvcGVyYSAxMS4xMCsgKi9cXHJcXG5cXHJcXG4gIC8qIGllIDEwKyAqL1xcclxcblxcclxcbiAgLyogZ2xvYmFsIDkyJSsgYnJvd3NlcnMgc3VwcG9ydCAqL1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICBjaXJjbGUgYXQgMyUgMjUlLFxcclxcbiAgICByZ2JhKDAsIDQwLCA4MywgMSkgMCUsXFxyXFxuICAgIHJnYmEoNCwgMTIsIDI0LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG4uYmdfdGV4dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODkuOTdkZWcsICNhZTY3ZmEgMS44NCUsICNmNDk4NjcgMTAyLjY3JSk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsb3A6IHRleHQ7XFxyXFxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5zZWN0aW9uX3BhZGRpbmcge1xcclxcbiAgcGFkZGluZzogNHJlbSA2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbl9tYXJnaW4ge1xcclxcbiAgbWFyZ2luOiA0cmVtIDZyZW07XFxyXFxufVxcclxcbi5zY2FsZS11cC1jZW50ZXIge1xcclxcbiAgYW5pbWF0aW9uOiBzY2FsZS11cC1jZW50ZXIgMC40cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgLyogbW9iaWxlIGRldmljZXMgKi9cXHJcXG4gIC5zZWN0aW9uX3BhZGRpbmcge1xcclxcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XFxyXFxuICB9XFxyXFxuICAuc2VjdGlvbl9tYXJnaW4ge1xcclxcbiAgICBtYXJnaW46IDRyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmdwdDNfbmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbGlua3Mge1xcclxcbiAgZmxleDogMSAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ncHQzX25hdmJhcl9sb2dvIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIHdpZHRoOiA2MnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbG9nbyBpbWcge1xcclxcbiAgd2lkdGg6IDYycHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxufVxcclxcbi5ncHQzX25hdmJhcl9saW5rc19jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5ncHQzX25hdmJhcl9saW5rc19zaWduIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdwdDNfbmF2YmFyX2xpbmtzX2NvbnRhaW5lciBwLFxcclxcbi5ncHQzX25hdmJhcl9saW5rc19jb250YWluZXIgcCxcXHJcXG4uZ3B0M19uYXZiYXJfbGlua3NfY29udGFpbmVyIHAge1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAwIDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuLmdwdDNfbmF2YmFyX2xpbmtzX3NpZ24gYnV0dG9uLFxcclxcbi5ncHQzX25hdmJhcl9saW5rc19zaWduIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmNDgyMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiAuaGVhZGVyX3RleHQge1xcclxcbiAgIGZsZXg6IDEgMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNnJlbTtcXHJcXG5cXHJcXG59IFxcclxcbi5oZWFkZXJfdGV4dCBoMSxcXHJcXG4uaGVhZGVyX3RleHQgaDF7XFxyXFxuXFxyXFxuICB3aWR0aDogNjE0cHg7XFxyXFxuXFxyXFxuICBcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgZm9udC1zaXplOiA2MnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDc1cHg7XFxyXFxuICAvKiBvciAxMjElICovXFxyXFxuICBcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODkuOTdkZWcsICNBRTY3RkEgMS44NCUsICNGNDk4NjcgMTAyLjY3JSk7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIHRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBcXHJcXG59XFxyXFxuLmhlYWRlcl90ZXh0IHB7XFxyXFxuIFxcclxcbiAgd2lkdGg6IDU1NHB4O1xcclxcblxcclxcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjdweDtcXHJcXG5mb250LWZhbWlseTogJ01hbnJvcGUnO1xcclxcbmZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5mb250LXdlaWdodDogNDAwO1xcclxcbmZvbnQtc2l6ZTogMjBweDtcXHJcXG5saW5lLWhlaWdodDogMjdweDtcXHJcXG5jb2xvcjogIzgxQUZERDtcXHJcXG4gIH1cXHJcXG4gIC5oZWFkZXJfaW5wdXQge1xcclxcbiAgICB3aWR0aDogNDU2cHg7XFxyXFxuICAgIG1hcmdpbjogMnJlbSAwIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX2lucHV0IGlucHV0IHtcXHJcXG4gICAgZmxleDogMiAxO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDUyRDU2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmhlYWRlcl9pbnB1dCBidXR0b24ge1xcclxcbndpZHRoOiAxNzRweDtcXHJcXG5iYWNrZ3JvdW5kOiAjRkY0ODIwO1xcclxcbmNvbG9yOiAjZmZmO1xcclxcbmJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXHJcXG5ib3JkZXI6IG5vbmU7IFxcclxcbmZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5mb250LXdlaWdodDogNzAwO1xcclxcbmZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuLmhlYWRlcl9wZW9wbGV7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcbi5oZWFkZXJfcGVvcGxlIGltZ3tcXHJcXG4gIHdpZHRoOiAxODYuNnB4O1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG4uaGVhZGVyX3Blb3BsZSBwe1xcclxcblxcclxcbiAgd2lkdGg6IDU4MS45MnB4O1xcclxcbiAgaGVpZ2h0OiAzNy42MXB4O1xcclxcbiAgbGVmdDogMzMzLjM3cHg7XFxyXFxuICB0b3A6IDczNi4yOHB4O1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcclxcblxcclxcbiAgXFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIFxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTs7RUFPWiwyQkFBMkI7O0VBTzNCLGlCQUFpQjs7RUFPakIsV0FBVzs7RUFPWCxpQ0FBaUM7RUFDakM7Ozs7R0FJQztBQUNIO0FBQ0E7RUFDRSxxRUFBcUU7RUFDckUsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUdFLHdFQUF3RTtBQUMxRTtBQVlBO0VBQ0U7SUFFRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUVFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFPO0VBQ1AsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBOzs7RUFHRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBOztFQUVFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7Q0FFQztHQUNFLFNBQU87SUFDTixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCOztBQUVyQjtBQUNBOzs7RUFHRSxZQUFZOzs7RUFHWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7O0VBRVosdUJBQXVCOztFQUV2QixxRUFBcUU7RUFDckUsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsNEJBQTRCOztBQUU5QjtBQUNBOztFQUVFLFlBQVk7O0VBRVosc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGNBQWM7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFNBQU87SUFDUCxnQkFBZ0I7O0lBRWhCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7RUFDZixXQUFXO0lBQ1QsMkJBQTJCO0lBQzNCLDhCQUE4QjtBQUNsQztBQUNBO0FBQ0EsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTs7RUFFYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCOzs7RUFHakIsY0FBYzs7QUFFaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uQm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDMxYjM0O1xcclxcbn1cXHJcXG4uYmdfZ3JhZGllbnQge1xcclxcbiAgLyogZmYgMy42KyAqL1xcclxcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoXFxyXFxuICAgIGNpcmNsZSBhdCAzJSAyNSUsXFxyXFxuICAgIHJnYmEoMCwgNDAsIDgzLCAxKSAwJSxcXHJcXG4gICAgcmdiYSg0LCAxMiwgMjQsIDEpIDEwMCVcXHJcXG4gICk7XFxyXFxuXFxyXFxuICAvKiBzYWZhcmkgNS4xKyxjaHJvbWUgMTArICovXFxyXFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChcXHJcXG4gICAgY2lyY2xlIGF0IDMlIDI1JSxcXHJcXG4gICAgcmdiYSgwLCA0MCwgODMsIDEpIDAlLFxcclxcbiAgICByZ2JhKDQsIDEyLCAyNCwgMSkgMTAwJVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIC8qIG9wZXJhIDExLjEwKyAqL1xcclxcbiAgYmFja2dyb3VuZDogLW8tcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICBjaXJjbGUgYXQgMyUgMjUlLFxcclxcbiAgICByZ2JhKDAsIDQwLCA4MywgMSkgMCUsXFxyXFxuICAgIHJnYmEoNCwgMTIsIDI0LCAxKSAxMDAlXFxyXFxuICApO1xcclxcblxcclxcbiAgLyogaWUgMTArICovXFxyXFxuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICBjaXJjbGUgYXQgMyUgMjUlLFxcclxcbiAgICByZ2JhKDAsIDQwLCA4MywgMSkgMCUsXFxyXFxuICAgIHJnYmEoNCwgMTIsIDI0LCAxKSAxMDAlXFxyXFxuICApO1xcclxcblxcclxcbiAgLyogZ2xvYmFsIDkyJSsgYnJvd3NlcnMgc3VwcG9ydCAqL1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxcclxcbiAgICBjaXJjbGUgYXQgMyUgMjUlLFxcclxcbiAgICByZ2JhKDAsIDQwLCA4MywgMSkgMCUsXFxyXFxuICAgIHJnYmEoNCwgMTIsIDI0LCAxKSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG4uYmdfdGV4dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODkuOTdkZWcsICNhZTY3ZmEgMS44NCUsICNmNDk4NjcgMTAyLjY3JSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xvcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLnNlY3Rpb25fcGFkZGluZyB7XFxyXFxuICBwYWRkaW5nOiA0cmVtIDZyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX21hcmdpbiB7XFxyXFxuICBtYXJnaW46IDRyZW0gNnJlbTtcXHJcXG59XFxyXFxuLnNjYWxlLXVwLWNlbnRlciB7XFxyXFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSlcXHJcXG4gICAgYm90aDtcXHJcXG4gIGFuaW1hdGlvbjogc2NhbGUtdXAtY2VudGVyIDAuNHMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNjYWxlLXVwLWNlbnRlciB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcbiAgLyogbW9iaWxlIGRldmljZXMgKi9cXHJcXG4gIC5zZWN0aW9uX3BhZGRpbmcge1xcclxcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XFxyXFxuICB9XFxyXFxuICAuc2VjdGlvbl9tYXJnaW4ge1xcclxcbiAgICBtYXJnaW46IDRyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmdwdDNfbmF2YmFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbGlua3Mge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbG9nbyB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICB3aWR0aDogNjJweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG59XFxyXFxuLmdwdDNfbmF2YmFyX2xvZ28gaW1nIHtcXHJcXG4gIHdpZHRoOiA2MnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbGlua3NfY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG4uZ3B0M19uYXZiYXJfbGlua3Nfc2lnbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5ncHQzX25hdmJhcl9saW5rc19jb250YWluZXIgcCxcXHJcXG4uZ3B0M19uYXZiYXJfbGlua3NfY29udGFpbmVyIHAsXFxyXFxuLmdwdDNfbmF2YmFyX2xpbmtzX2NvbnRhaW5lciBwIHtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcbi5ncHQzX25hdmJhcl9saW5rc19zaWduIGJ1dHRvbixcXHJcXG4uZ3B0M19uYXZiYXJfbGlua3Nfc2lnbiBidXR0b24ge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZjQ4MjA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4gLmhlYWRlcl90ZXh0IHtcXHJcXG4gICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcclxcblxcclxcbn0gXFxyXFxuLmhlYWRlcl90ZXh0IGgxLFxcclxcbi5oZWFkZXJfdGV4dCBoMXtcXHJcXG5cXHJcXG4gIHdpZHRoOiA2MTRweDtcXHJcXG5cXHJcXG4gIFxcclxcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJztcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICBmb250LXNpemU6IDYycHg7XFxyXFxuICBsaW5lLWhlaWdodDogNzVweDtcXHJcXG4gIC8qIG9yIDEyMSUgKi9cXHJcXG4gIFxcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA0ZW07XFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4OS45N2RlZywgI0FFNjdGQSAxLjg0JSwgI0Y0OTg2NyAxMDIuNjclKTtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIFxcclxcbn1cXHJcXG4uaGVhZGVyX3RleHQgcHtcXHJcXG4gXFxyXFxuICB3aWR0aDogNTU0cHg7XFxyXFxuXFxyXFxuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbmZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XFxyXFxuZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbmZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuZm9udC1zaXplOiAyMHB4O1xcclxcbmxpbmUtaGVpZ2h0OiAyN3B4O1xcclxcbmNvbG9yOiAjODFBRkREO1xcclxcbiAgfVxcclxcbiAgLmhlYWRlcl9pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA0NTZweDtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDAgMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfaW5wdXQgaW5wdXQge1xcclxcbiAgICBmbGV4OiAyO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMDUyRDU2O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmhlYWRlcl9pbnB1dCBidXR0b24ge1xcclxcbndpZHRoOiAxNzRweDtcXHJcXG5iYWNrZ3JvdW5kOiAjRkY0ODIwO1xcclxcbmNvbG9yOiAjZmZmO1xcclxcbmJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcXHJcXG5ib3JkZXI6IG5vbmU7IFxcclxcbmZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5mb250LXdlaWdodDogNzAwO1xcclxcbmZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuLmhlYWRlcl9wZW9wbGV7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcbi5oZWFkZXJfcGVvcGxlIGltZ3tcXHJcXG4gIHdpZHRoOiAxODYuNnB4O1xcclxcbiAgaGVpZ2h0OiAzNnB4O1xcclxcbn1cXHJcXG4uaGVhZGVyX3Blb3BsZSBwe1xcclxcblxcclxcbiAgd2lkdGg6IDU4MS45MnB4O1xcclxcbiAgaGVpZ2h0OiAzNy42MXB4O1xcclxcbiAgbGVmdDogMzMzLjM3cHg7XFxyXFxuICB0b3A6IDczNi4yOHB4O1xcclxcbiAgXFxyXFxuICBmb250LWZhbWlseTogJ01hbnJvcGUnO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcclxcblxcclxcbiAgXFxyXFxuICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles.css\n"));

/***/ })

});