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

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-white h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-playfair font-semibold text-xl text-blue-900">
                          {service.title}
                        </h3>
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <Check className="text-green-500 h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                      Solicitar Cotización
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
