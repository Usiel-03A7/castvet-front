import { useState } from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo />

          {/* Menú para desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#inicio" text="Inicio" />
            <NavLink href="#nosotros" text="Acerca de Nosotros" />
            <NavLink href="#contacto" text="Contáctanos" />
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil (condicional) */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <NavLink href="#inicio" text="Inicio" mobile />
            <NavLink href="#nosotros" text="Acerca de Nosotros" mobile />
            <NavLink href="#contacto" text="Contáctanos" mobile />
          </div>
        )}
      </div>
    </nav>
  );
}
