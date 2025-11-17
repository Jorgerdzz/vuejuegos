<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center text-lg-start">
            <div class="hero-content">
              <h1 class="hero-title display-3 fw-bold mb-4">
                Bienvenido a <span class="brand-highlight">FutbolApp</span>
              </h1>
              <p class="hero-subtitle lead mb-4">
                Gestiona equipos, jugadores y traspasos de forma sencilla y
                profesional. Tu plataforma completa para el mundo del fútbol.
              </p>
              <div
                class="hero-buttons d-flex gap-3 justify-content-center justify-content-lg-start"
              >
                <router-link
                  to="/create"
                  class="btn btn-hero-primary btn-lg shadow"
                >
                  ⚽ Añadir Jugador
                </router-link>
                <router-link
                  to="/fichajes"
                  class="btn btn-hero-secondary btn-lg shadow"
                >
                  🔄 Ver Fichajes
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-container">
              <div class="hero-ball">⚽</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title fw-bold">Funcionalidades Principales</h2>
          <p class="section-subtitle text-muted">
            Todo lo que necesitas en un solo lugar
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <router-link to="/create" class="feature-card-link">
              <div class="feature-card shadow-sm rounded-4 p-4 h-100">
                <div class="feature-icon mb-3">👤</div>
                <h3 class="feature-title h5 fw-bold mb-2">Crear Jugadores</h3>
                <p class="feature-text text-muted">
                  Añade nuevos jugadores con toda su información
                </p>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-3">
            <router-link to="/fichajes" class="feature-card-link">
              <div class="feature-card shadow-sm rounded-4 p-4 h-100">
                <div class="feature-icon mb-3">🔄</div>
                <h3 class="feature-title h5 fw-bold mb-2">Traspasos</h3>
                <p class="feature-text text-muted">
                  Gestiona el mercado de fichajes entre equipos
                </p>
              </div>
            </router-link>
          </div>

          <div class="col-md-6 col-lg-3">
            <div class="feature-card shadow-sm rounded-4 p-4 h-100">
              <div class="feature-icon mb-3">🏆</div>
              <h3 class="feature-title h5 fw-bold mb-2">Ver Equipos</h3>
              <p class="feature-text text-muted">
                Explora la información de todos los equipos
              </p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3">
            <router-link to="/upload" class="feature-card-link">
              <div class="feature-card shadow-sm rounded-4 p-4 h-100">
                <div class="feature-icon mb-3">📁</div>
                <h3 class="feature-title h5 fw-bold mb-2">Subir Archivos</h3>
                <p class="feature-text text-muted">
                  Carga y gestiona tus documentos
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-5">
      <div class="container">
        <div class="stats-card shadow-lg rounded-4 p-5">
          <div class="row text-center">
            <div class="col-md-4 mb-4 mb-md-0">
              <div class="stat-item">
                <div class="stat-icon mb-2">⚽</div>
                <h3 class="stat-number display-4 fw-bold mb-1">500+</h3>
                <p class="stat-label text-muted">Jugadores</p>
              </div>
            </div>
            <div class="col-md-4 mb-4 mb-md-0">
              <div class="stat-item">
                <div class="stat-icon mb-2">🏆</div>
                <h3 class="stat-number display-4 fw-bold mb-1">20+</h3>
                <p class="stat-label text-muted">Equipos</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="stat-item">
                <div class="stat-icon mb-2">🔄</div>
                <h3 class="stat-number display-4 fw-bold mb-1">1000+</h3>
                <p class="stat-label text-muted">Traspasos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
/* Contenedor principal */
.home-container {
  animation: fadeIn 0.8s ease;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  min-height: 70vh;
  display: flex;
  align-items: center;
  border-radius: 0 0 40px 40px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: cover;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 2;
  animation: slideInLeft 0.8s ease;
}

.hero-title {
  font-size: 3.5rem;
  line-height: 1.2;
}

.brand-highlight {
  background: linear-gradient(45deg, #ffffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.95;
}

/* Hero Buttons */
.btn-hero-primary {
  background: white;
  color: #0d6efd;
  border: none;
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.btn-hero-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  color: #0056b3;
  background: #f8f9fa;
}

.btn-hero-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  padding: 0.8rem 2rem;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.btn-hero-secondary:hover {
  background: white;
  color: #0d6efd;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* Hero Image */
.hero-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.hero-ball {
  font-size: 15rem;
  animation: bounce 3s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* Features Section */
.features-section {
  background: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  color: #0d6efd;
}

.section-subtitle {
  font-size: 1.2rem;
}

/* Feature Cards */
.feature-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.feature-card {
  background: white;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(13, 110, 253, 0.2) !important;
  border-color: #0d6efd;
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  color: #0d6efd;
  margin-bottom: 0.5rem;
}

.feature-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  background: white;
}

.stats-card {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
}

.stat-icon {
  font-size: 3rem;
}

.stat-number {
  color: white;
  font-size: 3.5rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-ball {
    font-size: 10rem;
  }

  .hero-image-container {
    height: 300px;
    margin-top: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>
