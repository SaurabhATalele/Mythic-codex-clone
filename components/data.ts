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
  3: {
    color: "f4ff5b",
    image: "Jambvan.webp",
    descImg: "jambvanDesc.webp",
    name: "THE WISE KING OF BEARS",
    creatureName: "Jambvan",
    desc: "Journey through the vibrant tales of India, where Hindu mythology reigns supreme. Encounter Jambavan, the mighty bear king, and his pivotal role in the Ramayana. Explore his wisdom, strength, and unwavering loyalty amidst the vast and diverse collection of Hindu legends.",
    info: {
      origin: "Hindu Mythology",
      region: "India",
      symbols: "Strength Life Wisdom",
    },
  },
  4: {
    color: "01faff",
    image: "cannon.webp",
    descImg: "3.webp",
    name: "THE SEA'S ANCIENT MONSTER",
    creatureName: "Leviathan,",
    desc: "Navigate the ancient lands of Canaan, where myths and legends took root. Learn about the Leviathan, a colossal sea monster embodying chaos, and its significance in battles of order versus chaos, symbolizing the tumultuous nature of the cosmos in Canaanite lore.",
    info: {
      origin: "Canaan Mythology",
      region: "Near East",
      symbols: "Water Chaos Fear",
    },
  },
};

export default carouselData;
