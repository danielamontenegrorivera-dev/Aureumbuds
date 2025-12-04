export function SpecsSection() {
  const specs = [
    { label: "Drivers", value: "12mm dinámicos" },
    { label: "Respuesta de frecuencia", value: "20Hz - 20kHz" },
    { label: "Impedancia", value: "32 Ω" },
    { label: "Sensibilidad", value: "105 dB SPL" },
    { label: "Bluetooth", value: "v5.3 + aptX HD" },
    { label: "Alcance", value: "Hasta 10 metros" },
    { label: "Batería (auriculares)", value: "8 horas" },
    { label: "Batería (estuche)", value: "24 horas adicionales" },
    { label: "Carga rápida", value: "15 min = 2 horas" },
    { label: "Resistencia", value: "IPX5 (resistente al agua)" },
    { label: "Peso (por auricular)", value: "5.2g" },
    { label: "Material", value: "Aluminio anodizado" },
  ]

  return (
    <section id="specs" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4">
            <span className="font-serif italic" style={{ fontFamily: "Cormorant, serif" }}>
              Especificaciones
            </span>
            <span className="font-sans font-light"> técnicas</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Tecnología de vanguardia en cada componente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="flex items-baseline justify-between p-6 border-b border-border hover:bg-background/50 transition-colors"
            >
              <span className="text-sm font-sans text-foreground/60 uppercase tracking-wide">{spec.label}</span>
              <span className="text-base font-sans font-medium text-primary">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
