import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import ProjectOverview from "./pages/ProjectOverview.vue";

export default [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: Projects,
      },
      {
        path: "/project/:id",
        component: ProjectOverview,
      },
    ],
  },
];
