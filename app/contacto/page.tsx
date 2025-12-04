"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Contacto() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-4">¿CÓMO PODEMOS AYUDARTE?</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              BRINDANOS ALGUNA INFORMACIÓN Y LE PRESENTAREMOS LA SOLUCIÓN RECOMENDADA.
            </p>
          </div>

          {/* Barra de búsqueda */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Escribe el nombre del producto o el tema"
                className="w-full px-6 py-4 bg-card border-b-2 border-primary text-foreground placeholder:text-foreground/50 text-lg focus:outline-none focus:border-secondary"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Sección de soporte */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
            <SupportCard icon={<MicIcon />} title="Guía de ajuste de los audífonos intrauditivos" />
            <SupportCard icon={<BluetoothIcon />} title="Guía de emparejamiento Bluetooth" />
            <SupportCard icon={<BulbIcon />} title="Soporte línea Profesional" />
            <SupportCard icon={<EditIcon />} title="Registro de producto" />
            <SupportCard icon={<RefreshIcon />} title="Guía de restablecimiento/Reseteo" />
            <SupportCard icon={<HeadphoneIcon />} title="Guía de soporte para Audífonos" />
            <SupportCard icon={<TruckIcon />} title="Estado del pedido" />
          </div>

          {/* Información de contacto */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-medium mb-4 text-primary">Contáctanos</h2>
            <p className="text-lg text-foreground/80 mb-6">Centro de soporte al cliente de Aureum Buds</p>
            <div className="space-y-3 text-foreground/70">
              <p>Email: soporte@aureumbuds.com</p>
              <p>Teléfono: +1 (800) AUREUM-1</p>
              <p>Horario: Lunes a Viernes, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

function SupportCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="bg-card border border-border p-6 hover:border-primary transition-all duration-300 cursor-pointer group">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-sm font-sans leading-tight text-foreground/80 group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  )
}

// Icons
function MicIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  )
}

function BluetoothIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z" />
    </svg>
  )
}

function BulbIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
    </svg>
  )
}

function HeadphoneIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5zm1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5 1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-5l-3-4z" />
    </svg>
  )
}
