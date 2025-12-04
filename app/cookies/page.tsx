import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Cookies() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-4 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Política de Cookies
          </h1>
          <p className="text-sm text-foreground/60 mb-8">Última actualización: Enero 2025</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">¿Qué son las Cookies?</h2>
              <p className="text-foreground/80 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro
                sitio web. Nos ayudan a mejorar tu experiencia, recordar tus preferencias y analizar cómo utilizas
                nuestro sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Tipos de Cookies que Utilizamos</h2>

              <div className="space-y-4">
                <div className="bg-card p-6 border border-border">
                  <h3 className="text-xl font-sans font-medium mb-2 text-primary">Cookies Esenciales</h3>
                  <p className="text-foreground/80 text-base">
                    Necesarias para que el sitio web funcione correctamente. No pueden ser desactivadas. Incluyen
                    cookies para mantener tu sesión y recordar tu carrito de compras.
                  </p>
                </div>

                <div className="bg-card p-6 border border-border">
                  <h3 className="text-xl font-sans font-medium mb-2 text-primary">Cookies de Rendimiento</h3>
                  <p className="text-foreground/80 text-base">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando información
                    de forma anónima sobre las páginas visitadas y los errores encontrados.
                  </p>
                </div>

                <div className="bg-card p-6 border border-border">
                  <h3 className="text-xl font-sans font-medium mb-2 text-primary">Cookies de Funcionalidad</h3>
                  <p className="text-foreground/80 text-base">
                    Permiten que el sitio web recuerde tus elecciones (como tu idioma preferido o región) y proporcionen
                    características mejoradas y más personalizadas.
                  </p>
                </div>

                <div className="bg-card p-6 border border-border">
                  <h3 className="text-xl font-sans font-medium mb-2 text-primary">Cookies de Marketing</h3>
                  <p className="text-foreground/80 text-base">
                    Se utilizan para rastrear visitantes en sitios web con el objetivo de mostrar anuncios relevantes y
                    atractivos para el usuario individual.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Gestión de Cookies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en
                tu computadora y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin
                embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que
                visites un sitio y que algunos servicios y funcionalidades no funcionen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Cookies de Terceros</h2>
              <p className="text-foreground/80 leading-relaxed">
                En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. Esto
                incluye servicios de análisis web como Google Analytics y plataformas de redes sociales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Actualizaciones de esta Política</h2>
              <p className="text-foreground/80 leading-relaxed">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras prácticas o
                por otras razones operativas, legales o reglamentarias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Contacto</h2>
              <p className="text-foreground/80 leading-relaxed">
                Si tienes preguntas sobre nuestra política de cookies, contáctanos en:{" "}
                <strong>cookies@aureumbuds.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
