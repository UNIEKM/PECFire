System.register(["jimu-core","jimu-core/react","jimu-arcgis","jimu-ui"],(function(e,t){var o={},i={},r={},n={};return{setters:[function(e){o.css=e.css,o.jsx=e.jsx},function(e){i.useState=e.useState},function(e){r.JimuMapViewComponent=e.JimuMapViewComponent},function(e){n.Alert=e.Alert,n.Button=e.Button,n.Card=e.Card,n.CardBody=e.CardBody}],execute:function(){e((()=>{var e={686:e=>{"use strict";e.exports=r},244:e=>{"use strict";e.exports=o},972:e=>{"use strict";e.exports=i},321:e=>{"use strict";e.exports=n}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{__set_webpack_public_path__:()=>c,default:()=>r});var e=s(244),t=s(972),o=s(686),i=s(321);function r(r){var s;const[a,c]=(0,t.useState)(null),[u,p]=(0,t.useState)(!1),l=()=>{a&&a.view&&(p(!1),a.view.container.style.cursor="default")};return(0,e.jsx)(i.Card,{className:"widget-google-street-view",css:n},(0,e.jsx)(i.CardBody,null,1===(null===(s=r.useMapWidgetIds)||void 0===s?void 0:s.length)&&(0,e.jsx)(o.JimuMapViewComponent,{useMapWidgetId:r.useMapWidgetIds[0],onActiveViewChange:e=>{c(e)}}),u&&(0,e.jsx)(i.Alert,{text:"Street View is active. Click on the map to open Street View.",type:"info"}),(0,e.jsx)("div",{className:"controls"},(0,e.jsx)(i.Button,{type:"primary",onClick:()=>{if(a&&a.view){p(!0),a.view.container.style.cursor="crosshair";const e=a.view.on("click",(t=>{const o=a.view.toMap({x:t.x,y:t.y});if(o){const e=`https://www.google.com/maps?q=&layer=c&cbll=${o.latitude},${o.longitude}&cbp=0,0,0,0,0`;window.open(e,"_blank")}l(),e.remove()}))}},disabled:u},u?"Street View Active":"Activate Street View"),u&&(0,e.jsx)(i.Button,{type:"secondary",onClick:l},"Deactivate")),(0,e.jsx)("p",{className:"info-text"},'Click "Activate Street View" and select a location on the map to open Google Street View.')))}const n=e.css`
  padding: 10px;
  text-align: center;
  background: var(--light-100);
  
  .controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .info-text {
    font-size: 14px;
    color: var(--dark-500);
    margin-top: 10px;
  }
`;function c(e){s.p=e}})(),a})())}}}));