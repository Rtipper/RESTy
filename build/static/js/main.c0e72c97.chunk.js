(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(20),c=n.n(r),i=(n(27),n(5)),u=n(10),h=n.n(u),j=n(3),o=n(21),l=n(6),d=n(7),p=n(9),b=n(8),O=(n(29),n(22)),x=n.n(O),f=(n(48),n(0));var g=function(){return Object(f.jsx)("header",{children:Object(f.jsx)("div",{id:"topTitle",children:Object(f.jsx)("h1",{children:"RESTy"})})})},m=(n(50),n(11)),v=n.n(m);n(138);var C=function(e){var t=e.resultsHeaders,n=e.searchResults;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h5",{children:"Headers"}),Object(f.jsx)(v.a,{json:t}),Object(f.jsx)("h5",{children:"Results"}),Object(f.jsx)(v.a,{json:n})]})},y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.props.goInput,children:[Object(f.jsxs)("div",{children:["URL: ",Object(f.jsx)("input",{onChange:this.props.handleChange,type:"text",name:"urlInput"}),Object(f.jsx)("button",{children:"CATCH EM' ALL!"})]}),Object(f.jsxs)("div",{className:"radio",children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{onChange:this.props.handleChange,type:"radio",name:"method",value:"get"}),"GET"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{onChange:this.props.handleChange,type:"radio",name:"method",value:"post"}),"POST"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{onChange:this.props.handleChange,type:"radio",name:"method",value:"put"}),"PUT"]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{onChange:this.props.handleChange,type:"radio",name:"method",value:"delete"}),"DELETE"]})]}),Object(f.jsx)("div",{className:"results",children:Object(f.jsx)("p",{className:"results-output",children:Object(f.jsx)(C,{resultsHeaders:this.props.headers,searchResults:this.props.results})})})]})}}]),n}(a.a.Component);n(139);var I=function(){return Object(f.jsx)("footer",{children:"\xa9 2021 Rtipper"})},T=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).goInput=function(){var e=Object(o.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"get"!==s.state.method||!s.state.urlInput){e.next=5;break}return s.setState(Object(j.a)(Object(j.a)({},s.state),{},{search:"".concat(s.state.method," ").concat(s.state.urlInput)})),e.next=5,x.a.get(s.state.urlInput).then((function(e){s.setState(Object(j.a)(Object(j.a)({},s.state),{},{headers:e.headers,results:e.data.results}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.handleChangeInput=function(e){s.setState(Object(j.a)(Object(j.a)({},s.state),{},Object(i.a)({},e.target.name,e.target.value)))},s.state={urlInput:"",method:"",search:"",headers:"",results:""},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"my-app",children:[Object(f.jsx)(g,{}),Object(f.jsx)(y,{handleChange:this.handleChangeInput,goInput:this.goInput,headers:this.state.headers,search:this.state.search,results:this.state.results}),Object(f.jsx)(I,{})]})})}}]),n}(a.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),S()},27:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.c0e72c97.chunk.js.map