<template>
  <nav class="navbar navbar-expand-lg custom-navbar shadow-sm py-3">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold logo-text" to="/">MiApp</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Equipos
            </router-link>
            <ul class="dropdown-menu">
              <li v-for="equipo in equipos" :key="equipo"><router-link class="dropdown-item" :to="'/equipos/' + equipo.idEquipo">{{equipo.nombre}}</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/upload">Subir fichero</router-link>
          </li>
        </ul>
        <form v-on:submit.prevent="buscarJugador()" class="d-flex" role="search">
          <input
            class="form-control me-2 search-input"
            type="search"
            placeholder="Buscar..."
            aria-label="Search"
            v-model="nombreJugador"
          />
          <button class="btn btn-search" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceFubtol from '../services/ServiceFutbol';
const service = new ServiceFubtol();

export default {
  name: "MenuComponent",
  data(){
    return{
        equipos: [],
        nombreJugador: ""
    }
  },
  mounted(){
    service.getEquipos().then(response=>{
        this.equipos = response
    })
  },
  methods:{
    buscarJugador(){
        this.$router.push("/jugadores/" + this.nombreJugador)
    }
  }
};
</script>

<style>
.custom-navbar {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border-radius: 0 0 16px 16px;
}

.logo-text {
  font-size: 1.4rem;
  color: #fff !important;
  letter-spacing: 0.5px;
}

.nav-link {
  color: #e6e6e6 !important;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffffff !important;
}

.dropdown-menu {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.search-input {
  border-radius: 12px;
  padding: 0.55rem 1rem;
  transition: box-shadow 0.3s ease;
}

.search-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.4);
}

.btn-search {
  background-color: #ffffff;
  color: #0d6efd;
  border-radius: 12px;
  font-weight: 600;
  padding: 0.55rem 1.2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  border: 2px solid #fff;
}

.btn-search:hover {
  background-color: transparent;
  color: #fff;
  border-color: #fff;
}
</style>
