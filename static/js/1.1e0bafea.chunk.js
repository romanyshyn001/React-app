(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{358:function(a,e,t){a.exports={chat:"Dialogs_chat__7UGxi",chatItems:"Dialogs_chatItems___niUE",images:"Dialogs_images__1Pd54",messages:"Dialogs_messages__3GRGD",dialogPost:"Dialogs_dialogPost__2NfSj",btn:"Dialogs_btn__2EZvW",dialogMsg:"Dialogs_dialogMsg__3tVy1"}},360:function(a,e,t){"use strict";function n(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var i=t(0),s=t.n(i),r=t(32),o=t(5);t.d(e,"a",function(){return c});var l=function(a){return{isAuth:a.auth.isAuth}};function c(a){return Object(r.b)(l)(function(e){var t=e.isAuth,i=n(e,["isAuth"]);return t?s.a.createElement(a,i):s.a.createElement(o.a,{to:"/Login"})})}},363:function(a,e,t){a.exports=t.p+"static/media/avaMessage.6429af1b.png"},383:function(a,e,t){"use strict";t.r(e);var n=t(28),i=t(121),s=t(358),r=t.n(s),o=t(0),l=t.n(o),c=t(53),m=t(363),d=t.n(m),g=function(a){var e="/dialogs/"+a.id;return l.a.createElement("div",{className:r.a.item},l.a.createElement("img",{className:r.a.images,src:d.a,alt:"avatar"}),l.a.createElement(c.b,{to:e},a.name))},u=function(a){return l.a.createElement("div",{className:r.a.messages},a.message)},f=t(134),b=t(133),h=t(140),v=t(135),D=function(a){var e=a.sendDialogText,t=Object(f.a)({initialValues:{addDialogPost:""},validationSchema:b.a({addDialogPost:b.b().max(20,"Maximum 20 characters").min(2,"Minimun characters 2").required("Required")}),onSubmit:function(a,t){var n=a.addDialogPost,i=t.resetForm;e(n),i()}});return l.a.createElement("form",{className:r.a.dialogMsg,onSubmit:t.handleSubmit},Object(h.a)("addDialogPost","addDialogPost","text",t.handleChange,t.handleBlur,t.values.addDialogPost),t.touched.addDialogPost&&t.errors.addDialogPost?l.a.createElement("div",{className:r.a.dialogPost},t.errors.addDialogPost):null,l.a.createElement(v.a,{type:"primary",htmlType:"submit",className:r.a.btn}," ","Send"," "))},_=function(a){var e=a.dialogPage,t=e.dialogsData.map(function(a){return l.a.createElement(g,{name:a.name,id:a.id,key:a.id})}),n=e.messageData.map(function(a){return l.a.createElement(u,{message:a.message,key:a.id})});return l.a.createElement("div",{className:r.a.chat},l.a.createElement("div",{className:r.a.chatItems},t),l.a.createElement("div",{className:r.a.messages},n,l.a.createElement("div",null,l.a.createElement(D,{sendDialogText:a.sendDialogText}))))},p=t(32),P=t(360),E=t(90);e.default=Object(E.c)(Object(p.b)(function(a){return{dialogPage:a.dialogPage,dialogText:a.dialogPage.newDialogPost}},Object(n.a)({},i.a)),P.a)(_)}}]);
//# sourceMappingURL=1.1e0bafea.chunk.js.map