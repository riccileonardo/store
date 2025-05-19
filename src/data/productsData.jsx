export const productData = {
  id: 1,
  name: "Camiseta Básica Conforto Premium",
  price: 89.90,
  description: "Camiseta masculina em algodão premium com caimento confortável e toque macio.",
  colors: [
    {
      id: 1,
      name: "Preto",
      code: "#1A1A1A",
      images: [
        { id: 1, url: "/images/camisa-preta/frente.png", alt: "Camiseta preta - frente" },
        { id: 2, url: "/images/camisa-preta/verso.png", alt: "Camiseta preta - costas" },
      ]
    },
    {
      id: 2,
      name: "Branco",
      code: "#FFFFFF",
      images: [
        { id: 1, url: "/images/camisa-branca/frente.png", alt: "Camiseta branca - frente" },
        { id: 2, url: "/images/camisa-branca/verso.png", alt: "Camiseta branca - costas" },
      ]
    }
  ],
  sizes: [
    { id: 1, name: "P", available: true },
    { id: 2, name: "M", available: true },
    { id: 3, name: "G", available: true },
    { id: 4, name: "GG", available: true },
    { id: 5, name: "XG", available: false }
  ]
};
