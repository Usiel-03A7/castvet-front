export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo y nombre */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Clínica Veterinaria Castrejón</h3>
            <p className="text-gray-400">Cuidando a tus mascotas desde 2020</p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook text-2xl"></i> {/* Usa Font Awesome o un SVG */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">WhatsApp</span>
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Derechos */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Clínica Veterinaria Castrejón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
