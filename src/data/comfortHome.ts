export interface BookItem {
  id: string;
  title: string;
  author: string;
  genre: string;
  status: "Completed" | "Currently Reading" | "To Read";
  rating?: number; // 1-5
  note: string;
  quote?: string;
  coverColor?: string;
}

export interface WritingItem {
  id: string;
  title: string;
  category: "Short Story" | "Poetry" | "Journal Reflection" | "Letter" | "Essay";
  date: string;
  excerpt: string;
  content: string[]; // Multi-paragraph content for distraction-free reading
  tags: string[];
}

export interface TrackItem {
  id: string;
  title: string;
  artist: string;
  album?: string;
  mood: "Focus & Code" | "Cozy & Rainy" | "Late Night Lo-Fi" | "Acoustic Warmth";
  duration?: string;
  spotifyUrl?: string | null;
  note: string;
}

export interface TravelDestination {
  id: string;
  location: string;
  country: string;
  category: "Visited" | "Wishlist" | "Weekend Gateway";
  season?: string;
  note: string;
  highlights: string[];
  photoPlaceholder: string;
}

export interface DesignProject {
  id: string;
  title: string;
  type: "UI/UX Concept" | "Typography & Poster" | "Color Palette Exploration" | "Interactive Experiment" | "Design Systems";
  description: string;
  palette: string[];
  tools: string[];
  note: string;
}

export interface CuriosityTopic {
  id: string;
  topic: string;
  domain: "Artificial Intelligence" | "Cognitive Psychology" | "Design Systems" | "Data Ethics" | "Complex Systems";
  summary: string;
  keyQuestion: string;
  favoriteResource?: string;
  status: "Exploring" | "Deep Dive" | "Evergreen";
}

export interface ComfortWindow {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  floor: 1 | 2;
  position: "left" | "center" | "right";
  description: string;
  themeColor: string;
  accentBg: string;
  quote: string;
}

export const comfortWindows: ComfortWindow[] = [
  {
    id: "reading",
    name: "The Bookshelf",
    subtitle: "Reading, Recommendations & Reflections",
    iconName: "BookOpen",
    floor: 2,
    position: "left",
    description: "A cozy nook lined with bookshelves, warm lamps, and volumes on philosophy, speculative fiction, technology, and human nature.",
    themeColor: "#D97706",
    accentBg: "#FEF3C7",
    quote: "A room without books is like a body without a soul.",
  },
  {
    id: "writing",
    name: "The Writer's Nook",
    subtitle: "Poetry, Prose & Private Journal",
    iconName: "Feather",
    floor: 2,
    position: "center",
    description: "A solid wooden writing desk, an open notebook with fountain pen ink, manuscript drafts, and quiet reflections.",
    themeColor: "#B45309",
    accentBg: "#FFFBEB",
    quote: "Writing is thinking on paper — turning fleeting curiosities into enduring artifacts.",
  },
  {
    id: "music",
    name: "The Listening Room",
    subtitle: "Vinyl Records & Handpicked Playlists",
    iconName: "Disc",
    floor: 2,
    position: "right",
    description: "Turntables, open-back headphones, warm acoustic textures, and ambient soundscapes curated for focused deep work.",
    themeColor: "#8B5CF6",
    accentBg: "#EDE9FE",
    quote: "Music produces a kind of pleasure which human nature cannot do without.",
  },
  {
    id: "travel",
    name: "The Explorer's Window",
    subtitle: "Journals, Postcards & Wanderlust",
    iconName: "Compass",
    floor: 1,
    position: "left",
    description: "World maps pinned with dreams, vintage railway postcards, travel memories, and wandering curiosity beyond screens.",
    themeColor: "#059669",
    accentBg: "#D1FAE5",
    quote: "To explore is to discover that everyone is wrong about other places.",
  },
  {
    id: "design",
    name: "The Creative Studio",
    subtitle: "Color Harmonies, Sketches & Visual UI",
    iconName: "Palette",
    floor: 1,
    position: "center",
    description: "Moodboards, swatch books, typography specimens, micro-interactions, and visual craft celebrating the beauty of details.",
    themeColor: "#EC4899",
    accentBg: "#FCE7F3",
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
  },
  {
    id: "curiosity",
    name: "The Curiosity Lab",
    subtitle: "Curious Questions & Ongoing Deep Dives",
    iconName: "Sparkles",
    floor: 1,
    position: "right",
    description: "A digital laboratory of wonder: generative models, complex adaptive systems, neural mechanics, and lifelong learning questions.",
    themeColor: "#2563EB",
    accentBg: "#DBEAFE",
    quote: "Stay hungry, stay foolish, and never stop wondering how the world fits together.",
  },
];

// 1. Reading Collection
export const bookshelfData: BookItem[] = [
  {
    id: "book-1",
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    genre: "Speculative Fiction / AI",
    status: "Completed",
    rating: 5,
    note: "A tender, deeply moving exploration of consciousness, empathy, and what it truly means to love through the eyes of an Artificial Friend.",
    quote: "Do you believe in the human heart? I don't mean simply the organ, obviously.",
    coverColor: "#F59E0B",
  },
  {
    id: "book-2",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Development / Systems",
    status: "Completed",
    rating: 5,
    note: "The definitive guide on compound marginal gains. System design principles translated into everyday cognitive rituals.",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    coverColor: "#EF4444",
  },
  {
    id: "book-3",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Cognitive Psychology",
    status: "Completed",
    rating: 5,
    note: "Foundational breakdown of System 1 heuristics versus System 2 deliberate calculation. Essential reading for data analysts.",
    quote: "A reliable way to make people believe in falsehoods is frequent repetition.",
    coverColor: "#3B82F6",
  },
  {
    id: "book-4",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    genre: "Human-Computer Interaction",
    status: "Completed",
    rating: 5,
    note: "Affordances, signifiers, and conceptual models. Directly inspired my NPTEL Top 1% honor in Human-Computer Interaction.",
    quote: "Good design is actually a lot harder to notice than poor design.",
    coverColor: "#10B981",
  },
  {
    id: "book-5",
    title: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    genre: "Computer Science & Life",
    status: "Currently Reading",
    note: "Fascinating intersection between computer science algorithms (optimal stopping, caching, sorting) and human daily decision making.",
    coverColor: "#8B5CF6",
  },
  {
    id: "book-6",
    title: "Chip War: The Fight for the World's Most Critical Technology",
    author: "Chris Miller",
    genre: "Technology History & Geopolitics",
    status: "To Read",
    note: "On the TBR wishlist to understand the microscopic semiconductor fabrication supply chain powering modern deep learning.",
    coverColor: "#64748B",
  },
];

// 2. The Writer's Nook (Creative Writing Room)
export const writersNookData: WritingItem[] = [
  {
    id: "writing-1",
    title: "Between the Lines of Clean Code",
    category: "Journal Reflection",
    date: "Autumn 2025",
    excerpt: "There is an unspoken poetry in a function that does exactly one thing with quiet perfection...",
    content: [
      "There is an unspoken poetry in a function that does exactly one thing with quiet perfection.",
      "In the rush to build faster, larger, and louder architectures, we often forget that programming was born as a human dialect. We write code not just for the cold compiler in the machine, but for the bewildered human being who will inherit our lines at midnight six months from now.",
      "When I structure a dataset or train an LSTM network, I find myself looking for rhythm. The same cadence that separates clumsy prose from a memorable essay also separates fragile scripts from resilient software. Simplicity isn't the starting line—it is the hard-won finish line after you have trimmed away every ego-driven excess.",
      "To build something truly useful is to leave behind no unnecessary noise, only a quiet open door for someone else to step through.",
    ],
    tags: ["Philosophy", "Craft", "Writing", "Software"],
  },
  {
    id: "writing-2",
    title: "The Gentle Sound of 6:00 AM Coffee",
    category: "Poetry",
    date: "Winter 2025",
    excerpt: "Before the terminal windows multiply / Before the notifications begin their insistent chime...",
    content: [
      "Before the terminal windows multiply,",
      "Before the notifications begin their insistent chime,",
      "There is a pocket of silence,",
      "Where steam rises from porcelain,",
      "And the city outside is still holding its breath.",
      "",
      "In this blue hour between dreams and duty,",
      "Curiosity feels weightless.",
      "No deadlines to defend, no tickets to close—",
      "Just a blank page and the audacious thought:",
      "What if we tried building it another way?",
    ],
    tags: ["Poetry", "Morning Ritual", "Stillness"],
  },
  {
    id: "writing-3",
    title: "On Why We Built SeniorSaathi",
    category: "Letter",
    date: "Late Summer 2025",
    excerpt: "A personal letter to anyone who has ever watched their grandparents hesitate before a smartphone screen...",
    content: [
      "I watched my grandfather tap gingerly at an update dialogue box as if it might shatter beneath his fingers.",
      "In that single hesitant gesture was the quiet heartbreak of modern software engineering: we have built a digital landscape that assumes infinite cognitive bandwidth, lightning-fast motor reflexes, and zero tolerance for confusion.",
      "The tech world loves to celebrate disruption. But what happens to the generations who get disrupted out of everyday independence? Who explains a fraudulent OTP request when the text is intentionally written in deceptive legalistic jargon? Who translates a labyrinth of permissions into a warm, gentle voice?",
      "SeniorSaathi was never merely a hackathon idea or an AI portfolio bullet. It was a promise: that empathy can be codified, that large language models are at their noblest when simplifying the world for those who came before us.",
    ],
    tags: ["Empathy", "SeniorSaathi", "Accessibility", "Essays"],
  },
  {
    id: "writing-4",
    title: "Midnight Editorial Sketches",
    category: "Short Story",
    date: "Spring 2025",
    excerpt: "The lamps on the corner of Innovation Avenue flickered once, casting long golden rhombuses across the cobblestone...",
    content: [
      "The lamps on the corner of Innovation Avenue flickered once, casting long golden rhombuses across the cobblestones.",
      "From the third-floor studio of the Media House, the night city looked like a circuit board made of warm tea and brass lanterns. Down on Learning Lane, the clock tower struck eleven, its chime echoing over the quiet quadrangle.",
      "Someone had left a bicycle propped against the white picket fence of the cottage on the corner. Inside the second-floor dormer window, an amber glow betrayed a reader turning one more page, unwilling to surrender to sleep while a good idea was still taking shape.",
      "This was the little world she had dreamed into existence: half logic, half nostalgia, and wholly alive.",
    ],
    tags: ["Fiction", "World Building", "Atmosphere"],
  },
];

// 3. The Listening Room
export const listeningRoomData: TrackItem[] = [
  {
    id: "track-1",
    title: "Weightless",
    artist: "Marconi Union",
    mood: "Late Night Lo-Fi",
    duration: "8:08",
    note: "Scientifically crafted ambient soundscape; perfect for deep statistical debugging and data auditing.",
  },
  {
    id: "track-2",
    title: "Experience",
    artist: "Ludovico Einaudi",
    mood: "Acoustic Warmth",
    duration: "5:15",
    note: "Cascading neoclassical piano. The soundtrack to finishing difficult machine learning pipelines.",
  },
  {
    id: "track-3",
    title: "Day One (Interstellar Theme)",
    artist: "Hans Zimmer",
    mood: "Focus & Code",
    duration: "3:19",
    note: "A relentless reminder that big analytical challenges yield to persistence and mathematical patience.",
  },
  {
    id: "track-4",
    title: "Sunflower",
    artist: "Post Malone, Swae Lee",
    mood: "Cozy & Rainy",
    duration: "2:38",
    note: "Upbeat energy boost during long afternoon frontend styling sessions.",
  },
  {
    id: "track-5",
    title: "Chopin: Nocturne in E-Flat Major, Op. 9 No. 2",
    artist: "Arthur Rubinstein",
    mood: "Acoustic Warmth",
    duration: "4:32",
    note: "Timeless warmth while reading or writing editorial reflections in the evening.",
  },
];

// 4. The Explorer's Window
export const explorerData: TravelDestination[] = [
  {
    id: "dest-1",
    location: "Dharamshala & McLeod Ganj",
    country: "Himachal Pradesh, India",
    category: "Visited",
    season: "Spring / Autumn",
    note: "Misty pine forests, quiet mountain monasteries, and crisp Himalayan air where thoughts unwind.",
    highlights: ["Triund Trek Trail", "Norbulingka Institute Crafts", "Quiet Mountain Cafes"],
    photoPlaceholder: "Pine hills bathed in misty morning light with prayer flags fluttering in the breeze.",
  },
  {
    id: "dest-2",
    location: "Old Delhi Heritage Walk",
    country: "Delhi, India",
    category: "Visited",
    season: "Winter",
    note: "Intricate Mughal architecture, bustling alleyways, brass tea kettles, and generations of layered history.",
    highlights: ["Red Fort sandstone walls", "Spice market scents", "Historic Havelis with carved wooden doors"],
    photoPlaceholder: "Sunbeams piercing through ancient carved archways into bustling narrow courtyards.",
  },
  {
    id: "dest-3",
    location: "Kyoto Gardens & Historic Temples",
    country: "Japan",
    category: "Wishlist",
    note: "On the dream list: traditional wooden machiya townhouses, moss gardens, and wabi-sabi aesthetics.",
    highlights: ["Philosopher's Path", "Arashiyama Bamboo Grove", "Traditional tea ceremony aesthetics"],
    photoPlaceholder: "Autumn maple leaves framing an ancient curved wooden bridge over koi ponds.",
  },
  {
    id: "dest-4",
    location: "Edinburgh Old Town & Highlands",
    country: "Scotland, UK",
    category: "Wishlist",
    note: "Cobblestone closes, grand stone libraries, rainy afternoon bookstores, and dramatic windswept hills.",
    highlights: ["Royal Mile closes", "National Library of Scotland", "Highland lochs and mist"],
    photoPlaceholder: "Victorian stone bookshop facades on an overcast, cozy Scottish afternoon.",
  },
];

// 5. The Creative Studio
export const creativeStudioData: DesignProject[] = [
  {
    id: "design-1",
    title: "Midnight Editorial Theme System",
    type: "Design Systems",
    description: "The bespoke hybrid design token palette uniting dark midnight tech navy with warm ivory editorial paper.",
    palette: ["#101827", "#1E2533", "#477DFF", "#F1EDE4", "#272727", "#D9D0C2"],
    tools: ["Tailwind CSS", "Figma", "KaTeX", "Design Tokens"],
    note: "Explores the psychological balance between high-credibility dark data consoles and tactile literary magazines.",
  },
  {
    id: "design-2",
    title: "SeniorSaathi High-Contrast Ergonomics",
    type: "UI/UX Concept",
    description: "Accessible design study prioritizing WCAG AAA contrast, oversized touch targets, and cognitive calm for elder care.",
    palette: ["#0F172A", "#F8FAFC", "#38BDF8", "#F59E0B", "#10B981"],
    tools: ["Accessibility Center", "Web Speech API", "Next.js"],
    note: "Tested touch affordances with senior users to eliminate misclicks and visual fatigue.",
  },
  {
    id: "design-3",
    title: "Planora AI Champagne & Plum Palette",
    type: "Color Palette Exploration",
    description: "Culturally rich celebration tones created for multi-currency wedding and community event planning.",
    palette: ["#2C1242", "#FAF9F5", "#B792DE", "#D4AF37", "#1E1B4B"],
    tools: ["Recharts Custom Theme", "Tailwind 3.4", "Prisma"],
    note: "Replaces sterile corporate project trackers with joyful, celebratory elegance attuned to Indian celebrations.",
  },
];

// 6. The Curiosity Lab
export const curiosityLabData: CuriosityTopic[] = [
  {
    id: "curio-1",
    topic: "Neuro-Symbolic AI & Explainability",
    domain: "Artificial Intelligence",
    summary: "Can we marry the intuitive perceptual strength of deep neural networks with the rigorous provability of formal symbolic logic?",
    keyQuestion: "How do we move beyond black-box classification towards models that can provide transparent chain-of-thought audits in sensitive domains?",
    favoriteResource: "Deep learning research papers on concept bottleneck models and attention interpretability.",
    status: "Deep Dive",
  },
  {
    id: "curio-2",
    topic: "Human-in-the-Loop Data Quality (MDQC)",
    domain: "Data Ethics",
    summary: "Lessons from managing enterprise Master Data Quality Control at NielsenIQ: why human judgment and domain context remain indispensable.",
    keyQuestion: "How do algorithmic anomaly detection thresholds balance false-positive fatigue with zero-defect data guarantees?",
    favoriteResource: "Real-world operational retail discrepancy datasets & advanced statistical validation techniques.",
    status: "Evergreen",
  },
  {
    id: "curio-3",
    topic: "Gamified Pedagogies (Arcanum Architecture)",
    domain: "Design Systems",
    summary: "Exploring how digital escape rooms and interactive spatial puzzles activate divergent problem-solving compared to passive video lessons.",
    keyQuestion: "What is the optimal cognitive scaffolding between frustration and the eureka moment in code education?",
    favoriteResource: "Educational game mechanics & spaced repetition cognitive retention studies.",
    status: "Exploring",
  },
];
