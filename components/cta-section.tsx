"use client"

export function CTASection() {
  return (
    <section id="cta" className="py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground pattern-overlay">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
          <span className="font-serif italic block mb-2" style={{ fontFamily: "Cormorant, serif" }}>
            Eleva
          </span>
          <span className="font-sans font-light">tu experiencia auditiva</span>
        </h2>

        <p className="text-xl mb-12 leading-relaxed opacity-90">
          {"Únete a quienes aprecian la perfección del sonido y el diseño."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="px-10 py-5 bg-background text-foreground font-sans text-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 min-w-[220px]"
          >
            Comprar ahora
          </button>
          <a
            href="/contacto"
            className="px-10 py-5 border-2 border-background text-primary-foreground font-sans text-lg hover:bg-background hover:text-foreground transition-all duration-300 min-w-[220px] inline-block text-center"
          >
            Contactar ventas
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-primary-foreground/20">
          <p className="text-sm opacity-70 mb-4">Disponible en edición limitada</p>
          <p className="text-3xl font-serif italic" style={{ fontFamily: "Cormorant, serif" }}>
            $299 USD
          </p>
        </div>
      </div>
    </section>
  )
}
