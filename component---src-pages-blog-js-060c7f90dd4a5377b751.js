"use strict";(self.webpackChunkjreb_cv=self.webpackChunkjreb_cv||[]).push([[711],{4728:function(e,t,r){r.d(t,{A:function(){return s}});var n=r(4794),l=r(6540);var a=()=>{const{site:e}=(0,n.useStaticQuery)("440568431"),t=e.siteMetadata;return l.createElement("footer",null,l.createElement("div",{className:"break"}),l.createElement("div",{className:"footer-content"},l.createElement("div",null,"Made with ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),", template adapted from"," ",l.createElement("a",{href:"https://knightjdr.github.io/gatsby-starter-scientist"},"gatsby-starter-scientist")),l.createElement("div",{className:"break"}),l.createElement("div",null,`© ${(new Date).getFullYear()} ${t.author}`)))},o=r(8027),i=r(9879);var c=()=>l.createElement("nav",null,l.createElement("div",{className:"home-link-container"},l.createElement(n.Link,{to:"/"},l.createElement(o.rQ8,null),"Home")),l.createElement("div",{className:"nav-link-container"},l.createElement(n.Link,{to:"/cv/"},l.createElement(i.r72,null),"CV"),l.createElement(n.Link,{to:"/publications/"},l.createElement(i.lbK,null),"Publications"),l.createElement(n.Link,{to:"/teaching/"},l.createElement(o.$hd,null),"Teaching"),l.createElement(n.Link,{to:"/service/"},l.createElement(o.MdY,null),"Service"),l.createElement(n.Link,{to:"/blog/"},l.createElement(o.Kt$,null),"Blog")));var s=e=>{let{pageTitle:t,children:r}=e;const{site:o}=(0,n.useStaticQuery)("3159585216"),{title:i}=o.siteMetadata;return l.createElement("div",null,l.createElement("title",null,`${i} | ${t}`),l.createElement(c,null),l.createElement("main",null,r),l.createElement(a,null))}},4151:function(e,t,r){r.r(t);var n=r(6540),l=r(4794),a=r(4728);t.default=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;const r=t.map((e=>n.createElement("div",{key:e.node.id,className:"blog-list-item"},n.createElement(l.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title)," ","(",e.node.frontmatter.date,")",n.createElement("p",null,e.node.excerpt))));return n.createElement(a.A,{pageTitle:"My Blog"},n.createElement("div",{className:"page-wrapper"},n.createElement("div",{className:"home-inner"},n.createElement("section",null,n.createElement("h1",null,"Blog"),n.createElement("p",null,"Every now and then, I will create blog posts to share something that I think may be interesting for others. It won't be regularly or frequently, but, sometimes, I will consider some events or experiences worthwhile to post about them. Plus, there are some things that I wanted to write about for a long time."),n.createElement("div",null,r)))))}},2225:function(e,t,r){r.d(t,{k5:function(){return p}});var n=r(6540),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(l),o=["attr","size","title"];function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),f(e.child))))}function p(e){return t=>n.createElement(v,c({attr:u({},e.attr)},t),f(e.child))}function v(e){var t=t=>{var r,{attr:l,size:a,title:s}=e,m=i(e,o),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,m,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(e=>t(e))):t(l)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-060c7f90dd4a5377b751.js.map