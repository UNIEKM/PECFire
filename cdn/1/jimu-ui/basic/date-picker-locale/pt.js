System.register([],(function(a,e){return{execute:function(){a((()=>{"use strict";var a={97980:(a,e)=>{e.buildFormatLongFn=function(a){return(e={})=>{const t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}}},46746:(a,e)=>{e.buildLocalizeFn=function(a){return(e,t)=>{let i;if("formatting"===(t?.context?String(t.context):"standalone")&&a.formattingValues){const e=a.defaultFormattingWidth||a.defaultWidth,n=t?.width?String(t.width):e;i=a.formattingValues[n]||a.formattingValues[e]}else{const e=a.defaultWidth,n=t?.width?String(t.width):a.defaultWidth;i=a.values[n]||a.values[e]}return i[a.argumentCallback?a.argumentCallback(e):e]}}},20640:(a,e)=>{e.buildMatchFn=function(a){return(e,t={})=>{const i=t.width,n=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],o=e.match(n);if(!o)return null;const r=o[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,e){for(let t=0;t<a.length;t++)if(e(a[t]))return t;return}(d,(a=>a.test(r))):function(a,e){for(const t in a)if(Object.prototype.hasOwnProperty.call(a,t)&&e(a[t]))return t;return}(d,(a=>a.test(r)));let m;m=a.valueCallback?a.valueCallback(s):s,m=t.valueCallback?t.valueCallback(m):m;return{value:m,rest:e.slice(r.length)}}}},2528:(a,e)=>{e.buildMatchPatternFn=function(a){return(e,t={})=>{const i=e.match(a.matchPattern);if(!i)return null;const n=i[0],o=e.match(a.parsePattern);if(!o)return null;let r=a.valueCallback?a.valueCallback(o[0]):o[0];r=t.valueCallback?t.valueCallback(r):r;return{value:r,rest:e.slice(n.length)}}}},5720:(a,e)=>{e.formatDistance=void 0;const t={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"aproximadamente 1 hora",other:"aproximadamente {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"aproximadamente 1 semana",other:"aproximadamente {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"aproximadamente 1 m\xeas",other:"aproximadamente {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"aproximadamente 1 ano",other:"aproximadamente {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};e.formatDistance=(a,e,i)=>{let n;const o=t[a];return n="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",String(e)),i?.addSuffix?i.comparison&&i.comparison>0?"daqui a "+n:"h\xe1 "+n:n}},68513:(a,e,t)=>{e.formatLong=void 0;var i=t(97980);e.formatLong={date:(0,i.buildFormatLongFn)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.buildFormatLongFn)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.buildFormatLongFn)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},78727:(a,e)=>{e.formatRelative=void 0;const t={lastWeek:a=>{const e=a.getDay();return"'"+(0===e||6===e?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};e.formatRelative=(a,e,i,n)=>{const o=t[a];return"function"==typeof o?o(e):o}},16167:(a,e,t)=>{e.localize=void 0;var i=t(46746);e.localize={ordinalNumber:(a,e)=>Number(a)+"\xba",era:(0,i.buildLocalizeFn)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["antes de Cristo","depois de Cristo"]},defaultWidth:"wide"}),quarter:(0,i.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:a=>a-1}),month:(0,i.buildLocalizeFn)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,i.buildLocalizeFn)({values:{narrow:["d","s","t","q","q","s","s"],short:["dom","seg","ter","qua","qui","sex","s\xe1b"],abbreviated:["dom","seg","ter","qua","qui","sex","s\xe1b"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,i.buildLocalizeFn)({values:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"noite",night:"madrugada"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"},wide:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da noite",night:"da madrugada"}},defaultFormattingWidth:"wide"})}},53327:(a,e,t)=>{e.match=void 0;var i=t(20640),n=t(2528);e.match={ordinalNumber:(0,n.buildMatchPatternFn)({matchPattern:/^(\d+)(\xba|\xaa)?/i,parsePattern:/\d+/i,valueCallback:a=>parseInt(a,10)}),era:(0,i.buildMatchFn)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era comum|depois de cristo|era comum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era comum)/i,/^(depois de cristo|era comum)/i]},defaultParseWidth:"any"}),quarter:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba|\xaa)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:a=>a+1}),month:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ab/i,/^mai/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.buildMatchFn)({matchPatterns:{narrow:/^[dstq]/i,short:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[\xe1a]b)/i,wide:/^(domingo|segunda-?\s?feira|ter\xe7a-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^s/i,/^t/i,/^q/i,/^q/i,/^s/i,/^s/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[\xe1a]/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.buildMatchFn)({matchPatterns:{narrow:/^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i,any:/^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[\xe3a]|tarde|noite|madrugada))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^meia/i,noon:/^meio/i,morning:/manh[\xe3a]/i,afternoon:/tarde/i,evening:/noite/i,night:/madrugada/i}},defaultParseWidth:"any"})}}},e={};function t(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return a[i](o,o.exports,t),o.exports}var i={};return(()=>{var a=i;a.pt=void 0;var e=t(5720),n=t(68513),o=t(78727),r=t(16167),d=t(53327);a.pt={code:"pt",formatDistance:e.formatDistance,formatLong:n.formatLong,formatRelative:o.formatRelative,localize:r.localize,match:d.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),i})())}}}));