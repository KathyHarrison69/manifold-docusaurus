(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[9484],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,p=m["".concat(i,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(p,l(l({ref:t},u),{},{components:n})):r.createElement(p,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,d=e.values,m=e.groupId,f=e.className,p=(0,a.Z)(),b=p.tabGroupChoices,v=p.setTabGroupChoices,y=(0,r.useState)(u),h=y[0],g=y[1],w=r.Children.toArray(e.children),T=[];if(null!=m){var k=b[m];null!=k&&k!==h&&d.some((function(e){return e.value===k}))&&g(k)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),r=d[n].value;g(r),null!=m&&(v(m,r),setTimeout((function(){var e,n,r,a,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var r=T.indexOf(e.target)+1;n=T[r]||T[0];break;case i:var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1232:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o={specContainer:"specContainer_3QmF",specTitleWrapper:"specTitleWrapper_3l3P",specTitle:"specTitle_1y8p",specSubtitle:"specSubtitle_2144",specContent:"specContent_21W2",specTable:"specTable_y2B1"},l=n(5350),s=function(e){var t=void 0===e?props:e,n=t.title,s=t.subtitle,i=t.items,c=t.children,u=(0,l.Z)();u.isDarkTheme,u.setLightTheme,u.setDarkTheme;return r.createElement("div",{className:(0,a.Z)(o.specContainer)},n&&r.createElement("div",{className:(0,a.Z)(o.specTitleWrapper)},r.createElement("span",{className:(0,a.Z)(o.specTitle)},n),s&&r.createElement("span",{className:(0,a.Z)(o.specSubtitle)},s)),i&&r.createElement("div",{className:(0,a.Z)(o.specTable)},r.createElement("table",{width:"100%"},r.createElement("tbody",null,i.map((function(e,t){return r.createElement("tr",{key:e.key},r.createElement("th",{className:(0,a.Z)(o.specKey)},e.key),r.createElement("td",{className:(0,a.Z)(o.specValue)},e.value))}))))),c?r.createElement("div",{className:(0,a.Z)(o.specContent)},c):null)}},157:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return p}});var r=n(4034),a=n(9973),o=n(7294),l=n(3905),s=n(9782),i=(n(1232),s.default.customFields.data.releases);var c=function(e){var t=e.os,n=i[t];return n?(console.log(n),o.createElement(o.Fragment,null,Object.values(n).map((function(e){return o.createElement("div",{key:e.build_version},o.createElement("h3",null,"Manifold v",e.build_version),o.createElement("p",null,o.createElement("a",{href:e.url},"Download Package for ",e.platform," ",e.platform_version," ",e.arch),o.createElement("br",null),o.createElement("small",null,o.createElement("strong",null,"SHA256:")," ",e.sha256),o.createElement("br",null)))})))):"There are no releases for this operating system yet. Check back soon for a v6 release!"},u=n(1395),d=n(8215),m={id:"downloads",title:"Downloads",sidebar_label:"Downloads"},f={unversionedId:"administering/reference/downloads",id:"administering/reference/downloads",isDocsHomePage:!1,title:"Downloads",description:"<Tabs",source:"@site/docs/administering/reference/downloads.mdx",sourceDirName:"administering/reference",slug:"/administering/reference/downloads",permalink:"/manifold-docusaurus/docs/administering/reference/downloads",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/reference/downloads.mdx",version:"current",sidebar_label:"Downloads",frontMatter:{id:"downloads",title:"Downloads",sidebar_label:"Downloads"},sidebar:"docs",previous:{title:"API Rake Tasks",permalink:"/manifold-docusaurus/docs/administering/reference/api_rake_tasks"},next:{title:"Manifold Library",permalink:"/manifold-docusaurus/docs/using/manifold_library"}},p=[],b={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u.Z,{groupId:"os",defaultValue:"ubuntu18",values:[{label:"Ubuntu 20",value:"ubuntu20"},{label:"Ubuntu 18",value:"ubuntu18"},{label:"CentOS 8",value:"centos8"},{label:"CentOS 7",value:"centos7"}],mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"ubuntu20",mdxType:"TabItem"},(0,l.kt)(c,{os:"ubuntu20",mdxType:"Downloads"})),(0,l.kt)(d.Z,{value:"ubuntu18",mdxType:"TabItem"},(0,l.kt)(c,{os:"ubuntu18",mdxType:"Downloads"})),(0,l.kt)(d.Z,{value:"centos8",mdxType:"TabItem"},(0,l.kt)(c,{os:"centos8",mdxType:"Downloads"})),(0,l.kt)(d.Z,{value:"centos7",mdxType:"TabItem"},(0,l.kt)(c,{os:"centos7",mdxType:"Downloads"}))))}v.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);