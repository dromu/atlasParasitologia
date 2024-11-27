export function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contacto</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="mailto:contacto@atlasparasitologia.com" className="text-base text-gray-500 hover:text-gray-900">
                      Email: contacto@atlasparasitologia.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+123456789" className="text-base text-gray-500 hover:text-gray-900">
                      Teléfono: +1 (234) 567-89
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Redes Sociales</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Créditos</h3>
            <p className="mt-4 text-base text-gray-500">
                Desarrollado en los grupos de investigación CEMPA y SIDICO de la Universidad del Cauca.<br />
                Imágenes cortesía de 
                <a 
                  href="https://orcid.org/0000-0003-3538-6313" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline ml-1"
                >
                  Luis Reinel Vásquez
                </a>, 
                <a 
                  href="https://orcid.org/0000-0003-1548-942X" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline ml-1"
                >
                  Rubiel Vargas
                </a> y 
                <a 
                  href="https://orcid.org/0009-0001-9428-4192" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline ml-1"
                >
                  Jader Alejandro Muñoz
                </a>.
              </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Atlas de Parasitología. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

