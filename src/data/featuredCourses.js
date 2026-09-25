/**
 * Featured Courses and Hands-On Projects
 * Minimal text, icon-focused, no emojis, no em dashes.
 */
export const featuredCourses = [
  {
    id: 'walking-sim',
    badgeIcon: 'fa-solid fa-cube',
    badge: 'Beginner 3D Project',
    title: 'Make Your First 3D Game in Godot 4',
    subtitle: 'Walking Simulator (30-Minute Fast Track)',
    description:
      'Build a complete 3D game from installation to export. Set up first-person controls, collision physics, and beautiful lighting.',
    imageSrc: '/img/HomePage/walkingSim.jpg',
    imageAlt: 'Make Your First Game in Godot 4 Walking Simulator',
    meta: [
      { icon: 'fa-solid fa-clock', text: '30 Minutes' },
      { icon: 'fa-solid fa-user-graduate', text: 'Beginner' },
      { icon: 'fa-solid fa-person-walking', text: '3D Controls' },
      { icon: 'fa-solid fa-download', text: 'PC & Web Export' },
    ],
    primaryLink: '/docs/category/walking-sim',
    primaryLabel: 'Read Written Guide',
    secondaryLink: 'https://www.youtube.com/watch?v=auqOU55M90U',
    secondaryLabel: 'Watch Video',
  },
  {
    id: 'stylized-environments',
    badgeIcon: 'fa-solid fa-palette',
    badge: 'Art and Shaders',
    title: 'Stylized Nature and Foliage',
    subtitle: 'Create Scenic Indie Game Worlds',
    description:
      'Learn shader-based foliage wind, atmospheric skyboxes, procedural grass, and clean art direction for your indie game.',
    imageSrc: '/img/HomePage/firstGame.png',
    imageAlt: 'Stylized Nature in Godot',
    meta: [
      { icon: 'fa-solid fa-tree', text: 'EZ Tree Assets' },
      { icon: 'fa-solid fa-wind', text: 'Foliage Wind Shader' },
      { icon: 'fa-solid fa-sun', text: 'Sky and Lighting' },
      { icon: 'fa-solid fa-wand-magic-sparkles', text: 'Stylized Art' },
    ],
    primaryLink: '/docs/walking-sim/Grass Water Sky',
    primaryLabel: 'Read Environment Guide',
    secondaryLink: 'https://www.youtube.com/@godotsensei',
    secondaryLabel: 'Watch Tutorials',
    reverse: true,
  },
];
