var networkD60E3EB49B14F491DAAAC40DDB7149632;(()=>{"use strict";var e={934:(e,t,i)=>{i.d(t,{Kq:()=>n,ME:()=>l,Tx:()=>o});var s=i(738);let a=0;function o(){a=0}function n(e,t){let i=[];if(!e||!e.hasChildNodes())return;let s=e.children;for(let e=0;e<s.length;e++){let a;a="script"===s.item(e).nodeName.toLowerCase()?r(s.item(e)):s.item(e).cloneNode(!0),t.appendChild(a),i.push(a)}return i}function r(e){let t=document.createElement("script"),i=e.attributes;for(let e=0;e<i.length;e++)t.setAttribute(i[e].name,i[e].textContent),"src"===i[e].name.toLowerCase()&&(a++,t.onload=()=>{a--});return t.innerHTML=e.innerHTML,t}function l(){let e=s.setInterval((()=>{0===a&&(s.clearInterval(e),s.hasOwnProperty("HTMLWidgets")&&s.HTMLWidgets.staticRender&&s.HTMLWidgets.staticRender())}),100)}},50:(e,t,i)=>{i.d(t,{E:()=>r});var s=i(706),a=s.Zb,o=s.Hn;class n extends a{constructor(){super(...arguments),this.provider=void 0,this.source=void 0,this.name="rcv_script",this.displayName="rcv_script",this.slices=[this.provider,this.source]}}class r extends o{constructor(){super(...arguments),this.rcvScriptCard=new n,this.cards=[this.rcvScriptCard]}}},728:(e,t,i)=>{i.d(t,{u:()=>d});var s,a=i(261),o=i(934),n=i(50),r=i(738);!function(e){e[e.Data=2]="Data",e[e.Resize=4]="Resize",e[e.ViewMode=8]="ViewMode",e[e.Style=16]="Style",e[e.ResizeEnd=32]="ResizeEnd",e[e.All=62]="All"}(s||(s={}));const l=[s.Resize,s.ResizeEnd,s.Resize+s.ResizeEnd];class d{constructor(e){this.formattingSettingsService=new a.Z,e&&e.element&&(this.rootElement=e.element),this.headNodes=[],this.bodyNodes=[]}update(e){if(!(e&&e.type&&e.viewport&&e.dataViews&&0!==e.dataViews.length&&e.dataViews[0]))return;const t=e.dataViews[0];this.formattingSettings=this.formattingSettingsService.populateFormattingSettingsModel(n.E,e.dataViews);let i=null;t.scriptResult&&t.scriptResult.payloadBase64&&(i=t.scriptResult.payloadBase64),-1===l.indexOf(e.type)?i&&this.injectCodeFromPayload(i):this.onResizing(e.viewport)}onResizing(e){}injectCodeFromPayload(e){if((0,o.Tx)(),!e)return;let t=document.createElement("html");try{t.innerHTML=r.atob(e)}catch(e){return}if(0===this.headNodes.length){for(;this.headNodes.length>0;){let e=this.headNodes.pop();document.head.removeChild(e)}let e=t.getElementsByTagName("head");if(e&&e.length>0){let t=e[0];this.headNodes=(0,o.Kq)(t,document.head)}}for(;this.bodyNodes.length>0;){let e=this.bodyNodes.pop();this.rootElement.removeChild(e)}let i=t.getElementsByTagName("body");if(i&&i.length>0){let e=i[0];this.bodyNodes=(0,o.Kq)(e,this.rootElement)}(0,o.ME)()}getFormattingModel(){return this.formattingSettingsService.buildFormattingModel(this.formattingSettings)}}},706:(e,t,i)=>{i.d(t,{Hn:()=>a,Zb:()=>o});class s{}class a{}class o extends s{getFormattingCard(e,t,i){return{displayName:i&&this.displayNameKey?i.getDisplayName(this.displayNameKey):this.displayName,description:i&&this.descriptionKey?i.getDisplayName(this.descriptionKey):this.description,groups:[t],uid:e,analyticsPane:this.analyticsPane}}}},261:(e,t,i)=>{i.d(t,{Z:()=>s});const s=class{constructor(e){this.localizationManager=e}populateFormattingSettingsModel(e,t){var i,s,a;let o=new e,n=null===(s=null===(i=null==t?void 0:t[0])||void 0===i?void 0:i.metadata)||void 0===s?void 0:s.objects;return n&&(null===(a=o.cards)||void 0===a||a.forEach((e=>{var t,i,s;null===(t=null==e?void 0:e.slices)||void 0===t||t.forEach((t=>{null==t||t.setPropertiesValues(n,e.name)})),null===(s=null===(i=null==e?void 0:e.container)||void 0===i?void 0:i.containerItems)||void 0===s||s.forEach((t=>{var i;null===(i=null==t?void 0:t.slices)||void 0===i||i.forEach((t=>{null==t||t.setPropertiesValues(n,e.name)}))}))}))),o}buildFormattingModel(e){var t;let i={cards:[]};return null===(t=e.cards)||void 0===t||t.forEach((e=>{if(!e)return;const t=e.name,s=e.name+"-group";let a={displayName:void 0,slices:[],uid:s},o=e.getFormattingCard(t,a,this.localizationManager);i.cards.push(o);const n={};if(e.container){const i=e.container,r=s+"-container",l={displayName:this.localizationManager&&i.displayNameKey?this.localizationManager.getDisplayName(i.displayNameKey):i.displayName,description:this.localizationManager&&i.descriptionKey?this.localizationManager.getDisplayName(i.descriptionKey):i.description,containerItems:[],uid:r};i.containerItems.forEach((e=>{const i=e.displayNameKey?e.displayNameKey:e.displayName,s=r+i;let a={displayName:this.localizationManager&&e.displayNameKey?this.localizationManager.getDisplayName(e.displayNameKey):e.displayName,slices:[],uid:s};this.buildFormattingSlices(e.slices,t,n,o,a.slices),l.containerItems.push(a)})),a.container=l}e.slices&&this.buildFormattingSlices(e.slices,t,n,o,a.slices),o.revertToDefaultDescriptors=this.getRevertToDefaultDescriptor(e)})),i}buildFormattingSlices(e,t,i,s,a){null==e||e.forEach((e=>{let o=null==e?void 0:e.getFormattingSlice(t,this.localizationManager);o&&(void 0===i[e.name]?i[e.name]=0:(i[e.name]++,o.uid=`${o.uid}-${i[e.name]}`),e.topLevelToggle?(o.suppressDisplayName=!0,s.topLevelToggle=o):a.push(o))}))}getRevertToDefaultDescriptor(e){var t,i;const s={};let a=[],o=this.getSlicesRevertToDefaultDescriptor(e.name,e.slices,s),n=[];return null===(i=null===(t=e.container)||void 0===t?void 0:t.containerItems)||void 0===i||i.forEach((t=>{n=n.concat(this.getSlicesRevertToDefaultDescriptor(e.name,t.slices,s))})),a=o.concat(n),a}getSlicesRevertToDefaultDescriptor(e,t,i){let s=[];return null==t||t.forEach((t=>{t&&!i[t.name]&&(i[t.name]=!0,s=s.concat(t.getRevertToDefaultDescriptor(e)))})),s}}},738:e=>{e.exports=Function("return this")()}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{i.r(s),i.d(s,{default:()=>o});var e=i(728),t=i(738).powerbi,a={name:"networkD60E3EB49B14F491DAAAC40DDB7149632",displayName:"networkD",class:"Visual",apiVersion:"5.1.0",create:t=>{if(e.u)return new e.u(t);throw"Visual instance not found"},createModalDialog:(e,t,i)=>{const s=globalThis.dialogRegistry;e in s&&new s[e](t,i)},custom:!0};void 0!==t&&(t.visuals=t.visuals||{},t.visuals.plugins=t.visuals.plugins||{},t.visuals.plugins.networkD60E3EB49B14F491DAAAC40DDB7149632=a);const o=a})(),networkD60E3EB49B14F491DAAAC40DDB7149632=s})();