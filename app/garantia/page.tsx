import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Garantia() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-8 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Garantía
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Garantía Limitada de 2 Años</h2>
              <p className="text-foreground/80 leading-relaxed">
                Aureum Buds garantiza que sus audífonos están libres de defectos de fabricación y materiales por un
                período de 2 años desde la fecha de compra original.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Cobertura de la Garantía</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Defectos de fabricación en componentes electrónicos</li>
                <li>Problemas con la batería (si no es por uso inadecuado)</li>
                <li>Fallas en los controles táctiles</li>
                <li>Problemas de conectividad Bluetooth</li>
                <li>Defectos en el estuche de carga</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Exclusiones</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Daños por agua o líquidos</li>
                <li>Daño físico o caídas</li>
                <li>Uso inadecuado o modificación del producto</li>
                <li>Desgaste normal de almohadillas y accesorios</li>
                <li>Daños causados por terceros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Proceso de Reclamación</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Para hacer válida su garantía, por favor contacte a nuestro servicio de atención al cliente a través de:
              </p>
              <div className="bg-card p-6 border border-border">
                <p className="text-foreground/80">Email: garantia@aureumbuds.com</p>
                <p className="text-foreground/80">Teléfono: +1 (800) AUREUM-1</p>
                <p className="text-foreground/80 mt-4">
                  Necesitará proporcionar su número de orden y una descripción detallada del problema.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
