System.register(["jimu-core","jimu-for-builder","jimu-ui/advanced/setting-components","jimu-ui","jimu-layouts/layout-runtime","jimu-ui/basic/color-picker","jimu-theme","jimu-ui/advanced/resource-selector","jimu-ui/advanced/style-setting-components"],(function(e,t){var o={},a={},l={},i={},n={},r={},s={},u={},d={};return{setters:[function(e){o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.LayoutType=e.LayoutType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.polished=e.polished,o.useIntl=e.useIntl},function(e){a.builderAppSync=e.builderAppSync,a.getAppConfigAction=e.getAppConfigAction},function(e){l.DirectionSelector=e.DirectionSelector,l.SettingRow=e.SettingRow,l.SettingSection=e.SettingSection},function(e){i.Button=e.Button,i.Label=e.Label,i.MultiSelect=e.MultiSelect,i.NumericInput=e.NumericInput,i.Radio=e.Radio,i.Select=e.Select,i.Switch=e.Switch,i.Tab=e.Tab,i.Tabs=e.Tabs,i.TextInput=e.TextInput,i.Tooltip=e.Tooltip,i.defaultMessages=e.defaultMessages,i.styleUtils=e.styleUtils},function(e){n.LayoutItemSizeModes=e.LayoutItemSizeModes,n.searchUtils=e.searchUtils},function(e){r.ThemeColorPicker=e.ThemeColorPicker},function(e){s.useTheme2=e.useTheme2},function(e){u.IconPicker=e.IconPicker},function(e){d.BorderRadiusSetting=e.BorderRadiusSetting,d.InputUnit=e.InputUnit,d.NavIconPicker=e.NavIconPicker,d.NavStyleSettingByState=e.NavStyleSettingByState,d.TextAlignment=e.TextAlignment}],execute:function(){e((()=>{var e={778:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8.829 2.535a.909.909 0 0 0-1.657 0L2.291 13.356a.456.456 0 0 0 .831.377L4.818 10h6.365l1.696 3.733a.456.456 0 0 0 .831-.377zM5.272 9 8 3l2.729 6z" clip-rule="evenodd"></path></svg>'},45508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></path></svg>'},79244:e=>{"use strict";e.exports=o},4108:e=>{"use strict";e.exports=a},41496:e=>{"use strict";e.exports=n},1888:e=>{"use strict";e.exports=s},14321:e=>{"use strict";e.exports=i},35809:e=>{"use strict";e.exports=u},79298:e=>{"use strict";e.exports=l},15562:e=>{"use strict";e.exports=d},54337:e=>{"use strict";e.exports=r}},t={};function c(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,c),l.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="";var p={};return c.p=window.jimuConfig.baseUrl,(()=>{"use strict";c.r(p),c.d(p,{__set_webpack_public_path__:()=>M,default:()=>O});var e,t=c(79244),o=c(4108),a=c(79298);!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(e||(e={}));var l=c(14321),i=c(41496);const{useMemo:n,useCallback:r}=t.React,s=()=>(0,t.getAppStore)().getState().appStateInBuilder.appConfig,u=e=>{const o=(e=>{var t;const o=s();return null!==(t=null==e?void 0:e.map((e=>{var t,a;return{label:null===(a=null===(t=o.views)||void 0===t?void 0:t[e])||void 0===a?void 0:a.label,value:e}})))&&void 0!==t?t:[]})(e);return(0,t.Immutable)(o)},d=e=>{const{alternateIcon:o,activedIcon:a,previousIcon:i,nextIcon:s}=e||{},u=(0,t.useIntl)(),d=r((e=>{var t,o,a,i;if(!e)return null;const n=(r=null===(t=null==e?void 0:e.properties)||void 0===t?void 0:t.filename,new Map([["dot","drawToolDot"],["dot-6","drawToolDot"],["dot-10","drawToolDot"],["pill","pill"],["cube","rhombus"],["circle","hollowCircle"],["double-circle","filledDoubleCircle"],["left-arrow-12","arrowLeft12"],["right-arrow-12","arrowRight12"]]).get(r)||(null===(o=null==e?void 0:e.properties)||void 0===o?void 0:o.filename));var r;return Object.assign(Object.assign({},e),{properties:Object.assign(Object.assign({},null==e?void 0:e.properties),{filename:n?u.formatMessage({id:n,defaultMessage:l.defaultMessages[n]||(null===(a=null==e?void 0:e.properties)||void 0===a?void 0:a.filename)}):null===(i=null==e?void 0:e.properties)||void 0===i?void 0:i.filename})})}),[u]);return[n((()=>d(o)),[o,d]),n((()=>d(a)),[a,d]),n((()=>d(i)),[i,d]),n((()=>d(s)),[s,d])]};var v=c(54337),m=c(1888);const g="default",b=t.css`
  .tab-title-item{
    width: 33%;
  }
`,w=e=>{var o,i,n,r;const s=(0,m.useTheme2)(),{hideThumb:u,variant:d=(0,t.Immutable)({}),onChange:c}=e,p=t.hooks.useTranslation(l.defaultMessages),w=null===(o=null==d?void 0:d.track)||void 0===o?void 0:o.bg,h=null===(i=null==d?void 0:d.progress)||void 0===i?void 0:i[g],y=null===(n=null==d?void 0:d.thumb)||void 0===n?void 0:n[g],f=e=>{Object.keys(e).length?c(e):c(null)},x=(e,t,o)=>{f(o?d.setIn(e,o):d.without(t))},S=(e,t)=>{var o,a;if(t)f(d.setIn("bg"===e?["thumb",g,"bg"]:["thumb",g,"border","color"],t));else{const t=null===(a=null===(o=null==d?void 0:d.thumb)||void 0===o?void 0:o[g])||void 0===a?void 0:a.without(e);Object.keys(t).length?f(d.setIn(["thumb",g],t)):f(d.without("thumb"))}};return(0,t.jsx)(a.SettingRow,null,(0,t.jsx)(l.Tabs,{type:"pills",className:"flex-grow-1 w-100 h-100",fill:!0,css:b,defaultValue:"active"},(0,t.jsx)(l.Tab,{id:"active",title:p("active"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:p("color"),"aria-label":p("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:s,value:null==h?void 0:h.bg,onChange:e=>{x(["progress",g,"bg"],"progress",e)}}))),!u&&(0,t.jsx)(l.Tab,{id:"thumb",title:p("thumb"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:p("fill"),"aria-label":p("fill"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:s,value:null==y?void 0:y.bg,onChange:e=>{S("bg",e)}})),(0,t.jsx)(a.SettingRow,{label:p("border"),"aria-label":p("border"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:s,value:null===(r=null==y?void 0:y.border)||void 0===r?void 0:r.color,onChange:e=>{S("border",e)}}))),(0,t.jsx)(l.Tab,{id:"inactive",title:p("inactive"),className:"tab-title-item"},(0,t.jsx)(a.SettingRow,{className:"mt-2",label:p("color"),"aria-label":p("color"),flow:"no-wrap"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:s,value:w,onChange:e=>{x(["track","bg"],"track",e)}})))))};var h=c(35809),y=c(15562);const f={_widgetLabel:"Views Navigation",tabStyle:"Tab style",navBtnStyle:"Navigation button style",stepTips:"Works only when a transition animation is set for the corresponding Section widget.",paginationStyle:"Pagination style"};var x=c(45508),S=c.n(x),j=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o};const R=e=>{const o=window.SVG,{className:a}=e,l=j(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",a);return o?t.React.createElement(o,Object.assign({className:i,src:S()},l)):t.React.createElement("svg",Object.assign({className:i},l))},T=e=>{var t,o;return"nav"===(null==e?void 0:e.type)&&!(null===(t=null==e?void 0:e.standard)||void 0===t?void 0:t.alternateIcon)&&!(null===(o=null==e?void 0:e.standard)||void 0===o?void 0:o.activedIcon)};var I=c(778),C=c.n(I),k=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(o[a[l]]=e[a[l]])}return o};const N=e=>{const o=window.SVG,{className:a}=e,l=k(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",a);return o?t.React.createElement(o,Object.assign({className:i,src:C()},l)):t.React.createElement("svg",Object.assign({className:i},l))},O=n=>{var r,c,p,g,b,x,S,j;const I=(0,m.useTheme2)(),C=t.hooks.useTranslation(l.defaultMessages,f),{config:k,id:O,onSettingChange:M,theme:A}=n,B=null!==(r=null==k?void 0:k.data)&&void 0!==r?r:(0,t.Immutable)({}),L=null!==(c=null==k?void 0:k.display)&&void 0!==c?c:(0,t.Immutable)({}),{section:P,type:z,views:U}=B,{vertical:V,type:_,navStyle:$,variant:E,advanced:F,standard:D,paginationFontColor:G}=L,{showIcon:W,showText:H,showTitle:q,previousText:J,nextText:K,hideThumb:Q,step:X=1,textAlign:Y,gap:Z,showPageNumber:ee}=D||{},te=null===(p=null==E?void 0:E.root)||void 0===p?void 0:p.bg,oe=(e=>{const o=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.layouts})),a=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.sections})),l=t.ReactRedux.useSelector((e=>{var t;return null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.browserSizeMode})),n=t.ReactRedux.useSelector((e=>{var t,o;return null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.mainSizeMode}));return t.React.useMemo((()=>{const o=(0,t.getAppStore)().getState().appStateInBuilder.appConfig,a=i.searchUtils.getContentsInTheSameContainer(o,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,l);return a&&a.length>0?a:i.searchUtils.getContentsInTheSameContainer(o,e,t.LayoutItemType.Widget,t.LayoutItemType.Section,n)||[]}),[e,l,a,o])})(O),ae=(e=>t.ReactRedux.useSelector((t=>{var o,a,l,i;return null===(i=null===(l=null===(a=null===(o=null==t?void 0:t.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===a?void 0:a.sections)||void 0===l?void 0:l[e])||void 0===i?void 0:i.views})))(P),le=(e=>{const o=null==e?void 0:e.ref.palette.neutral[1e3];return t.React.useMemo((()=>t.css`
        .jimu-multi-select {
          width: 100%;
          > .jimu-dropdown {
            width: 100%;
          }
          > .jimu-menu-item {
            width: 100%;
            height: ${t.polished.rem(26)};
          }
        }
        .radio-container {
          display: flex;
          width: 100%;
          margin-top: 0.5rem;
          > span.jimu-radio {
            flex-shrink: 0;
            margin-top: 0.1rem;
          }
          > label {
            margin-bottom: 0;
          }
        }
        .list-guide-tip-button {
          svg {
            margin-top: ${t.polished.rem(-2)};
          }
        }
        .title-1 {
          > label {
            font-size: ${t.polished.rem(14)} !important;
            color: ${o} !important;
          }
        }
        .nav-button-icon-picker {
          width: ${t.polished.rem(100)};
          .jimu-dropdown-button:not(.icon-btn) {
            max-width: ${t.polished.rem(100)};
          }
        }
        .pagination-style-setting-row.jimu-widget-setting--row> label {
          margin-bottom: 0.75rem;
        }
        .color-drak-600> label {
          color: var(--ref-palette-neutral-1000) !important;
        }
        .color-drak-500> label {
          color: var(--ref-palette-neutral-1000) !important;
        }
      `),[o])})(A),[ie,ne]=t.React.useState(J),[re,se]=t.React.useState(K),ue=t.React.useMemo((()=>T(L)),[L]),de=t.React.useMemo((()=>(e=>{var t,o;return!("nav"!==(null==e?void 0:e.type)||!(null===(t=null==e?void 0:e.standard)||void 0===t?void 0:t.alternateIcon)||!(null===(o=null==e?void 0:e.standard)||void 0===o?void 0:o.activedIcon))})(L)),[L]),ce=t.React.useMemo((()=>"nav"===_),[_]),[pe,ve,me,ge]=d(D);t.React.useEffect((()=>{ie!==J&&ne(J),re!==K&&se(K)}),[J,K]);const be=(e,t)=>{M({id:O,config:Array.isArray(e)?k.setIn(e,t):k.set(e,t)})},we=(e,t)=>{var o;if(null==t){if(!(null===(o=null==E?void 0:E.root)||void 0===o?void 0:o[e]))return;const t=E.root.without(e);if(Object.keys(t).length)be(["display","variant","root"],t);else{const e=E.without("root");Object.keys(e).length?be(["display","variant"],e):be("display",L.without("variant"))}}else be(["display","variant","root",e],t)},he=(e,t,o)=>{var a;const l=null===(a=null==E?void 0:E.item)||void 0===a?void 0:a[e];null!=o&&""!==o?"border"===t&&l?be(["display","variant","item",e],l.without("borderLeft").without("borderRight").without("borderTop").without("borderBottom").set(t,o)):t.includes("border")&&"borderRadius"!==t&&l?be(["display","variant","item",e],l.without("border").set(t,o)):be(["display","variant","item",e,t],o):null!=(null==l?void 0:l[t])&&be(["display","variant","item",e],l.without(t))},ye=e=>{e?be(["display","variant"],e):be(["display"],k.display.without("variant"))},fe=t.React.useMemo((()=>u(ae)),[ae]),xe=t.React.useMemo((()=>fe.asMutable().map((e=>e.label))),[fe]),Se=t.React.useMemo((()=>ue||"navButtonGroup"===_?a.SettingRow:t.React.Fragment),[ue,_]),je=t.React.useMemo((()=>ue||"navButtonGroup"===_?{flow:"wrap",label:C(ue?"tabStyle":"navBtnStyle"),"aria-label":C(ue?"tabStyle":"navBtnStyle"),role:"group",className:"color-drak-600"}:{}),[ue,C,_]),Re=t.React.useMemo((()=>{var e,o,a;if(!(null===(e=null==E?void 0:E.root)||void 0===e?void 0:e.borderRadius))return null;const i=t.polished.getValueAndUnit("none"===(null===(o=null==E?void 0:E.root)||void 0===o?void 0:o.borderRadius)?"0px":l.styleUtils.remToPixel((null===(a=null==E?void 0:E.root)||void 0===a?void 0:a.borderRadius)||"0rem"));return(0,t.Immutable)({number:[null==i?void 0:i[0]],unit:null==i?void 0:i[1]})}),[null===(g=null==E?void 0:E.root)||void 0===g?void 0:g.borderRadius]),Te=window.isExpressBuilder;return t.React.useEffect((()=>{Te&&o.builderAppSync.publishWidgetToolbarStateChangeToApp(O,["navigator-add-view","navigator-manage-views"])}),[z]),(0,t.jsx)("div",{className:"widget-setting-navigator jimu-widget-setting",css:le},(0,t.jsx)(a.SettingSection,null,!Te&&(0,t.jsx)(a.SettingRow,{flow:"wrap",label:C("linkTo"),role:"group","aria-label":C("linkTo")},(0,t.jsx)(l.Select,{size:"sm",value:P,onChange:e=>{be(["data","section"],e.target.value)}},oe.map(((e,o)=>(0,t.jsx)("option",{key:o,value:e},(e=>{var t,o,a;const l=s();return null!==(a=null===(o=null===(t=null==l?void 0:l.sections)||void 0===t?void 0:t[e])||void 0===o?void 0:o.label)&&void 0!==a?a:""})(e)))))),P&&(0,t.jsx)(t.React.Fragment,null,ce&&(0,t.jsx)(a.SettingRow,{label:C("views"),role:"group","aria-label":C("views"),flow:"wrap"},(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(l.Radio,{id:"view-type-auto",style:{cursor:"pointer"},"aria-label":C("auto"),name:"view-type",onChange:t=>{be(["data","type"],e.Auto)},checked:z===e.Auto}),(0,t.jsx)(l.Label,{style:{cursor:"pointer"},for:"view-type-auto",className:"ml-2"},C("auto"))),(0,t.jsx)("div",{className:"radio-container"},(0,t.jsx)(l.Radio,{id:"view-type-custom",style:{cursor:"pointer"},"aria-label":C("custom"),name:"view-type",onChange:t=>{be(["data","type"],e.Custom)},checked:z===e.Custom}),(0,t.jsx)(l.Label,{style:{cursor:"pointer"},for:"view-type-custom",className:"ml-2"},C("custom")))),z===e.Custom&&(0,t.jsx)(a.SettingRow,{flow:"wrap"},(0,t.jsx)(l.MultiSelect,{"aria-label":xe,values:U,items:fe,onClickItem:(e,t,o)=>{o.sort(((e,t)=>(null==ae?void 0:ae.indexOf(e))-(null==ae?void 0:ae.indexOf(t)))),be(["data","views"],o)},displayByValues:e=>{const t=e?e.length:0;return C("viewsSelected",{viewNumber:t})}})),!Te&&"slider"!==_&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("direction"),"aria-label":C("direction"),role:"group"},(0,t.jsx)(a.DirectionSelector,{vertical:V,onChange:e=>{be(["display","vertical"],e),((e,o)=>{var a,l;if(!o)return;let n;const r=(0,t.getAppStore)().getState();n=window.jimuConfig.isBuilder?null==r?void 0:r.appStateInBuilder:r;const s=null===(a=null==n?void 0:n.appRuntimeInfo)||void 0===a?void 0:a.selection,u=null===(l=n.appConfig.layouts)||void 0===l?void 0:l[null==s?void 0:s.layoutId];if(u&&(null==u?void 0:u.type)===t.LayoutType.FixedLayout){const t=T(e),a=null==e?void 0:e.vertical;o().editLayoutItemSize(s,a?60:380,a?380:60).exec(),o().editLayoutItemProperty(s,"setting.autoProps",{width:t||a?i.LayoutItemSizeModes.Auto:i.LayoutItemSizeModes.Custom,height:t||!a?i.LayoutItemSizeModes.Auto:i.LayoutItemSizeModes.Custom}).exec()}})((0,t.Immutable)(L).merge({vertical:e}),o.getAppConfigAction)}})),ce&&(0,t.jsx)(a.SettingRow,{label:C("space"),"aria-label":C("space"),flow:"no-wrap"},(0,t.jsx)(y.InputUnit,{className:"w-50",min:0,value:Z,onChange:e=>{be(["display","standard","gap"],`${e.distance}${e.unit}`)}})),!Te&&ce&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("alignment"),"aria-label":C("alignment"),role:"group"},(0,t.jsx)(y.TextAlignment,{textAlign:Y,onChange:e=>{be(["display","standard","textAlign"],e)}})),!Te&&ue&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("showIcon")},(0,t.jsx)(l.Switch,{"aria-label":C("showIcon"),checked:W,disabled:W&&!H,onChange:(e,t)=>{be(["display","standard","showIcon"],t)}})),!Te&&ue&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("showText")},(0,t.jsx)(l.Switch,{"aria-label":C("showText"),checked:H,disabled:H&&!W,onChange:(e,t)=>{be(["display","standard","showText"],t)}})),de&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("tooltip"),"aria-label":C("tooltip")},(0,t.jsx)(l.Switch,{checked:q,onChange:()=>{be(["display","standard","showTitle"],!q)}})),de&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("symbol"),"aria-label":C("symbol"),className:"title-1"}),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("currentView"),"aria-label":C("currentView")},(0,t.jsx)(y.NavIconPicker,{configurableOption:"none",hideRemove:!0,theme2:A,size:8,icon:ve,customLabel:null===(b=null==ve?void 0:ve.properties)||void 0===b?void 0:b.filename,onChange:e=>{be(["display","standard","activedIcon"],e)}})),(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("others"),"aria-label":C("others")},(0,t.jsx)(y.NavIconPicker,{configurableOption:"none",hideRemove:!0,theme2:A,size:8,icon:pe,customLabel:null===(x=null==pe?void 0:pe.properties)||void 0===x?void 0:x.filename,onChange:e=>{be(["display","standard","alternateIcon"],e)}}))),"navButtonGroup"===_&&(0,t.jsx)(a.SettingRow,{flow:"no-wrap",role:"group","aria-label":C("step"),label:(0,t.jsx)("div",null,C("step"),(0,t.jsx)(l.Tooltip,{title:C("stepTips"),showArrow:!1,placement:"bottom"},(0,t.jsx)(l.Button,{className:"list-guide-tip-button",type:"tertiary","aria-label":C("stepTips")},(0,t.jsx)(R,{size:"s"}))))},(0,t.jsx)(l.NumericInput,{size:"sm","aria-label":`${X}`,value:X,style:{width:"27%"},showHandlers:!1,min:.1,max:1,onAcceptValue:e=>{be(["display","standard","step"],+e)}})),"navButtonGroup"===_&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{flow:"wrap",label:C("previous"),role:"group","aria-label":C("previous"),className:"justify-content-between color-drak-600"},(0,t.jsx)(l.TextInput,{size:"sm",style:{width:t.polished.rem(120)},"aria-label":ie,value:ie,onChange:e=>{const t=e.target.value;ne(t)},onAcceptValue:e=>{be(["display","standard","previousText"],e)}}),(0,t.jsx)(h.IconPicker,{className:"nav-button-icon-picker",configurableOption:"none",icon:me,customLabel:null===(S=null==me?void 0:me.properties)||void 0===S?void 0:S.filename,onChange:e=>{be(["display","standard","previousIcon"],e)},setButtonUseColor:!1})),(0,t.jsx)(a.SettingRow,{flow:"wrap",label:C("next"),role:"group","aria-label":C("next"),className:"justify-content-between color-drak-600"},(0,t.jsx)(l.TextInput,{size:"sm",style:{width:t.polished.rem(120)},"aria-label":re,value:re,onChange:e=>{const t=e.target.value;se(t)},onAcceptValue:e=>{be(["display","standard","nextText"],e)}}),(0,t.jsx)(h.IconPicker,{className:"nav-button-icon-picker",configurableOption:"none",icon:ge,customLabel:null===(j=null==ge?void 0:ge.properties)||void 0===j?void 0:j.filename,onChange:e=>{be(["display","standard","nextIcon"],e)},setButtonUseColor:!1}))),"slider"===_&&(0,t.jsx)(a.SettingRow,{label:C("thumbHandle"),"aria-label":C("thumbHandle"),flow:"no-wrap"},(0,t.jsx)(l.Switch,{"aria-label":C("thumbHandle"),checked:!Q,onChange:()=>{be(["display","standard","hideThumb"],!Q)}})))),P&&(0,t.jsx)(a.SettingSection,null,(0,t.jsx)(a.SettingRow,{flow:"no-wrap",label:C("advance"),"aria-label":C("advance"),role:"group",className:"color-drak-600"},(0,t.jsx)(l.Switch,{"aria-label":C("advance"),checked:F,onChange:()=>{const e=!(null==k?void 0:k.display.advanced);let t=k.display.set("advanced",e);e||(t=t.without("variant")),be("display",t)}})),F&&(0,t.jsx)(t.React.Fragment,null,(0,t.jsx)(a.SettingRow,{label:C("background"),"aria-label":C("background"),flow:"no-wrap",role:"group"},(0,t.jsx)(v.ThemeColorPicker,{specificTheme:I,value:te,onChange:e=>{we("bg",e||null)}})),!Te&&ce&&(0,t.jsx)(a.SettingRow,{label:C("borderRadius"),flow:"no-wrap"},(0,t.jsx)(y.BorderRadiusSetting,{style:{width:"30%"},separated:!1,value:Re,placeholder:"",onChange:e=>{var t,o;we("borderRadius",(null===(t=e.number)||void 0===t?void 0:t[0])?`${null===(o=e.number)||void 0===o?void 0:o[0]}${null==e?void 0:e.unit}`:null)}})),ee&&(0,t.jsx)(a.SettingRow,{label:C("paginationStyle"),"aria-label":C("paginationStyle"),flow:"wrap",role:"group",className:"pagination-style-setting-row color-drak-600"},(0,t.jsx)(a.SettingRow,{label:C("fontColor"),role:"group","aria-label":C("fontColor"),flow:"no-wrap",css:t.css`flex: 1;`,className:"color-drak-500"},(0,t.jsx)(v.ThemeColorPicker,{"aria-label":C("fontColor"),icon:(0,t.jsx)(N,null),type:"with-icon",specificTheme:I,value:G,onChange:e=>{be(["display","paginationFontColor"],e)}}))),(0,t.jsx)(Se,Object.assign({},je),ce&&(0,t.jsx)(y.NavStyleSettingByState,{variant:E,onlyBorderColor:"underline"===$,text:ue,hideTextStyle:ue&&!H,icon:W&&!ue,iconInText:W&&ue,onChange:he,onWholeVariantChange:ye}),"slider"===_&&(0,t.jsx)(w,{hideThumb:Q,variant:E||void 0,onChange:ye}),"navButtonGroup"===_&&(0,t.jsx)(y.NavStyleSettingByState,{variant:E,states:["default","hover","disabled"],onlyBorderColor:!1,text:!0,icon:!1,iconInText:!0,onChange:he,onWholeVariantChange:ye})))))};function M(e){c.p=e}})(),p})())}}}));