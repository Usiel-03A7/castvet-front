export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formulario */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="tucorreo@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Info de contacto */}
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Información de contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📞</span>
                <span>Teléfono: <a href="tel:+521234567890" className="hover:underline">+52 312 271 4606</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span>Email: <a href="mailto:castrejonvanessa747@gmail.com" className="hover:underline">castrejonvanessa747@gmail.com</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📍</span>
                <span>Dirección: Av. Liceo de varones #132, Col. Bosques del Sur</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🕒</span>
                <span>Horario: Lunes a Viernes 8:00 AM - 2:00 PM 4:00 PM - 7:00pm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.311302269681!2d-103.73981055924101!3d19.225260047342566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEzJzMwLjkiTiAxMDPCsDQ0JzE0LjEiVw!5e0!3m2!1ses-419!2smx!4v1744742265886!5m2!1ses-419!2smx"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
}
