System.register(["jimu-core","jimu-for-builder","jimu-ui","jimu-ui/advanced/setting-components","jimu-layouts/layout-runtime"],(function(e,t){var a={},s={},i={},n={},o={};return{setters:[function(e){a.LayoutItemType=e.LayoutItemType,a.LayoutType=e.LayoutType,a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks,a.jsx=e.jsx},function(e){s.getAppConfigAction=e.getAppConfigAction},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Checkbox=e.Checkbox,i.Icon=e.Icon,i.Label=e.Label,i.Select=e.Select,i.defaultMessages=e.defaultMessages},function(e){n.MapWidgetSelector=e.MapWidgetSelector,n.SettingRow=e.SettingRow,n.SettingSection=e.SettingSection},function(e){o.LayoutItemSizeModes=e.LayoutItemSizeModes,o.searchUtils=e.searchUtils}],execute:function(){e((()=>{var e={79702:(e,t,a)=>{var s={"./classic.png":96130,"./toolbar.png":49579};function i(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=n,e.exports=i,i.id=79702},31027:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5m-9 0a3.5 3.5 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5M15.5 11l-5 1-3 4-1-9.5zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38z" clip-rule="evenodd"></path></svg>'},96130:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABICAYAAAATWxDtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7dk9boNAFADhl8iFj+DClQvEOTg450AU0FBwAyiQEpE6wmjBP2Pmq3mytKNd22yEJEmSJOmZvu49kOf5T+hpqqpabPIdQjEYjMFgDAZjMJhTJLhcLpFlWZxOy+PjOEbTNNH3/a7zR5a0w263293Fnp3P578we88fWVKweSHX+i/M1vkj8zsMxmAwBoMxGIzBYAwGYzCYpGDTNK1+dhiG3eePLClYXderFnIO07bt7vNH5o3zm/HG+cMYDMZgMAaDMRhM0mXT9XoNbdN1XaRICpb6YdrOIxHGYDAGgzEYjMFgDAZjMBiDwRgMJulNR1EU8QhlWYaWucNgDAaTdCR6dL2OOwzGYDAGgzEYjMFg3uqP8yN82i9adxiMwWAMBmMwGIPB+C4Rxh0GYzAYg8EYDMZgkiRJkiQt+AWTS06XiGZauQAAAABJRU5ErkJggg=="},49579:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABICAYAAAATWxDtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJdSURBVHgB7dlNa+JAHMfx/3Zb2kJbFBQU9KCg6FFBDx59ZbtvzBfgxYMHFfEBFBQUFBV8QNztP1BBN8YkPmyV7+fmOJPM+EtmxkQEAAAAAAAAAAAAAAAAAAAAwPf341iFRCLxR3A11WrVMpMHwU0hsBtDYDfmUVwKBAISj8fl8dH6EIvFQprNpvT7/bO2D4VC0u12d8r0WMFg8Ogxz2G9XstgMDD6Z0b7EA6Hxev1isfjMcqm06nR516vJ265vsOi0aitH+bl5cUI5tztzepls1l5e3uTa9DzpNNp0zF89SUSiWzDUu/v75JMJiWXyxl13HB9KTo54aFBndJ+n9/vl9FoJJVKRa5Ff3y9ozudzk65Bmk1Pv1O6xSLReNOdeJu1jAN9dD0dCl6vv2LSQO0czFqHZ3Wnbr8ZP+f5PN5catQKIhbum7Zpetbu90WJ+42sHOKxWLbIHT6q9frB+s6WUM1MKcIzAYN6GvzYBXWNRCYTeVy2Va98Xi8szO0ott8p+42sFPWITN2NzS6U7Ub2P7u0o672SXq9tjtfxu39Hz723INYT6fH22rdfYfBtjh+g7Tjtp9omA2gFPb79OnB5lMxvhvdI3tvYald1Kr1dop13GVSiVJpVLy+vpq2lbHo3Xc+Hmsgs/n+2VWvlwujR3R09OTZXsdQKPRkNlsdtb2Hx8fMplMtp83m40Mh0PjeA8Pl5849KKo1WqyWq3++U77rI+gNBgN9vn52SjX6VIvrM9XKKbt1OcYfosF3od9M7wPuzMEdmMIDAAAAAAAAAAAAAAAAAAAAADO7i8CkeMWEeT35gAAAABJRU5ErkJggg=="},79244:e=>{"use strict";e.exports=a},4108:e=>{"use strict";e.exports=s},41496:e=>{"use strict";e.exports=o},14321:e=>{"use strict";e.exports=i},79298:e=>{"use strict";e.exports=n}},t={};function l(a){var s=t[a];if(void 0!==s)return s.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,l),i.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="";var r={};return l.p=window.jimuConfig.baseUrl,(()=>{"use strict";l.r(r),l.d(r,{__set_webpack_public_path__:()=>v,default:()=>b});var e=l(79244),t=l(4108),a=l(14321),s=l(79298),i=l(31027),n=l.n(i),o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(a[s[i]]=e[s[i]])}return a};const u=t=>{const a=window.SVG,{className:s}=t,i=o(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",s);return a?e.React.createElement(a,Object.assign({className:l,src:n()},i)):e.React.createElement("svg",Object.assign({className:l},i))};var c;!function(e){e.Classic="CLASSIC",e.Toolbar="TOOLBAR"}(c||(c={}));const A=[{key:"unitsLabelMetric",value:"metric"},{key:"unitsLabelImperial",value:"imperial"}],d=[{key:"unitsInches",value:"inches"},{key:"unitsLabelFeet",value:"feet"},{key:"unitsLabelYards",value:"yards"},{key:"unitsLabelMiles",value:"miles"},{key:"unitsLabelNauticalMiles",value:"nautical-miles"},{key:"unitsLabelFeetUS",value:"us-feet"},{key:"unitsLabelMeters",value:"meters"},{key:"unitsLabelKilometers",value:"kilometers"}],g=[{key:"unitsLabelSquareInches",value:"square-inches"},{key:"unitsLabelSquareFeet",value:"square-feet"},{key:"unitsLabelSquareYards",value:"square-yards"},{key:"unitsLabelSquareMiles",value:"square-miles"},{key:"unitsLabelSquareFeetUS",value:"square-us-feet"},{key:"unitsLabelSquareMeters",value:"square-meters"},{key:"unitsLabelSquareKilometers",value:"square-kilometers"},{key:"unitsLabelAcres",value:"acres"},{key:"unitsLabelAres",value:"ares"},{key:"unitsLabelHectares",value:"hectares"}],p={distance:"Distance",area:"Area",atLeastOne:"At least one tool should be selected",toolbar:"Toolbar"};var m=l(41496);const y=e.css`
.placeholder-container {
  height: calc(100% - 100px);
  font-weight: 500;
  color: var(--sys-color-surface-paper-hint);
  .placeholder-hint {
    font-size: 14px;
    max-width: 160px;
  }
}
.arrangement {
  gap: var(--sys-spacing-3);
  .arrangement-btn {
    width: calc(50% - 6px);
    padding: 0;
    flex-direction: column;
    overflow: visible;
    &:hover {
      background-color: unset;
    }
    .arrangement-img {
      width: 100%;
      min-width: 0;
      height: auto;
      margin-right: 0;
      margin-bottom: var(--sys-spacing-2);
      background: var(--sys-color-action-pressed);
    }
    .arrangement-img.active {
      outline: 2px solid var(--sys-color-primary-main);
    }
  }
}
`,b=i=>{const{id:n,onSettingChange:o,config:r,useMapWidgetIds:b}=i,{enableDistance:v=!0,defaultDistanceUnit:f="metric",enableArea:x=!0,defaultAreaUnit:h="metric",arrangement:j=c.Classic}=r,M=(null==b?void 0:b.length)>0,S=[...A,...d],w=[...A,...g],k=[{key:"classic",value:c.Classic},{key:"toolbar",value:c.Toolbar}],L=e.hooks.useTranslation(a.defaultMessages,e.defaultMessages,p);return(0,e.jsx)("div",{className:"widget-setting-measurement w-100 h-100",css:y},(0,e.jsx)(s.SettingSection,{title:L("selectMapWidget")},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(s.MapWidgetSelector,{onSelect:e=>{o({id:n,useMapWidgetIds:e})},useMapWidgetIds:b,"aria-describedby":"measurement-blank-msg"}))),!M&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center placeholder-container"},(0,e.jsx)("div",{className:"text-center"},(0,e.jsx)(u,{size:48,className:"d-inline-block placeholder-icon mb-2"}),(0,e.jsx)("p",{className:"placeholder-hint"},L("selectMapHint")))),M&&(0,e.jsx)(e.React.Fragment,null,(0,e.jsx)(s.SettingSection,{title:L("tools"),role:"group","aria-label":L("tools")},(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.Label,null,(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:v,onChange:(e,t)=>{o({id:n,config:r.set("enableDistance",t)})}}),L("distance"))),v&&(0,e.jsx)(s.SettingRow,{label:L("defaultUnit"),truncateLabel:!0},(0,e.jsx)(a.Select,{size:"sm",value:f,className:"w-50",onChange:e=>{var t;o({id:n,config:r.set("defaultDistanceUnit",null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value)})},"aria-label":L("defaultUnit")},S.map((t=>(0,e.jsx)("option",{key:t.key,value:t.value},L(t.key)))))),(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.Label,null,(0,e.jsx)(a.Checkbox,{className:"mr-2",checked:x,onChange:(e,t)=>{o({id:n,config:r.set("enableArea",t)})}}),L("area"))),x&&(0,e.jsx)(s.SettingRow,{label:L("defaultUnit"),truncateLabel:!0},(0,e.jsx)(a.Select,{size:"sm",value:h,className:"w-50",onChange:e=>{var t;o({id:n,config:r.set("defaultAreaUnit",null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value)})},"aria-label":L("defaultUnit")},w.map((t=>(0,e.jsx)("option",{key:t.key,value:t.value},L(t.key)))))),!v&&!x&&(0,e.jsx)(s.SettingRow,null,(0,e.jsx)(a.Alert,{form:"basic",type:"warning",className:"w-100",open:!0,text:L("atLeastOne")}))),(0,e.jsx)(s.SettingSection,{title:L("arrangement"),role:"group","aria-label":L("arrangement")},(0,e.jsx)(s.SettingRow,{className:"arrangement d-flex justify-content-between"},k.map((s=>(0,e.jsx)(a.Button,{key:s.value,type:"tertiary",disableRipple:!0,title:L(s.key),className:"arrangement-btn",onClick:()=>{(a=>{const s=(0,t.getAppConfigAction)();s.editWidget({id:n,config:r.set("arrangement",a)}),m.searchUtils.getLayoutInfosHoldContent(s.appConfig,e.LayoutItemType.Widget,n).forEach((t=>{s.appConfig.layouts[t.layoutId].type===e.LayoutType.FixedLayout?a===c.Toolbar?s.editLayoutItemProperty(t,"setting.autoProps.width",m.LayoutItemSizeModes.Auto).editLayoutItemProperty(t,"setting.autoProps.height",m.LayoutItemSizeModes.Auto).editWidgetProperty(n,"offPanel",!0).exec():a===c.Classic&&s.editLayoutItemProperty(t,"setting.autoProps.width",m.LayoutItemSizeModes.Custom).editLayoutItemProperty(t,"setting.autoProps.height",m.LayoutItemSizeModes.Custom).editLayoutItemProperty(t,"bbox.width","300px").editLayoutItemProperty(t,"bbox.height","420px").editWidgetProperty(n,"offPanel",!1).exec():s.exec()}))})(s.value)}},(0,e.jsx)(a.Icon,{autoFlip:!0,icon:l(79702)(`./${s.key}.png`),className:(0,e.classNames)("arrangement-img",{active:j===s.value})}),(0,e.jsx)("div",{className:"text-truncate",title:L(s.key)},L(s.key)))))))))};function v(e){l.p=e}})(),r})())}}}));