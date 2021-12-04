"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[1705],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=a,d=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46138:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"roadmap",title:"Herbs Roadmap",sidebar_label:"Roadmap",slug:"/project/Roadmap",custom_edit_url:null},p=void 0,l={unversionedId:"project/roadmap",id:"project/roadmap",isDocsHomePage:!1,title:"Herbs Roadmap",description:"Vision",source:"@site/docs/project/roadmap.md",sourceDirName:"project",slug:"/project/Roadmap",permalink:"/docs/project/Roadmap",editUrl:null,tags:[],version:"current",frontMatter:{id:"roadmap",title:"Herbs Roadmap",sidebar_label:"Roadmap",slug:"/project/Roadmap",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Ecosystem",permalink:"/docs/project/ecosystem"},next:{title:"How to contribute",permalink:"/docs/project/contributing"}},u=[{value:"Vision",id:"vision",children:[],level:2},{value:"Short term",id:"short-term",children:[],level:2},{value:"Bigger Goals",id:"bigger-goals",children:[],level:2}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vision"},"Vision"),(0,o.kt)("p",null,"In the Herbs community we are always trying to rethink how to improve the current way of developing software. Not only improving the developer experience (which is a very important part for us), but also the other people involved in the process, such as business stakeholders, product managers and QAs, that is, everyone involved in the definition, implementation, validation and use of a system, creating an amazing domain-centric experience. "),(0,o.kt)("p",null,"Even though Herbs has already developed good conceptual pillars, primitives (entities, use cases, etc.) and glues, and being a library used in dozens of microservices, we believe that our journey in transforming how we make software is just beginning."),(0,o.kt)("h2",{id:"short-term"},"Short term"),(0,o.kt)("p",null,"If you're wondering where to start contributing to the project, here's a list that might help. These are issues that will have a major impact on the project."),(0,o.kt)("p",null,"Some already have implementations or proof-of-concepts in progress, some don't have any PR yet, and still others are just discussing and trying to figure out the problem. Whatever the stage of each issue, it will be great to have your contribution."),(0,o.kt)("p",null,"Enjoy!"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(Last update Nov/21)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"CLI - Issues and Bugs")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs-cli/issues?q=is%3Aissue+is%3Aopen+label%3Abug"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Developer Experience (DX) - The CLI is the first contact a dev will have with Herbs. They should have a amazing experience and signal the best software quality possible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Convert a Entity to an UC Request")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu/issues/53"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Improve DX, specially for CLI, so devs don't have to change UC request when a entity changes. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Object Discovery")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs/issues/11"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Currently it's hard to find a object like use cases and entities in a project. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"ID Field")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu/issues/46"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Improve DX and metadata for glues like Knex, Shelf and others.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Shelf - Bugs")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbsshelf/issues?q=is%3Aissue+is%3Aopen+label%3Abug"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Shelf is a big part of DX. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Context inside uc.authorize()")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/buchu/issues/44"},"issue")),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("em",{parentName:"p"},"Why?")," Sometimes it will be necessary to access repositories on uc.authorize(). This is a hard issue to solve since it can easily bring some breaking changes."))),(0,o.kt)("h2",{id:"bigger-goals"},"Bigger Goals"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First We Need To Bring Harmony")),(0,o.kt)("p",null,"We grew up quickly, with many wonderful and innovative ideas and contributions. But we need to bring harmony between these various contributions, creating integrations between the new parts that have emerged in the project recently."),(0,o.kt)("p",null,"This goal is important as new Herbs users should find a more peaceful and integrated experience. To achieve this it is necessary to (1) fix bugs, (2) improve the implementations in the glues so that they absorb and make use of the innovations that happened in Buchu and Gotu and (3) improve the CLI experience. Check the ",(0,o.kt)("a",{parentName:"p",href:"#short-term"},"short term goals"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Changing And Evolving Our Domain Should Be A Pleasure")),(0,o.kt)("p",null,"Creating a project from scratch is always a pleasure but as the project grows that pleasure starts to fade, as the pain of changing it grows too. What's most shocking is that we create a few projects from scratch but we spend a lot of time evolving them. In other words, the ability to change, evolve and adapt your domain without the fear of doing so is paramount."),(0,o.kt)("p",null,"For that we need to look into how CLI and glues can improve this constant changing experience, whether in the context of a sprint or in the development cycle within the developer's terminal trying to model the domain."),(0,o.kt)("p",null,"For example, the CLI not only needs to create an initial code but to understand that domains evolve (use cases, entities, etc.) and that the infrastructure needs to evolve together, such as migrations, repositories, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Capturing Intentions - Scenarios And Tests")),(0,o.kt)("p",null,"As a project premise and vision, automated testing is an inseparable part of Herbs. However, we understand that we have not yet explored the full potential of this tool."),(0,o.kt)("p",null,"For example, when we look at the tests that currently exercise use cases, we see business scenarios that should be exposed and validated by other stakeholders (product managers, business analysts, QA, etc.), just as it is possible to do today with the use cases and their steps."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A Bigger Garden - Growing The Ecosystem")),(0,o.kt)("p",null,"Today's primitives, metadata and glues have the potential to create an even larger ecosystem of libraries and solutions that use Herbs. We need to create a strong, welcoming and enabling community so that this ecosystem can flourish."))}h.isMDXComponent=!0}}]);