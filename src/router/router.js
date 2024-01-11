import BuscarPersona from "@/pages/buscar-persona.vue";
import CrearPersona from "@/pages/crear-persona.vue";
import EditarPersona from "@/pages/editar-persona.vue";
import Error404 from "@/pages/error404.vue";
import TodosPersona from "@/pages/todos-persona.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodosPersona
  },
  {
    path: '/personas/crear',
    name: 'crearPersona',
    component: CrearPersona
  },
  {
    path: '/personas',
    name: 'todos',
    component: TodosPersona
  },
  {
    path: '/personas/buscar',
    name: 'buscarPersona',
    props: true,
    component: BuscarPersona
  },
  {
    path: '/personas/editar/:idProp',
    name: 'editarPersona',
    props: true,
    component: EditarPersona
  },
  {
    path: '/error',
    name: 'error404',
    component: Error404
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
