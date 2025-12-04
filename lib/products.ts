import type { Product } from "./cart-context"

export const products: Product[] = [
  {
    id: "earbuds-rose-gold",
    name: "Aureum Buds - Edición Limitada Rose Gold",
    price: 299,
    image: "/images/aureum-buds-rose-gold.png",
    description:
      "Audífonos inalámbricos con diseño elegante en tono rose gold. Conexión Bluetooth 5.0, duración de carga prolongada +20 horas y cancelación de ruido activa.",
  },
  {
    id: "headphones-white",
    name: "Aureum Audífonos Over-Ear",
    price: 266,
    originalPrice: 380,
    image: "/images/aureum-headphones-white.png",
    description:
      "Audífonos over-ear premium en color blanco elegante. 30% OFF en web. Diseño ergonómico con almohadillas de máximo confort y sonido de alta fidelidad.",
  },
]
