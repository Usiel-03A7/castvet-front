export default function Hero() {
  return (
    <section id="inicio" className="bg-blue-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Texto - Añadí padding para mejor equilibrio */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Cuidamos a tu mascota con <span className="text-blue-600">amor</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            En Clínica Veterinaria Castrejón, tu mascota está en las mejores manos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              Agendar cita
            </a>
            <a
              href="#servicios"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              Nuestros servicios
            </a>
          </div>
        </div>

        {/* Imagen redondeada y con efecto */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/services2.jpeg"
              alt="Dra. Vanessa atendiendo a una mascota"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-8 border-white shadow-2xl transform hover:scale-105 transition-transform"
            />
            {/* Decoración opcional */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-full bg-blue-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
