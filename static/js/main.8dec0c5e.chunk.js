(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{45:function(e,t,n){e.exports=n(72)},50:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),o=n.n(i),c=(n(50),n(12)),l=n(7),s=n(22),m=n(34),u=n.n(m),d=n(9),p=n(4),f={hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{delay:.5,type:"spring",damping:30,mass:2}}},h={hidden:{opacity:0,y:-50},visible:{opacity:1,y:-35,transition:{delay:.15,type:"spring",damping:30,mass:2}}},E={scale:1.1,letterSpacing:"2px"},g={scale:1.4},b={scale:.9},v={y:0,opacity:1},x={y:240,opacity:0},y=void 0,j={contactPane:{width:"80vw",height:"200px",marginLeft:"10vw",backgroundColor:"rgba(255, 255, 255, 0.6)",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",position:"fixed",padding:"20px",bottom:"0",zIndex:"99999"}},w=function(e){var t=e.isToggled,n=e.hide;return o.a.createPortal(r.a.createElement(p.b.section,{style:j.contactPane,initial:!1,animate:t?v:x},"contact",r.a.createElement("div",null,"Email"),r.a.createElement("div",null,"linkedin"),r.a.createElement("div",null,"Feel free to drop me a message"),r.a.createElement("form",{className:"contact-form",onSubmit:function(e){return y.formSubmit(e)}},r.a.createElement("label",{htmlFor:"message-input"},"Your Message"),r.a.createElement("textarea",{onChange:function(e){return y.setState({message:e.target.value})},name:"message",type:"text",placeholder:"Please write your message here",required:!0}),r.a.createElement("label",{htmlFor:"message-name"},"Your Name"),r.a.createElement("input",{onChange:function(e){return y.setState({name:e.target.value})},name:"name",type:"text",placeholder:"Your Name"}),r.a.createElement("label",{htmlFor:"message-email"},"Your Email"),r.a.createElement("input",{onChange:function(e){return y.setState({email:e.target.value})},name:"email",type:"email",placeholder:"your@email.com",required:!0}),r.a.createElement("div",{className:"button--container"},r.a.createElement("button",{type:"submit",className:"button button-primary"}))),r.a.createElement("div",{onClick:n},"CLOSE")),document.body)};var C=function(e){var t=function(e){var t=Object(a.useState)(e),n=Object(d.a)(t,2),r=n[0],i=n[1];return[r,Object(a.useCallback)((function(){return i((function(e){return!e}))}),[i])]}(!1),n=Object(d.a)(t,2),i=n[0],o=n[1],l={navBar:{fontFamily:"Montserrat",color:"#afafaf",padding:"30px 10px 10px 0px",display:"flex",flex:"1 0 auto",backgroundColor:"transparent",width:"100vh",height:"2rem",transformOrigin:"top left",position:"fixed",left:"0",top:"100%",transform:"rotate(-90deg)",zIndex:"9999",outline:"none"},logo:{display:"flex",flexDirection:"row",flex:"1 0 auto",justifyContent:"right",alignItems:"right",marginRight:"30px",color:"#ffffff",textDecoration:"none",outline:"none"},navContainer:{display:"flex",flexDirection:"row",justifyContent:"center",flex:"5 0 auto"},contactIcon:{display:"flex",flexDirection:"row",flex:"1 0 auto",marginLeft:"30px"},navItem:{color:"#ffffff",paddingLeft:"30px",textDecoration:"none"}};return r.a.createElement("div",{className:"navBar",style:l.navBar},r.a.createElement(p.b.span,{whileTap:b,whileHover:E,style:l.contactIcon,onClick:o},"contact"),r.a.createElement("div",{style:l.navContainer},r.a.createElement(p.b.span,{whileTap:b,whileHover:E},r.a.createElement(c.b,{to:"/about",className:"item",style:l.navItem},"About")),r.a.createElement(p.b.span,{whileTap:b,whileHover:E},r.a.createElement(c.b,{to:"/articles",className:"item",style:l.navItem},"Articles")),r.a.createElement(p.b.span,{whileTap:b,whileHover:E},r.a.createElement(c.b,{to:"/projects",className:"item",style:l.navItem},"Projects"))),r.a.createElement(c.b,{to:"/",className:"item",style:l.logo},r.a.createElement(p.b.span,{whileTap:b,whileHover:g},r.a.createElement("img",{src:"/orb.gif",alt:"orb",style:{width:"3rem",backgroundColor:"#0e0d0d",transform:"rotate(90deg)"}}))),r.a.createElement(w,{isToggled:i,hide:o}))},D=function(e){var t=e.children;return r.a.createElement("section",{style:{display:"flex",width:"100vw",height:"100vh",overflow:"auto",backgroundColor:"#0e0d0d"}},r.a.createElement(C,null),r.a.createElement(u.a,null,t))},O=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return r.a.createElement(D,null,r.a.createElement(t,e))}}))},S=function(e){var t=e.children;return r.a.createElement("section",null,t)},k=function(e){var t=e.component,n=Object(s.a)(e,["component"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){return r.a.createElement(S,null,r.a.createElement(t,e))}}))};var T=function(e){return r.a.createElement("footer",{className:"footer",style:{display:"flex",flexDirection:"column"}},r.a.createElement("h1",null,"FOOTER"))},B=n(30),I=n.n(B),H=n(35),M=function(e){var t=Object(H.a)({threshold:1}),n=Object(d.a)(t,2),a=n[0],i=n[1];return r.a.createElement(p.b.section,{ref:a,initial:"hidden",animate:i?"visible":"hidden"},e.children)},z={welcomeSection:{fontFamily:"Montserrat",fontWeight:"100",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100%",minHeight:"100vh",width:"100%",zIndex:"2"},welcomeTextBox:{maxWidth:"100vw",fontSize:"6vw",color:"white",textAlign:"center"},wrapper:{display:"flex",flex:"1 0 auto",flexDirection:"row",marginTop:"-5vh"},nameTextBox:{display:"flex",flex:"1 0 auto"},introductionTextBox:{textAlign:"center",display:"flex",flex:"1 0 auto",fontSize:"4vw",color:"white",marginTop:"3vw",marginRight:"1vw"},roleTextBox:{fontSize:"1.5vw",color:"white"}};var A=function(){return r.a.createElement("section",{style:z.welcomeSection},r.a.createElement("div",{style:z.welcomeTextBox},r.a.createElement(M,null,r.a.createElement(p.b.div,{variants:h},r.a.createElement(I.a,{fontSize:"6vw",color:"#ffffff",background:"#0e0d0d",steps:10},"Hi")),r.a.createElement("div",{style:z.wrapper},r.a.createElement(p.b.span,{variants:f,style:z.introductionTextBox},"My name is"," "),r.a.createElement(p.b.span,{variants:f,style:z.nameTextBox},r.a.createElement(I.a,{fontSize:"5vw",color:"#ffffff",background:"#0e0d0d",steps:15},"Jack"))),r.a.createElement(p.b.span,{variants:f,style:z.roleTextBox},"full stack developer things-doer car enthusiast"))))},Y=n(16),F=n(17),R=n(24);function W(){var e=Object(Y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all 0.5s ease;\n"]);return W=function(){return e},e}function N(){var e=Object(Y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: translateZ(0);\n  bottom: 0;\n  background-size: cover;\n  border-radius: 1rem;\n  background-image: url(",");\n"]);return N=function(){return e},e}function J(){var e=Object(Y.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 1rem;\n  overflow: hidden;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return J=function(){return e},e}function P(){var e=Object(Y.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  width: 90%;\n  border-radius: 1rem;\n  height: 90%;\n  transition: all 0.2s ease-out 0s;\n  box-shadow: rgba(0, 0, 0, 06) 0px 50px 100px -30px;\n"]);return P=function(){return e},e}function q(){var e=Object(Y.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  backface-visibility: hidden;\n"]);return q=function(){return e},e}function Q(){var e=Object(Y.a)(["\n  border-radius: 8px;\n  transform-style: preserve-3d;\n  transform: perspective(921px);\n  display: flex;\n  position: relative;\n  padding: 25px;\n  max-width: 100%;\n"]);return Q=function(){return e},e}var G=F.a.div(Q()),L=Object(F.a)(p.b.div)(q()),U=F.a.div(P()),X=F.a.div(J()),K=F.a.div(N(),(function(e){return e.image})),Z=Object(F.a)(p.b.div)(W());function $(e){var t=e.title,n=e.height,i=void 0===n?400:n,o=e.width,l=void 0===o?300:o,s=e.index,m=e.size,u=e.irregularGrid,f=e.id,h=e.image,E=Object(a.useRef)(),g=Object(a.useState)(!1),b=Object(d.a)(g,2),v=b[0],x=b[1],y=Object(a.useState)(!1),j=Object(d.a)(y,2),w=j[0],C=j[1],D=[l/2,i/2],O=Object(p.c)(D),S=Object(R.a)([0,l],[.03*l,.03*l*-1]),k=Object(p.e)(O,(function(e){var t=Object(d.a)(e,1)[0];return S(t)})),T=Object(R.a)([0,i],[.03*i*-1,.03*i*1]),B=Object(p.e)(O,(function(e){var t=Object(d.a)(e,2)[1];return T(t)})),I={stiffness:150,damping:20},H=Object(p.d)(B,I),M=Object(p.d)(k,I),z=Object(p.e)(O,(function(e){var t=Object(d.a)(e,2)[1];return Object(R.a)([0,i],[0,.3])(t)})),A=Object(p.d)(z,I),Y=Object(p.e)(A,(function(e){var t=O.get(),n=Object(d.a)(t,2),a=n[0],r=n[1];r===D[1]&&(r=D[1]+1);var i=Math.atan2(r-D[1],a-D[0]),o=360*(i>0?i:2*Math.PI+i)/(2*Math.PI)-90;return"linear-gradient(".concat(o,"deg, rgba(255,255,255,").concat(e,"), rgba(255,255,255,0) 80%)")}));function F(e){if(!w){var t=e.target.getBoundingClientRect();O.set([e.clientX-t.left,e.clientY-t.top])}}function W(){return u?function(e){for(var t=[],n=0;n<=e;n++)t.push(4*n),t.push(4*n+3);return t}(m).find((function(e){return e===s+2}))?"35%":"50%":"100%"}return Object(a.useEffect)((function(){v||O.set(D)}),[v,O,D]),r.a.createElement(G,{ref:E,style:{height:"".concat(i,"px"),flex:"0 0 ".concat(W()),maxWidth:"".concat(W())}},r.a.createElement(L,{style:{scale:1,rotateX:H,rotateY:M},whileHover:{scale:1.03},whileTap:{scale:.97},onTapCancel:function(e){C(!1),F(e)},onTapStart:function(){C(!0)},onTap:function(e){C(!1)},onHoverStart:function(){x(!0)},onHoverEnd:function(){x(!1)},onMouseMove:F},r.a.createElement(c.b,{to:"/projects/".concat(f)},r.a.createElement(U,{hover:v}),r.a.createElement(X,null,r.a.createElement("h1",null,t),r.a.createElement(K,{image:h})),r.a.createElement(Z,{style:{background:Y}}))))}var V=function(e){var t=e.title,n=e.index,a=e.size,i=e.irregularGrid,o=e.id,c=e.image;return r.a.createElement($,{title:t,index:n,image:c,size:a,id:o,irregularGrid:i})},_=n(15),ee={project1:{id:"test1",title:"project1",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project2:{id:"test2",title:"project2",image:"https://images.unsplash.com/photo-1602511560221-ae4f9dd2b3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project3:{id:"test3",title:"project3",image:"https://images.unsplash.com/photo-1602527863195-2764446acf94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project4:{id:"test4",title:"project4",image:"https://images.unsplash.com/photo-1602562603289-8b52f21ef638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project5:{id:"test5",title:"project5",image:"https://images.unsplash.com/photo-1602562081457-a97b78188a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project6:{id:"test6",title:"project6",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project7:{id:"test7",title:"project7",image:"https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},project8:{id:"test8",title:"project8",image:"https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}},te={recentProjecsContainer:{height:"100%",minHeight:"100vh",maxWidth:"100vw",width:"100%",textAlign:"center",color:"#ffffff",paddingTop:"3rem",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},projectSection:{display:"flex",flex:"1",justifyContent:"center",alignItems:"center",flexDirection:"row"},recentProjectsTitle:{fontSize:"6vw",paddingTop:"10%"}};var ne=function(){return r.a.createElement("section",{style:te.recentProjecsContainer},r.a.createElement("span",{style:te.recentProjectsTitle},"Recent projects"),r.a.createElement("div",{style:te.projectSection},r.a.createElement(_.Grid,null,r.a.createElement(_.Row,{center:"xs"},ee&&Object.values(ee).map((function(e,t){return t>2?"":r.a.createElement(_.Col,{xs:12,sm:6,md:4,key:"col-"+e.id},r.a.createElement(V,{key:e.id,image:e.image,id:e.id,title:e.title}))}))))))},ae=n(3),re={resumeSection:{height:"100%",minHeight:"100vh",width:"100%",display:"flex",flex:"1 0 auto",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundImage:"url(./bg.svg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},resumeTitle:{fontSize:"6vw",color:"rgb(204, 204, 204)",marginBottom:"2rem"}};var ie=function(){return r.a.createElement("section",{style:re.resumeSection},r.a.createElement("span",{style:re.resumeTitle},"Resume"),r.a.createElement(_.Grid,null,r.a.createElement(_.Row,{center:"xs"},r.a.createElement(_.Col,{xs:12,sm:6,md:4},r.a.createElement(ae.Timeline,{dateFormat:"ll"},r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2020/10",currentYear:!0}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"Freelancer"},r.a.createElement(ae.Description,{text:"Description"}),r.a.createElement(ae.Description,{text:"Another description"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2019/03",endDate:"2020/05"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"CERN"},r.a.createElement(ae.Description,{text:"Full Stack Developer"}),r.a.createElement(ae.Description,{text:"Technical studentship"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2017/01",endDate:"2018/12"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"BeHappy.io"},r.a.createElement(ae.Description,{text:"iOS Developer"}),r.a.createElement(ae.Description,{text:"Another description"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2017/06",endDate:"2018/06"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"uKOD"},r.a.createElement(ae.Description,{text:"Description"}),r.a.createElement(ae.Description,{text:"Another description"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2016/10",endDate:"2017/07"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"Artists Entertainment"},r.a.createElement(ae.Description,{text:"Full Stack Developer"}),r.a.createElement(ae.Description,{text:"Another description"})))))),r.a.createElement(_.Col,{xs:12,sm:6,md:4},r.a.createElement(ae.Timeline,{dateFormat:"ll"},r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2020/07/01",currentYear:!0}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"Title3"},r.a.createElement(ae.Description,{variant:"subtitle",text:"Subtitle"}),r.a.createElement(ae.Description,{text:"Description3"}),r.a.createElement(ae.Description,{text:"Another description3"})),r.a.createElement(ae.Section,{title:"Another title3"},r.a.createElement(ae.Description,{text:"Description3"}),r.a.createElement(ae.Description,{text:"Another description3"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2020/07/01",currentYear:!0}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"Title3"},r.a.createElement(ae.Description,{variant:"subtitle",text:"Subtitle"}),r.a.createElement(ae.Description,{text:"Description3"}),r.a.createElement(ae.Description,{text:"Another description3"})),r.a.createElement(ae.Section,{title:"Another title3"},r.a.createElement(ae.Description,{text:"Description3"}),r.a.createElement(ae.Description,{text:"Another description3"})))))),r.a.createElement(_.Col,{xs:12,sm:6,md:4},r.a.createElement(ae.Timeline,{dateFormat:"ll"},r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2016/10",endDate:"2020/05"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"AGH University of Science and Technology"},r.a.createElement(ae.Description,{text:"Mechatronic Engineering"}),r.a.createElement(ae.Description,{text:"Bachelor's degree"})))),r.a.createElement(ae.Container,null,r.a.createElement(ae.YearContent,{startDate:"2012/09",endDate:"2016/06"}),r.a.createElement(ae.BodyContent,null,r.a.createElement(ae.Section,{title:"Upper Secondary School of Communication"},r.a.createElement(ae.Description,{text:"IT Specialist"})))))))))},oe=n(39),ce=n.n(oe),le={background:{position:"absolute",top:"0",left:"0",zIndex:"1",height:"100vh",maxHeight:"100vh",width:"100vw"}},se=function(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),i=n[0],o=n[1],c=Object(a.useRef)(null);return Object(a.useEffect)((function(){return i||o(ce()({el:c.current,backgroundColor:"#0e0d0d",color:"#ffffff",color2:"#0e0d0d",mouseControls:!0,touchControls:!1,gyroControls:!0,scale:1,scaleMobile:1,size:1.7,spacing:29})),function(){i&&i.destroy()}}),[i]),r.a.createElement("div",{ref:c,style:le.background})},me={contentSection:{fontFamily:"Montserrat",position:"relative",zIndex:"100",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center"},root:{backgroundColor:"#0e0d0d"}};var ue=function(e){return r.a.createElement(p.b.div,{style:me.root,initial:{opacity:0},animate:{opacity:1}},r.a.createElement("section",{style:me.contentSection},r.a.createElement(A,null),r.a.createElement(se,null),r.a.createElement(ne,null),r.a.createElement(ie,null),r.a.createElement(T,null)))},de=function(){return r.a.createElement("div",null,"Ups! 404 Not Found")};var pe=function(e){return r.a.createElement(p.b.section,{key:e.id,style:void 0===e.style?{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"}:e.style,animate:{opacity:1,scale:.95,transition:{duration:1,ease:[.43,.13,.23,.96]}},initial:{opacity:0,scale:1}},e.children)},fe={root:{backgroundColor:"#0e0d0d"}};function he(){var e=Object(Y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  width: calc(100% - 5rem);\n  margin-left: 4rem;\n  justify-content: center;\n"]);return he=function(){return e},e}var Ee=F.a.div(he());var ge=function(e){return r.a.createElement("div",{style:fe.root},r.a.createElement(pe,null,r.a.createElement("h1",null,"PROJECTS"),r.a.createElement(Ee,null,ee&&Object.values(ee).map((function(e,t){return r.a.createElement(V,{size:Object.keys(ee).length,index:t,key:e.id,id:e.id,title:e.title,image:e.image,irregularGrid:!0})})))))},be=function(e){return r.a.createElement("div",{style:fe.root},r.a.createElement(pe,{id:"articles"},r.a.createElement("h1",null,"Articles")))},ve={contentSection:{fontFamily:"Montserrat",display:"flex",flexDirection:"column",alignItems:"center",height:"100%",minHeight:"100vh",width:"100%",justifyContent:"center",color:"white"},root:{backgroundColor:"#0e0d0d"}};var xe=function(e){var t=Object(l.g)().projectId;return r.a.createElement("div",{style:ve.root},r.a.createElement(pe,{id:t},r.a.createElement("h1",null,t)))},ye=function(e){return r.a.createElement("div",{style:fe.root},r.a.createElement(pe,{id:"about"},r.a.createElement("h1",null,"About me"),r.a.createElement("img",{src:"./test.png",style:{height:"75vh",bottom:"-25px",right:"2rem",position:"absolute"},alt:"le me"})))},je=n(31),we=n.n(je),Ce=n(40),De=n(41),Oe=n(42),Se=n(44),ke=n(43);var Te,Be=(Te=function(){return r.a.createElement(c.a,null,r.a.createElement(p.a,{exitBeforeEnter:!0},r.a.createElement(l.d,null,r.a.createElement(O,{exact:!0,path:"/",component:ue}),r.a.createElement(O,{exact:!0,path:"/projects",component:ge}),r.a.createElement(O,{exact:!0,path:"/articles",component:be}),r.a.createElement(O,{exact:!0,path:"/about",component:ye}),r.a.createElement(O,{exact:!0,path:"/projects/:projectId",component:xe}),r.a.createElement(k,{exact:!0,path:"/404",component:de}),r.a.createElement(l.a,{to:"/404"}))))},function(e){Object(Se.a)(n,e);var t=Object(ke.a)(n);function n(){var e;Object(De.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0},e}return Object(Oe.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Ce.a)(we.a.mark((function e(){var t=this;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{setTimeout((function(){t.setState({loading:!1})}),2e3)}catch(n){console.log(n),this.setState({loading:!1})}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{style:{width:"100vw",height:"100vh",position:"absolute",overflow:"hidden",zIndex:999999,backgroundColor:"#0e0d0d"}},r.a.createElement(p.b.div,{style:{position:"absolute",backgroundColor:"black",width:"100vw",height:"4px",top:"calc(50vh - 2px)",zIndex:99},x:"-100%",animate:{x:"100%"},transition:{duration:1,ease:"easeOut"}}),r.a.createElement(p.b.div,{animate:{y:"-100%"},transition:{duration:1,ease:"easeOut",delay:1},style:{backgroundColor:"#fafafa",width:"100vw",height:"50vh"}}),r.a.createElement(p.b.div,{animate:{y:"100%"},transition:{duration:1,ease:"easeOut",delay:1},style:{backgroundColor:"#fafafa",width:"100vw",height:"50vh"}})):r.a.createElement(Te,this.props)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.8dec0c5e.chunk.js.map