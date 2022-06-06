"use strict";(()=>{var S=Object.defineProperty;var f=(y,v)=>S(y,"name",{value:v,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],{37226:(y,v,a)=>{a.d(v,{i:()=>s});var d=a(90420),_=a(30570),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends _.b{static build(o,i){const c=new s;return c.providerId=o,c.provider=i,c}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}},"ClientDefinedProviderElement");l([d.Lj],s.prototype,"providerId",2),s=l([d.Ih],s)},94666:(y,v,a)=>{a.d(v,{Z:()=>T,o:()=>O});var d=a(90420),_=a(37226),m=a(46248),r=a(93952),l=a(46912),s=a(80425),o=a(3447),i=a(65138),c=Object.defineProperty,n=Object.getOwnPropertyDescriptor,e=f((t,h,g,P)=>{for(var I=P>1?void 0:P?n(h,g):h,D=t.length-1,C;D>=0;D--)(C=t[D])&&(I=(P?C(h,g,I):C(I))||I);return P&&I&&c(h,g,I),I},"__decorateClass");const p=f(()=>navigator.platform.match(/Mac/),"isMac"),u=p()?"metaKey":"ctrlKey",E=p()?"Meta":"Control",O=f(t=>t instanceof KeyboardEvent?t[u]:!1,"isPlatformMetaKey"),M=450;let T=f(class extends HTMLElement{constructor(){super(...arguments);this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new l.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+k,Control+K"}setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),new ResizeObserver(g=>{for(const P of g)this.commandPaletteInput.scopeElement.smallDisplay=P.contentRect.width<M}).observe(this),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;const h=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(h)}connectedCallback(){this.setupComplete||this.setup()}clear(t=!0){this.clearProviderCaches(),this.pageStack.reset(),t&&this.resetInput()}clearCommands(t=!0){return this.everActivated&&(this.clearCommandProviderCaches(),t&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.inputValue=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<M,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,i.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,i.j)("session_terminated")}generateSessionId(){return(0,s.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(t){const h=this.closest("details");t?h.open=!0:h.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get secondaryActivationHotkey(){const t=this.activationHotkey.split(",");return t.length>1?t[t.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondaryActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}platformHotkey(t){if(t==="none")return"";let h=t;if(p())h=h.replace(/Mod\+Alt/g,"Alt+Mod");else if(h.includes("Shift")){const g=h.charAt(h.length-1);h+=`,${h.replace(`Shift+${g}`,g.toUpperCase())}`}return h.replace(/Mod/g,E)}onInput(){!this.everActivated||(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){const t=this.getMode();this.commandPaletteInput.overlay=t;for(const h of this.groups)h.renderElement(t);if(t&&this.getTextWithoutMode()===""){const h=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(h)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(t){if(!(t instanceof CustomEvent))return;const g=t.detail.items.filter(C=>C.group!==m.O.footerGroupId),P=g.filter(C=>!C.group||!m.O.helpGroupIds.includes(C.group)),I=g.length>P.length,D=P.length===0&&this.activated;P.length>0?this.toggleEmptyState(!1,I):D&&(this.toggleEmptyState(!0,I),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(t){t instanceof CustomEvent&&(this.commandPaletteInput.loading=t.detail.loading)}pageFetchError(t){t instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(t){if(!(t instanceof CustomEvent))return;const h=t.detail.item,g=t.detail.isDefaultSelection;this.updateTypeahead(h,g)}setActiveModeElement(){const t=this.commandPaletteInput.inputValue.substring(0,1),h=this.modes.filter(g=>g.active(this.query.scope,t)).find(g=>g.character()===t);this.activeMode=h||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new l.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.pageStack.defaultScopeId,subjectType:this.pageStack.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){var t;return(t=this.getModeElement())==null?void 0:t.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";const t=this.commandPaletteInput.inputValue,h=this.getMode();return h&&t.startsWith(h)?t.substring(1):t}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(t){this.selectedItem?this.selectedItem.item.select(this):t.preventDefault()}autocomplete(t){(0,i.j)("autocompleted",t);const h=this.commandPaletteInput;t.typeahead!==void 0?h.inputValue=h.overlay+t.typeahead:h.inputValue=h.overlay+t.title}setScope(t){(0,i.j)("scoped");const h=t||this.commandPaletteInput.scope;for(const g of h.tokens){const P=g===h.tokens[h.tokens.length-1],I=new r.j({title:g.value,scopeId:g.id,scopeType:g.type});this.pageStack.push(I,!P)}this.commandPaletteInput.inputValue=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(t){var h;t.key==="Enter"&&this.selectedItem?((h=this.selectedItem)==null||h.activate(this,t),t.preventDefault(),t.stopPropagation()):t.key==="ArrowDown"?(this.navigateToItem(1),t.preventDefault(),t.stopPropagation()):t.key==="ArrowUp"?(this.navigateToItem(-1),t.preventDefault(),t.stopPropagation()):this.isCopyEvent(t)&&this.selectedItem&&(this.selectedItem.copy(this),t.preventDefault(),t.stopPropagation())}navigateToItem(t){this.pageStack.navigate(t)}toggleTips(){const t=this.modeTips.filter(g=>g.available(this.query)),h=t[Math.floor(Math.random()*t.length)];for(const g of this.modeTips)g.hidden=h!==g;this.pageStack.hasVisibleTip=!!h,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(t,h){for(const g of this.emptyStateElements)g.toggle(this.query,t);if(!h&&t){const g=this.serverDefinedProviderElements.find(P=>P.type==="help");g&&this.pageStack.currentPage.fetch([g.provider],{isEmpty:!0})}}toggleErrorTips(){for(const t of this.errorStateTips)t.toggle(this.query,!1,this.error)}updateInputScope(t){t instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(t,h=!1){var g,P;this.getTextWithoutMode()===""&&(!t||h)?this.commandPaletteInput.typeahead="":t&&(this.commandPaletteInput.typeahead=(P=(g=t.typeahead)!=null?g:t.title)!=null?P:"")}isCopyEvent(t){return this.commandPaletteInput.textSelected()?!1:p()?t.metaKey&&t.key==="c":t.ctrlKey&&t.key==="c"}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(t=>{var h;return(h=t.provider)==null?void 0:h.hasCommands})}clearProviderCaches(){var t;for(const h of this.providerElements)(t=h.provider)==null||t.clearCache()}clearCommandProviderCaches(){var t;for(const h of this.commandsProviderElements)(t=h.provider)==null||t.clearCache()}registerProvider(t,h){const g=this.querySelector(`client-defined-provider[data-provider-id="${t}"]`);g&&g.remove();const P=_.i.build(t,h);this.appendChild(P)}pushPage(t,h=!1){h&&this.pageStack.clear(!1),this.pageStack.push(t),this.resetInput()}get tipElements(){const t=this.querySelectorAll("command-palette-tip");return Array.from(t)}get modeTips(){return this.tipElements.filter(t=>!t.onEmpty&&!t.onError)}get emptyStateElements(){return this.tipElements.filter(t=>t.onEmpty)}get errorStateTips(){return this.tipElements.filter(t=>t.onError)}get placeholder(){return this.getAttribute("placeholder")||""}get defaultOpen(){return this.getAttribute("data-default-open")!==null}clearReturnToParams(){const t=new URLSearchParams(location.search);t.delete("command_palette_open"),t.delete("command_query"),t.delete("command_mode"),t.delete("clear_command_scope"),history.replaceState(null,"",`?${t}${location.hash}`)}displayFlash(t,h,g=5e3){const P=document.querySelector(".js-command-palette-toasts");if(!P)return;const I=P.querySelectorAll(".Toast");for(const b of I)b.hidden=!0;const D=P.querySelector(`.Toast.Toast--${t}`);if(!D)return;const C=D.querySelector(".Toast-content");C.textContent=h,D.hidden=!1,setTimeout(()=>{D.hidden=!0},g)}},"CommandPalette");T.tagName="command-palette",e([d.Lj],T.prototype,"returnTo",2),e([d.Lj],T.prototype,"userId",2),e([d.Lj],T.prototype,"activationHotkey",2),e([d.Lj],T.prototype,"commandModeHotkey",2),e([d.fA],T.prototype,"pageStack",2),e([d.GO],T.prototype,"clientDefinedProviderElements",2),e([d.GO],T.prototype,"serverDefinedProviderElements",2),e([(0,o.D)(250)],T.prototype,"clearCommands",1),T=e([d.Ih],T)},46248:(y,v,a)=>{a.d(v,{O:()=>s});var d=a(90420),_=a(38772),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends HTMLElement{constructor(){super(...arguments);this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.innerHTML="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(o){return this.list.querySelectorAll(`[data-item-id="${o.id}"]`).length>0}renderElement(o){const i=f(()=>this.hasTitle?_.dy`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${o?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:_.dy`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `,"groupTemplate");(0,_.sY)(i(),this)}push(o){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?o.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(o):this.list.append(o)}replaceTopGroupItem(o){this.list.replaceChild(o,this.firstItem)}groupLimitForScope(){const o=this.closest("command-palette");if(o){const i=o.query.scope.type;return JSON.parse(this.groupLimits)[i]}}get limit(){const o=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:o||s.defaultGroupLimit}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(o){const c=this.parsedGroupLimits()[o];return this.topGroup?1:this.isModeActive()?s.activeModeLimit:c||c===0?c:s.defaultGroupLimit}atLimitForScopeType(o){return this.list.children.length>=this.limitForScopeType(o)}isModeActive(){const o=this.closest("command-palette");return o?o.getMode():!1}get topGroup(){return this.groupId===s.topGroupId}get hasTitle(){return this.groupId!==s.footerGroupId&&this.groupId!==s.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}},"CommandPaletteItemGroupElement");s.defaultGroupLimit=5,s.activeModeLimit=50,s.topGroupId="top",s.defaultGroupId="default",s.footerGroupId="footer",s.helpGroupIds=["modes_help","filters_help"],s.commandGroupIds=["commands"],s.topGroupScoreThreshold=9,l([d.Lj],s.prototype,"groupTitle",2),l([d.Lj],s.prototype,"groupHint",2),l([d.Lj],s.prototype,"groupId",2),l([d.Lj],s.prototype,"groupLimits",2),l([d.Lj],s.prototype,"defaultPriority",2),l([d.Lj],s.prototype,"skipTemplate",2),l([d.fA],s.prototype,"list",2),l([d.fA],s.prototype,"header",2),s=l([d.Ih],s)},77396:(y,v,a)=>{a.d(v,{v:()=>n});var d=a(90420),_=a(38772),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((e,p,u,E)=>{for(var O=E>1?void 0:E?r(p,u):p,M=e.length-1,T;M>=0;M--)(T=e[M])&&(O=(E?T(p,u,O):T(O))||O);return E&&O&&m(p,u,O),O},"__decorateClass");const s=14,o=20,i=20,c=55;let n=f(class extends HTMLElement{constructor(){super(...arguments);this.smallDisplay=!1}connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(e=>e.text).join("/")}get id(){return this.lastToken?this.lastToken.id:n.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:n.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:n.emptyScope}set scope(e){this.renderTokens(e.tokens)}renderTokens(e){this.clearScope();let p=0,u=e.length;const E=this.smallDisplay?s:i,O=this.smallDisplay?o:c;for(let t=e.length-1;t>=0&&!(p+Math.min(e[t].text.length,E)+5>O);t--)p+=Math.min(e[t].text.length,E)+5,u=t;const M=f(t=>_.dy`${t.map(T)}`,"tokensTemplate"),T=f((t,h)=>{const g=t.text.length>E?`${t.text.substring(0,E-3)}...`:t.text;return _.dy`
        <command-palette-token
          data-text="${t.text}"
          data-id="${t.id}"
          data-type="${t.type}"
          data-value="${t.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${h<u}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${g}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `},"tokenTemplate");(0,_.sY)(M(e),this),this.hidden=!this.hasScope(),u!==0&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(const e of this.tokens)e.remove();this.placeholder.hidden=!0}attributeChangedCallback(e,p,u){!this.isConnected||e==="data-small-display"&&p!==u&&this.renderTokens(this.tokens)}},"CommandPaletteScopeElement");n.emptyScope={type:"",text:"",id:"",tokens:[]},n.observedAttributes=["data-small-display"],l([d.Lj],n.prototype,"smallDisplay",2),l([d.fA],n.prototype,"placeholder",2),l([d.GO],n.prototype,"tokens",2),n=l([d.Ih],n)},60026:(y,v,a)=>{a.d(v,{z:()=>m});function d(r){const l=document.createElement("pre");return l.style.width="1px",l.style.height="1px",l.style.position="fixed",l.style.top="5px",l.textContent=r,l}f(d,"createNode");function _(r){if("clipboard"in navigator)return navigator.clipboard.writeText(r.textContent||"");const l=getSelection();if(l==null)return Promise.reject(new Error);l.removeAllRanges();const s=document.createRange();return s.selectNodeContents(r),l.addRange(s),document.execCommand("copy"),l.removeAllRanges(),Promise.resolve()}f(_,"copyNode");function m(r){if("clipboard"in navigator)return navigator.clipboard.writeText(r);const l=document.body;if(!l)return Promise.reject(new Error);const s=d(r);return l.appendChild(s),_(s),l.removeChild(s),Promise.resolve()}f(m,"copyText")},53205:(y,v,a)=>{a.d(v,{i:()=>s});var d=a(94666),_=a(21133),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends _.g{activate(o,i){i instanceof PointerEvent?super.activate(o,i):i instanceof KeyboardEvent&&this.activateLinkBehavior(o,i,(0,d.o)(i))}get key(){return this.title}},"AccessPolicyItem");s=l([_.O],s)},74762:(y,v,a)=>{a.d(v,{d:()=>s});var d=a(21133),_=a(80758),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends d.g{constructor(o){super(o);this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);const i=o.getAttribute("data-commands-path");if(!i)return;const c=o.query.params();c.set("command",this.action.id),o.commandPaletteInput.loading=!0;const n=await(0,_.Q)(i,{method:"POST",body:c});if(o.commandPaletteInput.loading=!1,n.ok){const e=await n.json();this.handleResponse(o,e.action,e.arguments)}else o.displayFlash("error","Failed to run command")}handleResponse(o,i,c){switch(i){case"displayFlash":o.displayFlash(c.type,c.message),o.dismiss();break}}},"CommandItem");s=l([d.O],s)},88665:(y,v,a)=>{a.d(v,{Z:()=>s});var d=a(21133),_=a(60026),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends d.g{constructor(o){super(o);this.priority=11,this.score=1,this.typeahead=o.title,this.group="commands"}get action(){return this._action}async activate(o){super.activate(o);try{await(0,_.z)(this.action.text),o.displayFlash("success",this.action.message),o.dismiss()}catch{o.displayFlash("error","Copy failed")}}},"CopyableItem");s=l([d.O],s)},22764:(y,v,a)=>{a.d(v,{B:()=>l});var d=a(21133),_=Object.defineProperty,m=Object.getOwnPropertyDescriptor,r=f((s,o,i,c)=>{for(var n=c>1?void 0:c?m(o,i):o,e=s.length-1,p;e>=0;e--)(p=s[e])&&(n=(c?p(o,i,n):p(n))||n);return c&&n&&_(o,i,n),n},"__decorateClass");let l=f(class extends d.g{static from(s){return new l({title:s.title,typeahead:"",priority:-10-s.index,score:-10,group:s.group,action:{type:"help",description:"",prefix:s.prefix},persistentHint:s.persistentHint})}constructor(s){super(s);this.persistentHint=s.persistentHint}activate(s,o){s.commandPaletteInput.inputValue=this.action.prefix+s.getTextWithoutMode()}autocomplete(s){s.commandPaletteInput.inputValue=this.action.prefix+s.getTextWithoutMode()}calculateScore(s){return 0}get action(){return this._action}},"HelpItem");l=r([d.O],l)},66735:(y,v,a)=>{a.d(v,{s:()=>s});var d=a(94666),_=a(21133),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends _.g{static from(o){return new s({title:o.title,typeahead:o.title,priority:1,score:1,group:o.group,action:{type:"jump_to",description:"",path:o.path},icon:{type:"octicon",id:o.icon}})}activate(o,i){i instanceof PointerEvent?super.activate(o,i):i instanceof KeyboardEvent&&this.activateLinkBehavior(o,i,(0,d.o)(i))}copy(o){super.copy(o);const i=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(i.toString()),i.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}},"JumpToItem");s=l([_.O],s)},12390:(y,v,a)=>{a.d(v,{V:()=>s});var d=a(66735),_=a(21133),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends d.s{},"JumpToOrgItem");s=l([_.O],s)},91664:(y,v,a)=>{a.d(v,{W:()=>s});var d=a(66735),_=a(21133),m=Object.defineProperty,r=Object.getOwnPropertyDescriptor,l=f((o,i,c,n)=>{for(var e=n>1?void 0:n?r(i,c):i,p=o.length-1,u;p>=0;p--)(u=o[p])&&(e=(n?u(i,c,e):u(e))||e);return n&&e&&m(i,c,e),e},"__decorateClass");let s=f(class extends d.s{},"JumpToTeamItem");s=l([_.O],s)},35582:(y,v,a)=>{a.d(v,{U:()=>_});var d=a(33241);class _ extends d.ck{constructor(r,l){super({title:(s=l.title)!=null?s:r.title,subtitle:(o=l.subtitle)!=null?o:r.subtitle,typeahead:(i=l.title)!=null?i:r.title,priority:(c=l.priority)!=null?c:r.priority,group:(n=l.group)!=null?n:r.group,icon:{type:(e=l.iconType)!=null?e:r.iconType,id:(p=l.icon)!=null?p:r.icon},hint:"Run command"});var s,o,i,c,n,e,p;this.command=r}get path(){}copy(r){}activate(r){this.command.run(r),this.command.dismissAfterRun&&r.dismiss()}isApplicable(r){return this.command.isApplicable(r)}select(r){this.command.select?this.command.select(r):r.autocomplete(this)}}f(_,"MainWindowCommandItem")},28548:(y,v,a)=>{a.d(v,{K:()=>o});var d=a(21133),_=a(46248),m=a(66735),r=Object.defineProperty,l=Object.getOwnPropertyDescriptor,s=f((i,c,n,e)=>{for(var p=e>1?void 0:e?l(c,n):c,u=i.length-1,E;u>=0;u--)(E=i[u])&&(p=(e?E(c,n,p):E(p))||p);return e&&p&&r(c,n,p),p},"__decorateClass");let o=f(class extends m.s{static create(i){let c,n;const e=[...i.scope.tokens];for(;e.length>0&&!this.searchableScopeTypes.includes(e[e.length-1].type);)e.pop();let p;if(e.length>0?p=e[e.length-1]:p=void 0,p&&p.type==="repository"){const u=e.map(E=>E.text).join("/");c=`in ${u}`,n=`/${u}/search?q=${i.text}`}else if(p&&p.type==="owner"){const u=`org:${p.text} ${i.text}`;c=`in ${p.text}`,n=`/search?q=${u}`}else c="across all of GitHub",n=`/search?q=${i.text}`;return new o({title:`Search ${i.text}${c}`,typeahead:"",priority:-10,score:-10,group:_.O.footerGroupId,action:{type:"jump_to",description:"",path:n},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:c})}constructor(i){super(i);this.titleScope=i.titleScope}autocomplete(i){}calculateScore(i){return 0}},"SearchLinkItem");o.searchableScopeTypes=["owner","repository"],o=s([d.O],o)},21133:(y,v,a)=>{a.d(v,{O:()=>m,g:()=>l});var d=a(33241),_=a(46248);function m(s){l.register(s)}f(m,"serverDefinedItem");const r=f(class extends d.ck{constructor(s){super(s);this.position="",this.score=s.score,this.scope=s.scope,this.matchFields=s.match_fields,this._action=s.action}static register(s){this.itemClasses[s.itemType]=s}static get itemType(){return this.buildItemType(this.name)}static buildItemType(s){return s.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(s){const o=this.itemClasses[s.action.type];if(o)return new o(s);throw new Error(`No item handler for ${s.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return r.buildItemType(this.constructor.name)}select(s){this.scope?s.setScope(this.scope):s.autocomplete(this)}activate(s,o){}activateLinkBehavior(s,o,i){var c;(c=this.element)==null||c.activateLinkBehavior(s,o,i)}copy(s){}copyToClipboardAndAnnounce(s,o){var i;(i=this.element)==null||i.copyToClipboardAndAnnounce(s,o)}},"_ServerDefinedItem");let l=r;l.itemClasses={},l.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:_.O.defaultGroupId}},93952:(y,v,a)=>{a.d(v,{j:()=>d});class d{constructor(m){this.title=m.title,this.scopeId=m.scopeId,this.scopeType=m.scopeType}get providers(){const m=[];for(const r of this._providerElements)r.provider&&m.push(r.provider);return m}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){const m=document.querySelectorAll("server-defined-provider");return Array.from(m)}get clientDefinedProviderElements(){const m=document.querySelectorAll("client-defined-provider");return Array.from(m)}}f(d,"GlobalProvidersPage")},30570:(y,v,a)=>{a.d(v,{b:()=>d});class d extends HTMLElement{async fetchWithDebounce(m,r){return this.provider?(this._lastFetchQuery=m,await this.delay(this.provider.debounce),this._lastFetchQuery!==m?{results:[]}:this.provider.fetch(m,r)):{results:[]}}delay(m){return new Promise(r=>setTimeout(r,m))}}f(d,"ProviderElement")},31786:(y,v,a)=>{a.d(v,{B:()=>_});var d=a(33241);class _ extends d.BX{fuzzyFilter(r,l,s=0){if(l.isBlank())return r;const o=[];for(const i of r)i.calculateScore(l.text)>s&&o.push(i);return o}}f(_,"ProviderBase")},45686:(y,v,a)=>{a.d(v,{j:()=>_});var d=a(31786);class _ extends d.B{constructor(r){super();this.element=r}get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(r,l){throw new Error("Method not implemented.")}enabledFor(r){throw new Error("Method not implemented.")}clearCache(){throw new Error("Method not implemented.")}}f(_,"ServerDefinedProvider")},46912:(y,v,a)=>{a.d(v,{A:()=>_});var d=a(77396);class _{constructor(r,l,{scope:s,subjectId:o,subjectType:i,returnTo:c}={}){this.queryText=r,this.queryMode=l,this.scope=s!=null?s:d.v.emptyScope,this.subjectId=o,this.subjectType=i,this.returnTo=c}get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(r,l=r.text){return`scope:${r.scope.type}-${r.scope.id}/mode:${r.mode}/query:${l}`}clearScope(){this.scope=d.v.emptyScope}hasScope(){return this.scope.id!==d.v.emptyScope.id}isBlank(){return this.text.trim().length===0}isPresent(){return!this.isBlank()}immutableCopy(){const r=this.text,l=this.mode,s={...this.scope};return new _(r,l,{scope:s,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(r){return this.scope.id===r.scope.id}params(){const r=new URLSearchParams;return this.isPresent()&&r.set("q",this.text),this.hasScope()&&r.set("scope",this.scope.id),this.mode&&r.set("mode",this.mode),this.returnTo&&r.set("return_to",this.returnTo),this.subjectId&&r.set("subject",this.subjectId),r}}f(_,"Query")},65138:(y,v,a)=>{a.d(v,{j:()=>i});var d=a(53205),_=a(74762),m=a(88665),r=a(66735),l=a(35582),s=a(21133),o=a(54412);function i(n,e){const p=document.querySelector("command-palette");let u="";e&&(e.group==="commands"||e.group==="global_commands")&&(u=e.title);const E={command_palette_session_id:p.sessionId,command_palette_scope:p.query.scope.type,command_palette_mode:p.getMode(),command_palette_title:u,command_palette_position:e==null?void 0:e.position,command_palette_score:e==null?void 0:e.score,command_palette_group:e==null?void 0:e.group,command_palette_item_type:e instanceof s.g?e==null?void 0:e.itemType:e==null?void 0:e.constructor.name};let O;n==="activate"?O=c(e):O=n,(0,o.q)(`command_palette_${O}`,E)}f(i,"sendTrackingEvent");function c(n){var e;return n instanceof d.i?"access_policy_executed":n instanceof _.d||n instanceof l.U||n instanceof m.Z?"command_executed":n instanceof r.s?((e=n.element)==null?void 0:e.newTabOpened)?"jump_to_new_tab":"jump_to":"activate"}f(c,"activateTrackingEventType")},54412:(y,v,a)=>{a.d(v,{Y:()=>o,q:()=>i});var d=a(88149),_=a(86058);const m="dimension_";let r;const l=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{const c=(0,d.n)("octolytics");delete c.baseContext,r=new _.R(c)}catch{}function s(c){const n=(0,d.n)("octolytics").baseContext||{};if(n){delete n.app_id,delete n.event_url,delete n.host;for(const u in n)u.startsWith(m)&&(n[u.replace(m,"")]=n[u],delete n[u])}const e=document.querySelector("meta[name=visitor-payload]");if(e){const u=JSON.parse(atob(e.content));Object.assign(n,u)}const p=new URLSearchParams(window.location.search);for(const[u,E]of p)l.includes(u.toLowerCase())&&(n[u]=E);return Object.assign(n,c)}f(s,"extendBaseContext");function o(c){r==null||r.sendPageView(s(c))}f(o,"sendPageView");function i(c,n){var e,p;const u=(p=(e=document.head)==null?void 0:e.querySelector('meta[name="current-catalog-service"]'))==null?void 0:p.content,E=u?{service:u}:{};for(const[O,M]of Object.entries(n))M!=null&&(E[O]=`${M}`);r==null||r.sendEvent(c||"unknown",s(E))}f(i,"sendEvent")},80758:(y,v,a)=>{a.d(v,{Q:()=>d});function d(m,r={}){if(m.match(/^https?:/))throw new Error("Can not make cross-origin requests from verifiedFetch");const l={...r.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(m,{...r,headers:l})}f(d,"verifiedFetch");function _(m,r){var l;const o={...(l=r==null?void 0:r.headers)!=null?l:{},Accept:"application/json","Content-Type":"application/json"},i=(r==null?void 0:r.body)?JSON.stringify(r.body):void 0;return d(m,{...r,body:i,headers:o})}f(_,"verifiedFetchJSON")}}]);})();

//# sourceMappingURL=app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-6639f3c91b00.js.map