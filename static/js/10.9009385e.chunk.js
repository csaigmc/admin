(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[10],{219:function(e,t,a){"use strict";var n=a(41),r=a(19),o=a(15),l=a(0),c=a.n(l),u=a(157),i=(a(72),a(25)),s=a(103),d=function(e){var t=e.errorText;return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},m=a(222),b=a.n(m),p=a(67),f=a(203),_=a(60),g=a(345),y=a(331),O=a(194),E=a(327),v=a(71),j=a(328),h=a(329),q=a(330),S=a(208),x=a(40);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var C=function(e,t){var a={};return t.map((function(t,n){a[t]=e&&e[t]||""})),a},D=function(e){var t=e.fullScreen,a=e.renderer,n=e.isShowing,u=e.editdata,i=e.constfieldsNameList,s=e.fieldNameMapping,d=e.onSave,m=e.onClose,b=Object(l.useState)(C(u,i)),p=Object(o.a)(b,2),_=p[0],g=p[1];Object(l.useEffect)((function(){g(C(u,i))}),[n]);x.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(n),console.log(u),console.log(i),console.log(s),console.log("----------EDITOR END-------------"));var y=a(_,(function(e){g(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},_,Object(r.a)({},e.target.name,e.target.value)))}));return console.log(y),c.a.createElement(E.a,{fullScreen:t,open:n,onClose:function(){return m()},"aria-labelledby":"student-data-edit"},c.a.createElement(j.a,null,"Edit Details "),c.a.createElement(h.a,null,c.a.createElement(f.a,{container:!0},y)),c.a.createElement(q.a,null,c.a.createElement(S.a,{onClick:function(){return m()}},"Cancel"),c.a.createElement(S.a,{color:"primary",onClick:function(){return d(_)}},"Save")))};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return T}));var w=Object(p.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),T=function(e){var t,a=e.updateObject,m=e.deleteObject,p=e.queryObject,j=e.addObject,h=e.constfieldsNameList,q=e.fieldNameMapping,S=e.editorRender,N=e.fullScreen,C=e.dialogRender,P=Object(i.b)().setLoading,T=Object(l.useState)(null),k=Object(o.a)(T,2),I=k[0],M=k[1],L=Object(l.useState)(!1),R=Object(o.a)(L,2),W=R[0],$=R[1],U=Object(l.useState)(!1),F=Object(o.a)(U,2),B=F[0],G=F[1],H=Object(l.useState)("Dummy Message"),J=Object(o.a)(H,2),Q=J[0],V=J[1],z=Object(l.useState)(!1),K=Object(o.a)(z,2),Y=K[0],X=K[1],Z=Object(l.useState)(-1),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(l.useState)(!0),re=Object(o.a)(ne,2),oe=re[0],le=re[1],ce=Object(u.b)(p.query_query,{variables:{options:A({skip:0,limit:12},p.query_params)}}),ue=ce.loading,ie=ce.data,se=(ce.error,ce.fetchMore),de=Object(u.a)(a.update_query),me=Object(o.a)(de,2),be=me[0],pe=me[1],fe=Object(u.a)(m.delete_query,{update:function(e,t){console.log("___DELETE___"),console.log(t),e.writeQuery({query:p})}}),_e=Object(o.a)(fe,2),ge=_e[0],ye=_e[1],Oe=Object(u.a)(j.add_query,{update:function(e,t){console.log("___ADD___"),console.log(t)}}),Ee=Object(o.a)(Oe,2),ve=Ee[0],je=Ee[1],he=Object(v.a)(),qe=w(),Se=Object(i.b)();if(x.b&&(console.log("...Component Custom.."),console.log(ie),console.log(".....")),Object(l.useEffect)((function(){!0===ue?P(!0):!1===ue&&(P(!1),ie[p.query_tablename].length<12&&le(!1))}),[ue]),Object(l.useEffect)((function(){pe&&!1===pe.loading&&!0===Y&&(V(pe.error?a.error_message:a.success_message),G(!0),P(!1))}),[pe.loading]),Object(l.useEffect)((function(){je&&!1===je.loading&&!0===Y&&(V(je.error?j.error_message:j.success_message),G(!0),P(!1))}),[je.loading]),Object(l.useEffect)((function(){ye&&!1===ye.loading&&!0===Y&&(V(ye.error?m.error_message:m.success_message),G(!0),P(!1))}),[ye.loading]),console.log(ie),!0===ue)t=c.a.createElement(s.a,null);else if("undefined"!==typeof ie&&ie)if(0===ie[p.query_tablename].length)t=c.a.createElement(f.a,{container:!0,justify:"center"},c.a.createElement(f.a,{item:!0},c.a.createElement(_.a,{variant:"h2",className:qe.notfound},p.null_found)));else{for(var xe=ie[p.query_tablename].map((function(e,t){return p.forEachItem(e,t,(function(){M(t),$(!0)}),(function(){ge({variables:Object(r.a)({},m.delete_unique_var,e[m.delete_unique_field])}),X(!0)}),ae)})),Ne=[],Ce=0;Ce<ie[p.query_tablename].length;Ce+=4){for(var De=[],Pe=Ce;Pe<Ce+4;++Pe)De.push(xe[Pe]);Ne.push(c.a.createElement(f.a,{container:!0},De))}x.b&&(console.log("xxxx"),console.log(xe),console.log("xxxx")),t=c.a.createElement(b.a,{hasMore:oe,loader:c.a.createElement("div",null,"Loading More Items..."),endMessage:c.a.createElement("div",null,"Loaded All!"),next:function(){var e=ie[p.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),se({variables:{options:A({skip:e,limit:12},p.query_params)},updateQuery:function(e,t){var a=t.fetchMoreResult;return a&&oe?(console.log(e),console.log(p),console.log(a),a[p.query_tablename].length<12&&le(!1),Object(r.a)({},p.query_tablename,[].concat(Object(n.a)(e[p.query_tablename]),Object(n.a)(a[p.query_tablename])))):e}})}},Ne)}else t=c.a.createElement(d,{errorText:p.null_found?p.null_found:"Nothing Found :/"});return x.b&&console.log(t),c.a.createElement(f.a,{container:!0,className:he.py2},c.a.createElement(g.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:B,autoHideDuration:3e3,message:Q,onClose:function(){G(!1)}}),c.a.createElement(D,{fullScreen:!!N,renderer:S,isShowing:W,constfieldsNameList:h,fieldNameMapping:q,editdata:null!==I&&ie&&ie[p.query_tablename]?ie[p.query_tablename][I]:null,onClose:function(){-1!==I&&M(-1),$(!1)},onSave:function(e){if(x.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==I){var t,n=ie[p.query_tablename][I][p.query_unique_field];$(!1),Se.setLoading(!0),be({variables:(t={},Object(r.a)(t,a.update_var_unique,n),Object(r.a)(t,a.update_var_info,e),t)}),X(!0)}else $(!1),Se.setLoading(!0),ve({variables:Object(r.a)({},j.add_var_info,e)}),X(!0)}}),c.a.createElement(f.a,{item:!0,xs:12},t),c.a.createElement(y.a,{className:qe.fab,color:"secondary",onClick:function(){M(null),$(!0)}},c.a.createElement(O.a,null,"add")),c.a.createElement(E.a,{onClose:function(){return ae(-1)},color:"secondary",open:-1!==te&&te>=0},C&&-1!==te&&te>=0&&ie&&ie[p.query_tablename]?C(ie[p.query_tablename][te]):null))};t.b=T},226:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),l=a.n(o),c=(a(8),a(3)),u=a(6),i=a(60),s=l.a.forwardRef((function(e,t){var a=e.action,o=e.avatar,u=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,b=e.disableTypography,p=void 0!==b&&b,f=e.subheader,_=e.subheaderTypographyProps,g=e.title,y=e.titleTypographyProps,O=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=g;null==E||E.type===i.a||p||(E=l.a.createElement(i.a,Object(n.a)({variant:o?"body2":"h5",className:u.title,component:"span",display:"block"},y),E));var v=f;return null==v||v.type===i.a||p||(v=l.a.createElement(i.a,Object(n.a)({variant:o?"body2":"body1",className:u.subheader,color:"textSecondary",component:"span",display:"block"},_),v)),l.a.createElement(m,Object(n.a)({className:Object(c.a)(u.root,s),ref:t},O),o&&l.a.createElement("div",{className:u.avatar},o),l.a.createElement("div",{className:u.content},E,v),a&&l.a.createElement("div",{className:u.action},a))}));t.a=Object(u.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},337:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(0),o=a.n(r),l=a(219),c=a(73),u=a.n(c),i=a(226),s=a(203),d=a(332),m=a(60),b=a(333),p=a(334),f=a(193),_=a(194),g=a(328),y=a(329),O=a(214),E=a(206),v=a(216),j=a(211),h=a(244),q=a(71);a(224);function S(){var e=Object(n.a)(["\nmutation AddArt($art: InpArt!) {\n    addArt(art: $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }\n}\n"]);return S=function(){return e},e}function x(){var e=Object(n.a)(["\nmutation DeleteArt($id: ID!) {\n    deleteArt(id: $id){\n        _id\n    }\n}\n"]);return x=function(){return e},e}function N(){var e=Object(n.a)(["\nmutation UpdateArts($id: ID!, $art: InpArt) {\n    updateArt(id: $id, art:  $art) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_type\n        art_format\n        create_date\n    }   \n}\n"]);return N=function(){return e},e}function C(){var e=Object(n.a)(["\nquery AllArts($options: InpOptions){\n    allArts(options: $options) {\n        _id\n        creator\n        about_creator\n        url_path\n        art_format\n        art_type\n        create_date\n    }\n}\n"]);return C=function(){return e},e}var D=u()(C()),P=u()(N()),A=u()(x()),w=u()(S()),T=["creator","about_creator","url_path","art_type","art_format"],k={creator:{value:"Creator",required:!0},about_creator:{value:"About Creator",required:!0},url_path:{value:"URL path",required:!0},art_format:{value:"Format",required:!0}};t.default=function(){var e=Object(q.a)();return o.a.createElement(l.a,{updateObject:{update_query:P,error_message:"Error Upadting Student",success_message:"Updated student!",update_var_unique:"id",update_var_info:"art"},deleteObject:{delete_query:A,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Student",success_message:"Deleted Meme!"},queryObject:{query_query:D,query_unique_field:"_id",query_tablename:"allArts",forEachItem:function(t,a,n,r){var l=new Date;l.setTime(t.create_date);var c=l.getUTCDate(),u=l.getMonth()+1,g=l.getFullYear(),y="".concat(u,"/").concat(c,"/").concat(g);return o.a.createElement(s.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},o.a.createElement(d.a,null,o.a.createElement(i.a,{disableTypography:!0,title:o.a.createElement(m.a,{variant:"h6",noWrap:!0},t.creator),subheader:o.a.createElement(m.a,{noWrap:!0,variant:"subtitle2"},t.about_creator)}),o.a.createElement(b.a,null,o.a.createElement(m.a,{variant:"overline"},"Preview"),o.a.createElement("img",{style:{width:"100%",height:"180px"},src:t.url_path}),o.a.createElement(m.a,null,"Created On: ",y)),o.a.createElement(p.a,{disableSpacing:!0},o.a.createElement(f.a,{onClick:n},o.a.createElement(_.a,null,"edit")),o.a.createElement(f.a,{onClick:r},o.a.createElement(_.a,null,"delete")))))},query_params:{type:"student"}},addObject:{add_query:w,error_message:"Error Adding Student",success_message:"Added Student",add_var_info:"art"},constfieldsNameList:T,fieldNameMapping:k,dialogRender:function(e){return o.a.createElement(r.Fragment,null,o.a.createElement(g.a,null,e.title),o.a.createElement(y.a,{dividers:!0},e.text))},editorRender:function(e,t){return console.log(e),o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(s.a,{container:!0},o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(O.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Creator",name:"creator",value:e.creator,onChange:t})),o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(O.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"About Creator",name:"about_creator",value:e.about_creator,onChange:t})),o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(O.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"URL",required:!0,name:"url_path",value:e.url_path,onChange:t})),o.a.createElement(E.a,{fullWidth:!0},o.a.createElement(v.a,null,"Format"),o.a.createElement(j.a,{value:e.art_format,onChange:t,inputProps:{name:"art_format"}},o.a.createElement(h.a,{value:"image"},"Image"))),o.a.createElement(E.a,{fullWidth:!0},o.a.createElement(v.a,null,"CSA Member Type"),o.a.createElement(j.a,{value:e.art_type,onChange:t,inputProps:{name:"art_type"}},o.a.createElement(h.a,{value:"student"},"Student")))))}})}}}]);
//# sourceMappingURL=10.9009385e.chunk.js.map