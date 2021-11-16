"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[2532],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70932:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],s={id:"features",title:"Entity Features",sidebar_label:"Features",slug:"/entity/features"},o=void 0,p={unversionedId:"entity/features",id:"entity/features",isDocsHomePage:!1,title:"Entity Features",description:"Creating an Entity",source:"@site/docs/entity/features.md",sourceDirName:"entity",slug:"/entity/features",permalink:"/docs/entity/features",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/entity/features.md",tags:[],version:"current",frontMatter:{id:"features",title:"Entity Features",sidebar_label:"Features",slug:"/entity/features"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/docs/entity/getting-started"},next:{title:"Validations",permalink:"/docs/entity/validation"}},u=[{value:"Creating an Entity",id:"creating-an-entity",children:[],level:2},{value:"Fields",id:"fields",children:[{value:"Scalar types",id:"scalar-types",children:[],level:3},{value:"Entity type",id:"entity-type",children:[],level:3},{value:"Array field type",id:"array-field-type",children:[],level:3},{value:"Default value",id:"default-value",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[],level:2},{value:"Validation",id:"validation",children:[{value:"Check Validation",id:"check-validation",children:[],level:3},{value:"Type Validation",id:"type-validation",children:[],level:3},{value:"Value Validation",id:"value-validation",children:[],level:3}],level:2},{value:"Serialization",id:"serialization",children:[{value:"fromJSON(value)",id:"fromjsonvalue",children:[],level:3},{value:"JSON.stringify(entity)",id:"jsonstringifyentity",children:[],level:3}],level:2},{value:"Instance Type Check - <code>Entity.parentOf</code>",id:"instance-type-check---entityparentof",children:[],level:2},{value:"Entity Type Check - <code>entity.isEntity</code>",id:"entity-type-check---entityisentity",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-an-entity"},"Creating an Entity"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"entity(name, body)"),", where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"name"),": entity name.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"body"),": object containing entity structure: fields and methods.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"return: a Herbs entity class."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { entity, field } = require('@herbsjs/herbs')\n\nconst Customer = \n    entity('Customer', {\n        id: field(Number),\n        name: field(String),\n        isVIP() {\n            ...\n        }\n    })\n\nconst aCustomer = new Customer()\n")),(0,r.kt)("h2",{id:"fields"},"Fields"),(0,r.kt)("p",null,"Defines the fields (properties) of an entity."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"field(type, options)"),", where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"type"),": a scalar (JavaScript) type or a custom type."),(0,r.kt)("p",{parentName:"li"},"  Ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"field(String)"),". "),(0,r.kt)("p",{parentName:"li"},"  In order to define a field that holds an array instead of a single value use ",(0,r.kt)("inlineCode",{parentName:"p"},"[type]"),". "),(0,r.kt)("p",{parentName:"li"},"  Ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"field([String])"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"options"),": defines the field options (ex: validations, default value, etc.). "),(0,r.kt)("p",{parentName:"li"},"  Ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"field(Number, { validation: { presence: true } })"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"return: an entity field definition instance."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Order = \n    entity('Order', {\n    id: field(Number, {\n        validation: { presence: true, length: { minimum: 3 } }\n    }),\n    date: field(Date),\n    items: field([OrderItems]),\n    ...\n})\n")),(0,r.kt)("h3",{id:"scalar-types"},"Scalar types"),(0,r.kt)("p",null,"A field in an entity can have basic types, the same as those used by JavaScript:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Number"),": double-precision 64-bit binary format IEEE 754 value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"String"),": a UTF\u201016 character sequence"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),": true or false"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Date"),": represents a single moment in time in a platform-independent format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object"),": the Object class represents a generic reference value type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String),\n        lastAccess: field(Date),\n        accessCount: field(Number),\n        hasAccess: field(Boolean)\n    })\n")),(0,r.kt)("h3",{id:"entity-type"},"Entity type"),(0,r.kt)("p",null,"For complex types, with deep relationship between entities, a field can have an entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plan: field(Plan)\n    })\n")),(0,r.kt)("h3",{id:"array-field-type"},"Array field type"),(0,r.kt)("p",null,"In order to define a field that holds an array instead of a single value use ",(0,r.kt)("inlineCode",{parentName:"p"},"field([String])"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Post =\n    entity('Post', {\n        ...\n        tags: field([String])\n    })\n")),(0,r.kt)("p",null,"For complex types, with deep relationship between entities, a field can contain a list of entity type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n    })\n\nconst User = \n    entity('User', {\n        ...\n        plans: field([Plan])\n    })\n")),(0,r.kt)("h3",{id:"default-value"},"Default value"),(0,r.kt)("p",null,"It is possible to define a default value when an entity instance is initiated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),(0,r.kt)("p",null,"If the default value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"function"),", it will call the function and it will return the value as default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        hasAccess: field(Boolean, { default: () => false })\n    })\n\n\nconst user = new User()\nuser.hasAccess // false\n")),(0,r.kt)("p",null,"When not specified, the default value (for scalar and entity types) is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("p",null,"For reference types (like arrays) you ",(0,r.kt)("strong",{parentName:"p"},"must")," use functions in order to create a new object for every instance."),(0,r.kt)("p",null,"\u274c Wrong: ",(0,r.kt)("inlineCode",{parentName:"p"},"items: field([Item], { default: [] })")),(0,r.kt)("p",null,"\u2705 Right:  ",(0,r.kt)("inlineCode",{parentName:"p"},"items: field([Item], { default: () => [] })")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Defines the methods (actions) of an entity."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const User =\n    entity(\'User\', {\n        ...\n        role: field(String),\n        hasAccess() { return this.role === "admin" },\n    })\n\nconst aUser = new User()\naUser.role = "admin"\nconst canAccess = aUser.hasAccess()\n')),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"The values of an entity fields can be validated against the fields types or values validations."),(0,r.kt)("h3",{id:"check-validation"},"Check Validation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance.isValid()"),": returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if all the validations passed. It calls ",(0,r.kt)("inlineCode",{parentName:"p"},".validate()")," internally."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance.validate()"),": processes the validation and loads all errors into ",(0,r.kt)("inlineCode",{parentName:"p"},".errors"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance.errors"),": list of errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String),\n    })\n\nconst user = new User()\nuser.name = \"Joe\"\nuser.validate() \nuser.errors // {}\nuser.isValid() // true\n")),(0,r.kt)("h3",{id:"type-validation"},"Type Validation"),(0,r.kt)("p",null,"It is possible to validate the type of a value ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Plan = \n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst User = \n    entity('User', {\n        name: field(String),\n        plan: field(Plan)\n    })\n\nconst user = new User()\nuser.name = 42\nuser.plan.monthlyCost = true\nuser.validate() \nuser.errors // { name: [ wrongType: 'String' ], plan: { monthlyCost: [ wrongType: 'Number' ] } }\nuser.isValid() // false\n")),(0,r.kt)("p",null,"You can also simplify your validation method using ",(0,r.kt)("inlineCode",{parentName:"p"},"isValid()")," method that executes a validation for you entity and returns true/false in a single execution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst Plan =\n    entity('Plan', {\n        ...\n        monthlyCost: field(Number),\n    })\n\nconst plan = new Plan()\nplan.plan.monthlyCost = true\nplan.isValid() // false\nplan.errors // { monthlyCost: [ wrongType: 'Number' ] }\n\n")),(0,r.kt)("h3",{id:"value-validation"},"Value Validation"),(0,r.kt)("p",null,"It is possible to validate values through pre-existing validators or custom validators."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"{ validation: ... }")," to specify the ",(0,r.kt)("a",{parentName:"p",href:"/docs/entity/validation"},"validators"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        ...\n        password: field(String, {\n            validation: {\n                presence: true,\n                length: { minimum: 6 }\n            }\n        })\n    })\n\nconst user = new User()\nuser.password = '1234'\nuser.validate() \nuser.errors // { password: [ { isTooShort: 6 } ] }\nuser.isValid() // false\n")),(0,r.kt)("h2",{id:"serialization"},"Serialization"),(0,r.kt)("h3",{id:"fromjsonvalue"},"fromJSON(value)"),(0,r.kt)("p",null,"Returns a new instance of a entity based on a object or a string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const User = \n    entity('User', {\n        name: field(String)\n    })\n\n// from object\nconst user = User.fromJSON({ name: 'Beth'})\n// or string\nconst user = User.fromJSON(`{ \"name\": \"Beth\"}`)\n")),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJSON")," serializes only keys that have been defined in the entity as fields. If you want to add other keys during serialization, use ",(0,r.kt)("inlineCode",{parentName:"p"},".fromJSON(data, { allowExtraKeys: true })"),"."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"fromJSON")," ",(0,r.kt)("strong",{parentName:"p"},"default field")," values will be applied for keys not present in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,r.kt)("h3",{id:"jsonstringifyentity"},"JSON.stringify(entity)"),(0,r.kt)("p",null,"To serialize an entity to JSON string use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.toJSON")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const json = JSON.stringify(user) // { "name": "Beth" }\n')),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"toJSON")," serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use ",(0,r.kt)("inlineCode",{parentName:"p"},"entity.toJSON({ allowExtraKeys: true })"),"."),(0,r.kt)("h2",{id:"instance-type-check---entityparentof"},"Instance Type Check - ",(0,r.kt)("inlineCode",{parentName:"h2"},"Entity.parentOf")),(0,r.kt)("p",null,"Checks if a instance is the same type from its parent entity class (similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceOf"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"        const User = entity('User', {...})\n        const Customer = entity('Customer', {...})\n\n        const aUser = new User()\n        const aCustomer = new Customer()\n        \n        User.parentOf(aUser) // true\n        User.parentOf(aCustomer) // false\n")),(0,r.kt)("h2",{id:"entity-type-check---entityisentity"},"Entity Type Check - ",(0,r.kt)("inlineCode",{parentName:"h2"},"entity.isEntity")),(0,r.kt)("p",null,"Checks if an object is a Gotu Entity class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { entity } = require('@herbsjs/herbs')\n\n    const AnEntity = entity('A entity', {})\n\n    const instance1 = new AnEntity()\n    \n    entity.isEntity(AnEntity) // true\n    entity.isEntity(Object) // false\n")))}c.isMDXComponent=!0}}]);