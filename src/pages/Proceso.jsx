import "../styles/Proceso.css";
import {
  Mail,
  SearchCheck,
  ClipboardCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function Proceso() {
  const steps = [
    {
      icon: <Mail />,
      number: "01",
      title: "Tú nos contactas",
      desc: "Nos escribes contándonos brevemente qué necesitas (tarea, tesis, artículo, etc.).",
    },
    {
      icon: <SearchCheck />,
      number: "02",
      title: "Revisamos tu caso",
      desc: "Analizamos tu nivel, objetivo, fecha límite y requisitos institucionales.",
    },
    {
      icon: <ClipboardCheck />,
      number: "03",
      title: "Propuesta y tiempos claros",
      desc: "Recibes un plan breve y sin confusiones sobre lo que haremos y cuándo recibirás avances.",
    },
    {
      icon: <Users />,
      number: "04",
      title: "Trabajo paso a paso",
      desc: "Se aplica la asesoría personalizada, revisión de borradores, análisis estadístico y redacción científica.",
    },
    {
      icon: <CheckCircle2 />,
      number: "05",
      title: "Entrega final profesional",
      desc: "Recibes tu trabajo completo, claro y listo para entregar o enviar.",
    },
  ];

  return (
    <div className="proceso-container">
      <h1 className="proceso-title">Nuestro Proceso de Trabajo</h1>

      <div className="timeline">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step slide-reveal">
            <div className="step-icon">{step.icon}</div>

            <div className="step-content">
              <span className="step-number">{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
