import React from "react";
import {
  Stethoscope,
  Activity,
  Users,
  BookOpen,
  Award,
  Microscope,
  TestTube,
  Heart,
} from "lucide-react";
import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-root">

      {/* sección principal, presentación */}
      <section className="hero">
        <div className="hero-inner">

          {/* texto de bienvenida */}
          <div className="hero-text">
            <h1 className="hero-title">Dr. Omar Esteban Valencia Ledezma</h1>
            <p className="hero-sub">
              Científico mexicano, líder en investigación aplicada en salud y
              biotecnología — Integración clínica, investigación y formación.
            </p>
          </div>

          {/* tarjeta del perfil */}
          <div className="hero-card">
            <div className="hero-card-row">
              <div className="stat">
                <span className="stat-num">18+</span>
                <span className="stat-label">Años</span>
              </div>
              <div className="stat">
                <span className="stat-num">40+</span>
                <span className="stat-label">Publicaciones</span>
              </div>
            </div>

            {/* avatar y meta info */}
            <div className="hero-profile">
              <div className="avatar">
                <img
                  src="https://via.placeholder.com/160x160.png?text=Dr+Omar"
                  alt="Dr. Omar"
                />
              </div>
              <div className="profile-meta">
                <div className="meta-line">
                  <Stethoscope className="meta-icon" />
                  <span>Doctor en Ciencias Biológicas y de la Salud (UAM)</span>
                </div>
                <div className="meta-line">
                  <Activity className="meta-icon" />
                  <span>Líder en INTEGRADORA MEDICA GASA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* sección de biografía y tarjetas */}
      <section className="bio section-surface">
        <div className="bio-inner">

          <div className="bio-text">
            <h2>Trayectoria Profesional</h2>
            <p>
              Doctor en Ciencias Biológicas y de la Salud (UAM) con más de 18
              años combinando investigación, docencia y desarrollo tecnológico.
              Actualmente lidera proyectos multicéntricos, validación de métodos y
              formación de talento en ciencia aplicada.
            </p>
          </div>

          {/* tarjetas de logros */}
          <div className="cards">
            <article className="card">
              <div className="card-icon">
                <Microscope />
              </div>
              <h3>Investigación Científica</h3>
              <p>Metodologías avanzadas en biología molecular y diagnóstico.</p>
            </article>

            <article className="card">
              <div className="card-icon">
                <TestTube />
              </div>
              <h3>Innovación Tecnológica</h3>
              <p>Desarrollo de reactivos, validación y digitalización en salud.</p>
            </article>

            <article className="card">
              <div className="card-icon">
                <Users />
              </div>
              <h3>Formación Académica</h3>
              <p>Dirección de tesis y programas de posgrado con enfoque translacional.</p>
            </article>

            <article className="card">
              <div className="card-icon">
                <BookOpen />
              </div>
              <h3>Publicaciones</h3>
              <p>40+ artículos en micología, farmacología y salud pública.</p>
            </article>

            <article className="card">
              <div className="card-icon">
                <Award />
              </div>
              <h3>Reconocimientos</h3>
              <p>Premios nacionales e internacionales por excelencia académica.</p>
            </article>
          </div>
        </div>
      </section>

      {/* líneas científicas */}
      <section id="lines" className="lines section-surface-alt">
        <h2 className="section-title">Líneas Científicas</h2>

        <div className="lines-grid">
          <div className="line">
            <div className="line-icon"><Microscope /></div>
            <h4>Biología Molecular</h4>
            <p>Identificación de microorganismos mediante técnicas moleculares.</p>
          </div>

          <div className="line">
            <div className="line-icon"><TestTube /></div>
            <h4>Bioquímica y Biocatálisis</h4>
            <p>Caracterización de metabolitos y procesos catalíticos microbianos.</p>
          </div>

          <div className="line">
            <div className="line-icon"><Heart /></div>
            <h4>Investigación Clínica</h4>
            <p>Estudios clínicos y epidemiológicos para mejorar políticas sanitarias.</p>
          </div>

          <div className="line">
            <div className="line-icon"><Users /></div>
            <h4>Investigación Traslacional</h4>
            <p>Aplicación de hallazgos básicos a protocolos clínicos y tecnología.</p>
          </div>

          <div className="line">
            <div className="line-icon"><Stethoscope /></div>
            <h4>Cirugía y Medicina Interna</h4>
            <p>Análisis de casos para generar evidencia médica práctica.</p>
          </div>
        </div>
      </section>

      {/* timeline de experiencia */}
      <section className="timeline section-surface">
        <h2 className="section-title">Experiencia y Logros</h2>

        <div className="timeline-wrap">
          <div className="timeline-line" aria-hidden="true" />

          <div className="timeline-item left">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <h3>2006 - 2010</h3>
              <p>Industria farmacéutica: químico analítico y validación de métodos.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <h3>2010 - 2018</h3>
              <p>Docencia y supervisión de proyectos académicos en universidades.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <h3>2018 - 2025</h3>
              <p>Liderazgo en investigación clínica y proyectos multicéntricos en INTEGRADORA MEDICA GASA.</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
