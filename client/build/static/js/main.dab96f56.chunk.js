(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,a){e.exports=a(168)},114:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),s=(a(114),a(11)),i=a(7),c=a(12),u=a(13),p=a(14),h=a(214),d=a(216),m=a(212),f=a(17),g=a(34),b=a(93),E={},O=a(25),v=a(22),j={isAuthenticated:!1,user:null},w={list:null,loading:!1},y={loading:!1,user:null},k=Object(g.c)({errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(v.a)({},e,{isAuthenticated:0!==Object.keys(t.payload).length,user:t.payload});case"FOLLOW":return Object(v.a)({},e,{user:Object(v.a)({},e.user,{following:[].concat(Object(O.a)(e.user.following),[t.payload])})});case"UNFOLLOW":return Object(v.a)({},e,{user:Object(v.a)({},e.user,{following:e.user.following.filter((function(e){return e!==t.payload}))})});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(v.a)({},e,{list:[t.payload].concat(Object(O.a)(e.list))});case"LOADING_POSTS":return Object(v.a)({},e,{loading:!0});case"GET_POSTS":return Object(v.a)({},e,{loading:!1,list:t.payload});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PROFILE":return Object(v.a)({},e,{loading:!0});case"GET_PROFILE":return Object(v.a)({},e,{lodaing:!1,user:t.payload});default:return e}}}),C=Object(g.d)(k,Object(g.a)(b.a)),S=a(209),T=a(26),x=a(207),N=a(208),P=a(205),I=a(101),A=a(217),L=a(98),U=a.n(L),R=a(97),F=a.n(R),B=a(206),_=a(5),D=a(18),G=a.n(D),W=function(e){G.a.defaults.headers.common.Authorization=e?"Bearer "+e:null},z=function(){return function(e){G.a.get("http://localhost:1234/api/users").then((function(t){return e(M(t.data))}))}},M=function(e){return{type:"SET_CURRENT_USER",payload:e}},J=function(){return function(e){localStorage.removeItem("jwtToken"),W(),e(M())}},K=a(15),q=a(220),H=a(94),Q=a.n(H),V=a(65),X=a(215),Y=function(){return{type:"LOADING_POSTS"}},Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){var t={text:e.target.value};"Enter"===e.key&&a.props.searchUser(t,a.props.history)},a.state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(Q.a,null)),r.a.createElement(q.a,{placeholder:"Search user",classes:{root:e.inputRoot,input:e.inputInput},onKeyPress:this.handleSubmit}))}}]),t}(n.Component),$=Object(f.b)(null,{searchUser:function(e,t){return function(a){G.a.post("http://localhost:1234/api/users/search",e).then((function(e){t.push("/profile/".concat(e.data.userId))})).catch((function(e){return t.push("/search")}))}}})(Object(X.a)(Object(_.a)((function(e){return{search:Object(K.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(V.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(V.fade)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}}))(Z))),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.state={anchorEl:null},a.handleLogout=a.handleLogout.bind(Object(T.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleLogout",value:function(){this.setState({anchorEl:null}),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.isAuthenticated,n=e.user,o=this.state.anchorEl,l=Boolean(o),s=r.a.createElement("div",null,r.a.createElement(P.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",color:"inherit",onClick:this.handleMenu},r.a.createElement(F.a,null)),r.a.createElement(I.a,{id:"menu-appbar",open:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},anchorEl:o,onClose:this.handleClose},r.a.createElement(A.a,{onClick:this.handleClose},r.a.createElement(B.a,{to:"/login"},"Login")),r.a.createElement(A.a,{onClick:this.handleClose},r.a.createElement(B.a,{to:"/register"},"Register")))),i=a&&r.a.createElement("div",null,r.a.createElement(P.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",color:"inherit",onClick:this.handleMenu},r.a.createElement(U.a,null)),r.a.createElement(I.a,{id:"menu-appbar",open:l,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},anchorEl:o,onClose:this.handleClose},r.a.createElement(A.a,{onClick:this.handleClose},r.a.createElement(B.a,{to:"/profile/".concat(n._id)},"Profile")),r.a.createElement(A.a,null,r.a.createElement(B.a,{to:"/#",onClick:this.handleLogout},"Logout"))));return r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{position:"static",style:{backgroundColor:"#008080"}},r.a.createElement(N.a,{className:t.space},r.a.createElement(B.a,{to:"/",className:t.logo},"Twitter-clone"),r.a.createElement($,null),a?i:s)))}}]),t}(n.Component),te=Object(f.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{logoutUser:J})(Object(_.a)({root:{flexGrow:1},logo:{color:"#fff",fontSize:30,textTransform:"uppercase"},space:{justifyContent:"space-between"}})(ee)),ae=a(99),ne=a.n(ae),re=Object(_.a)({root:{textAlign:"center",marginTop:20}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ne.a,{by:"Askat",link:"https://github.com/Askat08",emoji:{using:"\ud83d\udcbb",verb:"made"}}))})),oe=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(te,null),r.a.createElement(S.a,{container:!0,justify:"center"},r.a.createElement(S.a,{item:!0,xs:12,sm:6,style:{marginTop:30}},t)),r.a.createElement(re,null))},le=a(219),se=a(218),ie=a(169),ce=a(213),ue=a(210),pe=function(){return{type:"LOADING_POSTS"}},he=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({text:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t={text:a.state.text};a.props.addPost(t),a.setState({text:""})},a.state={text:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ie.a,{className:e.paper},r.a.createElement(ce.a,{className:e.textField,multiline:!0,rowsMax:"4",label:"What's new?",value:this.state.text,onChange:this.handleChange}),r.a.createElement(ue.a,{variant:"outlined",className:e.button,onClick:this.handleSubmit},"Send"))}}]),t}(n.Component),de=Object(f.b)(null,{addPost:function(e){return function(t){G.a.post("http://localhost:1234/api/posts/add",e).then((function(e){return t({type:"ADD_POST",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(Object(_.a)({paper:{padding:8},textField:{width:"100%"},button:{width:"100%",marginTop:20,marginBottom:20,backgroundColor:"#008080",color:"#fff","&:hover":{color:"#8b008b"}}})(he)),me=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.post;return r.a.createElement(ie.a,{className:t.paper},r.a.createElement("div",{className:t.avatar,style:{backgroundColor:"#".concat(a.user.id.slice(a.user.id.length-3))}}),r.a.createElement("div",null,r.a.createElement("h3",{className:t.login},r.a.createElement(B.a,{to:"/profile/".concat(a.user.id)},a.user.login),r.a.createElement("span",{className:t.time},new Date(a.createdAt).toLocaleString())),a.text))}}]),t}(n.Component),fe=Object(_.a)({paper:{padding:10,display:"flex",marginTop:10},avatar:{minWidth:10,margin:"5px 10px 5px 5px"},login:{marginBottom:5},time:{marginLeft:10,color:"#ccc",fontSize:14}})(me),ge=a(211),be=Object(_.a)({load:{textAlign:"center",marginTop:25,width:"100%"},loadIcon:{color:"#8a2be2"}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.load},r.a.createElement(ge.a,{className:t.loadIcon}))})),Ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({allPosts:e.target.checked})},a.state={allPosts:!0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"componentDidUpdate",value:function(e,t){t.allPosts!==this.state.allPosts&&(this.state.allPosts?this.props.getPosts():this.props.getPostByFollowingUser())}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.loading,n=this.state.allPosts,o=t&&t.map((function(e){return r.a.createElement(fe,{key:e._id,post:e})}));return r.a.createElement("div",null,r.a.createElement(de,null),r.a.createElement(se.a,{control:r.a.createElement(le.a,{checked:n,onChange:this.handleChange}),label:n?"All posts":"From following users"}),a?r.a.createElement(be,null):o)}}]),t}(n.Component),Oe=Object(f.b)((function(e){return{list:e.post.list,loading:e.post.loading}}),{getPosts:function(){return function(e){e(pe),G.a.get("http://localhost:1234/api/posts").then((function(t){return e({type:"GET_POSTS",payload:t.data})})).catch((function(e){return console.log(e)}))}},getPostByFollowingUser:function(){return function(e){G.a.get("http://localhost:1234/api/posts/following").then((function(t){return e({type:"GET_POSTS",payload:t.data})})).catch((function(e){return console.log(e)}))}}})(Ee),ve=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.loginUser(t)},a.state={email:"",password:"",errors:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors}),e.auth.isAuthenticated&&this.props.history.push("/")}},{key:"render",value:function(){var e=this.props.classes,t=this.state.errors;return r.a.createElement(ie.a,{style:{padding:15}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ce.a,{label:"Email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,className:e.textField,helperText:t.email?t.email:"",error:!!t.email}),r.a.createElement(ce.a,{label:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,className:e.textField,helperText:t.password?t.password:"",error:!!t.password}),r.a.createElement("div",{className:e.btnBlock},r.a.createElement(ue.a,{variant:"outlined",type:"submit"},"Login"))))}}]),t}(n.Component),je=Object(f.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){G.a.post("http://localhost:1234/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),W(a),t(z())})).catch((function(e){t({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(X.a)(Object(_.a)({textField:{width:"100%",marginBottom:5},btnBlock:{textAlign:"center",marginBottom:10,marginTop:20}})(ve))),we=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isAuthenticated;return r.a.createElement("div",null,e?r.a.createElement(Oe,null):r.a.createElement(je,null))}}]),t}(n.Component),ye=Object(f.b)((function(e){return{isAuthenticated:!!e.auth.isAuthenticated}}))(we),ke=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,login:a.state.login,password:a.state.password,password2:a.state.password2};a.props.registerUser(t,a.props.history)},a.state={email:"",login:"",password:"",password2:"",errors:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.errors;return r.a.createElement(ie.a,{style:{padding:15}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(ce.a,{label:"Email",type:"email",name:"email",value:this.state.email,onChange:this.handleChange,className:e.textField,helperText:t.email?t.email:"",error:!!t.email}),r.a.createElement(ce.a,{label:"Login",type:"text",name:"login",value:this.state.login,onChange:this.handleChange,className:e.textField,helperText:t.login?t.login:"",error:!!t.login}),r.a.createElement(ce.a,{label:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange,className:e.textField,helperText:t.password?t.password:"",error:!!t.password}),r.a.createElement(ce.a,{label:"Confirm password",type:"password",name:"password2",value:this.state.password2,onChange:this.handleChange,className:e.textField,helperText:t.password2?t.password2:"",error:!!t.password2}),r.a.createElement("div",{className:e.btnBlock},r.a.createElement(ue.a,{variant:"outlined",type:"submit"},"Submit"))))}}]),t}(n.Component),Ce=Object(f.b)((function(e){return{errors:e.errors}}),{registerUser:function(e,t){return function(a){G.a.post("http://localhost:1234/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(X.a)(Object(_.a)({textField:{width:"100%",marginBottom:5},btnBlock:{textAlign:"center",marginBottom:10,marginTop:20}})(ke))),Se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleFollow=function(){a.props.followUser(a.props.match.params.userId)},a.handleUnfollow=function(){a.props.unfollowUser(a.props.match.params.userId)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getPostsByUserId(this.props.match.params.userId),this.props.getUserProfile(this.props.match.params.userId)}},{key:"componentDidUpdate",value:function(e){this.props.auth.isAuthenticated&&e.user&&e.user.following!==this.props.user.following&&this.props.refreshProfile(this.props.match.params.userId)}},{key:"render",value:function(){var e,t,a,n=this.props,o=n.classes,l=n.loadingPosts,s=n.loadingProfile,i=n.list,c=n.auth,u=n.user,p=n.profile;return c.isAuthenticated&&(e=u&&u.following&&-1===u.following.indexOf(this.props.match.params.userId)?r.a.createElement("div",{className:o.btnBlock},r.a.createElement(ue.a,{variant:"outlined",className:o.btnFollow,onClick:this.handleFollow},"follow")):r.a.createElement("div",{className:o.btnBlock},r.a.createElement(ue.a,{variant:"outlined",className:o.btnFollow,onClick:this.handleUnfollow},"unfollow"))),t=i&&i.map((function(e){return r.a.createElement(fe,{key:e._id,post:e})})),p&&t&&(a=r.a.createElement(ie.a,{className:o.paper},r.a.createElement("h1",{className:o.login},p.login),r.a.createElement("div",{className:o.email},p.email),r.a.createElement("div",{className:o.detailsBlock},r.a.createElement("div",{className:o.detail},t.length,r.a.createElement("span",{className:o.detailTitle},"posts")),r.a.createElement("div",{className:o.detail},p.followers.length,r.a.createElement("span",{className:o.detailTitle},"followers")),r.a.createElement("div",{className:o.detail},p.following.length,r.a.createElement("span",{className:o.detailTitle},"following")),e))),r.a.createElement("div",null,s?r.a.createElement("div",null,"Loading"):a,l?r.a.createElement(be,null):t)}}]),t}(n.Component),Te=Object(f.b)((function(e){return{LoadingPosts:e.post.loading,list:e.post.list,profile:e.profile.user,loadingProfile:e.profile.loading,auth:e.auth,user:e.auth.user}}),{getPostsByUserId:function(e){return function(t){t(Y()),G.a.get("http://localhost:1234/api/posts/".concat(e)).then((function(e){return t({type:"GET_POSTS",payload:e.data})})).catch((function(e){return console.log(e)}))}},getUserProfile:function(e){return function(t){G.a.get("http://localhost:1234/api/users/".concat(e)).then((function(e){return t({type:"GET_PROFILE",payload:e.data})})).catch((function(e){return console.log(e)}))}},followUser:function(e){return function(t){G.a.post("http://localhost:1234/api/users/follow",{userId:e}).then((function(e){return t({type:"FOLLOW",payload:e.data.userId})}))}},unfollowUser:function(e){return function(t){G.a.post("http://localhost:1234/api/users/unfollow",{userId:e}).then((function(e){return t({type:"UNFOLLOW",payload:e.data.userId})}))}},refreshProfile:function(e){return function(t){G.a.get("http://localhost:1234/api/users/".concat(e)).then((function(e){return t({type:"GET_PROFILE",payload:e.data})})).catch((function(e){return console.log(e)}))}}})(Object(_.a)({paper:{padding:10},login:{},email:{color:"#888",marginBottom:10},detailsBlock:{display:"flex"},detail:{marginRight:5,fontWeght:"bold"},detailTitle:{marginLeft:5,textTransform:"uppercase",fontSize:10,fontWeght:"normal"},btnBlock:{width:"100%",textAlign:"right"},btnFollow:{backgroundColor:"#008080",color:"#fff","&:hover":{color:"#008080",borderColor:"#008080",backgroundColor:"#fff"}}})(Se)),xe=function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null,"404"),r.a.createElement("h3",null,"Page not found"),r.a.createElement(B.a,{to:"/"},"Go home"))},Ne=function(){return r.a.createElement("h2",{style:{textAlign:"center"}},"User not found")},Pe=a(100),Ie=a.n(Pe);localStorage.getItem("jwtToken")&&(Date.now()/1e3>Ie()(localStorage.getItem("jwtToken")).exp?(C.dispatch(J()),window.location.href="/"):(W(localStorage.getItem("jwtToken")),C.dispatch(z())));var Ae=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:C},r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(oe,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:ye}),r.a.createElement(m.a,{path:"/login",component:je}),r.a.createElement(m.a,{path:"/register",component:Ce}),r.a.createElement(m.a,{path:"/profile/:userId",component:Te}),r.a.createElement(m.a,{path:"/search",component:Ne}),r.a.createElement(m.a,{component:xe}))))))}}]),t}(n.Component);l.a.render(r.a.createElement(Ae,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.dab96f56.chunk.js.map