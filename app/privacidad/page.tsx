import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Privacidad() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-4 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Política de Privacidad
          </h1>
          <p className="text-sm text-foreground/60 mb-8">Última actualización: Enero 2025</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">1. Información que Recopilamos</h2>
              <p className="text-foreground/80 leading-relaxed">
                En Aureum Buds, recopilamos información personal que nos proporcionas voluntariamente al realizar una
                compra, crear una cuenta o contactarnos. Esto puede incluir:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Nombre completo y datos de contacto</li>
                <li>Dirección de correo electrónico</li>
                <li>Dirección de envío y facturación</li>
                <li>Información de pago</li>
                <li>Historial de compras</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">2. Uso de la Información</h2>
              <p className="text-foreground/80 leading-relaxed">Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Procesar y completar tus pedidos</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Enviar actualizaciones sobre tu pedido</li>
                <li>Proporcionar atención al cliente</li>
                <li>Enviar comunicaciones de marketing (con tu consentimiento)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">3. Protección de Datos</h2>
              <p className="text-foreground/80 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">4. Compartir Información</h2>
              <p className="text-foreground/80 leading-relaxed">
                No vendemos, comercializamos ni transferimos tu información personal a terceros sin tu consentimiento,
                excepto cuando sea necesario para completar tu pedido o cumplir con requisitos legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">5. Tus Derechos</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">Tienes derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Acceder a tu información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">6. Contacto</h2>
              <p className="text-foreground/80 leading-relaxed">
                Para preguntas sobre esta política de privacidad, contáctanos en:{" "}
                <strong>privacidad@aureumbuds.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
