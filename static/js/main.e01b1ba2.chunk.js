(this["webpackJsonpfantasy-footgun-admin"]=this["webpackJsonpfantasy-footgun-admin"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var a=n(45),i=n.n(a),l=n(58),r=n(4),s=n(25),o=n(46),c=n(59),d=n(30),u=n(0),p=n(9),f=n(81),b=n.n(f),h=n(176),m=n(171),j=n(172),v=n(173),y=n(177),x=n(174),O=n(175),g=n.p+"static/media/5sirlogo.a6ac04db.jpg",w=n(128);console.log("fantasy-footgun-admin 0.1.12a");for(var N,S,T,k,P=function(e){return w("sha256").update(e).digest("base64")},C=!1,D=function(e){var t=e.childContext,n=e.mykey,a=e.children,i=u.useRef(n);return i.current!==n&&null!==i.current&&(t.current[i.current]=window.scrollY,i.current=null),u.useLayoutEffect((function(){i.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,i]),a},E=function(){var e,t=u.useState([]),n=Object(d.a)(t,2),a=n[0],i=n[1];i,u.useEffect((function(){(N=b()("https://sheltered-atoll-88652.herokuapp.com/",{secure:!0})).on("sendAdminSalt",(function(e){T=e,C&&(C=!1,t())}));var e=function(){var e=prompt("Please enter the administrator password");k=P("".concat("mkAmN1iwuMpqfckRXDRwwmgSI+nfZTF3kKR0bs2MZnM=","::").concat(e)),void 0!==T?t():C=!0},t=function(){S=P("".concat(T,"::").concat(k)),N.emit("requestAdminAuth",S)};return N.on("sendAuthFailed",e),N.emit("requestAdminSalt",""),e(),function(){N.disconnect()}}),[]);var l=u.useState(0),s=Object(d.a)(l,2),p=s[0],f=s[1],h=u.useRef(null),m=u.useRef([]),j=u.useRef(0);u.useEffect((function(){if(h.current){j.current=h.current.offsetHeight;var e,t=Object(c.a)(m.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(h.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[h,null===h||void 0===h||null===(e=h.current)||void 0===e?void 0:e.offsetHeight]);u.useRef({});var v=u.useRef({});return Object(r.jsx)("div",{children:Object(r.jsx)(U,{childWrapper:D,childContext:v,selTab:p,setSelTab:f,appbarRef:h,children:[Object(r.jsx)("div",{label:"winners",mykey:"defaultTab0",children:Object(r.jsx)(F,{id:0})},"defaultTab0"),Object(r.jsx)("div",{label:"settings",myKey:"defaultTab2",children:Object(r.jsx)(B,{})},"defaultTab2")].concat(Object(o.a)(a.map((function(e,t){e.type,e.params;return Object(r.jsx)("div",{})}))))})})},R=[void 0,!0,!1],W={},A=0;A<R.length;A++)W[R[A]]=A;for(var B=function(){var e=u.useState({scoreRows:void 0,allowSubmissions:void 0}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{style:{height:"12px"}}),Object(r.jsx)("div",{style:X,children:Object(r.jsxs)(h.a,{fullWidth:!0,select:!0,label:"Show scores on leaderboard",variant:"outlined",value:W[n.scoreRows],SelectProps:{native:!0},onChange:function(e){return a(Object(s.a)(Object(s.a)({},n),{},{scoreRows:R[e.target.value]}))},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:[Object(r.jsx)("option",{value:0}),Object(r.jsx)("option",{value:1,children:"Yes"}),Object(r.jsx)("option",{value:2,children:"No"})]})}),Object(r.jsx)("div",{style:X,children:Object(r.jsxs)(h.a,{fullWidth:!0,select:!0,label:"Allow submissions",variant:"outlined",value:W[n.allowSubmissions],SelectProps:{native:!0},onChange:function(e){return a(Object(s.a)(Object(s.a)({},n),{},{allowSubmissions:R[e.target.value]}))},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:[Object(r.jsx)("option",{value:0}),Object(r.jsx)("option",{value:1,children:"Yes"}),Object(r.jsx)("option",{value:2,children:"No"})]})}),Object(r.jsx)(m.a,{variant:"outlined",onClick:function(){N.emit("writeState",S,n)},children:"apply"}),Object(r.jsx)("div",{style:{height:"48px"}}),Object(r.jsx)(m.a,{style:{backgroundColor:"red"},variant:"outlined",onClick:function(){"Erase"===prompt("Are you sure you want to delete all teams? This cannot be undone. Type 'Erase' to confirm that you intend to do so.")&&N.emit("eraseSubmissions",S)},children:"delete all teams"})]})},_={},I=function(){var e=Object(l.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.emit("writeNotifications",S,t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(e){for(var t in e){var n=e[t];if(!n||"string"===typeof n&&0===n.length)return["FAILED","Please fill in all fields"]}return["SUCCESS"]},L=function(e){var t=e.blobs,n=e.prefill,a=e.fields,s=e.formPersistentStore,p=(e.validator,[]),f=void 0===s?{}:s;void 0===f.data&&(f.data=a.map((function(e){if("object"===typeof n){var t=n[e.name];if(void 0!==t)return t}return e.initialData})));for(var b=u.useState(f.data),j=Object(d.a)(b,2),v=j[0],y=j[1],x=v,O=function(){var e=g,t=a[e];p.push([v[e],function(t){(x=Object(o.a)(x))[e]=t,f.data=x,y(x)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options,t.blobName])},g=0;g<a.length;g++)O();var w=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,l,r,s,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object(c.a)(p);try{for(a.s();!(l=a.n()).done;)r=Object(d.a)(l.value,6),s=r[0],r[1],r[2],o=r[3],u=r[4],r[5],"null"!==s&&n.push({name:o,category:u,winner:s})}catch(t){a.e(t)}finally{a.f()}I(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:p.map((function(e,n){var a,i,l=Object(d.a)(e,8),s=l[0],c=l[1],p=(l[2],l[3],l[4]),f=l[5],b=l[6],m=l[7];return Object(r.jsx)("div",{style:X,children:"datetime"===f?Object(r.jsx)(h.a,{id:"datetime-local",fullWidth:!0,label:p,type:"datetime-local",variant:"outlined",value:s,onChange:function(e){return c(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===f?Object(r.jsx)(h.a,{fullWidth:!0,select:!0,label:p,variant:"outlined",value:s,SelectProps:{native:!0},onChange:function(e){return c(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:b.map((function(e,t){return Object(r.jsx)("option",{value:e,children:e},t)}))}):"selectBlob"===f?Object(r.jsxs)(u.Fragment,{children:[Object(r.jsx)(h.a,{fullWidth:!0,select:!0,label:p,variant:"outlined",value:s,SelectProps:{native:!0},onChange:function(e){return c(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:function(e){return[Object(r.jsx)("option",{value:"null"},-2),Object(r.jsx)("option",{value:"TBD",children:"TBD"},-1)].concat(Object(o.a)(e))}(t[m].map((function(e,t){return Object(r.jsx)("option",{value:e.name,children:e.friendlyName},t)})))}),Object(r.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),null===s?Object(r.jsx)("div",{style:{height:125,width:1}}):Object(r.jsx)("img",{src:null===(a=t[m].find((function(e){return e.name===s})))||void 0===a?void 0:a.photo,height:125})]}):"multi"===f?Object(r.jsx)(h.a,{fullWidth:!0,multiline:!0,label:p,variant:"outlined",value:null!==(i=s[0])&&void 0!==i?i:"",onChange:function(e){return c([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(r.jsx)(h.a,{fullWidth:!0,multiline:!0,label:p,variant:"outlined",value:s,onChange:function(e){return c(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},n)}))}),Object(r.jsx)("div",{style:{height:"12px"}}),Object(r.jsx)(m.a,{variant:"outlined",onClick:w,children:"choose winners"}),Object(r.jsx)("div",{style:{height:"48px"}})]})},X={display:"flex",flexWrap:"wrap",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},F=function(e){var t=e.id,n=(e.cloneID,Y);return Object(r.jsxs)("div",{style:H,children:[Object(r.jsx)("div",{style:{height:"12px"}}),Object(r.jsx)(L,{blobs:n.blobs,prefill:void 0,fields:n.fields,defaults:J,formPersistentStore:_[t],validator:M})]})},H={font:"20px Arial, sans-serif"},Y={fields:[{name:"sar21",initialData:"null",friendlyName:"Best SAR21",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"saw",initialData:"null",friendlyName:"Best SAW",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"gpmg",initialData:"null",friendlyName:"Best GPMG",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"}],data:{},blobs:{Soldiers:[{name:"Alpha",fullName:"PTE 1",friendlyName:"Alpha - PTE 1",photo:"https://i.pinimg.com/originals/3e/37/24/3e3724692c15d28f12a4c7bc6fe0b945.jpg"},{name:"Bravo",fullName:"PTE 2",friendlyName:"Bravo - PTE 2",photo:"https://scontent.fsin13-1.fna.fbcdn.net/v/t1.6435-9/64861023_2345584528868126_2696896092137586688_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=kUjXJTOpnBwAX-aymIb&_nc_ht=scontent.fsin13-1.fna&oh=00_AT80RHyc6Z9aJrAh8nXipP93by8NOtWDXFiVM6iktKjBfg&oe=62306048"},{name:"Charlie",fullName:"PTE 3",friendlyName:"Charlie - PTE 3",photo:"https://i.pinimg.com/280x280_RS/d2/ab/39/d2ab39788ec4254ab7761317448f5da3.jpg"},{name:"Support",fullName:"PTE 4",friendlyName:"Support - PTE 4",photo:"https://c8.alamy.com/comp/D198EY/a-balinese-man-in-a-singapore-army-camo-shirt-D198EY.jpg"},{name:"MSC",fullName:"PTE 5",friendlyName:"MSC - PTE 5",photo:"https://www.janes.com/images/default-source/news-images/fg_3808936-idr-9354.jpg?sfvrsn=b60dfede_2"}]}},J=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],q={},K={},V=0,Z=[].concat([{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],J);V<Z.length;V++){var G=Z[V];q[G.name]=G.friendlyName,K[G.name]={persistent:G.persistent,optional:G.optional}}var U=function(e){var t=e.childWrapper,n=e.childContext,a=e.children,i=e.selTab,l=e.setSelTab,c=e.appbarRef,d=[Object(r.jsx)(j.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(r.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(r.jsx)("img",{src:g,height:"48px",width:"48px"})})}),Object(r.jsx)(j.a,{label:"fantasy skill at arms",disableRipple:!0})],u=t;return Object(r.jsxs)("div",{children:[Object(r.jsx)(v.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(r.jsx)(y.a,{variant:"scrollable",value:Math.min(i,a.length-1)+d.length,children:[].concat(d,Object(o.a)(a.map((function(e,t){var n=Object(s.a)(Object(s.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,a.length)},onClick:function(){l(t)},active:t===Math.min(i,a.length-1),key:e.props.mykey});return Object(r.jsx)(z,Object(s.a)({},n))}))),[])})}),Object(r.jsx)("div",{children:Object(r.jsx)(u,{childContext:n,mykey:a[Math.min(i,a.length-1)].props.mykey,children:a[Math.min(i,a.length-1)]})})]})},z=function(e){var t=e.label,n=e.onClick,a=e.active,i=e.removable,l=e.removeCallback;return Object(r.jsx)(j.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(r.jsxs)("span",{children:[Object(r.jsx)(j.a,{label:t,onClick:n,selected:!!a||null}),i?Object(r.jsx)(x.a,{size:"small",onClick:l,children:Object(r.jsx)(O.a,{style:{fill:"red"}})}):void 0]})})};p.render(Object(r.jsx)("div",{style:{textAlign:"center"},children:Object(r.jsx)(E,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.e01b1ba2.chunk.js.map