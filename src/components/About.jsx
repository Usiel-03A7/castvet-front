export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Sobre <span className="text-blue-600">Vanessa Castrejón</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Foto de Vanessa */}
          <div className="md:w-1/3">
            <img
              src="/vanessa.jpg"  // Reemplaza con su foto real
              alt="MVZ Vanessa Lizet Castrejón Ruiz"
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-200 mx-auto"
            />
          </div>

          {/* Biografía */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              MVZ. Vanessa Lizet Castrejón Ruiz
            </h3>
            <p className="text-gray-600 mb-4">
              Médica Veterinaria Zootecnista con <strong>4 años de experiencia</strong> en cuidado 
              de animales de compañía y atención clínica.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="bg-blue-100 p-1 rounded-full mr-2">
                  ✅
                </span>
                Egresada de la Universidad Autónoma de...
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 p-1 rounded-full mr-2">
                  ✅
                </span>
                Especializada en cirugía de tejidos blandos.
              </li>
            </ul>
            <p className="text-gray-600">
              En <strong>Clínica Veterinaria Castrejón</strong> nos apasiona brindar 
              atención personalizada y tratamientos éticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
