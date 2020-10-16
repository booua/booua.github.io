(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{37:function(e,t,n){e.exports=n(63)},42:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),o=n.n(i),c=(n(42),n(10)),l=n(6),s=n(19),u=function(e){var t=e.children;return r.a.createElement("section",null,t)},m=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return r.a.createElement(u,null,r.a.createElement(t,e))}}))},f=function(e){var t=e.children;return r.a.createElement("section",null,t)},d=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return r.a.createElement(f,null,r.a.createElement(t,e))}}))};var p=function(e){var t={navBar:{fontFamily:"Montserrat",color:"#afafaf",padding:"30px 10px 10px 0px",display:"flex",flex:"1 0 auto",backgroundColor:"transparent",width:"100vh",height:"2rem",transformOrigin:"top left",position:"fixed",left:"0",top:"100%",transform:"rotate(-90deg)",zIndex:"9999"},logo:{display:"flex",flexDirection:"row",flex:"1 0 auto",justifyContent:"right",alignItems:"right",marginRight:"30px",color:"#ffffff",textDecoration:"none"},navContainer:{display:"flex",flexDirection:"row",justifyContent:"center",flex:"5 0 auto"},contactIcon:{display:"flex",flexDirection:"row",flex:"1 0 auto",marginLeft:"30px"},navItem:{color:"#ffffff",paddingLeft:"30px",textDecoration:"none"}};return r.a.createElement("div",{className:"navBar",style:t.navBar},r.a.createElement("span",{style:t.contactIcon},"contact"),r.a.createElement("div",{style:t.navContainer},r.a.createElement(c.b,{to:"/about",className:"item",style:t.navItem},"About"),r.a.createElement(c.b,{to:"/articles",className:"item",style:t.navItem},"Articles"),r.a.createElement(c.b,{to:"/projects",className:"item",style:t.navItem},"Projects")),r.a.createElement(c.b,{to:"/",className:"item",style:t.logo},"logo"))};var h=function(e){return r.a.createElement("footer",{className:"footer",style:{display:"flex",flexDirection:"column"}},r.a.createElement("h1",null,"FOOTER"))},g=n(28),b=n.n(g),v=n(4),x={hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{delay:.5,type:"spring",damping:30,mass:2}}},y={hidden:{opacity:0,y:-50},visible:{opacity:1,y:-35,transition:{delay:.15,type:"spring",damping:30,mass:2}}},E=n(12),j=n(32),w=function(e){var t=Object(j.a)({threshold:1}),n=Object(E.a)(t,2),a=n[0],i=n[1];return r.a.createElement(v.b.section,{ref:a,initial:"hidden",animate:i?"visible":"hidden"},e.children)},O={welcomeSection:{fontFamily:"Montserrat",fontWeight:"100",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",minHeight:"100vh",width:"100%"},welcomeTextBox:{maxWidth:"100vw",fontSize:"6vw",color:"white",textAlign:"center"},wrapper:{display:"flex",flex:"1 0 auto",flexDirection:"row",marginTop:"-5vh"},nameTextBox:{display:"flex",flex:"1 0 auto"},introductionTextBox:{textAlign:"center",display:"flex",flex:"1 0 auto",fontSize:"4vw",color:"white",marginTop:"3vw",marginRight:"1vw"},roleTextBox:{fontSize:"1.5vw",color:"white"}};var k=function(){return r.a.createElement("section",{style:O.welcomeSection},r.a.createElement("div",{style:O.welcomeTextBox},r.a.createElement(w,null,r.a.createElement(v.b.div,{variants:y},r.a.createElement(b.a,{fontSize:"6vw",color:"#ffffff",background:"#0e0d0d",steps:10},"Hi")),r.a.createElement("div",{style:O.wrapper},r.a.createElement(v.b.span,{variants:x,style:O.introductionTextBox},"My name is "),r.a.createElement(v.b.span,{variants:x,style:O.nameTextBox},r.a.createElement(b.a,{fontSize:"5vw",color:"#ffffff",background:"#0e0d0d",steps:15},"Jack"))),r.a.createElement(v.b.span,{variants:x,style:O.roleTextBox},"full stack developer things-doer car enthusiast"))))},C=n(14),S=n(15),B=n(22);function I(){var e=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s ease;\n"]);return I=function(){return e},e}function D(){var e=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateZ(0);\n  bottom: 0;\n  background-size: cover;\n  border-radius: 1rem;\n  background-image: url(",");\n"]);return D=function(){return e},e}function M(){var e=Object(C.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return M=function(){return e},e}function T(){var e=Object(C.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  border-radius: 1rem;\n  height: 90%;\n  transition: all 0.2s ease-out 0s;\n  box-shadow: rgba(0, 0, 0, 06) 0px 50px 100px -30px;\n"]);return T=function(){return e},e}function H(){var e=Object(C.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return H=function(){return e},e}function z(){var e=Object(C.a)(["\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  transform: perspective(921px);\n  display: flex;\n  position: relative;\n  padding: 25px;\n  max-width: 100%;\n"]);return z=function(){return e},e}var W=S.a.div(z()),J=Object(S.a)(v.b.div)(H()),R=S.a.div(T()),P=S.a.div(M()),q=S.a.div(D(),(function(e){return e.image})),Q=Object(S.a)(v.b.div)(I());function A(e){var t=e.title,n=e.height,i=void 0===n?400:n,o=e.width,l=void 0===o?300:o,s=e.index,u=e.size,m=e.irregularGrid,f=e.id,d=e.image,p=Object(a.useRef)(),h=Object(a.useState)(!1),g=Object(E.a)(h,2),b=g[0],x=g[1],y=Object(a.useState)(!1),j=Object(E.a)(y,2),w=j[0],O=j[1],k=[l/2,i/2],C=Object(v.c)(k),S=Object(B.a)([0,l],[.03*l,.03*l*-1]),I=Object(v.e)(C,(function(e){var t=Object(E.a)(e,1)[0];return S(t)})),D=Object(B.a)([0,i],[.03*i*-1,.03*i*1]),M=Object(v.e)(C,(function(e){var t=Object(E.a)(e,2)[1];return D(t)})),T={stiffness:150,damping:20},H=Object(v.d)(M,T),z=Object(v.d)(I,T),A=Object(v.e)(C,(function(e){var t=Object(E.a)(e,2)[1];return Object(B.a)([0,i],[0,.3])(t)})),F=Object(v.d)(A,T),N=Object(v.e)(F,(function(e){var t=C.get(),n=Object(E.a)(t,2),a=n[0],r=n[1];r===k[1]&&(r=k[1]+1);var i=Math.atan2(r-k[1],a-k[0]),o=360*(i>0?i:2*Math.PI+i)/(2*Math.PI)-90;return"linear-gradient(".concat(o,"deg, rgba(255,255,255,").concat(e,"), rgba(255,255,255,0) 80%)")}));function G(e){if(!w){var t=e.target.getBoundingClientRect();C.set([e.clientX-t.left,e.clientY-t.top])}}function L(){return m?function(e){for(var t=[],n=0;n<=e;n++)t.push(4*n),t.push(4*n+3);return t}(u).find((function(e){return e===s+2}))?"35%":"50%":"100%"}return Object(a.useEffect)((function(){b||C.set(k)}),[b,C,k]),r.a.createElement(W,{ref:p,style:{height:"".concat(i,"px"),flex:"0 0 ".concat(L()),maxWidth:"".concat(L())}},r.a.createElement(J,{style:{scale:1,rotateX:H,rotateY:z},whileHover:{scale:1.03},whileTap:{scale:.97},onTapCancel:function(e){O(!1),G(e)},onTapStart:function(){O(!0)},onTap:function(e){O(!1)},onHoverStart:function(){x(!0)},onHoverEnd:function(){x(!1)},onMouseMove:G},r.a.createElement(c.b,{to:"/projects/".concat(f)},r.a.createElement(R,{hover:b}),r.a.createElement(P,null,r.a.createElement("h1",null,t),r.a.createElement(q,{image:d})),r.a.createElement(Q,{style:{background:N}}))))}var F=function(e){var t=e.title,n=e.index,a=e.size,i=e.irregularGrid,o=e.id,c=e.image;return r.a.createElement(A,{title:t,index:n,image:c,size:a,id:o,irregularGrid:i})},N=n(21),G={project1:{id:"test1",title:"project1",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project2:{id:"test2",title:"project2",image:"https://images.unsplash.com/photo-1602511560221-ae4f9dd2b3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project3:{id:"test3",title:"project3",image:"https://images.unsplash.com/photo-1602527863195-2764446acf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project4:{id:"test4",title:"project4",image:"https://images.unsplash.com/photo-1602562603289-8b52f21ef638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project5:{id:"test5",title:"project5",image:"https://images.unsplash.com/photo-1602562081457-a97b78188a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project6:{id:"test6",title:"project6",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project7:{id:"test7",title:"project7",image:"https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project8:{id:"test8",title:"project8",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}},L={recentProjecsContainer:{height:"100%",minHeight:"100vh",maxWidth:"100vw",width:"100%",textAlign:"center",color:"#ffffff",paddingTop:"3rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},projectSection:{display:"flex",flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"row"},recentProjectsTitle:{fontSize:"6vw",paddingTop:"10%"}};var U=function(){return r.a.createElement("section",{style:L.recentProjecsContainer},r.a.createElement("span",{style:L.recentProjectsTitle},"Recent projects"),r.a.createElement("div",{style:L.projectSection},r.a.createElement(N.Grid,null,r.a.createElement(N.Row,{center:"xs"},G&&Object.values(G).map((function(e,t){return t>2?"":r.a.createElement(N.Col,{xs:12,sm:6,md:4,key:"col-"+e.id},r.a.createElement(F,{key:e.id,image:e.image,id:e.id,title:e.title}))}))))))},X={resumeSection:{height:"100%",minHeight:"100vh",width:"100%",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:"url(./bg.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}};var Y=function(){return r.a.createElement("section",{style:X.resumeSection},r.a.createElement("div",null,"RESUME"))},Z=n(36),$=n.n(Z),K={background:{position:"absolute",top:"0",left:"0",zIndex:"1",height:"100%",minHeight:"100vh",width:"100%"}},V=function(e){var t=Object(a.useState)(0),n=Object(E.a)(t,2),i=n[0],o=n[1],c=Object(a.useRef)(null);return Object(a.useEffect)((function(){return i||o($()({el:c.current,backgroundColor:"#0e0d0d",color:"#ffffff",color2:"#0e0d0d",mouseControls:!0,touchControls:!1,gyroControls:!0,scale:1,scaleMobile:1,size:1.7,spacing:29})),function(){i&&i.destroy()}}),[i]),r.a.createElement("div",{ref:c,style:K.background})},_={contentSection:{fontFamily:"Montserrat",position:"relative",zIndex:"100",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center"},root:{backgroundColor:"#0e0d0d"}};var ee=function(e){return r.a.createElement("div",{style:_.root},r.a.createElement("section",{style:_.contentSection},r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(U,null),r.a.createElement(Y,null),r.a.createElement(h,null)),r.a.createElement(V,null))},te=function(){return r.a.createElement("div",null,"Ups! 404 Not Found")};var ne=function(e){return r.a.createElement(v.b.section,{key:e.id,style:void 0===e.style?{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"}:e.style,animate:{opacity:1,scale:.95,transition:{duration:1,ease:[.43,.13,.23,.96]}},initial:{opacity:0,scale:1}},e.children)},ae={root:{backgroundColor:"#0e0d0d"}};function re(){var e=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: calc(100% - 5rem);\n  margin-left: 4rem;\n  justify-content: center;\n"]);return re=function(){return e},e}var ie=S.a.div(re());var oe=function(e){return r.a.createElement("div",{style:ae.root},r.a.createElement(p,null),r.a.createElement(ne,null,r.a.createElement("h1",null,"PROJECTS"),r.a.createElement(ie,null,G&&Object.values(G).map((function(e,t){return r.a.createElement(F,{size:Object.keys(G).length,index:t,key:e.id,id:e.id,title:e.title,image:e.image,irregularGrid:!0})})))))},ce=function(e){return r.a.createElement("div",{style:ae.root},r.a.createElement(p,null),r.a.createElement(ne,{id:"articles"},r.a.createElement("h1",null,"Articles")))},le={contentSection:{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"},root:{backgroundColor:"#0e0d0d"}};var se=function(e){var t=Object(l.g)().projectId;return r.a.createElement("div",{style:le.root},r.a.createElement(p,null),r.a.createElement(ne,{id:t},r.a.createElement("h1",null,t)))},ue=function(e){return r.a.createElement("div",{style:ae.root},r.a.createElement(p,null),r.a.createElement(ne,{id:"about"},r.a.createElement("h1",null,"AboutPage")))};var me=function(){return r.a.createElement(c.a,null,r.a.createElement(v.a,{exitBeforeEnter:!0},r.a.createElement(l.d,null,r.a.createElement(m,{exact:!0,path:"/",component:ee}),r.a.createElement(m,{exact:!0,path:"/projects",component:oe}),r.a.createElement(m,{exact:!0,path:"/articles",component:ce}),r.a.createElement(m,{exact:!0,path:"/about",component:ue}),r.a.createElement(m,{exact:!0,path:"/projects/:projectId",component:se}),r.a.createElement(d,{exact:!0,path:"/404",component:te}),r.a.createElement(l.a,{to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.263b95c2.chunk.js.map