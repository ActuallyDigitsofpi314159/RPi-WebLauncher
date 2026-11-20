const LOCAL_PREVIEW = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
const CDN_REVISION = window.RPI_CDN_REVISION || 'main';
const CDN_BASE = LOCAL_PREVIEW
  ? new URL('.', window.location.href).href
  : `https://cdn.jsdelivr.net/gh/ActuallyDigitsofpi314159/RPi-WebLauncher@${CDN_REVISION}/`;
const CACHE_BUST = CDN_REVISION.slice(0, 7);
const cdn = path => `${CDN_BASE}${path}${LOCAL_PREVIEW ? '' : `?v=${CACHE_BUST}`}`;
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
    title: "GPT Luna",
    category: "Apps",
    rating: 10,
    verdict: "Requires an API key.",
    description: "Chat with GPT-6 Luna using your OpenAI API key.",
    image: cdn("assets/dumbLLM.png"),
    file: program("games/gptLuna.html"),
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
    rating: 4,
    verdict: "Kinda slow.",
    description: "A charming 3D platformer with a hopeful theme.",
    image: cdn("assets/pathOfLightIcon.png"),
    file: program("games/pathOfLight.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "DASH Parkour",
    category: "Engaging",
    rating: 6,
    verdict: "Runs well.",
    description: "A little passion project of ours",
    image: cdn("assets/dash-parkour-logo.png"),
    file: program("games/dashparkour.html"),
    credit: "Digitsofpi314159 & Kineto"
  },

  {
    title: "Tetris DX",
    category: "Puzzle",
    rating: 10,
    verdict: "Runs beautifully.",
    description: "Tetris DX, running in an offline Game Boy Color emulator.",
    image: cdn("assets/tetrisDX.png"),
    file: program("games/tetrisDX.html"),
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
    rating: 10,
    verdict: "Runs beautifully",
    description: "The boring old game with decent UI.",
    image: cdn("assets/minesweeper.svg"),
    file: program("games/minesweeper.html"),
    credit: "Digitsofpi314159 & Kineto"
  }
];

function webPortIcon(title) {
  const words = title.replace(/[^a-z0-9 ]/gi, " ").trim().split(/\s+/);
  const initials = (words.length > 1
    ? words.slice(0, 2).map(word => word[0]).join("")
    : title.slice(0, 2)).toUpperCase();
  const hue = Array.from(title).reduce((total, character) => total + character.charCodeAt(0), 0) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue} 72% 54%)"/><stop offset="1" stop-color="hsl(${(hue + 55) % 360} 65% 24%)"/></linearGradient></defs><rect width="320" height="320" rx="38" fill="url(#g)"/><circle cx="160" cy="142" r="94" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="2"/><text x="160" y="169" fill="#fff" font-family="system-ui,sans-serif" font-size="82" font-weight="800" text-anchor="middle">${initials}</text><path d="M56 255h208" stroke="#fff" stroke-opacity=".3" stroke-width="5" stroke-linecap="round"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const WEB_PORTS = [
  { repo: "hollow-knight-silksong", branch: "master", title: "Hollow Knight: Silksong", rating: 5, description: "Explore a hand-drawn kingdom in this 2D action platformer." },
  { repo: "cuphead", title: "Cuphead", rating: 5, description: "A run-and-gun adventure with animated boss battles." },
  { repo: "hollow-knight", title: "Hollow Knight", rating: 7, description: "Explore a vast underground kingdom in this 2D action adventure." },
  { repo: "granny", title: "Granny (Web-Ports)", rating: 2, description: "Escape a house while avoiding its pursuer. Large download; demanding on memory." },
  { repo: "celeste", title: "Celeste", rating: 7, description: "Climb a mountain in a precision-focused 2D platformer." },
  { repo: "jsab", title: "Just Shapes and Beats", rating: 6, description: "Dodge rhythm-synced hazards in a music-driven arcade game." },
  { repo: "tabs", title: "Totally Accurate Battle Simulator", rating: 3, description: "Build wobbly armies and watch physics-driven battles unfold." },
  { repo: "geometry-dash", title: "Geometry Dash", rating: 7, description: "A rhythm platformer built around precise jumps and timing." },
  { repo: "ac-gamecube", title: "Animal Crossing (GameCube)", rating: 4, description: "A life-simulation game running through a browser port." },
  { repo: "20-minutes", title: "20 Minutes", rating: 7, description: "Survive waves of enemies in a fast-paced top-down roguelite." },
  { repo: "terraria", title: "Terraria", rating: 3, description: "Explore, build, and fight in a large 2D sandbox. Expect a substantial download." },
  { repo: "spaceflight-simulator", title: "Spaceflight Simulator", rating: 4, description: "Design spacecraft and explore a physics-based solar system." },
  { repo: "untitled-goose-game", title: "Untitled Goose Game", rating: 5, description: "Cause mischief as a goose in a small sandbox adventure." },
  { repo: "dumb-ways-to-die", title: "Dumb Ways to Die", rating: 8, description: "A collection of quick, reaction-based arcade minigames." },
  { repo: "flying-gorilla", title: "Flying Gorilla", rating: 5, description: "Fly through an obstacle course in this arcade game." },
  { repo: "bendy-and-the-ink-machine", title: "Bendy and the Ink Machine", rating: 3, description: "Explore an atmospheric first-person puzzle adventure." },
  { repo: "baldi-mods", path: "t3/index.html", title: "Baldi Mods: T3", rating: 4, description: "A Baldi-themed Unity browser game. High memory and graphics load.", creditLabel: "web-ports / baldi-mods" },
  { repo: "baldi-mods", path: "-3/index.html", title: "Baldi Mods: -3", rating: 3, description: "A Baldi-themed Unity browser game. High memory and graphics load.", creditLabel: "web-ports / baldi-mods" },
  { repo: "baldi-mods", path: "-b/index.html", title: "Baldi Mods: -B", rating: 4, description: "A Baldi-themed Unity browser game. High memory and graphics load.", creditLabel: "web-ports / baldi-mods" },
  { repo: "la-madriguera", title: "La Madriguera", rating: 7, description: "A compact browser game from the Web-Ports catalog." },
  { repo: "srb2", title: "Sonic Robo Blast 2", rating: 5, description: "A fast 3D platform game featuring Sonic and friends." },
  { repo: "pvz", title: "Plants vs. Zombies", rating: 7, description: "Defend your garden in this classic lane-based strategy game." },
  { repo: "granny-2", title: "Granny 2", rating: 2, description: "A tense escape game with a large Unity download and high memory use." },
  { repo: "slime-ranchers", title: "Slime Rancher", rating: 3, description: "Collect and care for slimes in a colorful 3D ranching adventure." },
  { repo: "in-stars-and-time", title: "In Stars and Time", rating: 6, description: "A time-looping role-playing adventure." },
  { repo: "adgac", title: "ADGAC", rating: 5, description: "A browser game from the Web-Ports catalog." },
  { repo: "raldi", title: "Raldi", rating: 5, description: "A fast-paced browser game from the Web-Ports catalog." },
  { repo: "fish", title: "Fish", rating: 7, description: "A small, lightweight browser game." },
  { repo: "garten-of-banban", title: "Garten of Banban", rating: 4, description: "Explore a colorful first-person adventure. 3D rendering may be demanding." },
  { repo: "fnac", path: "1/index.html", title: "Five Nights at Candy's 1", rating: 5, description: "A point-and-click survival game. Initial download can be large.", creditLabel: "web-ports / fnac" },
  { repo: "fnac", path: "2/index.html", title: "Five Nights at Candy's 2", rating: 5, description: "A point-and-click survival game. Initial download can be large.", creditLabel: "web-ports / fnac" },
  { repo: "fnac", path: "3/index.html", title: "Five Nights at Candy's 3", rating: 5, description: "A point-and-click survival game. Initial download can be large.", creditLabel: "web-ports / fnac" },
  { repo: "fnaf-world-refreshed", title: "FNaF World Refreshed", rating: 6, description: "A colorful role-playing adventure with turn-based battles." },
  { repo: "clover-pit", title: "CloverPit", rating: 5, description: "A luck-driven roguelite built around a strange slot machine." },
  { repo: "duck-8", title: "Duck 8", rating: 7, description: "A compact arcade game from the Web-Ports catalog." },
  { repo: "antonblast", title: "Antonblast", rating: 5, description: "A fast, explosive 2D action platformer." },
  { repo: "lethal-ape", title: "Lethal Ape", rating: 4, description: "A 3D browser port with a heavier graphics workload." },
  { repo: "peaks-of-yore", title: "Peaks of Yore", rating: 4, description: "Climb challenging mountain routes in a 3D adventure." },
  { repo: "jumbo-mario", title: "Jumbo Mario", rating: 5, description: "A browser platforming adventure featuring Mario." },
  { repo: "yomi-hustle", title: "Your Only Move Is HUSTLE", rating: 7, description: "A turn-based, physics-driven fighting game." },
  { repo: "gorilla-tag", title: "Gorilla Tag", rating: 2, description: "A 3D movement game. Large download; demanding on memory and graphics.", creditLabel: "web-ports / gorilla-tag" },
  { repo: "the-joy-of-creation-story-mode", title: "The Joy of Creation: Story Mode", rating: 2, description: "A demanding first-person 3D horror game with a large download." },
  { repo: "scoutdingo", title: "Scoutdingo", rating: 5, description: "A browser game from the Web-Ports catalog." },
  { repo: "sugary-spire-pizzano", title: "Sugary Spire: Pizzano's Awesome Night", rating: 5, description: "A colorful 2D platforming adventure." },
  { repo: "gash", title: "Gabriel's Awesome Schoolhouse", rating: 5, description: "A school-themed browser game from the Web-Ports catalog." },
  { repo: "mindwave", title: "Mindwave", rating: 6, description: "A browser game from the Web-Ports catalog." },
  { repo: "power-hover", title: "Power Hover", rating: 5, description: "Race through a colorful 3D hoverboard adventure." },
  { repo: "buster-jam", title: "Buster Jam", rating: 6, description: "A browser game from the Web-Ports catalog." },
  { repo: "fnaf-into-the-pit", title: "Five Nights at Freddy's: Into the Pit", rating: 5, description: "A 2D adventure with a detailed pixel-art world." },
  { repo: "pet-the-cat", title: "Pet the Cat", rating: 8, description: "A small, lightweight browser game." },
  { repo: "talking-hippo", title: "Talking Hippo", rating: 7, description: "A casual browser game." },
  { repo: "countryballsdictator", title: "Countryballs Dictator", rating: 6, description: "A strategy game from the Web-Ports catalog." }
];

const WEB_PORT_ICONS = {
  "hollow-knight-silksong": "TemplateData/favicon.ico",
  "hollow-knight": "TemplateData/favicon.ico",
  granny: "TemplateData/favicon.ico",
  celeste: "assets/app.ico",
  jsab: "TemplateData/favicon.ico",
  "20-minutes": "TemplateData/favicon.ico",
  "spaceflight-simulator": "TemplateData/favicon.ico",
  "untitled-goose-game": "TemplateData/favicon.ico",
  "flying-gorilla": "TemplateData/favicon.ico",
  "bendy-and-the-ink-machine": "TemplateData/favicon.ico",
  "la-madriguera": "TemplateData/favicon.ico",
  "granny-2": "TemplateData/favicon.ico",
  "slime-ranchers": "TemplateData/favicon.ico",
  "in-stars-and-time": "icon/icon.png",
  raldi: "TemplateData/favicon.ico",
  fish: "TemplateData/favicon.ico",
  "clover-pit": "TemplateData/favicon.ico",
  "peaks-of-yore": "TemplateData/favicon.ico",
  "yomi-hustle": "index.icon.png",
  scoutdingo: "favicon.png",
  gash: "TemplateData/favicon.ico",
  "power-hover": "TemplateData/favicon.ico",
  "talking-hippo": "TemplateData/favicon.ico"
};

const WEB_PORT_ICON_URLS = {
  terraria: "https://terraria.mercurywork.shop/app.webp"
};

WEB_PORTS.forEach(game => {
  const repoUrl = `https://github.com/web-ports/${game.repo}`;
  const file = game.path || "index.html";
  const branch = game.branch || "main";
  const iconPath = WEB_PORT_ICONS[game.repo];
  const iconUrl = WEB_PORT_ICON_URLS[game.repo];
  const fallbackIcon = webPortIcon(game.title);
  GAMES.push({
    title: game.title,
    category: "Engaging",
    rating: game.rating,
    verdict: game.rating <= 3 ? "Estimate: demanding" : game.rating <= 6 ? "Estimate: moderate" : "Estimate: light",
    description: game.description,
    image: iconUrl || (iconPath ? `https://cdn.jsdelivr.net/gh/web-ports/${game.repo}@${branch}/${iconPath}` : fallbackIcon),
    imageFallback: fallbackIcon,
    file: `https://rawcdn.githack.com/web-ports/${game.repo}/${branch}/${file}`,
    credit: game.creditLabel || "web-ports",
    creditUrl: repoUrl
  });
});
