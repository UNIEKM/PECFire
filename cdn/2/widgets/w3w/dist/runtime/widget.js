System.register(["jimu-core/react","jimu-arcgis","esri/widgets/Search","esri/widgets/Search/LocatorSearchSource","esri/geometry/projection","esri/geometry/SpatialReference","esri/layers/GeoJSONLayer"],(function(e,t){var o={},r={},n={},i={},s={},a={},c={};return{setters:[function(e){o.default=e.default,o.useEffect=e.useEffect,o.useRef=e.useRef,o.useState=e.useState},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){n.default=e.default},function(e){i.default=e.default},function(e){s.project=e.project},function(e){a.default=e.default},function(e){c.default=e.default}],execute:function(){e((()=>{var e={205:e=>{"use strict";e.exports=a},333:e=>{"use strict";e.exports=s},822:e=>{"use strict";e.exports=c},133:e=>{"use strict";e.exports=n},125:e=>{"use strict";e.exports=i},686:e=>{"use strict";e.exports=r},972:e=>{"use strict";e.exports=o}},t={};function l(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var d={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(d),l.d(d,{__set_webpack_public_path__:()=>u,default:()=>c});var e=l(972),t=l(686),o=l(133),r=l(125),n=l(333),i=l(205),s=l(822),a=function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const c=c=>{var l;const d=(0,e.useRef)(null),[u,f]=(0,e.useState)(null),[p,m]=(0,e.useState)({words:"",lat:"",lng:""}),g=e=>a(void 0,void 0,void 0,(function*(){const t=e.extent,o=new i.default({wkid:4326}),r=4326===t.spatialReference.wkid?t:n.project(t,o);if(!r)return void console.error("Failed to project extent to WGS84.");const c=`${r.ymin},${r.xmin}`,l=`${r.ymax},${r.xmax}`;if(Math.sqrt(Math.pow(r.xmax-r.xmin,2)+Math.pow(r.ymax-r.ymin,2))>4)console.log("Zoom in to render the grid (4x4 km limit).");else try{const t=yield fetch(`https://api.what3words.com/v3/grid-section?bounding-box=${c},${l}&format=geojson&key=YF3V15TI`);if(!t.ok)return void console.error(`API Error: ${t.status} ${t.statusText}`);const o=yield t.json(),r=new s.default({url:URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),title:"What3Words Grid"});e.map.add(r),console.log("What3Words grid added to the map."),e.on("click",(e=>a(void 0,void 0,void 0,(function*(){const t=e.mapPoint;if(t){const e=t.latitude.toFixed(6),o=t.longitude.toFixed(6);try{const t=yield fetch(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${e},${o}&key=YF3V15TI`);if(!t.ok)return void console.error(`Error fetching 3-word address: ${t.status} ${t.statusText}`);const r=yield t.json();r.words?m({words:r.words,lat:e,lng:o}):m({words:"No address found",lat:e,lng:o})}catch(e){console.error("Error fetching 3-word address:",e)}}}))))}catch(e){console.error("Error fetching What3Words grid:",e)}}));(0,e.useEffect)((()=>{if((null==u?void 0:u.view)&&d.current){const e=new r.default({url:"https://utility.arcgis.com/usrsvcs/servers/3fcc95bc42b2491f9998651fa0925162/rest/services/what3words_EN_English/GeocodeServer",name:"My Custom Locator",singleLineFieldName:"SingleLine",placeholder:"Search 3 words (e.g., apple.banana.carrot)",suggestionsEnabled:!0,maxSuggestions:6,maxResults:6}),t=new o.default({view:u.view,container:d.current,includeDefaultSources:!1,sources:[e]});return t.on("select-result",(e=>{var t,o;const r=e.result;"point"===(null===(o=null===(t=null==r?void 0:r.feature)||void 0===t?void 0:t.geometry)||void 0===o?void 0:o.type)&&u.view.goTo({target:r.feature.geometry,zoom:18},{duration:1e3})})),()=>{t&&t.destroy()}}}),[u]);return e.default.createElement("div",{className:"widget-combined"},e.default.createElement(t.JimuMapViewComponent,{useMapWidgetId:null===(l=c.useMapWidgetIds)||void 0===l?void 0:l[0],onActiveViewChange:e=>{if(e&&e.view){f(e);const{view:t}=e;g(t),t.watch("extent",(()=>{t.zoom>17?g(t):console.log("Zoom level too low for What3Words grid display.")}))}}}),e.default.createElement("div",{ref:d,style:{width:"100%",height:"40px",marginTop:"10px"}}),e.default.createElement("div",{className:"address-info"},e.default.createElement("h3",null,"3-Word Address"),e.default.createElement("p",null,e.default.createElement("strong",null,"Address:")," ",p.words),e.default.createElement("p",null,e.default.createElement("strong",null,"Coordinates:")," ",p.lat,", ",p.lng)))};function u(e){l.p=e}})(),d})())}}}));