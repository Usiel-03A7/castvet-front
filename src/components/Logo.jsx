export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center space-x-2">
      {/* Reemplaza con la imagen real (puedes usar un SVG o img) */}
      <img
        src="background.jpeg"  // Asegúrate de tener esta imagen en public/
        alt="Clínica Veterinaria Castrejón"
        className="h-12 w-12"
      />
      <span className="text-xl font-bold text-gray-800">
        Clínica Veterinaria <br /> Castrejón
      </span>
    </a>
  );
}
