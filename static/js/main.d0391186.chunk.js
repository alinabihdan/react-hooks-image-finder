(this["webpackJsonpreact-hooks-image-finder"]=this["webpackJsonpreact-hooks-image-finder"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),s=(n(18),n(19),n(20),n(21),n(3)),i=n(7),u=(n(22),n(13)),l=n(1);var j=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):Object(i.b)("Write search query")},children:[Object(l.jsxs)("button",{type:"submit",className:"SearchForm-button",children:[Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"}),Object(l.jsx)(u.a,{})]}),Object(l.jsx)("input",{value:r,onChange:function(e){o(e.currentTarget.value.toLowerCase())},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},b=n(8),m=n(10),h=n.n(m);var d=function(e){var t=e.images,n=e.onClick;return t.map((function(e){return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{onClick:function(){return n(e)},src:e.webformatURL,alt:e.tags,className:"ImageGalleryItemImage"})},e.id+e.tags)}))},O=function(e){var t=e.onClick;return Object(l.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},f=n(11),p=n.n(f),g=n(12);function x(e,t){return v.apply(this,arguments)}function v(){return(v=Object(g.a)(p.a.mark((function e(t,n){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=22289031-1611b833cc5adb7f34a3078c9&image_type=photo&orientation=horizontal&per_page=12"));case 2:if(!(c=e.sent).ok){e.next=5;break}return e.abrupt("return",c.json());case 5:return e.next=7,Promise.reject(new Error("Something went wrong"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){var t=e.query,n=e.onClick,a=Object(c.useState)(null),r=Object(s.a)(a,2),o=r[0],i=r[1],u=Object(c.useState)(null),j=Object(s.a)(u,2),m=j[0],f=j[1],p=Object(c.useState)(0),g=Object(s.a)(p,2),v=g[0],S=g[1],y=Object(c.useState)(1),w=Object(s.a)(y,2),k=w[0],C=w[1],N=Object(c.useState)("idle"),I=Object(s.a)(N,2),E=I[0],F=I[1],q=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(c.useEffect)((function(){t&&(C(1),F("pending"),x(t,1).then((function(e){if(0===e.totalHits)throw new Error("Nothing with name ".concat(t," was not found"));i(Object(b.a)(e.hits)),F("resolved"),S(Math.ceil(e.totalHits/12)),q()})).catch((function(e){f(e),F("rejected")})))}),[t]),Object(c.useEffect)((function(){k>1&&(F("more-pending"),x(t,k).then((function(e){i((function(t){return[].concat(Object(b.a)(t),Object(b.a)(e.hits))})),F("resolved"),q()})).catch((function(e){f(e),F("rejected")})))}),[k,t]),"idle"===E?Object(l.jsx)("h1",{children:"Please, enter something"}):"pending"===E?Object(l.jsx)(h.a,{type:"TailSpin",color:"#3f51b5",height:180,width:180}):"more-pending"===E?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"ImageGallery",children:Object(l.jsx)(d,{images:o,onClick:n})}),Object(l.jsx)(h.a,{type:"TailSpin",color:"#3f51b5",height:180,width:180})]}):"resolved"===E?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"ImageGallery",children:Object(l.jsx)(d,{images:o,onClick:n})}),v>k?Object(l.jsx)(O,{onClick:function(){return C((function(e){return e+1}))}}):Object(l.jsx)(l.Fragment,{})]}):"rejected"===E?Object(l.jsx)("h2",{children:m.message}):void 0},y=document.querySelector("#modal-root");var w=function(e){var t=e.modalImage,n=e.onClose;return Object(c.useEffect)((function(){window.addEventListener("keydown",(function(e){"Escape"===e.code&&n()}))})),Object(r.createPortal)(Object(l.jsx)("div",{className:"overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(l.jsx)("div",{className:"modal",children:Object(l.jsx)("img",{alt:t.tags,src:t.largeImageURL})})}),y)};var k=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(s.a)(r,2),u=o[0],b=o[1],m=Object(c.useState)(""),h=Object(s.a)(m,2),d=h[0],O=h[1];return Object(l.jsxs)("div",{className:"App",children:[u&&Object(l.jsx)(w,{modalImage:d,onClose:function(){return b(!1)}}),Object(l.jsx)(j,{onSubmit:function(e){a(e)}}),Object(l.jsx)(S,{query:n,onClick:function(e){b(!0),O(e)}}),Object(l.jsx)(i.a,{autoClose:3e3})]})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d0391186.chunk.js.map