(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[7],{219:function(e,t,a){"use strict";var n=a(19),r=a(15),o=a(0),l=a.n(o),c=a(157),i=(a(72),a(24)),u=a(103),s=function(e){var t=e.errorText;return l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("div",{className:"display-inline-block"},l.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},d=(a(222),a(67)),m=a(203),p=a(60),b=a(344),f=a(331),g=a(194),_=a(327),y=a(71),O=a(328),v=a(329),E=a(330),j=a(208),h=a(40);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(e,t){var a={};return t.map((function(t,n){a[t]=e&&e[t]||""})),a},N=function(e){var t=e.fullScreen,a=e.renderer,c=e.isShowing,i=e.editdata,u=e.constfieldsNameList,s=e.fieldNameMapping,d=e.onSave,p=e.onClose,b=Object(o.useState)(x(i,u)),f=Object(r.a)(b,2),g=f[0],y=f[1];Object(o.useEffect)((function(){y(x(i,u))}),[c]);h.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(c),console.log(i),console.log(u),console.log(s),console.log("----------EDITOR END-------------"));var N=a(g,(function(e){y(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},g,Object(n.a)({},e.target.name,e.target.value)))}));return console.log(N),l.a.createElement(_.a,{fullScreen:t,open:c,onClose:function(){return p()},"aria-labelledby":"student-data-edit"},l.a.createElement(O.a,null,"Edit Details "),l.a.createElement(v.a,null,l.a.createElement(m.a,{container:!0},N)),l.a.createElement(E.a,null,l.a.createElement(j.a,{onClick:function(){return p()}},"Cancel"),l.a.createElement(j.a,{color:"primary",onClick:function(){return d(g)}},"Save")))};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return D}));var A=Object(d.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),D=function(e){var t,a=e.updateObject,d=e.deleteObject,O=e.queryObject,v=e.addObject,E=e.constfieldsNameList,j=e.fieldNameMapping,q=e.editorRender,x=e.fullScreen,C=e.dialogRender,D=Object(i.b)().setLoading,w=Object(o.useState)(null),P=Object(r.a)(w,2),k=P[0],T=P[1],I=Object(o.useState)(!1),R=Object(r.a)(I,2),L=R[0],M=R[1],$=Object(o.useState)(!1),F=Object(r.a)($,2),W=F[0],B=F[1],V=Object(o.useState)("Dummy Message"),U=Object(r.a)(V,2),H=U[0],z=U[1],G=Object(o.useState)(!1),J=Object(r.a)(G,2),Q=J[0],Y=J[1],K=Object(o.useState)(-1),X=Object(r.a)(K,2),Z=X[0],ee=X[1],te=Object(o.useState)(!0),ae=Object(r.a)(te,2),ne=(ae[0],ae[1],Object(c.b)(O.query_query,{variables:{options:S({skip:0,limit:40},O.query_params)}})),re=ne.loading,oe=ne.data,le=(ne.error,ne.fetchMore,Object(c.a)(a.update_query)),ce=Object(r.a)(le,2),ie=ce[0],ue=ce[1],se=Object(c.a)(d.delete_query,{update:function(e,t){console.log("___DELETE___"),console.log(t),e.writeQuery({query:O})}}),de=Object(r.a)(se,2),me=de[0],pe=de[1],be=Object(c.a)(v.add_query,{update:function(e,t){console.log("___ADD___"),console.log(t)}}),fe=Object(r.a)(be,2),ge=fe[0],_e=fe[1],ye=Object(y.a)(),Oe=A(),ve=Object(i.b)();if(h.b&&(console.log("...Component Custom.."),console.log(oe),console.log(".....")),!0===re?D(!0):!1===re&&D(!1),Object(o.useEffect)((function(){ue&&!1===ue.loading&&!0===Q&&(z(ue.error?a.error_message:a.success_message),B(!0))}),[ue.loading]),Object(o.useEffect)((function(){_e&&!1===_e.loading&&!0===Q&&(z(_e.error?v.error_message:v.success_message),B(!0))}),[_e.loading]),Object(o.useEffect)((function(){pe&&!1===pe.loading&&!0===Q&&(z(pe.error?d.error_message:d.success_message),B(!0))}),[pe.loading]),console.log(oe),!0===re)t=l.a.createElement(u.a,null);else if("undefined"!==typeof oe&&oe)if(0===oe[O.query_tablename].length)t=l.a.createElement(m.a,{container:!0,justify:"center"},l.a.createElement(m.a,{item:!0},l.a.createElement(p.a,{variant:"h2",className:Oe.notfound},O.null_found)));else{for(var Ee=oe[O.query_tablename].map((function(e,t){return O.forEachItem(e,t,(function(){T(t),M(!0)}),(function(){me({variables:Object(n.a)({},d.delete_unique_var,e[d.delete_unique_field])}),Y(!0)}),ee)})),je=[],he=0;he<oe[O.query_tablename].length;he+=4){for(var qe=[],xe=he;xe<he+4;++xe)qe.push(Ee[xe]);je.push(l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(m.a,{container:!0,spacing:2},qe)))}h.b&&(console.log("xxxx"),console.log(Ee),console.log("xxxx")),t=l.a.createElement(m.a,{container:!0,spacing:2},je)}else t=l.a.createElement(s,{errorText:O.null_found?O.null_found:"Nothing Found :/"});return h.b&&console.log(t),l.a.createElement(m.a,{container:!0,className:ye.py2},l.a.createElement(b.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:W,autoHideDuration:3e3,message:H,onClose:function(){B(!1)}}),l.a.createElement(N,{fullScreen:!!x,renderer:q,isShowing:L,constfieldsNameList:E,fieldNameMapping:j,editdata:null!==k&&oe&&oe[O.query_tablename]?oe[O.query_tablename][k]:null,onClose:function(){-1!==k&&T(-1),M(!1)},onSave:function(e){if(h.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==k){var t,r=oe[O.query_tablename][k][O.query_unique_field];M(!1),ve.setLoading(!0),ie({variables:(t={},Object(n.a)(t,a.update_var_unique,r),Object(n.a)(t,a.update_var_info,e),t)}),Y(!0)}else M(!1),ve.setLoading(!0),ge({variables:Object(n.a)({},v.add_var_info,e)}),Y(!0)}}),t,l.a.createElement(f.a,{className:Oe.fab,color:"secondary",onClick:function(){T(null),M(!0)}},l.a.createElement(g.a,null,"add")),l.a.createElement(_.a,{onClose:function(){return ee(-1)},color:"secondary",open:-1!==Z&&Z>=0},C&&-1!==Z&&Z>=0&&oe&&oe[O.query_tablename]?C(oe[O.query_tablename][Z]):null))};t.b=D},226:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(8),a(3)),i=a(6),u=a(60),s=l.a.forwardRef((function(e,t){var a=e.action,o=e.avatar,i=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,p=e.disableTypography,b=void 0!==p&&p,f=e.subheader,g=e.subheaderTypographyProps,_=e.title,y=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),v=_;null==v||v.type===u.a||b||(v=l.a.createElement(u.a,Object(n.a)({variant:o?"body2":"h5",className:i.title,component:"span",display:"block"},y),v));var E=f;return null==E||E.type===u.a||b||(E=l.a.createElement(u.a,Object(n.a)({variant:o?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},g),E)),l.a.createElement(m,Object(n.a)({className:Object(c.a)(i.root,s),ref:t},O),o&&l.a.createElement("div",{className:i.avatar},o),l.a.createElement("div",{className:i.content},v,E),a&&l.a.createElement("div",{className:i.action},a))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},229:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(8),a(3)),i=a(9),u=a(6),s=a(74),d=a(10),m=a(60),p=l.a.forwardRef((function(e,t){var a=e.classes,o=e.className,u=e.color,p=void 0===u?"primary":u,b=e.component,f=void 0===b?"a":b,g=e.onBlur,_=e.onFocus,y=e.TypographyClasses,O=e.underline,v=void 0===O?"hover":O,E=e.variant,j=void 0===E?"inherit":E,h=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),q=Object(s.a)(),x=q.isFocusVisible,N=q.onBlurVisible,C=q.ref,S=l.a.useState(!1),A=S[0],D=S[1],w=Object(d.a)(t,C);return l.a.createElement(m.a,Object(n.a)({className:Object(c.a)(a.root,a["underline".concat(Object(i.a)(v))],o,A&&a.focusVisible,{button:a.button}[f]),classes:y,color:p,component:f,onBlur:function(e){A&&(N(),D(!1)),g&&g(e)},onFocus:function(e){x(e)&&D(!0),_&&_(e)},ref:w,variant:j},h))}));t.a=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},338:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(0),o=a.n(r),l=a(219),c=a(73),i=a.n(c),u=a(226),s=a(67),d=a(203),m=a(332),p=a(333),b=a(60),f=a(229),g=a(334),_=a(193),y=a(194),O=a(328),v=a(329),E=a(214),j=a(206),h=a(216),q=a(211),x=a(244),N=a(71);a(224);function C(){var e=Object(n.a)(["\nmutation AddArt($art: InpArt!) {\n    addArt(art: $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }\n}\n"]);return C=function(){return e},e}function S(){var e=Object(n.a)(["\nmutation DeleteArt($id: ID!) {\n    deleteArt(id: $id){\n        _id\n    }\n}\n"]);return S=function(){return e},e}function A(){var e=Object(n.a)(["\nmutation UpdateArts($id: ID!, $art: InpArt) {\n    updateArt(id: $id, art:  $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }   \n}\n"]);return A=function(){return e},e}function D(){var e=Object(n.a)(["\nquery AllArts($options: InpOptions){\n    allArts(options: $options) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_format\n        art_type\n        create_date\n    }\n}\n"]);return D=function(){return e},e}var w=i()(D()),P=i()(A()),k=i()(S()),T=i()(C()),I=["creator","about_creator","url_path","art_type","art_format"],R={creator:{value:"Creator",required:!0},about_creator:{value:"About Creator",required:!0},url_path:{value:"URL path",required:!0},art_format:{value:"Format",required:!0}},L=Object(s.a)((function(){return{editor:{fontFamily:"IBM Plex Mono, ubuntu mono, consolas, source code pro, monospace !important"}}}));t.default=function(){var e=Object(N.a)();L();return o.a.createElement(l.a,{updateObject:{update_query:P,error_message:"Error Upadting Art",success_message:"Updated Art!",update_var_unique:"id",update_var_info:"art"},deleteObject:{delete_query:k,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Art",success_message:"Deleted Art!"},queryObject:{query_query:w,query_unique_field:"_id",query_tablename:"allArts",forEachItem:function(t,a,n,r){var l=new Date;l.setTime(t.create_date);var c=l.getUTCDate(),i=l.getMonth()+1,s=l.getFullYear(),O="".concat(i,"/").concat(c,"/").concat(s);return o.a.createElement(d.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},o.a.createElement(m.a,null,o.a.createElement(u.a,{title:t.creator,subheader:t.about_creator}),o.a.createElement(p.a,null,o.a.createElement(b.a,{variant:"overline"},"Preview"),o.a.createElement("img",{style:{width:"100%",maxHeight:"360px"},src:t.url_path}),o.a.createElement(f.a,{target:"_blank",rel:"noreferrer",href:t.url_path},t.art_type),o.a.createElement(b.a,null,"Created On: ",O)),o.a.createElement(g.a,{disableSpacing:!0},o.a.createElement(_.a,{onClick:n},o.a.createElement(y.a,null,"edit")),o.a.createElement(_.a,{onClick:r},o.a.createElement(y.a,null,"delete")))))},query_params:{type:"gallery"}},addObject:{add_query:T,error_message:"Error Adding Article",success_message:"Added Article",add_var_info:"art"},constfieldsNameList:I,fieldNameMapping:R,dialogRender:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(O.a,null,e.title),o.a.createElement(v.a,{dividers:!0},e.text))},editorRender:function(e,t){return console.log(e),o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Creator",required:!0,name:"creator",value:e.creator,onChange:t})),o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"About Creator",required:!0,name:"about_creator",value:e.about_creator,onChange:t})),o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"URL",required:!0,name:"url_path",value:e.url_path,onChange:t})),o.a.createElement(j.a,{fullWidth:!0},o.a.createElement(h.a,null,"Format"),o.a.createElement(q.a,{value:e.art_format,onChange:t,inputProps:{name:"art_format"}},o.a.createElement(x.a,{value:"image"},"Image"))),o.a.createElement(j.a,{fullWidth:!0},o.a.createElement(h.a,null,"Type"),o.a.createElement(q.a,{value:e.art_type,onChange:t,inputProps:{name:"art_type"}},o.a.createElement(x.a,{value:"gallery"},"Gallery")))))}})}}}]);
//# sourceMappingURL=7.6feea305.chunk.js.map