(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[1213],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2924:function(e,t,n){"use strict";var i=n(7294).createContext(void 0);t.Z=i},5350:function(e,t,n){"use strict";var i=n(7294),r=n(2924);t.Z=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},5960:function(e,t,n){"use strict";var i=n(9973),r=n(7294);n(5350);t.Z=function(e){var t=e.children,n=e.path,o=(0,i.Z)(e,["children","path"]),a="http://manifoldapp.org"+n,s=Object.assign({},o,{href:a});return r.createElement("a",s,t)}},5611:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=n(4034),r=n(9973),o=(n(7294),n(3905)),a=n(5960),s={id:"hosting",title:"Hosting",sidebar_label:"Hosting"},c={unversionedId:"administering/hosting",id:"administering/hosting",isDocsHomePage:!1,title:"Hosting",description:"Minimum Requirements",source:"@site/docs/administering/hosting.md",sourceDirName:"administering",slug:"/administering/hosting",permalink:"/manifold-docusaurus/docs/administering/hosting",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/hosting.md",version:"current",sidebar_label:"Hosting",frontMatter:{id:"hosting",title:"Hosting",sidebar_label:"Hosting"},sidebar:"docs",previous:{title:"Accessibility",permalink:"/manifold-docusaurus/docs/accessibility"},next:{title:"Installation",permalink:"/manifold-docusaurus/docs/administering/installation"}},l=[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Hosting with Manifold Digital Services (MDS)",id:"hosting-with-manifold-digital-services-mds",children:[]},{value:"Third Party Hosting Recommendations",id:"third-party-hosting-recommendations",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"minimum-requirements"},"Minimum Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Manifold should be installed on a virtual or physical server with at least 2 CPUs and 6 GB of RAM (8GB preferred). Manifold was not designed to work in a shared hosting environment."),(0,o.kt)("li",{parentName:"ol"},"To install from our packages, you will need to have root access to the server and the ability to shell into the server."),(0,o.kt)("li",{parentName:"ol"},"Your server should have a fully qualified domain name (FQDN) and be accessible on the internet.")),(0,o.kt)("h2",{id:"hosting-with-manifold-digital-services-mds"},"Hosting with Manifold Digital Services (MDS)"),(0,o.kt)("p",null,"We offer paid hosting services through Manifold Digital Services, which is housed at the University of Minnesota Press. Manifold Publishers who host with Manifold Digital Services have access to direct support from the Manifold team. To learn more about Manifold Digital Services and managed Manifold hosting, please visit the ",(0,o.kt)(a.Z,{path:"/services",mdxType:"MarketingLink"},"services page")," on our site."),(0,o.kt)("h2",{id:"third-party-hosting-recommendations"},"Third Party Hosting Recommendations"),(0,o.kt)("p",null,"Manifold can be successfully hosted in cloud computing environments. We think that ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"Digital Ocean")," is a good, low-cost solution with a simple, reliable backup strategy. We've also seen users have good luck hosting Manifold on ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/"},"AWS EC2 instances")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/"},"Google Cloud Compute instances")))}d.isMDXComponent=!0}}]);