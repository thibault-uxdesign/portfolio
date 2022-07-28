import { createRouter, createWebHistory } from 'vue-router'

import accueil from '../views/accueil.vue'
import contact from '../views/contact.vue'
import projets from '../views/projets.vue'
import quisuisje from '../views/quisuisje.vue'
import neumorphism from '../views/neumorphism.vue'
import bulle from '../views/bulle.vue'
import medicalib from '../views/medicalib.vue'

const routes = [
  { path: '/accueil', name: 'accueil', component: accueil },

  { path: '/contact', name: 'Contact', component: contact },

  { path: '/projets', name: 'Projets', component: projets },

  { path: '/qui-suis-je', name: 'Qui suis-je', component: quisuisje },

  { path: '/neumorphism', name: 'Neumorphism', component: neumorphism },

  { path: '/bulle', name: 'Bulle', component: bulle },

  { path: '/medicalib', name: 'Medicalib', component: medicalib },

  { path: '/', redirect: '/accueil' }
]



const router = createRouter({ history: createWebHistory(), routes })

export default router
