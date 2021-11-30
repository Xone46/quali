import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Intervention from '../views/Intervention.vue'
import Admin from '../views/Admin.vue'
import Create from '../views/Create.vue'
import Gerer from '../views/Gerer.vue'
import Modifier from '../views/Modifier.vue'
import Compte from '../views/Compte.vue'
import CreateIntervention from '../views/CreateIntervention.vue'
import ModifierIntervention from '../views/ModifierIntervention.vue'
import Equipements from '../views/Equipements.vue'
import CreateEquipements from '../views/CreateEquipements.vue'
import ModifierEquipement from '../views/ModifierEquipement.vue'
import Pdf from '../views/Pdf.vue'
import A from '../views/A.vue'
import B from '../views/B.vue'
import C from '../views/C.vue'
import D from '../views/D.vue'
import E from '../views/E.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a',
    name: 'A',
    component: A
  },
  {
    path: '/b',
    name: 'B',
    component: B
  },
  {
    path: '/c',
    name: 'C',
    component: C
  },
  {
    path: '/d',
    name: 'D',
    component: D
  },
  {
    path: '/e',
    name: 'E',
    component: E
  },
  {
    path: '/modifierequipement',
    name: 'modifierequipement',
    component: ModifierEquipement
  },
  {
    path: '/createequipements',
    name: 'CreateEquipements',
    component: CreateEquipements
  },
  {
    path: '/equipements',
    name: 'equipements',
    component: Equipements
  },
  {
    path: '/createintervention',
    name: 'CreateIntervention',
    component: CreateIntervention
  },
  {
    path: '/modifierintervention',
    name: 'ModifierIntervention',
    component: ModifierIntervention
  },
  {
    path: '/compte',
    name: 'Compte',
    component: Compte
  },
  {
    path: '/modifier',
    name: 'Modifier',
    component: Modifier
  },
  {
    path: '/gerer',
    name: 'Gerer',
    component: Gerer
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/intervention',
    name: 'Intervention',
    component: Intervention
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: Pdf
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
