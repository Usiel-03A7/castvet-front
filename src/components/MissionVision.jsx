export default function MissionVision() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
          Nuestros <span className="text-blue-600">Pilares Fundamentales</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tarjeta Misión */}
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Misión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="block font-semibold mb-2">La misión de la Clínica Veterinaria Castrejón</span>
              es difundir la excelencia médica con el objetivo de mejorar la salud y el bienestar de los animales.
              Nos comprometemos a brindar atención compasiva y profesional, utilizando tecnología de vanguardia
              y manteniendo los más altos estándares éticos en cada consulta.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Visión</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="block font-semibold mb-2">Ser una Clínica Veterinaria con reconocimiento estatal</span>
              como referencia en calidad de servicios, logrado a través de capacitación continua, disciplina
              y trabajo en equipo. Aspiramos a ser el centro veterinario preferido por las familias,
              donde cada mascota reciba el mismo amor y cuidado que en su hogar.
            </p>
          </div>
        </div>

        {/* Valores agregados */}
        <div className="mt-16 bg-gradient-to-r bg-blue-50 rounded-xl p-8 text-white">
          <h3 className="text-2xl text-gray-800 font-bold mb-6 text-center">Nuestros Valores</h3>
          <div className="grid sm:grid-cols-2 text-gray-700 lg:grid-cols-4 gap-6">
            {[
              { icon: "❤️", title: "Compasión", desc: "Trato amoroso a cada paciente" },
              { icon: "📚", title: "Conocimiento", desc: "Actualización médica constante" },
              { icon: "🤝", title: "Honestidad", desc: "Diagnósticos transparentes" },
              { icon: "🌟", title: "Excelencia", desc: "Altos estándares de calidad" }
            ].map((item, index) => (
              <div key={index} className="bg-white  bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
