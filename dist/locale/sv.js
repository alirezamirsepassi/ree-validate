!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.__ree_validate_locale__sv=e.__ree_validate_locale__sv||{},e.__ree_validate_locale__sv.js=t())}(this,function(){"use strict";var e,t={name:"sv",messages:{after:function(e,t){return"Fältet "+e+" måste vara efter "+t[0]+"."},alpha_dash:function(e){return"Fältet "+e+" får bara innehålla alfanumeriska tecken såväl som snedstreck och understreck."},alpha_num:function(e){return"Fältet "+e+" får bara innehålla alfanumeriska tecken."},alpha_spaces:function(e){return"Fältet "+e+" får bara innehålla alfabetiska tecken och mellanslag."},alpha:function(e){return"Fältet "+e+" får bara innehålla alfabetiska tecken."},before:function(e,t){return"Fältet "+e+" måste vara tidigare än "+t[0]+"."},between:function(e,t){return"Fältet "+e+" måste vara mellan "+t[0]+" och "+t[1]+"."},confirmed:function(e,t){return"Fältet "+e+" matchar inte "+t[0]+"."},date_between:function(e,t){return"Fältet "+e+" måste vara mellan "+t[0]+" och "+t[1]+"."},date_format:function(e,t){return"Fältet "+e+" måste ha formatatet "+t[0]+"."},decimal:function(e,t){void 0===t&&(t=[]);var n=t[0];return void 0===n&&(n="*"),"Fältet "+e+" måste vara numeriskt och får innehålla "+("*"===n?"":n)+" decimaltecken."},digits:function(e,t){return"Fältet "+e+" måste vara numeriskt och innehålla exakt "+t[0]+" siffor."},dimensions:function(e,t){return"Fältet "+e+" måste vara "+t[0]+" pixlar bred och "+t[1]+" pixlar hög."},email:function(e){return"Fältet "+e+" måste vara en giltig e-postadress."},ext:function(e){return"Fältet "+e+" måste vara en godkänd fil."},image:function(e){return"Fältet "+e+" måste vara en bildfil."},in:function(e){return"Fältet "+e+" måste vara ett godkänt alternativ."},ip:function(e){return"Fältet "+e+" måste vara en godkänd ip-adress."},max:function(e,t){return"Fältet "+e+" får inte vara längre än "+t[0]+" tecken."},mimes:function(e){return"Fältet "+e+" måste ha en filändelse."},min:function(e,t){return"Fältet "+e+" måste minst vara "+t[0]+" tecken."},not_in:function(e){return"Fältet "+e+" måste vara ett godkänt alternativ."},numeric:function(e){return"Fältet "+e+" får bara innehålla numeriska tecken."},regex:function(e){return"Fältet "+e+" har en felaktig formatering."},required:function(e){return"Fältet "+e+" är obligatoriskt."},size:function(e,t){var n,r,a,i=t[0];return"Fältet "+e+" måste vara mindre än "+(n=i,r=1024,a=0==(n=Number(n)*r)?0:Math.floor(Math.log(n)/Math.log(r)),1*(n/Math.pow(r,a)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][a])+"."},url:function(e){return"Fältet "+e+" är inte en godkänd URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[t.name]=t,e)),t});