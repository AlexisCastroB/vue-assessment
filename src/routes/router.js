import { createWebHistory,createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import JobList from "@/views/JobList.vue";
import JobDetails from "@/views/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Job Search",
    component: HomePage,
  },
  {
    path: "/jobs",
    name: "Job Results",
    component: JobList,
  },
  {
    path: "/jobs/:id",
    name: "Job Details",
    component: JobDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "Page Not Found",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
})

export default router;