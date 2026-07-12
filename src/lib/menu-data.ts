import costillasAsset from "@/assets/menu-real/costillas.jpg.asset.json";
import chorizoAsset from "@/assets/menu-real/chorizo.jpg.asset.json";
import perroAsset from "@/assets/menu-real/perro-americano.jpg.asset.json";
import hamburguesaAsset from "@/assets/menu-real/hamburguesa.jpg.asset.json";
import picadaAsset from "@/assets/menu-real/picada.jpg.asset.json";
import alaRellenaAsset from "@/assets/menu-real/ala-rellena.jpg.asset.json";
import muchachoAsset from "@/assets/menu-real/muchacho-relleno.jpg.asset.json";
import pavoAsset from "@/assets/menu-real/pavo-relleno.jpg.asset.json";
import pernilAsset from "@/assets/menu-real/pernil-cerdo.jpg.asset.json";
import choriperrosAsset from "@/assets/menu-real/choriperros.jpg.asset.json";

const costillas = costillasAsset.url;
const chorizo = chorizoAsset.url;
const perroAmericano = perroAsset.url;
const hamburguesa = hamburguesaAsset.url;
const picada = picadaAsset.url;
const alaRellena = alaRellenaAsset.url;
const muchachoRelleno = muchachoAsset.url;
const pavoRelleno = pavoAsset.url;
const pernilCerdo = pernilAsset.url;
const choriperros = choriperrosAsset.url;

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
  { id: "perros", name: "🌭 Perros y Choriperros", emoji: "🌭" },
  { id: "costillas", name: "🍖 Costillas de Cerdo", emoji: "🍖" },
  { id: "chorizos", name: "🌶️ Chorizo Artesanal", emoji: "🌶️" },
  { id: "especialidades", name: "⭐ Especialidades", emoji: "⭐" },
  { id: "especiales-libra", name: "🎄 Especiales por Libra", emoji: "🎄" },
  { id: "picadas", name: "🥘 Picadas", emoji: "🥘" },
];

export const menuItems: MenuItem[] = [
  // Hamburguesas
  {
    id: "h1",
    name: "Hamburguesa Artesanal Don Bruno",
    description: "Carne artesanal con tocineta y jamón, la receta de la casa",
    price: 12000,
    category: "hamburguesas",
    emoji: "🍔",
    image: hamburguesa,
  },

  // Perros
  {
    id: "p1",
    name: "Perro Americano con Tocineta",
    description: "Salchicha premium, tocineta crocante, salsas y toppings",
    price: 12000,
    category: "perros",
    emoji: "🌭",
    image: perroAmericano,
  },
  {
    id: "p2",
    name: "Choriperro",
    description: "Chorizo artesanal en pan estilo perro americano con toppings",
    price: 12000,
    category: "perros",
    emoji: "🌭",
    image: choriperros,
  },

  // Costillas
  {
    id: "c1",
    name: "Costillas de Cerdo con Papa Casco",
    description: "Costillas de cerdo acompañadas de papa casco",
    price: 20000,
    category: "costillas",
    emoji: "🍖",
    image: costillas,
  },
  {
    id: "c2",
    name: "Costillas de Cerdo con Papa Francesa",
    description: "Costillas de cerdo acompañadas de papa a la francesa",
    price: 22000,
    category: "costillas",
    emoji: "🍖",
    image: costillas,
  },

  // Chorizos
  {
    id: "ch1",
    name: "Chorizo Artesanal con Papa Casco",
    description: "Chorizo artesanal Don Bruno con papa casco",
    price: 7000,
    category: "chorizos",
    emoji: "🌶️",
    image: chorizo,
  },
  {
    id: "ch2",
    name: "Chorizo Artesanal con Papa Francesa",
    description: "Chorizo artesanal Don Bruno con papa a la francesa",
    price: 10000,
    category: "chorizos",
    emoji: "🌶️",
    image: chorizo,
  },

  // Especialidades
  {
    id: "e1",
    name: "Ala Rellena Artesanal de Don Bruno",
    description: "Ala rellena artesanal, receta especial de la casa",
    price: 10000,
    category: "especialidades",
    emoji: "⭐",
    image: alaRellena,
  },

  // Picadas
  {
    id: "m1",
    name: "Picada Don Bruno",
    description: "Chorizo artesanal, rellena artesanal, papa casco y guacamole de la casa",
    price: 15000,
    category: "picadas",
    emoji: "🥘",
    image: picada,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);
}
