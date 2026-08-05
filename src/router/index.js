import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;