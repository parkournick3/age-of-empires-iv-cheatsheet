export type Unit = {
  name: string;
  image: string;
  veryWeakAgainst: string[];
  weakAgainst: string[];
  strongAgainst: string[];
  veryStrongAgainst: string[];
};

export const units = [
  {
    name: "Cavalaria Pesada",
    image: "/images/cavalaria-pesada.jpg",
    veryWeakAgainst: ["Lanceiro"],
    weakAgainst: [],
    strongAgainst: ["Homem de Armas"],
    veryStrongAgainst: ["Arqueiro"],
  },
  {
    name: "Arqueiro",
    image: "/images/arqueiro.jpg",
    veryWeakAgainst: ["Cavalaria Pesada"],
    weakAgainst: ["Homem de Armas"],
    strongAgainst: [],
    veryStrongAgainst: ["Lanceiro"],
  },
  {
    name: "Lanceiro",
    image: "/images/lanceiro.jpg",
    veryWeakAgainst: ["Arqueiro", "Homem de Armas"],
    weakAgainst: [],
    strongAgainst: [],
    veryStrongAgainst: ["Cavalaria Pesada"],
  },
  {
    name: "Homem de Armas",
    image: "/images/homem-de-armas.jpg",
    veryWeakAgainst: [],
    weakAgainst: ["Cavalaria Pesada"],
    strongAgainst: ["Arqueiro"],
    veryStrongAgainst: ["Lanceiro"],
  },
];
