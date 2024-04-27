import{_ as c,a as r}from"./Pagetitle.vue_vue_type_script_setup_true_lang-CggrqKzK.js";import{d,r as p,o as l,c as m,w as t,a as u,b as a,e as i,f as o,g as n}from"./index-DWdyvSte.js";const b=a("section",{class:"pb-5 mb-md-2",id:"collapse-basic"},[a("h2",{class:"h5 mb-3"},"Basic example"),a("div",{class:"card border-0 shadow-sm"},[a("div",{class:"card-header"},[a("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[a("li",{class:"nav-item"},[a("a",{class:"nav-link active",href:"#result1","data-bs-toggle":"tab",role:"tab","aria-controls":"result1","aria-selected":"true"},"Result")]),a("li",{class:"nav-item"},[a("a",{class:"nav-link",href:"#vue1","data-bs-toggle":"tab",role:"tab","aria-controls":"vue1","aria-selected":"false"},"Vue")])])]),a("div",{class:"card-body"},[a("div",{class:"tab-content"},[a("div",{class:"tab-pane fade show active",id:"result1",role:"tabpanel"},[a("a",{class:"btn btn-primary me-2 mb-3",href:"#collapseExample","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},"Link with href"),a("button",{class:"btn btn-primary mb-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},"Button with data-bs-target"),a("div",{class:"collapse",id:"collapseExample"},[a("div",{class:"card card-body"},"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.")])]),a("div",{class:"tab-pane fade",id:"vue1",role:"tabpanel"},[a("pre",{class:"line-numbers"},[a("code",null,`<!-- Link with href -->
<a href="#collapseExample" class="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>

<!-- Button with data-bs-target -->
<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-bs-target
</button>

<!-- Collapse -->
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
  </div>
</div`)])])])])])],-1),h=a("section",{class:"pb-5 mb-md-2",id:"collapse-multiple"},[a("h2",{class:"h5 mb-3"},"Multiple targets"),a("div",{class:"card border-0 shadow-sm"},[a("div",{class:"card-header"},[a("ul",{class:"nav nav-tabs card-header-tabs",role:"tablist"},[a("li",{class:"nav-item"},[a("a",{class:"nav-link active",href:"#result2","data-bs-toggle":"tab",role:"tab","aria-controls":"result2","aria-selected":"true"},"Result")]),a("li",{class:"nav-item"},[a("a",{class:"nav-link",href:"#vue2","data-bs-toggle":"tab",role:"tab","aria-controls":"vue2","aria-selected":"false"},"Vue")])])]),a("div",{class:"card-body"},[a("div",{class:"tab-content"},[a("div",{class:"tab-pane fade show active",id:"result2",role:"tabpanel"},[a("a",{class:"btn btn-primary me-2 mb-3",href:"#multiCollapseExample1","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1"},"Toggle first element"),a("button",{class:"btn btn-primary me-2 mb-3",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2"},"Toggle second element"),a("button",{class:"btn btn-primary mb-3",type:"button","data-bs-toggle":"collapse","data-bs-target":".multi-collapse","aria-expanded":"false","aria-controls":"multiCollapseExample1 multiCollapseExample2"},"Toggle both elements"),a("div",{class:"row"},[a("div",{class:"col-sm-6"},[a("div",{class:"collapse multi-collapse",id:"multiCollapseExample1"},[a("div",{class:"card card-body mb-2"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")])]),a("div",{class:"col-sm-6"},[a("div",{class:"collapse multi-collapse",id:"multiCollapseExample2"},[a("div",{class:"card card-body mb-2"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")])])])]),a("div",{class:"tab-pane fade",id:"vue2",role:"tabpanel"},[a("pre",{class:"line-numbers"},[a("code",null,`<!-- Toggle first element -->
<a href="#multiCollapseExample1" class="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
  Toggle first element
</a>

<!-- Toggle second element -->
<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
  Toggle second element
</button>

<!-- Toggle both elements -->
<button type="button" class="btn btn-primary" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
  Toggle both elements
</button>

<div class="row">
  <div class="col-sm-6">

    <!-- Collapse 1 -->
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body mb-2">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col-sm-6">

    <!-- Collapse 2 -->
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body mb-2">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div`)])])])])])],-1),v={class:"sticky-top pt-5"},g={class:"pt-5 mt-5"},f={class:"ps-4 border-start"},x=a("h3",{class:"h6"},"Jump to",-1),y={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#collapse-basic"},_={class:"nav-link py-1 px-0 fs-sm fw-normal",href:"#collapse-multiple"},T=d({__name:"Collapse",setup(E){const e={title:"Collapse",subtitle:"Toggle the visibility of content.",componentLink:"https://getbootstrap.com/docs/5.2/components/collapse/"};return(C,k)=>{const s=p("smooth-scroll");return l(),m(r,null,{"main-content":t(()=>[u(c,{title:e.title,subtitle:e.subtitle,componentLink:e.componentLink},null,8,["title","subtitle","componentLink"]),b,h]),"right-content":t(()=>[a("aside",v,[a("div",g,[a("div",f,[x,i((l(),o("a",y,[n("Basic example")])),[[s]]),i((l(),o("a",_,[n("Multiple targets")])),[[s]])])])])]),_:1})}}});export{T as default};
