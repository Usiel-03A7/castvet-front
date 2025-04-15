export default function Hero() {
  return (
    <section id="inicio" className="bg-blue-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cuidamos a tu mascota con <span className="text-blue-600">amor</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            En Clínica Veterinaria Castrejón, tu mascota está en las mejores manos.
          </p>
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Agendar cita
          </a>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <img
            src="/vet-clinic.jpg"  // Reemplaza con tu imagen
            alt="Veterinaria Castrejón"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
