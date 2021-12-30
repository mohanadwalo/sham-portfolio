(this["webpackJsonpwl-fe-boilerplate"]=this["webpackJsonpwl-fe-boilerplate"]||[]).push([[7],{54:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i,r=t(6),l=t(5),c=t.p+"static/media/check-list-style.89881e97.svg",o=t(1),s=l.b.ul(i||(i=Object(r.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  li {\n    ","\n    list-style-type: none;\n    position relative;\n    :before {\n      position: absolute;\n      left: 0;\n      top: 3px;\n      content: url(",");\n    }\n    padding-bottom: 0.6rem;\n    padding-left: 2rem;\n  }\n"])),(function(e){return e.theme.fonts.body}),c),a=function(e){var n=e.children;return Object(o.jsx)(s,{children:n})}},62:function(e,n,t){"use strict";t.r(n);var i,r,l=t(16),c=t(12),o=t(6),s=t(0),a=t(5),d=t(54),u=t(32),p=t(1),j=a.b.div(i||(i=Object(o.a)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n  background-color: ",";\n  padding: 3rem;\n  .body {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n  }\n  .close {\n    position: absolute;\n    top: 3rem;\n    right: 3rem;\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.colors.blackVariant})),b=function(e){var n=e.children,t=e.onClose;return Object(p.jsxs)(j,{children:[Object(p.jsx)("div",{className:"close",onClick:function(){return t(!1)},children:Object(p.jsx)(u.a,{fill:"white"})}),Object(p.jsx)("div",{className:"body",children:n})]})},m=["title","titleId"];function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},f.apply(this,arguments)}function x(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function v(e,n){var t=e.title,i=e.titleId,l=x(e,m);return s.createElement("svg",f({width:8,viewBox:"0 0 9 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},l),t?s.createElement("title",{id:i},t):null,r||(r=s.createElement("path",{d:"M0 1.59L5.85149 7.5L0 13.41L1.57426 15L9 7.5L1.57426 0L0 1.59Z",fill:"white"})))}var h,g,O=s.forwardRef(v),y=(t.p,a.b.div(h||(h=Object(o.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  .image-text-wrapper {\n    padding: 2rem;\n    img {\n      width: 80%;\n      height: 80%;\n    }\n    .description {\n      ","\n      padding-top: 1rem;\n    }\n  }\n  .prevNext {\n    position: absolute;\n    top: 42%;\n    cursor: pointer;\n    &.prev {\n      left: -2rem;\n      svg {\n        transform: rotate(180deg) scale(2.5);\n      }\n    }\n    &.next {\n      right: -2rem;\n      transform: scale(2.5);\n    }\n  }\n"])),(function(e){return e.theme.fonts.body}))),w=function(e){var n=e.children,t=e.setPrevNextSlide,i=e.currentSlide,r=e.totalSlides;return Object(p.jsxs)(y,{children:[n,Object(p.jsx)("div",{className:"prevNext prev",children:i>0&&Object(p.jsx)(O,{onClick:function(){return t("prev")}})}),Object(p.jsx)("div",{className:"prevNext next",children:i<r&&Object(p.jsx)(O,{onClick:function(){return t("next")}})})]})},N=t(24),I=t(29),k=t(3),S=a.b.div(g||(g=Object(o.a)(["\n  ","\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: 100%;\n  .goals,\n  .gallery,\n  .development,\n  .demo {\n    display: flex;\n    flex-direction: column;\n    .title {\n      ","\n      text-transform: capitalize;\n    }\n    .description,\n    .development-list {\n      ","\n      ","\n    }\n    .video {\n      padding-top: 1rem;\n    }\n    .gallery-list {\n      display: flex;\n      flex-wrap: wrap;\n      ","\n      .image-container {\n        display: flex;\n        background-repeat: no-repeat;\n        background-size: cover;\n        cursor: pointer;\n      }\n    }\n  }\n"])),(function(e){return e.theme.projects}),(function(e){return e.theme.fonts.h4}),(function(e){return e.theme.fonts.body}),(function(e){return e.theme.bodySpace}),(function(e){return e.theme.bodySpaceTopBottom}));n.default=function(){var e=Object(k.h)().projectId,n=Object(N.b)(I.c).projects.find((function(n){return n.id===e})),t=Object(s.useState)({isOpen:!1,imageIndex:0}),i=Object(c.a)(t,2),r=i[0],o=i[1],a=function(e,n){o(n?Object(l.a)(Object(l.a)({},r),{},{isOpen:e,imageIndex:n}):Object(l.a)(Object(l.a)({},r),{},{isOpen:e}))};return Object(p.jsxs)(p.Fragment,{children:[r.isOpen&&Object(p.jsx)(b,{onClose:a,children:Object(p.jsx)(w,{setPrevNextSlide:function(e){"next"===e&&r.imageIndex<(n?n.gallery.length-1:0)?o(Object(l.a)(Object(l.a)({},r),{},{imageIndex:r.imageIndex+1})):"prev"===e&&r.imageIndex>0&&o(Object(l.a)(Object(l.a)({},r),{},{imageIndex:r.imageIndex-1}))},currentSlide:r.imageIndex,totalSlides:n?n.gallery.length-1:0,children:Object(p.jsxs)("div",{className:"image-text-wrapper",children:[Object(p.jsx)("img",{src:null===n||void 0===n?void 0:n.gallery[r.imageIndex],alt:"project"}),Object(p.jsx)("div",{className:"description",children:"We work as a team to build a unique products"})]})})}),Object(p.jsxs)(S,{children:[Object(p.jsxs)("div",{className:"goals",children:[Object(p.jsx)("div",{className:"title",children:"goals"}),Object(p.jsx)("div",{className:"description",children:null===n||void 0===n?void 0:n.goals})]}),Object(p.jsxs)("div",{className:"gallery",children:[Object(p.jsx)("div",{className:"title",children:"gallery"}),Object(p.jsx)("div",{className:"gallery-list",children:null===n||void 0===n?void 0:n.gallery.map((function(e,n){return Object(p.jsx)("div",{onClick:function(){return a(!0,n)},className:"image-container",style:{backgroundImage:"url(".concat(e,")")}},"gallery_list_".concat(n))}))})]}),Object(p.jsxs)("div",{className:"development",children:[Object(p.jsx)("div",{className:"title",children:"development"}),Object(p.jsx)("div",{className:"development-list",children:Object(p.jsx)(d.a,{children:null===n||void 0===n?void 0:n.development.map((function(e,n){return Object(p.jsx)("li",{children:e},"dev_".concat(n))}))})})]}),Object(p.jsxs)("div",{className:"demo",children:[Object(p.jsx)("div",{className:"title",children:"demo"}),Object(p.jsx)("div",{className:"video",children:Object(p.jsxs)("video",{width:"100%",controls:!0,children:[Object(p.jsx)("source",{src:null===n||void 0===n?void 0:n.video,type:"video/mp4"}),"Your browser does not support the video tag."]})})]})]})]})}}}]);
//# sourceMappingURL=7.742b708f.chunk.js.map