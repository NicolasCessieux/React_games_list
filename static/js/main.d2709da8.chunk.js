(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},31:function(e,t,a){e.exports=a(64)},36:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),o=a(13),s=(a(36),a(6)),l=a(7),m=a(9),u=a(8),h=a(10),p=a(11),d=(a(14),a(28)),g=a.n(d),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Card"},r.a.createElement("img",{src:this.props.game.pochette,alt:""}),r.a.createElement("h1",null,this.props.game.name),r.a.createElement("p",null,this.props.game.description),r.a.createElement(o.b,{to:"/trailer/".concat(this.props.game.id)},r.a.createElement("button",{className:"PromoButton",type:"button",onClick:""},"See the trailer")),r.a.createElement("button",{className:"Button",type:"button",onClick:function(){return e.props.removeGame(e.props.game.id)}},"Remove"))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"cleanArray",value:function(e){for(var t=e.length,a=[],n={},r=0;r<t;r++)n[e[r].theme]=0;for(var c in n)a.push(c);return a}},{key:"render",value:function(){var e=this,t=this.cleanArray(this.props.games);return t.sort(),r.a.createElement("div",null,r.a.createElement("select",{className:"Select",onChange:function(t){return e.props.handleThemeChange(t.target.value)}},r.a.createElement("option",{value:""},"Sort by theme"),t.map(function(e){return r.a.createElement("option",{value:e},e)})))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).removeGame=function(e){for(var t=a.state.games,n=0;n<t.length;n++)t[n].id===e&&t.splice(n,1);a.setState({games:t})},a.handleThemeChange=function(e){a.setState({theme:e})},a.state={games:[],theme:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.a.get("http://www.campus-bordeaux.ovh:3002/joysticks/api/games").then(function(t){e.setState({games:t.data}),e.props.handleApi(t.data)})}},{key:"render",value:function(){var e=this;return""!==this.state.theme?r.a.createElement("div",null,r.a.createElement(f,{games:this.state.games,key:this.state.games.id,handleThemeChange:this.handleThemeChange}),r.a.createElement("div",{className:"List"},this.state.games.filter(function(t){return t.theme===e.state.theme}).map(function(t){return r.a.createElement(v,{game:t,key:t.id,removeGame:e.removeGame})}))):r.a.createElement("div",null,r.a.createElement(f,{games:this.state.games,key:this.state.games.id,handleThemeChange:this.handleThemeChange}),r.a.createElement("div",{className:"List"},this.state.games.map(function(t){return r.a.createElement(v,{game:t,key:t.id,removeGame:e.removeGame})})))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleApi=function(e){a.setState({games:e})},a.state={games:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(b,Object.assign({},t,{handleApi:e.handleApi}))}}),this.state.games.map(function(e){return r.a.createElement(p.a,{path:"/trailer/".concat(e.id),component:function(){return window.location="".concat(e.trailer),null}})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.d2709da8.chunk.js.map