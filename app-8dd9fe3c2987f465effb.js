webpackJsonp([0xd2a57dc1d883],{55:function(e,n,t){"use strict";function o(e,n,t){var o=r.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function a(e,n,t){return r.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=a;var r=[{plugin:t(303),options:{plugins:[]}},{plugin:t(302),options:{plugins:[]}}]},141:function(e,n,t){"use strict";n.components={"component---src-pages-landing-js":t(277),"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js":t(275),"component---src-pages-404-js":t(276)},n.json={"layout-default.json":t(278),"index.json":t(299),"docs-getting-started.json":t(298),"docs-examples-simple-usage.json":t(295),"docs-examples-controlled.json":t(286),"docs-examples-multiple-items.json":t(292),"docs-examples-click-to-change.json":t(285),"docs-examples-default-arrows.json":t(288),"docs-examples-custom-arrows.json":t(287),"docs-examples-infinite.json":t(291),"docs-examples-centered.json":t(284),"docs-examples-slides-per-scroll.json":t(296),"docs-examples-draggable.json":t(290),"docs-examples-responsive.json":t(293),"docs-examples-animation.json":t(283),"docs-examples-simple-dots.json":t(294),"docs-examples-dots.json":t(289),"docs-examples-thumbnails.json":t(297),"docs-api-carousel.json":t(281),"docs-api-dots.json":t(282),"404.json":t(279),"landing.json":t(300),"404-html.json":t(280)},n.layouts={"layout---default":t(274)}},142:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t(1),l=o(i),c=t(2),d=(o(c),t(95)),f=o(d),p=t(36),m=o(p),h=t(55),g=t(442),y=o(g),b=function(e){var n=e.children;return l.default.createElement("div",null,n())},v=function(e){function n(t){a(this,n);var o=r(this,e.call(this)),u=t.location;return f.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:f.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=f.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;f.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),f.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){f.default.getPage(e.state.location.pathname)&&n.page.path===f.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,y.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:d.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:b,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(l.default.Component);n.default=v,e.exports=n.default},36:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(414),r=o(a),u=(0,r.default)();e.exports=u},143:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(47),r=t(96),u=o(r),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,n);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,a.matchPath)(r,{path:e.path})||(0,a.matchPath)(r,{path:e.matchPath}))return i=e,s[r]=e,!0}else{if((0,a.matchPath)(r,{path:e.path,exact:!0}))return i=e,s[r]=e,!0;if((0,a.matchPath)(r,{path:e.path+"index.html"}))return i=e,s[r]=e,!0}return!1}),i}}},144:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(130),r=o(a),u=t(55),s=(0,u.apiRunner)("replaceHistory"),i=s[0],l=i||(0,r.default)();e.exports=l},280:function(e,n,t){t(3),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(330)})})}},279:function(e,n,t){t(3),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(331)})})}},281:function(e,n,t){t(3),e.exports=function(e){return t.e(0x80c4094808fb,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(332)})})}},282:function(e,n,t){t(3),e.exports=function(e){return t.e(0x7bbf25f171db,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(333)})})}},283:function(e,n,t){t(3),e.exports=function(e){return t.e(60644076667931,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(334)})})}},284:function(e,n,t){t(3),e.exports=function(e){return t.e(0x769d26a7a28b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(335)})})}},285:function(e,n,t){t(3),e.exports=function(e){return t.e(2011652989075,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(336)})})}},286:function(e,n,t){t(3),e.exports=function(e){return t.e(21083347665352,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(337)})})}},287:function(e,n,t){t(3),e.exports=function(e){return t.e(0xa77b58688eac,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(338)})})}},288:function(e,n,t){t(3),e.exports=function(e){return t.e(31222875792687,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(339)})})}},289:function(e,n,t){t(3),e.exports=function(e){return t.e(0xaeaa9a42a6fd,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(340)})})}},290:function(e,n,t){t(3),e.exports=function(e){return t.e(0xd34cd52a355a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(341)})})}},291:function(e,n,t){t(3),e.exports=function(e){return t.e(0xbde77f400ab2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(342)})})}},292:function(e,n,t){t(3),e.exports=function(e){return t.e(0x765d5511a495,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(343)})})}},293:function(e,n,t){t(3),e.exports=function(e){return t.e(0x67e7def7f492,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(344)})})}},294:function(e,n,t){t(3),e.exports=function(e){return t.e(0x8969b5e0a9fe,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(345)})})}},295:function(e,n,t){t(3),e.exports=function(e){return t.e(48604600120506,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(346)})})}},296:function(e,n,t){t(3),e.exports=function(e){return t.e(0xb2a793120e39,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(347)})})}},297:function(e,n,t){t(3),e.exports=function(e){return t.e(0xd15388900b28,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(348)})})}},298:function(e,n,t){t(3),e.exports=function(e){return t.e(82999037019505,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(349)})})}},299:function(e,n,t){t(3),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(350)})})}},300:function(e,n,t){t(3),e.exports=function(e){return t.e(0x7829c626ce2f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(351)})})}},278:function(e,n,t){t(3),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(88)})})}},274:function(e,n,t){t(3),e.exports=function(e){return t.e(0xb8c01e2297c2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(145)})})}},95:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var a=t(1),r=(o(a),t(143)),u=o(r),s=t(36),i=o(s),l=t(96),c=o(l),d=void 0,f={},p={},m={},h={},g={},y=[],b=[],v={},w="",j=[],x={},k=function(e){return e&&e.default||e},_=void 0,R=!0,N=[],C={},P={},T=5;_=t(146)({getNextQueuedResources:function(){return j.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){j=j.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var E=function(e,n){return x[e]>x[n]?1:x[e]<x[n]?-1:0},O=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?p.components[n]:"layout---"===n.slice(0,9)?p.layouts[n]:p.json[n],o(function(e,o){h[n]=o,N.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),N=N.slice(-T),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):P[n]?e.nextTick(function(){t(P[n])}):L(n,function(e,o){if(e)t(e);else{var a=k(o());g[n]=a,t(e,a)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=N.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),C[e]||(C[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},F=1,I={empty:function(){b=[],v={},x={},j=[],y=[],w=""},addPagesArray:function(e){y=e,w="/gh-pages-rc-1",d=(0,u.default)(e,w)},addDevRequires:function(e){f=e},addProdRequires:function(e){p=e},dequeue:function(){return b.pop()},enqueue:function(e){var n=(0,c.default)(e,w);if(!y.some(function(e){return e.path===n}))return!1;var t=1/F;F+=1,v[n]?v[n]+=1:v[n]=1,I.has(n)||b.unshift(n),b.sort(O);var o=d(n);return o.jsonName&&(x[o.jsonName]?x[o.jsonName]+=1+t:x[o.jsonName]=1+t,j.indexOf(o.jsonName)!==-1||h[o.jsonName]||j.unshift(o.jsonName)),o.componentChunkName&&(x[o.componentChunkName]?x[o.componentChunkName]+=1+t:x[o.componentChunkName]=1+t,j.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||j.unshift(o.componentChunkName)),j.sort(E),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:j,resourcesCount:x}},getPages:function(){return{pathArray:b,pathCount:v}},getPage:function(e){return d(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var a;if(t){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),R=!1;if(C[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=d(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];i.default.emit("onPreLoadPageResources",{path:n});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[n]={component:a,json:r,layout:u,page:o};var e={component:a,json:r,layout:u,page:o};t(e),i.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),a=n,s()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=n,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,s()}))},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:I.getResourcesForPathname};n.default=I}).call(n,t(92))},352:function(e,n){e.exports=[{componentChunkName:"component---src-pages-landing-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-getting-started.json",path:"/docs/gettingStarted"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-simple-usage.json",path:"/docs/examples/simpleUsage"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-controlled.json",path:"/docs/examples/controlled"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-multiple-items.json",path:"/docs/examples/multipleItems"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-click-to-change.json",path:"/docs/examples/clickToChange"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-default-arrows.json",path:"/docs/examples/defaultArrows"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-custom-arrows.json",path:"/docs/examples/customArrows"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-infinite.json",path:"/docs/examples/infinite"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-centered.json",path:"/docs/examples/centered"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-slides-per-scroll.json",path:"/docs/examples/slidesPerScroll"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-draggable.json",path:"/docs/examples/draggable"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-responsive.json",path:"/docs/examples/responsive"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-animation.json",path:"/docs/examples/animation"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-simple-dots.json",path:"/docs/examples/simpleDots"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-dots.json",path:"/docs/examples/dots"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-examples-thumbnails.json",path:"/docs/examples/thumbnails"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-api-carousel.json",path:"/docs/api/carousel"},{componentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-templates-default-js",layout:"layout---default",layoutComponentChunkName:"component---node-modules-brainhubeu-gatsby-docs-kit-src-layouts-default-js",jsonName:"docs-api-dots.json",path:"/docs/api/dots"},{componentChunkName:"component---src-pages-404-js",layout:null,jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-landing-js",layout:null,jsonName:"landing.json",path:"/landing/"},{componentChunkName:"component---src-pages-404-js",layout:null,jsonName:"404-html.json",path:"/404.html"}]},146:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],a=[],r=function(){var e=n();e&&(a.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":a=a.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=t(55),u=t(1),s=o(u),i=t(93),l=o(i),c=t(47),d=t(307),f=t(262),p=o(f),m=t(10),h=t(144),g=o(h),y=t(36),b=o(y),v=t(352),w=o(v),j=t(353),x=o(j),k=t(142),_=o(k),R=t(141),N=o(R),C=t(95),P=o(C);t(183),window.___history=g.default,window.___emitter=b.default,P.default.addPagesArray(w.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=c.matchPath;var T=x.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),E=function(e){var n=T[e];return null!=n&&(g.default.replace(n.toPath),!0)};E(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&i!==!1||(window.___history=e,i=!0,e.listen(function(e,n){E(e.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var a=e.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(147);var o=function(e,n){function t(e){e.page.path===P.default.getPage(a).path&&(b.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(e,null,null,g.default.location),a=o.pathname,r=T[a];r&&(a=r.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=n?window.___history.replace:window.___history.push,i=setTimeout(function(){b.default.off("onPostLoadPageResources",t),b.default.emit("onDelayedLoadPageResources",{pathname:a}),s(o)},1e3);P.default.getResourcesForPathname(a)?(clearTimeout(i),s(o)):b.default.on("onPostLoadPageResources",t)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return s.default.createElement(c.Router,{history:g.default},n)},y=(0,c.withRouter)(_.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(d.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(c.Route,{render:function(t){e(t.history);var o=n?n:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(_.default,a({page:!0},o)):(0,u.createElement)(_.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,r.apiRunner)("replaceHydrateFunction",void 0,l.default.render)[0],m=s.default.createElement(o,null);(0,p.default)(function(){return i(m,"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},353:function(e,n){e.exports=[]},147:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(36),r=o(a),u="/";u="/gh-pages-rc-1/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},96:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},275:function(e,n,t){t(3),e.exports=function(e){return t.e(50971735488461,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(156)})})}},262:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,e=function(){for(t.removeEventListener(a,e),r=1;e=n.shift();)e()}),function(e){r?setTimeout(e,0):n.push(e)}})},264:function(e,n){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(t,"\\$&")}},3:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,i=!0,l=function(e){u&&(u(t,e),u=null)};return!r&&n&&n[o]?void l(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){l()}):l())}),void(s||(i=!1,e(function(){s||(s=!0,r?r[o]=void 0:(n||(n={}),n[o]=!0),l(!0))}))))}}o()},301:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.routeThroughBrowserOrApp=n.hashShouldBeFollowed=n.pathIsNotHandledByApp=n.urlsAreOnSameOrigin=n.authorIsForcingNavigation=n.anchorsTargetIsEquivalentToSelf=n.findClosestAnchor=n.navigationWasHandledElsewhere=n.slashedPathname=n.userIsForcingNavigation=void 0,n.default=function(e,n){var t=g(n);return e.addEventListener("click",t),function(){return e.removeEventListener("click",t)}};var a=t(264),r=o(a),u=t(32),s=n.userIsForcingNavigation=function(e){return 0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey},i=n.slashedPathname=function(e){return"/"===e[0]?e:"/"+e},l=n.navigationWasHandledElsewhere=function(e){return e.defaultPrevented},c=n.findClosestAnchor=function(e){for(;e.parentNode;e=e.parentNode)if("a"===e.nodeName.toLowerCase())return e;return null},d=n.anchorsTargetIsEquivalentToSelf=function(e){return e.hasAttribute("target")===!1||null==e.target||["_self",""].indexOf(e.target)!==-1||"_parent"===e.target&&(!e.ownerDocument.defaultView.parent||e.ownerDocument.defaultView.parent===e.ownerDocument.defaultView)||"_top"===e.target&&(!e.ownerDocument.defaultView.top||e.ownerDocument.defaultView.top===e.ownerDocument.defaultView)},f=n.authorIsForcingNavigation=function(e){return e.hasAttribute("download")===!0||d(e)===!1},p=n.urlsAreOnSameOrigin=function(e,n){return e.protocol===n.protocol&&e.host===n.host},m=n.pathIsNotHandledByApp=function(e){var n=new RegExp("^"+(0,r.default)((0,u.withPrefix)("/"))),t=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return n.test(i(e.pathname))===!1||e.pathname.search(t)!==-1},h=n.hashShouldBeFollowed=function(e,n){return""!==n.hash&&(""===n.pathname||n.pathname===e.pathname)},g=n.routeThroughBrowserOrApp=function(e){return function(n){if(s(n))return!0;if(l(n))return!0;var t=c(n.target);if(null==t)return!0;if(f(t))return!0;var o=document.createElement("a");o.href=t.href;var a=document.createElement("a");return a.href=window.location.href,p(a,o)===!1||(!!m(o)||(!!h(a,o)||(n.preventDefault(),e(""+i(o.pathname)+o.search+o.hash),!1)))}}},302:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=t(32),r=t(301),u=o(r);n.onClientEntry=function(){(0,u.default)(window,function(e){(0,a.navigateTo)(e)})}},303:function(e,n,t){"use strict";var o=function(e){setTimeout(function(){var n=window.decodeURI(window.location.hash.replace("#",""));if(""!==n){var t=document.getElementById(n);if(t){var o=t.offsetTop;window.scrollTo(0,o-e)}}},10)};n.onClientEntry=function(e,n){var t=0;n.offsetY&&(t=n.offsetY)},n.onRouteUpdate=function(e,n){var t=0;n.offsetY&&(t=n.offsetY),o(t)}},131:function(e,n,t){!function(n,t){e.exports=t()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t=Object.defineProperty,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,r=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);return function i(l,c,d){if("string"!=typeof c){if(s){var f=u(c);f&&f!==s&&i(l,f,d)}var p=o(c);a&&(p=p.concat(a(c)));for(var m=0;m<p.length;++m){var h=p[m];if(!(e[h]||n[h]||d&&d[h])){var g=r(c,h);try{t(l,h,g)}catch(e){}}}return l}return l}})},414:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},92:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(c===setTimeout)return setTimeout(e,0);if((c===t||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(n){try{return c.call(null,e,0)}catch(n){return c.call(this,e,0)}}}function r(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function u(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=a(u);h=!0;for(var n=m.length;n;){for(p=m,m=[];++g<n;)p&&p[g].run();g=-1,n=m.length}p=null,h=!1,r(e)}}function i(e,n){this.fun=e,this.array=n}function l(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:t}catch(e){c=t}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,m=[],h=!1,g=-1;f.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new i(e,n)),1!==m.length||h||a(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},94:function(e,n){"use strict";function t(e,n){var t=e.length;e.push(n);e:for(;;){var o=Math.floor((t-1)/2),a=e[o];if(!(void 0!==a&&0<r(a,n)))break e;e[o]=n,e[t]=a,t=o}}function o(e){return e=e[0],void 0===e?null:e}function a(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var o=0,a=e.length;o<a;){var u=2*(o+1)-1,s=e[u],i=u+1,l=e[i];if(void 0!==s&&0>r(s,t))void 0!==l&&0>r(l,s)?(e[o]=l,
e[i]=t,o=i):(e[o]=s,e[u]=t,o=u);else{if(!(void 0!==l&&0>r(l,t)))break e;e[o]=l,e[i]=t,o=i}}}return n}return null}function r(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}function u(e){for(var n=o(S);null!==n;){if(null===n.callback)a(S);else{if(!(n.startTime<=e))break;a(S),n.sortIndex=n.expirationTime,t(L,n)}n=o(S)}}function s(e){if(U=!1,u(e),!M)if(null!==o(L))M=!0,c(i);else{var n=o(S);null!==n&&d(s,n.startTime-e)}}function i(e,t){M=!1,U&&(U=!1,f()),I=!0;var r=F;try{for(u(t),D=o(L);null!==D&&(!(D.expirationTime>t)||e&&!p());){var i=D.callback;if(null!==i){D.callback=null,F=D.priorityLevel;var l=i(D.expirationTime<=t);t=n.unstable_now(),"function"==typeof l?D.callback=l:D===o(L)&&a(L),u(t)}else a(L);D=o(L)}if(null!==D)var c=!0;else{var m=o(S);null!==m&&d(s,m.startTime-t),c=!1}return c}finally{D=null,F=r,I=!1}}function l(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}Object.defineProperty(n,"__esModule",{value:!0});var c,d,f,p,m;if("undefined"==typeof window||"function"!=typeof MessageChannel){var h=null,g=null,y=function(){if(null!==h)try{var e=n.unstable_now();h(!0,e),h=null}catch(e){throw setTimeout(y,0),e}},b=Date.now();n.unstable_now=function(){return Date.now()-b},c=function(e){null!==h?setTimeout(c,0,e):(h=e,setTimeout(y,0))},d=function(e,n){g=setTimeout(e,n)},f=function(){clearTimeout(g)},p=function(){return!1},m=n.unstable_forceFrameRate=function(){}}else{var v=window.performance,w=window.Date,j=window.setTimeout,x=window.clearTimeout;if("undefined"!=typeof console){var k=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof k&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof v&&"function"==typeof v.now)n.unstable_now=function(){return v.now()};else{var _=w.now();n.unstable_now=function(){return w.now()-_}}var R=!1,N=null,C=-1,P=5,T=0;p=function(){return n.unstable_now()>=T},m=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):P=0<e?Math.floor(1e3/e):5};var E=new MessageChannel,O=E.port2;E.port1.onmessage=function(){if(null!==N){var e=n.unstable_now();T=e+P;try{N(!0,e)?O.postMessage(null):(R=!1,N=null)}catch(e){throw O.postMessage(null),e}}else R=!1},c=function(e){N=e,R||(R=!0,O.postMessage(null))},d=function(e,t){C=j(function(){e(n.unstable_now())},t)},f=function(){x(C),C=-1}}var L=[],S=[],A=1,D=null,F=3,I=!1,M=!1,U=!1,W=m;n.unstable_ImmediatePriority=1,n.unstable_UserBlockingPriority=2,n.unstable_NormalPriority=3,n.unstable_IdlePriority=5,n.unstable_LowPriority=4,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=F;F=e;try{return n()}finally{F=t}},n.unstable_next=function(e){switch(F){case 1:case 2:case 3:var n=3;break;default:n=F}var t=F;F=n;try{return e()}finally{F=t}},n.unstable_scheduleCallback=function(e,a,r){var u=n.unstable_now();if("object"==typeof r&&null!==r){var p=r.delay;p="number"==typeof p&&0<p?u+p:u,r="number"==typeof r.timeout?r.timeout:l(e)}else r=l(e),p=u;return r=p+r,e={id:A++,callback:a,priorityLevel:e,startTime:p,expirationTime:r,sortIndex:-1},p>u?(e.sortIndex=p,t(S,e),null===o(L)&&e===o(S)&&(U?f():U=!0,d(s,p-u))):(e.sortIndex=r,t(L,e),M||I||(M=!0,c(i))),e},n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_wrapCallback=function(e){var n=F;return function(){var t=F;F=n;try{return e.apply(this,arguments)}finally{F=t}}},n.unstable_getCurrentPriorityLevel=function(){return F},n.unstable_shouldYield=function(){var e=n.unstable_now();u(e);var t=o(L);return t!==D&&null!==D&&null!==t&&null!==t.callback&&t.startTime<=e&&t.expirationTime<D.expirationTime||p()},n.unstable_requestPaint=W,n.unstable_continueExecution=function(){M||I||(M=!0,c(i))},n.unstable_pauseExecution=function(){},n.unstable_getFirstCallbackNode=function(){return o(L)},n.unstable_Profiling=null},139:function(e,n,t){"use strict";e.exports=t(94)},442:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},276:function(e,n,t){t(3),e.exports=function(e){return t.e(0x9427c64ab85d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(160)})})}},277:function(e,n,t){t(3),e.exports=function(e){return t.e(0x8c68e41d6ed8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(161)})})}}});
//# sourceMappingURL=app-8dd9fe3c2987f465effb.js.map