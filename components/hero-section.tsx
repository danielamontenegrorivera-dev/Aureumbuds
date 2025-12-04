"use client"

import { useState } from "react"
import { products } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function HeroSection() {
  const [showDesign, setShowDesign] = useState(false)

  const handleDiscoverMore = () => {
    setShowDesign(true)
  }

  if (showDesign) {
    return <ProductShowcaseSection />
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pattern-overlay pt-16">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/document_4981365978286786417-NWWTtVVz6at2t4Z0T9VXtKLcGmyidx.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="/images/imagen-2025-12-03-220217510-removebg-preview.png"
            alt="Aureum Buds"
            className="h-32 sm:h-40 md:h-48"
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          {
            "Donde la elegancia se encuentra con la innovación. Experimenta el sonido refinado que redefine el lujo auditivo."
          }
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDiscoverMore}
            className="px-8 py-4 bg-primary text-primary-foreground font-sans text-lg hover:bg-secondary transition-all duration-300 min-w-[200px]"
          >
            Descubrir más
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductShowcaseSection() {
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState<string[]>([])

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId)
    if (product) {
      addToCart(product)
      setAddedToCart([...addedToCart, productId])
      setTimeout(() => {
        setAddedToCart(addedToCart.filter((id) => id !== productId))
      }, 2000)
    }
  }

  return (
    <section className="min-h-screen bg-background pt-16">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-balance mb-8 text-foreground">
            Nuestra
            <br />
            <span className="text-primary italic">Colección</span>
          </h2>

          <p className="text-xl text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Descubre los audífonos que van a redefinir tu experiencia auditiva. Diseño premium, tecnología de
            vanguardia.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {products.map((product) => (
              <div key={product.id} className="bg-muted/30 rounded-lg p-8 hover:bg-muted/50 transition-all">
                <div className="mb-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-primary mb-4">{product.name}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">{product.description}</p>
                <div className="mb-6">
                  {product.originalPrice ? (
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-2xl font-sans line-through text-foreground/40">${product.originalPrice} USD</p>
                      <p className="text-3xl font-sans font-semibold text-primary">${product.price} USD</p>
                    </div>
                  ) : (
                    <p className="text-3xl font-sans font-semibold">${product.price} USD</p>
                  )}
                </div>
                <Button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full bg-primary hover:bg-secondary text-primary-foreground font-sans text-lg py-6"
                  disabled={addedToCart.includes(product.id)}
                >
                  {addedToCart.includes(product.id) ? (
                    <>
                      <Check className="mr-2 h-5 w-5" /> Agregado al carrito
                    </>
                  ) : (
                    "Agregar al carrito"
                  )}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/carrito"
              className="px-10 py-4 bg-primary text-primary-foreground font-sans text-lg hover:bg-secondary transition-all duration-300 min-w-[220px] text-center"
            >
              Ver carrito
            </a>
            <a
              href="/contacto"
              className="px-10 py-4 border-2 border-primary text-primary font-sans text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[220px] text-center"
            >
              Contactar ventas
            </a>
          </div>
        </div>
      </div>

      <div className="py-12 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-primary hover:text-secondary transition-colors font-sans"
        >
          ← Volver al inicio
        </button>
      </div>
    </section>
  )
}
