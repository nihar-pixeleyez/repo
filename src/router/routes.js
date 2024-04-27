// layoutType = 'vertical';

export default [

  {
    path: "/",
    name: "Index",
    meta: {
      title: "Dashboard",
    },
    component: () => import("../views/dashboard/index.vue"),
  },
  {
    path: "/index",
    name: "index",
    meta: {
      title: "Dashboard",
    },
    component: () => import("../views/dashboard/index.vue"),
  },
  {
    path: "/project-dashboard",
    name: "/project-dashboard",
    meta: {
      title: "Project Dashboard",
    },
    component: () => import("../views/dashboard/project-dashboard.vue"),
  },
  {
    path: "/ecommerce-dashboard",
    name: "/ecommerce-dashboard",
    meta: {
      title: "Ecommerce Dashboard",
    },
    component: () => import("../views/dashboard/ecommerce-dashboard.vue"),
  },
  //apps
  {
    path: "/email",
    name: "/email",
    meta: {
      title: "Email",
    },
    component: () => import("../views/apps/email/index.vue"),
  },
  {
    path: "/chat",
    name: "/chat",
    meta: {
      title: "Chat",
    },
    component: () => import("../views/apps/chat/index.vue"),
  },
  {
    path: "/contact",
    name: "/contact",
    meta: {
      title: "contact",
    },
    component: () => import("../views/apps/contact/index.vue"),
  },
  {
    path: "/invoice",
    name: "/invoice",
    meta: {
      title: "Invoice",
    },
    component: () => import("../views/apps/invoice/index.vue"),
  },
  {
    path: "/calendar",
    name: "/calendar",
    meta: {
      title: "Calender",
    },
    component: () => import("../views/apps/calender/index.vue"),
  },
  {
    path: "/tabs",
    name: "/tabs",
    meta: {
      title: "tabs",
    },
    component: () => import("../views/components/tabs/index.vue"),
  },
  {
    path: "/accordions",
    name: "/accordions",
    meta: {
      title: "accordions",
    },
    component: () => import("../views/components/accordions/index.vue"),
  },
  {
    path: "/modals",
    name: "/modals",
    meta: {
      title: "modals",
    },
    component: () => import("../views/components/modals/index.vue"),
  },
  {
    path: "/clipboard",
    name: "/clipboard",
    meta: {
      title: "clipboard",
    },
    component: () => import("../views/components/clipboard/index.vue"),
  },
  {
    path: "/notification",
    name: "/notification",
    meta: {
      title: "notification",
    },
    component: () => import("../views/components/notification/index.vue"),
  },
  {
    path: "/carousel",
    name: "/carousel",
    meta: {
      title: "carousel",
    },
    component: () => import("../views/components/carousel/index.vue"),
  },
  {
    path: "/pricing",
    name: "/pricing",
    meta: {
      title: "pricing",
    },
    component: () => import("../views/components/pricing/index.vue"),
  },
  {
    path: "/lightbox",
    name: "/lightbox",
    meta: {
      title: "lightbox",
    },
    component: () => import("../views/components/lightbox/index.vue"),
  },
  {
    path: "/countdown",
    name: "/countdown",
    meta: {
      title: "Countdown",
    },
    component: () => import("../views/components/countdown/index.vue"),
  },
  {
    path: "/counter",
    name: "/counter",
    meta: {
      title: "Counter",
    },
    component: () => import("../views/components/counter/index.vue"),
  },
  {
    path: "/alerts",
    name: "/alerts",
    meta: {
      title: "alerts",
    },
    component: () => import("../views/ui-element/alert/index.vue"),
  },
  {
    path: "/buttons",
    name: "/buttons",
    meta: {
      title: "buttons",
    },
    component: () => import("../views/ui-element/buttons/index.vue"),
  },
  {
    path: "/buttons-group",
    name: "/buttons-group",
    meta: {
      title: "buttons-group",
    },
    component: () => import("../views/ui-element/buttons-group/index.vue"),
  },
  {
    path: "/badge",
    name: "/badge",
    meta: {
      title: "badge",
    },
    component: () => import("../views/ui-element/badge/index.vue"),
  },
  {
    path: "/breadcrumb",
    name: "/breadcrumb",
    meta: {
      title: "breadcrumb",
    },
    component: () => import("../views/ui-element/breadcrumb/index.vue"),
  },
  {
    path: "/videos",
    name: "/videos",
    meta: {
      title: "videos",
    },
    component: () => import("../views/ui-element/videos/index.vue"),
  },
  {
    path: "/images",
    name: "/images",
    meta: {
      title: "images",
    },
    component: () => import("../views/ui-element/images/index.vue"),
  },
  {
    path: "/dropdowns",
    name: "/dropdowns",
    meta: {
      title: "dropdowns",
    },
    component: () => import("../views/ui-element/dropdowns/index.vue"),
  },
  {
    path: "/typography",
    name: "/typography",
    meta: {
      title: "typography",
    },
    component: () => import("../views/ui-element/typography/index.vue"),
  },
  {
    path: "/avatar",
    name: "/avatar",
    meta: {
      title: "avatar",
    },
    component: () => import("../views/ui-element/avatar/index.vue"),
  },
  {
    path: "/tooltips",
    name: "/tooltips",
    meta: {
      title: "tooltips",
    },
    component: () => import("../views/ui-element/tooltips/index.vue"),
  },
  {
    path: "/loader",
    name: "/loader",
    meta: {
      title: "loader",
    },
    component: () => import("../views/ui-element/loader/index.vue"),
  },
  {
    path: "/pagination",
    name: "/pagination",
    meta: {
      title: "pagination",
    },
    component: () => import("../views/ui-element/pagination/index.vue"),
  },
  {
    path: "/progress-bar",
    name: "/progress-bar",
    meta: {
      title: "progress-bar",
    },
    component: () => import("../views/ui-element/progress-bar/index.vue"),
  },
  {
    path: "/chart",
    name: "/chart",
    meta: {
      title: "chart",
    },
    component: () => import("../views/chart/index.vue"),
  },
  {
    path: "/icons",
    name: "/icons",
    meta: {
      title: "icons",
    },
    component: () => import("../views/icons/index.vue"),
  },
  {
    path: "/drag-and-drop",
    name: "/drag-and-drop",
    meta: {
      title: "drag-and-drop",
    },
    component: () => import("../views/drag&drop/index.vue"),
  },
  {
    path: "/forms-basic",
    name: "/forms-basic",
    meta: {
      title: "forms-basic",
    },
    component: () => import("../views/form/basic/index.vue"),
  },
  {
    path: "/input-group",
    name: "/input-group",
    meta: {
      title: "input-group",
    },
    component: () => import("../views/form/inputGroup/index.vue"),
  },
  {
    path: "/forms-editors",
    name: "/forms-editors",
    meta: {
      title: "forms-editors",
    },
    component: () => import("../views/form/formsEditors/index.vue"),
  },
  {
    path: "/validation",
    name: "/validation",
    meta: {
      title: "validation",
    },
    component: () => import("../views/form/validation/index.vue"),
  },
  {
    path: "/checkbox",
    name: "/checkbox",
    meta: {
      title: "checkbox",
    },
    component: () => import("../views/form/checkbox/index.vue"),
  },
  {
    path: "/radio",
    name: "/radio",
    meta: {
      title: "radio",
    },
    component: () => import("../views/form/radio/index.vue"),
  },
  {
    path: "/switches",
    name: "/switches",
    meta: {
      title: "switches",
    },
    component: () => import("../views/form/switches/index.vue"),
  },
  {
    path: "/tables-basic",
    name: "/tables-basic",
    meta: {
      title: "tables-basic",
    },
    component: () => import("../views/tables/basic/index.vue"),
  },
  {
    path: "/datatables-basic",
    name: "/datatables-basic",
    meta: {
      title: "datatables-basic",
    },
    component: () => import("../views/tables/datatable/index.vue"),
  },
  {
    path: "/tables-editable",
    name: "/tables-editable",
    meta: {
      title: "tables-editable",
    },
    component: () => import("../views/tables/editable/index.vue"),
  },
  {
    path: "/profile",
    name: "/profile",
    meta: {
      title: "profile",
    },
    component: () => import("../views/users/profile/index.vue"),
  },
  {
    path: "/settings",
    name: "/settings",
    meta: {
      title: "settings",
    },
    component: () => import("../views/users/settings/index.vue"),
  },
  {
    path: "/blank",
    name: "/blank",
    meta: {
      title: "blank",
    },
    component: () => import("../views/pages/blank/index.vue"),
  },
  {
    path: "/maintenance",
    name: "/maintenance",
    meta: {
      title: "maintenance",
    },
    component: () => import("../views/pages/maintenance/index.vue"),
  },
  {
    path: "/coming-soon",
    name: "/coming-soon",
    meta: {
      title: "coming-soon",
    },
    component: () => import("../views/pages/coming-soon/index.vue"),
  },
  {
    path: "/404",
    name: "/404",
    meta: {
      title: "404",
    },
    component: () => import("../views/pages/404/index.vue"),
  },
  {
    path: "/500",
    name: "/500",
    meta: {
      title: "500",
    },
    component: () => import("../views/pages/500/index.vue"),
  },
  {
    path: "/503",
    name: "/503",
    meta: {
      title: "503",
    },
    component: () => import("../views/pages/503/index.vue"),
  },
  {
    path: "/login",
    name: "/login",
    meta: {
      title: "login",
    },
    component: () => import("../views/authntication/login/index.vue"),
  },
  {
    path: "/signup",
    name: "/signup",
    meta: {
      title: "signup",
    },
    component: () => import("../views/authntication/signup/index.vue"),
  },
  {
    path: "/reset-pw",
    name: "/reset-pw",
    meta: {
      title: "reset-pw",
    },
    component: () => import("../views/authntication/resetpw/index.vue"),
  },
  
];