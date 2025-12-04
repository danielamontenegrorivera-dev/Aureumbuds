"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const { cart } = useCart()

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img src="/images/imagen-2025-12-03-220217510-removebg-preview.png" alt="Aureum Buds" className="h-10" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-sans hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection("specs")}
              className="text-sm font-sans hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
            >
              Especificaciones
            </button>
            <a href="/sobre-nosotros" className="text-sm font-sans hover:text-primary transition-colors">
              Sobre nosotros
            </a>
            <a href="/contacto" className="text-sm font-sans hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/carrito" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </a>

            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-primary hover:bg-secondary text-primary-foreground font-sans"
            >
              Comprar ahora
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
