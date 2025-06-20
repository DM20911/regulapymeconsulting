import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section
      id="inicio"
      className="pt-20 bg-gradient-to-br from-navy-900 via-navy-700 to-navy-500 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              Constitución y Formalización de Empresas con{" "}
              <span className="text-gold-500">Excelencia Legal</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Más de 15 años brindando servicios profesionales de constitución,
              formalización y modificación de empresas. Su éxito empresarial es
              nuestra prioridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-gold-500 text-white px-8 py-4 hover:bg-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                Consulta Gratuita
              </Button>
              <Button
                onClick={() => scrollToSection("servicios")}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-navy-900 transition-all duration-300"
                size="lg"
              >
                Ver Servicios
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Oficina legal profesional"
              className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
