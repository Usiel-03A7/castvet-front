import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Contact() {
  // Datos configurables
  const phoneNumber = "523122714606"; // Sin el símbolo +
  const defaultMessage = "Hola, quisiera información sobre sus servicios veterinarios.";
  const address = "Av. Liceo de varones #132, Col. Bosques del Sur";
  const hours = "Lunes a Viernes 9:00 AM - 2:00 PM - 4:00 PM - 7:00 PM ";
  const hoursweekend = "Sábados 9:00 AM - 2:00 PM";

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Tarjeta WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center text-center">
            <div className="bg-green-100 p-5 rounded-full mb-6 text-green-600">
              <FaWhatsapp className="text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Escríbenos por WhatsApp
            </h3>
            <p className="text-gray-600 mb-6">
              Recibe atención inmediata de nuestro equipo veterinario.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Iniciar chat
            </a>
          </div>

          {/* Info de contacto */}
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Información de contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-medium text-gray-800">Teléfono</p>
                  <a
                    href={`tel:+52 ${phoneNumber}`}
                    className="text-gray-600 hover:text-blue-600 hover:underline"
                  >
                    +{phoneNumber.match(/.{1,2}/g)?.join(' ')}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-medium text-gray-800">Dirección</p>
                  <p className="text-gray-600">{address}</p>
                </div>
              </li>

              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">
                  <FaClock />
                </span>
                <div>
                  <p className="font-medium text-gray-800">Horario</p>
                  <p className="text-gray-600">{hours}</p>
                  <p className="text-gray-600">{hoursweekend}</p>
                </div>
              </li>
            </ul>

            {/* Mapa integrado */}
          </div>
        </div>
        <div className="mt-6  rounded-lg overflow-hidden border border-gray-200">

          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3767.311302269681!2d-103.73981055924101!3d19.225260047342566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEzJzMwLjkiTiAxMDPCsDQ0JzE0LjEiVw!5e0!3m2!1ses-419!2smx!4v1744742265886!5m2!1ses-419!2smx"
            width="100%"
            height="450"
            style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
