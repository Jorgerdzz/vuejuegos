<template>
  <div class="traspasos-container container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-11 col-lg-9">
        <div class="traspasos-card shadow-lg p-5 rounded-4">
          <div class="text-center mb-4">
            <div class="traspasos-icon mb-3">🔄</div>
            <h1 class="traspasos-title fw-bold mb-2">Mercado de fichajes</h1>
            <p class="traspasos-subtitle text-muted">
              Realiza el traspaso de un jugador a otro equipo
            </p>
          </div>

          <form v-on:submit.prevent="traspasarJugador()" class="traspasos-form">
            <div class="mb-4">
              <label class="form-label fw-semibold">
                <span class="label-icon">👤</span> Jugadores
              </label>
              <select
                v-model="idJugador"
                class="form-select form-select-lg custom-select"
                required
              >
                <option value="0" disabled selected>
                  Selecciona un jugador...
                </option>
                <option
                  v-for="jugador in jugadores"
                  :key="jugador"
                  :value="jugador.idJugador"
                >
                  {{ jugador.nombre }}
                </option>
              </select>
            </div>

            <div class="mb-4">
              <label class="form-label fw-semibold">
                <span class="label-icon">🏟️</span> Equipos
              </label>
              <select
                v-model="idEquipo"
                class="form-select form-select-lg custom-select"
                required
              >
                <option value="0" disabled selected>
                  Selecciona el equipo destino...
                </option>
                <option
                  v-for="equipo in equipos"
                  :key="equipo"
                  :value="equipo.idEquipo"
                >
                  {{ equipo.nombre }}
                </option>
              </select>
            </div>

            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-traspasar btn-lg shadow"
                :disabled="idJugador === 0 || idEquipo === 0"
              >
                <span v-if="idJugador !== 0 && idEquipo !== 0"
                  >🚀 Traspasar jugador</span
                >
                <span v-else>Completa los campos para continuar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ServiceFutbol from "../services/ServiceFutbol";
const service = new ServiceFutbol();

export default {
  name: "TraspasosComponent",
  data() {
    return {
      jugadores: [],
      equipos: [],
      idJugador: 0,
      idEquipo: 0,
    };
  },
  mounted() {
    this.loadJugadores();
    this.loadEquipos();
  },
  methods: {
    loadJugadores() {
      service.getJugadores().then((response) => {
        this.jugadores = response;
      });
    },
    loadEquipos() {
      service.getEquipos().then((response) => {
        this.equipos = response;
      });
    },
    traspasarJugador() {
      service.traspasarJugador(this.idJugador, this.idEquipo).then(() => {
        Swal.fire({
          icon: "success",
          title: "Jugador traspasado correctamente",
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          this.$router.push("/equipos/" + this.idEquipo);
        });
      });
    },
  },
};
</script>

<style scoped>
/* Contenedor principal con animación */
.traspasos-container {
  animation: fadeIn 0.6s ease;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

/* Tarjeta principal */
.traspasos-card {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.traspasos-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
}

/* Icono de traspasos */
.traspasos-icon {
  font-size: 4rem;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Título */
.traspasos-title {
  font-size: 2.5rem;
  color: #0d6efd;
  letter-spacing: 0.5px;
}

.traspasos-subtitle {
  font-size: 1rem;
  color: #6c757d;
}

/* Labels con iconos */
.form-label {
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.label-icon {
  font-size: 1.3rem;
}

/* Select personalizado */
.custom-select {
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  background-color: white;
  cursor: pointer;
  font-size: 1rem;
}

.custom-select:hover {
  border-color: #0d6efd;
  background-color: #f8f9ff;
}

.custom-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  background-color: #f8f9ff;
}

/* Estilo para las opciones del select */
.custom-select option {
  padding: 0.5rem;
}

.custom-select option:disabled {
  color: #999;
  font-style: italic;
}

/* Botón de traspasar */
.btn-traspasar {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

.btn-traspasar:hover:not(:disabled) {
  background: linear-gradient(135deg, #0056b3, #520dc2);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
  color: white;
}

.btn-traspasar:active:not(:disabled) {
  transform: translateY(0);
}

.btn-traspasar:disabled {
  background: linear-gradient(135deg, #6c757d, #adb5bd);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Animación de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .traspasos-title {
    font-size: 2rem;
  }

  .traspasos-icon {
    font-size: 3rem;
  }

  .traspasos-card {
    padding: 2rem !important;
  }

  .form-label {
    font-size: 1rem;
  }
}
</style>
