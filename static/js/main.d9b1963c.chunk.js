(this["webpackJsonpfantasy-footgun-admin"]=this["webpackJsonpfantasy-footgun-admin"]||[]).push([[0],{136:function(e,t,n){"use strict";n.r(t);var a=n(51),i=n(44),l=n.n(i),r=n(58),s=n(5),c=n(45),o=n(59),d=n(29),u=n(0),f=n(9),p=n(81),m=n.n(p),h=n(137),b=n(177),j=n(171),v=n(172),y=n(173),x=n(174),g=n(178),O=n(175),N=n(176),T=n.p+"static/media/5sirlogo.a6ac04db.jpg",k=n(128);console.log("fantasy-footgun-admin 0.1.7a");for(var D,P,w,C,S=function(e){return k("sha256").update(e).digest("base64")},E=!1,B=function(e){var t=e.childContext,n=e.mykey,a=e.children,i=u.useRef(n);return i.current!==n&&null!==i.current&&(t.current[i.current]=window.scrollY,i.current=null),u.useLayoutEffect((function(){i.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,i]),a},R=function(){var e,t=u.useState([]),n=Object(d.a)(t,2),a=n[0],i=n[1];i,u.useEffect((function(){(D=m()("https://sheltered-atoll-88652.herokuapp.com/",{secure:!0})).on("sendAdminSalt",(function(e){w=e,E&&(E=!1,t())}));var e=function(){var e=prompt("Please enter the administrator password");C=S("".concat("mkAmN1iwuMpqfckRXDRwwmgSI+nfZTF3kKR0bs2MZnM=","::").concat(e)),void 0!==w?t():E=!0},t=function(){P=S("".concat(w,"::").concat(C)),D.emit("requestAdminAuth",P)};return D.on("sendAuthFailed",e),D.emit("requestAdminSalt",""),e(),function(){D.disconnect()}}),[]);var l=u.useState(0),r=Object(d.a)(l,2),f=r[0],p=r[1],h=u.useRef(null),b=u.useRef([]),j=u.useRef(0);u.useEffect((function(){if(h.current){j.current=h.current.offsetHeight;var e,t=Object(o.a)(b.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(h.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[h,null===h||void 0===h||null===(e=h.current)||void 0===e?void 0:e.offsetHeight]);u.useRef({});var v=u.useRef({});return Object(s.jsx)("div",{children:Object(s.jsx)(U,{childWrapper:B,childContext:v,selTab:f,setSelTab:p,appbarRef:h,children:[Object(s.jsx)("div",{label:"winners",mykey:"defaultTab0",children:Object(s.jsx)(X,{id:0})},"defaultTab0"),Object(s.jsx)("div",{label:"settings",myKey:"defaultTab2",children:Object(s.jsx)(A,{})},"defaultTab2")].concat(Object(c.a)(a.map((function(e,t){e.type,e.params;return Object(s.jsx)("div",{})}))))})})},A=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(h.a,{square:!0})]})},W={},_=function(){var e=Object(r.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.emit("writeNotifications",P,t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(e){for(var t in e){var n=e[t];if(!n||"string"===typeof n&&0===n.length)return["FAILED","Please fill in all fields"]}return["SUCCESS"]},I=function(e){var t=e.blobs,n=e.prefill,a=e.fields,i=e.formPersistentStore,f=(e.validator,[]),p=void 0===i?{}:i;void 0===p.data&&(p.data=a.map((function(e){if("object"===typeof n){var t=n[e.name];if(void 0!==t)return t}return e.initialData})));for(var m=u.useState(p.data),h=Object(d.a)(m,2),v=h[0],y=h[1],x=v,g=function(){var e=O,t=a[e];f.push([v[e],function(t){(x=Object(c.a)(x))[e]=t,p.data=x,y(x)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options,t.blobName])},O=0;O<a.length;O++)g();var N=function(){var e=Object(r.a)(l.a.mark((function e(t){var n,a,i,r,s,c,u,p,m,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=Object(o.a)(f);try{for(a.s();!(i=a.n()).done;)r=Object(d.a)(i.value,6),s=r[0],r[1],r[2],c=r[3],u=r[4],p=r[5],L[p],n.push({name:c,category:u,winner:s})}catch(t){a.e(t)}finally{a.f()}return console.log(n),e.next=6,_(n);case 6:m=e.sent,h=Object(d.a)(m,2),h[0],h[1];case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:f.map((function(e,n){var a,i,l=Object(d.a)(e,8),r=l[0],o=l[1],f=(l[2],l[3],l[4]),p=l[5],m=l[6],h=l[7];return Object(s.jsx)("div",{style:F,children:"datetime"===p?Object(s.jsx)(b.a,{id:"datetime-local",fullWidth:!0,label:f,type:"datetime-local",variant:"outlined",value:r,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===p?Object(s.jsx)(b.a,{fullWidth:!0,select:!0,label:f,variant:"outlined",value:r,SelectProps:{native:!0},onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:m.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"selectBlob"===p?Object(s.jsxs)(u.Fragment,{children:[Object(s.jsx)(b.a,{fullWidth:!0,select:!0,label:f,variant:"outlined",value:r,SelectProps:{native:!0},onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:function(e){return[Object(s.jsx)("option",{value:"TBD",children:"TBD"},-1)].concat(Object(c.a)(e))}(t[h].map((function(e,t){return Object(s.jsx)("option",{value:e.name,children:e.friendlyName},t)})))}),Object(s.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),null===r?Object(s.jsx)("div",{style:{height:125,width:1}}):Object(s.jsx)("img",{src:null===(a=t[h].find((function(e){return e.name===r})))||void 0===a?void 0:a.photo,height:125})]}):"multi"===p?Object(s.jsx)(b.a,{fullWidth:!0,multiline:!0,label:f,variant:"outlined",value:null!==(i=r[0])&&void 0!==i?i:"",onChange:function(e){return o([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(b.a,{fullWidth:!0,multiline:!0,label:f,variant:"outlined",value:r,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},n)}))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(j.a,{variant:"outlined",onClick:N,children:"choose winners"}),Object(s.jsx)("div",{style:{height:"48px"}})]})},L={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},F={display:"flex",flexWrap:"wrap",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},X=function(e){var t=e.id,n=(e.cloneID,q);return Object(s.jsxs)("div",{style:H,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(I,{blobs:n.blobs,prefill:void 0,fields:n.fields,defaults:J,formPersistentStore:W[t],validator:M})]})},H={font:"20px Arial, sans-serif"},q={fields:[{name:"sar21",initialData:"TBD",friendlyName:"Best SAR21",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"saw",initialData:"TBD",friendlyName:"Best SAW",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"gpmg",initialData:"TBD",friendlyName:"Best GPMG",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"}],data:{},blobs:{Soldiers:[{name:"Alpha",fullName:"PTE 1",friendlyName:"Alpha - PTE 1",photo:"https://i.pinimg.com/originals/3e/37/24/3e3724692c15d28f12a4c7bc6fe0b945.jpg"},{name:"Bravo",fullName:"PTE 2",friendlyName:"Bravo - PTE 2",photo:"https://scontent.fsin13-1.fna.fbcdn.net/v/t1.6435-9/64861023_2345584528868126_2696896092137586688_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=kUjXJTOpnBwAX-aymIb&_nc_ht=scontent.fsin13-1.fna&oh=00_AT80RHyc6Z9aJrAh8nXipP93by8NOtWDXFiVM6iktKjBfg&oe=62306048"},{name:"Charlie",fullName:"PTE 3",friendlyName:"Charlie - PTE 3",photo:"https://i.pinimg.com/280x280_RS/d2/ab/39/d2ab39788ec4254ab7761317448f5da3.jpg"},{name:"Support",fullName:"PTE 4",friendlyName:"Support - PTE 4",photo:"https://c8.alamy.com/comp/D198EY/a-balinese-man-in-a-singapore-army-camo-shirt-D198EY.jpg"},{name:"MSC",fullName:"PTE 5",friendlyName:"MSC - PTE 5",photo:"https://www.janes.com/images/default-source/news-images/fg_3808936-idr-9354.jpg?sfvrsn=b60dfede_2"}]}},J=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],K={},V={},Y=0,Z=[].concat([{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],J);Y<Z.length;Y++){var G=Z[Y];K[G.name]=G.friendlyName,V[G.name]={persistent:G.persistent,optional:G.optional}}var U=function(e){var t=e.childWrapper,n=e.childContext,i=e.children,l=e.selTab,r=e.setSelTab,o=e.appbarRef,d=[Object(s.jsx)(v.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:T,height:"48px",width:"48px"})})}),Object(s.jsx)(v.a,{label:"fantasy skill at arms",disableRipple:!0})],u=t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(y.a,{title:Object(s.jsx)(x.a,{children:"Fantasy Skill at Arms"}),position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:o,children:Object(s.jsx)(g.a,{variant:"scrollable",value:Math.min(l,i.length-1)+d.length,children:[].concat(d,Object(c.a)(i.map((function(e,t){var n=Object(a.a)(Object(a.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,i.length)},onClick:function(){r(t)},active:t===Math.min(l,i.length-1),key:e.props.mykey});return Object(s.jsx)(z,Object(a.a)({},n))}))),[])})}),Object(s.jsx)("div",{children:Object(s.jsx)(u,{childContext:n,mykey:i[Math.min(l,i.length-1)].props.mykey,children:i[Math.min(l,i.length-1)]})})]})},z=function(e){var t=e.label,n=e.onClick,a=e.active,i=e.removable,l=e.removeCallback;return Object(s.jsx)(v.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(v.a,{label:t,onClick:n,selected:!!a||null}),i?Object(s.jsx)(O.a,{size:"small",onClick:l,children:Object(s.jsx)(N.a,{style:{fill:"red"}})}):void 0]})})};f.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(R,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.d9b1963c.chunk.js.map