import { createRouter, createWebHistory } from 'vue-router'

import accueil from '../views/accueil.vue'
import contact from '../views/contact.vue'
import projets from '../views/projets.vue'
import quisuisje from '../views/quisuisje.vue'
import neumorphism from '../views/neumorphism.vue'
import bulle from '../views/bulle.vue'
import medicalib from '../views/medicalib.vue'

const routes = [
  { path: '/portfolio/accueil', name: 'accueil', component: accueil },

  { path: '/portfolio/contact', name: 'Contact', component: contact },

  { path: '/portfolio/projets', name: 'Projets', component: projets },

  { path: '/portfolio/qui-suis-je', name: 'Qui suis-je', component: quisuisje },

  { path: '/portfolio/neumorphism', name: 'Neumorphism', component: neumorphism },

  { path: '/portfolio/bulle', name: 'Bulle', component: bulle },

  { path: '/portfolio/medicalib', name: 'Medicalib', component: medicalib },

  { path: '/portfolio/', redirect: '/portfolio/accueil' },

]

const router = createRouter({ history: createWebHistory(), routes })

export default router
