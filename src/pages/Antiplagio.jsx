import "../styles/Antiplagio.css";
import {
  ShieldCheck,
  GraduationCap,
  BookOpenCheck,
  Info,
} from "lucide-react";

export default function Antiplagio() {
  return (
    <div className="anti-container">

      {/* ===== HEADER ===== */}
      <header className="anti-header">
        <ShieldCheck className="anti-header-icon" />
        <h1>Antiplagio – Clarificación del Servicio</h1>
        <p>Compromiso académico, ética y formación profesional.</p>
      </header>

      {/* ===== SECCIONES ===== */}
      <section className="anti-sections">

        {/* Enfoque del Servicio */}
        <div className="anti-card">
          <div className="anti-icon-box">
            <GraduationCap className="anti-icon" />
          </div>
          <h2>Enfoque del Servicio</h2>
          <p>
            Este servicio se basa en <strong>acompañamiento académico</strong> para ayudarte a desarrollar
            habilidades reales: metodología, análisis, redacción, corrección y orientación para que
            mejores tu formación, no para sustituir tu aprendizaje.
          </p>
        </div>

        {/* Responsabilidad del Estudiante */}
        <div className="anti-card">
          <div className="anti-icon-box">
            <BookOpenCheck className="anti-icon" />
          </div>
          <h2>Responsabilidad del Estudiante</h2>
          <p>
            En caso de recibir un trabajo completo, el estudiante es responsable de{" "}
            <strong>comprenderlo, estudiarlo y dominar su contenido</strong> como parte de su propio proceso
            académico.
          </p>
        </div>

        {/* Nota Importante */}
        <div className="anti-card">
          <div className="anti-icon-box">
            <Info className="anti-icon" />
          </div>
          <h2>Clarificación Importante</h2>
          <p>
            El objetivo no es reemplazar tu esfuerzo, sino ayudarte a avanzar con bases claras,
            evitar errores y construir trabajos académicos confiables, éticos y sustentados.
          </p>
        </div>

      </section>
    </div>
  );
}
