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
    title: "Constitución de Sociedades de Responsabilidad Limitada",
    description:
      "Servicio completo para la creación de sociedades limitadas, incluyendo redacción de escrituras, inscripciones y trámites legales.",
    price: "Desde $350.000",
    features: [
      "Redacción de escritura pública",
      "Inscripción en Registro de Comercio",
      "Publicación en Diario Oficial",
      "Obtención de RUT y patente comercial",
    ],
  },
  {
    icon: FileText,
    title: "Constitución de Sociedades Anónimas",
    description:
      "Creación de sociedades anónimas abiertas y cerradas con todos los requisitos legales y documentación completa.",
    price: "Desde $650.000",
    features: [
      "Estatutos sociales personalizados",
      "Registro en SVS (si aplica)",
      "Junta constitutiva",
      "Inscripciones registrales",
    ],
  },
  {
    icon: Edit,
    title: "Constitución de SpA (Sociedades por Acciones)",
    description:
      "Constitución de SpA con flexibilidad en estructura corporativa y gobierno empresarial adaptado a sus necesidades.",
    price: "Desde $450.000",
    features: [
      "Estatutos flexibles",
      "Estructura de capital variable",
      "Pactos de accionistas",
      "Gobierno corporativo",
    ],
  },
  {
    icon: Handshake,
    title: "Modificación de Sociedades",
    description:
      "Cambios en la estructura societaria, aumento de capital, cambio de razón social y otras modificaciones.",
    price: "Desde $250.000",
    features: [
      "Reforma de estatutos",
      "Aumento de capital",
      "Cambio de razón social",
      "Modificación de objeto social",
    ],
  },
  {
    icon: Shield,
    title: "Fusión y División de Sociedades",
    description:
      "Procesos de fusión, división y transformación de sociedades con asesoría especializada en reorganizaciones.",
    price: "Desde $800.000",
    features: [
      "Evaluación de activos",
      "Proyecto de fusión/división",
      "Juntas de accionistas",
      "Inscripciones y publicaciones",
    ],
  },
  {
    icon: Gavel,
    title: "Disolución y Liquidación",
    description:
      "Servicios completos para la disolución y liquidación de sociedades con cumplimiento de todas las obligaciones legales.",
    price: "Desde $400.000",
    features: [
      "Proceso de disolución",
      "Liquidación de activos",
      "Cancelación de inscripciones",
      "Cierre tributario",
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
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-blue-900 mb-4">
            Servicios de Constitución de Empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones completas para la creación, formalización y modificación de todo tipo de sociedades comerciales. 
            Precios transparentes y plazos garantizados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 relative"
            >
              <div className="w-16 h-16 bg-navy-900 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white h-8 w-8" />
              </div>
              <div className="absolute top-6 right-6">
                <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </span>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-navy-900 mb-4 pr-20">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-navy-900 text-white py-3 rounded-lg hover:bg-navy-700 transition-colors duration-300 font-semibold">
                Solicitar Cotización
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
