import { useState, useEffect } from "react";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Scale className="text-navy-900 h-8 w-8" />
            <span className="font-playfair font-bold text-xl text-navy-900">
              Alpha Consulting
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-navy-900 transition-colors duration-300"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-navy-900 transition-colors duration-300"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("precios")}
              className="text-gray-700 hover:text-navy-900 transition-colors duration-300"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-700 hover:text-navy-900 transition-colors duration-300"
            >
              Nosotros
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-gold-500 text-white px-6 py-2 hover:bg-gold-600 transition-colors duration-300"
            >
              Contactar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("precios")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Precios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
              >
                Contactar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
