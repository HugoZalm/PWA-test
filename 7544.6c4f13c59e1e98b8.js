"use strict";(self.webpackChunkpoc_leidingen=self.webpackChunkpoc_leidingen||[]).push([[7544],{7544:(A,u,d)=>{d.r(u),d.d(u,{ion_breadcrumb:()=>r,ion_breadcrumbs:()=>m});var o=d(7936),g=d(3938),h=d(1671),x=d(1217),b=d(2854);const r=class{constructor(l){(0,o.r)(this,l),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.collapsedClick=(0,o.e)(this,"collapsedClick",7),this.inheritedAttributes={},this.collapsed=!1,this.active=!1,this.disabled=!1,this.routerDirection="forward",this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.collapsedIndicatorClick=()=>{this.collapsedClick.emit({ionShadowTarget:this.collapsedRef})}}componentWillLoad(){this.inheritedAttributes=(0,x.i)(this.el)}isClickable(){return void 0!==this.href}render(){const{color:l,active:a,collapsed:i,disabled:n,download:c,el:f,inheritedAttributes:t,last:p,routerAnimation:w,routerDirection:M,separator:z,showCollapsedIndicator:_,target:D}=this,y=this.isClickable(),B=void 0===this.href?"span":"a",I=n?void 0:this.href,E=(0,h.b)(this),O="span"===B?{}:{download:c,href:I,target:D},j=!p&&(i?!(!_||p):z);return(0,o.h)(o.H,{onClick:C=>(0,b.o)(I,C,M,w),"aria-disabled":n?"true":null,class:(0,b.c)(l,{[E]:!0,"breadcrumb-active":a,"breadcrumb-collapsed":i,"breadcrumb-disabled":n,"in-breadcrumbs-color":(0,b.h)("ion-breadcrumbs[color]",f),"in-toolbar":(0,b.h)("ion-toolbar",this.el),"in-toolbar-color":(0,b.h)("ion-toolbar[color]",this.el),"ion-activatable":y,"ion-focusable":y})},(0,o.h)(B,Object.assign({},O,{class:"breadcrumb-native",part:"native",disabled:n,onFocus:this.onFocus,onBlur:this.onBlur},t),(0,o.h)("slot",{name:"start"}),(0,o.h)("slot",null),(0,o.h)("slot",{name:"end"})),_&&(0,o.h)("button",{part:"collapsed-indicator",onClick:()=>this.collapsedIndicatorClick(),ref:C=>this.collapsedRef=C,class:{"breadcrumbs-collapsed-indicator":!0}},(0,o.h)("ion-icon",{icon:g.n,lazy:!1})),j&&(0,o.h)("span",{class:"breadcrumb-separator",part:"separator","aria-hidden":"true"},(0,o.h)("slot",{name:"separator"},"ios"===E?(0,o.h)("ion-icon",{icon:g.m,lazy:!1,"flip-rtl":!0}):(0,o.h)("span",null,"/"))))}get el(){return(0,o.i)(this)}};r.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7))}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;padding-left:12px;padding-right:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}",md:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:$breadcrumb-md-background-focused}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.breadcrumb-separator{margin-left:10px;margin-right:10px;margin-top:-1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-separator{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}"};const m=class{constructor(l){(0,o.r)(this,l),this.ionCollapsedClick=(0,o.e)(this,"ionCollapsedClick",7),this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1,this.breadcrumbsInit=()=>{this.setBreadcrumbSeparator(),this.setMaxItems()},this.resetActiveBreadcrumb=()=>{const i=this.getBreadcrumbs().find(n=>n.active);i&&this.activeChanged&&(i.active=!1)},this.setMaxItems=()=>{const{itemsAfterCollapse:a,itemsBeforeCollapse:i,maxItems:n}=this,c=this.getBreadcrumbs();for(const t of c)t.showCollapsedIndicator=!1,t.collapsed=!1;void 0!==n&&c.length>n&&i+a<=n&&c.forEach((t,p)=>{p===i&&(t.showCollapsedIndicator=!0),p>=i&&p<c.length-a&&(t.collapsed=!0)})},this.setBreadcrumbSeparator=()=>{const{itemsAfterCollapse:a,itemsBeforeCollapse:i,maxItems:n}=this,c=this.getBreadcrumbs(),f=c.find(t=>t.active);for(const t of c){const p=void 0!==n&&0===a?t===c[i]:t===c[c.length-1];t.last=p,t.separator=void 0!==t.separator?t.separator:!p||void 0,!f&&p&&(t.active=!0,this.activeChanged=!0)}},this.getBreadcrumbs=()=>Array.from(this.el.querySelectorAll("ion-breadcrumb"))}onCollapsedClick(l){const i=this.getBreadcrumbs().filter(n=>n.collapsed);this.ionCollapsedClick.emit(Object.assign(Object.assign({},l.detail),{collapsedBreadcrumbs:i}))}maxItemsChanged(){this.resetActiveBreadcrumb(),this.breadcrumbsInit()}componentWillLoad(){this.breadcrumbsInit()}render(){const{color:l,collapsed:a}=this,i=(0,h.b)(this);return(0,o.h)(o.H,{class:(0,b.c)(l,{[i]:!0,"in-toolbar":(0,b.h)("ion-toolbar",this.el),"in-toolbar-color":(0,b.h)("ion-toolbar[color]",this.el),"breadcrumbs-collapsed":a})},(0,o.h)("slot",null))}get el(){return(0,o.i)(this)}static get watchers(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}};m.style={ios:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}",md:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"}},2854:(A,u,d)=>{d.d(u,{c:()=>h,g:()=>b,h:()=>g,o:()=>k});var o=d(9671);const g=(r,e)=>null!==e.closest(r),h=(r,e)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},e):e,b=r=>{const e={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(r).forEach(s=>e[s]=!0),e},v=/^[a-z][a-z0-9+\-.]*:/,k=function(){var r=(0,o.Z)(function*(e,s,m,l){if(null!=e&&"#"!==e[0]&&!v.test(e)){const a=document.querySelector("ion-router");if(a)return s?.preventDefault(),a.push(e,m,l)}return!1});return function(s,m,l,a){return r.apply(this,arguments)}}()}}]);