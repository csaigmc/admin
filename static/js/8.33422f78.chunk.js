(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[8],{219:function(e,t,n){"use strict";var a=n(41),o=n(19),r=n(15),i=n(0),c=n.n(i),l=n(157),u=(n(72),n(25)),s=n(103),d=function(e){var t=e.errorText;return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},f=n(222),m=n.n(f),b=n(67),p=n(203),_=n(60),g=n(345),O=n(331),y=n(194),j=n(327),v=n(71),E=n(328),h=n(329),q=n(330),N=n(208),x=n(40);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=function(e,t){var n={};return t.map((function(t,a){n[t]=e&&e[t]||""})),n},w=function(e){var t=e.fullScreen,n=e.renderer,a=e.isShowing,l=e.editdata,u=e.constfieldsNameList,s=e.fieldNameMapping,d=e.onSave,f=e.onClose,m=Object(i.useState)(D(l,u)),b=Object(r.a)(m,2),_=b[0],g=b[1];Object(i.useEffect)((function(){g(D(l,u))}),[a]);x.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(a),console.log(l),console.log(u),console.log(s),console.log("----------EDITOR END-------------"));var O=n(_,(function(e){g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},_,Object(o.a)({},e.target.name,e.target.value)))}));return console.log(O),c.a.createElement(j.a,{fullScreen:t,open:a,onClose:function(){return f()},"aria-labelledby":"student-data-edit"},c.a.createElement(E.a,null,"Edit Details "),c.a.createElement(h.a,null,c.a.createElement(p.a,{container:!0},O)),c.a.createElement(q.a,null,c.a.createElement(N.a,{onClick:function(){return f()}},"Cancel"),c.a.createElement(N.a,{color:"primary",onClick:function(){return d(_)}},"Save")))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return I}));var P=Object(b.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),I=function(e){var t,n=e.updateObject,f=e.deleteObject,b=e.queryObject,E=e.addObject,h=e.constfieldsNameList,q=e.fieldNameMapping,N=e.editorRender,S=e.fullScreen,D=e.dialogRender,C=Object(u.b)().setLoading,I=Object(i.useState)(null),M=Object(r.a)(I,2),L=M[0],T=M[1],R=Object(i.useState)(!1),$=Object(r.a)(R,2),A=$[0],W=$[1],B=Object(i.useState)(!1),V=Object(r.a)(B,2),F=V[0],H=V[1],U=Object(i.useState)("Dummy Message"),G=Object(r.a)(U,2),z=G[0],J=G[1],K=Object(i.useState)(!1),Q=Object(r.a)(K,2),Y=Q[0],X=Q[1],Z=Object(i.useState)(-1),ee=Object(r.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(i.useState)(!0),oe=Object(r.a)(ae,2),re=oe[0],ie=oe[1],ce=Object(l.b)(b.query_query,{variables:{options:k({skip:0,limit:12},b.query_params)}}),le=ce.loading,ue=ce.data,se=(ce.error,ce.fetchMore),de=Object(l.a)(n.update_query),fe=Object(r.a)(de,2),me=fe[0],be=fe[1],pe=Object(l.a)(f.delete_query,{update:function(e,t){console.log("___DELETE___"),console.log(t)}}),_e=Object(r.a)(pe,2),ge=_e[0],Oe=_e[1],ye=Object(l.a)(E.add_query,{update:function(e,t){console.log("___ADD___"),console.log(t)}}),je=Object(r.a)(ye,2),ve=je[0],Ee=je[1],he=Object(v.a)(),qe=P(),Ne=Object(u.b)();if(x.b&&(console.log("...Component Custom.."),console.log(ue),console.log(".....")),Object(i.useEffect)((function(){!0===le?C(!0):!1===le&&(C(!1),(!ue||ue[b.query_tablename].length<12)&&ie(!1))}),[le]),Object(i.useEffect)((function(){be&&!1===be.loading&&!0===Y&&(J(be.error?n.error_message:n.success_message),H(!0),C(!1))}),[be.loading]),Object(i.useEffect)((function(){Ee&&!1===Ee.loading&&!0===Y&&(J(Ee.error?E.error_message:E.success_message),H(!0),C(!1))}),[Ee.loading]),Object(i.useEffect)((function(){Oe&&!1===Oe.loading&&!0===Y&&(J(Oe.error?f.error_message:f.success_message),H(!0),C(!1))}),[Oe.loading]),console.log(ue),!0===le)t=c.a.createElement(s.a,null);else if("undefined"!==typeof ue&&ue)if(0===ue[b.query_tablename].length)t=c.a.createElement(p.a,{container:!0,justify:"center"},c.a.createElement(p.a,{item:!0},c.a.createElement(_.a,{variant:"h2",className:qe.notfound},b.null_found)));else{for(var xe=ue[b.query_tablename].map((function(e,t){return b.forEachItem(e,t,(function(){T(t),W(!0)}),(function(){x.b&&(console.log("........."),console.log(e),console.log(f.delete_unique_field),console.log(f.delete_unique_var),console.log(e[f.delete_unique_field]),console.log("..........")),ge({variables:Object(o.a)({},f.delete_unique_var,e[f.delete_unique_field])}),X(!0)}),ne)})),Se=[],De=0;De<ue[b.query_tablename].length;De+=4){for(var we=[],Ce=De;Ce<De+4;++Ce)we.push(xe[Ce]);Se.push(c.a.createElement(p.a,{container:!0},we))}x.b&&(console.log("xxxx"),console.log(xe),console.log("xxxx")),t=c.a.createElement(m.a,{hasMore:re,loader:c.a.createElement("div",null,"Loading More Items..."),endMessage:c.a.createElement("div",null,"Loaded All!"),next:function(){var e=ue[b.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),se({variables:{options:k({skip:e,limit:12},b.query_params)},updateQuery:function(e,t){var n=t.fetchMoreResult;return n&&re?(console.log(e),console.log(b),console.log(n),n[b.query_tablename].length<12&&ie(!1),Object(o.a)({},b.query_tablename,[].concat(Object(a.a)(e[b.query_tablename]),Object(a.a)(n[b.query_tablename])))):e}})}},Se)}else t=c.a.createElement(d,{errorText:b.null_found?b.null_found:"Nothing Found :/"});return x.b&&console.log(t),c.a.createElement(p.a,{container:!0,className:he.py2},c.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:F,autoHideDuration:3e3,message:z,onClose:function(){H(!1)}}),c.a.createElement(w,{fullScreen:!!S,renderer:N,isShowing:A,constfieldsNameList:h,fieldNameMapping:q,editdata:null!==L&&ue&&ue[b.query_tablename]?ue[b.query_tablename][L]:null,onClose:function(){-1!==L&&T(-1),W(!1)},onSave:function(e){if(x.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==L){var t,a=ue[b.query_tablename][L][b.query_unique_field];W(!1),Ne.setLoading(!0),me({variables:(t={},Object(o.a)(t,n.update_var_unique,a),Object(o.a)(t,n.update_var_info,e),t)}),X(!0)}else W(!1),Ne.setLoading(!0),ve({variables:Object(o.a)({},E.add_var_info,e)}),X(!0)}}),c.a.createElement(p.a,{item:!0,xs:12},t),c.a.createElement(O.a,{className:qe.fab,color:"secondary",onClick:function(){T(null),W(!0)}},c.a.createElement(y.a,null,"add")),c.a.createElement(j.a,{onClose:function(){return ne(-1)},color:"secondary",open:-1!==te&&te>=0},D&&-1!==te&&te>=0&&ue&&ue[b.query_tablename]?D(ue[b.query_tablename][te]):null))};t.b=I},227:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(0),i=n.n(r),c=(n(8),n(3)),l=n(9),u=n(6),s=n(74),d=n(10),f=n(60),m=i.a.forwardRef((function(e,t){var n=e.classes,r=e.className,u=e.color,m=void 0===u?"primary":u,b=e.component,p=void 0===b?"a":b,_=e.onBlur,g=e.onFocus,O=e.TypographyClasses,y=e.underline,j=void 0===y?"hover":y,v=e.variant,E=void 0===v?"inherit":v,h=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),q=Object(s.a)(),N=q.isFocusVisible,x=q.onBlurVisible,S=q.ref,D=i.a.useState(!1),w=D[0],C=D[1],k=Object(d.a)(t,S);return i.a.createElement(f.a,Object(a.a)({className:Object(c.a)(n.root,n["underline".concat(Object(l.a)(j))],r,w&&n.focusVisible,{button:n.button}[p]),classes:O,color:m,component:p,onBlur:function(e){w&&(x(),C(!1)),_&&_(e)},onFocus:function(e){N(e)&&C(!0),g&&g(e)},ref:k,variant:E},h))}));t.a=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(m)},231:function(e,t,n){"use strict";var a=n(2),o=n(19),r=n(1),i=n(0),c=n.n(i),l=(n(8),n(3)),u=n(6),s=n(200),d=c.a.forwardRef((function(e,t){var n,o=e.classes,i=e.className,u=e.component,d=void 0===u?"li":u,f=e.disableGutters,m=void 0!==f&&f,b=e.role,p=void 0===b?"menuitem":b,_=e.selected,g=e.tabIndex,O=Object(a.a)(e,["classes","className","component","disableGutters","role","selected","tabIndex"]);return e.disabled||(n=void 0!==g?g:-1),c.a.createElement(s.a,Object(r.a)({button:!0,role:p,tabIndex:n,component:d,selected:_,disableGutters:m,classes:{dense:o.dense},className:Object(l.a)(o.root,i,_&&o.selected,!m&&o.gutters),ref:t},O))}));t.a=Object(u.a)((function(e){return{root:Object(r.a)({},e.typography.body1,Object(o.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(r.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(d)},335:function(e,t,n){"use strict";n.r(t);var a=n(221),o=n(0),r=n.n(o),i=n(219),c=n(73),l=n.n(c),u=n(203),s=n(332),d=n(333),f=n(60),m=n(227),b=n(334),p=n(193),_=n(194),g=n(214),O=n(206),y=n(216),j=n(211),v=n(231),E=n(71);function h(){var e=Object(a.a)(["\nmutation AddNotification($notification: InpNotification!) {\n    addNotification(notification: $notification) {\n        _id\n        notification_text\n        notification_url\n        notification_type\n        create_date\n    }\n}\n"]);return h=function(){return e},e}function q(){var e=Object(a.a)(["\nmutation DeleteNotification($id: ID!) {\n    deleteNotification(id: $id){\n        _id\n    }\n}\n"]);return q=function(){return e},e}function N(){var e=Object(a.a)(["\nmutation UpdateNotification($id: ID!, $notification: InpNotification) {\n    updateNotification(id: $id, notification:  $notification) {\n        _id\n        notification_text\n        notification_url\n        notification_type\n        create_date\n    }   \n}\n"]);return N=function(){return e},e}function x(){var e=Object(a.a)(["\nquery AllNotifications($options: InpOptions){\n    allNotifications(options: $options) {\n        _id\n        notification_text\n        notification_url\n        notification_type\n        create_date\n    }\n}\n"]);return x=function(){return e},e}var S=l()(x()),D=l()(N()),w=l()(q()),C=l()(h()),k=["notification_text","notification_url","notification_type"],P={notification_text:{value:"Text",required:!0},notification_url:{value:"URL",required:!0},notification_type:{value:"Notification",required:!0}};t.default=function(){var e=Object(E.a)();return r.a.createElement(i.a,{updateObject:{update_query:D,error_message:"Error Upadting Notification",success_message:"Updated Notification!",update_var_unique:"id",update_var_info:"notification"},deleteObject:{delete_query:w,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Notification",success_message:"Deleted Notification!"},queryObject:{query_query:S,query_unique_field:"_id",query_tablename:"allNotifications",forEachItem:function(t,n,a,o){var i=new Date;i.setTime(t.create_date);var c=i.getUTCDate(),l=i.getMonth()+1,g=i.getFullYear(),O="".concat(l,"/").concat(c,"/").concat(g);return r.a.createElement(u.a,{key:n,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,{variant:"h6",noWrap:!0},"Link: ",r.a.createElement(m.a,{target:"_blank",rel:"noopener",href:t.notification_url},t.notification_text)),r.a.createElement(f.a,null,"Created On: ",O)),r.a.createElement(b.a,{disableSpacing:!0},r.a.createElement(p.a,{onClick:a},r.a.createElement(_.a,null,"edit")),r.a.createElement(p.a,{onClick:o},r.a.createElement(_.a,null,"delete")))))},query_params:{type:"notification"}},addObject:{add_query:C,error_message:"Error Adding Notification",success_message:"Added Notification",add_var_info:"notification"},constfieldsNameList:k,fieldNameMapping:P,editorRender:function(e,t){return r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(g.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Text",required:!0,name:"notification_text",value:e.notification_text,onChange:t})),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(g.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"URL",required:!0,name:"notification_url",value:e.notification_url,onChange:t})),r.a.createElement(O.a,{fullWidth:!0},r.a.createElement(y.a,null,"Type"),r.a.createElement(j.a,{value:e.notification_type,onChange:t,inputProps:{name:"notification_type"}},r.a.createElement(v.a,{value:"notification"},"Notification")))))}})}}}]);
//# sourceMappingURL=8.33422f78.chunk.js.map