import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Profesionales en reunión de negocios"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-playfair font-bold text-3xl lg:text-4xl text-navy-900 mb-6">
              Más de 15 Años de{" "}
              <span className="text-gold-500">Excelencia Legal</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos un equipo de abogados especializados en derecho corporativo y
              empresarial, con una trayectoria sólida ayudando a empresas de todos
              los tamaños a alcanzar sus objetivos legales y comerciales.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">
                    Experiencia Comprobada
                  </h4>
                  <p className="text-gray-600">
                    Más de 1,500 empresas constituidas exitosamente
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">
                    Atención Personalizada
                  </h4>
                  <p className="text-gray-600">
                    Cada cliente recibe atención dedicada y soluciones a medida
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Check className="text-white h-3 w-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">
                    Actualización Constante
                  </h4>
                  <p className="text-gray-600">
                    Mantenemos al día con los últimos cambios normativos
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-navy-900">1,500+</div>
                <div className="text-sm text-gray-600">Empresas Constituidas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">15+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
