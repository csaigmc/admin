(this["webpackJsonpcsaigmc-frontend"]=this["webpackJsonpcsaigmc-frontend"]||[]).push([[12],{219:function(e,t,a){"use strict";var n=a(19),r=a(15),l=a(0),c=a.n(l),o=a(157),i=(a(72),a(24)),u=a(103),s=function(e){var t=e.errorText;return c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("div",{className:"display-inline-block"},c.a.createElement("h2",{className:"bg-danger p-2 rounded-sm text-light text-center"},t)))},d=(a(223),a(67)),m=a(203),f=a(60),b=a(342),p=a(331),g=a(194),_=a(327),O=a(71),E=a(328),y=a(329),j=a(330),v=a(208),q=a(40);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var x=function(e,t){var a={};return t.map((function(t,n){a[t]=e&&e[t]||""})),a},S=function(e){var t=e.fullScreen,a=e.renderer,o=e.isShowing,i=e.editdata,u=e.constfieldsNameList,s=e.fieldNameMapping,d=e.onSave,f=e.onClose,b=Object(l.useState)(x(i,u)),p=Object(r.a)(b,2),g=p[0],O=p[1];Object(l.useEffect)((function(){O(x(i,u))}),[o]);q.b&&(console.log("----------EDITOR BEGIN-------------"),console.log(o),console.log(i),console.log(u),console.log(s),console.log("----------EDITOR END-------------"));var S=a(g,(function(e){O(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},g,Object(n.a)({},e.target.name,e.target.value)))}));return console.log(S),c.a.createElement(_.a,{fullScreen:t,open:o,onClose:function(){return f()},"aria-labelledby":"student-data-edit"},c.a.createElement(E.a,null,"Edit Details "),c.a.createElement(y.a,null,c.a.createElement(m.a,{container:!0},S)),c.a.createElement(j.a,null,c.a.createElement(v.a,{onClick:function(){return f()}},"Cancel"),c.a.createElement(v.a,{color:"primary",onClick:function(){return d(g)}},"Save")))};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return w}));var D=Object(d.a)((function(e){return{notfound:{color:e.palette.grey[300],fontWeight:500},fab:{position:"fixed",right:e.spacing(2),bottom:e.spacing(2)}}})),w=function(e){var t,a=e.updateObject,d=e.deleteObject,E=e.queryObject,y=e.addObject,j=e.constfieldsNameList,v=e.fieldNameMapping,h=e.editorRender,x=e.fullScreen,A=e.dialogRender,w=Object(i.b)().setLoading,C=Object(l.useState)(null),P=Object(r.a)(C,2),I=P[0],k=P[1],T=Object(l.useState)(!1),M=Object(r.a)(T,2),$=M[0],L=M[1],R=Object(l.useState)(!1),W=Object(r.a)(R,2),F=W[0],U=W[1],B=Object(l.useState)("Dummy Message"),G=Object(r.a)(B,2),J=G[0],V=G[1],z=Object(l.useState)(!1),H=Object(r.a)(z,2),Y=H[0],K=H[1],Q=Object(l.useState)(-1),X=Object(r.a)(Q,2),Z=X[0],ee=X[1],te=Object(l.useState)(!0),ae=Object(r.a)(te,2),ne=(ae[0],ae[1],Object(o.b)(E.query_query,{variables:{options:N({skip:0,limit:40},E.query_params)}})),re=ne.loading,le=ne.data,ce=(ne.error,ne.fetchMore,Object(o.a)(a.update_query)),oe=Object(r.a)(ce,2),ie=oe[0],ue=oe[1],se=Object(o.a)(d.delete_query),de=Object(r.a)(se,2),me=de[0],fe=de[1],be=Object(o.a)(y.add_query),pe=Object(r.a)(be,2),ge=pe[0],_e=pe[1],Oe=Object(O.a)(),Ee=D(),ye=Object(i.b)();if(q.b&&(console.log("...Component Custom.."),console.log(le),console.log(".....")),!0===re?w(!0):!1===re&&w(!1),Object(l.useEffect)((function(){ue&&!1===ue.loading&&!0===Y&&(V(ue.error?a.error_message:a.success_message),U(!0))}),[ue.loading]),Object(l.useEffect)((function(){_e&&!1===_e.loading&&!0===Y&&(V(_e.error?y.error_message:y.success_message),U(!0))}),[_e.loading]),Object(l.useEffect)((function(){fe&&!1===fe.loading&&!0===Y&&(V(fe.error?d.error_message:d.success_message),U(!0))}),[fe.loading]),console.log(le),!0===re)t=c.a.createElement(u.a,null);else if("undefined"!==typeof le&&le)if(0===le[E.query_tablename].length)t=c.a.createElement(m.a,{container:!0,justify:"center"},c.a.createElement(m.a,{item:!0},c.a.createElement(f.a,{variant:"h2",className:Ee.notfound},E.null_found)));else{for(var je=le[E.query_tablename].map((function(e,t){return E.forEachItem(e,t,(function(){k(t),L(!0)}),(function(){me({variables:Object(n.a)({},d.delete_unique_var,e[d.delete_unique_field])}),K(!0)}),ee)})),ve=[],qe=0;qe<le[E.query_tablename].length;qe+=4){for(var he=[],xe=qe;xe<qe+4;++xe)he.push(je[xe]);ve.push(c.a.createElement(m.a,{item:!0,xs:12},c.a.createElement(m.a,{container:!0,spacing:2},he)))}q.b&&(console.log("xxxx"),console.log(je),console.log("xxxx")),t=c.a.createElement(m.a,{container:!0,spacing:2},ve)}else t=c.a.createElement(s,{errorText:E.null_found?E.null_found:"Nothing Found :/"});return q.b&&console.log(t),c.a.createElement(m.a,{container:!0,className:Oe.py2},c.a.createElement(b.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:F,autoHideDuration:3e3,message:J,onClose:function(){U(!1)}}),c.a.createElement(S,{fullScreen:!!x,renderer:h,isShowing:$,constfieldsNameList:j,fieldNameMapping:v,editdata:null!==I&&le&&le[E.query_tablename]?le[E.query_tablename][I]:null,onClose:function(){-1!==I&&k(-1),L(!1)},onSave:function(e){if(q.b&&(console.log("____ON SAVE BEGIN____"),console.log(e),console.log("____ON SAVE END____")),null!==I){var t,r=le[E.query_tablename][I][E.query_unique_field];L(!1),ye.setLoading(!0),ie({variables:(t={},Object(n.a)(t,a.update_var_unique,r),Object(n.a)(t,a.update_var_info,e),t)}),K(!0)}else L(!1),ye.setLoading(!0),ge({variables:Object(n.a)({},y.add_var_info,e)}),K(!0)}}),t,c.a.createElement(p.a,{className:Ee.fab,color:"secondary",onClick:function(){k(null),L(!0)}},c.a.createElement(g.a,null,"add")),c.a.createElement(_.a,{onClose:function(){return ee(-1)},color:"secondary",open:-1!==Z&&Z>=0},A&&-1!==Z&&Z>=0&&le&&le[E.query_tablename]?A(le[E.query_tablename][Z]):null))};t.b=w},338:function(e,t,a){"use strict";a.r(t);var n=a(222),r=a(0),l=a.n(r),c=a(219),o=a(73),i=a.n(o),u=a(225),s=a.n(u),d=a(67),m=a(203),f=a(332),b=a(333),p=a(60),g=a(334),_=a(193),O=a(194),E=a(208),y=a(328),j=a(329),v=a(214),q=a(216),h=a(206),x=a(211),S=a(244),A=a(71);function N(){var e=Object(n.a)(["\nmutation AddArticle($article: InpArticle!) {\n    addArticle(article: $article) {\n        _id\n        text\n        title\n        article_type\n        create_date\n    }\n}\n"]);return N=function(){return e},e}function D(){var e=Object(n.a)(["\nmutation DeleteArticle($id: ID!) {\n    deleteArticle(id: $id){\n        _id\n    }\n}\n"]);return D=function(){return e},e}function w(){var e=Object(n.a)(["\nmutation UpdateArticle($id: ID!, $article: InpArticle) {\n    updateArticle(id: $id, article: $article) {\n        _id\n        text\n        title\n        article_type\n        create_date\n    }   \n}\n"]);return w=function(){return e},e}function C(){var e=Object(n.a)(["\nquery AllArticles($options: InpOptions){\n    allArticles(options: $options) {\n        _id\n        text\n        title\n        article_type\n        create_date\n    }\n}\n"]);return C=function(){return e},e}var P=i()(C()),I=i()(w()),k=i()(D()),T=i()(N()),M=["text","article_type","title"],$={text:{value:"Text",required:!0},title:{value:"Title",required:!0},article_type:{value:"Article Type",required:!0}},L=Object(d.a)((function(){return{editor:{fontFamily:"IBM Plex Mono, ubuntu mono, consolas, source code pro, monospace !important"}}}));t.default=function(){var e=Object(A.a)(),t=L();return l.a.createElement(c.a,{updateObject:{update_query:I,error_message:"Error Upadting Article",success_message:"Updated Article!",update_var_unique:"id",update_var_info:"article"},deleteObject:{delete_query:k,delete_unique_var:"id",delete_unique_field:"_id",error_message:"Error deleting Article",success_message:"Deleted Article!"},queryObject:{query_query:P,query_unique_field:"_id",query_tablename:"allArticles",forEachItem:function(t,a,n,r,c){var o=new Date;o.setTime(t.create_date);var i=o.getUTCDate(),u=o.getMonth()+1,s=o.getFullYear(),d="".concat(u,"/").concat(i,"/").concat(s);return l.a.createElement(m.a,{key:a,item:!0,xs:12,sm:6,md:4,lg:3,classname:"".concat(e.mx2," ").concat(e.my2)},l.a.createElement(f.a,null,l.a.createElement(b.a,null,l.a.createElement(p.a,{variant:"h6",noWrap:!0},t.title),l.a.createElement(p.a,null,"Created On: ",d)),l.a.createElement(g.a,{disableSpacing:!0},l.a.createElement(_.a,{onClick:n},l.a.createElement(O.a,null,"edit")),l.a.createElement(_.a,{onClick:r},l.a.createElement(O.a,null,"delete")),l.a.createElement(E.a,{color:"primary",onClick:function(){return c(a)}},"More"))))},query_params:{type:"isis"}},addObject:{add_query:T,error_message:"Error Adding Article",success_message:"Added Article",add_var_info:"article"},constfieldsNameList:M,fieldNameMapping:$,dialogRender:function(e){return l.a.createElement(r.Fragment,null,l.a.createElement(y.a,null,e.title),l.a.createElement(j.a,{dividers:!0},e.text))},fullScreen:!0,editorRender:function(e,a){return l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(m.a,{container:!0},l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(v.a,{margin:"normal",noWrap:!0,fullWidth:!0,label:"Title",required:!0,name:"title",value:e.title,onChange:a})),l.a.createElement(m.a,{item:!0,xs:12,md:6},l.a.createElement(v.a,{className:"".concat(t.editor),margin:"normal",rows:10,maxRows:10,noWrap:!0,fullWidth:!0,label:"Text",multiline:!0,required:!0,name:"text",value:e.text,onChange:a})),l.a.createElement(m.a,{item:!0,xs:12,md:6},l.a.createElement(q.a,null,"Output"),l.a.createElement(p.a,null,l.a.createElement(s.a,{source:e.text}))),l.a.createElement(m.a,{item:!0,xs:12},l.a.createElement(h.a,{fullWidth:!0},l.a.createElement(q.a,{htmlFor:"age-simple"},"Type"),l.a.createElement(x.a,{value:e.article_type,onChange:a,inputProps:{name:"article_type"}},l.a.createElement(S.a,{value:"isis"},"ISIS"))))))}})}}}]);
//# sourceMappingURL=12.5977bd1e.chunk.js.map