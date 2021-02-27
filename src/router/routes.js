const routes = [
  /* {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }, */
  { path: "/login", component: () => import("pages/Login.vue") },
  { path: "/register", component: () => import("pages/Register.vue") },
  { path: "/sex-tall", component: () => import("pages/Sex-tall.vue") },
  { path: "/birthday", component: () => import("pages/Birthday.vue") },
  { path: "/weight", component: () => import("pages/Weight.vue") },
  { path: "/", component: () => import("pages/Main.vue") },
  { path: "/my", component: () => import("pages/My.vue") },
  { path: "/select", component: () => import("pages/Select.vue") },
  { path: "/food-list", component: () => import("pages/Food-list.vue") },
  { path: "/jump", component: () => import("pages/Jump.vue") },
  { path: "/diary", component: () => import("pages/Diary.vue") },
  { path: "/food-recode", component: () => import("pages/Food-recode.vue") },
  { path: "/setting", component: () => import("pages/setting.vue") },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
