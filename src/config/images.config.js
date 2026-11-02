/**
 * MATOSHREE LAWNS — CENTRALIZED IMAGE & MEDIA CONFIGURATION
 * 
 * All website images and media assets are managed here.
 * To replace temporary stock imagery with actual Matoshree Lawns photographs:
 * simply update the URLs or local file paths in this file.
 */

// Primary Hero Media Configuration (Supports instant toggle between image and video)
export const HERO_MEDIA_CONFIG = {
  // 'image' for high-resolution static photography, 'video' for background video
  type: 'image',
  
  // Bespoke ultra-photorealistic twilight luxury wedding lawn with fairy lights & mandap
  imageSrc: '/src/assets/images/matoshree-twilight-hero.jpg',
  
  // Path for 8-second cinematic video (ready for hot-swapping once rendered)
  videoSrc: 'assets/videos/hero-background.mp4',
  
  // High-resolution video poster fallback
  posterSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2560&q=85',
  
  alt: 'Matoshree Lawns — Royal illuminated twilight wedding lawn with fairy lights and golden chandeliers',
  
  // Enables smooth CSS slow zoom Ken Burns animation
  kenBurns: true,
  
  // Cinematic specifications for client reference
  cinematicSpecs: {
    duration: '8 seconds continuous shot',
    lighting: 'Blue-hour twilight transitioning to warm golden illumination',
    palette: 'Deep Royal Maroon (#350707), Rich Burgundy (#250606), Antique Gold (#C99A3D), Warm Ivory',
    framing: 'Center-right mandap composition, left 35-40% uncluttered for typography'
  }
};

// Official Logo Configuration
export const LOGO_CONFIG = {
  // Original supplied Matoshree Lawns logo
  primary: '/src/assets/images/matoshree-logo-official.png',
  // Vector royal crest fallback
  svgFallback: '/src/assets/images/matoshree-logo.svg',
  alt: 'मातोश्री लॉन्स — Matoshree Lawns'
};

// Section-by-Section Curated Imagery
export const SECTION_IMAGES = {
  // Our Story / Heritage Section (About)
  story: {
    main: {
      url: '/src/assets/images/about-maharashtrian-entrance.jpg',
      alt: 'Traditional Maharashtrian wedding entrance at Matoshree Lawns with marigold floral garlands, banana canopy arch, brass samai lamps, and rangoli',
      caption: 'Traditional Heritage Welcome'
    },
    secondary: {
      url: '/src/assets/images/samai-kalash-decor.jpg',
      alt: 'Traditional Maharashtrian wedding decor with lit brass Samai, sacred Kalash, marigold flowers, and rangoli',
      caption: 'Traditional Samai & Kalash'
    }
  },

  // Celebrations Section (Separate, distinct photography for each category)
  celebrations: {
    weddings: {
      title: 'The Royal Shubh Vivah',
      badge: 'Sacred Rituals & Royal Mandap',
      tagline: 'Timeless Maharashtrian Vedic Ceremonies',
      description: 'Exchange sacred vows in traditional Maharashtrian grandeur beneath an exquisite floral mandap, accompanied by traditional Shehnai and Tutari melodies.',
      capacity: 'Grand Guest Gatherings',
      lawnArea: 'Spacious Lawn & Mandap Courtyard',
      imageUrl: '/src/assets/images/shubh-vivah-couple.jpg',
      alt: 'Traditional Maharashtrian wedding ceremony with bride in Nauvari saree and groom in Pheta with mundavalya'
    },
    receptions: {
      title: 'Celestial Evening Receptions',
      badge: 'Twilight Gala & Starlit Banqueting',
      tagline: 'Under A Canopy Of A Thousand Stars',
      description: 'Host an unforgettable evening celebration with crystal chandeliers, illuminated lawns, bespoke banquet dining, and world-class acoustic entertainment setup.',
      capacity: 'Grand Guest Gatherings',
      lawnArea: 'Expansive Evening Lawn',
      imageUrl: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1600&q=85',
      alt: 'Gala evening reception banquet with warm chandeliers and illuminated lawns'
    },
    preWedding: {
      title: 'Pre-Wedding Festivities',
      badge: 'Sangeet, Haldi & Sakhrapuda',
      tagline: 'Joyous Revelry & Vibrant Traditions',
      description: 'From high-energy Sangeet performances on our amphitheater stage to sun-drenched floral Haldi ceremonies in our stone courtyards, every moment is pure magic.',
      capacity: 'Intimate to Large Celebrations',
      lawnArea: 'The Shivalaya Courtyard & Lawns',
      imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
      alt: 'Vibrant outdoor Sangeet and festive celebration decor at Matoshree Lawns'
    }
  },

  // Venue Spaces Breakdown (Facilities)
  spaces: {
    sovereignLawn: {
      name: 'The Sovereign Grand Lawn',
      capacity: 'Grand Celebrations',
      size: 'Expansive Open-Air Grounds',
      type: 'Open-Air Lawn',
      imageUrl: '/src/assets/images/sovereign-lawn-mandap.jpg',
      alt: 'Sprawling outdoor wedding lawn with illuminated dome mandap and golden fairy lights'
    },
    rajwadaHall: {
      name: 'The Rajwada AC Banquet Palace',
      capacity: 'Banqueting & Dining',
      size: 'Centrally Air-Conditioned Hall',
      type: 'Centrally Air-Conditioned Pillarless Hall',
      imageUrl: '/src/assets/images/rajwada-banquet-hall.jpg',
      alt: 'Grand crystal chandeliers inside the Rajwada banquet hall with royal tables'
    },
    shivalayaCourtyard: {
      name: 'The Shivalaya Heritage Courtyard',
      capacity: 'Intimate Ceremonies',
      size: 'Paved Heritage Courtyard',
      type: 'Stone-Paved Heritage Courtyard',
      imageUrl: '/src/assets/images/shivalaya-courtyard-ceremony.jpg',
      alt: 'Traditional courtyard wedding ceremony with bells, marigold hangings, and brass samai'
    }
  },

  // Interactive Masonry Gallery
  gallery: [
    {
      id: 1,
      title: 'Grand Twilight Mandap',
      category: 'mandap',
      categoryLabel: 'Royal Mandap',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted floral mandap with fresh ivory blooms, gold pillars, and sacred holy vedi.'
    },
    {
      id: 2,
      title: 'Starry Lawn Illuminations',
      category: 'decor',
      categoryLabel: 'Night Lawn Decor',
      aspectRatio: 'portrait',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
      description: 'Lush green lawns bathed in thousands of warm fairy lights beneath open twilight skies.'
    },
    {
      id: 3,
      title: 'Grand Royal Entrance Arch',
      category: 'weddings',
      categoryLabel: 'Weddings & Baarat',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
      description: 'Stately archway welcomes baarat processions with traditional royal trumpets and royal drapes.'
    },
    {
      id: 4,
      title: 'Crystal Chandelier Pavilion',
      category: 'decor',
      categoryLabel: 'Night Lawn Decor',
      aspectRatio: 'portrait',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
      description: 'Volumetric golden chandeliers suspended over the central royal aisle.'
    },
    {
      id: 5,
      title: 'Royal Couple First Walk',
      category: 'weddings',
      categoryLabel: 'Weddings & Baarat',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      description: 'The newlywed couple stepping through the petal-showered lawn pathway.'
    },
    {
      id: 6,
      title: 'Gala Banquet Dining Court',
      category: 'dining',
      categoryLabel: 'Banquet & Dining',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
      description: 'Spacious royal dining pavilions offering authentic Maharashtrian delicacies and global buffets.'
    },
    {
      id: 7,
      title: 'Exquisite Floral Sculptures',
      category: 'mandap',
      categoryLabel: 'Royal Mandap',
      aspectRatio: 'portrait',
      url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80',
      description: 'Cascading floral garlands, roses, orchids, and brass samai lamps.'
    },
    {
      id: 8,
      title: 'Evening Sangeet Stage & Lighting',
      category: 'decor',
      categoryLabel: 'Night Lawn Decor',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      description: 'State-of-the-art concert lighting, trussing, and LED screens for musical performances.'
    },
    {
      id: 9,
      title: 'Heritage Courtyard Sakhrapuda',
      category: 'weddings',
      categoryLabel: 'Weddings & Baarat',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      description: 'Traditional engagement celebrations set against stone carved architecture.'
    },
    {
      id: 10,
      title: 'Royal Table Setting & Silverware',
      category: 'dining',
      categoryLabel: 'Banquet & Dining',
      aspectRatio: 'portrait',
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
      description: 'Personalized VIP banqueting with candlelit candelabras and royal cutlery.'
    },
    {
      id: 11,
      title: 'Festive Rangoli & Diya Pathway',
      category: 'mandap',
      categoryLabel: 'Royal Mandap',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
      description: 'Traditional marigold and rose rangoli designs illuminated by brass oil lamps.'
    },
    {
      id: 12,
      title: 'Twilight Grandeur of the Lawns',
      category: 'decor',
      categoryLabel: 'Night Lawn Decor',
      aspectRatio: 'landscape',
      url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1600&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80',
      description: 'The vast lawn landscape viewed during golden hour as evening lights illuminate.'
    }
  ],

  // Final Call to Action Section
  finalCta: {
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=85',
    alt: 'Magical illuminated lawn at Matoshree Lawns for your dream wedding'
  }
};
