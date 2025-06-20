import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  FileText,
  Edit,
  Handshake,
  Shield,
  Gavel,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Constitución de Empresas",
    description:
      "Creación de sociedades limitadas, anónimas y por acciones. Proceso completo desde la redacción de escrituras hasta la inscripción en el Registro de Commerce.",
    features: [
      "Redacción de escrituras",
      "Inscripción en Registro de Commerce",
      "Obtención de RUT empresarial",
    ],
  },
  {
    icon: FileText,
    title: "Formalización Empresarial",
    description:
      "Regularización de empresas existentes, actualización de documentos legales y cumplimiento de normativas vigentes.",
    features: [
      "Actualización de estatutos",
      "Regularización tributaria",
      "Compliance legal",
    ],
  },
  {
    icon: Edit,
    title: "Modificación de Empresas",
    description:
      "Cambio de razón social, aumento de capital, modificación de objetos sociales y otros cambios corporativos.",
    features: [
      "Cambio de razón social",
      "Aumento de capital",
      "Modificación de estatutos",
    ],
  },
  {
    icon: Handshake,
    title: "Asesoría Corporativa",
    description:
      "Consultoría especializada en derecho corporativo, fusiones, adquisiciones y reestructuraciones empresariales.",
    features: [
      "Fusiones y adquisiciones",
      "Reestructuraciones",
      "Due diligence",
    ],
  },
  {
    icon: Shield,
    title: "Compliance Legal",
    description:
      "Implementación de programas de cumplimiento normativo y prevención de delitos empresariales.",
    features: [
      "Programas de compliance",
      "Auditorías legales",
      "Capacitación empresarial",
    ],
  },
  {
    icon: Gavel,
    title: "Litigios Corporativos",
    description:
      "Representación en conflictos societarios, disputes comerciales y procedimientos administrativos.",
    features: [
      "Litigios societarios",
      "Arbitraje comercial",
      "Mediación empresarial",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-navy-900 mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para la constitución, formalización
            y modificación de empresas, respaldadas por nuestra amplia
            experiencia legal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair font-semibold text-xl text-navy-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
