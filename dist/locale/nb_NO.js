!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__ree_validate_locale__nb_NO=e.__ree_validate_locale__nb_NO||{},e.__ree_validate_locale__nb_NO.js=n())}(this,function(){"use strict";var e={name:"nb_NO",messages:{after:function(e,n){return e+"-feltet må være etter "+n[0]+"."},alpha_dash:function(e){return e+"-feltet kan bare inneholde alfa-numeriske tegn, samt bindestrek og understrek."},alpha_num:function(e){return e+" kan bare inneholde alfanumeriske tegn."},alpha_spaces:function(e){return e+"-feltet kan bare inneholde alfa-numeriske teng og mellomrom."},alpha:function(e){return e+"-feltet kan bare inneholde bokstaver."},before:function(e,n){return e+"-feltet må være før "+n[0]+"."},between:function(e,n){return e+"-feltet må være imellom "+n[0]+" og "+n[1]+"."},confirmed:function(e){return e+"-feltet kan ikke bekreftes."},credit_card:function(e){return e+"-feltet er ugyldig."},date_between:function(e,n){return e+"-feltet må være imellom "+n[0]+" og "+n[1]+"."},date_format:function(e,n){return e+"-feltet må være i følgende format: "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=["*"]);var t=n[0];return e+"-feltet må være numerisk samt kan inneholde "+("*"===t?"":t)+" desimaler."},digits:function(e,n){return e+"-feltet må være numerisk og inneholde nøyaktig "+n[0]+" siffer."},dimensions:function(e,n){return e+"-feltet må være "+n[0]+" ganger "+n[1]+" piksler."},email:function(e){return e+"-feltet må være en gyldig E-post adresse."},ext:function(e){return e+"-feltet må være en gyldig fil."},image:function(e){return e+"-feltet må være et bilde."},in:function(e){return e+"-feltet må være en gyldig verdi."},ip:function(e){return e+"-feltet må være en gyldig IP Adresse."},max:function(e,n){return e+"-feltet kan ikke være lengre enn "+n[0]+" tegn."},max_value:function(e,n){return e+"-feltet må være "+n[0]+" eller mindre."},mimes:function(e){return e+"-feltet må ha en gyldig filtype."},min:function(e,n){return e+"-feltet må være minst "+n[0]+" tegn."},min_value:function(e,n){return e+"-feltet må være "+n[0]+" eller mer."},not_in:function(e){return e+"-feltet må være en gyldig verdi."},numeric:function(e){return e+"-feltet kan bare inneholde nummer."},regex:function(e){return e+"-feltet sin formatering er ugyldig."},required:function(e){return e+"-feltet er obligatorisk."},size:function(e,n){return e+"-feltet må være mindre enn "+n[0]+" KB."},url:function(e){return e+"-feltet er ikkje en gyldig URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(e),e});