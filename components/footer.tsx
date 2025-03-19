import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-darkGray text-white py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/dl-logo.png"
                alt="DL Construcciones"
                width={180}
                height={120}
                className="max-w-[180px]"
              />
            </div>
            <p className="text-lightGray mb-4">
              Soluciones constructivas de calidad para proyectos residenciales y comerciales.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook text-[#1877F2] hover:text-[#1877F2]/80"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram text-[#E4405F] hover:text-[#E4405F]/80"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@dlconstrucciones"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube text-[#FF0000] hover:text-[#FF0000]/80"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle text-green-600 hover:text-green-500"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-lightGray hover:text-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-lightGray hover:text-orange transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-lightGray hover:text-orange transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-lightGray hover:text-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/construccion-tradicional"
                  className="text-lightGray hover:text-orange transition-colors"
                >
                  Construcción Tradicional
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/sistema-constructivo"
                  className="text-lightGray hover:text-orange transition-colors"
                >
                  Sistema Constructivo
                </Link>
              </li>
              <li>
                <Link href="/servicios/remodelaciones" className="text-lightGray hover:text-orange transition-colors">
                  Remodelaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/diseno-arquitectonico"
                  className="text-lightGray hover:text-orange transition-colors"
                >
                  Diseño Arquitectónico
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-lightGray">
              <p className="mb-2">Av. Corrientes 1234, Piso 5</p>
              <p className="mb-2">Ciudad Autónoma de Buenos Aires</p>
              <p className="mb-2">Argentina</p>
              <p className="mb-2">+54 11 1234-5678</p>
              <p className="mb-2">info@dlconstrucciones.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-borderGray mt-8 pt-8 text-center text-lightGray">
          <p>&copy; {new Date().getFullYear()} DL Construcciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

