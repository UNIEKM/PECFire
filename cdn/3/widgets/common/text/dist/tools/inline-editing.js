System.register(["jimu-core","jimu-ui","jimu-for-builder"],(function(e,t){var i={},n={},r={};return{setters:[function(e){i.appActions=e.appActions,i.getAppStore=e.getAppStore,i.i18n=e.i18n},function(e){n.defaultMessages=e.defaultMessages},function(e){r.builderAppSync=e.builderAppSync}],execute:function(){e((()=>{var e={89056:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M9.795 1.282c.387-.387 1.028-.374 1.431.03l1.462 1.462c.404.403.417 1.044.03 1.431L5.413 11.51l-2.674.48a.637.637 0 0 1-.73-.73l.48-2.673zM2 13a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd"></path></svg>'},12046:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},79244:e=>{"use strict";e.exports=i},4108:e=>{"use strict";e.exports=r},14321:e=>{"use strict";e.exports=n}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";o.r(s),o.d(s,{default:()=>a});var e=o(79244),t=o(14321),i=o(12046),n=o.n(i),r=o(89056),l=o.n(r),p=o(4108);const d=()=>{const t=(0,e.getAppStore)().getState();return t.appStateInBuilder?t.appStateInBuilder:t};class a{constructor(){this.index=0,this.id="inline-editing"}getGroupId(){return null}getTitle(){const i=e.i18n.getIntl("_jimu");return null!=i?i.formatMessage({id:"edit",defaultMessage:t.defaultMessages.edit}):"Edit"}getIcon(){return window.jimuConfig.isBuilder?l():n()}checked(e){var t;const i=e.layoutItem.widgetId;return!!(null===(t=d().widgetsRuntimeInfo[i])||void 0===t?void 0:t.isInlineEditing)}onClick(t){var i;const n=t.layoutItem.widgetId,r=null===(i=d().widgetsRuntimeInfo[n])||void 0===i?void 0:i.isInlineEditing;window.jimuConfig.isBuilder?(p.builderAppSync.publishSetWidgetIsInlineEditingStateToApp(n,!r),r&&p.builderAppSync.publishChangeWidgetStatePropToApp({widgetId:n,propKey:"showExpression",value:!1}),p.builderAppSync.publishWidgetToolbarStateChangeToApp(n,["text-inline-editing","text-expression"])):((0,e.getAppStore)().dispatch(e.appActions.setWidgetIsInlineEditingState(n,!r)),r&&(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(n,"showExpression",!1)),(0,e.getAppStore)().dispatch(e.appActions.widgetToolbarStateChange(n,["text-inline-editing","text-expression"])))}getSettingPanel(){return null}}})(),s})())}}}));