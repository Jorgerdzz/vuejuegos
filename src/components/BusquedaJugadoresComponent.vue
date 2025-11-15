<template>
  <div v-if="jugadores.length>0" class="cards-container container py-4">
    <div
      v-for="jugador in jugadores"
      :key="jugador"
      class="card jugador-card shadow-sm rounded-4"
    >
      <img :src="jugador.imagen" class="card-img-top jugador-img" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ jugador.nombre }}</h5>
        <p class="card-text"><strong>Posición:</strong> {{ jugador.posicion }}</p>
        <p class="card-text"><strong>Nacimiento:</strong> {{ jugador.fechaNacimiento }}</p>
        <p class="card-text"><strong>País:</strong> {{ jugador.pais }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 style="color: red">No se ha encontrado ningun jugador por ese nombre</h1>
  </div>
</template>

<script>
import ServiceFutbol from '../services/ServiceFutbol';
const service = new ServiceFutbol();

export default {
  name: "BusquedaJugadoresComponent",
  data() {
    return {
      jugadores: []
    };
  },
  mounted() {
    this.busquedaJugadores();
  },
  methods:{
      busquedaJugadores(){
        let nombre = this.$route.params.nombre;
        service.getJugadoresNombre(nombre).then(response => {
          this.jugadores = response;
        });
    }
  },
  watch:{
    '$route.params.nombre'(nextVal, oldVal){
        if(nextVal != oldVal){
            this.busquedaJugadores();
        }
    }
  }
};
</script>

<style>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  animation: fadeIn 0.6s ease;
}

.jugador-card {
  border: none;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #ffffff;
  border-radius: 20px;
}

.jugador-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.jugador-img {
  height: 220px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.3rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
  color: #0d6efd;
}

.card-text {
  margin-bottom: 0.4rem;
  color: #555;
}

.btn-card {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.btn-card:hover {
  opacity: 0.85;
  color: white;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>