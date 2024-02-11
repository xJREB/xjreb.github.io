"use strict";(self.webpackChunkjreb_cv=self.webpackChunkjreb_cv||[]).push([[678],{1046:function(e,t,a){a.d(t,{w_:function(){return o}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),c(e.child))}))}function o(e){return function(t){return r.createElement(d,s({attr:s({},e.attr)},t),c(e.child))}}function d(e){var t=function(t){var a,n=e.attr,i=e.size,c=e.title,o=l(e,["attr","size","title"]),d=i||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},3723:function(e,t,a){a.d(t,{L:function(){return p},M:function(){return y},P:function(){return E},S:function(){return _},_:function(){return l},a:function(){return s},b:function(){return o},g:function(){return d},h:function(){return c}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function o(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,l,c){var o={};i&&(o.backgroundColor=i,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=i,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),l&&(o.objectFit=l),c&&(o.objectPosition=c);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}var u,m=["children"],f=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){var t=e.children,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(f,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,c=void 0===i?"":i,o=e.shouldLoad,d=l(e,h);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:c}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,c=void 0===i||i,o=l(e,g),d=o.sizes||(null==t?void 0:t.sizes),u=r.createElement(b,s({},o,t,{sizes:d,shouldLoad:c}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:d})})),u):u};b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],E=function(e){var t=e.fallback,a=l(e,w);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var y=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};y.displayName="MainImage",y.propTypes=v.propTypes;var S,C,I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:I},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],k=["style","className"],j=new Set,L=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,o=e.style,d=e.backgroundColor,u=e.className,m=e.class,f=e.onStartLoad,p=e.onLoad,h=e.onError,g=l(e,A),b=i.width,v=i.height,w=i.layout,E=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(b,v,w),y=E.style,I=E.className,x=l(E,k),L=(0,r.useRef)(),N=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,v);return(0,r.useEffect)((function(){S||(S=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=L.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==f||f({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(N)):C&&j.has(N)?void 0:(S.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;L.current&&(L.current.innerHTML=r(s({isLoading:!0,isLoaded:j.has(N),image:i},g)),j.has(N)||(e=requestAnimationFrame((function(){L.current&&(t=n(L.current,N,j,o,f,p,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){j.has(N)&&C&&(L.current.innerHTML=C(s({isLoading:j.has(N),isLoaded:j.has(N),image:i},g)),null==f||f({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},x,{style:s({},y,o,{backgroundColor:d}),className:I+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},N=(0,r.memo)((function(e){return e.image?(0,r.createElement)(L,e):null}));N.propTypes=x,N.displayName="GatsbyImage";var O,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},T=new Set(["fixed","fullWidth","constrained"]),z={src:i().string.isRequired,alt:I,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!T.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},_=(O=N,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=l(e,P);return n&&console.warn(n),a?r.createElement(O,s({image:a},i)):(console.warn("Image not loaded",t),null)});_.displayName="StaticImage",_.propTypes=z},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},1977:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(1082),n=a(7294),i=function(){var e=(0,r.useStaticQuery)("440568431").site.siteMetadata;return n.createElement("footer",null,n.createElement("div",{className:"break"}),n.createElement("div",{className:"footer-content"},n.createElement("div",null,"Made with ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"),", template adapted from"," ",n.createElement("a",{href:"https://knightjdr.github.io/gatsby-starter-scientist"},"gatsby-starter-scientist")),n.createElement("div",{className:"break"}),n.createElement("div",null,"© "+(new Date).getFullYear()+" "+e.author)))},s=a(3201),l=a(2775),c=function(){return n.createElement("nav",null,n.createElement("div",{className:"home-link-container"},n.createElement(r.Link,{to:"/"},n.createElement(s.xng,null),"Home")),n.createElement("div",{className:"nav-link-container"},n.createElement(r.Link,{to:"/cv/"},n.createElement(l.CvH,null),"CV"),n.createElement(r.Link,{to:"/publications/"},n.createElement(l.dBs,null),"Publications"),n.createElement(r.Link,{to:"/teaching/"},n.createElement(s.FcZ,null),"Teaching"),n.createElement(r.Link,{to:"/service/"},n.createElement(s.Q7H,null),"Service")))},o=function(e){var t=e.pageTitle,a=e.children,s=(0,r.useStaticQuery)("3159585216").site.siteMetadata.title;return n.createElement("div",null,n.createElement("title",null,s+" | "+t),n.createElement(c,null),n.createElement("main",null,a),n.createElement(i,null))}},7072:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return v}});var r=a(7294),n=function(){return r.createElement("div",{className:"gutter gutter-left"})},i=function(){return r.createElement("div",{className:"gutter gutter-right"})},s=a(3723),l=function(){return r.createElement("div",null,r.createElement("h2",null,"About Me"),r.createElement("div",null,r.createElement(s.S,{alt:"Portrait Justus Bogner",src:"../images/jb-portrait.jpg",className:"portrait",formats:["auto","webp","avif"],__imageData:a(843)}),r.createElement("p",null,"Hi! I'm Justus, a researcher in"," ",r.createElement("i",null,"empirical software engineering"),". I also teach software engineering courses at the university and as a trainer for companies. Before and during my PhD, I was employed for more than 9 years as a software engineer in the industry, building mostly web- and service-based enterprise applications."),r.createElement("p",null,"In May 2020, I received my PhD in Computer Science (Dr. rer. nat.) from the University of Stuttgart, Germany. My advisors were Prof. Dr. Alfred Zimmermann and Prof. Dr. Stefan Wagner, with Prof. Dr. Cesare Pautasso as external reviewer. Currently, I'm a postdoc at the Institute of Software Engineering at the University of Stuttgart. Within Prof. Wagner's"," ",r.createElement("a",{href:"https://www.iste.uni-stuttgart.de/ese"},"Empirical Software Engineering Group"),', I lead the division "Software Engineering for AI- & Microservice-Based Systems" (SE4AI&MS). I regularly review for journals, conferences, and workshops, such as IEEE TSE, PeerJ CS, IEEE Software, Wiley SPE, ECSA, Euromicro SEAA, or XP. I am also a co-organizer of the'," ",r.createElement("a",{href:"https://saml.disim.univaq.it/saml2022/"},"SAML workshop"),', which combines software architecture and machine learning. Lastly, I\'m part of the student admission committee for the M.Sc. study programme "Software Engineering" in my department.')))},c=a(3201),o=function(){return r.createElement("div",null,r.createElement("h2",null,r.createElement(c.MtH,null)," Awards"),r.createElement("div",null,r.createElement("p",null,"I have won the following awards:"),r.createElement("p",null,r.createElement("strong",null,"Best Reviewer Award"),r.createElement("br",null),"At the European Conference on Software Architecture (ECSA), 2022"),r.createElement("p",null,r.createElement("strong",null,"infos Dissertation Award"),r.createElement("br",null),"From the Informatik Forum Stuttgart, 2021, for my PhD thesis:",r.createElement("br",null),r.createElement("a",{href:"http://dx.doi.org/10.18419/opus-10950"},'"On the Evolvability Assurance of Microservices: Metrics, Scenarios, and Patterns"')),r.createElement("p",null,r.createElement("strong",null,"Best Presentation Award"),r.createElement("br",null),"At the International Conference on Technical Debt (TechDebt), 2021, for the paper:",r.createElement("br",null),r.createElement("a",{href:"https://doi.org/10.1109/TechDebt52882.2021.00016"},'"Characterizing Technical Debt and Antipatterns in AI-Based Systems: A Systematic Mapping Study"')),r.createElement("p",null,r.createElement("strong",null,"IEEE TCSE Distinguished Paper Award"),r.createElement("br",null),"At the International Conference on Software Maintenance and Evolution (ICSME), 2019, for the paper:",r.createElement("br",null),r.createElement("a",{href:"https://doi.org/10.1109/ICSME.2019.00089"},'"Assuring the Evolvability of Microservices: Insights into Industry Practices and Challenges"')),r.createElement("p",null,r.createElement("strong",null,"Best Student Paper Award"),r.createElement("br",null),"At the European Conference on Service-Oriented and Cloud Computing (ESOCC), 2018, for the paper:",r.createElement("br",null),r.createElement("a",{href:"https://doi.org/10.1007/978-3-030-63161-1_10"},'"Towards an Evolvability Assurance Method for Service-Based Systems"')),r.createElement("p",null,r.createElement("strong",null,"Best Presentation Award"),r.createElement("br",null),"At the Central European Workshop on Services and their Composition (ZEUS), 2018, for the paper:",r.createElement("br",null),r.createElement("a",{href:"http://ceur-ws.org/Vol-2072/paper2.pdf"},'"Analyzing the Relevance of SOA Patterns for Microservice-Based Systems"')),r.createElement("p",null,r.createElement("strong",null,"Master Thesis Award"),r.createElement("br",null),"From the Herman Hollerith Center, 2015, for my M.Sc. thesis:",r.createElement("br",null),'"Identifying Relevant Software Architecture Patterns for IT Service Monitoring and Reporting Solutions"')))},d=a(1082),u=a(2775),m=a(9463),f=function(){var e=(0,d.useStaticQuery)("2742659520").site.siteMetadata,t=e.social,a=t.twitter,n=t.github,i=t.email,s=t.researchgate,l=t.googleScholar;return r.createElement("div",null,r.createElement("h2",null,r.createElement(c.KKr,null)," Contact"),r.createElement("div",null,r.createElement("p",null,"You can reach or follow me via the following ways:"),r.createElement(u.ixJ,null)," Email:"," ",r.createElement("a",{href:"mailto:"+i},i),r.createElement("br",null),r.createElement(c.fWC,null)," Twitter:"," ",r.createElement("a",{href:a},a.substring(a.indexOf(".com/")+5)),r.createElement("br",null),r.createElement(c.hJX,null)," GitHub:"," ",r.createElement("a",{href:n},n.substring(n.indexOf(".com/")+5)),r.createElement("br",null),r.createElement(c.i3V,null)," Researchgate:"," ",r.createElement("a",{href:s},e.author),r.createElement("br",null),r.createElement(m.S4z,null)," Google Scholar:"," ",r.createElement("a",{href:l},e.author),r.createElement("p",null,"If you have questions about my research, want to write your student thesis with me, or have an idea for a study collaboration related to my research interest, feel free to reach out!")))},p=function(){return r.createElement("div",null,r.createElement("h2",null,r.createElement(c.U41,null)," Research"),r.createElement("div",null,r.createElement("p",null,"To study and improve software engineering, I apply both quantitative and qualitative"," ",r.createElement("strong",null,"empirical methods"),", such as controlled experiments, systematic literature reviews, surveys, interviews, repository mining, or case studies. Based on these results, I then create and evaluate tools or methods to support software professionals. While I conducted studies in other areas, my two main SE knowledge areas are"," ",r.createElement("strong",null,"software architecture")," and"," ",r.createElement("strong",null,"software quality"),", especially maintainability, evolvability, and technical debt. Moreover, I mainly study two types of systems described below. For more details, please refer to my"," ",r.createElement(d.Link,{to:"/publications/"},"publications"),"."),r.createElement("div",null,r.createElement("h3",null,"Microservice-based Systems"),r.createElement("figure",{className:"research-images"},r.createElement(s.S,{alt:"Microservices",src:"../images/microservices.png",formats:["auto","webp","avif"],__imageData:a(6741)}),r.createElement("figcaption",null,"Microservices, based on ",r.createElement("br",null),r.createElement("a",{href:"https://www.martinfowler.com/articles/microservices.html"},"Martin Fowler's article"),".")),r.createElement("p",null,"In my"," ",r.createElement("a",{href:"http://dx.doi.org/10.18419/opus-10950"},"PhD thesis"),", I studied the evolvability assurance of the architectural style ",r.createElement("strong",null,"microservices"),", and approached the topic via metrics, scenario-based evaluation, and (anti-)patterns. While I still continue parts of this line of research, I'm also interested in microservices migration, the design of RESTful APIs, and web-based applications in general.")),r.createElement("div",null,r.createElement("h3",null,"AI-based Systems"),r.createElement("figure",{className:"research-images"},r.createElement(s.S,{alt:"AI-based systems",src:"../images/ai-based-systems.jpg",formats:["auto","webp","avif"],__imageData:a(6819)}),r.createElement("figcaption",null,"Artificial Intelligence,",r.createElement("br",null),"photo by"," ",r.createElement("a",{href:"https://www.pexels.com/photo/love-art-earth-summer-8849282/"},"Tara Winstead"),".")),r.createElement("p",null,"After my PhD, I also broadened my scope with an additional research area: software engineering for AI-based systems (SE4AI). Here, I am mostly interested in the development process, architecture, and quality assurance of systems with AI components, e.g., systems which include one or more machine learning models."))))},h=function(e){var t=e.children;return r.createElement("div",{style:{display:"grid"}},r.createElement(s.S,{style:{gridArea:"1/1",maxHeight:"400px"},layout:"fullWidth",alt:"Header Image",src:"../../images/hero.jpg",formats:["auto","webp","avif"],__imageData:a(2135)}),r.createElement("div",{style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid",color:"var(--color-font-light)",maxWidth:"1080px"}},t))},g=function(){var e=(0,d.useStaticQuery)("120443855").site.siteMetadata,t=e.author,a=e.description;return r.createElement("div",{className:"landing"},r.createElement(h,null,r.createElement("div",null,r.createElement("h1",null,"Dr. ",t),r.createElement("p",null,a),r.createElement("div",{className:"landing-links"},r.createElement(d.Link,{to:"/#contact"},"Contact"),r.createElement(d.Link,{to:"/#research"},"Research"),r.createElement(d.Link,{to:"/#awards"},"Awards")))))},b=a(1977),v=function(){return r.createElement(b.Z,{pageTitle:"Home Page"},r.createElement(g,null),r.createElement("div",{className:"home-layout"},r.createElement(n,null),r.createElement("div",{className:"home-inner"},r.createElement("section",{className:"about"},r.createElement(l,null)),r.createElement("section",{className:"contact",id:"contact"},r.createElement(f,null)),r.createElement("section",{className:"research",id:"research"},r.createElement(p,null)),r.createElement("section",{className:"awards",id:"awards"},r.createElement(o,null))),r.createElement(i,null)))},w=function(){return r.createElement(r.Fragment,null,r.createElement("meta",{name:"google-site-verification",content:"Z5awUoZA4VyZVQddqZ4j0rW_uitttNkElEFSZ9qYaNk"}))}},843:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#887868","images":{"fallback":{"src":"/static/92a8aa8ded2e6059972c2a3aa78021b9/7d874/jb-portrait.jpg","srcSet":"/static/92a8aa8ded2e6059972c2a3aa78021b9/1298d/jb-portrait.jpg 286w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/eb1cd/jb-portrait.jpg 572w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/7d874/jb-portrait.jpg 1144w","sizes":"(min-width: 1144px) 1144px, 100vw"},"sources":[{"srcSet":"/static/92a8aa8ded2e6059972c2a3aa78021b9/39d53/jb-portrait.avif 286w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/710e1/jb-portrait.avif 572w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/ed7a6/jb-portrait.avif 1144w","type":"image/avif","sizes":"(min-width: 1144px) 1144px, 100vw"},{"srcSet":"/static/92a8aa8ded2e6059972c2a3aa78021b9/e0f81/jb-portrait.webp 286w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/d6be4/jb-portrait.webp 572w,\\n/static/92a8aa8ded2e6059972c2a3aa78021b9/aa07d/jb-portrait.webp 1144w","type":"image/webp","sizes":"(min-width: 1144px) 1144px, 100vw"}]},"width":1144,"height":1600}')},6819:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/e9a60dc0785d0d6974db0efc49f0ad93/53c55/ai-based-systems.jpg","srcSet":"/static/e9a60dc0785d0d6974db0efc49f0ad93/77b48/ai-based-systems.jpg 495w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/63634/ai-based-systems.jpg 991w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/53c55/ai-based-systems.jpg 1981w","sizes":"(min-width: 1981px) 1981px, 100vw"},"sources":[{"srcSet":"/static/e9a60dc0785d0d6974db0efc49f0ad93/bccfd/ai-based-systems.avif 495w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/de9df/ai-based-systems.avif 991w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/0176d/ai-based-systems.avif 1981w","type":"image/avif","sizes":"(min-width: 1981px) 1981px, 100vw"},{"srcSet":"/static/e9a60dc0785d0d6974db0efc49f0ad93/26673/ai-based-systems.webp 495w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/c1b33/ai-based-systems.webp 991w,\\n/static/e9a60dc0785d0d6974db0efc49f0ad93/bbb7a/ai-based-systems.webp 1981w","type":"image/webp","sizes":"(min-width: 1981px) 1981px, 100vw"}]},"width":1981,"height":1326}')},2135:function(e){e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1837758239f2547fb94821b0764aaa70/45b72/hero.jpg","srcSet":"/static/1837758239f2547fb94821b0764aaa70/84519/hero.jpg 750w,\\n/static/1837758239f2547fb94821b0764aaa70/09f70/hero.jpg 1080w,\\n/static/1837758239f2547fb94821b0764aaa70/354f9/hero.jpg 1366w,\\n/static/1837758239f2547fb94821b0764aaa70/45b72/hero.jpg 1680w","sizes":"100vw"},"sources":[{"srcSet":"/static/1837758239f2547fb94821b0764aaa70/c0126/hero.avif 750w,\\n/static/1837758239f2547fb94821b0764aaa70/53ca1/hero.avif 1080w,\\n/static/1837758239f2547fb94821b0764aaa70/7167e/hero.avif 1366w,\\n/static/1837758239f2547fb94821b0764aaa70/bbe2c/hero.avif 1680w","type":"image/avif","sizes":"100vw"},{"srcSet":"/static/1837758239f2547fb94821b0764aaa70/59596/hero.webp 750w,\\n/static/1837758239f2547fb94821b0764aaa70/45939/hero.webp 1080w,\\n/static/1837758239f2547fb94821b0764aaa70/c8710/hero.webp 1366w,\\n/static/1837758239f2547fb94821b0764aaa70/32e37/hero.webp 1680w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.625}')},6741:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/59f16d73daa88fbcc3a5330fd3bc497d/467fb/microservices.png","srcSet":"/static/59f16d73daa88fbcc3a5330fd3bc497d/b9123/microservices.png 45w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/cff7c/microservices.png 90w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/467fb/microservices.png 179w","sizes":"(min-width: 179px) 179px, 100vw"},"sources":[{"srcSet":"/static/59f16d73daa88fbcc3a5330fd3bc497d/89db9/microservices.avif 45w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/539f4/microservices.avif 90w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/61f66/microservices.avif 179w","type":"image/avif","sizes":"(min-width: 179px) 179px, 100vw"},{"srcSet":"/static/59f16d73daa88fbcc3a5330fd3bc497d/a25d8/microservices.webp 45w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/f62a8/microservices.webp 90w,\\n/static/59f16d73daa88fbcc3a5330fd3bc497d/86e79/microservices.webp 179w","type":"image/webp","sizes":"(min-width: 179px) 179px, 100vw"}]},"width":179,"height":86}')}}]);
//# sourceMappingURL=component---src-pages-index-js-37e7ed6356f75f5b2ec1.js.map