import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import DatosEquipoComponent from './components/DatosEquipoComponent.vue';
import BusquedaJugadoresComponent from './components/BusquedaJugadoresComponent.vue';

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/equipos/:idequipo", component: DatosEquipoComponent},
    {path: "/jugadores/:nombre", component: BusquedaJugadoresComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;