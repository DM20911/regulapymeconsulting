import { Scale, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="text-gold-500 h-8 w-8" />
              <span className="font-playfair font-bold text-xl">Alpha Consulting</span>
            </div>
            <p className="text-gray-400 mb-6">
              Su socio estratégico en servicios legales corporativos. Más de 15 años
              construyendo el éxito empresarial de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-500 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Constitución de Empresas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Formalización Empresarial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Modificación de Empresas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Asesoría Corporativa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Compliance Legal
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Recursos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Guías Legales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Calculadora de Costos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Blog Corporativo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Documentos Legales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <span className="text-gold-500 mr-3 mt-1">📍</span>
                <span>
                  Av. Providencia 1234, Oficina 567
                  <br />
                  Providencia, Santiago
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gold-500 mr-3">📞</span>
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center">
                <span className="text-gold-500 mr-3">✉️</span>
                <span>contacto@alphaconsulting.cl</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Alpha Consulting. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
