import{_ as U,a as H}from"./Pagetitle.vue_vue_type_script_setup_true_lang-CggrqKzK.js";import{d as z,i as R,j as Y,k as I,r as J,o as b,c as W,w as A,a as E,b as e,e as p,u as O,f as u,g as v}from"./index-DWdyvSte.js";/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */var Z=Object.defineProperty,j=(o,a,l)=>a in o?Z(o,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[a]=l,x=(o,a,l)=>(j(o,typeof a!="symbol"?a+"":a,l),l);const P={"#":{pattern:/[0-9]/},"@":{pattern:/[a-zA-Z]/},"*":{pattern:/[a-zA-Z0-9]/}};class V{constructor(a={}){x(this,"opts",{}),x(this,"memo",new Map);const l={...a};if(l.tokens!=null){l.tokens=l.tokensReplace?{...l.tokens}:{...P,...l.tokens};for(const s of Object.values(l.tokens))typeof s.pattern=="string"&&(s.pattern=new RegExp(s.pattern))}else l.tokens=P;Array.isArray(l.mask)&&(l.mask.length>1?l.mask=[...l.mask].sort((s,t)=>s.length-t.length):l.mask=l.mask[0]??""),l.mask===""&&(l.mask=null),this.opts=l}masked(a){return this.process(a,this.findMask(a))}unmasked(a){return this.process(a,this.findMask(a),!1)}isEager(){return this.opts.eager===!0}isReversed(){return this.opts.reversed===!0}completed(a){const l=this.findMask(a);if(this.opts.mask==null||l==null)return!1;const s=this.process(a,l).length;return typeof this.opts.mask=="string"?s>=this.opts.mask.length:typeof this.opts.mask=="function"?s>=l.length:this.opts.mask.filter(t=>s>=t.length).length===this.opts.mask.length}findMask(a){const l=this.opts.mask;if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="function")return l(a);const s=this.process(a,l.slice(-1).pop()??"",!1);return l.find(t=>this.process(a,t,!1).length>=s.length)??""}escapeMask(a){const l=[],s=[];return a.split("").forEach((t,i)=>{t==="!"&&a[i-1]!=="!"?s.push(i-s.length):l.push(t)}),{mask:l.join(""),escaped:s}}process(a,l,s=!0){if(l==null)return a;const t=`value=${a},mask=${l},masked=${s?1:0}`;if(this.memo.has(t))return this.memo.get(t);const{mask:i,escaped:r}=this.escapeMask(l),n=[],c=this.opts.tokens!=null?this.opts.tokens:{},m=this.isReversed()?-1:1,y=this.isReversed()?"unshift":"push",k=this.isReversed()?0:i.length-1,N=this.isReversed()?()=>d>-1&&f>-1:()=>d<i.length&&f<a.length,q=g=>!this.isReversed()&&g<=k||this.isReversed()&&g>=k;let C,w=-1,d=this.isReversed()?i.length-1:0,f=this.isReversed()?a.length-1:0,L=!1;for(;N();){const g=i.charAt(d),h=c[g],_=(h==null?void 0:h.transform)!=null?h.transform(a.charAt(f)):a.charAt(f);if(!r.includes(d)&&h!=null?(_.match(h.pattern)!=null?(n[y](_),h.repeated?(w===-1?w=d:d===k&&d!==w&&(d=w-m),k===w&&(d-=m)):h.multiple&&(L=!0,d-=m),d+=m):h.multiple?L&&(d+=m,f-=m,L=!1):_===C?C=void 0:h.optional&&(d+=m,f-=m),f+=m):(s&&!this.isEager()&&n[y](g),_===g&&!this.isEager()?f+=m:C=g,this.isEager()||(d+=m)),this.isEager())for(;q(d)&&(c[i.charAt(d)]==null||r.includes(d));)s?n[y](i.charAt(d)):i.charAt(d)===a.charAt(f)&&(f+=m),d+=m}return this.memo.set(t,n.join("")),this.memo.get(t)}}const F=o=>JSON.parse(o.replaceAll("'",'"')),M=(o,a={})=>{const l={...a};return o.dataset.maska!=null&&o.dataset.maska!==""&&(l.mask=B(o.dataset.maska)),o.dataset.maskaEager!=null&&(l.eager=T(o.dataset.maskaEager)),o.dataset.maskaReversed!=null&&(l.reversed=T(o.dataset.maskaReversed)),o.dataset.maskaTokensReplace!=null&&(l.tokensReplace=T(o.dataset.maskaTokensReplace)),o.dataset.maskaTokens!=null&&(l.tokens=K(o.dataset.maskaTokens)),l},T=o=>o!==""?!!JSON.parse(o):!0,B=o=>o.startsWith("[")&&o.endsWith("]")?F(o):o,K=o=>{if(o.startsWith("{")&&o.endsWith("}"))return F(o);const a={};return o.split("|").forEach(l=>{const s=l.split(":");a[s[0]]={pattern:new RegExp(s[1]),optional:s[2]==="optional",multiple:s[2]==="multiple",repeated:s[2]==="repeated"}}),a};class ${constructor(a,l={}){x(this,"items",new Map),x(this,"beforeinputEvent",s=>{const t=s.target,i=this.items.get(t);i.isEager()&&"inputType"in s&&s.inputType.startsWith("delete")&&i.unmasked(t.value).length<=1&&this.setMaskedValue(t,"")}),x(this,"inputEvent",s=>{if(s instanceof CustomEvent&&s.type==="input"&&s.detail!=null&&typeof s.detail=="object"&&"masked"in s.detail)return;const t=s.target,i=this.items.get(t),r=t.value,n=t.selectionStart,c=t.selectionEnd;let m=r;if(i.isEager()){const y=i.masked(r),k=i.unmasked(r);k===""&&"data"in s&&s.data!=null?m=s.data:k!==i.unmasked(y)&&(m=k)}if(this.setMaskedValue(t,m),"inputType"in s&&(s.inputType.startsWith("delete")||n!=null&&n<r.length))try{t.setSelectionRange(n,c)}catch{}}),this.options=l,typeof a=="string"?this.init(Array.from(document.querySelectorAll(a)),this.getMaskOpts(l)):this.init("length"in a?Array.from(a):[a],this.getMaskOpts(l))}destroy(){for(const a of this.items.keys())a.removeEventListener("input",this.inputEvent),a.removeEventListener("beforeinput",this.beforeinputEvent);this.items.clear()}needUpdateOptions(a,l){const s=this.items.get(a),t=new V(M(a,this.getMaskOpts(l)));return JSON.stringify(s.opts)!==JSON.stringify(t.opts)}needUpdateValue(a){const l=a.dataset.maskaValue;return l==null&&a.value!==""||l!=null&&l!==a.value}getMaskOpts(a){const{onMaska:l,preProcess:s,postProcess:t,...i}=a;return i}init(a,l){for(const s of a){const t=new V(M(s,l));this.items.set(s,t),s.value!==""&&this.setMaskedValue(s,s.value),s.addEventListener("input",this.inputEvent),s.addEventListener("beforeinput",this.beforeinputEvent)}}setMaskedValue(a,l){const s=this.items.get(a);this.options.preProcess!=null&&(l=this.options.preProcess(l));const t=s.masked(l),i=s.unmasked(s.isEager()?t:l),r=s.completed(l),n={masked:t,unmasked:i,completed:r};l=t,this.options.postProcess!=null&&(l=this.options.postProcess(l)),a.value=l,a.dataset.maskaValue=l,this.options.onMaska!=null&&(Array.isArray(this.options.onMaska)?this.options.onMaska.forEach(c=>c(n)):this.options.onMaska(n)),a.dispatchEvent(new CustomEvent("maska",{detail:n})),a.dispatchEvent(new CustomEvent("input",{detail:n}))}}const D=new WeakMap,G=o=>{setTimeout(()=>{var a;((a=D.get(o))==null?void 0:a.needUpdateValue(o))===!0&&o.dispatchEvent(new CustomEvent("input"))})},S=(o,a)=>{const l=o instanceof HTMLInputElement?o:o.querySelector("input"),s={...a.arg};if(l==null||(l==null?void 0:l.type)==="file")return;G(l);const t=D.get(l);if(t!=null){if(!t.needUpdateOptions(l,s))return;t.destroy()}if(a.value!=null){const i=a.value,r=n=>{i.masked=n.masked,i.unmasked=n.unmasked,i.completed=n.completed};s.onMaska=s.onMaska==null?r:Array.isArray(s.onMaska)?[...s.onMaska,r]:[s.onMaska,r]}D.set(l,new $(l,s))},Q=e("section",{class:"pb-5 mb-md-2",id:"forms-types"},[e("h2",{class:"h5 mb-3"},"Supported input types"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result1","data-bs-toggle":"tab",role:"tab","aria-controls":"result1","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue1","data-bs-toggle":"tab",role:"tab","aria-controls":"vue1","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result1",role:"tabpanel"},[e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"text-input"},"Text"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"text",id:"text-input",value:"Artisanal kale"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"search-input"},"Search"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"search",id:"search-input",value:"How do I shoot web"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"email-input"},"Email"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"email",id:"email-input",value:"email@example.com"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"url-input"},"URL"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"url",id:"url-input",value:"https://getbootstrap.com"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"tel-input"},"Phone"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"tel",id:"tel-input",value:"1-(770)-334-2518"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"pass-input"},"Password"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"password",id:"pass-input",value:"mypasswordexample"})])]),e("div",{class:"mb-3 row"},[e("label",{class:"col-md-2 col-form-label",for:"textarea-input"},"Textarea"),e("div",{class:"col-md-10"},[e("textarea",{class:"form-control",id:"textarea-input",rows:"5"},"Hello World!")])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"select-input"},"Select"),e("div",{class:"col-md-10"},[e("select",{class:"form-select",id:"select-input"},[e("option",null,"Choose option..."),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"multiselect-input"},"Multiselect"),e("div",{class:"col-md-10"},[e("select",{class:"form-select",id:"multiselect-input",size:"3",multiple:""},[e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3"),e("option",null,"Option item 4"),e("option",null,"Option item 5"),e("option",null,"Option item 6")])])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"file-input"},"File"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"file",id:"file-input"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"number-input"},"Number"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",type:"number",id:"number-input",value:"37"})])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"datalist-input"},"Datalist"),e("div",{class:"col-md-10"},[e("input",{class:"form-control",list:"datalist-options",id:"datalist-input",placeholder:"Type to search..."}),e("datalist",{id:"datalist-options"},[e("option",{value:"San Francisco"}),e("option",{value:"New York"}),e("option",{value:"Seattle"}),e("option",{value:"Los Angeles"}),e("option",{value:"Chicago"})])])]),e("div",{class:"mb-3 row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"range-input"},"Range"),e("div",{class:"col-md-10"},[e("input",{class:"form-range",type:"range",id:"range-input"})])]),e("div",{class:"row align-items-center"},[e("label",{class:"col-md-2 col-form-label",for:"color-input"},"Color"),e("div",{class:"col-md-10"},[e("input",{class:"form-control form-control-color",type:"color",id:"color-input",value:"#5d3cf2"})])])]),e("div",{class:"tab-pane fade",id:"vue1",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Text input -->
                                    <div class="mb-3">
                                    <label for="text-input" class="form-label">Text</label>
                                    <input class="form-control" type="text" id="text-input" value="Artisanal kale">
                                    </div>

                                    <!-- Search input -->
                                    <div class="mb-3">
                                    <label for="search-input" class="form-label">Search</label>
                                    <input class="form-control" type="search" id="search-input" value="How do I shoot web">
                                    </div>

                                    <!-- Email input -->
                                    <div class="mb-3">
                                    <label for="email-input" class="form-label">Email</label>
                                    <input class="form-control" type="email" id="email-input" value="email@example.com">
                                    </div>

                                    <!-- URL Input -->
                                    <div class="mb-3">
                                    <label for="url-input" class="form-label">URL</label>
                                    <input class="form-control" type="url" id="url-input" value="https://getbootstrap.com">
                                    </div>

                                    <!-- Phone Input -->
                                    <div class="mb-3">
                                    <label for="tel-input" class="form-label">Phone</label>
                                    <input class="form-control" type="tel" id="tel-input" value="1-(770)-334-2518">
                                    </div>

                                    <!-- Password Input -->
                                    <div class="mb-3">
                                    <label for="pass-input" class="form-label">Password</label>
                                    <input class="form-control" type="password" id="pass-input" value="mypasswordexample">
                                    </div>

                                    <!-- Textarea -->
                                    <div class="mb-3">
                                    <label for="textarea-input" class="form-label">Textarea</label>
                                    <textarea class="form-control" id="textarea-input" rows="5">Hello World!</textarea>
                                    </div>

                                    <!-- Select -->
                                    <div class="mb-3">
                                    <label for="select-input" class="form-label">Select</label>
                                    <select class="form-select" id="select-input">
                                    <option>Choose option...</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select>
                                    </div>

                                    <!-- Multiselect -->
                                    <div class="mb-3">
                                    <label for="multiselect-input" class="form-label">Multiselect</label>
                                    <select class="form-select" id="multiselect-input" size="3" multiple>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    <option>Option item 4</option>
                                    <option>Option item 5</option>
                                    <option>Option item 6</option>
                                    </select>
                                    </div>

                                    <!-- File input -->
                                    <div class="mb-3">
                                    <label for="file-input" class="form-label">File</label>
                                    <input class="form-control" type="file" id="file-input">
                                    </div>

                                    <!-- Number input -->
                                    <div class="mb-3">
                                    <label for="number-input" class="form-label">Number</label>
                                    <input class="form-control" type="number" id="number-input" value="37">
                                    </div>

                                    <!-- Datalist -->
                                    <div class="mb-3">
                                    <label for="datalist-input" class="form-label">Datalist</label>
                                    <input class="form-control" list="datalist-options" id="datalist-input" placeholder="Type to search...">
                                    <datalist id="datalist-options">
                                    <option value="San Francisco">
                                    <option value="New York">
                                    <option value="Seattle">
                                    <option value="Los Angeles">
                                    <option value="Chicago">
                                    </datalist>
                                    </div>

                                    <!-- Range input -->
                                    <div class="mb-3">
                                    <label for="range-input" class="form-label">Range</label>
                                    <input class="form-control" type="range" id="range-input">
                                    </div>

                                    <!-- Color input -->
                                    <div class="mb-3">
                                    <label for="color-input" class="form-label">Color</label>
                                    <input class="form-control form-control-color" type="color" id="color-input" value="#5d3cf2">
                                    </div`)])])])])])],-1),X=e("section",{class:"pb-5 mb-md-2",id:"forms-floating-labels"},[e("h2",{class:"h5 mb-3"},"Floating labels"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result3","data-bs-toggle":"tab",role:"tab","aria-controls":"result3","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue3","data-bs-toggle":"tab",role:"tab","aria-controls":"vue3","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result3",role:"tabpanel"},[e("div",{class:"form-floating mb-3"},[e("input",{class:"form-control",id:"floating-input",type:"text",placeholder:"John"}),e("label",{for:"floating-input"},"Your name")]),e("div",{class:"form-floating"},[e("select",{class:"form-select",id:"floating-select"},[e("option",{selected:""},"Open this select menu"),e("option",{value:"1"},"One"),e("option",{value:"2"},"Two"),e("option",{value:"3"},"Three")]),e("label",{for:"floating-select"},"Choose option")])]),e("div",{class:"tab-pane fade",id:"vue3",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Floating label input -->
                                    <div class="form-floating mb-3">
                                    <input class="form-control" id="floating-input" type="text" placeholder="John">
                                    <label for="floating-input">Your name</label>
                                    </div>

                                    <!-- Floating label select -->
                                    <div class="form-floating mb-3">
                                    <select class="form-select" id="floating-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                    <label for="floating-select">Choose option</label>
                                    </div`)])])])])])],-1),ee={class:"pb-5 mb-md-2",id:"forms-password-toggle"},le=e("h2",{class:"h5 mb-3"},"Password visibility toggle",-1),ae={class:"card border-0 shadow-sm"},se=e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result4","data-bs-toggle":"tab",role:"tab","aria-controls":"result4","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue4","data-bs-toggle":"tab",role:"tab","aria-controls":"vue4","aria-selected":"false"},"Vue")])])],-1),oe={class:"card-body"},te={class:"tab-content"},ie={class:"tab-pane fade show active",id:"result4",role:"tabpanel"},ne={class:"mb-2",style:{"max-width":"25rem"}},ce=e("label",{class:"form-label",for:"pass-visibility"},"Password",-1),re={class:"password-toggle"},de=["type"],me=e("span",{class:"password-toggle-indicator"},null,-1),pe=e("div",{class:"tab-pane fade",id:"vue4",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Password visibility toggle -->
                                    <label class="form-label" for="pass-visibility"<Password>/label>
                                    <div class="password-toggle">
                                    <input class="form-control" :type="passType == true ? 'password' : 'text'" id="pass-visibility" value="hidden@password">
                                    <label class="password-toggle-btn" aria-label="Show/hide password">
                                    <input class="password-toggle-check" @click="togglePassword" type="checkbox"><span class="password-toggle-indicator"></span>
                                    </label>
                                    </div`)])],-1),be=e("section",{class:"pb-5 mb-md-2",id:"forms-checkbox"},[e("h2",{class:"h5 mb-3"},"Checkboxes"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result5","data-bs-toggle":"tab",role:"tab","aria-controls":"result5","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue5","data-bs-toggle":"tab",role:"tab","aria-controls":"vue5","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result5",role:"tabpanel"},[e("div",{class:"mb-3"},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-check-1",type:"checkbox"}),e("label",{class:"form-check-label",for:"form-check-1"},"Default checkbox")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-check-2",type:"checkbox",checked:""}),e("label",{class:"form-check-label",for:"form-check-2"},"Checked checkbox")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-check-3",type:"checkbox",disabled:""}),e("label",{class:"form-check-label",for:"form-check-3"},"Disabled checkbox")])]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-check-4",type:"checkbox"}),e("label",{class:"form-check-label",for:"form-check-4"},"Default checkbox")]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-check-5",type:"checkbox",checked:""}),e("label",{class:"form-check-label",for:"form-check-5"},"Checked checkbox")]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-check-6",type:"checkbox",disabled:""}),e("label",{class:"form-check-label",for:"form-check-6"},"Disabled checkbox")])]),e("div",{class:"tab-pane fade",id:"vue5",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Stacked checkboxes -->
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-check-1" type="checkbox">
                                    <label class="form-check-label" for="form-check-1">Default checkbox</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-check-2" type="checkbox" checked>
                                    <label class="form-check-label" for="form-check-2">Checked checkbox</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-check-3" type="checkbox" disabled>
                                    <label class="form-check-label" for="form-check-3">Disabled checkbox</label>
                                    </div>

                                    <!-- Inline checkboxes -->
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-check-4" type="checkbox">
                                    <label class="form-check-label" for="form-check-4">Default checkbox</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-check-5" type="checkbox" checked>
                                    <label class="form-check-label" for="form-check-5">Checked checkbox</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-check-6" type="checkbox" disabled>
                                    <label class="form-check-label" for="form-check-6">Disabled checkbox</label>
                                    </div`)])])])])])],-1),ue=e("section",{class:"pb-5 mb-md-2",id:"forms-radios"},[e("h2",{class:"h5 mb-3"},"Radios"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result6","data-bs-toggle":"tab",role:"tab","aria-controls":"result6","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue6","data-bs-toggle":"tab",role:"tab","aria-controls":"vue6","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result6",role:"tabpanel"},[e("div",{class:"mb-3"},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-radio-1",type:"radio",name:"radios-stacked"}),e("label",{class:"form-check-label",for:"form-radio-1"},"Default radio")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-radio-2",type:"radio",name:"radios-stacked",checked:""}),e("label",{class:"form-check-label",for:"form-radio-2"},"Checked radio")]),e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"form-radio-3",type:"radio",name:"radios-stacked",disabled:""}),e("label",{class:"form-check-label",for:"form-radio-3"},"Disabled radio")])]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-radio-4",type:"radio",name:"radios-inline"}),e("label",{class:"form-check-label",for:"form-radio-4"},"Default radio")]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-radio-5",type:"radio",name:"radios-inline",checked:""}),e("label",{class:"form-check-label",for:"form-radio-5"},"Checked radio")]),e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",id:"form-radio-6",type:"radio",name:"radios-inline",disabled:""}),e("label",{class:"form-check-label",for:"form-radio-6"},"Disabled radio")])]),e("div",{class:"tab-pane fade",id:"vue6",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Stacked radios -->
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-radio-1" type="radio" name="radios-stacked">
                                    <label class="form-check-label" for="form-radio-1">Default radio</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-radio-2" type="radio" name="radios-stacked" checked>
                                    <label class="form-check-label" for="form-radio-2">Checked radio</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" id="form-radio-3" type="radio" name="radios-stacked" disabled>
                                    <label class="form-check-label" for="form-radio-3">Disabled radio</label>
                                    </div>

                                    <!-- Inline radios -->
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-radio-4" type="radio" name="radios-inline">
                                    <label class="form-check-label" for="form-radio-4">Default radio</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-radio-5" type="radio" name="radios-inline" checked>
                                    <label class="form-check-label" for="form-radio-5">Checked radio</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" id="form-radio-6" type="radio" name="radios-inline" disabled>
                                    <label class="form-check-label" for="form-radio-6">Disabled radio</label>
                                    </div`)])])])])])],-1),ve=e("section",{class:"pb-5 mb-md-2",id:"forms-switch"},[e("h2",{class:"h5 mb-3"},"Switches"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result7","data-bs-toggle":"tab",role:"tab","aria-controls":"result7","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue7","data-bs-toggle":"tab",role:"tab","aria-controls":"vue7","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result7",role:"tabpanel"},[e("div",{class:"form-check form-switch mb-2"},[e("input",{class:"form-check-input",id:"form-switch-1",type:"checkbox"}),e("label",{class:"form-check-label",for:"form-switch-1"},"Default switch")]),e("div",{class:"form-check form-switch mb-2"},[e("input",{class:"form-check-input",id:"form-switch-2",type:"checkbox",checked:""}),e("label",{class:"form-check-label",for:"form-switch-2"},"Checked switch")]),e("div",{class:"form-check form-switch"},[e("input",{class:"form-check-input",id:"form-switch-3",type:"checkbox",disabled:""}),e("label",{class:"form-check-label",for:"form-switch-3"},"Disabled switch")])]),e("div",{class:"tab-pane fade",id:"vue7",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Default switch -->
                                    <div class="form-check form-switch">
                                    <input class="form-check-input" id="form-switch-1" type="checkbox">
                                    <label class="form-check-label" for="form-switch-1">Default switch</label>
                                    </div>

                                    <!-- Checked switch -->
                                    <div class="form-check form-switch">
                                    <input class="form-check-input" id="form-switch-2" type="checkbox" checked>
                                    <label class="form-check-label" for="form-switch-2">Checked switch</label>
                                    </div>

                                    <!-- Disabled switch -->
                                    <div class="form-check form-switch">
                                    <input class="form-check-input" id="form-switch-3" type="checkbox" disabled>
                                    <label class="form-check-label" for="form-switch-3">Disabled switch</label>
                                    </div`)])])])])])],-1),fe={class:"pb-5 mb-md-2",id:"forms-range-slider"},he=e("h2",{class:"h5 mb-3"},"Range slider (vue3-slider)",-1),ke={class:"card border-0 shadow-sm"},ge=e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result8","data-bs-toggle":"tab",role:"tab","aria-controls":"result8","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue8","data-bs-toggle":"tab",role:"tab","aria-controls":"vue8","aria-selected":"false"},"Vue")])])],-1),ye={class:"card-body"},we={class:"tab-content"},xe={class:"tab-pane fade show active",id:"result8",role:"tabpanel"},_e={class:"mb-4",style:{"max-width":"20rem"}},Ce=e("h6",{class:"fs-base"},"Vue 3 Slider",-1),Le=e("div",{class:"tab-pane fade",id:"vue8",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Vue 3 Slider -->
                                    <vue3-slider v-model="sliderValue" color="#fd5631" track-color="#efecf3" /`)])],-1),Oe=e("section",{class:"pb-5 mb-md-2",id:"forms-sizing"},[e("h2",{class:"h5 mb-3"},"Sizings"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result9","data-bs-toggle":"tab",role:"tab","aria-controls":"result9","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue9","data-bs-toggle":"tab",role:"tab","aria-controls":"vue9","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result9",role:"tabpanel"},[e("div",{class:"d-sm-flex"},[e("div",{class:"w-100 me-4"},[e("div",{class:"mb-3"},[e("label",{class:"form-label",for:"input-lg"},"Large input"),e("input",{class:"form-control form-control-lg",id:"input-lg",type:"text",placeholder:"Large input placeholder"})]),e("div",{class:"mb-3"},[e("label",{class:"form-label",for:"input-normal"},"Normal input"),e("input",{class:"form-control",id:"input-normal",type:"text",placeholder:"Normal input placeholder"})]),e("div",{class:"mb-3"},[e("label",{class:"form-label fs-sm",for:"input-sm"},"Small input"),e("input",{class:"form-control form-control-sm",id:"input-sm",type:"text",placeholder:"Small input placeholder"})])]),e("div",{class:"w-100"},[e("div",{class:"mb-3"},[e("label",{class:"form-label",for:"select-lg"},"Large select"),e("select",{class:"form-select form-select-lg",id:"select-lg"},[e("option",null,"Large select option"),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])]),e("div",{class:"mb-3"},[e("label",{class:"form-label",for:"select-normal"},"Normal select"),e("select",{class:"form-select",id:"select-normal"},[e("option",null,"Normal select option"),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])]),e("div",{class:"mb-3"},[e("label",{class:"form-label fs-sm",for:"select-sm"},"Small select"),e("select",{class:"form-select form-select-sm",id:"select-sm"},[e("option",null,"Small select option"),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])])])])]),e("div",{class:"tab-pane fade",id:"vue9",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Large input -->
                                    <div class="mb-3">
                                    <label class="form-label" for="input-lg">Large input</label>
                                    <input class="form-control form-control-lg" id="input-lg" type="text" placeholder="Large input placeholder">
                                    </div>

                                    <!-- Normal input -->
                                    <div class="mb-3">
                                    <label for="input-normal" class="form-label">Normal input</label>
                                    <input class="form-control" id="input-normal" type="text" placeholder="Normal input placeholder">
                                    </div>

                                    <!-- Small input -->
                                    <div class="mb-3">
                                    <label class="form-label fs-sm" for="input-sm">Small input</label>
                                    <input class="form-control form-control-sm" id="input-sm" type="text" placeholder="Small input placeholder">
                                    </div>

                                    <!-- Large select -->
                                    <div class="mb-3">
                                    <label class="form-label" for="select-lg">Large select</label>
                                    <select class="form-select form-select-lg" id="select-lg">
                                    <option>Large select option</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select>
                                    </div>

                                    <!-- Normal select -->
                                    <div class="mb-3">
                                    <label class="form-label" for="select-normal">Normal select</label>
                                    <select class="form-select" id="select-normal">
                                    <option>Normal select option</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select>
                                    </div>

                                    <!-- Small select -->
                                    <div class="mb-3">
                                    <label class="form-label fs-sm" for="select-sm">Small select</label>
                                    <select class="form-select form-select-sm" id="select-sm">
                                    <option>Small select option</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select>
                                    </div`)])])])])])],-1),Te=e("section",{class:"pb-5 mb-md-2",id:"forms-disabled"},[e("h2",{class:"h5 mb-3"},"Readonly & disabled"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result10","data-bs-toggle":"tab",role:"tab","aria-controls":"result10","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue10","data-bs-toggle":"tab",role:"tab","aria-controls":"vue10","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result10",role:"tabpanel"},[e("div",{class:"mb-3"},[e("input",{class:"form-control",id:"readonly-input",type:"text",placeholder:"Readonly input placeholder",readonly:""})]),e("div",{class:"mb-3"},[e("input",{class:"form-control",id:"disabled-input",type:"text",placeholder:"Disabled input placeholder",disabled:""})]),e("div",{class:"mb-3"},[e("select",{class:"form-select",id:"disabled-select",disabled:""},[e("option",null,"Disabled select option"),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])])]),e("div",{class:"tab-pane fade",id:"vue10",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Readonly input -->
                                    <input class="form-control" id="readonly-input" type="text" placeholder="Readonly input placeholder" readonly>

                                    <!-- Disabled input -->
                                    <input class="form-control" id="disabled-input" type="text" placeholder="Disabled input placeholder" disabled>

                                    <!-- Disabled select -->
                                    <select class="form-select" id="disabled-select" disabled>
                                    <option>Disabled select option</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select`)])])])])])],-1),Se=e("section",{class:"pb-5 mb-md-2",id:"forms-inline"},[e("h2",{class:"h5 mb-3"},"Inline form"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result11","data-bs-toggle":"tab",role:"tab","aria-controls":"result11","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue11","data-bs-toggle":"tab",role:"tab","aria-controls":"vue11","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result11",role:"tabpanel"},[e("div",{class:"row row-cols-sm-auto g-3 align-items-center"},[e("div",{class:"col-12"},[e("input",{class:"form-control",id:"inline-form-input",type:"text",placeholder:"Username"})]),e("div",{class:"col-12"},[e("select",{class:"form-select",id:"inline-form-select"},[e("option",{selected:""},"Choose..."),e("option",{value:"1"},"One"),e("option",{value:"2"},"Two"),e("option",{value:"3"},"Three")])]),e("div",{class:"col-12"},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",id:"inline-form-check",type:"checkbox"}),e("label",{class:"form-check-label",for:"inline-form-check"},"Remember me")])]),e("div",{class:"col-12"},[e("button",{class:"btn btn-primary",type:"submit"},"Submit")])])]),e("div",{class:"tab-pane fade",id:"vue11",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Inline form -->
                                    <form class="row row-cols-sm-auto g-3 align-items-center">
                                    <div class="col-12">
                                    <input class="form-control" id="inline-form-input" type="text" placeholder="Username">
                                    </div>
                                    <div class="col-12">
                                    <select class="form-select" id="inline-form-select">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                    </div>
                                    <div class="col-12">
                                    <div class="form-check">
                                    <input class="form-check-input" id="inline-form-check" type="checkbox">
                                    <label class="form-check-label" for="inline-form-check">Remember me</label>
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                    </form`)])])])])])],-1),De=e("section",{class:"pb-5 mb-md-2",id:"forms-help-text"},[e("h2",{class:"h5 mb-3"},"Help text"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result12","data-bs-toggle":"tab",role:"tab","aria-controls":"result12","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue12","data-bs-toggle":"tab",role:"tab","aria-controls":"vue12","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result12",role:"tabpanel"},[e("div",{class:"mb-3"},[e("label",{class:"form-label",for:"input-password"},"Password"),e("input",{class:"form-control",id:"input-password",type:"password",placeholder:"Your password here","aria-describedby":"passwordHelpBlock"}),e("div",{class:"form-text",id:"passwordHelpBlock"},"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.")])]),e("div",{class:"tab-pane fade",id:"vue12",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Help text -->
                                    <div class="mb-3">
                                    <label class="form-label" for="input-password">Password</label>
                                    <input class="form-control" id="input-password" type="password" placeholder="Your password here" aria-describedby="passwordHelpBlock">
                                    <div class="form-text" id="passwordHelpBlock">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                    </div>
                                    </div`)])])])])])],-1),Re=e("section",{class:"pb-5 mb-md-2",id:"forms-validation-text"},[e("h2",{class:"h5 mb-3"},"Validation: status text"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result13","data-bs-toggle":"tab",role:"tab","aria-controls":"result13","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue13","data-bs-toggle":"tab",role:"tab","aria-controls":"vue13","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result13",role:"tabpanel"},[e("form",{class:"needs-validation",novalidate:""},[e("div",{class:"row"},[e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationCustom01"},"First name"),e("input",{class:"form-control",type:"text",id:"validationCustom01",placeholder:"First name",value:"John",required:""}),e("div",{class:"valid-feedback"},"Looks good!")]),e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationCustom02"},"Last name"),e("input",{class:"form-control",type:"text",id:"validationCustom02",placeholder:"Last name",value:"Doe",required:""}),e("div",{class:"valid-feedback"},"Looks good!")]),e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationCustomUsername"},"Username"),e("input",{class:"form-control",type:"text",id:"validationCustomUsername",placeholder:"Username",required:""}),e("div",{class:"invalid-feedback"},"Please choose a username."),e("div",{class:"valid-feedback"},"Looks good!")])]),e("div",{class:"row"},[e("div",{class:"col-md-6 mb-3"},[e("label",{class:"form-label",for:"validationCustom03"},"City"),e("select",{class:"form-select",id:"validationCustom03",required:""},[e("option",{value:""},"Choose city..."),e("option",{value:"Dallas"},"Dallas"),e("option",{value:"Houston"},"Houston"),e("option",{value:"Los Angeles"},"Los Angeles"),e("option",{value:"Miami"},"Miami"),e("option",{value:"New York"},"New York")]),e("div",{class:"invalid-feedback"},"Please provide a valid city."),e("div",{class:"valid-feedback"},"Looks good!")]),e("div",{class:"col-md-3 mb-3"},[e("label",{class:"form-label",for:"validationCustom04"},"State"),e("select",{class:"form-select",id:"validationCustom04",required:""},[e("option",{value:""},"Choose state..."),e("option",{value:"Arizona"},"Arizona"),e("option",{value:"Colorado"},"Colorado"),e("option",{value:"Florida"},"Florida"),e("option",{value:"Indiana"},"Indiana"),e("option",{value:"Kentucky"},"Kentucky"),e("option",{value:"Texas"},"Texas")]),e("div",{class:"invalid-feedback"},"Please provide a valid state."),e("div",{class:"valid-feedback"},"Looks good!")]),e("div",{class:"col-md-3 mb-3"},[e("label",{class:"form-label",for:"validationCustom05"},"Zip"),e("input",{class:"form-control",type:"text",id:"validationCustom05",placeholder:"Zip",required:""}),e("div",{class:"invalid-feedback"},"Please provide a valid zip."),e("div",{class:"valid-feedback"},"Looks good!")])]),e("div",{class:"mb-3 py-2"},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",id:"invalidCheck01",required:""}),e("label",{class:"form-check-label",for:"invalidCheck01"},"Agree to terms and conditions"),e("div",{class:"invalid-feedback"},"You must agree before submitting.")])]),e("button",{class:"btn btn-primary",type:"submit"},"Submit Form")])]),e("div",{class:"tab-pane fade",id:"vue13",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Form validation: status text -->
                                    <form class="needs-validation" novalidate>
                                    <div class="row">
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationCustom01">First name</label>
                                    <input class="form-control" type="text" id="validationCustom01" placeholder="First name" value="John" required>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationCustom02">Last name</label>
                                    <input class="form-control" type="text" id="validationCustom02" placeholder="Last name" value="Doe" required>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationCustomUsername">Username</label>
                                    <input class="form-control" type="text" id="validationCustomUsername" placeholder="Username" required>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6 mb-3">
                                    <label class="form-label" for="validationCustom03">City</label>
                                    <select class="form-select" id="validationCustom03" required>
                                    <option value="">Choose city...</option>
                                    <option value="Dallas">Dallas</option>
                                    <option value="Houston">Houston</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Miami">Miami</option>
                                    <option value="New York">New York</option>
                                    </select>
                                    <div class="invalid-feedback">Please provide a valid city.</div>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                    <label class="form-label" for="validationCustom04">State</label>
                                    <select class="form-select" id="validationCustom04" required>
                                    <option value="">Choose state...</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Texas">Texas</option>
                                    </select>
                                    <div class="invalid-feedback">Please provide a valid state.</div>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                    <label class="form-label" for="validationCustom05">Zip</label>
                                    <input class="form-control" type="text" id="validationCustom05" placeholder="Zip" required>
                                    <div class="invalid-feedback">Please provide a valid zip.</div>
                                    <div class="valid-feedback">Looks good!</div>
                                    </div>
                                    </div>
                                    <div class="mb-3 py-2">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                                    <div class="invalid-feedback">You must agree before submitting.</div>
                                    </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit Form</button>
                                    </form`)])])])])])],-1),Ae=e("section",{class:"pb-5 mb-md-2",id:"forms-validation-tooltips"},[e("h2",{class:"h5 mb-3"},"Validation: status tooltips"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result14","data-bs-toggle":"tab",role:"tab","aria-controls":"result14","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue14","data-bs-toggle":"tab",role:"tab","aria-controls":"vue14","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane fade show active",id:"result14",role:"tabpanel"},[e("form",{class:"needs-validation",novalidate:""},[e("div",{class:"row"},[e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationTooltip01"},"First name"),e("input",{class:"form-control",type:"text",id:"validationTooltip01",placeholder:"First name",value:"John",required:""}),e("div",{class:"valid-tooltip"},"Looks good!")]),e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationTooltip02"},"Last name"),e("input",{class:"form-control",type:"text",id:"validationTooltip02",placeholder:"Last name",value:"Doe",required:""}),e("div",{class:"valid-tooltip"},"Looks good!")]),e("div",{class:"col-md-4 mb-3"},[e("label",{class:"form-label",for:"validationTooltipUsername"},"Username"),e("input",{class:"form-control",type:"text",id:"validationTooltipUsername",placeholder:"Username",required:""}),e("div",{class:"invalid-tooltip"},"Please choose a username."),e("div",{class:"valid-tooltip"},"Looks good!")])]),e("div",{class:"row"},[e("div",{class:"col-md-6 mb-3"},[e("label",{class:"form-label",for:"validationTooltip03"},"City"),e("select",{class:"form-select",id:"validationTooltip03",required:""},[e("option",{value:""},"Choose city..."),e("option",{value:"Dallas"},"Dallas"),e("option",{value:"Houston"},"Houston"),e("option",{value:"Los Angeles"},"Los Angeles"),e("option",{value:"Miami"},"Miami"),e("option",{value:"New York"},"New York")]),e("div",{class:"invalid-tooltip"},"Please provide a valid city."),e("div",{class:"valid-tooltip"},"Looks good!")]),e("div",{class:"col-md-3 mb-3"},[e("label",{class:"form-label",for:"validationTooltip04"},"State"),e("select",{class:"form-select",id:"validationTooltip04",required:""},[e("option",{value:""},"Choose state..."),e("option",{value:"Arizona"},"Arizona"),e("option",{value:"Colorado"},"Colorado"),e("option",{value:"Florida"},"Florida"),e("option",{value:"Indiana"},"Indiana"),e("option",{value:"Kentucky"},"Kentucky"),e("option",{value:"Texas"},"Texas")]),e("div",{class:"invalid-tooltip"},"Please provide a valid state."),e("div",{class:"valid-tooltip"},"Looks good!")]),e("div",{class:"col-md-3 mb-3"},[e("label",{class:"form-label",for:"validationTooltip05"},"Zip"),e("input",{class:"form-control",type:"text",id:"validationTooltip05",placeholder:"Zip",required:""}),e("div",{class:"invalid-tooltip"},"Please provide a valid zip."),e("div",{class:"valid-tooltip"},"Looks good!")])]),e("div",{class:"mb-3 py-2"},[e("div",{class:"form-check"},[e("input",{class:"form-check-input",type:"checkbox",id:"invalidCheck02",required:""}),e("label",{class:"form-check-label",for:"invalidCheck02"},"Agree to terms and conditions"),e("div",{class:"invalid-tooltip"},"You must agree before submitting.")])]),e("button",{class:"btn btn-primary",type:"submit"},"Submit Form")])]),e("div",{class:"tab-pane fade",id:"vue14",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Form validation: status tooltips -->
                                    <form class="needs-validation" novalidate>
                                    <div class="row">
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationTooltip01">First name</label>
                                    <input class="form-control" type="text" id="validationTooltip01" placeholder="First name" value="John" required>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationTooltip02">Last name</label>
                                    <input class="form-control" type="text" id="validationTooltip02" placeholder="Last name" value="Doe" required>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                    <label class="form-label" for="validationTooltipUsername">Username</label>
                                    <input class="form-control" type="text" id="validationTooltipUsername" placeholder="Username" required>
                                    <div class="invalid-tooltip">Please choose a username.</div>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-md-6 mb-3">
                                    <label class="form-label" for="validationTooltip03">City</label>
                                    <select class="form-select" id="validationTooltip03" required>
                                    <option value="">Choose city...</option>
                                    <option value="Dallas">Dallas</option>
                                    <option value="Houston">Houston</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Miami">Miami</option>
                                    <option value="New York">New York</option>
                                    </select>
                                    <div class="invalid-tooltip">Please provide a valid city.</div>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                    <label class="form-label" for="validationTooltip04">State</label>
                                    <select class="form-select" id="validationTooltip04" required>
                                    <option value="">Choose state...</option>
                                    <option value="Arizona">Arizona</option>
                                    <option value="Colorado">Colorado</option>
                                    <option value="Florida">Florida</option>
                                    <option value="Indiana">Indiana</option>
                                    <option value="Kentucky">Kentucky</option>
                                    <option value="Texas">Texas</option>
                                    </select>
                                    <div class="invalid-tooltip">Please provide a valid state.</div>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                    <label class="form-label" for="validationTooltip05">Zip</label>
                                    <input class="form-control" type="text" id="validationTooltip05" placeholder="Zip" required>
                                    <div class="invalid-tooltip">Please provide a valid zip.</div>
                                    <div class="valid-tooltip">Looks good!</div>
                                    </div>
                                    </div>
                                    <div class="mb-3 py-2">
                                    <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                                    <div class="invalid-tooltip">You must agree before submitting.</div>
                                    </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit Form</button>
                                    </form`)])])])])])],-1),Ee={class:"pb-5 mb-md-2",id:"forms-input-format"},Pe=e("h2",{class:"h5 mb-3"},"Format input text content",-1),Ve={class:"card border-0 shadow-sm"},Me=e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result15","data-bs-toggle":"tab",role:"tab","aria-controls":"result15","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue15","data-bs-toggle":"tab",role:"tab","aria-controls":"vue15","aria-selected":"false"},"Vue")])])],-1),Fe={class:"card-body"},Ne={class:"tab-content"},qe={class:"tab-pane fade show active",id:"result15",role:"tabpanel"},Ue={style:{"max-width":"25rem"}},He={class:"mb-3"},ze=e("label",{class:"form-label",for:"format-card-number"},"Card number",-1),Ye={class:"form-control","data-maska":"#### #### #### ####",placeholder:"0000 0000 0000 0000"},Ie={class:"mb-3"},Je=e("label",{class:"form-label",for:"format-card-cvc"},"Card CVC",-1),We={class:"form-control","data-maska":"###",placeholder:"000"},Ze={class:"mb-3"},je=e("label",{class:"form-label",for:"format-custom"},"Custom format",-1),Be={class:"form-control","data-maska":"##-###-####",placeholder:"00-000-0000"},Ke=e("div",{class:"tab-pane fade",id:"vue15",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Format: Credit card number -->
                                    <div class="mb-3">
                                    <label class="form-label" for="format-card-number">Card number</label>
                                    <input class="form-control" v-maska data-maska="#### #### #### ####" placeholder="0000 0000 0000 0000">
                                    </div>

                                    <!-- Format: Credit card CVC -->
                                    <div class="mb-3">
                                    <label class="form-label" for="format-card-cvc">Card CVC</label>
                                    <input class="form-control" v-maska data-maska="###" placeholder="000">
                                    </div>

                                    <!-- Format: Custom -->
                                    <div class="mb-3">
                                    <label class="form-label" for="format-custom">Custom format</label>
                                    <input class="form-control" v-maska data-maska="##-###-####" placeholder="00-000-0000">
                                    </div`)])],-1),$e=e("section",{class:"pb-5 mb-md-2",id:"forms-light"},[e("h2",{class:"h5 mb-3"},"Light version"),e("div",{class:"card border-0 shadow-sm"},[e("div",{class:"card-header"},[e("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[e("li",{class:"nav-item"},[e("a",{class:"nav-link active",href:"#result16","data-bs-toggle":"tab",role:"tab","aria-controls":"result16","aria-selected":"true"},"Result")]),e("li",{class:"nav-item"},[e("a",{class:"nav-link",href:"#vue16","data-bs-toggle":"tab",role:"tab","aria-controls":"vue16","aria-selected":"false"},"Vue")])])]),e("div",{class:"card-body"},[e("div",{class:"tab-content"},[e("div",{class:"tab-pane m-n3 p-3 bg-dark fade show active",id:"result16",role:"tabpanel"},[e("div",{class:"d-sm-flex"},[e("div",{class:"w-100 me-4"},[e("div",{class:"mb-3"},[e("label",{class:"form-label text-light",for:"text-input-light"},"Light input"),e("input",{class:"form-control form-control-light",id:"text-input-light",type:"text",value:"Artisanal kale"})]),e("div",{class:"mb-3"},[e("label",{class:"form-label text-light",for:"select-input-light"},"Light select"),e("select",{class:"form-select form-select-light",id:"select-input-light"},[e("option",null,"Choose option..."),e("option",null,"Option item 1"),e("option",null,"Option item 2"),e("option",null,"Option item 3")])]),e("div",{class:"mb-3"},[e("label",{class:"form-label text-light",for:"pass-visibility-light"},"Password"),e("div",{class:"password-toggle"},[e("input",{class:"form-control form-control-light",type:"password",id:"pass-visibility-light",value:"hidden@password"}),e("label",{class:"password-toggle-btn","aria-label":"Show/hide password"},[e("input",{class:"password-toggle-check",type:"checkbox"}),e("span",{class:"password-toggle-indicator"})])])]),e("div",null,[e("label",{class:"form-label text-light",for:"textarea-input-light"}," Light textarea"),e("textarea",{class:"form-control form-control-light",id:"textarea-input-light",rows:"5"},"Hello World!")])]),e("div",{class:"w-100"},[e("div",{class:"mt-4 mb-3"},[e("div",{class:"form-check form-check-light mb-1"},[e("input",{class:"form-check-input",id:"form-check-light-1",type:"checkbox"}),e("label",{class:"form-check-label",for:"form-check-light-1"},"Light checkbox")]),e("div",{class:"form-check form-check-light mb-1"},[e("input",{class:"form-check-input",id:"form-check-light-2",type:"checkbox",checked:""}),e("label",{class:"form-check-label",for:"form-check-light-2"},"Checked checkbox")]),e("div",{class:"form-check form-check-light"},[e("input",{class:"form-check-input",id:"form-check-light-3",type:"checkbox",disabled:""}),e("label",{class:"form-check-label",for:"form-check-light-3"},"Disabled checkbox")])]),e("div",{class:"mb-3"},[e("div",{class:"form-check form-check-light mb-1"},[e("input",{class:"form-check-input",id:"form-radio-light-1",type:"radio",name:"radios-light-stacked"}),e("label",{class:"form-check-label",for:"form-radio-light-1"},"Light radio")]),e("div",{class:"form-check form-check-light mb-1"},[e("input",{class:"form-check-input",id:"form-radio-light-2",type:"radio",name:"radios-light-stacked",checked:""}),e("label",{class:"form-check-label",for:"form-radio-light-2"},"Checked radio")]),e("div",{class:"form-check form-check-light"},[e("input",{class:"form-check-input",id:"form-radio-light-3",type:"radio",name:"radios-light-stacked",disabled:""}),e("label",{class:"form-check-label",for:"form-radio-light-3"},"Disabled radio")])]),e("div",null,[e("div",{class:"form-check form-switch form-switch-light mb-2"},[e("input",{class:"form-check-input",id:"form-switch-lite-1",type:"checkbox"}),e("label",{class:"form-check-label",for:"form-switch-lite-1"},"Light switch")]),e("div",{class:"form-check form-switch form-switch-light mb-2"},[e("input",{class:"form-check-input",id:"form-switch-lite-2",type:"checkbox",checked:""}),e("label",{class:"form-check-label",for:"form-switch-lite-2"},"Checked switch")]),e("div",{class:"form-check form-switch form-switch-light"},[e("input",{class:"form-check-input",id:"form-switch-lite-3",type:"checkbox",disabled:""}),e("label",{class:"form-check-label",for:"form-switch-lite-3"},"Disabled switch")])])])])]),e("div",{class:"tab-pane fade",id:"vue16",role:"tabpanel"},[e("pre",{class:"line-numbers"},[e("code",null,`<!-- Light input -->
                                    <label class="form-label text-light" for="text-input-light">Light input</label>
                                    <input class="form-control form-control-light" id="text-input-light" type="text" value="Artisanal kale">

                                    <!-- Light select -->
                                    <label class="form-label text-light" for="select-input-light">Light select</label>
                                    <select class="form-select form-select-light" id="select-input-light">
                                    <option>Choose option...</option>
                                    <option>Option item 1</option>
                                    <option>Option item 2</option>
                                    <option>Option item 3</option>
                                    </select>

                                    <!-- Light password visibility toggle -->
                                    <label class="form-label" for="pass-visibility">Password</label>
                                    <div class="password-toggle">
                                    <input class="form-control form-control-light" type="password" id="pass-visibility" value="hidden@password">
                                    <label class="password-toggle-btn" aria-label="Show/hide password">
                                    <input class="password-toggle-check" type="checkbox">
                                    <span class="password-toggle-indicator"></span>
                                    </label>
                                    </div>

                                    <!-- Light textarea -->
                                    <label class="form-label text-light" for="textarea-input-light"> Light textarea</label>
                                    <textarea class="form-control form-control-light" id="textarea-input-light" rows="5">Hello World!</textarea>

                                    <!-- Light checkbox -->
                                    <div class="form-check form-check-light">
                                    <input class="form-check-input" id="form-check-light-1" type="checkbox">
                                    <label class="form-check-label" for="form-check-light-1">Default checkbox</label>
                                    </div>

                                    <!-- Light radio -->
                                    <div class="form-check form-check-light">
                                    <input class="form-check-input" id="form-radio-light-1" type="radio" name="radios-light-stacked">
                                    <label class="form-check-label" for="form-radio-light-1">Light radio</label>
                                    </div>

                                    <!-- Light switch -->
                                    <div class="form-check form-switch form-switch-light">
                                    <input class="form-check-input" id="form-switch-lite-1" type="checkbox">
                                    <label class="form-check-label" for="form-switch-lite-1">Light switch</label>
                                    </div`)])])])])])],-1),Ge={class:"sticky-top pt-5"},Qe={class:"pt-5 mt-5"},Xe={class:"ps-4 border-start"},el=e("h3",{class:"h6"},"Jump to",-1),ll={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-types"},al={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-floating-labels"},sl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-password-toggle"},ol={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-checkbox"},tl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-radios"},il={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-switch"},nl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-range-slider"},cl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-sizing"},rl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-disabled"},dl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-inline"},ml={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-help-text"},pl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-validation-text"},bl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-validation-tooltips"},ul={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-input-format"},vl={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#forms-light"},kl=z({__name:"Forms",setup(o){const a=R(50),l={title:"Forms",subtitle:"Form control styles, layout options, and custom components.",componentLink:"https://getbootstrap.com/docs/5.2/forms/overview/"},s=R(!0),t=()=>{s.value=!s.value};return Y(()=>{Array.from(document.getElementsByClassName("needs-validation")).forEach(r=>{r.addEventListener("submit",n=>{r.checkValidity()||(n.preventDefault(),n.stopPropagation()),r.classList.add("was-validated")},!1)})}),(i,r)=>{const n=I("vue3-slider"),c=J("smooth-scroll");return b(),W(H,null,{"main-content":A(()=>[E(U,{title:l.title,subtitle:l.subtitle,componentLink:l.componentLink},null,8,["title","subtitle","componentLink"]),Q,X,e("section",ee,[le,e("div",ae,[se,e("div",oe,[e("div",te,[e("div",ie,[e("div",ne,[ce,e("div",re,[e("input",{class:"form-control",type:s.value==!0?"password":"text",id:"pass-visibility",value:"hidden@password"},null,8,de),e("label",{class:"password-toggle-btn","aria-label":"Show/hide password"},[e("input",{class:"password-toggle-check",onClick:t,type:"checkbox"}),me])])])]),pe])])])]),be,ue,ve,e("section",fe,[he,e("div",ke,[ge,e("div",ye,[e("div",we,[e("div",xe,[e("div",_e,[Ce,E(n,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=m=>a.value=m),color:"#fd5631","track-color":"#efecf3"},null,8,["modelValue"])])]),Le])])])]),Oe,Te,Se,De,Re,Ae,e("section",Ee,[Pe,e("div",Ve,[Me,e("div",Fe,[e("div",Ne,[e("div",qe,[e("div",Ue,[e("div",He,[ze,p(e("input",Ye,null,512),[[O(S)]])]),e("div",Ie,[Je,p(e("input",We,null,512),[[O(S)]])]),e("div",Ze,[je,p(e("input",Be,null,512),[[O(S)]])])])]),Ke])])])]),$e]),"right-content":A(()=>[e("aside",Ge,[e("div",Qe,[e("div",Xe,[el,p((b(),u("a",ll,[v("Supported input types")])),[[c]]),p((b(),u("a",al,[v("Floating labels")])),[[c]]),p((b(),u("a",sl,[v("Password visibility toggle")])),[[c]]),p((b(),u("a",ol,[v("Checkboxes")])),[[c]]),p((b(),u("a",tl,[v("Radios")])),[[c]]),p((b(),u("a",il,[v("Switches")])),[[c]]),p((b(),u("a",nl,[v("Range slider")])),[[c]]),p((b(),u("a",cl,[v("Sizing")])),[[c]]),p((b(),u("a",rl,[v("Readonly & disabled")])),[[c]]),p((b(),u("a",dl,[v("Inline form")])),[[c]]),p((b(),u("a",ml,[v("Help text")])),[[c]]),p((b(),u("a",pl,[v("Validation: status text")])),[[c]]),p((b(),u("a",bl,[v("Validation: status tooltips")])),[[c]]),p((b(),u("a",ul,[v("Format input text content")])),[[c]]),p((b(),u("a",vl,[v("Light version")])),[[c]])])])])]),_:1})}}});export{kl as default};
