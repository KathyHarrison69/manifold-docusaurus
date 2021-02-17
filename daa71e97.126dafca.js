(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{121:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return d})),o.d(t,"default",(function(){return p}));var n=o(3),a=o(7),i=(o(0),o(136)),l=o(143),r={id:"project_collections",title:"Project Collections",sidebar_label:"Project Collections"},c={unversionedId:"backend/project_collections",id:"backend/project_collections",isDocsHomePage:!1,title:"Project Collections",description:'const defaultImageFormats = "GIF, JPEG, JPG, PNG";',source:"@site/docs/backend/project_collections.md",slug:"/backend/project_collections",permalink:"/manifold-docusaurus/docs/backend/project_collections",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/backend/project_collections.md",version:"current",sidebar_label:"Project Collections",sidebar:"docs",previous:{title:"Projects",permalink:"/manifold-docusaurus/docs/backend/projects"},next:{title:"Texts",permalink:"/manifold-docusaurus/docs/backend/text"}},s="GIF, JPEG, JPG, PNG",d=[{value:"About",id:"about",children:[]},{value:"Interface",id:"interface",children:[{value:"Sidebar",id:"sidebar",children:[]},{value:"Editing Pane",id:"editing-pane",children:[]}]},{value:"General Collection Settings",id:"general-collection-settings",children:[{value:"Collection Title",id:"collection-title",children:[]},{value:"Manual or Smart Collection",id:"manual-or-smart-collection",children:[]},{value:"Slug",id:"slug",children:[]},{value:"Description",id:"description",children:[]},{value:"Hero Image and Layout",id:"hero-image-and-layout",children:[]},{value:"Visible",id:"visible",children:[]},{value:"Show on Homepage",id:"show-on-homepage",children:[]},{value:"Collection Icon",id:"collection-icon",children:[]},{value:"Custom Icon",id:"custom-icon",children:[]},{value:"Social Card Image, Title, and Description",id:"social-card-image-title-and-description",children:[]}]},{value:"Settings Specific to Smart Collections",id:"settings-specific-to-smart-collections",children:[{value:"Number of Projects",id:"number-of-projects",children:[]},{value:"Featured Projects",id:"featured-projects",children:[]},{value:"Show Projects with These Subjects or Tags",id:"show-projects-with-these-subjects-or-tags",children:[]}]}],b={toc:d};function p(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},"About"),Object(i.b)("p",null,"Project Collections group and associate Projects with one another on your instance\u2019s homepage, overriding the default \u201cOur Projects\u201d library view from that space. Collections also appear in two other places on the frontend:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="1. A page gathering all Project Collections"',title:'"1.',A:!0,page:!0,gathering:!0,all:!0,Project:!0,'Collections"':!0},"https://{domain-name}/projects/project-collections\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="2. A page specific to each individual Project Collection"',title:'"2.',A:!0,page:!0,specific:!0,to:!0,each:!0,individual:!0,Project:!0,'Collection"':!0},"https://{domain-name}/projects/project-collection/{collection-slug}\n")),Object(i.b)("h2",{id:"interface"},"Interface"),Object(i.b)(l.a,{title:"Accessing this view",items:[{key:"Backend Location",value:"Projects \u2192 Project Collections"},{key:"Required User Role",value:"Admin, Editor, or Marketeer"}],mdxType:"Spec"}),Object(i.b)("h3",{id:"sidebar"},"Sidebar"),Object(i.b)("p",null,"The sidebar displays a list of all existing Project Collections on your instance and a button to create new ones."),Object(i.b)("p",null,"Each entry on the sidebar list includes the title of the collection, the number of projects contained within the collection, a visibility button, and drag bars."),Object(i.b)("p",null,"The title, visibility button, and drag bars are all selectable by mouse or keyboard from this list with a click or by pressing the space bar, respectively."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Title"),". Selecting the title of a collection will open its contents and settings in the editing pane in the main body of this page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Visibility"),". Activating the eye icon will hide the collection from ",Object(i.b)("em",{parentName:"li"},"all")," frontend views. When hidden, the eye icon will be shown with a diagonal slash across it. This button ",Object(i.b)("em",{parentName:"li"},"does not")," affect whether or not a Collection appears on the homepage\u2014that is configured separately in the Collection\u2019s settings.  "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Drag Bars"),". Appearing as two parallel, horizontal lines, you can use these to adjust the display order of the Collections (for both the home and Collections pages), either by clicking and dragging an entry with your mouse or by pressing the space bar and then either the up or down arrow keys on your keyboard.")),Object(i.b)("p",null,"Beneath the list of Collections is the ",Object(i.b)("inlineCode",{parentName:"p"},"+ Create New Collection")," button that opens a drawer from the right of the screen will a number of fields you can use to define the parameters of your new Project Collection."),Object(i.b)("h3",{id:"editing-pane"},"Editing Pane"),Object(i.b)("p",null,"The editing pane displays a header with the Collection\u2019s title and buttons to adjust its settings. For Manual Collections, the header also includes a button to manage which projects are part of the Collection."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Settings"),". When you click ",Object(i.b)("inlineCode",{parentName:"li"},"Settings"),", a drawer will open from the right of the screen with a number of fields that allow you to configure the Collection. These function of these fields are described in the following sections."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manage Projects"),". This button only appears in the header of Manual Collections. Selecting this button opens a drawer from the right where you can search or page through all the projects contained in the instance and manually add them to the collection with your mouse or keyboard.")),Object(i.b)("p",null,"Below the header, the ",Object(i.b)("inlineCode",{parentName:"p"},"Order Collection By")," dropdown determines how the projects in the Collection are ordered (e.g., by creation date, title). Manual Collections include a switch that makes its possible for you to bypass the pre-defined sorting categories and order the collection manually with your mouse or keyboard."),Object(i.b)("p",null,"A view of all the Projects in the Collection follows below the ordering options. Manual Collections will show as a vertical list that you can scroll from top to bottom in a single view. Smart collections will show Projects in a paginated grid. Selecting a project from this view takes you to that Project detail page."),Object(i.b)("h2",{id:"general-collection-settings"},"General Collection Settings"),Object(i.b)("p",null,"The settings in this section are common to both Manual and Smart Collections."),Object(i.b)("h3",{id:"collection-title"},"Collection Title"),Object(i.b)("p",null,"This title appears in library views at the top of the Collection beside the (optional) Collection Icon. This field is presently limited to plain text and does not accept Markdown or HTML syntax. A title is required to save a new Collection."),Object(i.b)("h3",{id:"manual-or-smart-collection"},"Manual or Smart Collection"),Object(i.b)("p",null,"Manual Collections allow you to directly pick and choose projects to add to a Collection using your mouse or keyboard. Smart Collections rely on you to set parameters the system will use to automatically populate and update the Collection."),Object(i.b)("p",null,"Most Collection settings are shared by both Manual "),Object(i.b)("p",null,"Manifold updates the list of Projects in Smart Collections every fifteen minutes. Adjusting and saving new settings to a Smart Collection will immediately refresh the cache of Projects in that collection."),Object(i.b)("h3",{id:"slug"},"Slug"),Object(i.b)("p",null,"The slug appears as the last component of the URL for the Collection\u2019s homepage:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"https://{domain-name}/projects/project-collection/{collection-slug}\n")),Object(i.b)("p",null,"If left blank, Manifold will adapt the Collection\u2019s title to suit as the slug."),Object(i.b)("h3",{id:"description"},"Description"),Object(i.b)("p",null,"The description is rendered below the Collection title in library views and can be styled with Markdown syntax. "),Object(i.b)("h3",{id:"hero-image-and-layout"},"Hero Image and Layout"),Object(i.b)("p",null,"The Collection Hero is an image that provides a visual identity to Collections in library views. Image files can be dropped onto the ",Object(i.b)("inlineCode",{parentName:"p"},"Hero Image")," field or selected using your device\u2019s file system by clicking the ",Object(i.b)("inlineCode",{parentName:"p"},"Upload a File")," link."),Object(i.b)("p",null,"The Hero will render according to your selection under ",Object(i.b)("inlineCode",{parentName:"p"},"Hero Layout")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Square Inset"),". Rendered as a square, the Hero will appear to the left of both the Collection Title and Description."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Wide Inset"),". Matching the width of the library container, the Hero will appear between the Collection Title and Description."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Full Bleed"),". The width of the hero will adapt to match the size of browser or viewport.")),Object(i.b)(l.a,{title:"Collection Hero Specs",items:[{key:"Square Inset Width",value:"340 px"},{key:"Wide Inset Width",value:"1135 px"},{key:"Full Bleed Width",value:"Responsive"},{key:"Height (for all layouts)",value:"340 px"},{key:"Format",value:s}],mdxType:"Spec"}),Object(i.b)("h3",{id:"visible"},"Visible"),Object(i.b)("p",null,"This toggle controls whether or not the Collection appears on the Manifold frontend. In the off position, the Collection will not appear on either the home or Collection pages. When toggled on, the Collection will appear ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"only"))," on the Project Collections page."),Object(i.b)("h3",{id:"show-on-homepage"},"Show on Homepage"),Object(i.b)("p",null,"This toggle promotes Collections that are visible (see above) to the instance\u2019s homepage. It is not possible to have a Collection appear only on the homepage and not on the Collection page."),Object(i.b)("p",null,"There is no artificial limit to the number of Collections that can appear on the homepage, but the more Collections that appear, the slower the page will be to load."),Object(i.b)("h3",{id:"collection-icon"},"Collection Icon"),Object(i.b)("p",null,"Manifold includes seven system icons you can choose from to associate with the Collection\u2019s title in library views: a stack of books laying flat, a lamp, a \u201cNew\u201d badge, three books standing with spines out, a globe, a pointing finger, and a mug."),Object(i.b)("p",null,"The Collection Icon is optional and can be selected (or deselected) using your mouse or keyboard."),Object(i.b)("p",null,"The Collection Icon is overridden by the Custom Icon when present."),Object(i.b)("h3",{id:"custom-icon"},"Custom Icon"),Object(i.b)("p",null,"Functionally the same as the Collection Icon, a Custom Icon gives you the option to upload your own icon image file instead of using a system one."),Object(i.b)("p",null,"Icon files can be dropped onto the ",Object(i.b)("inlineCode",{parentName:"p"},"Custom Icon")," field or selected using your device\u2019s file system by clicking the ",Object(i.b)("inlineCode",{parentName:"p"},"Upload a File")," link."),Object(i.b)(l.a,{title:"Custom Icon Specs",items:[{key:"Width",value:"60 px"},{key:"Height",value:"60 px"},{key:"Format",value:s}],mdxType:"Spec"}),Object(i.b)("h3",{id:"social-card-image-title-and-description"},"Social Card Image, Title, and Description"),Object(i.b)("p",null,"When sharing the URL for a Collection\u2019s homepage, Manifold includes Open Graph metadata that social media platforms display in posts as \u201dcards\u201d. Cards are made up of the following elements."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Image"),". Images should be prepared in an 8:5 ratio. When this field is left blank, Manifold will supply the Collection Hero image in its place, or, if there is no Collection Hero, the instance\u2019s ",Object(i.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/administering/configuring/theme_settings"},"Header Logo"),". Image files can be dropped onto the ",Object(i.b)("inlineCode",{parentName:"p"},"Social Card Image")," field or selected using your device\u2019s file system by clicking the ",Object(i.b)("inlineCode",{parentName:"p"},"Upload a File")," link."),Object(i.b)(l.a,{title:"Social Card Image Specs",items:[{key:"Width",value:"640 px"},{key:"Height",value:"400 px"},{key:"Format",value:s}],mdxType:"Spec"})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Title"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"Collection Title")," text is the default value.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Description"),". Manifold will supply text from the collection\u2019s ",Object(i.b)("inlineCode",{parentName:"p"},"Description")," when this field is left blank. If the Collection has no description, the system will use the ",Object(i.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/administering/configuring/general_settings"},Object(i.b)("inlineCode",{parentName:"a"},"Default Page Description")),"."),Object(i.b)("p",{parentName:"li"},"Markdown formatting ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"is not"))," honored in Open Graph metadata. Coding syntax will render as plain text in social media cards."))),Object(i.b)("h2",{id:"settings-specific-to-smart-collections"},"Settings Specific to Smart Collections"),Object(i.b)("p",null,"The following settings are only available to Smart Collections. Each serves as a filter the system uses to create and maintain the roster of Projects in the Collection. Only those Projects that match ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"all"))," the set criteria are included in the Collection."),Object(i.b)("h3",{id:"number-of-projects"},"Number of Projects"),Object(i.b)("p",null,"By default, Manifold caps the number of Projects the system will ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"display"))," in a Collection to eight. Projects that meet the Collection\u2019s inclusion criteria beyond that limit are still indexed as part of the Collection; however only those eight that match the ",Object(i.b)("inlineCode",{parentName:"p"},"Order Collection By")," sorting filter (see ",Object(i.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/project_collections#editing-pane"},"Editing Pane")," above) will render in library views."),Object(i.b)("p",null,"You can adjust the default limit higher or lower here\u2014we recommend by fours, since the library view spans four Projects\u2014",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"or"))," you can remove the limit entirely by clearing the number from this field and saving it blank."),Object(i.b)("h3",{id:"featured-projects"},"Featured Projects"),Object(i.b)("p",null,"This toggle limits the Collection to accepting just those Projects that have been marked as ",Object(i.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#featured"},Object(i.b)("inlineCode",{parentName:"a"},"Featured")),"."),Object(i.b)("h3",{id:"show-projects-with-these-subjects-or-tags"},"Show Projects with These Subjects or Tags"),Object(i.b)("p",null,"These two dropdowns surface existing Subjects and Tags to limit which projects are accepted into the Collection. You can nominate multiple Subjects or Tags as filters."),Object(i.b)("p",null,"Existing filters appear below the respective dropdown and can be removed as Collection criteria from that space with your mouse or keyboard."))}p.isMDXComponent=!0},136:function(e,t,o){"use strict";o.d(t,"a",(function(){return b})),o.d(t,"b",(function(){return h}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},b=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(o),u=n,h=b["".concat(l,".").concat(u)]||b[u]||p[u]||i;return o?a.a.createElement(h,r(r({ref:t},s),{},{components:o})):a.a.createElement(h,r({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var s=2;s<i;s++)l[s]=o[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},137:function(e,t,o){"use strict";function n(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},141:function(e,t,o){"use strict";var n=o(0),a=o(142);t.a=function(){var e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},142:function(e,t,o){"use strict";var n=o(0),a=o.n(n).a.createContext(void 0);t.a=a},143:function(e,t,o){"use strict";var n=o(0),a=o.n(n),i=o(137),l=o(56),r=o.n(l),c=o(141);t.a=function(e){var t=void 0===e?props:e,o=t.title,n=t.subtitle,l=t.items,s=t.children,d=Object(c.a)();d.isDarkTheme,d.setLightTheme,d.setDarkTheme;return a.a.createElement("div",{className:Object(i.a)(r.a.specContainer)},a.a.createElement("div",{className:Object(i.a)(r.a.specTitle)},o,n&&a.a.createElement("span",{className:Object(i.a)(r.a.specSubtitle)},n)),l&&a.a.createElement("div",{className:Object(i.a)(r.a.specTable)},a.a.createElement("table",{width:"100%"},a.a.createElement("tbody",null,l.map((function(e,t){return a.a.createElement("tr",{key:e.key},a.a.createElement("th",{className:Object(i.a)(r.a.specKey)},e.key),a.a.createElement("td",{className:Object(i.a)(r.a.specValue)},e.value))}))))),s||null)}}}]);