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
    verdict: "Unstable and slow.",
    description: "Minecraft from 2017, running in your browser.",
    image: cdn("assets/eaglercraftIcon.png"),
    file: program("games/eaglercraft.html"),
    credit: "PlanetDoge"
  },

  {
    title: "dumbLLM",
    category: "Apps",
    rating: 5,
    verdict: "Performance varies.",
    description: "Run AI models, even on limited hardware.",
    image: cdn("assets/dumbLLM.png"),
    file: program("games/dumLLM.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "GUST",
    category: "Apps",
    rating: 5,
    verdict: "Performance varies.",
    description: "A mostly functional browser inside a browser.",
    image: cdn("assets/GUST-logo.png"),
    file: program("games/GUST.html"),
    credit: "Nautilus Labs"
  },

  {
    title: "Granny",
    category: "Engaging",
    rating: 8,
    verdict: "Can get your computer hot.",
    description: "A tense browser horror classic.",
    image: cdn("assets/granny-logo.webp"),
    file: program("games/granny.html"),
    credit: "bubbls"
  },

  {
    title: "Basketball Legends",
    category: "Engaging",
    rating: 10,
    verdict: "Runs flawlessly.",
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
    description: "A simple but fun 3D platformer.",
    image: cdn("assets/genericPlatformer3dIcon.png"),
    file: program("games/genericPlatformer.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Donkey Khan",
    category: "Engaging",
    rating: 6,
    verdict: "Runs alright.",
    description: "Donkey Kong, with a laser cannon.",
    image: cdn("assets/donkeyKhanIcon.png"),
    file: program("games/donkeyKhan.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Path of Light",
    category: "Engaging",
    rating: 7.5,
    verdict: "Runs great!",
    description: "A charming 3D platformer with a hopeful theme.",
    image: cdn("assets/pathOfLightIcon.png"),
    file: program("games/pathOfLight.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Karlson",
    category: "Engaging",
    rating: 8.5,
    verdict: "Tune settings if slow.",
    description: "A fast, chaotic, and hilarious FPS.",
    image: cdn("assets/KarlsonIcon.png"),
    file: program("games/karlson.html"),
    credit: "Dat"
  },

  {
    title: "Bee Swarm Simulator",
    category: "Engaging",
    rating: 8.5,
    verdict: "Tune settings if slow.",
    description: "A fun and relaxing game about growing a swarm of bees.",
    image: cdn("assets/beeSwarmSimulatorIcon.png"),
    file: program("games/beeSwarmSimulator.html"),
    credit: "Dat"
  },

  {
    title: "Minesweeper",
    category: "Puzzle",
    rating: 9,
    verdict: "Runs beautifully",
    description: "The boring old game with decent UI.",
    image: cdn("assets/minesweeper.svg"),
    file: program("games/minesweeper.html"),
    credit: "Digitsofpi314159 & Kineto"
  }
];
