import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SobreNosotros() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-serif italic mb-8 text-primary text-balance"
            style={{ fontFamily: "Cormorant, serif" }}
          >
            Sobre Nosotros
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-foreground/90 mb-6">
              Somos <strong className="text-primary">Aureum Buds</strong>, una marca de audífonos diseñados para quienes
              valoran la elegancia, la innovación y la exclusividad.
            </p>

            <p className="text-xl leading-relaxed text-foreground/90">
              Nuestro enfoque combina <strong className="text-primary">minimalismo y lujo</strong>, ofreciendo un
              accesorio tecnológico que no solo brinda sonido de alta fidelidad, sino también un estilo cómodo.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-border bg-card">
              <h3 className="text-2xl font-sans font-medium mb-3 text-primary">Elegancia</h3>
              <p className="text-foreground/80 leading-relaxed">Diseño refinado que complementa tu estilo de vida.</p>
            </div>

            <div className="p-6 border border-border bg-card">
              <h3 className="text-2xl font-sans font-medium mb-3 text-primary">Innovación</h3>
              <p className="text-foreground/80 leading-relaxed">Tecnología de vanguardia en cada detalle.</p>
            </div>

            <div className="p-6 border border-border bg-card">
              <h3 className="text-2xl font-sans font-medium mb-3 text-primary">Exclusividad</h3>
              <p className="text-foreground/80 leading-relaxed">Calidad premium para quienes exigen lo mejor.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
