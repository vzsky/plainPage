(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),l=n("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var c=f[u];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var s=o.props[c],d=r[c]||new Set;d.has(s)?a=!1:(d.add(s),r[c]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var p=a.default();function v(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),a=n("i2R6"),i=n("tCBg"),u=n("T0f4"),l=n("48fX"),c=n("mPvQ");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){l(v,c);var f,p=(f=v,function(){var e,t=u(f);if(s()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function v(e){var a;return r(this,v),a=p.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(f.Component)}},hUgY:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=n("vOnD"),l=n("17x9"),c=n.n(l),s=n("U7WQ");u.ThemeContext.Extend=function(e){var t=e.children,n=e.value;return o.a.createElement(u.ThemeContext.Consumer,null,(function(e){return o.a.createElement(u.ThemeContext.Provider,{value:Object(s.b)(e,n)},t)}))},u.ThemeContext.Extend.propTypes={children:c.a.node.isRequired,value:c.a.shape({}).isRequired};var f=n("4416"),d=function(e,t){var n;return Object.keys(t.global.breakpoints).sort((function(e,n){var r=t.global.breakpoints[e],o=t.global.breakpoints[n];return r?o?r.value?o.value?r.value-o.value:-1:1:-1:1})).some((function(r){var o=t.global.breakpoints[r];return!(!o||o.value&&!(o.value>=e))&&(n=r,!0)})),n},p=function(e,t){return t.global.deviceBreakpoints[e]},v=n("cVt8"),h=n("ilUv"),m=n("dblU"),b=n("/Rk8"),y=n("+Wdg"),g=Object(u.css)(["width:100vw;height:100vh;overflow:auto;"]),w=u.default.div.withConfig({displayName:"StyledGrommet",componentId:"sc-19lkkz7-0"})([""," "," "," "," ",""],(function(e){return!e.plain&&b.a}),(function(e){return e.full&&g}),(function(e){return e.theme.global.font.face}),(function(e){return e.theme.grommet.extend}),(function(e){return e.cssVars&&Object.keys(e.theme.global.colors).filter((function(t){return"string"===typeof e.theme.global.colors[t]})).map((function(t){return"--"+t+": "+e.theme.global.colors[t]+";"})).join("\n")}));function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  body { margin: 0; }\n"]);return P=function(){return e},e}w.defaultProps={},Object.setPrototypeOf(w.defaultProps,y.a);var C=Object(u.createGlobalStyle)(P()),x=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return O(_(t=e.call.apply(e,[this].concat(r))||this),"state",{}),O(_(t),"onResize",(function(){var e=t.state,n=e.theme,r=e.responsive,o=d(window.innerWidth,n);o!==r&&t.setState({responsive:o})})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.getDerivedStateFromProps=function(e,t){var n=e.background,r=e.dir,o=e.theme,a=void 0===o?{}:o,i=e.themeMode,u=t.theme,l=t.themeProp,c=t.themeModeProp,f=Object(s.b)(m.a,a);if(!u||a!==l||i!==c){var d=f.global.colors.background;f.dark="dark"===(i||a.defaultMode);var p=Object(v.c)(n||d,f);return f.dark=Object(h.a)(p,f),f.baseBackground=n||d,r&&(f.dir=r),{theme:f,themeProp:a,themeModeProp:i}}return null};var a=r.prototype;return a.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},a.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},a.deviceResponsive=function(){var e=this.props.userAgent,t=this.state.theme;if(e)return/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(e)?p("tablet",t):/Mobile|iPhone|Android/.test(e)?p("phone",t):p("computer",t)},a.render=function(){var e=this.props,t=e.children,n=e.full,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["children","full"]);delete r.theme;var a=this.state,i=a.theme,l=a.responsive||this.deviceResponsive()||i.global.deviceBreakpoints.tablet;return o.a.createElement(u.ThemeContext.Provider,{value:i},o.a.createElement(f.a.Provider,{value:l},o.a.createElement(w,k({full:n},r),t),n&&o.a.createElement(C,null)))},r}(r.Component);O(x,"displayName","Grommet");var E=x,S=o.a.createElement,j={name:"my99n",defaultMode:"light",global:{colors:{brand:"#F0544F",background:"#5BC0BE","accent-1":"#F22B29","light-1":"#FFC15E","dark-1":"#262F30"},font:{family:"Roboto",size:"20px",height:"20px"}}};t.default=function(e){var t=e.Component,n=e.pageProps;return S(E,{full:!0,theme:j},S(t,n),S(i.a,null,S("title",null," my99n ")))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||a()}},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}}},[[0,0,1,3,2]]]);