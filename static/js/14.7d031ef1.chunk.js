(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[14],{219:function(e,t,a){"use strict";var n=a(19),r=a(15),l=a(0),o=a.n(l),c=a(157),i=(a(72),a(24)),u=a(103),s=function(e){var t=e.errorText;return o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("div",{className:"display-inline-block"},o.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},m=(a(222),a(67)),d=a(203),f=a(60),b=a(344),p=a(331),_=a(194),g=a(327),O=a(71),E=a(328),y=a(329),j=a(330),v=a(208),h=a(40);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(e,t){var a={};return t.map((function(t,n){a[t]=e&&e[t]||""})),a},A=function(e){var t=e.fullScreen,a=e.renderer,c=e.isShowing,i=e.editdata,u=e.constfieldsNameList,s=e.fieldNameMapping,m=e.onSave,f=e.onClose,b=Object(l.useState)(x(i,u)),p=Object(r.a)(b,2),_=p[0],O=p[1];Object(l.useEffect)((function(){O(x(i,u))}),[c]);h.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(c),console.log(i),console.log(u),console.log(s),console.log("----------EDITOR END-------------"));var A=a(_,(function(e){O(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},_,Object(n.a)({},e.target.name,e.target.value)))}));return console.log(A),o.a.createElement(g.a,{fullScreen:t,open:c,onClose:function(){return f()},"aria-labelledby":"student-data-edit"},o.a.createElement(E.a,null,"Edit Details "),o.a.createElement(y.a,null,o.a.createElement(d.a,{container:!0},A)),o.a.createElement(j.a,null,o.a.createElement(v.a,{onClick:function(){return f()}},"Cancel"),o.a.createElement(v.a,{color:"primary",onClick:function(){return m(_)}},"Save")))};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return C}));var N=Object(m.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),C=function(e){var t,a=e.updateObject,m=e.deleteObject,E=e.queryObject,y=e.addObject,j=e.constfieldsNameList,v=e.fieldNameMapping,q=e.editorRender,x=e.fullScreen,S=e.dialogRender,C=Object(i.b)().setLoading,w=Object(l.useState)(null),P=Object(r.a)(w,2),T=P[0],I=P[1],k=Object(l.useState)(!1),W=Object(r.a)(k,2),M=W[0],$=W[1],L=Object(l.useState)(!1),R=Object(r.a)(L,2),F=R[0],B=R[1],U=Object(l.useState)("Dummy Message"),G=Object(r.a)(U,2),J=G[0],V=G[1],z=Object(l.useState)(!1),H=Object(r.a)(z,2),Q=H[0],Y=H[1],K=Object(l.useState)(-1),X=Object(r.a)(K,2),Z=X[0],ee=X[1],te=Object(l.useState)(!0),ae=Object(r.a)(te,2),ne=(ae[0],ae[1],Object(c.b)(E.query_query,{variables:{options:D({skip:0,limit:40},E.query_params)}})),re=ne.loading,le=ne.data,oe=(ne.error,ne.fetchMore,Object(c.a)(a.update_query)),ce=Object(r.a)(oe,2),ie=ce[0],ue=ce[1],se=Object(c.a)(m.delete_query,{update:function(e,t){console.log("___DELETE___"),console.log(t),e.writeQuery({query:E})}}),me=Object(r.a)(se,2),de=me[0],fe=me[1],be=Object(c.a)(y.add_query,{update:function(e,t){console.log("___ADD___"),console.log(t)}}),pe=Object(r.a)(be,2),_e=pe[0],ge=pe[1],Oe=Object(O.a)(),Ee=N(),ye=Object(i.b)();if(h.b&&(console.log("...Component Custom.."),console.log(le),console.log(".....")),!0===re?C(!0):!1===re&&C(!1),Object(l.useEffect)((function(){ue&&!1===ue.loading&&!0===Q&&(V(ue.error?a.error_message:a.success_message),B(!0))}),[ue.loading]),Object(l.useEffect)((function(){ge&&!1===ge.loading&&!0===Q&&(V(ge.error?y.error_message:y.success_message),B(!0))}),[ge.loading]),Object(l.useEffect)((function(){fe&&!1===fe.loading&&!0===Q&&(V(fe.error?m.error_message:m.success_message),B(!0))}),[fe.loading]),console.log(le),!0===re)t=o.a.createElement(u.a,null);else if("undefined"!==typeof le&&le)if(0===le[E.query_tablename].length)t=o.a.createElement(d.a,{container:!0,justify:"center"},o.a.createElement(d.a,{item:!0},o.a.createElement(f.a,{variant:"h2",className:Ee.notfound},E.null_found)));else{for(var je=le[E.query_tablename].map((function(e,t){return E.forEachItem(e,t,(function(){I(t),$(!0)}),(function(){de({variables:Object(n.a)({},m.delete_unique_var,e[m.delete_unique_field])}),Y(!0)}),ee)})),ve=[],he=0;he<le[E.query_tablename].length;he+=4){for(var qe=[],xe=he;xe<he+4;++xe)qe.push(je[xe]);ve.push(o.a.createElement(d.a,{item:!0,xs:12},o.a.createElement(d.a,{container:!0,spacing:2},qe)))}h.b&&(console.log("xxxx"),console.log(je),console.log("xxxx")),t=o.a.createElement(d.a,{container:!0,spacing:2},ve)}else t=o.a.createElement(s,{errorText:E.null_found?E.null_found:"Nothing Found :/"});return h.b&&console.log(t),o.a.createElement(d.a,{container:!0,className:Oe.py2},o.a.createElement(b.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:F,autoHideDuration:3e3,message:J,onClose:function(){B(!1)}}),o.a.createElement(A,{fullScreen:!!x,renderer:q,isShowing:M,constfieldsNameList:j,fieldNameMapping:v,editdata:null!==T&&le&&le[E.query_tablename]?le[E.query_tablename][T]:null,onClose:function(){-1!==T&&I(-1),$(!1)},onSave:function(e){if(h.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==T){var t,r=le[E.query_tablename][T][E.query_unique_field];$(!1),ye.setLoading(!0),ie({variables:(t={},Object(n.a)(t,a.update_var_unique,r),Object(n.a)(t,a.update_var_info,e),t)}),Y(!0)}else $(!1),ye.setLoading(!0),_e({variables:Object(n.a)({},y.add_var_info,e)}),Y(!0)}}),t,o.a.createElement(p.a,{className:Ee.fab,color:"secondary",onClick:function(){I(null),$(!0)}},o.a.createElement(_.a,null,"add")),o.a.createElement(g.a,{onClose:function(){return ee(-1)},color:"secondary",open:-1!==Z&&Z>=0},S&&-1!==Z&&Z>=0&&le&&le[E.query_tablename]?S(le[E.query_tablename][Z]):null))};t.b=C},340:function(e,t,a){"use strict";a.r(t);var n=a(221),r=a(0),l=a.n(r),o=a(219),c=a(73),i=a.n(c),u=a(224),s=a.n(u),m=a(67),d=a(203),f=a(332),b=a(333),p=a(60),_=a(334),g=a(193),O=a(194),E=a(208),y=a(328),j=a(329),v=a(214),h=a(216),q=a(206),x=a(211),A=a(244),S=a(71);function D(){var e=Object(n.a)(["\nmutation AddArticle($article: InpArticle!) {\n    addArticle(article: $article) {\n        _id\n        author\n        about_author\n        text\n        title\n        article_type\n        create_date\n    }\n}\n"]);return D=function(){return e},e}function N(){var e=Object(n.a)(["\nmutation DeleteArticle($id: ID!) {\n    deleteArticle(id: $id){\n        _id\n    }\n}\n"]);return N=function(){return e},e}function C(){var e=Object(n.a)(["\nmutation UpdateArticle($id: ID!, $article: InpArticle) {\n    updateArticle(id: $id, article: $article) {\n        _id\n        author\n        about_author\n        text\n        title\n        article_type\n        create_date\n    }   \n}\n"]);return C=function(){return e},e}function w(){var e=Object(n.a)(["\nquery AllArticles($options: InpOptions){\n    allArticles(options: $options) {\n        _id\n        author\n        about_author\n        text\n        title\n        article_type\n        create_date\n    }\n}\n"]);return w=function(){return e},e}var P=i()(w()),T=i()(C()),I=i()(N()),k=i()(D()),W=["text","author","about_author","article_type","title"],M={text:{value:"Text",required:!0},title:{value:"Title",required:!0},article_type:{value:"Article Type",required:!0},author:{value:"Title",required:!0},about_author:{value:"Title",required:!0}},$=Object(m.a)((function(){return{editor:{fontFamily:"IBM Plex Mono, ubuntu mono, consolas, source code pro, monospace !important"}}}));t.default=function(){var e=Object(S.a)(),t=$();return l.a.createElement(o.a,{updateObject:{update_query:T,error_message:"Error Upadting Article",success_message:"Updated Article!",update_var_unique:"id",update_var_info:"article"},deleteObject:{delete_query:I,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Article",success_message:"Deleted Article!"},queryObject:{query_query:P,query_unique_field:"_id",query_tablename:"allArticles",forEachItem:function(t,a,n,r,o){var c=new Date;c.setTime(t.create_date);var i=c.getUTCDate(),u=c.getMonth()+1,s=c.getFullYear(),m="".concat(u,"/").concat(i,"/").concat(s);return l.a.createElement(d.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(p.a,{variant:"h6",noWrap:!0},t.title),l.a.createElement(p.a,{variant:"body1",noWrap:!0},"By: ",t.author),l.a.createElement(p.a,null,"Created On: ",m)),l.a.createElement(_.a,{disableSpacing:!0},l.a.createElement(g.a,{onClick:n},l.a.createElement(O.a,null,"edit")),l.a.createElement(g.a,{onClick:r},l.a.createElement(O.a,null,"delete")),l.a.createElement(E.a,{color:"primary",onClick:function(){return o(a)}},"More"))))},query_params:{type:"isis"}},addObject:{add_query:k,error_message:"Error Adding Article",success_message:"Added Article",add_var_info:"article"},constfieldsNameList:W,fieldNameMapping:M,dialogRender:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(y.a,null,e.title),l.a.createElement(j.a,{dividers:!0},e.text))},fullScreen:!0,editorRender:function(e,a){return l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(d.a,{container:!0},l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(v.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Title",required:!0,name:"title",value:e.title,onChange:a})),l.a.createElement(d.a,{item:!0,xs:12,md:6},l.a.createElement(v.a,{className:"".concat(t.editor),margin:"normal",rows:10,maxRows:10,noWrap:!0,fullWidth:!0,label:"Text",multiline:!0,required:!0,name:"text",value:e.text,onChange:a})),l.a.createElement(d.a,{item:!0,xs:12,md:6},l.a.createElement(h.a,null,"Output"),l.a.createElement(p.a,null,l.a.createElement(s.a,{source:e.text}))),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(v.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Author",required:!0,name:"author",value:e.author,onChange:a})),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(v.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"About Author",required:!0,name:"about_author",value:e.about_author,onChange:a})),l.a.createElement(d.a,{item:!0,xs:12},l.a.createElement(q.a,{fullWidth:!0},l.a.createElement(h.a,{htmlFor:"age-simple"},"Type"),l.a.createElement(x.a,{value:e.article_type,onChange:a,inputProps:{name:"article_type"}},l.a.createElement(A.a,{value:"isis"},"ISIS"))))))}})}}}]);
//# sourceMappingURL=14.7d031ef1.chunk.js.map