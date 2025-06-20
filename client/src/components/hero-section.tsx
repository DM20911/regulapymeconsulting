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
      className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair font-bold text-4xl lg:text-5xl mb-6 leading-tight">
              <span style={{color: 'white'}}>Creación, Formalización y Modificación de</span>{" "}
              <span className="text-gold-500">Empresas</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Servicios legales especializados en constitución de sociedades limitadas, 
              anónimas y por acciones. Más de 1,500 empresas constituidas exitosamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-orange-500 text-navy-900 px-8 py-4 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                size="lg"
              >
                Consulta Gratuita
              </Button>
              <Button
                onClick={() => scrollToSection("servicios")}
                variant="outline"
                className="border-2 border-white bg-white text-black px-8 py-4 hover:bg-gray-100 transition-all duration-300"
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
