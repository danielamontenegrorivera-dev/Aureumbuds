"use client"

import { useCart } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CarritoPage() {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 text-primary italic">Carrito de compras</h1>
            <p className="text-xl text-foreground/70 mb-8">Tu carrito está vacío</p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-sans text-lg hover:bg-secondary transition-all"
            >
              Continuar comprando
            </a>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12 text-primary italic text-center">
            Carrito de compras
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-muted/30 rounded-lg p-6 flex gap-6">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-32 h-32 object-contain rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-foreground/70 mb-4 text-sm">{item.description}</p>
                    {item.originalPrice ? (
                      <div className="flex items-center gap-2">
                        <p className="text-lg line-through text-foreground/40">${item.originalPrice.toFixed(2)} USD</p>
                        <p className="text-2xl font-semibold text-primary">${item.price.toFixed(2)} USD</p>
                      </div>
                    ) : (
                      <p className="text-2xl font-semibold">${item.price.toFixed(2)} USD</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
                <h2 className="font-sans text-2xl font-semibold mb-6">Resumen del pedido</h2>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-foreground/70">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)} USD</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${getTotal().toFixed(2)} USD</span>
                  </div>
                </div>
                <a
                  href="/checkout"
                  className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-sans text-lg hover:bg-secondary transition-all"
                >
                  Proceder al pago
                </a>
                <a
                  href="/"
                  className="block w-full text-center px-6 py-3 mt-4 text-primary hover:text-secondary transition-colors font-sans"
                >
                  Continuar comprando
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
