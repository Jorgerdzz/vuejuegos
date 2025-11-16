<template>
  <div class="create-jugador-container container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="create-card shadow-lg p-5 rounded-4">
          <div class="text-center mb-4">
            <div class="create-icon mb-3">⚽</div>
            <h1 class="create-title fw-bold mb-2">Crear jugador</h1>
            <p class="create-subtitle text-muted">
              Completa el formulario para añadir un nuevo jugador
            </p>
          </div>

          <form v-on:submit.prevent="insertJugador()" class="create-form">
            <div class="row g-3">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-semibold">Nombre</label>
                  <input
                    type="text"
                    class="form-control form-control-lg custom-input"
                    v-model="jugador.nombre"
                    placeholder="Ej: Cristiano Ronaldo"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-semibold">Posición</label>
                  <input
                    type="text"
                    class="form-control form-control-lg custom-input"
                    v-model="jugador.posicion"
                    placeholder="Ej: Delantero"
                    required
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label fw-semibold">URL Imagen</label>
                  <input
                    type="text"
                    class="form-control form-control-lg custom-input"
                    v-model="jugador.imagen"
                    placeholder="https://ejemplo.com/imagen.jpg"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-semibold">Fecha nacimiento</label>
                  <input
                    type="text"
                    class="form-control form-control-lg custom-input"
                    v-model="jugador.fechaNacimiento"
                    placeholder="DD/MM/AAAA"
                    required
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label fw-semibold">País</label>
                  <input
                    type="text"
                    class="form-control form-control-lg custom-input"
                    v-model="jugador.pais"
                    placeholder="Ej: Portugal"
                    required
                  />
                </div>
              </div>

              <div class="col-12">
                <div class="mb-4">
                  <label class="form-label fw-semibold">Equipo</label>
                  <select
                    v-model="jugador.idEquipo"
                    class="form-select form-select-lg custom-select"
                    required
                  >
                    <option value="0" disabled selected>
                      Selecciona un equipo...
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
              </div>
            </div>

            <div class="d-grid">
              <button type="submit" class="btn btn-create btn-lg shadow">
                ✅ Insertar jugador
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceFutbol from "@/services/ServiceFutbol";
import Swal from "sweetalert2";
const service = new ServiceFutbol();

export default {
  name: "CreateJugadorComponent",
  data() {
    return {
      jugador: {
        nombre: "",
        posicion: "",
        imagen: "",
        fechaNacimiento: "",
        pais: "",
        idEquipo: 0,
      },
      equipos: [],
    };
  },
  mounted() {
    this.getEquipos();
  },
  methods: {
    getEquipos() {
      service.getEquipos().then((response) => {
        this.equipos = response;
      });
    },
    insertJugador() {
      service.insertJugador(this.jugador).then(() => {
        Swal.fire({
          icon: "success",
          title: "Jugador creado correctamente",
          timer: 3000,
          timerProgressBar: true,
        }).then(() => {
          this.$router.push("/equipos/" + this.jugador.idEquipo);
        });
      });
    },
  },
};
</script>

<style scoped>
/* Contenedor principal con animación */
.create-jugador-container {
  animation: fadeIn 0.6s ease;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

/* Tarjeta principal */
.create-card {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.create-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
}

/* Icono */
.create-icon {
  font-size: 4rem;
  animation: rotate 3s ease-in-out infinite;
}

@keyframes rotate {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
}

/* Título */
.create-title {
  font-size: 2.5rem;
  color: #0d6efd;
  letter-spacing: 0.5px;
}

.create-subtitle {
  font-size: 1rem;
  color: #6c757d;
}

/* Labels */
.form-label {
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* Inputs personalizados */
.custom-input {
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  background-color: white;
}

.custom-input:hover {
  border-color: #0d6efd;
}

.custom-input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  background-color: #f8f9ff;
}

/* Select personalizado */
.custom-select {
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  background-color: white;
  cursor: pointer;
}

.custom-select:hover {
  border-color: #0d6efd;
}

.custom-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  background-color: #f8f9ff;
}

/* Botón de crear */
.btn-create {
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

.btn-create:hover {
  background: linear-gradient(135deg, #0056b3, #520dc2);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
  color: white;
}

.btn-create:active {
  transform: translateY(0);
}

/* Espaciado en grid */
.row.g-3 {
  margin-bottom: 0.5rem;
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
  .create-title {
    font-size: 2rem;
  }

  .create-icon {
    font-size: 3rem;
  }

  .create-card {
    padding: 2rem !important;
  }
}
</style>
