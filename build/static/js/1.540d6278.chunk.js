(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[1],{275:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(364))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},308:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(362))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},309:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(366))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},362:function(e,t,n){"use strict";var r=n(25),o=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(363)),c=r(n(47)),s=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="CheckCircleFilled";var l=i.forwardRef(s);t.default=l},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"}},364:function(e,t,n){"use strict";var r=n(25),o=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(365)),c=r(n(47)),s=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="CloseCircleFilled";var l=i.forwardRef(s);t.default=l},365:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"}},366:function(e,t,n){"use strict";var r=n(25),o=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(367)),c=r(n(47)),s=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="ExclamationCircleFilled";var l=i.forwardRef(s);t.default=l},367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"}},599:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(54),o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=0!==r.a.endEvents.length,a=["Webkit","Moz","O","ms"],c=["-webkit-","-moz-","-o-","ms-",""];function s(e,t){for(var n=window.getComputedStyle(e,null),r="",o=0;o<c.length&&!(r=n.getPropertyValue(c[o]+t));o++);return r}function l(e){if(i){var t=parseFloat(s(e,"transition-delay"))||0,n=parseFloat(s(e,"transition-duration"))||0,r=parseFloat(s(e,"animation-delay"))||0,o=parseFloat(s(e,"animation-duration"))||0,a=Math.max(n+t,o+r);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener()}),1e3*a+200)}}function u(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null)}var f=function(e,t,n){var i="object"===("undefined"===typeof t?"undefined":o(t)),a=i?t.name:t,c=i?t.active:t+"-active",s=n,f=void 0,p=void 0;return n&&"[object Object]"===Object.prototype.toString.call(n)&&(s=n.end,f=n.start,p=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),u(e),e.classList.remove(a),e.classList.remove(c),r.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,s&&s())},r.a.addEndEventListener(e,e.rcEndListener),f&&f(),e.classList.add(a),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,e.classList.add(c),p&&setTimeout(p,0),l(e)}),30),{stop:function(){e.rcEndListener&&e.rcEndListener()}}};f.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),u(e),r.a.removeEndEventListener(e,e.rcEndListener),e.rcEndListener=null,n&&n())},r.a.addEndEventListener(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,l(e)}),0)},f.setTransition=function(e,t,n){var r=t,o=n;void 0===n&&(o=r,r=""),r=r||"",a.forEach((function(t){e.style[t+"Transition"+r]=o}))},f.isCssAnimationSupported=i,t.a=f},600:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(601))&&r.__esModule?r:{default:r};t.default=o,e.exports=o},601:function(e,t,n){"use strict";var r=n(25),o=n(33);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(0)),a=r(n(602)),c=r(n(47)),s=function(e,t){return i.createElement(c.default,Object.assign({},e,{ref:t,icon:a.default}))};s.displayName="InfoCircleFilled";var l=i.forwardRef(s);t.default=l},602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"}},853:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");return"function"!==typeof t.componentWillReceiveProps?e:o.a.Profiler?(t.UNSAFE_componentWillReceiveProps=t.componentWillReceiveProps,delete t.componentWillReceiveProps,e):e};function a(e){var t=[];return o.a.Children.forEach(e,(function(e){t.push(e)})),t}function c(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e)})),n}function s(e,t,n){var r=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(r)throw new Error("two child with same key for <rc-animate> children");r=e}})),r}var l=n(5),u=n.n(l),f=n(599),p={isAppearSupported:function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},isEnterSupported:function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},isLeaveSupported:function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},allowAppearCallback:function(e){return e.transitionAppear||e.animation.appear},allowEnterCallback:function(e){return e.transitionEnter||e.animation.enter},allowLeaveCallback:function(e){return e.transitionLeave||e.animation.leave}},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var v={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentWillEnter",value:function(e){p.isEnterSupported(this.props)?this.transition("enter",e):e()}},{key:"componentWillAppear",value:function(e){p.isAppearSupported(this.props)?this.transition("appear",e):e()}},{key:"componentWillLeave",value:function(e){p.isLeaveSupported(this.props)?this.transition("leave",e):e()}},{key:"transition",value:function(e,t){var n=this,r=u.a.findDOMNode(this),o=this.props,i=o.transitionName,a="object"===typeof i;this.stop();var c=function(){n.stopper=null,t()};if((f.b||!o.animation[e])&&i&&o[v[e]]){var s=a?i[e]:i+"-"+e,l=s+"-active";a&&i[e+"Active"]&&(l=i[e+"Active"]),this.stopper=Object(f.a)(r,{name:s,active:l},c)}else this.stopper=o.animation[e](r,c)}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop())}},{key:"render",value:function(){return this.props.children}}]),t}(o.a.Component),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var b="rc_animate_"+Date.now();function E(e){var t=e.children;return o.a.isValidElement(t)&&!t.key?o.a.cloneElement(t,{key:b}):t}function k(){}var O=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return g.call(n),n.currentlyAnimatingKeys={},n.keysToEnter=[],n.keysToLeave=[],n.state={children:a(E(e))},n.childrenRefs={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),h(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return!!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key)}))}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.nextProps=e;var n=a(E(e)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){t.stop(e)}));var i=r.showProp,l=this.currentlyAnimatingKeys,u=r.exclusive?a(E(r)):this.state.children,f=[];i?(u.forEach((function(e){var t,r,a,s=e&&c(n,e.key),l=void 0;(l=s&&s.props[i]||!e.props[i]?s:o.a.cloneElement(s||e,(a=!0,(r=i)in(t={})?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t)))&&f.push(l)})),n.forEach((function(e){e&&c(u,e.key)||f.push(e)}))):f=function(e,t){var n=[],r={},o=[];return e.forEach((function(e){e&&c(t,e.key)?o.length&&(r[e.key]=o,o=[]):o.push(e)})),t.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(r,e.key)&&(n=n.concat(r[e.key])),n.push(e)})),n=n.concat(o)}(u,n),this.setState({children:f}),n.forEach((function(e){var n=e&&e.key;if(!e||!l[n]){var r=e&&c(u,n);if(i){var o=e.props[i];if(r)!s(u,n,i)&&o&&t.keysToEnter.push(n);else o&&t.keysToEnter.push(n)}else r||t.keysToEnter.push(n)}})),u.forEach((function(e){var r=e&&e.key;if(!e||!l[r]){var o=e&&c(n,r);if(i){var a=e.props[i];if(o)!s(n,r,i)&&a&&t.keysToLeave.push(r);else a&&t.keysToLeave.push(r)}else o||t.keysToLeave.push(r)}}))}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?s(e,t,n):c(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop()}},{key:"render",value:function(){var e=this,t=this.props;this.nextProps=t;var n=this.state.children,r=null;n&&(r=n.map((function(n){if(null===n||void 0===n)return n;if(!n.key)throw new Error("must set key for <rc-animate> children");return o.a.createElement(m,{key:n.key,ref:function(t){e.childrenRefs[n.key]=t},animation:t.animation,transitionName:t.transitionName,transitionEnter:t.transitionEnter,transitionAppear:t.transitionAppear,transitionLeave:t.transitionLeave},n)})));var i=t.component;if(i){var a=t;return"string"===typeof i&&(a=y({className:t.className,style:t.style},t.componentProps)),o.a.createElement(i,a,r)}return r[0]||null}}]),t}(o.a.Component);O.isAnimate=!0,O.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:k,onEnter:k,onLeave:k,onAppear:k};var g=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")))},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")))},this.handleDoneAdding=function(t,n){var r=e.props;if(delete e.currentlyAnimatingKeys[t],!r.exclusive||r===e.nextProps){var o=a(E(r));e.isValidChildByKey(o,t)?"appear"===n?p.allowAppearCallback(r)&&(r.onAppear(t),r.onEnd(t,!0)):p.allowEnterCallback(r)&&(r.onEnter(t),r.onEnd(t,!0)):e.performLeave(t)}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)))},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var r=a(E(n));if(e.isValidChildByKey(r,t))e.performEnter(t);else{var o=function(){p.allowLeaveCallback(n)&&(n.onLeave(t),n.onEnd(t,!1))};!function(e,t,n){var r=e.length===t.length;return r&&e.forEach((function(e,o){var i=t[o];e&&i&&(e&&!i||!e&&i?r=!1:e.key!==i.key?r=!1:n&&e.props[n]!==i.props[n]&&(r=!1))})),r}(e.state.children,r,n.showProp)?e.setState({children:r},o):o()}}}};t.a=i(O)},869:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(1),a=n.n(i),c=n(34),s=n(2),l=n(8),u=n(9),f=n(11),p=n(10),d=n(4),v=n(5),m=n.n(v),y=n(853),h=n(119);function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var E=function(e){Object(f.a)(n,e);var t=b(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).closeTimer=null,e.close=function(t){t&&t.stopPropagation(),e.clearCloseTimer();var n=e.props.onClose;n&&n()},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout((function(){e.close()}),1e3*e.props.duration))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(e){(this.props.duration!==e.duration||this.props.update)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,i=t.closable,c=t.closeIcon,l=t.style,u=t.onClick,f=t.children,p=t.holder,d="".concat(n,"-notice"),v=Object.keys(this.props).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||(t[n]=e.props[n]),t}),{}),y=o.a.createElement("div",Object.assign({className:a()(d,r,Object(s.a)({},"".concat(d,"-closable"),i)),style:l,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:u},v),o.a.createElement("div",{className:"".concat(d,"-content")},f),i?o.a.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(d,"-close")},c||o.a.createElement("span",{className:"".concat(d,"-close-x")})):null);return p?m.a.createPortal(y,p):y}}]),n}(r.Component);E.defaultProps={onClose:function(){},duration:1.5,style:{right:"50%"}};var k=n(68),O=n(24);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(p.a)(this,n)}}var w=0,T=Date.now();var P=function(e){Object(f.a)(n,e);var t=C(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).state={notices:[]},e.hookRefs=new Map,e.add=function(t,n){t.key=t.key||function(){var e=w;return w+=1,"rcNotification_".concat(T,"_").concat(e)}();var r=t.key,o=e.props.maxCount;e.setState((function(e){var i=e.notices,a=i.map((function(e){return e.notice.key})).indexOf(r),c=i.concat();return-1!==a?c.splice(a,1,{notice:t,holderCallback:n}):(o&&i.length>=o&&(t.updateKey=c[0].notice.updateKey||c[0].notice.key,c.shift()),c.push({notice:t,holderCallback:n})),{notices:c}}))},e.remove=function(t){e.setState((function(e){return{notices:e.notices.filter((function(e){return e.notice.key!==t}))}}))},e}return Object(u.a)(n,[{key:"getTransitionName",value:function(){var e=this.props,t=e.prefixCls,n=e.animation,r=this.props.transitionName;return!r&&n&&(r="".concat(t,"-").concat(n)),r}},{key:"render",value:function(){var e=this,t=this.state.notices,n=this.props,r=n.prefixCls,i=n.className,c=n.closeIcon,s=n.style,l=t.map((function(n,i){var a=n.notice,s=n.holderCallback,l=Boolean(i===t.length-1&&a.updateKey),u=a.updateKey?a.updateKey:a.key,f=Object(h.a)(e.remove.bind(e,a.key),a.onClose),p=j(j(j({prefixCls:r,closeIcon:c},a),a.props),{},{key:u,update:l,onClose:f,onClick:a.onClick,children:a.content});return s?o.a.createElement("div",{key:u,className:"".concat(r,"-hook-holder"),ref:function(t){"undefined"!==typeof u&&(t?(e.hookRefs.set(u,t),s(t,p)):e.hookRefs.delete(u))}}):o.a.createElement(E,Object.assign({},p))}));return o.a.createElement("div",{className:a()(r,i),style:s},o.a.createElement(y.a,{transitionName:this.getTransitionName()},l))}}]),n}(r.Component);P.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},P.newInstance=function(e,t){var n=e||{},i=n.getContainer,a=Object(c.a)(n,["getContainer"]),s=document.createElement("div");i?i().appendChild(s):document.body.appendChild(s);var l=!1;m.a.render(o.a.createElement(P,Object.assign({},a,{ref:function(e){l||(l=!0,t({notice:function(t){e.add(t)},removeNotice:function(t){e.remove(t)},component:e,destroy:function(){m.a.unmountComponentAtNode(s),s.parentNode&&s.parentNode.removeChild(s)},useNotification:function(){return function(e){var t=r.useRef({}),n=r.useState([]),o=Object(O.a)(n,2),i=o[0],a=o[1];return[function(n){e.add(n,(function(e,n){var o=n.key;if(e&&!t.current[o]){var i=r.createElement(E,Object.assign({},n,{holder:e}));t.current[o]=i,a((function(e){return[].concat(Object(k.a)(e),[i])}))}}))},r.createElement(r.Fragment,null,i)]}(e)}}))}})),s)};var L=P,_=n(72),A=n.n(_),N=n(309),x=n.n(N),R=n(275),S=n.n(R),M=n(308),D=n.n(M),K=n(600);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F,B,I,V,U=3,J=1,H="ant-message",q="move-up",G=!1;var Q={info:n.n(K).a,success:D.a,error:S.a,warning:x.a,loading:A.a};var X={open:function(e){var t,n=void 0!==e.duration?e.duration:U,o=Q[e.type],i=a()("".concat(H,"-custom-content"),(z(t={},"".concat(H,"-").concat(e.type),e.type),z(t,"".concat(H,"-rtl"),!0===G),t)),c=e.key||J++,s=new Promise((function(t){var a=function(){return"function"===typeof e.onClose&&e.onClose(),t(!0)};!function(e){B?e(B):L.newInstance({prefixCls:H,transitionName:q,style:{top:F},getContainer:I,maxCount:V},(function(t){B?e(B):(B=t,e(t))}))}((function(t){t.notice({key:c,duration:n,style:e.style||{},className:e.className,content:r.createElement("div",{className:i},e.icon||o&&r.createElement(o,null),r.createElement("span",null,e.content)),onClose:a})}))})),l=function(){B&&B.removeNotice(c)};return l.then=function(e,t){return s.then(e,t)},l.promise=s,l},config:function(e){void 0!==e.top&&(F=e.top,B=null),void 0!==e.duration&&(U=e.duration),void 0!==e.prefixCls&&(H=e.prefixCls),void 0!==e.getContainer&&(I=e.getContainer),void 0!==e.transitionName&&(q=e.transitionName,B=null),void 0!==e.maxCount&&(V=e.maxCount,B=null),void 0!==e.rtl&&(G=e.rtl)},destroy:function(){B&&(B.destroy(),B=null)}};["success","info","warning","error","loading"].forEach((function(e){X[e]=function(t,n,r){return function(e){return"[object Object]"===Object.prototype.toString.call(e)&&!!e.content}(t)?X.open(W(W({},t),{type:e})):("function"===typeof n&&(r=n,n=void 0),X.open({content:t,duration:n,type:e,onClose:r}))}})),X.warn=X.warning;t.a=X}}]);
//# sourceMappingURL=1.540d6278.chunk.js.map