import "../styles/Servicios.css";
import {
  GraduationCap,
  FlaskConical,
  BarChart3,
  FileText,
  ClipboardCheck,
  TestTube,
} from "lucide-react";

export default function Servicios() {
  return (
    <div className="servicios-layout">

      {/* Encabezado */}
      <section className="servicios-intro">
        <h1>Servicios Profesionales</h1>
        <p>
          Servicios especializados en investigación, análisis clínico
          y asesoría académica bajo estándares científicos y éticos.
        </p>
      </section>

      {/* Servicios */}
      <section className="servicios-editorial">

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <GraduationCap />
          </div>
          <h3>Asesoría en Tesis</h3>
          <p>
            Acompañamiento integral desde la planeación,
            metodología, análisis estadístico y defensa final
            en niveles de licenciatura, maestría y doctorado.
          </p>
        </article>

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <FlaskConical />
          </div>
          <h3>Proyectos de Investigación</h3>
          <p>
            Desarrollo y estructuración de proyectos científicos
            éticos, viables y alineados a normativas institucionales.
          </p>
        </article>

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <BarChart3 />
          </div>
          <h3>Bioestadística y Análisis</h3>
          <p>
            Selección de pruebas estadísticas, análisis avanzado
            e interpretación científica de datos.
          </p>
        </article>

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <FileText />
          </div>
          <h3>Publicación Científica</h3>
          <p>
            Redacción IMRyD, selección de revistas indexadas
            y acompañamiento durante el proceso editorial.
          </p>
        </article>

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <ClipboardCheck />
          </div>
          <h3>Protocolos Clínicos</h3>
          <p>
            Diseño metodológico de estudios clínicos,
            cálculo de muestra y documentación ética.
          </p>
        </article>

        <article className="servicio-editor reveal">
          <span className="servicio-line"></span>
          <div className="servicio-icon">
            <TestTube />
          </div>
          <h3>Consultoría para Laboratorios</h3>
          <p>
            Validación de métodos, control de calidad
            y cumplimiento regulatorio especializado.
          </p>
        </article>

      </section>
    </div>
  );
}
