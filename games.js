/* This catalog is CDN-ready so a copied index.html can still launch every program. */
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/ActuallyDigitsofpi314159/RPi-WebLauncher@main/';
const cdn = path => `${CDN_BASE}${path}`;
const CREDITS_URL = `${cdn('credits.html')}?v=20260801-2`;

const GAMES = [
  { title: 'Super Mario 64', category: 'Engaging', rating: 9.5, verdict: 'Runs beautifully', description: 'A beloved 3D platforming classic in your browser.', image: cdn('assets/mario64icon.jpg'), file: cdn('games/mario64.html'), creditName: 'ArkShocer', creditUrl: CREDITS_URL },
  { title: 'Eaglercraft', category: 'Engaging', rating: 2.0, verdict: 'Performance warning', description: 'A blocky browser adventure with a big world.', image: cdn('assets/eaglercraftIcon.png'), file: cdn('games/eaglercraft.html'), creditName: 'PlanetDoge', creditUrl: CREDITS_URL, warning: true },
  { title: 'dumbLLM', category: 'Apps', rating: 5.0, verdict: 'Performance varies', description: 'A playful local AI experiment made for the launcher.', image: cdn('assets/dumbLLM.png'), file: cdn('games/dumLLM.html'), creditName: 'Digitsofpi314159 & Kineto', creditUrl: CREDITS_URL },
  { title: 'GUST', category: 'Apps', rating: 8.6, verdict: 'Runs great!', description: 'A browser inside a browser, made for curious tabs.', image: cdn('assets/GUST-logo.png'), file: cdn('games/GUST.html'), creditName: 'Nautilus Labs', creditUrl: CREDITS_URL },
  { title: 'Granny', category: 'Engaging', rating: 8.0, verdict: 'Runs great!', description: 'A tense browser horror classic.', image: cdn('assets/granny-logo.webp'), file: cdn('games/granny.html'), creditName: 'bubbls', creditUrl: CREDITS_URL },
  { title: 'Basketball Legends', category: 'Engaging', rating: 10.0, verdict: 'Performance warning', description: 'A full-court browser game; may be demanding on some devices.', image: cdn('assets/basketballLegendsIcon.png'), file: cdn('games/basketballLegends.html'), creditName: 'faralong', creditUrl: CREDITS_URL, warning: true },
  { title: 'Generic Platformer', category: 'Engaging', rating: 7.0, verdict: 'Runs great!', description: 'A small platforming experiment.', image: cdn('assets/genericPlatformer3dIcon.png'), file: cdn('games/genericPlatformer.html'), creditName: 'Digitsofpi314159 & Kineto', creditUrl: CREDITS_URL },
  { title: 'Donkey Khan', category: 'Engaging', rating: 6.0, verdict: 'Runs great!', description: 'A tiny arcade throwback.', image: cdn('assets/donkeyKhanIcon.png'), file: cdn('games/donkeyKhan.html'), creditName: 'Digitsofpi314159 & Kineto', creditUrl: CREDITS_URL },
  { title: 'Path of Light', category: 'Puzzle', rating: 8.0, verdict: 'Runs great!', description: 'Find the way through a quiet little puzzle.', image: cdn('assets/pathOfLightIcon.png'), file: cdn('games/pathOfLight.html'), creditName: 'Digitsofpi314159 & Kineto', creditUrl: CREDITS_URL }
];
