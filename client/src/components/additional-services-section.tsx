import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileCheck,
  Users,
  TrendingUp,
  Shield,
  Briefcase,
  Calculator,
  Clock,
  CheckCircle,
} from "lucide-react";

const additionalServices = [
  {
    icon: FileCheck,
    title: "Modificaciones Societarias",
    price: "Desde $180.000",
    items: [
      "Cambio de razón social",
      "Modificación de objeto social", 
      "Cambio de domicilio",
      "Aumento de capital",
      "Reducción de capital",
      "Modificación de estatutos",
    ],
  },
  {
    icon: Users,
    title: "Transformaciones",
    price: "Desde $320.000",
    items: [
      "Transformación de SRL a SA",
      "Transformación de SA a SpA",
      "Transformación de SpA a SRL",
      "Cambio de tipo societario",
      "Reestructuración corporativa",
      "Adaptación legal",
    ],
  },
  {
    icon: TrendingUp,
    title: "Fusiones y Adquisiciones",
    price: "Desde $650.000",
    items: [
      "Fusión por absorción",
      "Fusión por creación",
      "División de sociedades",
      "Escisión parcial",
      "Due diligence legal",
      "Estructuración de operaciones",
    ],
  },
  {
    icon: Shield,
    title: "Términos y Disoluciones",
    price: "Desde $280.000",
    items: [
      "Disolución anticipada",
      "Liquidación de sociedades",
      "Cancelación de inscripciones",
      "Término de giro",
      "Cierre de actividades",
      "Trámites finales",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Plazos Garantizados",
    description: "Cumplimos los tiempos prometidos o devolvemos su dinero",
  },
  {
    icon: CheckCircle,
    title: "Satisfacción 100%",
    description: "Más de 1,500 clientes satisfechos respaldan nuestro trabajo",
  },
  {
    icon: Calculator,
    title: "Precios Transparentes",
    description: "Sin costos ocultos, todo incluido en el precio final",
  },
  {
    icon: Briefcase,
    title: "Experiencia Comprobada",
    description: "15+ años especializados en derecho societario",
  },
];

export default function AdditionalServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-blue-900 mb-4">
            Servicios Adicionales Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios complementarios para el ciclo completo de vida de su empresa. 
            Desde modificaciones hasta transformaciones y disoluciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white h-6 w-6" />
              </div>
              <h3 className="font-playfair font-semibold text-lg text-blue-900 mb-2">
                {service.title}
              </h3>
              <div className="text-gold-600 font-bold text-lg mb-4">
                {service.price}
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-blue-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="font-playfair font-bold text-2xl lg:text-3xl mb-4">
              ¿Por Qué Elegir Nuestros Servicios?
            </h3>
            <p className="text-blue-200 text-lg">
              Más que servicios legales, ofrecemos tranquilidad y resultados garantizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-white h-8 w-8" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-blue-200 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}