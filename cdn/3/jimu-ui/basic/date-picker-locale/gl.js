System.register([],(function(e,a){return{execute:function(){e((()=>{"use strict";var e={97980:(e,a)=>{a.buildFormatLongFn=function(e){return(a={})=>{const t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}},46746:(e,a)=>{a.buildLocalizeFn=function(e){return(a,t)=>{let n;if("formatting"===(t?.context?String(t.context):"standalone")&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,o=t?.width?String(t.width):a;n=e.formattingValues[o]||e.formattingValues[a]}else{const a=e.defaultWidth,o=t?.width?String(t.width):e.defaultWidth;n=e.values[o]||e.values[a]}return n[e.argumentCallback?e.argumentCallback(a):a]}}},20640:(e,a)=>{a.buildMatchFn=function(e){return(a,t={})=>{const n=t.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=a.match(o);if(!r)return null;const i=r[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,a){for(let t=0;t<e.length;t++)if(a(e[t]))return t;return}(d,(e=>e.test(i))):function(e,a){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&a(e[t]))return t;return}(d,(e=>e.test(i)));let m;m=e.valueCallback?e.valueCallback(s):s,m=t.valueCallback?t.valueCallback(m):m;return{value:m,rest:a.slice(i.length)}}}},2528:(e,a)=>{a.buildMatchPatternFn=function(e){return(a,t={})=>{const n=a.match(e.matchPattern);if(!n)return null;const o=n[0],r=a.match(e.parsePattern);if(!r)return null;let i=e.valueCallback?e.valueCallback(r[0]):r[0];i=t.valueCallback?t.valueCallback(i):i;return{value:i,rest:a.slice(o.length)}}}},74411:(e,a)=>{a.formatDistance=void 0;const t={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor dunha hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"arredor dunha semana",other:"arredor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor dun ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"m\xe1is dun ano",other:"m\xe1is de {{count}} anos"},almostXYears:{one:"case un ano",other:"case {{count}} anos"}};a.formatDistance=(e,a,n)=>{let o;const r=t[e];return o="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),n?.addSuffix?n.comparison&&n.comparison>0?"en "+o:"hai "+o:o}},95062:(e,a,t)=>{a.formatLong=void 0;var n=t(97980);a.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} '\xe1s' {{time}}",long:"{{date}} '\xe1s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},10480:(e,a)=>{a.formatRelative=void 0;const t={lastWeek:"'o' eeee 'pasado \xe1' LT",yesterday:"'onte \xe1' p",today:"'hoxe \xe1' p",tomorrow:"'ma\xf1\xe1 \xe1' p",nextWeek:"eeee '\xe1' p",other:"P"},n={lastWeek:"'o' eeee 'pasado \xe1s' p",yesterday:"'onte \xe1s' p",today:"'hoxe \xe1s' p",tomorrow:"'ma\xf1\xe1 \xe1s' p",nextWeek:"eeee '\xe1s' p",other:"P"};a.formatRelative=(e,a,o,r)=>1!==a.getHours()?n[e]:t[e]},56784:(e,a,t)=>{a.localize=void 0;var n=t(46746);a.localize={ordinalNumber:(e,a)=>Number(e)+"\xba",era:(0,n.buildLocalizeFn)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xu\xf1o","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","m\xe9rcores","xoves","venres","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"ma\xf1\xe1",afternoon:"tarde",evening:"tardi\xf1a",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediod\xeda",morning:"da ma\xf1\xe1",afternoon:"da tarde",evening:"da tardi\xf1a",night:"da noite"}},defaultFormattingWidth:"wide"})}},25514:(e,a,t)=>{a.match=void 0;var n=t(20640),o=t(2528);a.match={ordinalNumber:(0,o.buildMatchPatternFn)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[u\xfa]n|despois de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[u\xfa]n)/i,/^(despois de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xu\xf1o|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[e\xe9]rcores|xoves|venres|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[i\xed]a|(da|[a\xe1]s) (ma\xf1[a\xe1]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1[a\xe1]/i,afternoon:/tarde/i,evening:/tardi\xf1a/i,night:/noite/i}},defaultParseWidth:"any"})}}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var r=a[n]={exports:{}};return e[n](r,r.exports,t),r.exports}var n={};return(()=>{var e=n;e.gl=void 0;var a=t(74411),o=t(95062),r=t(10480),i=t(56784),d=t(25514);e.gl={code:"gl",formatDistance:a.formatDistance,formatLong:o.formatLong,formatRelative:r.formatRelative,localize:i.localize,match:d.match,options:{weekStartsOn:1,firstWeekContainsDate:1}}})(),n})())}}}));