(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,a){"use strict";var r=a(0),l=a.n(r),n=a(137),o=a(138),c=a(140),s=a(55),m=a.n(s),i=a(3),f=a(7),u=a(139);function _(e){var t=e.to,a=e.href,r=e.label,n=e.prependBaseUrlToHref,o=Object(f.a)(e,["to","href","label","prependBaseUrlToHref"]),s=Object(c.a)(t),m=Object(c.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(u.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:n?m:a}:{to:s},o),r)}var d=function(e){var t=e.url,a=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(o.useThemeConfig)().footer,t=e||{},a=t.copyright,r=t.links,s=void 0===r?[]:r,i=t.logo,f=void 0===i?{}:i,u=Object(c.a)(f.src);return e?l.a.createElement("footer",{className:Object(n.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},s&&s.length>0&&l.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:Object(n.a)("footer__title",m.a.footerHeader)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(_,e))}))):null)}))),(f||a)&&l.a.createElement("div",{className:"text--center"},f&&f.src&&l.a.createElement("div",{className:"margin-bottom--sm"},f.href?l.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:m.a.footerLogoLink},l.a.createElement(d,{alt:f.alt,url:u})):l.a.createElement(d,{alt:f.alt,url:u})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))):null}}}]);