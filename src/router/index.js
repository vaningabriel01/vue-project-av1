import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Sobre from '../views/SobreView.vue'
import Projetos from '../views/ProjetosView.vue'
import Post from '../views/PostView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/projetos', component: Projetos },
  { path: '/post/:id', component: Post },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
