System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui"],(function(e,t){var s={},o={},i={};return{setters:[function(e){s.FormattedMessage=e.FormattedMessage,s.css=e.css,s.jsx=e.jsx},function(e){o.MapWidgetSelector=e.MapWidgetSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){i.Switch=e.Switch}],execute:function(){e((()=>{var e={244:e=>{"use strict";e.exports=s},321:e=>{"use strict";e.exports=i},298:e=>{"use strict";e.exports=o}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var a={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(a),n.d(a,{__set_webpack_public_path__:()=>c,default:()=>i});var e=n(244),t=n(298),s=n(321);const o={selectMapWidget:"Select Map Widget",settings:"Settings",showScale:"Show Scale",showZoom:"Show Zoom"};function i(i){const n=e.css`
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;return(0,e.jsx)("div",{css:n},(0,e.jsx)("div",{className:"widget-setting-get-map-coordinates"},(0,e.jsx)(t.SettingSection,{className:"map-selector-section",title:i.intl.formatMessage({id:"mapWidgetLabel",defaultMessage:o.selectMapWidget})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)(t.MapWidgetSelector,{onSelect:e=>{i.onSettingChange({id:i.id,useMapWidgetIds:e})},useMapWidgetIds:i.useMapWidgetIds}))),(0,e.jsx)(t.SettingSection,{title:i.intl.formatMessage({id:"settingsLabel",defaultMessage:o.settings})},(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showZoom"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showZoom",defaultMessage:o.showZoom})),(0,e.jsx)(s.Switch,{checked:i.config&&i.config.showZoom||!1,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("showZoom",e.currentTarget.checked)})}})))),(0,e.jsx)(t.SettingRow,null,(0,e.jsx)("div",{className:"w-100 showScale"},(0,e.jsx)("div",{className:"checkbox-row"},(0,e.jsx)("label",null,(0,e.jsx)(e.FormattedMessage,{id:"showScale",defaultMessage:o.showScale})),(0,e.jsx)(s.Switch,{checked:i.config&&i.config.showScale||!1,onChange:e=>{i.onSettingChange({id:i.id,config:i.config.set("showScale",e.currentTarget.checked)})}})))))))}function c(e){n.p=e}})(),a})())}}}));