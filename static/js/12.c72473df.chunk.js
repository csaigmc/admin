(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[12],{219:function(e,a,t){"use strict";var n=t(41),r=t(19),o=t(15),l=t(0),c=t.n(l),u=t(157),s=(t(72),t(25)),i=t(103),m=function(e){var a=e.errorText;return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},a)))},d=t(222),p=t.n(d),b=t(67),f=t(203),_=t(60),g=t(345),y=t(331),O=t(194),E=t(327),v=t(71),h=t(328),j=t(329),q=t(330),x=t(208),N=t(40);function S(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var P=function(e,a){var t={};return a.map((function(a,n){t[a]=e&&e[a]||""})),t},U=function(e){var a=e.fullScreen,t=e.renderer,n=e.isShowing,u=e.editdata,s=e.constfieldsNameList,i=e.fieldNameMapping,m=e.onSave,d=e.onClose,p=Object(l.useState)(P(u,s)),b=Object(o.a)(p,2),_=b[0],g=b[1];Object(l.useEffect)((function(){g(P(u,s))}),[n]);N.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(n),console.log(u),console.log(s),console.log(i),console.log("----------EDITOR END-------------"));var y=t(_,(function(e){g(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?S(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},_,Object(r.a)({},e.target.name,e.target.value)))}));return console.log(y),c.a.createElement(E.a,{fullScreen:a,open:n,onClose:function(){return d()},"aria-labelledby":"student-data-edit"},c.a.createElement(h.a,null,"Edit Details "),c.a.createElement(j.a,null,c.a.createElement(f.a,{container:!0},y)),c.a.createElement(q.a,null,c.a.createElement(x.a,{onClick:function(){return d()}},"Cancel"),c.a.createElement(x.a,{color:"primary",onClick:function(){return m(_)}},"Save")))};function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(t,!0).forEach((function(a){Object(r.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}t.d(a,"a",(function(){return T}));var w=Object(b.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),T=function(e){var a,t=e.updateObject,d=e.deleteObject,b=e.queryObject,h=e.addObject,j=e.constfieldsNameList,q=e.fieldNameMapping,x=e.editorRender,S=e.fullScreen,P=e.dialogRender,C=Object(s.b)().setLoading,T=Object(l.useState)(null),W=Object(o.a)(T,2),k=W[0],I=W[1],M=Object(l.useState)(!1),L=Object(o.a)(M,2),R=L[0],A=L[1],$=Object(l.useState)(!1),F=Object(o.a)($,2),B=F[0],G=F[1],H=Object(l.useState)("Dummy Message"),J=Object(o.a)(H,2),V=J[0],z=J[1],K=Object(l.useState)(!1),Q=Object(o.a)(K,2),Y=Q[0],X=Q[1],Z=Object(l.useState)(-1),ee=Object(o.a)(Z,2),ae=ee[0],te=ee[1],ne=Object(l.useState)(!0),re=Object(o.a)(ne,2),oe=re[0],le=re[1],ce=Object(u.b)(b.query_query,{variables:{options:D({skip:0,limit:12},b.query_params)}}),ue=ce.loading,se=ce.data,ie=(ce.error,ce.fetchMore),me=Object(u.a)(t.update_query),de=Object(o.a)(me,2),pe=de[0],be=de[1],fe=Object(u.a)(d.delete_query,{update:function(e,a){console.log("___DELETE___"),console.log(a)}}),_e=Object(o.a)(fe,2),ge=_e[0],ye=_e[1],Oe=Object(u.a)(h.add_query,{update:function(e,a){console.log("___ADD___"),console.log(a)}}),Ee=Object(o.a)(Oe,2),ve=Ee[0],he=Ee[1],je=Object(v.a)(),qe=w(),xe=Object(s.b)();if(N.b&&(console.log("...Component Custom.."),console.log(se),console.log(".....")),Object(l.useEffect)((function(){!0===ue?C(!0):!1===ue&&(C(!1),(!se||se[b.query_tablename].length<12)&&le(!1))}),[ue]),Object(l.useEffect)((function(){be&&!1===be.loading&&!0===Y&&(z(be.error?t.error_message:t.success_message),G(!0),C(!1))}),[be.loading]),Object(l.useEffect)((function(){he&&!1===he.loading&&!0===Y&&(z(he.error?h.error_message:h.success_message),G(!0),C(!1))}),[he.loading]),Object(l.useEffect)((function(){ye&&!1===ye.loading&&!0===Y&&(z(ye.error?d.error_message:d.success_message),G(!0),C(!1))}),[ye.loading]),console.log(se),!0===ue)a=c.a.createElement(i.a,null);else if("undefined"!==typeof se&&se)if(0===se[b.query_tablename].length)a=c.a.createElement(f.a,{container:!0,justify:"center"},c.a.createElement(f.a,{item:!0},c.a.createElement(_.a,{variant:"h2",className:qe.notfound},b.null_found)));else{for(var Ne=se[b.query_tablename].map((function(e,a){return b.forEachItem(e,a,(function(){I(a),A(!0)}),(function(){N.b&&(console.log("........."),console.log(e),console.log(d.delete_unique_field),console.log(d.delete_unique_var),console.log(e[d.delete_unique_field]),console.log("..........")),ge({variables:Object(r.a)({},d.delete_unique_var,e[d.delete_unique_field])}),X(!0)}),te)})),Se=[],Pe=0;Pe<se[b.query_tablename].length;Pe+=4){for(var Ue=[],Ce=Pe;Ce<Pe+4;++Ce)Ue.push(Ne[Ce]);Se.push(c.a.createElement(f.a,{container:!0},Ue))}N.b&&(console.log("xxxx"),console.log(Ne),console.log("xxxx")),a=c.a.createElement(p.a,{hasMore:oe,loader:c.a.createElement("div",null,"Loading More Items..."),endMessage:c.a.createElement("div",null,"Loaded All!"),next:function(){var e=se[b.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),ie({variables:{options:D({skip:e,limit:12},b.query_params)},updateQuery:function(e,a){var t=a.fetchMoreResult;return t&&oe?(console.log(e),console.log(b),console.log(t),t[b.query_tablename].length<12&&le(!1),Object(r.a)({},b.query_tablename,[].concat(Object(n.a)(e[b.query_tablename]),Object(n.a)(t[b.query_tablename])))):e}})}},Se)}else a=c.a.createElement(m,{errorText:b.null_found?b.null_found:"Nothing Found :/"});return N.b&&console.log(a),c.a.createElement(f.a,{container:!0,className:je.py2},c.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:B,autoHideDuration:3e3,message:V,onClose:function(){G(!1)}}),c.a.createElement(U,{fullScreen:!!S,renderer:x,isShowing:R,constfieldsNameList:j,fieldNameMapping:q,editdata:null!==k&&se&&se[b.query_tablename]?se[b.query_tablename][k]:null,onClose:function(){-1!==k&&I(-1),A(!1)},onSave:function(e){if(N.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==k){var a,n=se[b.query_tablename][k][b.query_unique_field];A(!1),xe.setLoading(!0),pe({variables:(a={},Object(r.a)(a,t.update_var_unique,n),Object(r.a)(a,t.update_var_info,e),a)}),X(!0)}else A(!1),xe.setLoading(!0),ve({variables:Object(r.a)({},h.add_var_info,e)}),X(!0)}}),c.a.createElement(f.a,{item:!0,xs:12},a),c.a.createElement(y.a,{className:qe.fab,color:"secondary",onClick:function(){I(null),A(!0)}},c.a.createElement(O.a,null,"add")),c.a.createElement(E.a,{onClose:function(){return te(-1)},color:"secondary",open:-1!==ae&&ae>=0},P&&-1!==ae&&ae>=0&&se&&se[b.query_tablename]?P(se[b.query_tablename][ae]):null))};a.b=T},226:function(e,a,t){"use strict";var n=t(1),r=t(2),o=t(0),l=t.n(o),c=(t(8),t(3)),u=t(6),s=t(60),i=l.a.forwardRef((function(e,a){var t=e.action,o=e.avatar,u=e.classes,i=e.className,m=e.component,d=void 0===m?"div":m,p=e.disableTypography,b=void 0!==p&&p,f=e.subheader,_=e.subheaderTypographyProps,g=e.title,y=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=g;null==E||E.type===s.a||b||(E=l.a.createElement(s.a,Object(n.a)({variant:o?"body2":"h5",className:u.title,component:"span",display:"block"},y),E));var v=f;return null==v||v.type===s.a||b||(v=l.a.createElement(s.a,Object(n.a)({variant:o?"body2":"body1",className:u.subheader,color:"textSecondary",component:"span",display:"block"},_),v)),l.a.createElement(d,Object(n.a)({className:Object(c.a)(u.root,i),ref:a},O),o&&l.a.createElement("div",{className:u.avatar},o),l.a.createElement("div",{className:u.content},E,v),t&&l.a.createElement("div",{className:u.action},t))}));a.a=Object(u.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(i)},337:function(e,a,t){"use strict";t.r(a);var n=t(221),r=t(0),o=t.n(r),l=t(219),c=t(73),u=t.n(c),s=t(226),i=t(67),m=t(203),d=t(332),p=t(60),b=t(333),f=t(334),_=t(193),g=t(194),y=t(328),O=t(329),E=t(214),v=t(206),h=t(216),j=t(211),q=t(231),x=t(71);t(224);function N(){var e=Object(n.a)(["\nmutation AddUser($user: InpUser!) {\n    addUser(user: $user) {\n        _id\n        user\n        about_user\n        url_path\n        user_type\n        phone_no\n        email\n        create_date\n    }\n}\n"]);return N=function(){return e},e}function S(){var e=Object(n.a)(["\nmutation DeleteUser($id: ID!) {\n    deleteUser(id: $id){\n        _id\n    }\n}\n"]);return S=function(){return e},e}function P(){var e=Object(n.a)(["\nmutation UpdateUsers($id: ID!, $user: InpUser) {\n    updateUser(id: $id, user:  $user) {\n        _id\n        user\n        about_user\n        url_path\n        user_type\n        phone_no\n        email\n        create_date\n    }   \n}\n"]);return P=function(){return e},e}function U(){var e=Object(n.a)(["\nquery AllUsers($options: InpOptions){\n    allUsers(options: $options) {\n        _id\n        user\n        about_user\n        url_path\n        user_type\n        phone_no\n        email\n        create_date\n    }\n}\n"]);return U=function(){return e},e}var C=u()(U()),D=u()(P()),w=u()(S()),T=u()(N()),W=["user","about_user","url_path","user_type","phone_no","email"],k={user:{value:"Creator",required:!0},about_user:{value:"About Creator",required:!0},url_path:{value:"URL path",required:!0},user_type:{value:"User Type",required:!0},phone_no:{value:"Phone",required:!0},email:{value:"Email",required:!0}};Object(i.a)((function(){return{editor:{fontFamily:"IBM Plex Mono, ubuntu mono, consolas, source code pro, monospace !important"}}}));a.default=function(){var e=Object(x.a)();return o.a.createElement(l.a,{updateObject:{update_query:D,error_message:"Error Upadting User",success_message:"Updated User!",update_var_unique:"id",update_var_info:"user"},deleteObject:{delete_query:w,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting User",success_message:"Deleted User!"},queryObject:{query_query:C,query_unique_field:"_id",query_tablename:"allUsers",forEachItem:function(a,t,n,r){var l=new Date;l.setTime(a.create_date);var c=l.getUTCDate(),u=l.getMonth()+1,i=l.getFullYear(),y="".concat(u,"/").concat(c,"/").concat(i);return o.a.createElement(m.a,{key:t,item:!0,xs:12,sm:6,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},o.a.createElement(d.a,null,o.a.createElement(s.a,{disableTypography:!0,title:o.a.createElement(p.a,{variant:"h6",noWrap:!0},a.user),subheader:o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{noWrap:!0,variant:"subtitle2"},a.about_user),o.a.createElement(p.a,{noWrap:!0,variant:"subtitle2"},a.phone_no),o.a.createElement(p.a,{noWrap:!0,variant:"subtitle2"},a.email))}),o.a.createElement(b.a,null,o.a.createElement(p.a,{variant:"overline"},"Preview"),o.a.createElement("img",{style:{width:"100%",height:"180px",objectFit:"cover"},src:a.url_path}),o.a.createElement(p.a,null,"Created On: ",y)),o.a.createElement(f.a,{disableSpacing:!0},o.a.createElement(_.a,{onClick:n},o.a.createElement(g.a,null,"edit")),o.a.createElement(_.a,{onClick:r},o.a.createElement(g.a,null,"delete")))))},query_params:{type:"student"}},addObject:{add_query:T,error_message:"Error Adding User",success_message:"Added User",add_var_info:"user"},constfieldsNameList:W,fieldNameMapping:k,dialogRender:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(y.a,null,e.title),o.a.createElement(O.a,{dividers:!0},e.text))},editorRender:function(e,a){return console.log(e),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(m.a,{container:!0},o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"User",required:!0,name:"user",value:e.user,onChange:a})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"About User",required:!0,name:"about_user",value:e.about_user,onChange:a})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"URL",required:!0,name:"url_path",value:e.url_path,onChange:a})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Phone no",name:"phone_no",value:e.phone_no,onChange:a})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Email",name:"email",value:e.email,onChange:a})),o.a.createElement(v.a,{fullWidth:!0},o.a.createElement(h.a,null,"Type"),o.a.createElement(j.a,{value:e.user_type,onChange:a,inputProps:{name:"user_type"}},o.a.createElement(q.a,{value:"student"},"Student")))))}})}}}]);
//# sourceMappingURL=12.c72473df.chunk.js.map