/**
 * Featured Courses and Hands-On Projects
 * Minimal text, icon-focused, no emojis, no em dashes.
 */
export const featuredCourses = [
  {
    id: 'walking-sim',
    badgeIcon: 'fa-solid fa-cube',
    badge: 'Beginner 3D Project',
    title: 'Make Your First 3D Game in Godot',
    description:
      'Build a complete 3D game from installation to export. Set up first-person controls, collision physics, and beautiful lighting.',
    imageSrc: '/img/HomePage/walkingSim.jpg',
    imageAlt: 'Make Your First Game in Godot Walking Simulator',
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
    description:
      'Learn shader-based foliage wind, atmospheric skyboxes, procedural grass, and clean art direction for your indie game.',
    imageSrc: '/img/HomePage/firstGame.png',
    imageAlt: 'Stylized Nature in Godot',
    primaryLink: '/docs/walking-sim/Grass Water Sky',
    primaryLabel: 'Read Environment Guide',
    secondaryLink: 'https://www.youtube.com/@godotsensei',
    secondaryLabel: 'Watch Video',
    reverse: true,
  },
];

