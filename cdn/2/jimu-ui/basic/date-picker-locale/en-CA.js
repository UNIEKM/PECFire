System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,a)=>{let n;if("formatting"===(a?.context?String(a.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,i=a?.width?String(a.width):e;n=t.formattingValues[i]||t.formattingValues[e]}else{const e=t.defaultWidth,i=a?.width?String(a.width):t.defaultWidth;n=t.values[i]||t.values[e]}return n[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,a={})=>{const n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;const o=r[0],u=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?function(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a;return}(u,(t=>t.test(o))):function(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a;return}(u,(t=>t.test(o)));let s;s=t.valueCallback?t.valueCallback(d):d,s=a.valueCallback?a.valueCallback(s):s;return{value:s,rest:e.slice(o.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,a={})=>{const n=e.match(t.matchPattern);if(!n)return null;const i=n[0],r=e.match(t.parsePattern);if(!r)return null;let o=t.valueCallback?t.valueCallback(r[0]):r[0];o=a.valueCallback?a.valueCallback(o):o;return{value:o,rest:e.slice(i.length)}}}},69808:(t,e)=>{e.formatDistance=void 0;const a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"a second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"a minute",other:"{{count}} minutes"},aboutXHours:{one:"about an hour",other:"about {{count}} hours"},xHours:{one:"an hour",other:"{{count}} hours"},xDays:{one:"a day",other:"{{count}} days"},aboutXWeeks:{one:"about a week",other:"about {{count}} weeks"},xWeeks:{one:"a week",other:"{{count}} weeks"},aboutXMonths:{one:"about a month",other:"about {{count}} months"},xMonths:{one:"a month",other:"{{count}} months"},aboutXYears:{one:"about a year",other:"about {{count}} years"},xYears:{one:"a year",other:"{{count}} years"},overXYears:{one:"over a year",other:"over {{count}} years"},almostXYears:{one:"almost a year",other:"almost {{count}} years"}};e.formatDistance=(t,e,n)=>{let i;const r=a[t];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i}},9257:(t,e,a)=>{e.formatLong=void 0;var n=a(97980);e.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE, MMMM do, yyyy",long:"MMMM do, yyyy",medium:"MMM d, yyyy",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})}},5423:(t,e)=>{e.formatRelative=void 0;const a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};e.formatRelative=(t,e,n,i)=>a[t]},99231:(t,e,a)=>{e.localize=void 0;var n=a(46746);e.localize={ordinalNumber:(t,e)=>{const a=Number(t),n=a%100;if(n>20||n<10)switch(n%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:(0,n.buildLocalizeFn)({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})}},13703:(t,e,a)=>{e.match=void 0;var n=a(20640),i=a(2528);e.match={ordinalNumber:(0,i.buildMatchPatternFn)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})}}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}var n={};return(()=>{var t=n;t.enCA=void 0;var e=a(5423),i=a(99231),r=a(13703),o=a(69808),u=a(9257);t.enCA={code:"en-CA",formatDistance:o.formatDistance,formatLong:u.formatLong,formatRelative:e.formatRelative,localize:i.localize,match:r.match,options:{weekStartsOn:0,firstWeekContainsDate:1}}})(),n})())}}}));