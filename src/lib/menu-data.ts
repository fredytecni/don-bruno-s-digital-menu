import hamburguesaClasica from "@/assets/menu/hamburguesa-clasica.jpg";
import hamburguesaDoble from "@/assets/menu/hamburguesa-doble.jpg";
import hamburguesaBbq from "@/assets/menu/hamburguesa-bbq.jpg";
import hamburguesaEspecial from "@/assets/menu/hamburguesa-especial.jpg";
import perroClasico from "@/assets/menu/perro-clasico.jpg";
import perroCargado from "@/assets/menu/perro-cargado.jpg";
import perroEspecial from "@/assets/menu/perro-especial.jpg";
import costillasBbq from "@/assets/menu/costillas-bbq.jpg";
import costillasPapas from "@/assets/menu/costillas-papas.jpg";
import picadaFamiliar from "@/assets/menu/picada-familiar.jpg";
import mixtoBruno from "@/assets/menu/mixto-bruno.jpg";
import picadaDos from "@/assets/menu/picada-dos.jpg";
import alas6 from "@/assets/menu/alas-6.jpg";
import alas12 from "@/assets/menu/alas-12.jpg";
import chorizo1 from "@/assets/menu/chorizo-1.jpg";
import chorizo3 from "@/assets/menu/chorizo-3.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export const categories = [
  { id: "hamburguesas", name: "🍔 Hamburguesas", emoji: "🍔" },
  { id: "perros", name: "🌭 Perros Americanos", emoji: "🌭" },
  { id: "costillas", name: "🍖 Costillas BBQ", emoji: "🍖" },
  { id: "picadas", name: "🥘 Picadas y Mixtos", emoji: "🥘" },
  { id: "alas", name: "🍗 Alas Rellenas", emoji: "🍗" },
  { id: "chorizos", name: "🌶️ Chorizos Artesanales", emoji: "🌶️" },
];

export const menuItems: MenuItem[] = [
  // Hamburguesas
  { id: "h1", name: "Hamburguesa Clásica", description: "Carne de res, queso, lechuga, tomate y salsas", price: 10000, category: "hamburguesas", emoji: "🍔", image: hamburguesaClasica },
  { id: "h2", name: "Hamburguesa Doble", description: "Doble carne, doble queso, cebolla caramelizada", price: 12000, category: "hamburguesas", emoji: "🍔", image: hamburguesaDoble },
  { id: "h3", name: "Hamburguesa BBQ", description: "Carne, tocineta, salsa BBQ, aros de cebolla", price: 12000, category: "hamburguesas", emoji: "🍔", image: hamburguesaBbq },
  { id: "h4", name: "Hamburguesa Especial Don Bruno", description: "La receta secreta de la casa con todo", price: 12000, category: "hamburguesas", emoji: "🍔", image: hamburguesaEspecial },

  // Perros
  { id: "p1", name: "Perro Americano Clásico", description: "Salchicha premium, salsas, papitas y queso", price: 10000, category: "perros", emoji: "🌭", image: perroClasico },
  { id: "p2", name: "Perro Super Cargado", description: "Doble salchicha, tocineta, queso derretido", price: 12000, category: "perros", emoji: "🌭", image: perroCargado },
  { id: "p3", name: "Perro Don Bruno", description: "El favorito de la casa con todos los toppings", price: 12000, category: "perros", emoji: "🌭", image: perroEspecial },

  // Costillas
  { id: "c1", name: "Costillas BBQ", description: "Costillas de cerdo bañadas en salsa BBQ artesanal", price: 20000, category: "costillas", emoji: "🍖", image: costillasBbq },
  { id: "c2", name: "Costillas BBQ con Papas", description: "Costillas BBQ acompañadas de papas a la francesa", price: 22000, category: "costillas", emoji: "🍖", image: costillasPapas },

  // Picadas y Mixtos
  { id: "m1", name: "Picada Familiar", description: "Surtido de carnes, papas, arepas y salsas", price: 22000, category: "picadas", emoji: "🥘", image: picadaFamiliar },
  { id: "m2", name: "Mixto Don Bruno", description: "Hamburguesa + perro + alitas + papas", price: 20000, category: "picadas", emoji: "🥘", image: mixtoBruno },
  { id: "m3", name: "Picada para Dos", description: "Porción para 2 personas con variedad de carnes", price: 20000, category: "picadas", emoji: "🥘", image: picadaDos },

  // Alas
  { id: "a1", name: "Alas Rellenas x6", description: "6 alitas rellenas de queso con salsa especial", price: 15000, category: "alas", emoji: "🍗", image: alas6 },
  { id: "a2", name: "Alas Rellenas x12", description: "12 alitas rellenas de queso con salsa especial", price: 25000, category: "alas", emoji: "🍗", image: alas12 },

  // Chorizos
  { id: "ch1", name: "Chorizo Artesanal", description: "Chorizo artesanal a la parrilla con arepa", price: 8000, category: "chorizos", emoji: "🌶️", image: chorizo1 },
  { id: "ch2", name: "Combo Chorizos x3", description: "3 chorizos artesanales con arepa y papas", price: 20000, category: "chorizos", emoji: "🌶️", image: chorizo3 },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);
}
