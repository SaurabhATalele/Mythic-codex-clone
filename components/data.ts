type data = {
  [key: number]: {
    color: string;
    image: string;
    descImg: string;
    name: string;
    creatureName: string;
    desc: string;
    info: { origin: string; region: string; symbols: string };
  };
};

const carouselData: data = {
  0: {
    color: "FF9843",
    image: "phoenix.webp",
    descImg: "phoenixDesc.webp",
    name: "THE IMMORTAL FIREBIRD",
    creatureName: "Phoenix",
    desc: "The Phoenix, from Greek mythology, is a symbol of resilience, immortality, and renewal, embodying life's endless cycle.",
    info: {
      origin: "Greek Mythology",
      region: "Ancient Greece",
      symbols: "fire sun renewal",
    },
  },
  1: {
    color: "7B3D80",
    image: "kitsune.webp",
    descImg: "kitsuneDesc.webp",
    creatureName: "Kitsune",
    desc: "Kitsune, from Japanese folklore, is a magical fox known for intelligence, trickery, and enchanting shape-shifting abilities. Playing a pivotal role in many mystical tales.",
    name: "THE ENCHANTING FOX SPIRIT",
    info: {
      origin: "Japanese Mythology",
      region: "Japan",
      symbols: "Magic Fire Intelligence",
    },
  },
  2: {
    color: "43766C",
    image: "quetzalcoatl.webp",
    descImg: "quetzalcoatlDesc.webp",
    name: "THE FEATHERED SERPANT",
    creatureName: "Quetzalcoatl",
    desc: "Quetzalcoatl, in Mesoamerican mythology, is a feathered-serpent deity associated with wind and learning, revered by civilizations like the Aztecs and the Toltecs.",
    info: {
      origin: "Aztec Mythology",
      region: "Teotihucan",
      symbols: "Wind Water Wisdom",
    },
  },
};

export default carouselData;
