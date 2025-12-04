export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <h2 className="text-2xl">
                <span className="font-serif italic text-primary">Aureum</span>
                <span className="font-sans font-bold text-secondary-foreground"> BUDS</span>
              </h2>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">Lujo refinado en cada nota.</p>
          </div>

          <div>
            <h3 className="font-sans font-medium mb-4">Producto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#features" className="hover:opacity-100 transition-opacity">
                  Características
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:opacity-100 transition-opacity">
                  Especificaciones
                </a>
              </li>
              <li>
                <a href="/garantia" className="hover:opacity-100 transition-opacity">
                  Garantía
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/sobre-nosotros" className="hover:opacity-100 transition-opacity">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/distribuidores" className="hover:opacity-100 transition-opacity">
                  Distribuidores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="/privacidad" className="hover:opacity-100 transition-opacity">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:opacity-100 transition-opacity">
                  Términos
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:opacity-100 transition-opacity">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-70">
          <p>© 2025 Aureum Buds. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
