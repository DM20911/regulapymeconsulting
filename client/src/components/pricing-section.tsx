import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Sociedades de Responsabilidad Limitada",
    description: "Ideal para pequeñas y medianas empresas",
    price: "$350.000",
    originalPrice: "$450.000",
    currency: "CLP",
    features: [
      "Redacción de escritura pública",
      "Inscripción en Registro de Comercio",
      "Publicación en Diario Oficial",
      "Obtención de RUT empresarial",
      "Patente comercial",
      "Asesoría post-constitución (30 días)",
    ],
    popular: false,
    timeframe: "15-20 días hábiles",
  },
  {
    name: "Sociedades Anónimas",
    description: "Para empresas con proyección de crecimiento",
    price: "$650.000",
    originalPrice: "$850.000",
    currency: "CLP", 
    features: [
      "Estatutos sociales personalizados",
      "Junta constitutiva",
      "Inscripciones registrales completas",
      "Registro en SVS (si aplica)",
      "Estructura de directorio",
      "Asesoría corporativa (60 días)",
    ],
    popular: true,
    timeframe: "20-25 días hábiles",
  },
  {
    name: "Sociedades por Acciones (SpA)",
    description: "Máxima flexibilidad corporativa",
    price: "$450.000",
    originalPrice: "$600.000", 
    currency: "CLP",
    features: [
      "Estatutos flexibles y personalizados",
      "Estructura de capital variable",
      "Pactos de accionistas",
      "Gobierno corporativo adaptable",
      "Inscripciones completas",
      "Consultoría especializada (45 días)",
    ],
    popular: false,
    timeframe: "18-22 días hábiles",
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="precios" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-navy-900 mb-4">
            Precios y Ofertas Especiales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tarifas transparentes con descuentos especiales. Todos nuestros servicios incluyen 
            asesoría legal especializada y garantía de cumplimiento de plazos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 relative ${
                plan.popular
                  ? "bg-navy-900 border-gold-500 text-white"
                  : "bg-white border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3
                  className={`font-playfair font-semibold text-lg mb-2 leading-tight ${
                    plan.popular ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mb-4 text-sm ${
                    plan.popular ? "text-blue-200" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-2">
                  <div
                    className={`text-3xl font-bold ${
                      plan.popular ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {plan.price}
                  </div>
                  <div
                    className={`text-sm line-through ${
                      plan.popular ? "text-blue-300" : "text-gray-400"
                    }`}
                  >
                    Antes: {plan.originalPrice}
                  </div>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    plan.popular ? "text-gold-300" : "text-gold-600"
                  }`}
                >
                  {plan.timeframe}
                </div>
              </div>

              <ul className={`space-y-3 mb-8 ${plan.popular ? "text-white" : ""}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check
                      className={`mr-3 h-4 w-4 ${
                        plan.popular ? "text-gold-500" : "text-green-500"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 font-semibold transition-colors duration-300 ${
                  plan.popular
                    ? "bg-gold-500 text-white hover:bg-gold-600"
                    : plan.name === "Plan Empresarial"
                    ? "bg-navy-900 text-white hover:bg-navy-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Elegir Plan
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">¿Necesita un servicio personalizado?</p>
          <button
            onClick={() => scrollToSection("contacto")}
            className="inline-flex items-center text-gold-500 font-semibold hover:text-gold-600 transition-colors duration-300"
          >
            Solicite una cotización personalizada
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
