import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Terminos() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-4 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Términos y Condiciones
          </h1>
          <p className="text-sm text-foreground/60 mb-8">Última actualización: Enero 2025</p>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">1. Aceptación de Términos</h2>
              <p className="text-foreground/80 leading-relaxed">
                Al acceder y utilizar el sitio web de Aureum Buds, aceptas estar sujeto a estos términos y condiciones.
                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">2. Productos y Precios</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nos esforzamos por proporcionar información precisa sobre nuestros productos, incluyendo descripciones,
                especificaciones y precios. Sin embargo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Los precios están sujetos a cambios sin previo aviso</li>
                <li>Nos reservamos el derecho de limitar las cantidades de compra</li>
                <li>Las imágenes de productos son ilustrativas</li>
                <li>Todos los precios están en USD, salvo que se indique lo contrario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">3. Pedidos y Pago</h2>
              <p className="text-foreground/80 leading-relaxed">
                Al realizar un pedido, garantizas que toda la información proporcionada es precisa y completa. Nos
                reservamos el derecho de rechazar o cancelar cualquier pedido por cualquier motivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">4. Envíos y Entregas</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Los plazos de entrega son estimados y pueden variar según:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Disponibilidad del producto</li>
                <li>Ubicación de entrega</li>
                <li>Método de envío seleccionado</li>
                <li>Circunstancias fuera de nuestro control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">5. Devoluciones y Reembolsos</h2>
              <p className="text-foreground/80 leading-relaxed">
                Ofrecemos un período de 30 días para devoluciones de productos no utilizados en su empaque original. Los
                gastos de envío de devolución corren por cuenta del cliente, excepto en casos de productos defectuosos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">6. Propiedad Intelectual</h2>
              <p className="text-foreground/80 leading-relaxed">
                Todo el contenido de este sitio web, incluyendo texto, gráficos, logos, imágenes y software, es
                propiedad de Aureum Buds y está protegido por las leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">7. Limitación de Responsabilidad</h2>
              <p className="text-foreground/80 leading-relaxed">
                Aureum Buds no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte
                del uso o la imposibilidad de usar nuestros productos o servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">8. Contacto</h2>
              <p className="text-foreground/80 leading-relaxed">
                Para preguntas sobre estos términos, contáctanos en: <strong>legal@aureumbuds.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
