<template>
  <div class="upload-container container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="upload-card shadow-lg p-5 rounded-4">
          <div class="text-center mb-4">
            <div class="upload-icon mb-3">📁</div>
            <h1 class="upload-title fw-bold mb-2">Subir fichero</h1>
            <p class="upload-subtitle text-muted">
              Selecciona un archivo para subir al servidor
            </p>
          </div>

          <form v-on:submit.prevent="uploadFile()" class="upload-form">
            <div class="mb-4">
              <label class="form-label fw-semibold">Seleccionar archivo</label>
              <input
                type="file"
                class="form-control form-control-lg custom-file-input"
                @change="selectedFile($event)"
              />
              <small class="form-text text-muted mt-2 d-block">
                <span v-if="fichero.fileName">📄 {{ fichero.fileName }}</span>
                <span v-else>Ningún archivo seleccionado</span>
              </small>
            </div>

            <div class="d-grid">
              <button
                type="submit"
                class="btn btn-upload btn-lg shadow"
                :disabled="!fichero.fileName"
              >
                <span v-if="fichero.fileName">⬆️ Subir fichero</span>
                <span v-else>Selecciona un archivo primero</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceFichero from "../services/ServiceFichero";
import Swal from "sweetalert2";
const service = new ServiceFichero();

export default {
  name: "UploadComponent",
  data() {
    return {
      fichero: {
        fileName: "",
        fileContent: "",
      },
      file: null,
      base64string: "",
    };
  },
  methods: {
    selectedFile(event) {
      this.file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        const parts = result.split(",");
        if (parts.length === 2) {
          this.base64string = parts[1];
        } else {
          this.base64string = result;
        }
        this.fichero.fileName = this.file.name;
        this.fichero.fileContent = this.base64string;
      };
      reader.readAsDataURL(this.file);
    },
    uploadFile() {
      service.subirFichero(this.fichero).then(() => {
        Swal.fire({
          icon: "success",
          title: "Fichero subido correctamente",
          timer: 3000,
          timerProgressBar: true,
        });
      });
    },
  },
};
</script>

<style scoped>
/* Contenedor principal con animación */
.upload-container {
  animation: fadeIn 0.6s ease;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

/* Tarjeta principal */
.upload-card {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.upload-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
}

/* Icono de upload */
.upload-icon {
  font-size: 4rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Título */
.upload-title {
  font-size: 2.5rem;
  color: #0d6efd;
  letter-spacing: 0.5px;
}

.upload-subtitle {
  font-size: 1rem;
  color: #6c757d;
}

/* Input de archivo personalizado */
.custom-file-input {
  border: 2px dashed #0d6efd;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  background-color: #f8f9ff;
}

.custom-file-input:hover {
  border-color: #0056b3;
  background-color: #e7f1ff;
  cursor: pointer;
}

.custom-file-input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  background-color: white;
}

/* Botón de subir */
.btn-upload {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-upload:hover:not(:disabled) {
  background: linear-gradient(135deg, #0056b3, #520dc2);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
}

.btn-upload:active:not(:disabled) {
  transform: translateY(0);
}

.btn-upload:disabled {
  background: linear-gradient(135deg, #6c757d, #adb5bd);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Label del formulario */
.form-label {
  color: #333;
  font-size: 1.1rem;
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
  .upload-title {
    font-size: 2rem;
  }

  .upload-icon {
    font-size: 3rem;
  }

  .upload-card {
    padding: 2rem !important;
  }
}
</style>
