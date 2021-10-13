(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9639],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(4034),r=n(9973),a=(n(7294),n(3905)),i={slug:"manifold-v6",title:"Manifold v6.0 is available now!",image:"images/manifold-v6.jpg",image_alt:"Hand-drawn honeycomb covered with bees. Each cell of the honeycomb names a new Manifold feature"},s={permalink:"/manifold-docusaurus/blog/manifold-v6",source:"@site/blog/2021-09-08-version6.md",title:"Manifold v6.0 is available now!",description:"The latest version includes a new\xa0analytics feature, improved Word ingestion, global stylesheets, and more.",date:"2021-09-08T00:00:00.000Z",formattedDate:"September 8, 2021",tags:[],truncated:!1,nextItem:{title:"Manifold Moves Toward Sustainability, Promotes Learning and Equity with Two Major Grants",permalink:"/manifold-docusaurus/blog/manifoldnextsteps"}},l=[],u={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The latest version includes a new\xa0analytics feature, improved Word ingestion, global stylesheets, and more.")),(0,a.kt)("p",null,"The Manifold Team is proud to announce the release of version 6.0."),(0,a.kt)("p",null,"Our\xa0",(0,a.kt)("a",{parentName:"p",href:"https://manifoldscholar.github.io/manifold-docusaurus/docs/administering/release_notes/v6x"},"complete list of release notes"),"\xa0for this version details all of the new additions, but here are some of the highlights, with links to the corresponding sections of our documentation."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://manifoldscholar.github.io/manifold-docusaurus/docs/backend/analytics"},"Analytics"),". Built from the ground up, our analytics tools provide usage data at the site, project, text, and text-section levels. We are committed to protecting our users\u2019 privacy, so all reported data is anonymized."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://manifoldscholar.github.io/manifold-docusaurus/docs/administering/configuring/ingestion_settings"},"Word Ingestion"),". With version 6, we\u2019ve transitioned from PanDoc to\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mammoth"},"Mammoth"),"\xa0to power our Word to HTML conversion. The Mammoth engine produces better results and allows us to map Word styles to HTML styles. This means that if you use a custom style in Word, it will persist into Manifold, where you can assign it a specific type of rendering using a stylesheet."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://manifoldscholar.github.io/manifold-docusaurus/docs/administering/configuring/ingestion_settings"},"Global Stylesheet"),". In addition to existing text-level stylesheets, Manifold now includes a global stylesheet that is applied to every new text as it is ingested. Utilizing\xa0our new Word engine and our capacity to export any text to EPUB, you can create an EPUB file from a Word document\xa0within Manifold."),(0,a.kt)("p",null,"Because we upgraded a number of underlying systems in v6, there are quite a few data migrations included in this upgrade. Please be sure to backup your installation prior to upgrading. If you run into problems, please feel free to get in touch with us."),(0,a.kt)("p",null,"Our next version, 7.0, will focus on helping\xa0teachers and students get the most out of Manifold, including OER work funded by the National Endowment for the Humanities, and a localization feature funded by Melusina Press and the University of Luxembourg. For more on where we\u2019re going, check out our\xa0",(0,a.kt)("a",{parentName:"p",href:"https://manifoldapp.org/development"},"development roadmap"),"."),(0,a.kt)("p",null,"As a community-driven, open platform, we depend on our users\u2019 feedback to improve and develop Manifold for everyone. We welcome discussion and suggestions through\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ManifoldScholar"},"Github"),",\xa0",(0,a.kt)("a",{parentName:"p",href:"https://manifold-slackin.herokuapp.com/"},"Slack"),", and\xa0",(0,a.kt)("a",{parentName:"p",href:"mailto:contact@manifoldapp.org"},"email"),"."),(0,a.kt)("p",null,"Thank you for being part of our community,"),(0,a.kt)("p",null,"The Manifold Team"))}c.isMDXComponent=!0}}]);