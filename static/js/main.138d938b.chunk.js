(this["webpackJsonpcalculator-two"]=this["webpackJsonpcalculator-two"]||[]).push([[0],[,,,function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\n   width: 56px;\n   height: 40px;\n   background: lightgrey;\n   border-radius: 7px;\n   display: flex;\n   justify-content: center;\n   font-family: 'Baloo Tammudu 2';\n   font-size: 25px;\n   font-weight: 600;\n   color: rgb(91, 91, 91);\n"]);return l=function(){return _},_}e.a=function(_){return o.a.createElement(c,{onClick:function(){return _.handleAddToInput(_.children)}},_.children)};var c=r.a.div(l())},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_components_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_components_AddButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_components_ClearButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_components_OnButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(15),_components_Input__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(16),_components_EqualsButton__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(27),_App_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_10__);function _templateObject8(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   height: 100%;\n   width: 56px;\n   display: flex;\n   flex-direction: column;\n   justify-content: space-between;\n"]);return _templateObject8=function(){return _},_}function _templateObject7(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   height: 80%;\n   width: 100%;\n   display: flex;\n   justify-content: space-between;\n"]);return _templateObject7=function(){return _},_}function _templateObject6(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   height: 40px;\n   width: 100%;\n   display: flex;\n   justify-content: space-between;\n   margin-bottom: 7px;\n"]);return _templateObject6=function(){return _},_}function _templateObject5(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   height: 84%;\n   width: 85%;\n"]);return _templateObject5=function(){return _},_}function _templateObject4(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   width: 100%;\n   height: 73%;\n   background-color: rgb(255, 255, 255);\n   border-radius: 0px 0px 15px 15px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]);return _templateObject4=function(){return _},_}function _templateObject3(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   width: 100%;\n   height: 27%;\n   background-color: rgb(29, 175, 235);\n   border-radius: 15px 15px 0px 0px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]);return _templateObject3=function(){return _},_}function _templateObject2(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   width: 290px;\n   height: 375px;\n   border-radius: 15px;\n"]);return _templateObject2=function(){return _},_}function _templateObject(){var _=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n   background-color: lightblue;\n   width: 100%;\n   height: 100vh;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]);return _templateObject=function(){return _},_}function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)({value:""}),_useState2=Object(_Users_garethscott_Desktop_CodeNation_React_Projects_calculator_two_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),input=_useState2[0],setInput=_useState2[1],handleAddToInput=function(_){setInput({value:input.value+_})},handleEquals=function handleEquals(){setInput({value:eval(input.value)})};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBody,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledWrapper,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCalcTop,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_8__.a,{input:input.value})),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledCalcBottom,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBtnCont,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledTopHozRow,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_OnButton__WEBPACK_IMPORTED_MODULE_7__.a,null,"On"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ClearButton__WEBPACK_IMPORTED_MODULE_6__.a,{handleClear:function(){return setInput({value:""})}},"Clear"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"/")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledBottomCont,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledVertRow,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"7"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"4"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"1"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},".")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledVertRow,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"8"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"5"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"2"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"0")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledVertRow,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"9"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"6"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"3"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_EqualsButton__WEBPACK_IMPORTED_MODULE_9__.a,{handleEquals:handleEquals},"=")),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledVertRow,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"*"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__.a,{handleAddToInput:handleAddToInput},"-"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AddButton__WEBPACK_IMPORTED_MODULE_5__.a,{handleAddToInput:handleAddToInput},"+")))))))}__webpack_exports__.a=App;var StyledBody=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject()),StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject2()),StyledCalcTop=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject3()),StyledCalcBottom=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject4()),StyledBtnCont=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject5()),StyledTopHozRow=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject6()),StyledBottomCont=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject7()),StyledVertRow=styled_components__WEBPACK_IMPORTED_MODULE_3__.a.div(_templateObject8())},,,,function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\n    height: 78px;\n    width: 56px;\n    background-color: rgb(29, 175, 235);\n    border-radius: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Baloo Tammudu 2';\n    font-size: 35px;\n    font-weight: 600;\n    color: rgb(255, 255, 255);\n    padding-top: 10px;\n"]);return l=function(){return _},_}e.a=function(_){return o.a.createElement(c,{onClick:function(){return _.handleAddToInput(_.children)}},_.children)};var c=r.a.div(l())},function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\n   height: 40px;\n   width: 120px;\n   background-color: rgb(91, 91, 91);\n   border-radius: 7px;\n   display: flex;\n   justify-content: center;\n   font-family: 'Baloo Tammudu 2';\n   font-size: 25px;\n   font-weight: 600;\n   color: rgb(255, 255, 255);\n"]);return l=function(){return _},_}e.a=function(_){return o.a.createElement(c,{onClick:_.handleClear},_.children)};var c=r.a.div(l())},function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\n    height: 40px;\n    width: 56px;\n    border-radius: 7px;\n    background-color: rgb(253, 77, 91);\n    display: flex;\n    justify-content: center;\n    font-family: 'Baloo Tammudu 2';\n    font-size: 25px;\n    font-weight: 600;\n    color: white;\n"]);return l=function(){return _},_}e.a=function(_){return o.a.createElement(c,null,_.children)};var c=r.a.div(l())},function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\n   width: 84%;\n   height: 45px;\n   background-color: lightgrey;\n   border-radius: 7px;\n   display: flex;\n   justify-content: flex-end;\n   padding-right: 10px;\n   font-family: 'Baloo Tammudu 2';\n   font-size: 25px;\n   font-weight: 600;\n   color: rgb(91, 91, 91);\n   letter-spacing: 0.04em;\n"]);return l=function(){return _},_}function c(){var _=Object(n.a)(["\n   width: 85%;\n   height: 60px;\n   background-color: rgb(91, 91, 91);\n   border-radius: 7px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n"]);return c=function(){return _},_}e.a=function(_){return o.a.createElement(u,null,o.a.createElement(d,null,_.input))};var u=r.a.div(c()),d=r.a.div(l())},function(_,e,t){"use strict";var n=t(1),a=t(0),o=t.n(a),r=t(2);function l(){var _=Object(n.a)(["\nwidth: 56px;\nheight: 40px;\nbackground: lightgrey;\nborder-radius: 7px;\ndisplay: flex;\njustify-content: center;\nfont-family: 'Baloo Tammudu 2';\nfont-size: 25px;\nfont-weight: 600;\ncolor: rgb(91, 91, 91);\n"]);return l=function(){return _},_}e.a=function(_){return o.a.createElement(c,{onClick:_.handleEquals},_.children)};var c=r.a.div(l())},,function(_,e,t){_.exports=t(28)},,,,,function(_,e,t){},,,function(_,e,t){},function(_,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),o=t(8),r=t.n(o),l=(t(24),t(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.138d938b.chunk.js.map