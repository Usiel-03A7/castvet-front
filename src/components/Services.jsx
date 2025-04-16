export default function Services() {
  const services = [
    {
      icon: "🐕", // Reemplaza con ícono o imagen
      title: "Consulta General",
      description: "Revisiones completas para diagnóstico y prevención."
    },
    {
      icon: "✂️",
      title: "Cirugías",
      description: "Procedimientos quirúrgicos seguros y especializados."
    },
    {
      icon: "💉",
      title: "Medicina preventiva",
      description: "Esquemas de vacunación personalizados."
    },
    {
      icon: "🩺",
      title: "Laboratorio",
      description: "Análisis clínicos y pruebas rápidas."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestros <span className="text-blue-600">Servicios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <span className="text-4xl mb-4 inline-block">{service.icon}</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
