<template>
  <div class="equipo-container container py-4">

    <div class="row mb-5">
      <div class="col-12">
        <div class="equipo-header-card shadow p-5 rounded-4 text-center">
          <img :src="equipo.imagen" class="equipo-header-img mb-4" :alt="equipo.nombre + ' logo'" /> 
          <h1 class="equipo-header-nombre fw-bolder mb-3">{{ equipo.nombre }}</h1>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <p class="equipo-header-info">
                🏆 <strong>Champions:</strong> {{ equipo.champions }}
              </p>
              <p class="equipo-header-descripcion lead fst-italic mt-3">
                {{ equipo.descripcion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h2 class="text-center fw-bold mb-4 border-bottom pb-2">Plantilla de Jugadores</h2>
        <div class="jugadores-grid">
          <div
            v-for="jugador in jugadores"
            :key="jugador.nombre"
            class="card jugador-card shadow-sm rounded-4"
          >
            <img :src="jugador.imagen" class="card-img-top jugador-img" :alt="jugador.nombre" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ jugador.nombre }}</h5>
              <p class="card-text small"># {{ jugador.posicion }}</p>
              <p class="card-text">Nacimiento: {{ jugador.fechaNacimiento }}</p>
              <p class="card-text">País: {{ jugador.pais }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ServiceFutbol from '../services/ServiceFutbol';
const service = new ServiceFutbol();

export default {
  name: "DatosEquipoComponent",
  data() {
    return {
      equipo: {},
      jugadores: []
    };
  },
  mounted() {
    this.getDatosEquipo();
  },
  methods:{
    getDatosEquipo(){
        service.getDatosEquipo(this.$route.params.idequipo).then(response => {
            this.equipo = response[0];
            this.jugadores = response[1];
        });
    }
  }, 
  watch:{
    '$route.params.idequipo'(nextVal, oldVal){
        if(nextVal != oldVal){
            this.getDatosEquipo();
        }
    }
  }
};
</script>

<style>
/* ------------------------------------------- */
/* ESTILOS GLOBALES Y DE CABECERA */
/* ------------------------------------------- */

/* Contenedor general */
.equipo-container {
  animation: fadeIn 0.6s ease;
}

/* Tarjeta de Cabecera del Equipo */
.equipo-header-card {
  background: linear-gradient(135deg, #001f3f, #0074d9); 
  color: white;
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.equipo-header-img {
  width: 180px; 
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid white; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.equipo-header-nombre {
  font-size: 3rem;
  letter-spacing: 1.5px;
}

.equipo-header-info {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

.equipo-header-descripcion {
  opacity: 0.95;
  font-size: 1.1rem;
}

/* ------------------------------------------- */
/* ESTILOS DE JUGADORES (CON FONDO OSCURO) */
/* ------------------------------------------- */

.jugadores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 1.5rem;
  padding: 1rem 0;
}

.jugador-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  /* CAMBIO CLAVE: Fondo oscuro para coincidir con la cabecera */
  background-color: #001f3f; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25); 
}

.jugador-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4); 
  border: 1px solid #007bff; 
}

.jugador-img {
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.jugador-card:hover .jugador-img {
    transform: scale(1.03);
}

.card-body {
  padding: 1rem 1.25rem;
  text-align: center;
}

.card-title {
  /* Texto en blanco para fondo oscuro */
  font-size: 1.25rem;
  font-weight: 700 !important;
  color: white; 
  margin-bottom: 0.4rem;
}

.card-text {
  /* Texto gris claro para contraste */
  font-size: 0.95rem;
  color: #cccccc; 
  margin-bottom: 0.3rem;
}

.card-text.small {
  /* Posición destacada en azul claro */
  font-weight: 600;
  color: #74c7ff; 
  margin-bottom: 0.6rem;
}

/* Animación suave */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>