(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[6],{219:function(e,t,a){"use strict";var n=a(41),r=a(19),o=a(15),l=a(0),c=a.n(l),i=a(157),u=(a(72),a(25)),s=a(103),m=function(e){var t=e.errorText;return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},d=a(222),b=a.n(d),p=a(67),f=a(203),g=a(60),_=a(345),y=a(331),O=a(194),v=a(327),E=a(71),j=a(328),h=a(329),q=a(330),x=a(208),N=a(40);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var C=function(e,t){var a={};return t.map((function(t,n){a[t]=e&&e[t]||""})),a},D=function(e){var t=e.fullScreen,a=e.renderer,n=e.isShowing,i=e.editdata,u=e.constfieldsNameList,s=e.fieldNameMapping,m=e.onSave,d=e.onClose,b=Object(l.useState)(C(i,u)),p=Object(o.a)(b,2),g=p[0],_=p[1];Object(l.useEffect)((function(){_(C(i,u))}),[n]);N.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(n),console.log(i),console.log(u),console.log(s),console.log("----------EDITOR END-------------"));var y=a(g,(function(e){_(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},g,Object(r.a)({},e.target.name,e.target.value)))}));return console.log(y),c.a.createElement(v.a,{fullScreen:t,open:n,onClose:function(){return d()},"aria-labelledby":"student-data-edit"},c.a.createElement(j.a,null,"Edit Details "),c.a.createElement(h.a,null,c.a.createElement(f.a,{container:!0},y)),c.a.createElement(q.a,null,c.a.createElement(x.a,{onClick:function(){return d()}},"Cancel"),c.a.createElement(x.a,{color:"primary",onClick:function(){return m(g)}},"Save")))};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return M}));var w=Object(p.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),M=function(e){var t,a=e.updateObject,d=e.deleteObject,p=e.queryObject,j=e.addObject,h=e.constfieldsNameList,q=e.fieldNameMapping,x=e.editorRender,S=e.fullScreen,C=e.dialogRender,A=Object(u.b)().setLoading,M=Object(l.useState)(null),k=Object(o.a)(M,2),T=k[0],I=k[1],R=Object(l.useState)(!1),L=Object(o.a)(R,2),$=L[0],F=L[1],W=Object(l.useState)(!1),B=Object(o.a)(W,2),V=B[0],U=B[1],H=Object(l.useState)("Dummy Message"),z=Object(o.a)(H,2),G=z[0],J=z[1],Q=Object(l.useState)(!1),K=Object(o.a)(Q,2),Y=K[0],X=K[1],Z=Object(l.useState)(-1),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(!0),re=Object(o.a)(ne,2),oe=re[0],le=re[1],ce=Object(i.b)(p.query_query,{variables:{options:P({skip:0,limit:12},p.query_params)}}),ie=ce.loading,ue=ce.data,se=(ce.error,ce.fetchMore),me=Object(i.a)(a.update_query),de=Object(o.a)(me,2),be=de[0],pe=de[1],fe=Object(i.a)(d.delete_query,{update:function(e,t){console.log("___DELETE___"),console.log(t),e.writeQuery({query:p})}}),ge=Object(o.a)(fe,2),_e=ge[0],ye=ge[1],Oe=Object(i.a)(j.add_query,{update:function(e,t){console.log("___ADD___"),console.log(t)}}),ve=Object(o.a)(Oe,2),Ee=ve[0],je=ve[1],he=Object(E.a)(),qe=w(),xe=Object(u.b)();if(N.b&&(console.log("...Component Custom.."),console.log(ue),console.log(".....")),Object(l.useEffect)((function(){!0===ie?A(!0):!1===ie&&(A(!1),(!ue||ue[p.query_tablename].length<12)&&le(!1))}),[ie]),Object(l.useEffect)((function(){pe&&!1===pe.loading&&!0===Y&&(J(pe.error?a.error_message:a.success_message),U(!0),A(!1))}),[pe.loading]),Object(l.useEffect)((function(){je&&!1===je.loading&&!0===Y&&(J(je.error?j.error_message:j.success_message),U(!0),A(!1))}),[je.loading]),Object(l.useEffect)((function(){ye&&!1===ye.loading&&!0===Y&&(J(ye.error?d.error_message:d.success_message),U(!0),A(!1))}),[ye.loading]),console.log(ue),!0===ie)t=c.a.createElement(s.a,null);else if("undefined"!==typeof ue&&ue)if(0===ue[p.query_tablename].length)t=c.a.createElement(f.a,{container:!0,justify:"center"},c.a.createElement(f.a,{item:!0},c.a.createElement(g.a,{variant:"h2",className:qe.notfound},p.null_found)));else{for(var Ne=ue[p.query_tablename].map((function(e,t){return p.forEachItem(e,t,(function(){I(t),F(!0)}),(function(){_e({variables:Object(r.a)({},d.delete_unique_var,e[d.delete_unique_field])}),X(!0)}),ae)})),Se=[],Ce=0;Ce<ue[p.query_tablename].length;Ce+=4){for(var De=[],Ae=Ce;Ae<Ce+4;++Ae)De.push(Ne[Ae]);Se.push(c.a.createElement(f.a,{container:!0},De))}N.b&&(console.log("xxxx"),console.log(Ne),console.log("xxxx")),t=c.a.createElement(b.a,{hasMore:oe,loader:c.a.createElement("div",null,"Loading More Items..."),endMessage:c.a.createElement("div",null,"Loaded All!"),next:function(){var e=ue[p.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),se({variables:{options:P({skip:e,limit:12},p.query_params)},updateQuery:function(e,t){var a=t.fetchMoreResult;return a&&oe?(console.log(e),console.log(p),console.log(a),a[p.query_tablename].length<12&&le(!1),Object(r.a)({},p.query_tablename,[].concat(Object(n.a)(e[p.query_tablename]),Object(n.a)(a[p.query_tablename])))):e}})}},Se)}else t=c.a.createElement(m,{errorText:p.null_found?p.null_found:"Nothing Found :/"});return N.b&&console.log(t),c.a.createElement(f.a,{container:!0,className:he.py2},c.a.createElement(_.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:V,autoHideDuration:3e3,message:G,onClose:function(){U(!1)}}),c.a.createElement(D,{fullScreen:!!S,renderer:x,isShowing:$,constfieldsNameList:h,fieldNameMapping:q,editdata:null!==T&&ue&&ue[p.query_tablename]?ue[p.query_tablename][T]:null,onClose:function(){-1!==T&&I(-1),F(!1)},onSave:function(e){if(N.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==T){var t,n=ue[p.query_tablename][T][p.query_unique_field];F(!1),xe.setLoading(!0),be({variables:(t={},Object(r.a)(t,a.update_var_unique,n),Object(r.a)(t,a.update_var_info,e),t)}),X(!0)}else F(!1),xe.setLoading(!0),Ee({variables:Object(r.a)({},j.add_var_info,e)}),X(!0)}}),c.a.createElement(f.a,{item:!0,xs:12},t),c.a.createElement(y.a,{className:qe.fab,color:"secondary",onClick:function(){I(null),F(!0)}},c.a.createElement(O.a,null,"add")),c.a.createElement(v.a,{onClose:function(){return ae(-1)},color:"secondary",open:-1!==te&&te>=0},C&&-1!==te&&te>=0&&ue&&ue[p.query_tablename]?C(ue[p.query_tablename][te]):null))};t.b=M},226:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(8),a(3)),i=a(6),u=a(60),s=l.a.forwardRef((function(e,t){var a=e.action,o=e.avatar,i=e.classes,s=e.className,m=e.component,d=void 0===m?"div":m,b=e.disableTypography,p=void 0!==b&&b,f=e.subheader,g=e.subheaderTypographyProps,_=e.title,y=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),v=_;null==v||v.type===u.a||p||(v=l.a.createElement(u.a,Object(n.a)({variant:o?"body2":"h5",className:i.title,component:"span",display:"block"},y),v));var E=f;return null==E||E.type===u.a||p||(E=l.a.createElement(u.a,Object(n.a)({variant:o?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},g),E)),l.a.createElement(d,Object(n.a)({className:Object(c.a)(i.root,s),ref:t},O),o&&l.a.createElement("div",{className:i.avatar},o),l.a.createElement("div",{className:i.content},v,E),a&&l.a.createElement("div",{className:i.action},a))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},227:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(8),a(3)),i=a(9),u=a(6),s=a(74),m=a(10),d=a(60),b=l.a.forwardRef((function(e,t){var a=e.classes,o=e.className,u=e.color,b=void 0===u?"primary":u,p=e.component,f=void 0===p?"a":p,g=e.onBlur,_=e.onFocus,y=e.TypographyClasses,O=e.underline,v=void 0===O?"hover":O,E=e.variant,j=void 0===E?"inherit":E,h=Object(r.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),q=Object(s.a)(),x=q.isFocusVisible,N=q.onBlurVisible,S=q.ref,C=l.a.useState(!1),D=C[0],A=C[1],P=Object(m.a)(t,S);return l.a.createElement(d.a,Object(n.a)({className:Object(c.a)(a.root,a["underline".concat(Object(i.a)(v))],o,D&&a.focusVisible,{button:a.button}[f]),classes:y,color:b,component:f,onBlur:function(e){D&&(N(),A(!1)),g&&g(e)},onFocus:function(e){x(e)&&A(!0),_&&_(e)},ref:P,variant:j},h))}));t.a=Object(u.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b)},343:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(0),o=a.n(r),l=a(219),c=a(73),i=a.n(c),u=a(226),s=a(67),m=a(203),d=a(332),b=a(333),p=a(60),f=a(227),g=a(334),_=a(193),y=a(194),O=a(328),v=a(329),E=a(214),j=a(206),h=a(216),q=a(211),x=a(231),N=a(71);a(224);function S(){var e=Object(n.a)(["\nmutation AddArt($art: InpArt!) {\n    addArt(art: $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }\n}\n"]);return S=function(){return e},e}function C(){var e=Object(n.a)(["\nmutation DeleteArt($id: ID!) {\n    deleteArt(id: $id){\n        _id\n    }\n}\n"]);return C=function(){return e},e}function D(){var e=Object(n.a)(["\nmutation UpdateArts($id: ID!, $art: InpArt) {\n    updateArt(id: $id, art:  $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }   \n}\n"]);return D=function(){return e},e}function A(){var e=Object(n.a)(["\nquery AllArts($options: InpOptions){\n    allArts(options: $options) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_format\n        art_type\n        create_date\n    }\n}\n"]);return A=function(){return e},e}var P=i()(A()),w=i()(D()),M=i()(C()),k=i()(S()),T=["creator","about_creator","url_path","art_type","art_format"],I={creator:{value:"Creator",required:!0},about_creator:{value:"About Creator",required:!0},url_path:{value:"URL path",required:!0},art_format:{value:"Format",required:!0}},R=Object(s.a)((function(){return{editor:{fontFamily:"IBM Plex Mono, ubuntu mono, consolas, source code pro, monospace !important"}}}));t.default=function(){var e=Object(N.a)();R();return o.a.createElement(l.a,{updateObject:{update_query:w,error_message:"Error Upadting Meme",success_message:"Updated Meme!",update_var_unique:"id",update_var_info:"art"},deleteObject:{delete_query:M,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Meme",success_message:"Deleted Meme!"},queryObject:{query_query:P,query_unique_field:"_id",query_tablename:"allArts",forEachItem:function(t,a,n,r){var l=new Date;l.setTime(t.create_date);var c=l.getUTCDate(),i=l.getMonth()+1,s=l.getFullYear(),O="".concat(i,"/").concat(c,"/").concat(s);return o.a.createElement(m.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},o.a.createElement(d.a,null,o.a.createElement(u.a,{title:t.creator,subheader:t.about_creator}),o.a.createElement(b.a,null,o.a.createElement(p.a,{variant:"overline"},"Preview"),o.a.createElement("img",{style:{width:"100%",maxHeight:"360px"},src:t.url_path}),o.a.createElement(f.a,{target:"_blank",rel:"noreferrer",href:t.url_path},t.art_type),o.a.createElement(p.a,null,"Created On: ",O)),o.a.createElement(g.a,{disableSpacing:!0},o.a.createElement(_.a,{onClick:n},o.a.createElement(y.a,null,"edit")),o.a.createElement(_.a,{onClick:r},o.a.createElement(y.a,null,"delete")))))},query_params:{type:"meme"}},addObject:{add_query:k,error_message:"Error Adding Meme",success_message:"Added Meme",add_var_info:"art"},constfieldsNameList:T,fieldNameMapping:I,dialogRender:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(O.a,null,e.title),o.a.createElement(v.a,{dividers:!0},e.text))},editorRender:function(e,t){return console.log(e),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(m.a,{container:!0},o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Creator",name:"creator",value:e.creator,onChange:t})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"About Creator",name:"about_creator",value:e.about_creator,onChange:t})),o.a.createElement(m.a,{item:!0,xs:12},o.a.createElement(E.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"URL",required:!0,name:"url_path",value:e.url_path,onChange:t})),o.a.createElement(j.a,{fullWidth:!0},o.a.createElement(h.a,null,"Art Format"),o.a.createElement(q.a,{value:e.art_format,onChange:t,inputProps:{name:"art_format"}},o.a.createElement(x.a,{value:"image"},"Image"))),o.a.createElement(j.a,{fullWidth:!0},o.a.createElement(h.a,null,"Art Type"),o.a.createElement(q.a,{value:e.art_type,onChange:t,inputProps:{name:"art_type"}},o.a.createElement(x.a,{value:"meme"},"Meme")))))}})}}}]);
//# sourceMappingURL=6.1dd9df9e.chunk.js.map