import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import DatosEquipoComponent from './components/DatosEquipoComponent.vue';
import BusquedaJugadoresComponent from './components/BusquedaJugadoresComponent.vue';
import UploadComponent from './components/UploadComponent.vue';
import CreateJugadorComponent from './components/CreateJugadorComponent.vue';

const routes = [
    {path: "/", component: HomeComponent},
    {path: "/equipos/:idequipo", component: DatosEquipoComponent},
    {path: "/jugadores/:nombre", component: BusquedaJugadoresComponent},
    {path: "/upload", component: UploadComponent},
    {path: "/create", component: CreateJugadorComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;