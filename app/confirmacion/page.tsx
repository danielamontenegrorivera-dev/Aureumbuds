"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"

export default function ConfirmacionPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <CheckCircle className="w-24 h-24 text-green-600" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 text-primary italic">Compra realizada</h1>

          <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
            ¡Gracias por tu compra! Tu pedido ha sido procesado exitosamente.
          </p>

          <div className="bg-muted/30 rounded-lg p-8 mb-8 text-left">
            <h2 className="font-sans text-2xl font-semibold mb-4">¿Qué sigue?</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Recibirás un correo de confirmación con los detalles de tu pedido</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Nuestro equipo preparará tu pedido cuidadosamente</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Te notificaremos cuando tu pedido sea enviado</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Tiempo estimado de entrega: 3-5 días hábiles</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="px-8 py-4 bg-primary text-primary-foreground font-sans text-lg hover:bg-secondary transition-all min-w-[220px] text-center"
            >
              Volver al inicio
            </a>
            <a
              href="/contacto"
              className="px-8 py-4 border-2 border-primary text-primary font-sans text-lg hover:bg-primary hover:text-primary-foreground transition-all min-w-[220px] text-center"
            >
              Contactar soporte
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
