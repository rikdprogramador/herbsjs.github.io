(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||i;return a?l.a.createElement(m,s(s({ref:t},c),{},{components:a})):l.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),l=a(7),i=(a(0),a(103)),r={id:"suma",title:"Suma",slug:"/libs/suma"},s={unversionedId:"validation/suma",id:"validation/suma",isDocsHomePage:!1,title:"Suma",description:"CI Build codecov",source:"@site/docs/validation/suma.md",slug:"/libs/suma",permalink:"/website/docs/libs/suma",editUrl:"https://github.com/herbsjs/website/edit/master/website/docs/validation/suma.md",version:"current",sidebar:"sidebar",previous:{title:"Features",permalink:"/website/docs/gotu/features"},next:{title:"\u2800\u2800\u2800",permalink:"/website/docs/glues"}},o=[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]},{value:"Validators",id:"validators",children:[{value:"Presence",id:"presence",children:[]},{value:"Allow Null",id:"allow-null",children:[]},{value:"Presence vs allowNull",id:"presence-vs-allownull",children:[]},{value:"Contains",id:"contains",children:[]},{value:"Length",id:"length",children:[]},{value:"Numericality",id:"numericality",children:[]},{value:"Datetime",id:"datetime",children:[]},{value:"Format",id:"format",children:[]},{value:"Type",id:"type",children:[]},{value:"URL",id:"url",children:[]},{value:"Null Values",id:"null-values",children:[]}]},{value:"TODO",id:"todo",children:[{value:"Contribute",id:"contribute",children:[]},{value:"License",id:"license",children:[]}]}],c={toc:o};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",{align:"center"},Object(i.b)("img",{src:"https://raw.githubusercontent.com/herbsjs/suma/master/docs/logo.png",height:"220"})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://github.com/herbsjs/suma/workflows/Node.js%20CI/badge.svg?branch=master",alt:"CI Build"})," ",Object(i.b)("a",{parentName:"p",href:"https://codecov.io/gh/herbsjs/suma"},Object(i.b)("img",{parentName:"a",src:"https://codecov.io/gh/herbsjs/suma/branch/master/graph/badge.svg",alt:"codecov"}))),Object(i.b)("p",null,"Suma helps with single value validations."),Object(i.b)("p",null,"Extensible, test covered and errors code only!"),Object(i.b)("p",null,"Suma does not validate schema or objects, just single values. For schema validation take a look at ",Object(i.b)("a",{parentName:"p",href:"https://github.com/herbsjs/gotu"},Object(i.b)("inlineCode",{parentName:"a"},"herbjs/gotu")),"."),Object(i.b)("h3",{id:"installing"},"Installing"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ npm install suma\n")),Object(i.b)("h3",{id:"using"},"Using"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const { validate } = require('suma')\n\nconst value = null\nconst validations = { presence: true }\nconst result = validate(value, validations) \n/* {\n    value: null,\n    errors: [{ cantBeEmpty: true }]\n} */\n")),Object(i.b)("h2",{id:"validators"},"Validators"),Object(i.b)("h3",{id:"presence"},"Presence"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"presence")," (boolean) - Validates that the specified value is not empty."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = ''\nconst validations = { presence: true }\nconst result = validate(value, validations) \n/* {\n    value: '',\n    errors: [{ cantBeEmpty: true }]\n} */\n")),Object(i.b)("h3",{id:"allow-null"},"Allow Null"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowNull")," (boolean) - Validates that the specified value is not ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = null\nconst validations = { allowNull: false }\nconst result = validate(value, validations) \n/* {\n    value: null,\n    errors: [{ cantBeNull: true }]\n} */\n")),Object(i.b)("h3",{id:"presence-vs-allownull"},"Presence vs allowNull"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"presence: true"),Object(i.b)("th",{parentName:"tr",align:null},"allowNull: false"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"'Text'"),Object(i.b)("td",{parentName:"tr",align:null},"Valid"),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"123"),Object(i.b)("td",{parentName:"tr",align:null},"Valid"),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"0"),Object(i.b)("td",{parentName:"tr",align:null},"Valid"),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"' '"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"''"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"[]"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"{}"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"null"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"undefined"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null})))),Object(i.b)("h3",{id:"contains"},"Contains"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"contains")," -  The contains validator is useful for validating allowance or restriction in certain values.\nIt checks that the given value exists in the target given by the ",Object(i.b)("strong",{parentName:"p"},"allowed")," or  ",Object(i.b)("strong",{parentName:"p"},"notAllowed")," option."),Object(i.b)("p",null,"You can specify the validator as a list, string or as an object (in which case the keys of the object are used)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"allowed option examples:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'xlarge\'\nconst validations = { contains: { allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'hello\'\nconst validations = { contains: { allowed: "lorem ipsum dolor" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ notContains: "lorem ipsum dolor" }]\n} */\n\n\nconst attr = \'price\'\nconst validations = { contains: { allowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n    value: \'price\',\n     errors: [{ notContains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"notAllowed option examples:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'small\'\nconst validations = { contains: { notAllowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'small\',\n    errors: [{ contains: ["small", "medium", "large"] }]\n} */\n\n\nconst value = \'hello\'\nconst validations = { contains: { notAllowed: "hello world" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ contains: "hello world" }]\n} */\n\n\nconst attr = \'type\'\nconst validations = { contains: { notAllowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n     value: \'type\',\n     errors: [{ contains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"using both options examples:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'\nconst value = \'regular\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'regular\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'xlarge\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [\n             { notContains: ["small", "medium", "large"] },\n             { contains: ["xlarge", "xxlarge", "tiny"] }\n            ]\n} */\n\n\n')),Object(i.b)("h3",{id:"length"},"Length"),Object(i.b)("p",null,"Validates the length of the value. "),Object(i.b)("p",null,"It is possible to specify length constraints in different ways:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"minimum")," (number) - The value cannot have less than the specified length"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"maximum")," (number) - The value cannot have more than the specified length"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"is")," (number) - The value length must be equal to the given length"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 'john'\nconst validations = { length: { minimum: 5, maximum: 3, is: 1 } }\nconst result = validate(value, validations) \n/* {\n    value: 'john',\n    errors: [\n        { isTooShort: 5 },\n        { isTooLong: 3 },\n        { wrongLength: 1 }\n    ]\n} */\n")),Object(i.b)("h3",{id:"numericality"},"Numericality"),Object(i.b)("p",null,"Validates constraints to acceptable numeric values."),Object(i.b)("p",null,"It must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," JS object. Use ",Object(i.b)("inlineCode",{parentName:"p"},"{ type: Number }")," to validate if the value is a valid JS ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," object."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"equalTo")," (number) - Specifies the value must be equal to the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"greaterThan")," (number) - Specifies the value must be greater than the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"greaterThanOrEqualTo")," (number) - Specifies the value must be greater than or equal to the supplied value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"lessThan")," (number) - Specifies the value must be less than the supplied value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"lessThanOrEqualTo")," (number) - Specifies the value must be less than or equal to the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"onlyInteger")," (boolean) - To specify that only integral numbers are allowed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 123.4\nconst validations = {\n    numericality: {\n        equalTo: 123,\n        greaterThan: 200,\n        greaterThanOrEqualTo: 123,\n        lessThan: 0,\n        lessThanOrEqualTo: 123,\n        onlyInteger: true\n    }\n}\nconst result = validate(value, validations) \n/* {\n    value: 123.4,\n    errors: [\n        { notEqualTo: 123 },\n        { notGreaterThan: 200 },\n        { notLessThan: 0 },\n        { notLessThanOrEqualTo: 123 },\n        { notAnInteger: true }\n    ]\n} */\n")),Object(i.b)("h3",{id:"datetime"},"Datetime"),Object(i.b)("p",null,"Validates constraints to acceptable date and time values."),Object(i.b)("p",null,"It must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," time JS object. Use ",Object(i.b)("inlineCode",{parentName:"p"},"{ type: Date }")," to validate if the value is a valid JS ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"before")," (date) - A date must be before this value to be valid "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"after")," (date) - A date must be after this value to be valid "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"isAt")," (date) - A date must be equal to value to be valid "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = new Date('2001-01-02')\nconst validations = {\n    datetime : {\n            before: new Date('2001-01-01'),\n            after: new Date('2001-01-03'),\n            isAt: new Date('2001-02-02')\n        }\n}\nconst result = validate(value, validations) \n/* {\n    value: '2001-01-02T00:00:00.000Z',\n    errors: [\n        { tooLate: '2001-01-01T00:00:00.000Z' },\n        { tooEarly: '2001-01-03T00:00:00.000Z') },\n        { notAt: '2001-02-02T00:00:00.000Z') }\n    ]\n} */\n")),Object(i.b)("h4",{id:"e-mail"},"E-mail"),Object(i.b)("p",null,"The email validator attempts to make sure the input is a valid email.\nValidating emails is tricky business due to the complex rules of email address formatting."),Object(i.b)("p",null,"For example ",Object(i.b)("strong",{parentName:"p"},"john.doe@gmail")," is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = 'just\\\"not\\\"right@example.com'\nconst validations = { email: true }\nconst result = validate(value, validations) \n/* {\n    value: 'just\\\"not\\\"right@example.com'\n    errors: [{ invalidEmail: true }]\n} */\n")),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"format")," (regex) -The format validator will validate a value against a regular expression of your chosing."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"\nconst pattern = /^[0-9]{8}$/ // or you can use new RegExp('^[0-9]{8}$')\nconst value = '05547-022'\nconst validations = { format: pattern }\nconst result = validate(value, validations) \n/* {\n    value: '05547-022',\n    errors: [{ invalidFormat: true }]\n} */\n\n\n")),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("p",null,"Type validator ensures a value is of the correct JavaScript type or a custom type."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"type")," - A valid native JavaScript type, a custom type or a array with type"),Object(i.b)("p",null,"Native JavaScript types:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Number")," - double-precision 64-bit binary format IEEE 754 value"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"String")," - a UTF\u201016 character sequence"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," - true or false"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Date")," - represents a single moment in time in a platform-independent format. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Object")," - the Object class represents one of JavaScript's data types."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Array")," - the Array class is a object that is used in the construction of arrays. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = '2001'\nconst validations = { type: Date }\nconst result = validate(value, validations)\n/* {\n    value: '2001',\n    errors:[{ wrongType: 'Date' }]\n} */\n\n")),Object(i.b)("p",null,"Custom types:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"\nclass User { ... }\n\nconst value = 'Admin'\nconst validations = { type: User }\nconst result = validate(value, validations)\n/* {\n    value: 'Admin',\n    errors:[{ wrongType: 'User' }]\n} */\n\n")),Object(i.b)("p",null,"Lists - Array with types:"),Object(i.b)("p",null,"It is possible to validate the type of elements of an array. Just use ",Object(i.b)("inlineCode",{parentName:"p"},"[type]"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = ['2']\nconst validations = { type: [Number] }\nconst result = validate(value, validations)\n/* {\n    value: ['2'],\n    errors:[{ wrongType: ['Number'] }]\n} */\n")),Object(i.b)("h3",{id:"url"},"URL"),Object(i.b)("p",null," The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found ",Object(i.b)("a",{parentName:"p",href:"https://gist.github.com/dperini/729294"},Object(i.b)("inlineCode",{parentName:"a"},"here")),". "),Object(i.b)("p",null," The following options are supported: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"schemes")," - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example ",Object(i.b)("strong",{parentName:"p"},'[".+"]'),"). The default value is ",Object(i.b)("strong",{parentName:"p"},'["http", "https"]'),". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowLocal")," (boolean) - A boolean that if true allows local hostnames such as ",Object(i.b)("strong",{parentName:"p"},"10.0.1.1")," or localhost. The default is ",Object(i.b)("strong",{parentName:"p"},"false"),". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowDataUrl")," (boolean) - A boolean that if true allows data URLs as defined in ",Object(i.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc2397"},Object(i.b)("inlineCode",{parentName:"a"},"RFC 2397")),". The default is ",Object(i.b)("strong",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const value = \"google.com\"\nconst validations = { url: true }\nconst result = validate(value, validations) \n/* {\n    value: 'google.com',\n    errors: [{ invalidURL: true }]\n} */\n\nconst value = \"http://localhost\"\nconst validations = { url: {allowLocal: true} }\nconst result = validate(value, validations) \n/* {\n    value: 'http://localhost',\n    errors: []\n} */\n\nconst options = {schemes: ['ftp']}\nconst value = \"ftp://google.com\"\nconst validations = { url: options }\nconst result = validate(value, validations) \n/* {\n    value: 'ftp://google.com',\n    errors: []\n} */\n")),Object(i.b)("h3",{id:"null-values"},"Null Values"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", ",Object(i.b)("inlineCode",{parentName:"p"},"length"),", ",Object(i.b)("inlineCode",{parentName:"p"},"numericality"),", ",Object(i.b)("inlineCode",{parentName:"p"},"format")," and ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," validators won't validate a value if it's ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"To ensure your your value is not null, use ",Object(i.b)("inlineCode",{parentName:"p"},"allowNull: false")," or ",Object(i.b)("inlineCode",{parentName:"p"},"presence: true"),"."),Object(i.b)("h2",{id:"todo"},"TODO"),Object(i.b)("p",null,"Validators:"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","presence / null"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","length "),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","type "),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","numericality (greater than, equal to, is integer, etc)"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","format - regex"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","date - earliest, latest"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","url"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","email"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","enums/lists - validate if value exists in the given list"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","reject list - validate if value does not exists in the given list ")),Object(i.b)("p",null,"Features:"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Error message only"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","No dependency "),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Doc every validators property"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow a custom functions for validaton"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Allow a conditional ",Object(i.b)("inlineCode",{parentName:"li"},"if")," functions for validaton"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Be able to inject a diferent ",Object(i.b)("inlineCode",{parentName:"li"},"checker")),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Better checks on validator's ",Object(i.b)("inlineCode",{parentName:"li"},"params"))),Object(i.b)("h3",{id:"contribute"},"Contribute"),Object(i.b)("p",null,"Come with us to make an awesome ",Object(i.b)("em",{parentName:"p"},"Suma"),"."),Object(i.b)("p",null,"Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),Object(i.b)("p",null,"If you would like to help contribute to this repository, please see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma/blob/master/.github/CONTRIBUTING.md"},"CONTRIBUTING")),Object(i.b)("h3",{id:"license"},"License"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Suma")," is released under the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/herbsjs/suma/blob/master/LICENSE.md"},"MIT license"),"."))}b.isMDXComponent=!0}}]);