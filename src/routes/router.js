import { createWebHistory,createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import JobList from "@/views/JobList.vue";
import JobDetails from "@/views/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobList,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;