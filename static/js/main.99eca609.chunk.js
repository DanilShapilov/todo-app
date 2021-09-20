(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var o,r,i,d,a,c,u=n(0),l=n.n(u),s=n(10),b=n.n(s),p=(n.p,n.p,n(28),n(5)),f=n(3),O=n(4),j=n(2),h=n(23),x=Object(O.a)(o||(o=Object(f.a)(["\n  background-color: #f2f2f2;\n  color: #4d4d4d;\n  border: none;\n"]))),g=Object(O.a)(r||(r=Object(f.a)(["\n  background-color: #23a3ff;\n  color: #fff;\n  border: none;\n"]))),v=Object(O.a)(i||(i=Object(f.a)(["\n  font-size: 14px;\n  padding: 5px 15px;\n  border-radius: 4px;\n"]))),y=Object(O.a)(d||(d=Object(f.a)(["\n  font-size: 16px;\n  border-radius: 10px;\n  padding: 10px 37px;\n"]))),m=Object(O.a)(a||(a=Object(f.a)(["\n  width: 60px;\n  height: 60px;\n  background: #ffffff;\n  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 50%;\n"]))),M=O.b.button(c||(c=Object(f.a)(["\n  font-weight: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 0.01em;\n  padding: 0;\n\n  ","\n  ","\n"])),(function(t){return t.isAddBtn?m:t.primary?g:x}),(function(t){return t.isAddBtn?"":t.small?v:y}));function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function w(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var T=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 11C0 10.4477 0.447715 10 1 10H21C21.5523 10 22 10.4477 22 11C22 11.5523 21.5523 12 21 12H1C0.447715 12 0 11.5523 0 11Z",fill:"#23A3FF"}),k=u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 22C10.4477 22 10 21.5523 10 21L10 1C10 0.447716 10.4477 2.41411e-08 11 0C11.5523 -2.41411e-08 12 0.447716 12 1L12 21C12 21.5523 11.5523 22 11 22Z",fill:"#23A3FF"});function D(t,e){var n=t.title,o=t.titleId,r=w(t,["title","titleId"]);return u.createElement("svg",E({width:22,height:22,viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},r),n?u.createElement("title",{id:o},n):null,T,k)}var C,H,A,F,_,L,z,U,B,I,P,S,R=u.forwardRef(D),G=(n.p,n(1)),K=function(t){var e=t.children,n=Object(h.a)(t,["children"]);return Object(G.jsx)(M,Object(j.a)(Object(j.a)({},n),{},{children:n.isAddBtn?Object(G.jsx)(R,{}):e}))},J=Object(O.b)(K).attrs({isAddBtn:!0})(C||(C=Object(f.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  z-index: 5;\n"]))),Z="TOGGLE_EDIT_MODE",V="SHOW_MODAL",W="HIDE_MODAL",X="SET_MODAL_TEXT",Y="SET_MODAL_TODO",q=function(){return{type:V}},N=function(){return{type:W}},Q=O.b.header(H||(H=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  h1 {\n    font-size: 28px;\n    letter-spacing: 0.01em;\n    color: #1c1c1c;\n  }\n"]))),$=Object(p.b)(null,(function(t){return{toggleEditMode:function(){return t({type:Z})},hideModal:function(){return t(N())}}}))((function(t){var e=t.isEditMode,n=t.toggleEditMode,o=t.hideModal;return Object(G.jsxs)(Q,{children:[Object(G.jsx)("h1",{children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),Object(G.jsx)(K,{onClick:function(){n(),o()},small:!0,children:e?"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c":"\u041f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),tt=n(8),et=n(11),nt=n(14),ot=n(13),rt="ADD_TODO",it="REMOVE_TODO",dt="UPDATE_TODO",at="TOGGLE_TODO",ct=function(t){var e=t.id,n=t.text;return{type:dt,payload:{id:e,text:n}}},ut=Object(O.c)(A||(A=Object(f.a)(["\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: rotate(0%);\n  }\n"]))),lt=O.b.div(F||(F=Object(f.a)(["\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 132px;\n  background-color: #fff;\n  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 40px 40px 0px 0px;\n  padding: 42px 40px;\n  animation: "," 0.3s ease-in-out;\n"])),ut),st=O.b.textarea(_||(_=Object(f.a)(["\n  width: 100%;\n  height: 160px;\n  resize: none;\n  border: 2px solid #e6e6e6;\n  padding: 20px;\n  outline: none;\n  border-radius: 10px;\n"]))),bt=O.b.div(L||(L=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 28px;\n"]))),pt=function(t){Object(nt.a)(n,t);var e=Object(ot.a)(n);function n(t){var o;return Object(tt.a)(this,n),(o=e.call(this,t)).props=t,o}return Object(et.a)(n,[{key:"handleChange",value:function(t){(0,this.props.setModalText)(t.target.value)}},{key:"addOrUpdateTodo",value:function(){var t=this.props,e=t.text,n=t.id,o=t.addTodo,r=t.updateTodo,i=t.hideModal;""!==e.trim()&&(n?r({id:n,text:e}):o(e),i())}},{key:"handleEnterKey",value:function(t){13===t.keyCode&&this.addOrUpdateTodo()}},{key:"handleFocus",value:function(t){var e=t.target.value;t.target.value="",t.target.value=e}},{key:"render",value:function(){var t=this,e=this.props,n=e.text,o=e.hideModal,r=e.isEditMode;return Object(G.jsxs)(lt,{children:[Object(G.jsx)(st,{onChange:function(e){return t.handleChange(e)},value:n,autoFocus:!0,onKeyDown:function(e){return t.handleEnterKey(e)},onFocus:function(e){return t.handleFocus(e)}}),Object(G.jsxs)(bt,{children:[Object(G.jsx)(K,{onClick:function(){return o()},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(G.jsx)(K,{primary:!0,onClick:function(){return t.addOrUpdateTodo()},children:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(l.a.Component),ft=Object(p.b)((function(t){return{text:t.modal.text,id:t.modal.id}}),(function(t){return{hideModal:function(){return t(N())},setModalText:function(e){return t(function(t){return{type:X,payload:t}}(e))},addTodo:function(e){return t(function(t){return{type:rt,payload:t}}(e))},updateTodo:function(e){return t(ct(e))}}}))(pt),Ot=O.b.div(z||(z=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),jt=Object(O.a)(U||(U=Object(f.a)(['\n  &:after {\n    content: "";\n    width: 12px;\n    height: 12px;\n    background-color: #23a3ff;\n    display: block;\n    border-radius: 50%;\n  }\n']))),ht=Object(O.a)(B||(B=Object(f.a)(['\n  background-color: #e85c5c;\n  border: none;\n  &:after {\n    content: "";\n    width: 10px;\n    height: 2px;\n    border-radius: 1px;\n    background-color: #fff;\n    display: block;\n  }\n']))),xt=O.b.div(I||(I=Object(f.a)(["\n  width: 22px;\n  height: 22px;\n  margin-right: 14px;\n  border: 2px solid #d9d9d9;\n  box-sizing: border-box;\n  border-radius: 50%;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  ","\n"])),(function(t){return t.isEditMode?ht:t.isDone?jt:void 0})),gt=O.b.div(P||(P=Object(f.a)(["\n  ","\n"])),(function(t){if(t.isDone)return"color: rgba(0, 0, 0, 0.6);"})),vt=function(t){var e=t.text,n=t.isDone,o=t.isEditMode,r=t.toggleOrUpdateHandler,i=t.removeHandler;return Object(G.jsxs)(Ot,{onClick:r,children:[Object(G.jsx)(xt,{onClick:i,isDone:n,isEditMode:o}),Object(G.jsx)(gt,{isDone:n,children:e})]})},yt=O.b.section(S||(S=Object(f.a)(["\n  font-size: 18px;\n  margin-top: 50px;\n"]))),mt=function(t){Object(nt.a)(n,t);var e=Object(ot.a)(n);function n(){return Object(tt.a)(this,n),e.apply(this,arguments)}return Object(et.a)(n,[{key:"toggleOrUpdateHandler",value:function(t,e){var n=this.props,o=n.toggleTodo,r=n.isEditMode,i=n.showModal,d=n.setModalTodo;r?(console.log(t,e),d(t,e),i()):o(t)}},{key:"removeHandler",value:function(t,e){var n=this.props,o=n.removeTodo;n.isEditMode&&(t.stopPropagation(),o(e))}},{key:"render",value:function(){var t=this,e=this.props,n=e.todos,o=e.isEditMode;return Object(G.jsx)(yt,{children:n.length>0?n.map((function(e){return Object(G.jsx)(vt,Object(j.a)(Object(j.a)({},e),{},{isEditMode:o,toggleOrUpdateHandler:function(){return t.toggleOrUpdateHandler(e.id,e.text)},removeHandler:function(n){return t.removeHandler(n,e.id)}}),e.id)})):"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442"})}}]),n}(l.a.Component),Mt=Object(p.b)((function(t){return{todos:t.todos.todos}}),(function(t){return{toggleTodo:function(e){return t(function(t){return{type:at,payload:{id:t}}}(e))},removeTodo:function(e){return t(function(t){return{type:it,payload:{id:t}}}(e))},updateTodo:function(e,n){return t(ct({id:e,text:n}))},showModal:function(){return t(q())},setModalTodo:function(e,n){return t(function(t,e){return{type:Y,payload:{id:t,text:e}}}(e,n))}}}))(mt);var Et=Object(p.b)((function(t){return{isModalHidden:t.modal.hidden,app:t.app}}),(function(t){return{showModal:function(){return t(q())}}}))((function(t){var e=t.showModal,n=t.isModalHidden,o=t.app;return Object(G.jsxs)("div",{children:[Object(G.jsx)($,{isEditMode:o.isEditMode}),Object(G.jsx)(Mt,{isEditMode:o.isEditMode}),!n&&Object(G.jsx)(ft,{isEditMode:o.isEditMode}),!o.isEditMode&&Object(G.jsx)(J,{onClick:e})]})})),wt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,d=e.getTTFB;n(t),o(t),r(t),i(t),d(t)}))},Tt=n(6),kt=n(12),Dt=(n(35),n(20)),Ct=n.n(Dt),Ht={hidden:!0,text:"",id:null},At=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case V:return Object(j.a)(Object(j.a)({},t),{},{hidden:!1});case W:return Object(j.a)(Object(j.a)({},t),{},{hidden:!0,text:"",id:null});case X:return Object(j.a)(Object(j.a)({},t),{},{text:e.payload});case Y:return Object(j.a)(Object(j.a)({},t),e.payload);default:return t}},Ft=n(22),_t=n(41),Lt=function t(e){Object(tt.a)(this,t),this.id=Object(_t.a)(),this.text=e.trim(),this.isDone=!1},zt=function(t,e){return[].concat(Object(Ft.a)(t),[new Lt(e)])},Ut=function(t,e){return t.filter((function(t){return t.id!==e.id}))},Bt=function(t,e){return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{text:e.text.trim()}):t}))},It=function(t,e){return t.map((function(t){return t.id===e.id?Object(j.a)(Object(j.a)({},t),{},{isDone:!t.isDone}):t}))},Pt={todos:[]},St=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case rt:return Object(j.a)(Object(j.a)({},t),{},{todos:zt(t.todos,e.payload)});case it:return Object(j.a)(Object(j.a)({},t),{},{todos:Ut(t.todos,e.payload)});case dt:return Object(j.a)(Object(j.a)({},t),{},{todos:Bt(t.todos,e.payload)});case at:return Object(j.a)(Object(j.a)({},t),{},{todos:It(t.todos,e.payload)});default:return t}},Rt={isEditMode:!1},Gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z:return Object(j.a)(Object(j.a)({},t),{},{isEditMode:!t.isEditMode});default:return t}},Kt={key:"root",storage:Ct.a,whitelist:["todos"]},Jt=Object(Tt.b)({todos:St,modal:At,app:Gt}),Zt=Object(kt.a)(Kt,Jt);var Vt=Object(Tt.c)(Zt,Tt.a.apply(void 0,[])),Wt=Object(kt.b)(Vt),Xt=n(21);b.a.render(Object(G.jsx)(l.a.StrictMode,{children:Object(G.jsx)(p.a,{store:Vt,children:Object(G.jsx)(Xt.a,{persistor:Wt,children:Object(G.jsx)(Et,{})})})}),document.getElementById("root")),wt()}},[[39,1,2]]]);
//# sourceMappingURL=main.99eca609.chunk.js.map