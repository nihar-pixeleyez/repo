import{_ as r,a as p}from"./Pagetitle.vue_vue_type_script_setup_true_lang-CggrqKzK.js";import{d as c,r as d,o as n,c as u,w as i,a as m,b as t,e as o,f as a,g as e}from"./index-DWdyvSte.js";const b=t("section",{class:"pb-5 mb-md-2",id:"ig-addon-multiple"},[t("h2",{class:"h5 mb-3"},"Multiple inputs"),t("div",{class:"card border-0 shadow-sm"},[t("div",{class:"card-header"},[t("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[t("li",{class:"nav-item"},[t("a",{class:"nav-link active",href:"#result4","data-bs-toggle":"tab",role:"tab","aria-controls":"result4","aria-selected":"true"},"Result")]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#vue4","data-bs-toggle":"tab",role:"tab","aria-controls":"vue4","aria-selected":"false"},"Vue")])])]),t("div",{class:"card-body"},[t("div",{class:"tab-content"},[t("div",{class:"tab-pane fade show active",id:"result4",role:"tabpanel"},[t("div",{class:"input-group mb-3"},[t("span",{class:"input-group-text fw-bold text-dark"},"Full name"),t("input",{class:"form-control",type:"text",placeholder:"First name"}),t("input",{class:"form-control",type:"text",placeholder:"Last name"})]),t("div",{class:"input-group"},[t("input",{class:"form-control",type:"time",value:"07:45"}),t("input",{class:"form-control",type:"time",value:"09:00"}),t("span",{class:"input-group-text"},[t("i",{class:"fi-clock"})])])]),t("div",{class:"tab-pane fade",id:"vue4",role:"tabpanel"},[t("pre",{class:"line-numbers"},[t("code",{class:"lang-html"},`<!-- Multiple inputs (addon on the left) -->
<div class="input-group">
<span class="input-group-text fw-bold text-dark">Full name</span>
<input class="form-control" type="text" placeholder="First name">
<input class="form-control" type="text" placeholder="Last name">
</div>

<!-- Multiple inputs (addon on the right) -->
<div class="input-group">
<input class="form-control" type="time" value="07:45">
<input class="form-control" type="time" value="09:00">
<span class="input-group-text">
<i class="fi-clock"></i>
</span>
</div>`)])])])])])],-1),h=t("section",{class:"pb-5 mb-md-2",id:"ig-addon-button"},[t("h2",{class:"h5 mb-3"},"Button addons"),t("div",{class:"card border-0 shadow-sm"},[t("div",{class:"card-header"},[t("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[t("li",{class:"nav-item"},[t("a",{class:"nav-link active",href:"#result5","data-bs-toggle":"tab",role:"tab","aria-controls":"result5","aria-selected":"true"},"Result")]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#vue5","data-bs-toggle":"tab",role:"tab","aria-controls":"vue5","aria-selected":"false"},"Vue")])])]),t("div",{class:"card-body"},[t("div",{class:"tab-content"},[t("div",{class:"tab-pane fade show active",id:"result5",role:"tabpanel"},[t("div",{class:"input-group mb-3"},[t("button",{class:"btn btn-primary",type:"button"},"Button"),t("input",{class:"form-control",type:"text",placeholder:"Button on the left"})]),t("div",{class:"input-group mb-3"},[t("input",{class:"form-control",type:"text",placeholder:"Button on the right"}),t("button",{class:"btn btn-primary",type:"button"},"Button")]),t("div",{class:"input-group mb-3"},[t("button",{class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown"},"Dropdown"),t("div",{class:"dropdown-menu my-1"},[t("a",{class:"dropdown-item",href:"#"},"Action"),t("a",{class:"dropdown-item",href:"#"},"Another action"),t("a",{class:"dropdown-item",href:"#"},"Something else here")]),t("input",{class:"form-control",type:"text",placeholder:"Dropdown on the left"})]),t("div",{class:"input-group mb-3"},[t("input",{class:"form-control",type:"text",placeholder:"Dropdown on the right"}),t("button",{class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown"},"Dropdown"),t("div",{class:"dropdown-menu dropdown-menu-end my-1"},[t("a",{class:"dropdown-item",href:"#"},"Action"),t("a",{class:"dropdown-item",href:"#"},"Another action"),t("a",{class:"dropdown-item",href:"#"},"Something else here")])]),t("div",{class:"input-group"},[t("input",{class:"form-control",type:"text",placeholder:"Links on the right"}),t("div",{class:"input-group-text p-0"},[t("a",{class:"d-block text-body px-3 py-2",href:"#"},[t("i",{class:"fi-edit mt-n1"})])]),t("div",{class:"input-group-text p-0"},[t("a",{class:"d-block text-success px-3 py-2",href:"#"},[t("i",{class:"fi-check mt-n1"})])]),t("div",{class:"input-group-text p-0"},[t("a",{class:"d-block text-danger px-3 py-2",href:"#"},[t("i",{class:"fi-trash mt-n1"})])])])]),t("div",{class:"tab-pane fade",id:"vue5",role:"tabpanel"},[t("pre",{class:"line-numbers"},[t("code",{class:"lang-html"},`<!-- Button addon on the left -->
<div class="input-group">
<button class="btn btn-primary" type="button">Button</button>
<input class="form-control" type="text" placeholder="Button on the left">
</div>

<!-- Button addon on the right -->
<div class="input-group">
<input class="form-control" type="text" placeholder="Button on the right">
<button class="btn btn-primary" type="button">Button</button>
</div>

<!-- Dropdown addon on the left -->
<div class="input-group">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
<div class="dropdown-menu my-1">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
<input class="form-control" type="text" placeholder="Dropdown on the right">
</div>

<!-- Dropdown addon on the right -->
<div class="input-group">
<input class="form-control" type="text" placeholder="Dropdown on the right">
<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">Dropdown</button>
<div class="dropdown-menu dropdown-menu-end my-1">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>

<!-- Multiple icon link addons -->
<div class="input-group">
<input class="form-control" type="text" placeholder="Icon links on the right">
<div class="input-group-text p-0">
<a class="d-block text-body px-3 py-2" href="#">
<i class="fi-edit mt-n1"></i>
</a>
</div>
<div class="input-group-text p-0">
<a class="d-block text-success px-3 py-2" href="#">
<i class="fi-check mt-n1"></i>
</a>
</div>
<div class="input-group-text p-0">
<a class="d-block text-danger px-3 py-2" href="#">
<i class="fi-trash mt-n1"></i>
</a>
</div>
</div>`)])])])])])],-1),v=t("section",{class:"pb-5 mb-md-2",id:"ig-sizing"},[t("h2",{class:"h4 mb-3"},"Sizing"),t("div",{class:"card border-0 shadow-sm"},[t("div",{class:"card-header"},[t("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[t("li",{class:"nav-item"},[t("a",{class:"nav-link active",href:"#result6","data-bs-toggle":"tab",role:"tab","aria-controls":"result6","aria-selected":"true"},"Result")]),t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#vue6","data-bs-toggle":"tab",role:"tab","aria-controls":"vue6","aria-selected":"false"},"Vue")])])]),t("div",{class:"card-body"},[t("div",{class:"tab-content"},[t("div",{class:"tab-pane fade show active",id:"result6",role:"tabpanel"},[t("div",{class:"d-md-flex"},[t("div",{class:"w-100 me-md-3 mb-md-0 mb-3"},[t("div",{class:"input-group input-group-lg mb-3"},[t("span",{class:"input-group-text"},[t("i",{class:"fi-lock"})]),t("input",{class:"form-control",type:"password",placeholder:"Password"})]),t("div",{class:"input-group mb-3"},[t("span",{class:"input-group-text"},[t("i",{class:"fi-lock"})]),t("input",{class:"form-control",type:"password",placeholder:"Password"})]),t("div",{class:"input-group input-group-sm"},[t("span",{class:"input-group-text"},[t("i",{class:"fi-lock"})]),t("input",{class:"form-control",type:"password",placeholder:"Password"})])]),t("div",{class:"w-100"},[t("div",{class:"input-group input-group-lg mb-3"},[t("select",{class:"form-select"},[t("option",null,"Choose option"),t("option",null,"Option item 1"),t("option",null,"Option item 2"),t("option",null,"Option item 3")]),t("button",{class:"btn btn-primary",type:"button"},"Submit")]),t("div",{class:"input-group mb-3"},[t("select",{class:"form-select"},[t("option",null,"Choose option"),t("option",null,"Option item 1"),t("option",null,"Option item 2"),t("option",null,"Option item 3")]),t("button",{class:"btn btn-primary",type:"button"},"Submit")]),t("div",{class:"input-group input-group-sm"},[t("select",{class:"form-select"},[t("option",null,"Choose option"),t("option",null,"Option item 1"),t("option",null,"Option item 2"),t("option",null,"Option item 3")]),t("button",{class:"btn btn-primary",type:"button"},"Submit")])])])]),t("div",{class:"tab-pane fade",id:"vue6",role:"tabpanel"},[t("pre",{class:"line-numbers"},[t("code",{class:"lang-html"},`<!-- Input group large -->
<div class="input-group input-group-lg">
...
</div>

<!-- Input group normal -->
<div class="input-group">
...
</div>

<!-- Input group small -->
<div class="input-group input-group-sm">
...
</div>`)])])])])])],-1),g={class:"sticky-top pt-5"},f={class:"pt-5 mt-5"},y={class:"ps-4 border-start"},w=t("h3",{class:"h6"},"Jump to",-1),x={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#ig-addon-position"},_={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#ig-addon-types"},k={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#ig-addon-multiple"},B={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#ig-addon-button"},D={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#ig-sizing"},V=c({__name:"InputGroup",setup(A){const l={title:"Input group",subtitle:"Extend form controls by adding text, buttons, etc. on either side.",componentLink:"https://getbootstrap.com/docs/5.2/forms/input-group/"};return(O,S)=>{const s=d("smooth-scroll");return n(),u(p,null,{"main-content":i(()=>[m(r,{title:l.title,subtitle:l.subtitle,componentLink:l.componentLink},null,8,["title","subtitle","componentLink"]),b,h,v]),"right-content":i(()=>[t("aside",g,[t("div",f,[t("div",y,[w,o((n(),a("a",x,[e("Addon position")])),[[s]]),o((n(),a("a",_,[e("Different addon types")])),[[s]]),o((n(),a("a",k,[e("Multiple inputs")])),[[s]]),o((n(),a("a",B,[e("Button addons")])),[[s]]),o((n(),a("a",D,[e("Sizing")])),[[s]])])])])]),_:1})}}});export{V as default};
