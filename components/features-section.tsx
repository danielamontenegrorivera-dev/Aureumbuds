export function FeaturesSection() {
  const features = [
    {
      title: "Audio de Alta Fidelidad",
      description: "Controladores premium de 12mm que ofrecen claridad cristalina y graves profundos.",
      icon: "🎵",
    },
    {
      title: "Cancelación de Ruido Activa",
      description: "Tecnología ANC avanzada para sumergirte completamente en tu música.",
      icon: "🔇",
    },
    {
      title: "Diseño Ergonómico",
      description: "Ajuste perfecto y cómodo diseñado para uso prolongado sin fatiga.",
      icon: "✨",
    },
    {
      title: "Batería de Larga Duración",
      description: "Hasta 8 horas de reproducción continua con el estuche de carga.",
      icon: "🔋",
    },
  ]

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background pattern-overlay">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="font-serif italic" style={{ fontFamily: "Cormorant, serif" }}>
              Características
            </span>
            <span className="font-sans font-light"> excepcionales</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Cada detalle ha sido cuidadosamente diseñado para ofrecer una experiencia auditiva sin precedentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-sans font-medium mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
