(this["webpackJsonpwl-fe-boilerplate"]=this["webpackJsonpwl-fe-boilerplate"]||[]).push([[3],{53:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var i,c=e(6),r=e(5),a=e(1),s=r.b.div(i||(i=Object(c.a)(["\n  ","\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex: 1;\n  height: 100%;\n  .main-content {\n    ","\n    display: flex;\n    width: 100%;\n    flex: 1;\n    .left,\n    .right {\n      position: relative;\n    }\n    .left {\n      width: 14.063rem;\n      .fixed {\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        position: fixed;\n        .large-icon-bottom {\n          padding-top: 25%;\n        }\n        .large-icon-top {\n          padding-bottom: 1rem;\n        }\n      }\n    }\n    .right {\n      display: flex;\n      flex: 1;\n    }\n  }\n"])),(function(n){return n.theme.twoColumnLayout}),(function(n){return n.theme.regionSpace})),l=function(n){var t=n.leftContent,e=n.children;return Object(a.jsx)(s,{children:Object(a.jsxs)("div",{className:"main-content",children:[Object(a.jsx)("div",{className:"left",children:Object(a.jsx)("div",{className:"fixed",children:t})}),Object(a.jsx)("div",{className:"right",children:e})]})})}},54:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var i,c=e(6),r=e(5),a=e.p+"static/media/check-list-style.89881e97.svg",s=e(1),l=r.b.ul(i||(i=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  li {\n    ","\n    list-style-type: none;\n    position relative;\n    :before {\n      position: absolute;\n      left: 0;\n      top: 3px;\n      content: url(",");\n    }\n    padding-bottom: 0.6rem;\n    padding-left: 2rem;\n  }\n"])),(function(n){return n.theme.fonts.body}),a),o=function(n){var t=n.children;return Object(s.jsx)(l,{children:t})}},68:function(n,t,e){"use strict";e.r(t);var i,c=e(0),r=e(20),a=e(6),s=e(5),l=e(53),o=e.p+"static/media/certification-large.f6c677e1.svg",d=e(54),f=e(24),u=e(35),m=e(1),j=s.b.div(i||(i=Object(a.a)(["\n  ","\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  .certification {\n    display: flex;\n    img {\n      flex-shrink: 0;\n      box-shadow: 0px 1px 5px ",";\n    }\n    .certification-details {\n      padding-left: 1rem;\n      .title {\n        ","\n        color: ",";\n      }\n      .date {\n        ","\n      }\n      .description {\n        ","\n      }\n    }\n  }\n"])),(function(n){return n.theme.certifications}),(function(n){return n.theme.primaryVariant1}),(function(n){return n.theme.fonts.h3}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.fonts.h6}),(function(n){return n.theme.bodySpaceTopBottom})),h=function(){var n=Object(f.a)(),t=Object(f.b)(u.c);return Object(c.useEffect)((function(){"pending"===t.status&&n(Object(u.b)())}),[t.status,n]),Object(m.jsx)(l.a,{leftContent:Object(m.jsx)("img",{src:o,alt:"certifications"}),children:Object(m.jsx)(j,{children:t.certifications.map((function(n){return Object(m.jsxs)("div",{className:"certification",children:[Object(m.jsx)("img",{src:n.icon,alt:n.title}),Object(m.jsxs)("div",{className:"certification-details",children:[Object(m.jsx)("div",{className:"title",children:n.title}),Object(m.jsx)("div",{className:"date",children:"".concat(n.issueDate,"-").concat(n.expireDate)}),Object(m.jsx)("div",{className:"description",children:Object(m.jsx)(d.a,{children:n.description.map((function(n){return Object(m.jsx)("li",{children:n},"cert_desc_".concat(n))}))})})]})]},"cert_".concat(n.id))}))})})};t.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.a,{title:"Certifications",children:Object(m.jsx)("meta",{name:"description",content:"Certifications, Achievement","data-react-helmet":"true"})}),Object(m.jsx)(h,{})]})}}}]);
//# sourceMappingURL=3.b7f33566.chunk.js.map