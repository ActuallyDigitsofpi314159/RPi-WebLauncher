const CDN_REVISION = window.RPI_CDN_REVISION || 'main';
const CDN_BASE = `https://cdn.jsdelivr.net/gh/ActuallyDigitsofpi314159/RPi-WebLauncher@${CDN_REVISION}/`;
const CACHE_BUST = CDN_REVISION.slice(0, 7);
const cdn = path => `${CDN_BASE}${path}?v=${CACHE_BUST}`;
const program = path => `${CDN_BASE}${path}`;

const GAMES = [
  {
    title: "Super Mario 64",
    category: "Engaging",
    rating: 9.5,
    verdict: "Runs beautifully.",
    description: "A beloved 3D platforming classic in your browser.",
    image: cdn("assets/mario64icon.jpg"),
    file: program("games/mario64.html"),
    credit: "ArkShocer"
  },

  {
    title: "Eaglercraft",
    category: "Engaging",
    rating: 2,
    verdict: "Notably slow.",
    description: "A blocky browser adventure with a big world.",
    image: cdn("assets/eaglercraftIcon.png"),
    file: program("games/eaglercraft.html"),
    credit: "PlanetDoge"
  },

  {
    title: "dumbLLM",
    category: "Apps",
    rating: 5,
    verdict: "Performance varies.",
    description: "A playful local AI experiment made for the launcher.",
    image: cdn("assets/dumbLLM.png"),
    file: program("games/dumLLM.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "GUST",
    category: "Apps",
    rating: 5,
    verdict: "Performance varies.",
    description: "A browser inside a browser, made for curious tabs.",
    image: cdn("assets/GUST-logo.png"),
    file: program("games/GUST.html"),
    credit: "Nautilus Labs"
  },

  {
    title: "Granny",
    category: "Engaging",
    rating: 8,
    verdict: "Runs great!",
    description: "A tense browser horror classic.",
    image: cdn("assets/granny-logo.webp"),
    file: program("games/granny.html"),
    credit: "bubbls"
  },

  {
    title: "Basketball Legends",
    category: "Engaging",
    rating: 10,
    verdict: "Runs prefectly.",
    description: "A full-court browser game; may be demanding on some devices.",
    image: cdn("assets/basketballLegendsIcon.png"),
    file: program("games/basketballLegends.html"),
    credit: "faralong"
  },

  {
    title: "Generic Platformer",
    category: "Engaging",
    rating: 8,
    verdict: "Runs great!",
    description: "A small platforming experiment.",
    image: cdn("assets/genericPlatformer3dIcon.png"),
    file: program("games/genericPlatformer.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Donkey Khan",
    category: "Engaging",
    rating: 6,
    verdict: "Runs alright.",
    description: "A tiny arcade throwback.",
    image: cdn("assets/donkeyKhanIcon.png"),
    file: program("games/donkeyKhan.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Path of Light",
    category: "Engaging",
    rating: 7.5,
    verdict: "Runs great!",
    description: "Find the way through a quiet little puzzle.",
    image: cdn("assets/pathOfLightIcon.png"),
    file: program("games/pathOfLight.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Karlson",
    category: "Engaging",
    rating: 8.5,
    verdict: "Tune settings if slow.",
    description: "A fast, chaotic browser FPS experience.",
    image: cdn("assets/KarlsonIcon.png"),
    file: program("games/karlson.html"),
    credit: "Dat"
  },

  {
    title: "Bee Swarm Simulator",
    category: "Engaging",
    rating: 8.5,
    verdict: "Tune settings if slow.",
    description: "Build your hive, gather pollen, and grow your swarm.",
    image: cdn("assets/beeSwarmSimulatorIcon.png"),
    file: program("games/beeSwarmSimulator.html"),
    credit: "Dat"
  },

  {
    title: "Minesweeper",
    category: "Puzzle",
    rating: 9,
    verdict: "Runs beautifully",
    description: "A modern, animated take on the classic mine-clearing puzzle.",
    image: cdn("assets/minesweeper.svg"),
    file: program("games/minesweeper.html"),
    credit: "Digitsofpi314159 & Kineto"
  }
];
