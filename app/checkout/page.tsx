"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getTotal, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    codigoPostal: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && cart.length === 0) {
      router.push("/carrito")
    }
  }, [mounted, cart.length, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const orderData = {
      items: cart,
      total: getTotal(),
      customerInfo: formData,
      date: new Date().toISOString(),
    }
    console.log("[v0] Order completed:", orderData)
    clearCart()
    router.push("/confirmacion")
  }

  if (!mounted || cart.length === 0) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12 text-primary italic text-center">
            Finalizar compra
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                <h2 className="font-sans text-2xl font-semibold mb-4">Información de contacto</h2>

                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@correo.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                <h2 className="font-sans text-2xl font-semibold mb-4">Dirección de envío</h2>

                <div className="space-y-2">
                  <Label htmlFor="direccion">Dirección *</Label>
                  <Input
                    id="direccion"
                    required
                    value={formData.direccion}
                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                    placeholder="Calle 123 #45-67"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                      placeholder="Bogotá"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="departamento">Departamento *</Label>
                    <Input
                      id="departamento"
                      required
                      value={formData.departamento}
                      onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
                      placeholder="Cundinamarca"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codigoPostal">Código postal</Label>
                  <Input
                    id="codigoPostal"
                    value={formData.codigoPostal}
                    onChange={(e) => setFormData({ ...formData, codigoPostal: e.target.value })}
                    placeholder="110111"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full py-6 text-lg bg-primary hover:bg-secondary">
                Finalizar compra
              </Button>
            </form>

            <div className="lg:col-span-1">
              <div className="bg-muted/30 rounded-lg p-6 sticky top-24">
                <h2 className="font-sans text-2xl font-semibold mb-6">Resumen del pedido</h2>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-sm text-foreground/70">Cantidad: {item.quantity}</p>
                        <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)} USD</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Subtotal</span>
                    <span className="font-semibold">${getTotal().toFixed(2)} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Envío</span>
                    <span className="font-semibold text-green-600">Gratis</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between text-xl font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${getTotal().toFixed(2)} USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
