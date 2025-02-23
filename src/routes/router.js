import { createWebHistory,createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import JobList from "@/views/JobList.vue";
import JobDetails from "@/views/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "Job Search",
    component: HomePage,
  },
  {
    path: "/jobs",
    name: "Jobs Result",
    component: JobList,
  },
  {
    path: "/jobs/:id",
    name: "Job Details",
    component: JobDetails,
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