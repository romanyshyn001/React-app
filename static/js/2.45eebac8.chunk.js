(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{359:function(e,t,a){e.exports={images:"ProfileInfo_images__3cvY3",description:"ProfileInfo_description__N9egl",userPhoto:"ProfileInfo_userPhoto__1XPc7",contact:"ProfileInfo_contact__2HOpo",checkbox:"ProfileInfo_checkbox__1C6It",btn:"ProfileInfo_btn__2bP6O",image:"ProfileInfo_image__tZDaG",avaLabel:"ProfileInfo_avaLabel__2ivol",uploadAva:"ProfileInfo_uploadAva__2F7UT",inputLabel:"ProfileInfo_inputLabel__3C7us"}},360:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var o=a(0),r=a.n(o),l=a(32),c=a(5);a.d(t,"a",function(){return s});var i=function(e){return{isAuth:e.auth.isAuth}};function s(e){return Object(l.b)(i)(function(t){var a=t.isAuth,o=n(t,["isAuth"]);return a?r.a.createElement(e,o):r.a.createElement(c.a,{to:"/Login"})})}},361:function(e,t,a){e.exports={item:"Post_item__3NK-6",images:"Post_images__k-A78",post:"Post_post__3JyPj",btn:"Post_btn__1qPdh"}},364:function(e,t,a){e.exports={values:"MyPosts_values__1uGj9",postBlock:"MyPosts_postBlock__2loxS"}},367:function(e,t,a){e.exports=a.p+"static/media/ava.6429af1b.png"},380:function(e,t,a){"use strict";a.r(t);var n=a(29),o=a(30),r=a(43),l=a(17),c=a(42),i=a(0),s=a.n(i),u=a(170),b=a(34),d=a(364),p=a.n(d),f=a(361),m=a.n(f),v=a(367),h=a.n(v),g=function(e){return s.a.createElement("div",{className:m.a.item},s.a.createElement("img",{className:m.a.images,src:h.a,alt:"avatar"}),e.message,s.a.createElement("div",null,s.a.createElement("span",null,"like ",e.likesCount)))},O=a(134),j=a(133),E=a(140),y=a(135),P=function(e){var t=e.onPostChange,a=Object(O.a)({initialValues:{newPostText:""},validationSchema:j.a({newPostText:j.b().max(20,"Maximum 20 characters").min(2,"Minimun characters 2").required("Required")}),onSubmit:function(e,a){var n=e.newPostText,o=a.resetForm;t(n),o()}});return s.a.createElement("form",{onSubmit:a.handleSubmit},Object(E.a)("newPostText","newPostText","text",a.handleChange,a.handleBlur,a.values.newPostText),a.touched.newPostText&&a.errors.newPostText?s.a.createElement("div",{className:m.a.post},a.errors.newPostText):null,s.a.createElement(y.a,{className:m.a.btn,type:"primary",htmlType:"submit"},"Add post"))},x=s.a.memo(function(e){var t=Object(b.a)(e.posts).reverse().map(function(e){return s.a.createElement(g,{message:e.message,likesCount:e.likesCount,key:e.id})});return s.a.createElement("div",{className:p.a.postBlock},s.a.createElement("h3",null,"Myposts"),s.a.createElement("div",null,s.a.createElement(P,{onPostChange:function(t){e.updateNewPost(t)}})),s.a.createElement("div",{className:p.a.posts},t))}),k=a(32),S=Object(k.b)(function(e){return{posts:e.profilePage.posts}},{updateNewPost:u.a.updateNewPostTextCreator})(x),C=a(4),w=a(359),_=a.n(w),I=a(153),N=a(274),M=function(e){var t=Object(i.useState)(!1),a=Object(C.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)(e.status),l=Object(C.a)(r,2),c=l[0],u=l[1];Object(i.useEffect)(function(){u(e.status)},[e.status]);return s.a.createElement("div",null,!n&&s.a.createElement("div",null,s.a.createElement("b",null,"Status:"),s.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"-----")),n&&s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("b",null,"Status:")),s.a.createElement(N.a,{onChange:function(e){u(e.target.value)},onBlur:function(){o(!1),e.updateStatus(c)},autoFocus:!0,value:c})))},T=a(122),A=a.n(T),D=a(1),F=a(3),L=a.n(F),B=a(176),z=a(54),J=a(14),V=a(8),R=a(31),H=a(12),G=a(64),U=a(123),X=a(13),W=new H.a("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),q=function(e){var t,a,n,o,r,l,c,i,s,u=e.checkboxCls,b="".concat(u,"-wrapper");return[(a={},Object(D.a)(a,"".concat(u,"-group"),Object.assign(Object.assign({},Object(X.f)(e)),{display:"inline-flex"})),Object(D.a)(a,b,Object.assign(Object.assign({},Object(X.f)(e)),{display:"inline-flex",alignItems:"baseline",lineHeight:"unset",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},"& + &":{marginInlineStart:e.marginXS},"&&-in-form-item":{'input[type="checkbox"]':{width:14,height:14}}})),Object(D.a)(a,u,Object.assign(Object.assign({},Object(X.f)(e)),(t={top:"0.2em",position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer"},Object(D.a)(t,"".concat(u,"-input"),Object(D.a)({position:"absolute",inset:0,zIndex:1,width:"100%",height:"100%",cursor:"pointer",opacity:0},"&:focus-visible + ".concat(u,"-inner"),Object.assign({},Object(X.c)(e)))),Object(D.a)(t,"".concat(u,"-inner"),{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorBorder),borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:"all ".concat(e.motionDurationSlow),"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorWhite),borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:"all ".concat(e.motionDurationFast," ").concat(e.motionEaseInBack,", opacity ").concat(e.motionDurationFast)}}),Object(D.a)(t,"& + span",{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}),t))),a),Object(D.a)({},u,{"&-indeterminate":Object(D.a)({},"".concat(u,"-inner"),{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}})}),(o={},Object(D.a)(o,"".concat(b,":hover ").concat(u,":after"),{visibility:"visible"}),Object(D.a)(o,"\n        ".concat(b,":not(").concat(b,"-disabled),\n        ").concat(u,":not(").concat(u,"-disabled)\n      "),Object(D.a)({},"&:hover ".concat(u,"-inner"),{borderColor:e.colorPrimary})),Object(D.a)(o,"".concat(b,":not(").concat(b,"-disabled)"),(n={},Object(D.a)(n,"&:hover ".concat(u,"-checked:not(").concat(u,"-disabled) ").concat(u,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),Object(D.a)(n,"&:hover ".concat(u,"-checked:not(").concat(u,"-disabled):after"),{borderColor:e.colorPrimaryHover}),n)),o),(c={},Object(D.a)(c,"".concat(u,"-checked"),(r={},Object(D.a)(r,"".concat(u,"-inner"),{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:"all ".concat(e.motionDurationMid," ").concat(e.motionEaseOutBack," ").concat(e.motionDurationFast)}}),Object(D.a)(r,"&:after",{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:"".concat(e.lineWidthBold,"px solid ").concat(e.colorPrimary),animationName:W,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:"all ".concat(e.motionDurationSlow)}),r)),Object(D.a)(c,"\n        ".concat(b,"-checked:not(").concat(b,"-disabled),\n        ").concat(u,"-checked:not(").concat(u,"-disabled)\n      "),(l={},Object(D.a)(l,"&:hover ".concat(u,"-inner"),{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}),Object(D.a)(l,"&:hover ".concat(u,":after"),{borderColor:e.colorPrimaryHover}),l)),c),(s={},Object(D.a)(s,"".concat(b,"-disabled"),{cursor:"not-allowed"}),Object(D.a)(s,"".concat(u,"-disabled"),(i={},Object(D.a)(i,"&, ".concat(u,"-input"),{cursor:"not-allowed"}),Object(D.a)(i,"".concat(u,"-inner"),{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}}),Object(D.a)(i,"&:after",{display:"none"}),Object(D.a)(i,"& + span",{color:e.colorTextDisabled}),i)),s)]};function K(e,t){var a=Object(G.b)(t,{checkboxCls:".".concat(e),checkboxSize:t.controlInteractiveSize});return[q(a)]}var Y=Object(U.a)("Checkbox",function(e,t){return[K(t.prefixCls,e)]}),Z=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},Q=i.createContext(null),$=function(e,t){var a=e.defaultValue,n=e.children,o=e.options,r=void 0===o?[]:o,l=e.prefixCls,c=e.className,s=e.style,u=e.onChange,b=Z(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),d=i.useContext(z.b),p=d.getPrefixCls,f=d.direction,m=i.useState(b.value||a||[]),v=Object(C.a)(m,2),h=v[0],g=v[1],O=i.useState([]),j=Object(C.a)(O,2),E=j[0],y=j[1];i.useEffect(function(){"value"in b&&g(b.value||[])},[b.value]);var P=function(){return r.map(function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e})},x=p("checkbox",l),k="".concat(x,"-group"),S=Y(x),w=Object(C.a)(S,2),_=w[0],I=w[1],N=Object(R.a)(b,["value","disabled"]);r&&r.length>0&&(n=P().map(function(e){return i.createElement(re,{prefixCls:x,key:e.value.toString(),disabled:"disabled"in e?e.disabled:b.disabled,value:e.value,checked:h.includes(e.value),onChange:e.onChange,className:"".concat(k,"-item"),style:e.style},e.label)}));var M={toggleOption:function(e){var t=h.indexOf(e.value),a=Object(V.a)(h);-1===t?a.push(e.value):a.splice(t,1),"value"in b||g(a);var n=P();null===u||void 0===u||u(a.filter(function(e){return E.includes(e)}).sort(function(e,t){return n.findIndex(function(t){return t.value===e})-n.findIndex(function(e){return e.value===t})}))},value:h,disabled:b.disabled,name:b.name,registerValue:function(e){y(function(t){return[].concat(Object(V.a)(t),[e])})},cancelValue:function(e){y(function(t){return t.filter(function(t){return t!==e})})}},T=L()(k,Object(D.a)({},"".concat(k,"-rtl"),"rtl"===f),c,I);return _(i.createElement("div",Object.assign({className:T,style:s},N,{ref:t}),i.createElement(Q.Provider,{value:M},n)))},ee=i.forwardRef($),te=i.memo(ee),ae=a(51),ne=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},oe=function(e,t){var a,n,o=e.prefixCls,r=e.className,l=e.children,c=e.indeterminate,s=void 0!==c&&c,u=e.style,b=e.onMouseEnter,d=e.onMouseLeave,p=e.skipGroup,f=void 0!==p&&p,m=e.disabled,v=ne(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),h=i.useContext(z.b),g=h.getPrefixCls,O=h.direction,j=i.useContext(Q),E=i.useContext(J.b).isFormItemInput,y=i.useContext(ae.b),P=null!==(n=(null===j||void 0===j?void 0:j.disabled)||m)&&void 0!==n?n:y,x=i.useRef(v.value);i.useEffect(function(){null===j||void 0===j||j.registerValue(v.value)},[]),i.useEffect(function(){if(!f)return v.value!==x.current&&(null===j||void 0===j||j.cancelValue(x.current),null===j||void 0===j||j.registerValue(v.value),x.current=v.value),function(){return null===j||void 0===j?void 0:j.cancelValue(v.value)}},[v.value]);var k=g("checkbox",o),S=Y(k),w=Object(C.a)(S,2),_=w[0],I=w[1],N=Object.assign({},v);j&&!f&&(N.onChange=function(){v.onChange&&v.onChange.apply(v,arguments),j.toggleOption&&j.toggleOption({label:l,value:v.value})},N.name=j.name,N.checked=j.value.includes(v.value));var M=L()((a={},Object(D.a)(a,"".concat(k,"-wrapper"),!0),Object(D.a)(a,"".concat(k,"-rtl"),"rtl"===O),Object(D.a)(a,"".concat(k,"-wrapper-checked"),N.checked),Object(D.a)(a,"".concat(k,"-wrapper-disabled"),P),Object(D.a)(a,"".concat(k,"-wrapper-in-form-item"),E),a),r,I),T=L()(Object(D.a)({},"".concat(k,"-indeterminate"),s),I),A=s?"mixed":void 0;return _(i.createElement("label",{className:M,style:u,onMouseEnter:b,onMouseLeave:d},i.createElement(B.a,Object.assign({"aria-checked":A},N,{prefixCls:k,className:T,disabled:P,ref:t})),void 0!==l&&i.createElement("span",null,l)))};var re=i.forwardRef(oe),le=re;le.Group=te,le.__ANT_CHECKBOX=!0;var ce=le,ie=function(e){var t=e.profile,a=e.saveProfile,n=e.setEditMode,o=Object(i.useState)(t.fullName),r=Object(C.a)(o,2),l=r[0],c=r[1],u=Object(i.useState)(t.aboutMe),b=Object(C.a)(u,2),d=b[0],p=b[1],f=Object(i.useState)(t.lookingForAJobDescription),m=Object(C.a)(f,2),v=m[0],h=m[1],g=Object(i.useState)(Boolean),O=Object(C.a)(g,2),j=O[0],P=O[1];return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({fullName:l,lookingForAJobDescription:v,aboutMe:d,lookingForAJob:j}),n(!1)}},s.a.createElement("p",null,s.a.createElement("b",null,"Full Name")),Object(E.a)("fullName","fullName","text",function(e){return c(e.target.value)},null,l,"",_.a.inputLabel),s.a.createElement("p",null,s.a.createElement("b",null,"About me:")),s.a.createElement(N.a.TextArea,{showCount:!0,className:_.a.aboutMe,maxLength:100,onChange:function(e){return p(e.currentTarget.value)},style:{height:120,resize:"none"},placeholder:"Tell about yourself"}),s.a.createElement("p",null,s.a.createElement("b",null,"My skills:")),Object(E.a)("lookingForAJobDescription","lookingForAJobDescription","text",function(e){return h(e.currentTarget.value)},null,v),s.a.createElement("p",null,s.a.createElement("b",null,"Are you Looking for a job?")),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("p",null,"Yes"),s.a.createElement(ce,{onChange:function(){P(function(e){return!e})}})),s.a.createElement(y.a,{className:_.a.btn,type:"primary",htmlType:"submit"},"Submit")))},se=function(e){var t=e.contactTitle,a=e.contactValue;return s.a.createElement("div",{className:_.a.contact},s.a.createElement("b",null,t),": ",a)},ue=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return s.a.createElement("div",null,a&&s.a.createElement("div",null,s.a.createElement(y.a,{className:_.a.btn,type:"primary",onClick:n},"Edit")),s.a.createElement("div",null,s.a.createElement("b",null,"Full Name"),": ",t.fullName),s.a.createElement("div",null,s.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),s.a.createElement("div",null,s.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&s.a.createElement("div",null,s.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),s.a.createElement("div",null,s.a.createElement("b",null,"About me"),": ",t.aboutMe),s.a.createElement("div",null,s.a.createElement("b",null,"Contacts"),":"," ",Object.keys(t.contacts).map(function(e){return s.a.createElement(se,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},be=function(e){return s.a.createElement("label",{className:_.a.avaLabel},s.a.createElement("input",{className:_.a.uploadAva,type:"file",onChange:e.onMainPhotoSelected}),s.a.createElement("img",{src:e.profilePhoto||e.userPhoto,alt:"Avatar",className:_.a.image}),e.children)},de=function(e){var t=e.profile,a=e.updateStatus,n=e.status,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,c=Object(i.useState)(!1),u=Object(C.a)(c,2),b=u[0],d=u[1];if(!t)return s.a.createElement(I.a,null);return s.a.createElement("div",null,s.a.createElement("div",{className:_.a.description},o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("form",null,s.a.createElement(be,{userPhoto:A.a,profilePhoto:t.photos.large,onMainPhotoSelected:function(e){null!=e.target.files&&e.target.files.length&&r(e.target.files[0])}}))),b?s.a.createElement(ie,{profile:t,isOwner:o,saveProfile:l,setEditMode:d}):s.a.createElement(ue,{goToEditMode:function(){d(!0)},profile:t,isOwner:o}),s.a.createElement(M,{updateStatus:a,status:n})))},pe=function(e){return s.a.createElement("div",null,s.a.createElement(de,{isOwner:e.isOwner,profile:e.profile,savePhoto:e.savePhoto,saveProfile:e.saveProfile,updateStatus:e.updateStatus,status:e.status}),s.a.createElement(S,null))},fe=a(5),me=a(360),ve=a(90),he=function(e){function t(e){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).call(this,e))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=+this.props.router.params.userId;e||(e=this.props.userId)||this.props.router.navigate("login/"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URL params or in state ('userId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return s.a.createElement(pe,Object.assign({},this.props,{profile:this.props.profile,isOwner:!this.props.router.params.userId,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus,status:this.props.status}))}}]),t}(s.a.Component);t.default=Object(ve.c)(Object(k.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.userId}},{getUserProfile:u.d,getStatus:u.c,updateStatus:u.g,savePhoto:u.e,saveProfile:u.f}),function(e){return function(t){var a=Object(fe.f)(),n=Object(fe.g)(),o=Object(fe.h)();return s.a.createElement(e,Object.assign({},t,{router:{location:a,navigate:n,params:o}}))}},me.a)(he)}}]);
//# sourceMappingURL=2.45eebac8.chunk.js.map