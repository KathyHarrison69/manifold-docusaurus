(window.webpackJsonp=window.webpackJsonp||[]).push([[37,9],{134:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(22),o=t(145),c=t(156),i=t(139);var m=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return n.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(i.a,{className:"pagination-nav__link",to:t},n.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.a.createElement(i.a,{className:"pagination-nav__link",to:r},n.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},s=t(149);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,i=Object(l.default)().siteConfig.title,f=a.blogDescription,d=a.blogTitle,u="/"===a.permalink?i:d;return n.a.createElement(o.a,{title:u,description:f,wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:r})),n.a.createElement("main",{className:"col col--8"},t.map((function(e){var a=e.content;return n.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},n.a.createElement(a,null))})),n.a.createElement(m,{metadata:a})))))}},146:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(137),o=t(138),c=t(140),i=t(55),m=t.n(i),s=t(3),f=t(7),d=t(139);function u(e){var a=e.to,t=e.href,r=e.label,l=e.prependBaseUrlToHref,o=Object(f.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(c.a)(a),m=Object(c.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(d.a,Object(s.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?m:t}:{to:i},o),r)}var v=function(e){var a=e.url,t=e.alt;return n.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,i=void 0===r?[]:r,s=a.logo,f=void 0===s?{}:s,d=Object(c.a)(f.src);return e?n.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},i&&i.length>0&&n.a.createElement("div",{className:"row footer__links"},i.map((function(e,a){return n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:Object(l.a)("footer__title",m.a.footerHeader)},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?n.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(u,e))}))):null)}))),(f||t)&&n.a.createElement("div",{className:"text--center"},f&&f.src&&n.a.createElement("div",{className:"margin-bottom--sm"},f.href?n.a.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:m.a.footerLogoLink},n.a.createElement(v,{alt:f.alt,url:d})):n.a.createElement(v,{alt:f.alt,url:d})),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})))):null}}}]);