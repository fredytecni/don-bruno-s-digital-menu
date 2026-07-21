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
    image: "/HAMBURGUESA DE CARNE ARTESANAL de DON BRUNO .jpg",
  },

  // Perros
  {
    id: "p1",
    name: "Perro Americano con Tocineta",
    description: "Salchicha premium, tocineta crocante, salsas y toppings",
    price: 12000,
    category: "perros",
    emoji: "🌭",
    image: "/PERRO AMERICANO con TOCINETA precio_$12.000.jpg",
  },
  {
    id: "p2",
    name: "Choriperro",
    description: "Chorizo artesanal en pan estilo perro americano con toppings",
    price: 12000,
    category: "perros",
    emoji: "🌭",
    image: "/Perros Americanos y Choriperros Artesanales.jpg",
  },

  // Costillas
  {
    id: "c1",
    name: "Costillas de Cerdo con Papa Casco",
    description: "Costillas de cerdo acompañadas de papa casco",
    price: 20000,
    category: "costillas",
    emoji: "🍖",
    image: "/COSTILLAS DE CERDO con papa casco a $20.000.jpg",
  },
  {
    id: "c2",
    name: "Costillas de Cerdo con Papa Francesa",
    description: "Costillas de cerdo acompañadas de papa a la francesa",
    price: 22000,
    category: "costillas",
    emoji: "🍖",
    image: "/COSTILLAS DE CERDO con papa casco a $20.000 (1).jpg",
  },

  // Chorizos
  {
    id: "ch1",
    name: "Chorizo Artesanal con Papa Casco",
    description: "Chorizo artesanal Don Bruno con papa casco",
    price: 7000,
    category: "chorizos",
    emoji: "🌶️",
    image: "/CHORIZO ARTESANAL de DON BRUNO con papa casco y guacamole_$7.000.jpg",
  },
  {
    id: "ch2",
    name: "Chorizo Artesanal con Papa Francesa",
    description: "Chorizo artesanal Don Bruno con papa a la francesa",
    price: 10000,
    category: "chorizos",
    emoji: "🌶️",
    image: "/CHORIZO ARTESANAL de DON BRUNO con papa casco y guacamole_$7.000.jpg",
  },

  // Especialidades
  {
    id: "e1",
    name: "Ala Rellena Artesanal de Don Bruno",
    description: "Ala rellena artesanal, receta especial de la casa",
    price: 10000,
    category: "especialidades",
    emoji: "⭐",
    image: "/ALA RELLENA artesanal de DON BRUNO precio_$10.000.jpg",
  },

  // Especiales por Libra (temporada / rellenos artesanales)
  {
    id: "l1",
    name: "Muchacho Relleno Artesanal",
    description: "Muchacho relleno artesanal, receta de la casa (precio por libra)",
    price: 50000,
    category: "especiales-libra",
    emoji: "🎄",
    image: "/Muchacho Relleno Artesanal $50.000 la libra_.jpg",
  },
  {
    id: "l2",
    name: "Pavo Relleno Artesanal de Don Bruno",
    description: "Pavo relleno artesanal, ideal para celebraciones (precio por libra)",
    price: 50000,
    category: "especiales-libra",
    emoji: "🦃",
    image: "/Pavo Relleno Artesanal de Don Bruno.jpg",
  },
  {
    id: "l3",
    name: "Pernil de Cerdo Artesanal",
    description: "Pernil de cerdo artesanal Don Bruno (precio por libra)",
    price: 50000,
    category: "especiales-libra",
    emoji: "🍖",
    image: "/Pernil de Cerdo Artesanal $50.000 la libra_.jpg",
  },

  // Picadas
  {
    id: "m1",
    name: "Picada Don Bruno",
    description: "Chorizo artesanal, rellena artesanal, papa casco y guacamole de la casa",
    price: 15000,
    category: "picadas",
    emoji: "🥘",
    image: "/Picada chorizo artesanal con rellena artesanal+ papa casco + guacamole de DON BRUNO precio_$15.000.jpg",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);
}