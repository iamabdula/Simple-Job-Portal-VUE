import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobDetails from '../views/Jobs/JobDetails.vue'
import Page404 from '../views/Page404.vue'
import About from '../views/About.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component:Jobs,
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component:JobDetails,
    // props:true,
  },
  {
    //redirect
    path: '/all-jobs',
    redirect: '/jobs'
  },
  //404 page not found ROUTE
  {
    path:'/:catchAll(.*)',
    name:'Page404',
    component:Page404

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
