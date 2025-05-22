import type { Game } from "../Tipos/Game";

export const ListaGames: Game[] = [
  {
    id: "1",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    titulo: "The Legend of Zelda: Breath of the Wild",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/zw47_q9wbBE",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.7,
    precio: 59.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "2",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    titulo: "Elden Ring",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/E3Huy2cdih0",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.6,
    precio: 59.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "3",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e1/God_of_War_Ragnarok_cover.jpg",
    titulo: "God of War: Ragnarok",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/EE-4GvjKcfs",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.5,
    precio: 69.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "4",
    image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    titulo: "Red Dead Redemption 2",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/eaW0tYpxyp0",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.5,
    precio: 39.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "5",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    titulo: "The Witcher 3: Wild Hunt",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/xt_65k-gvLw",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.4,
    precio: 29.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "6",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Hades_cover_art.jpg",
    titulo: "Hades",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/591V2F2XcVs",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.3,
    precio: 24.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "7",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
    titulo: "Super Mario Odyssey",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/5kcdRBHM7kM",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.3,
    precio: 59.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Aventura" },
    plataformas: [
      { id: 1, nombre: "Nintendo" }
    ],
    ventas: []
  },
  {
    id: "8",
    image: "https://upload.wikimedia.org/wikipedia/en/0/02/Persona_5_cover_art.jpg",
    titulo: "Persona 5 Royal",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/V6Ps1f_pEr8",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.2,
    precio: 49.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "RPG" },
    plataformas: [
      { id: 1, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "9",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Bloodborne_Cover_Wallpaper.jpg",
    titulo: "Bloodborne",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/G203e1HhixY",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.1,
    precio: 19.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Acción" },
    plataformas: [
      { id: 1, nombre: "PlayStation" }
    ],
    ventas: []
  },
  {
    id: "10",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    titulo: "Cyberpunk 2077 (2.0)",
    description: "Uno de los juegos mejor calificados por crítica y comunidad.",
    videoURL: "https://www.youtube.com/embed/FknHjl7eQ6o",
    detalleImagenes: [
      "https://i.imgur.com/ZK2GkRv.jpeg",
      "https://i.imgur.com/O5ZWuEi.jpeg",
      "https://i.imgur.com/kQ8lCga.jpeg"
    ],
    rating: 9.0,
    precio: 49.99,
    categoria_id: 1,
    esta_oferta: false,
    estado: true,
    categoria: { id: 1, nombre: "Mundo Abierto" },
    plataformas: [
      { id: 1, nombre: "PC" },
      { id: 2, nombre: "PlayStation" }
    ],
    ventas: []
  }
];
