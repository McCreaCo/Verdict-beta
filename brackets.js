// ============================================================
// VERDICT — MASTER BRACKET LIST (single source of truth)
// To add a bracket: drop one line into the right category's
// items array below. The landing page and that category page
// both update automatically. No other files need editing.
// ============================================================
const CATEGORIES = [
  {
    id: "sports", name: "Sports", icon: "🏈", accent: "#f5a623",
    blurb: "GOATs, monumental moments, and pure mayhem.",
    items: [
    { file:"sports-nfl-goat.html", emoji:"🏆", title:"Greatest NFL Player Ever", q:"Who is the greatest NFL player of all time?", accent:"#f5a623", pill:"32 · Resume" },
    { file:"sports-greatest-moments.html", emoji:"🥅", title:"Greatest Sports Moments", q:"Which moment made you feel more alive?", accent:"#4a9eff", pill:"32 · Moments" },
    { file:"sports-wrestlers.html", emoji:"🤼", title:"Greatest Pro Wrestlers", q:"Who is the greatest professional wrestler of all time?", accent:"#e8b830", pill:"32 · Resume" },
    ]
  },
  {
    id: "screen", name: "Screen", icon: "🎬", accent: "#4a9eff",
    blurb: "Movies, TV, villains, twists, and the characters you can't forget.",
    items: [
    { file:"screen-plot-twists.html", emoji:"🔄", title:"Plot Twists", q:"Which twist got you the hardest?", accent:"#9a6aff", pill:"16 · Film" },
    { file:"screen-scared-you.html", emoji:"😱", title:"Movies That Scared You", q:"Which one scared you the most?", accent:"#ff5e3a", pill:"32 · Horror" },
    { file:"screen-greatest-movies.html", emoji:"🎬", title:"Greatest Movies", q:"Which is the greatest movie ever made?", accent:"#a8d83a", pill:"32 · Film" },
    { file:"screen-greatest-tv.html", emoji:"📺", title:"Greatest TV Shows", q:"Which is the greatest TV show of all time?", accent:"#ff6b5a", pill:"32 · TV" },
    { file:"screen-villains.html", emoji:"🃏", title:"Greatest Movie Villains", q:"Who is more terrifying?", accent:"#e8354a", pill:"32 · Icons" },
    { file:"screen-universes.html", emoji:"🌌", title:"Greatest Fictional Universes", q:"Which world would you rather live in?", accent:"#8060df", pill:"32 · Worlds" },
    { file:"screen-90s-sitcoms.html", emoji:"📺", title:"Greatest 90s Sitcoms", q:"Which 90s sitcom is the greatest of all time?", accent:"#c8a96e", pill:"32 · Comedy" },
    { file:"screen-rewired-characters.html", emoji:"🧠", title:"Characters Who Rewired You", q:"Who changed how you see the world?", accent:"#46c8a0", pill:"32 · Deep" },
    { file:"screen-oh-hell-yes.html", emoji:"🙌", title:"Greatest OH HELL YES Moments", q:"Which moment gave you the biggest rush?", accent:"#ff8a3c", pill:"32 · Hype" },
    { file:"screen-funniest-characters.html", emoji:"😂", title:"Funniest Characters", q:"Who makes you laugh the hardest?", accent:"#4a9eff", pill:"32 · Comedy" },
    { file:"screen-duos.html", emoji:"🤝", title:"Greatest Duos", q:"Which on-screen friendship is the real deal?", accent:"#f5a623", pill:"32 · Friends" },
    { file:"screen-kid-scares.html", emoji:"👻", title:"Kid-Level Scares", q:"Which one scared you the most as a kid?", accent:"#e8b830", pill:"16 · Spooky" },
    ]
  },
  {
    id: "music", name: "Music", icon: "🎵", accent: "#e0408a",
    blurb: "The artists and anthems that defined the eras.",
    items: [
    { file:"music-greatest-artists.html", emoji:"🎤", title:"Greatest Music Artists", q:"Who is the greatest music artist of all time?", accent:"#7a8aff", pill:"32 · Legends" },
    { file:"music-90s-songs.html", emoji:"🎸", title:"Greatest 90s Songs", q:"Which 90s song is the greatest of all time?", accent:"#e0408a", pill:"32 · Anthems" },
    ]
  },
  {
    id: "kids", name: "Kids & Play", icon: "🎮", accent: "#33d6c7",
    blurb: "Heroes, games, creatures, and powers — for the young and young at heart.",
    items: [
    { file:"kids-videogame-characters.html", emoji:"🎮", title:"Greatest Video Game Characters", q:"Which character do you love more?", accent:"#f8d030", pill:"32 · Kids" },
    { file:"kids-movies.html", emoji:"🍿", title:"Greatest Kids Movies", q:"Which do you love more?", accent:"#60c8ff", pill:"32 · Kids" },
    { file:"kids-80s-draft.html", emoji:"📼", title:"80s Kids Character Draft", q:"Who belongs on your '80s dream team?", accent:"#ff3ca6", pill:"32 · Room" },
    { file:"kids-your-team.html", emoji:"🛟", title:"Who's On Your Team?", q:"Who do you want when everything goes sideways?", accent:"#33d6c7", pill:"32 · Room" },
    { file:"kids-animated-heroes.html", emoji:"🦸", title:"Animated Movie Heroes", q:"Who's the hero you'd actually follow into the story?", accent:"#a8d83a", pill:"32 · Animated" },
    { file:"kids-animated-sidekicks.html", emoji:"🧞", title:"Animated Sidekicks", q:"Who's the sidekick that steals the whole movie?", accent:"#ff6b5a", pill:"32 · Animated" },
    { file:"kids-game-worlds.html", emoji:"🟩", title:"Greatest Game Worlds", q:"Which world would you actually want to live in?", accent:"#7a8aff", pill:"16 · Games" },
    { file:"kids-superpowers.html", emoji:"💪", title:"Best Superpowers", q:"If you could pick ONE, which power would you take?", accent:"#5ad8a0", pill:"16 · Powers" },
    { file:"kids-anime-characters.html", emoji:"🔥", title:"Anime Legends", q:"Who's the greatest anime & manga character of all time?", accent:"#ff7ab0", pill:"32 · Anime" },
    { file:"kids-magical-creatures.html", emoji:"🐉", title:"Magical Creatures", q:"Which magical creature would you want by your side?", accent:"#e8354a", pill:"32 · Fantasy" },
    { file:"kids-movie-pets.html", emoji:"🐶", title:"Greatest Movie Pets", q:"Which movie pet would you take home?", accent:"#8060df", pill:"16 · Pets" },
    ]
  },
  {
    id: "history", name: "History & Big Questions", icon: "🕰", accent: "#c0a060",
    blurb: "What if, what almost was, and what still haunts you.",
    items: [
    { file:"history-what-if.html", emoji:"🔀", title:"What If? Hinges in History", q:"Which 'what if' haunts you more?", accent:"#c0a060", pill:"32 · History" },
    { file:"history-near-miss.html", emoji:"⏳", title:"They Almost Didn't Make It", q:"Which near-miss would have hurt you more?", accent:"#d08850", pill:"32 · History" },
    ]
  },
  {
    id: "studios", name: "Studios", icon: "🎞", accent: "#60c8ff",
    blurb: "Pixar, DreamWorks, and the films that raised a generation.",
    items: [
    { file:"screen-pixar-movies.html", emoji:"💡", title:"Greatest Pixar Movies", q:"Which Pixar movie is the greatest?", accent:"#60c8ff", pill:"16 · Movies" },
    { file:"screen-dreamworks-movies.html", emoji:"🐉", title:"Greatest DreamWorks Movies", q:"Which DreamWorks movie is the greatest?", accent:"#a8d83a", pill:"32 · Movies" },
    ]
  },
  {
    id: "popculture", name: "Pop Culture", icon: "🌟", accent: "#8060df",
    blurb: "Superheroes, holidays, and theme-park dreams.",
    items: [
    { file:"screen-superhero-teams.html", emoji:"🛡", title:"Superhero Team Rosters", q:"Which super-team is the greatest?", accent:"#4a9eff", pill:"16 · Teams" },
    { file:"screen-holiday-movies.html", emoji:"🎄", title:"Greatest Holiday Movies", q:"Which holiday movie is the greatest?", accent:"#e8354a", pill:"32 · Holiday" },
    { file:"screen-theme-parks.html", emoji:"🎡", title:"Theme Park Worlds", q:"Which theme park world or ride would you most want?", accent:"#8060df", pill:"16 · Parks" },
    ]
  },
];

// #rrggbb + alpha -> rgba() for pill backgrounds
function hexA(hex, a){
  const n = parseInt(hex.slice(1),16);
  const r=(n>>16)&255, g=(n>>8)&255, b=n&255;
  return `rgba(${r},${g},${b},${a})`;
}
// total bracket count across all categories
const TOTAL_BRACKETS = CATEGORIES.reduce((n,c)=>n+c.items.length,0);
