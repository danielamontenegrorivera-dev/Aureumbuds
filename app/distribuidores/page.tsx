import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Distribuidores() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-8 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Distribuidores
          </h1>

          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
            Encuentra Aureum Buds en nuestros distribuidores autorizados alrededor del mundo.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Distribuidor 1 */}
            <div className="bg-card border border-border p-8">
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Aureum Elite Store</h2>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <strong>Ubicación:</strong> Nueva York, Estados Unidos
                </p>
                <p>
                  <strong>Dirección:</strong> 5th Avenue 1250, Manhattan, NY 10029
                </p>
                <p>
                  <strong>Teléfono:</strong> +1 (212) 555-0198
                </p>
                <p>
                  <strong>Email:</strong> ny@aureumbuds.com
                </p>
                <p>
                  <strong>Horario:</strong> Lunes a Sábado, 10:00 AM - 8:00 PM
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-sans">
                  Distribuidor Premium
                </span>
              </div>
            </div>

            {/* Distribuidor 2 */}
            <div className="bg-card border border-border p-8">
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Luxury Audio Center</h2>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <strong>Ubicación:</strong> Londres, Reino Unido
                </p>
                <p>
                  <strong>Dirección:</strong> Bond Street 125, Mayfair, W1S 1DY
                </p>
                <p>
                  <strong>Teléfono:</strong> +44 20 7946 0958
                </p>
                <p>
                  <strong>Email:</strong> london@aureumbuds.com
                </p>
                <p>
                  <strong>Horario:</strong> Lunes a Domingo, 9:00 AM - 9:00 PM
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-sans">
                  Distribuidor Premium
                </span>
              </div>
            </div>

            {/* Distribuidor 3 */}
            <div className="bg-card border border-border p-8">
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Tech & Sound Gallery</h2>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <strong>Ubicación:</strong> Tokio, Japón
                </p>
                <p>
                  <strong>Dirección:</strong> Shibuya 2-24-12, Tokio 150-0002
                </p>
                <p>
                  <strong>Teléfono:</strong> +81 3-5468-7890
                </p>
                <p>
                  <strong>Email:</strong> tokyo@aureumbuds.com
                </p>
                <p>
                  <strong>Horario:</strong> Lunes a Viernes, 11:00 AM - 10:00 PM
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 text-sm font-sans">
                  Distribuidor Autorizado
                </span>
              </div>
            </div>

            {/* Distribuidor 4 */}
            <div className="bg-card border border-border p-8">
              <h2 className="text-2xl font-sans font-medium mb-4 text-primary">Premium Sound Studio</h2>
              <div className="space-y-3 text-foreground/80">
                <p>
                  <strong>Ubicación:</strong> París, Francia
                </p>
                <p>
                  <strong>Dirección:</strong> Avenue des Champs-Élysées 78, 75008
                </p>
                <p>
                  <strong>Teléfono:</strong> +33 1 42 65 78 90
                </p>
                <p>
                  <strong>Email:</strong> paris@aureumbuds.com
                </p>
                <p>
                  <strong>Horario:</strong> Lunes a Sábado, 10:30 AM - 7:30 PM
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 text-sm font-sans">
                  Distribuidor Autorizado
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-accent p-8 border border-border">
            <h2 className="text-2xl font-sans font-medium mb-4">¿Interesado en ser distribuidor?</h2>
            <p className="text-foreground/80 mb-4">
              Si estás interesado en convertirte en distribuidor autorizado de Aureum Buds, contáctanos para conocer más
              sobre nuestro programa de asociación.
            </p>
            <p className="text-foreground/80">Email: distribuidores@aureumbuds.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
