"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={$createApp:function(t){var o={},r=new t;for(var e in r)o[e]=r[e];return Object.getOwnPropertyNames(r.constructor.prototype||[]).forEach(function(t){"constructor"!==t&&(o[t]=function(){r.constructor.prototype[t].apply(r,arguments)})}),o},$createPage:function(t){var o={},r=new t;return o.data=r.data||{},o.$parent=r.$parent,r.methods&&Object.getOwnPropertyNames(r.methods||[]).forEach(function(t){o[t]=r.methods[t]}),Object.getOwnPropertyNames(r.constructor.prototype||[]).forEach(function(t){"constructor"!==t&&(o[t]=r.constructor.prototype[t])}),Object.getOwnPropertyNames(r.constructor.prototype.__proto__||[]).forEach(function(t){"constructor"!==t&&(o[t]=r.constructor.prototype[t])}),o},$createComponent:function(t){var o={methods:{}},c=new t;for(var r in c)o[r]=c[r];return Object.getOwnPropertyNames(c.constructor.prototype||[]).forEach(function(t){"constructor"!==t&&(o[t]=c.constructor.prototype[t])}),Object.getOwnPropertyNames(c.constructor.prototype.__proto__||[]).forEach(function(t){"constructor"!==t&&(o.methods[t]=c.constructor.prototype[t],o[t]=c.constructor.prototype[t])}),o.created=function(){if(this.$app=c.$app,c.created&&"function"==typeof c.created){for(var t,o=arguments.length,r=Array(o),e=0;e<o;e++)r[e]=arguments[e];(t=c.created).call.apply(t,[this].concat(r))}},o}};