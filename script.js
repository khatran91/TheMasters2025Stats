const parValues = [4, 5, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4];

const players = [
  {
    id: 1,
    name: "Rory McIlroy",
    country: "🇬🇧 Northern Ireland",
    description: "Rory McIlroy cemented his place in golf history at Augusta National on April 13, 2025, when he birdied the first hole of a sudden‐death playoff against Justin Rose to win his first Masters and complete the modern career Grand Slam—becoming only the sixth golfer, and the first European, to capture all four majors.",
    image: "playerImages/RoryM.jpeg",
    position: 1,
    total: "-11",
    thru: "F",
    scores: {
      1: [4, 5, 3, 3, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 7, 3, 6, 4],
      2: [4, 4, 4, 3, 4, 3, 4, 5, 4, 3, 3, 3, 3, 4, 4, 3, 4, 4],
      3: [3, 3, 3, 3, 3, 3, 4, 6, 4, 5, 4, 3, 4, 4, 3, 3, 4, 4],
      4: [6, 5, 3, 2, 4, 3, 4, 5, 3, 3, 5, 3, 7, 5, 4, 3, 3, 5]
    }
  },
  {
    id: 2,
    name: "Justin Rose",
    country: "🇬🇧 England",
    description: "Runner-up at the 2025 Masters after a sudden-death playoff with McIlroy.",
    image: "playerImages/JustinR.jpeg",
    position: 2,
    total: "-11",
    thru: "F",
    scores: {
      1: [4,4,5,3,4,3,4,5,4,5,3,3,5,4,6,3,4,6], 
      2: [4,5,4,4,3,4,5,4,3,4,4,3,6,3,5,4,3,6],   
      3: [5,3,4,3,4,3,4,3,5,4,5,3,4,4,5,3,4,4],  
      4: [3,4,4,3,4,3,4,5,3,5,4,3,4,3,5,3,4,6]    
    }
  },
  {
    id: 3,
    name: "Patrick Reed",
    country: "🇺🇸 United States",
    description: "Third-place finisher at the 2025 Masters known for his aggressive shotmaking.",
    image: "playerImages/PatrickR.jpeg",
    position: 3,
    total: "-9",
    thru: "F",
    scores: {
      1: [4,4,4,4,5,3,5,4,5, 5,4,3,4,4,5,4,3,4],
      2: [4,4,4,4,4,3,4,4,4, 4,4,4,5,5,5,3,4,4],
      3: [4,5,4,3,4,3,3,6,6, 3,4,3,4,4,5,4,4,4],
      4: [5,5,5,3,4,3,5,5,4, 4,4,3,5,4,6,2,3,4]
    }
  },
  {
    id: 5,
    name: "Scottie Scheffler",
    country: "🇺🇸 United States",
    description: "Two-time Masters champion and defending 2024 winner, known for his power and precision.",
    image: "playerImages/ScottieS.jpeg",
    position: 4,
    total: "-8",
    thru: "F",
    scores: {
        1: [4,4,4,3,4,2,4,5,4, 4,4,2,4,4,4,2,4,4],  
        2: [4,4,4,3,5,3,5,4,4, 3,4,3,6,4,5,3,4,4],  
        3: [3,5,3,4,4,3,4,5,4, 6,5,3,3,4,4,3,5,3],  
        4: [4,5,3,4,4,3,5,4,3, 3,5,3,4,3,5,2,4,4]   
    }
  },
  {
    id: 6,
    name: "Sungjae Im",
    country: "🇰🇷 South Korea",
    description: "Tied 5th place finisher at the 2025 Masters, known for his strong iron play.",
    image: "playerImages/SungJaeIm.jpeg",
    position: "T5",
    total: "-7",
    thru: "F",
    scores: {
      1: [3, 4, 3, 3, 4, 3, 3, 5, 4,  5, 5, 3, 3, 4, 4, 3, 4, 4],
      2: [5, 5, 3, 3, 4, 3, 4, 5, 4,  5, 4, 4, 4, 4, 6, 2, 4, 5],
      3: [6, 5, 4, 3, 5, 4, 4, 4, 4,  3, 4, 2, 5, 4, 4, 3, 3, 4],
      4: [4, 4, 4, 4, 5, 3, 3, 4, 4,  4, 4, 3, 3, 4, 5, 4, 3, 4]
    }
  },
  {
    id: 7,
    name: "Bryson DeChambeau",
    country: "🇺🇸 United States",
    description: "Tied 5th place finisher at the 2025 Masters, known for his power and analytical approach.",
    image: "playerImages/BrysonD.jpeg",
    position: "T5",
    total: "-7",
    thru: "F",
    scores: {
      1: [4,4,3,3,5,2,5,5,3,4,4,4,4,4.4,2,5,4],  
      2: [4,4,4,2,3,3,4,4,4,4,4,3,5,4,5,4,3,4],  
      3: [3,4,5,3,4,3,5,4,4,4,4,4,5,4,4,2,4,3],  
      4: [4,4,5,4,4,3,4,5,4,4,6,4,5,3,5,2,5,4]   
    }
  },
  {
    id: 8,
    name: "Ludvig Åberg",
    country: "🇸🇪 Sweden",
    description: "Finished 7th-place finisher at the 2025 Masters, known for his steady iron play.",
    image: "playerImages/LudvigA.jpeg",
    position: 7,
    total: "-6",
    thru: "F",
    scores: {
      1: [4,5,3,4,4,3,4,5,4, 4,4,2,4,4,4,3,4,3], 
      2: [4,5,3,3,4,4,5,4,4, 4,4,3,5,4,5,2,5,5], 
      3: [5,4,4,4,4,3,4,4,4, 4,4,3,5,3,4,2,4,4], 
      4: [3,5,4,3,4,2,4,5,4, 3,4,4,4,4,4,3,5,7]  
    }
  },
  {
    id: 9,
    name: "Xander Schauffele",
    country: "🇺🇸 United States",
    description: "Tied 8th-place finisher at the 2025 Masters, known for his consistency and clutch play.",
    image: "playerImages/XanderS.jpeg",
    position: "T8",
    total: "-5",
    thru: "F",
    scores: {
      1: [5, 4, 4, 4, 3, 4, 4, 4, 4, 5, 5, 5, 2, 4, 5, 5, 2, 4],  // 73
      2: [4, 5, 3, 3, 4, 4, 2, 5, 3, 4, 4, 3, 5, 4, 5, 3, 4, 4],  // 69
      3: [4, 4, 5, 3, 5, 2, 4, 5, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4],  // 70
      4: [4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 4, 5, 4, 4, 5, 2, 4, 4]   // 71
    }
  },
  {
    id: 10,
    name: "Zach Johnson",
    country: "🇺🇸 United States",
    description: "Tied 8th-place finisher at the 2025 Masters and 2007 champion, known for his short-game prowess.",
    image: "playerImages/ZachJ.jpeg",
    position: "T8",
    total: "-5",
    thru: "F",
    scores: {
      1: [4, 4, 3, 3, 4, 3, 4, 6, 4, 5, 5, 3, 5, 5, 5, 3, 3, 3],  // 72
      2: [4, 6, 4, 4, 4, 3, 4, 4, 5, 5, 3, 3, 4, 4, 5, 3, 4, 5],  // 74
      3: [4, 3, 4, 3, 4, 3, 4, 4, 5, 4, 3, 4, 2, 4, 4, 2, 5, 4],  // 66
      4: [5, 3, 4, 3, 4, 3, 4, 3, 5, 5, 4, 4, 4, 3, 5, 3, 5, 4]   // 71
    }
  },
  {
    id: 11,
    name: "Jason Day",
    country: "🇦🇺 Australia",
    description: "Tied 8th-place finisher at the 2025 Masters, known for his powerful ball-striking and resilience.",
    image: "playerImages/JasonD.jpeg",
    position: "T8",
    total: "-5",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 4, 3, 4, 5, 4, 4, 2, 4, 4, 5, 3, 4, 4],  // R1: 70
      2: [4, 4, 4, 3, 4, 2, 4, 4, 4, 4, 4, 3, 5, 4, 5, 3, 4, 5],  // R2: 70
      3: [4, 4, 4, 3, 3, 3, 4, 5, 4, 4, 4, 4, 5, 3, 5, 4, 4, 4],  // R3: 71
      4: [4, 5, 4, 3, 3, 3, 4, 5, 3, 4, 4, 3, 5, 4, 5, 3, 5, 5]   // R4: 72
    }
  },
  {
    id: 12,
    name: "Corey Conners",
    country: "🇨🇦 Canada",
    description: "Tied 8th-place finisher at the 2025 Masters, known for his precise iron play.",
    image: "playerImages/CoreyC.jpeg",
    position: "T8",
    total: "-5",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 5, 3, 4, 4, 4, 4, 4, 3, 5, 4, 4, 3, 3, 3],  // 68
      2: [4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 5, 3, 4, 4, 5, 3, 4, 4],  // 70
      3: [4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 3, 5, 4, 5, 3, 4, 4],  // 70
      4: [5, 5, 4, 4, 4, 3, 3, 4, 4, 4, 5, 3, 5, 5, 5, 3, 5, 4]   // 75
    }
  },
  {
    id: 13,
    name: "Harris English",
    country: "🇺🇸 United States",
    description: "Tied 12th-place finisher at the 2025 Masters, known for his steady ball-striking.",
    image: "playerImages/HarrisE.jpeg",
    position: "T12",
    total: "-4",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 5, 3, 4, 4, 4, 4, 4, 4, 3, 4, 5, 5, 3, 3],  // 70
      2: [4, 4, 4, 3, 5, 3, 5, 4, 3, 4, 3, 4, 5, 4, 5, 4, 4, 5],  // 73
      3: [5, 4, 3, 4, 4, 3, 4, 5, 4, 4, 4, 4, 5, 5, 5, 3, 4, 3],  // 73
      4: [5, 4, 4, 3, 5, 4, 3, 4, 4, 4, 4, 3, 4, 3, 4, 2, 4, 4]   // 68
    }
  },
  {
    id: 14,
    name: "Max Homa",
    country: "🇺🇸 United States",
    description: "Tied 12th-place finisher at the 2025 Masters, known for his steady ball-striking and scoring prowess.",
    image: "playerImages/MaxH.jpeg",
    position: "T12",
    total: "-4",
    thru: "F",
    scores: {
      1: [4, 4, 3, 3, 5, 4, 4, 5, 3, 5, 4, 2, 7, 4, 5, 4, 4, 4],  // 74
      2: [5, 5, 4, 3, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 3, 4, 4, 4],  // 70
      3: [4, 4, 4, 3, 4, 4, 4, 4, 4, 5, 5, 3, 3, 4, 4, 2, 4, 4],  // 69
      4: [4, 5, 4, 3, 3, 2, 5, 5, 3, 4, 4, 3, 4, 5, 3, 6, 4, 4]   // 71
    }
  },
  {
    id: 15,
    name: "Bubba Watson",
    country: "🇺🇸 United States",
    description: "Tied 12th‐place finisher at the 2025 Masters, known for his creative shotmaking.",
    image: "playerImages/BubbaW.jpeg",
    position: "T12",
    total: "-4",
    thru: "F",
    scores: {
      1: [4, 5, 3, 3, 4, 3, 4, 5, 5, 4, 6, 2, 4, 4, 4, 4, 3, 4],  // 71
      2: [4, 5, 5, 4, 5, 2, 4, 3, 5, 4, 4, 3, 4, 5, 4, 3, 4, 4],  // 72
      3: [4, 3, 5, 4, 3, 5, 2, 4, 5, 4, 3, 4, 3, 6, 4, 5, 5, 4],  // 73
      4: [4, 4, 4, 3, 4, 3, 3, 5, 5, 4, 4, 2, 4, 4, 5, 2, 4, 4]   // 68
    }
  },
  {
    id: 16,
    name: "Jon Rahm",
    country: "🇪🇸 Spain",
    description: "Tied 14th‐place finisher at the 2025 Masters, known for his powerful play and major championships.",
    image: "playerImages/JonR.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [4, 6, 3, 4, 4, 3, 5, 5, 4, 5, 5, 3, 4, 4, 5, 3, 4, 4],  // R1: 75
      2: [4, 5, 4, 3, 4, 3, 3, 5, 4, 4, 4, 4, 3, 5, 4, 4, 4, 5],  // R2: 71
      3: [3, 4, 3, 4, 5, 3, 4, 4, 4, 5, 4, 3, 3, 4, 5, 2, 5, 5],  // R3: 70
      4: [4, 5, 3, 3, 4, 2, 5, 4, 4, 4, 4, 3, 4, 4, 5, 2, 4, 5]   // R4: 69
    }
  },
  {
    id: 17,
    name: "Jordan Spieth",
    country: "🇺🇸 United States",
    description: "Tied 14th-place finisher at the 2025 Masters, known for his remarkable putting and three major titles.",
    image: "playerImages/JordanS.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [3, 5, 3, 4, 4, 3, 4, 4, 4, 6, 3, 4, 6, 5, 4, 4, 3, 4],  // 73
      2: [4, 4, 4, 3, 4, 3, 4, 4, 4, 5, 4, 3, 6, 5, 5, 3, 3, 5],  // 73
      3: [4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 4, 3, 4, 4, 5, 3, 4, 4],  // 69
      4: [3, 5, 5, 3, 4, 3, 4, 4, 5, 4, 4, 4, 4, 4, 4, 3, 3, 4]   // 70
    }
  },
  {
    id: 18,
    name: "Tyrrell Hatton",
    country: "🇬🇧 England",
    description: "Tied 14th-place finisher at the 2025 Masters, known for his steady ball-striking.",
    image: "playerImages/TyrrellH.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [3, 5, 3, 3, 4, 3, 4, 4, 4,  4, 4, 2, 5, 4, 5, 3, 5, 4],
      2: [5, 4, 4, 3, 4, 3, 3, 4, 3,  4, 4, 4, 4, 4, 4, 4, 5, 4],
      3: [5, 5, 4, 3, 4, 3, 4, 5, 4,  4, 4, 4, 5, 4, 4, 4, 4, 5],
      4: [4, 4, 4, 3, 5, 3, 3, 4, 4,  4, 5, 3, 5, 3, 5, 3, 5, 4]
    }
  },
  {
    id: 19,
    name: "Matt McCarty",
    country: "🇺🇸 United States",
    description: "Tied 14th-place finisher at the 2025 Masters, known for his steady ball-striking.",
    image: "playerImages/MattM.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [3,4,4,3,4,4,5,5,4, 4,4,3,5,3,5,3,4,4],  // R1: 71
      2: [6,6,4,3,4,2,3,4,3, 4,4,2,4,4,4,3,3,5],  // R2: 68
      3: [4,5,4,3,4,3,4,5,4, 4,4,3,4,5,4,4,6,5],  // R3: 75
      4: [4,5,4,3,5,3,3,5,4, 4,4,3,4,3,5,3,4,5]   // R4: 71
    }
  },
  {
    id: 20,
    name: "Tom Hoge",
    country: "🇺🇸 United States",
    description: "Tied 14th-place finisher at the 2025 Masters, marking a career-best performance.",
    image: "playerImages/TomH.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [5, 4, 3, 3, 4, 3, 6, 5, 3, 5, 5, 3, 4, 3, 7, 4, 3, 3],  // 72
      2: [5, 5, 3, 3, 4, 3, 5, 4, 3, 4, 4, 3, 5, 3, 5, 4, 5, 4],  // 72
      3: [4, 4, 4, 4, 4, 3, 4, 5, 4, 5, 3, 2, 4, 4, 2, 4, 3, 4],  // 70
      4: [6, 5, 4, 3, 4, 3, 3, 4, 3, 4, 4, 3, 4, 3, 5, 3, 5, 5]   // 71
    }
  },
  {
    id: 21,
    name: "Collin Morikawa",
    country: "🇺🇸 United States",
    description: "Tied 14th-place finisher at the 2025 Masters, known for his crisp iron play and composure.",
    image: "playerImages/CollinM.jpeg",
    position: "T14",
    total: "-3",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 3, 4, 4, 4, 4, 4, 3, 3, 4, 6, 4, 4, 5],  // 72
      2: [4, 5, 4, 4, 4, 2, 3, 5, 3, 4, 5, 3, 4, 4, 5, 2, 3, 5],  // 69
      3: [3, 5, 4, 3, 4, 3, 5, 5, 3, 4, 4, 4, 5, 4, 5, 3, 4, 4],  // 72
      4: [4, 4, 3, 3, 5, 3, 4, 5, 4, 5, 5, 3, 5, 4, 4, 2, 5, 4]   // 72
    }
  },
  {
    id: 22,
    name: "Hideki Matsuyama",
    country: "🇯🇵 Japan",
    description: "2021 Masters champion, known for his calm demeanor and precision iron play.",
    image: "playerImages/HidekiM.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 3, 4, 3, 4, 4, 4, 4, 4, 7, 4, 5, 3, 4], // 73
      2: [4, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 4, 6, 3, 4, 4, 4], // 68
      3: [4, 5, 4, 4, 4, 4, 4, 5, 5, 5, 4, 3, 6, 4, 5, 3, 6, 4], // 79
      4: [4, 5, 3, 3, 4, 2, 4, 4, 3, 4, 4, 3, 5, 3, 4, 3, 3, 5]  // 66
    }
  },
  {
    id: 23,
    name: "Davis Riley",
    country: "🇺🇸 United States",
    description: "Tied 21st-place finisher at the 2025 Masters, known for his steady ball-striking.",
    image: "playerImages/DavisR.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 5, 4, 4, 4, 4, 5, 5, 3, 2, 5, 4, 4, 3, 5],
      2: [4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 4, 5, 3, 4, 4],
      3: [5, 6, 4, 3, 4, 3, 3, 5, 3, 6, 5, 3, 5, 4, 5, 3, 4, 4],
      4: [4, 4, 4, 4, 4, 3, 3, 5, 3, 4, 4, 3, 4, 4, 4, 4, 4, 4]
    }
  },
  {
    id: 24,
    name: "Tommy Fleetwood",
    country: "🇬🇧 England",
    description: "Tied 21st-place finisher at the 2025 Masters, known for his smooth swing and accuracy.",
    image: "playerImages/TommyF.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [5, 5, 4, 3, 4, 4, 4, 5, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4],
      2: [4, 4, 4, 3, 4, 2, 4, 4, 4, 4, 4, 3, 5, 4, 5, 3, 4, 5],
      3: [5, 4, 4, 3, 4, 3, 4, 4, 4, 5, 4, 5, 5, 6, 4, 4, 4, 4],
      4: [3, 4, 5, 4, 3, 3, 4, 5, 4, 4, 4, 3, 4, 3, 6, 3, 3, 4]
    }
  },
  {
    id: 25,
    name: "Daniel Berger",
    country: "🇺🇸 United States",
    description: "Tied 21st-place finisher at the 2025 Masters, known for his smooth iron play and consistency.",
    image: "playerImages/DanielB.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [5, 5, 4, 3, 4, 3, 4, 4, 5, 4, 4, 4, 3, 5, 4, 4, 4, 4],  // 73
      2: [4, 4, 4, 3, 4, 4, 2, 4, 4, 4, 4, 3, 3, 5, 4, 5, 3, 5],  // 69
      3: [5, 4, 4, 3, 4, 3, 4, 4, 4, 5, 4, 3, 5, 5, 6, 4, 4, 4],  // 75
      4: [3, 4, 5, 4, 3, 3, 4, 5, 4, 4, 4, 3, 4, 4, 3, 6, 3, 3]   // 69
    }
  },
  {
    id: 26,
    name: "Byeong Hun An",
    country: "🇰🇷 South Korea",
    description: "Tied 21st-place finisher at the 2025 Masters, known for his solid iron play.",
    image: "playerImages/BenA.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [4, 4, 3, 4, 4, 4, 5, 5, 4, 4, 4, 4, 4, 7, 4, 4, 3, 3], // 74
      2: [4, 5, 4, 3, 4, 2, 5, 5, 4, 4, 5, 2, 5, 3, 5, 4, 4, 3], // 71
      3: [4, 5, 3, 4, 5, 3, 4, 4, 3, 3, 3, 3, 4, 5, 5, 4, 4, 4], // 70
      4: [4, 5, 5, 3, 5, 3, 4, 4, 4, 4, 3, 3, 5, 4, 5, 3, 3, 4]  // 71
    }
  },
  {
    id: 27,
    name: "Viktor Hovland",
    country: "🇳🇴 Norway",
    description: "Tied 21st-place finisher at the 2025 Masters, known for his smooth swing and consistency.",
    image: "playerImages/ViktorH.jpeg",
    position: "T21",
    total: "-2",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 5, 3, 4, 4, 4, 6, 3, 4, 3, 5, 3, 4, 4, 3],  // Round 1: 71
      2: [4, 5, 3, 3, 4, 3, 4, 4, 4, 5, 3, 4, 3, 4, 3, 2, 5, 5],  // Round 2: 69
      3: [4, 4, 3, 3, 5, 4, 4, 4, 3, 5, 4, 4, 5, 3, 6, 4, 4, 4],  // Round 3: 73
      4: [5, 6, 3, 3, 4, 3, 4, 5, 5, 4, 4, 6, 3, 3, 3, 4, 4, 4]   // Round 4: 73
    }
  },
  {
    id: 28,
    name: "Aaron Rai",
    country: "🇬🇧 England",
    description: "Tied 27th-place finisher at the 2025 Masters, known for his precise iron play.",
    image: "playerImages/AaronR.jpeg",
    position: "T21",
    total: "-1",
    thru: "F",
    scores: {
      1: [4, 4, 3, 3, 4, 3, 3, 4, 4, 4, 5, 4, 6, 4, 4, 4, 4, 3], // 70
      2: [4, 5, 4, 3, 4, 3, 4, 7, 4, 3, 4, 3, 5, 4, 5, 4, 4, 4], // 74
      3: [4, 5, 4, 4, 4, 4, 4, 4, 5, 4, 3, 4, 3, 4, 2, 5, 5, 5], // 73
      4: [4, 5, 5, 4, 5, 2, 4, 4, 3, 4, 4, 3, 4, 4, 4, 3, 3, 5]  // 70
    }
  },
  {
    id: 29,
    name: "Michael Kim",
    country: "🇺🇸 United States",
    description: "Tied 27th‐place finisher at the 2025 Masters, known for his steady ball-striking and calm demeanor.",
    image: "playerImages/MichaelK.jpeg",
    position: "T27",
    total: "-1",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 4, 3, 4, 5, 4, 4, 5, 2, 5, 5, 4, 3, 4, 4],  // 71
      2: [5, 5, 3, 4, 4, 2, 4, 4, 3, 4, 5, 3, 5, 4, 5, 3, 4, 4],  // 71
      3: [4, 5, 5, 3, 5, 3, 4, 5, 3, 3, 4, 3, 5, 4, 5, 4, 5, 4],  // 74
      4: [4, 4, 3, 3, 4, 4, 4, 4, 4, 4, 4, 3, 5, 5, 3, 4, 4, 4]   // 71
    }
  },
  {
    id: 30,
    name: "Sahith Theegala",
    country: "🇺🇸 United States",
    description: "Tied 29th-place finisher at the 2025 Masters, known for his smooth swing and solid short game.",
    image: "playerImages/SahithT.jpeg",
    position: "T29",
    total: "E",
    thru: "F",
    scores: {
      1: [4, 6, 5, 3, 3, 3, 5, 4, 4, 4, 4, 3, 4, 4, 4, 5, 3, 4],
      2: [4, 4, 4, 3, 4, 3, 3, 4, 5, 4, 4, 4, 5, 4, 4, 3, 4, 4],
      3: [4, 5, 4, 3, 4, 3, 5, 5, 4, 4, 4, 3, 5, 5, 5, 2, 3, 5],
      4: [3, 5, 5, 2, 3, 3, 4, 5, 5, 5, 4, 4, 4, 3, 5, 3, 4, 4] 
    }
  },
  {
    id: 31,
    name: "Denny McCarthy",
    country: "🇺🇸 United States",
    description: "Tied 29th-place finisher at the 2025 Masters, known for his consistency and short-game skill.",
    image: "playerImages/DennyM.jpeg",
    position: "T29",
    total: "E",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 3, 5, 4, 5, 3, 5, 4],
      2: [5, 6, 4, 3, 4, 3, 4, 4, 4, 4, 5, 3, 5, 4, 5, 3, 4, 5],
      3: [4, 5, 4, 3, 4, 3, 4, 4, 4, 3, 4, 2, 6, 4, 5, 3, 5, 4],
      4: [4, 5, 4, 3, 4, 3, 4, 5, 5, 4, 4, 3, 5, 3, 4, 3, 4, 4]
    }
  },
  {
    id: 32,
    name: "Joaquin Niemann",
    country: "🇨🇱 Chile",
    description: "Tied 29th-place finisher at the 2025 Masters, known for his power off the tee.",
    image: "playerImages/JoaquinN.jpeg",
    position: "T29",
    total: "E",
    thru: "F",
    scores: {
      1: [3, 4, 4, 2, 5, 3, 4, 5, 4, 4, 4, 4, 3, 6, 4, 5, 3, 5],
      2: [4, 4, 4, 3, 4, 3, 4, 4, 4, 4, 5, 4, 3, 6, 3, 7, 3, 5],
      3: [4, 5, 3, 2, 4, 3, 5, 4, 4, 5, 4, 3, 4, 4, 4, 4, 4, 4],
      4: [4, 4, 4, 3, 3, 3, 4, 5, 4, 4, 4, 4, 3, 5, 4, 5, 3, 5]
    }
  },
  {
    id: 33,
    name: "Brian Campbell",
    country: "🇺🇸 United States",
    description: "Tied 32nd-place finisher at the 2025 Masters, known for his steady ball-striking and resilience.",
    image: "playerImages/BrianC.jpeg",
    position: "T32",
    total: "+1",
    thru: "F",
    scores: {
      1: [4, 4, 4, 2, 5, 3, 5, 5, 4, 4, 5, 3, 4, 4, 5, 4, 4, 3], // 72
      2: [4, 4, 4, 4, 4, 3, 4, 5, 4, 3, 5, 3, 5, 3, 5, 3, 5, 5], // 73
      3: [4, 5, 4, 4, 6, 3, 4, 5, 3, 4, 5, 4, 5, 4, 3, 4, 5, 4], // 76
      4: [4, 4, 4, 4, 4, 3, 3, 4, 4, 3, 3, 2, 5, 5, 4, 3, 5, 4]  // 68
    }
  },
  {
    id: 34,
    name: "Maverick McNealy",
    country: "🇺🇸 United States",
    description: "Tied 32nd-place finisher at the 2025 Masters, known for his strong short game and consistency.",
    image: "playerImages/MaverickM.jpeg",
    position: "T32",
    total: "+1",
    thru: "F",
    scores: {
      1: [5, 3, 4, 3, 4, 4, 4, 5, 4, 4, 4, 3, 5, 5, 4, 3, 4, 4],
      2: [5, 4, 4, 4, 3, 3, 5, 3, 4, 4, 4, 4, 4, 5, 6, 3, 4, 4],
      3: [5, 5, 4, 3, 5, 3, 3, 4, 4, 3, 4, 4, 4, 5, 3, 4, 4, 4],
      4: [4, 4, 4, 3, 4, 3, 4, 6, 4, 4, 4, 5, 4, 3, 5, 3, 4, 5]
    }
  },
  {
    id: 35,
    name: "Rasmus Højgaard",
    country: "🇩🇰 Denmark",
    description: "Tied 32nd-place finisher at the 2025 Masters, known for his precise iron play and composure.",
    image: "playerImages/RasmusH.jpeg",
    position: "T32",
    total: "+1",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 3, 4, 5, 3, 4, 4, 4, 3, 5, 4, 5, 4, 4],
      2: [4, 4, 3, 3, 4, 2, 4, 4, 4, 3, 4, 3, 6, 3, 6, 2, 3, 5],
      3: [5, 5, 4, 3, 5, 4, 5, 5, 4, 4, 4, 4, 3, 4, 5, 3, 4, 4],
      4: [5, 5, 3, 4, 5, 3, 4, 4, 3, 4, 4, 4, 4, 4, 5, 5, 4, 4]
    }
  },
  {
    id: 36,
    name: "Max Greyserman",
    country: "🇺🇸 United States",
    description: "Tied 32nd-place finisher at the 2025 Masters, known for his steady play.",
    image: "playerImages/MaxG.jpeg",
    position: "T32",
    total: "+1",
    thru: "F",
    scores: {
      1: [4, 4, 3, 3, 5, 3, 4, 4, 4, 4, 4, 4, 3, 6, 4, 4, 4, 3],  // 71
      2: [4, 5, 5, 3, 4, 3, 4, 4, 4, 4, 5, 4, 5, 4, 5, 3, 4, 5],  // 75
      3: [4, 6, 3, 3, 4, 3, 3, 5, 4, 4, 4, 2, 5, 4, 5, 2, 4, 4],  // 69
      4: [4, 4, 5, 4, 5, 3, 3, 5, 4, 4, 4, 3, 6, 5, 4, 3, 4, 4]   // 74
    }
  },
  {
    id: 37,
    name: "Justin Thomas",
    country: "🇺🇸 United States",
    description: "Tied 36th-place finisher at the 2025 Masters, known for his aggressive play and strong iron shots.",
    image: "playerImages/JustinT.jpeg",
    position: "T36",
    total: "+2",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 5, 3, 4, 5, 4, 4, 4, 3, 6, 4, 5, 2, 5, 3],  // 73
      2: [4, 3, 4, 3, 5, 3, 4, 5, 3, 4, 5, 3, 6, 3, 5, 3, 4, 4],  // 71
      3: [4, 6, 3, 4, 5, 3, 4, 5, 5, 4, 4, 4, 6, 3, 4, 3, 5, 4],  // 76
      4: [4, 5, 5, 4, 3, 3, 4, 5, 4, 4, 4, 3, 4, 4, 5, 3, 3, 3]   // 70
    }
  },
  {
    id: 38,
    name: "Brian Harman",
    country: "🇺🇸 United States",
    description: "Tied 36th-place finisher at the 2025 Masters, known for his precise wedge play and short-game expertise.",
    image: "playerImages/BrianH.jpeg",
    position: "T36",
    total: "+2",
    thru: "F",
    scores: {
      1: [3, 5, 3, 3, 5, 3, 4, 5, 4, 4, 4, 3, 4, 6, 4, 3, 4, 4],
      2: [4, 5, 3, 3, 5, 3, 3, 5, 3, 4, 5, 3, 4, 5, 5, 3, 4, 4],
      3: [4, 5, 4, 2, 5, 3, 4, 5, 4, 4, 5, 3, 5, 5, 5, 6, 4, 4],
      4: [4, 4, 4, 4, 5, 3, 4, 5, 4, 4, 4, 3, 4, 4, 3, 3, 4, 5]
    }
  },
  {
    id: 39,
    name: "Patrick Cantlay",
    country: "🇺🇸 United States",
    description: "Tied 36th‐place finisher at the 2025 Masters, known for his consistent play under pressure.",
    image: "playerImages/PatrickC.jpeg",
    position: "T36",
    total: "+2",
    thru: "F",
    scores: {
      1: [5, 5, 4, 3, 4, 3, 4, 4, 4, 3, 4, 3, 5, 4, 8, 3, 4, 4],
      2: [4, 4, 3, 3, 4, 3, 5, 4, 4, 3, 4, 3, 4, 4, 6, 4, 3, 4],
      3: [4, 4, 4, 3, 4, 3, 4, 4, 3, 4, 5, 4, 5, 4, 7, 4, 4, 4],
      4: [4, 5, 4, 3, 4, 4, 4, 5, 3, 4, 4, 3, 4, 3, 6, 3, 4, 4]
    }
  },
  {
    id: 40,
    name: "Charl Schwartzel",
    country: "🇿🇦 South Africa",
    description: "Tied 36th-place finisher at the 2025 Masters, known for his clutch play and 2011 Masters victory.",
    image: "playerImages/CharlS.jpeg",
    position: "T36",
    total: "+2",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 3, 4, 4, 4, 4, 4, 3, 5, 5, 5, 6, 3, 5],
      2: [5, 5, 3, 3, 5, 2, 4, 4, 4, 3, 4, 4, 4, 4, 5, 6, 2, 5],
      3: [4, 4, 3, 3, 5, 3, 5, 4, 4, 5, 4, 3, 5, 4, 4, 4, 5, 4],
      4: [4, 5, 4, 3, 4, 4, 4, 5, 5, 4, 4, 3, 5, 4, 5, 3, 4, 4]
    }
  },
  {
    id: 41,
    name: "Matt Fitzpatrick",
    country: "🇬🇧 England",
    description: "Tied 40th-place finisher at the 2025 Masters, known for his smooth swing and precision iron play.",
    image: "playerImages/MattF.jpeg",
    position: "T40",
    total: "+3",
    thru: "F",
    scores: {
      1: [4,5,4,2,4,3,4,5,3, 4,4,4,5,3,6,3,4,4],
      2: [5,3,4,3,4,3,3,5,4, 5,6,3,5,4,5,3,3,5],
      3: [4,5,4,4,3,3,5,5,3, 4,5,3,4,4,5,4,5,4],
      4: [4,5,4,4,4,3,4,4,5, 4,6,2,5,4,4,4,3,4]
    }
  },
  {
    id: 42,
    name: "Nick Taylor",
    country: "🇨🇦 Canada",
    description: "Canadian golfer with multiple PGA Tour wins.",
    image: "playerImages/NickT.jpeg",
    position: "T40",
    total: "+3",
    thru: "F",
    scores: {
      1: [4, 4, 5, 3, 6, 3, 4, 5, 4, 5, 4, 3, 5, 3, 4, 3, 4, 4],
      2: [4, 4, 4, 3, 4, 3, 3, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 5],
      3: [4, 5, 4, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 6, 4, 4, 4],
      4: [4, 6, 4, 3, 4, 2, 4, 5, 4, 5, 5, 3, 6, 4, 4, 2, 5, 3]
    }
  },
  {
    id: 43,
    name: "Akshay Bhatia",
    country: "🇺🇸 United States",
    description: "American golfer known for his strong iron play and composure under pressure.",
    image: "playerImages/AkshayB.jpeg",
    position: "T42",
    total: "+4",
    thru: "F",
    scores: {
      1: [4, 4, 3, 3, 5, 3, 4, 5, 5, 5, 4, 4, 4, 6, 3, 2, 3, 3],  // 70
      2: [4, 5, 4, 4, 4, 3, 4, 5, 4, 5, 4, 4, 5, 3, 5, 3, 5, 5],  // 76
      3: [4, 5, 3, 4, 4, 3, 5, 4, 5, 4, 3, 6, 4, 5, 3, 4, 5, 5],  // 75
      4: [5, 5, 5, 3, 4, 2, 5, 4, 4, 3, 5, 4, 4, 4, 3, 2, 4, 4]   // 71
    }
  },
  {
    id: 44,
    name: "Danny Willett",
    country: "🇬🇧 England",
    description: "2016 Masters champion, tied for 42nd place at the 2025 Masters.",
    image: "playerImages/DannyW.jpeg",
    position: "T42",
    total: "+4",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 6, 3, 4, 5, 4, 4, 4, 4, 3, 4, 4, 3, 3, 3],  // 75
      2: [4, 6, 5, 3, 4, 3, 4, 5, 2, 5, 3, 3, 4, 4, 5, 3, 4, 4],  // 71
      3: [4, 5, 4, 3, 4, 2, 3, 6, 3, 5, 4, 3, 6, 5, 5, 2, 4, 5],  // 73
      4: [4, 4, 4, 3, 6, 3, 5, 4, 4, 4, 6, 3, 4, 4, 4, 4, 3, 4]   // 73
    }
  },
  {
    id: 45,
    name: "J.T. Poston",
    country: "🇺🇸 United States",
    description: "American pro known for his steady play, tied for 42nd at the 2025 Masters.",
    image: "playerImages/JTP.jpeg",
    position: "T42",
    total: "+4",
    thru: "F",
    scores: {
      1: [4, 4, 4, 3, 5, 3, 4, 4, 4, 4, 5, 4, 5, 4, 5, 4, 4, 4], // 74
      2: [4, 4, 4, 3, 5, 3, 3, 4, 4, 4, 4, 5, 5, 5, 4, 3, 4, 4], // 72
      3: [5, 5, 3, 3, 4, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 5], // 73
      4: [4, 4, 5, 3, 4, 3, 4, 5, 6, 4, 4, 4, 5, 3, 6, 2, 4, 3]  // 73
    }
  },
  {
    id: 46,
    name: "Shane Lowry",
    country: "🇮🇪 Ireland",
    description: "2019 Open Champion who tied for 42nd at the 2025 Masters.",
    image: "playerImages/ShaneL.jpeg",
    position: "T42",
    total: "+4",
    thru: "F",
    scores: {
      1: [4, 5, 5, 2, 4, 3, 4, 4, 3, 5, 4, 3, 5, 4, 5, 3, 5, 3],
      2: [4, 4, 4, 4, 4, 2, 4, 4, 4, 3, 4, 3, 5, 3, 5, 3, 4, 4],
      3: [4, 4, 3, 4, 4, 2, 4, 5, 5, 4, 4, 3, 5, 3, 5, 3, 5, 5],
      4: [4, 4, 5, 3, 6, 4, 4, 4, 5, 5, 4, 4, 5, 5, 7, 3, 5, 4]
    }
  },
  {
    id: 47,
    name: "Wyndham Clark",
    country: "🇺🇸 United States",
    description: "American pro who tied for 46th at the 2025 Masters.",
    image: "playerImages/WyndhamC.jpeg",
    position: "T46",
    total: "+5",
    thru: "F",
    scores: {
      1: [4, 5, 3, 3, 5, 3, 4, 4, 6, 4, 4, 3, 6, 5, 5, 3, 5, 4],
      2: [4, 5, 4, 4, 4, 3, 4, 4, 4, 4, 2, 4, 3, 5, 3, 5, 3, 4],
      3: [4, 5, 3, 3, 5, 4, 5, 4, 4, 4, 4, 4, 6, 4, 5, 4, 4, 5],
      4: [3, 4, 5, 3, 4, 3, 4, 5, 4, 3, 5, 4, 6, 4, 4, 4, 5, 4]
    }
  },
  {
    id: 53,
    name: "Sam Burns",
    country: "🇺🇸 United States",
    description: "Three-time PGA Tour winner known for his aggressive style and strong iron play.",
    image: "playerImages/SamB.jpeg",
    position: "T46",
    total: "+5",
    thru: "F",
    scores: {
      1: [6, 4, 4, 3, 6, 2, 3, 5, 3, 5, 6, 2, 5, 4, 5, 3, 3, 4],  // 73
      2: [4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 2, 5, 4, 5, 3, 5, 4],  // 70
      3: [4, 5, 4, 4, 4, 3, 5, 4, 4, 4, 4, 3, 5, 4, 4, 4, 4, 4],  // 75
      4: [4, 5, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 5, 4, 6, 2, 5, 5]   // 75
    }
  },
  {
    id: 54,
    name: "Davis Thompson",
    country: "🇺🇸 United States",
    description: "Consistent ball-striker who tied for 46th at the 2025 Masters.",
    image: "playerImages/DavisT.jpeg",
    position: "T46",
    total: "+5",
    thru: "F",
    scores: {
      1: [4, 5, 3, 3, 5, 4, 3, 4, 5, 4, 5, 3, 4, 4, 4, 3, 4, 4],
      2: [5, 4, 4, 4, 4, 4, 3, 4, 3, 4, 6, 2, 4, 3, 6, 4, 5, 4],
      3: [4, 4, 4, 3, 5, 3, 4, 5, 4, 4, 4, 3, 4, 5, 4, 3, 3, 4],
      4: [5, 4, 6, 4, 5, 3, 5, 5, 5, 4, 4, 3, 5, 5, 4, 4, 4, 4]
    }
  },
  {
    id: 55,
    name: "Min Woo Lee",
    country: "🇦🇺 Australia",
    description: "Australian star who tied for 49th at the 2025 Masters.",
    image: "playerImages/MinL.jpeg",
    position: "T49",
    total: "+6",
    thru: "F",
    scores: {
      1: [5, 4, 4, 3, 4, 3, 4, 4, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4],  // 71
      2: [6, 4, 3, 4, 4, 3, 4, 5, 4, 4, 4, 2, 5, 3, 4, 4, 5, 4],  // 72
      3: [4, 5, 3, 3, 5, 3, 4, 5, 4, 5, 5, 3, 6, 5, 5, 3, 5, 4],  // 77
      4: [4, 4, 5, 4, 4, 4, 3, 5, 4, 4, 4, 4, 4, 3, 6, 3, 5, 4]   // 74
    }
  },
  {
    id: 56,
    name: "J.J. Spaun",
    country: "🇺🇸 United States",
    description: "American professional golfer who finished tied 50th at the 2025 Masters.",
    image: "playerImages/JJS.jpeg",
    position: 50,
    total: "+7",
    thru: "F",
    scores: {
      1: [4, 5, 5, 4, 4, 3, 5, 4, 4, 4, 4, 3, 5, 4, 5, 3, 4, 4],
      2: [4, 5, 3, 3, 4, 4, 4, 4, 4, 4, 6, 3, 5, 3, 6, 3, 3, 4],
      3: [3, 5, 3, 4, 4, 4, 4, 5, 5, 5, 4, 3, 5, 4, 4, 2, 5, 5],
      4: [4, 4, 4, 3, 4, 3, 5, 5, 4, 5, 4, 2, 6, 4, 4, 3, 6, 5]
    }
  },
  {
    id: 57,
    name: "Nicolás Echavarría",
    country: "🇨🇴 Colombia",
    description: "Colombian professional golfer",
    image: "playerImages/NicolasE.jpeg",
    position: "51",  
    total: "+8",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 4, 5, 4, 4, 5, 4, 2, 5, 4, 4, 3, 5, 4],  // 73
      2: [4, 4, 4, 3, 4, 2, 4, 5, 4, 4, 4, 3, 5, 5, 5, 2, 3, 5],  // 70
      3: [4, 4, 4, 4, 4, 3, 4, 4, 4, 3, 4, 3, 5, 4, 5, 3, 3, 4],  // 69
      4: [4, 5, 5, 4, 5, 3, 4, 7, 5, 5, 4, 3, 5, 5, 5, 4, 4, 7]   // 84
    }
  },
  {
    id: 58,
    name: "Stephan Jaeger",
    country: "🇩🇪 Germany",
    description: "German professional golfer who finished tied 52nd at the 2025 Masters.",
    image: "playerImages/StephanJ.jpeg",
    position: 52,
    total: "+9",
    thru: "F",
    scores: {
      1: [4, 4, 4, 2, 4, 3, 3, 5, 3, 4, 4, 3, 7, 5, 5, 3, 5, 4], // 72
      2: [5, 5, 4, 4, 4, 3, 4, 4, 4, 5, 3, 3, 5, 3, 5, 3, 4, 6], // 74
      3: [4, 7, 3, 4, 4, 3, 4, 5, 4, 4, 5, 3, 4, 5, 4, 2, 4, 4], // 73
      4: [4, 4, 4, 4, 5, 3, 5, 4, 4, 6, 5, 3, 4, 5, 6, 3, 6, 3]  // 78
    }
  },
  {
    id: 59,
    name: "Tom Kim",
    country: "🇰🇷 South Korea",
    description: "South Korean professional golfer who finished tied 52nd at the 2025 Masters.",
    image: "playerImages/TomK.jpeg",
    position: 52,
    total: "+9",
    thru: "F",
    scores: {
      1: [4, 5, 4, 3, 4, 4, 4, 6, 4, 5, 4, 3, 3, 4, 5, 3, 4, 4], // 73
      2: [4, 4, 4, 3, 5, 3, 4, 5, 4, 4, 4, 3, 5, 4, 5, 3, 4, 5], // 73
      3: [5, 5, 4, 2, 4, 3, 4, 6, 4, 4, 4, 2, 5, 5, 4, 4, 4, 3], // 72
      4: [5, 5, 5, 2, 4, 3, 5, 4, 4, 6, 6, 3, 5, 4, 7, 3, 4, 4]  // 79
    }
  }
];

const holeData = {
    1: {
      name: "Tea Olive",
      image: "holeImages/hole-map-1.jpg",
      description: "The Masters requires precision from the first shot on No. 1. The perfect tee shot will either carry the bunker on the right side or safely find the fairway to the left of it. The most penal misses off the tee on 'Tea Olive' are in the wooded areas on either side of the fairway, but particularly on the right side."
    },
    2: {
      name: "Pink Dogwood",
      image: "holeImages/hole-map-2.jpg",
      description: "As one of the best scoring opportunities on the course, hitting the fairway on No. 2 is imperative. Misses on the left side will encounter a steep slope into the adjacent trees and could bring bogey or worse into play. However, a successful gamble on the left side of the fairway could be rewarded with a middle-iron into the green after a roll down the hill."
    },
    3: {
        name: "Flowering Peach",
        image: "holeImages/hole-map-3.jpg",
        description: "Many players will opt to hit driver on the short par-4 third with the majority of tee shots ending up 50-60 yards short of the green. From there, birdies can be had, but misses in the fairway bunkers or in the trees right of the fairway make this a very difficult hole."
      },
      4: {
        name: "Flowering Crab Apple",
        image: "holeImages/hole-map-4.jpg",
        description: "Correctly judging the wind is paramount on 'Flowering Crab Apple'. Par can be saved from the greenside bunkers, but the difficulty depends on the day's hole location."
      },
      5: {
        name: "Magnolia",
        image: "holeImages/hole-map-5.jpg",
        description: "The primary goal from the tee box on No. 5 is to avoid the penal fairway bunkers, the depths of which make it very difficult to advance the ball toward the green with the second shot. Few players can carry these bunkers off the tee, so many opt to hit less than driver to take them out of play, which leaves a longer approach."
      },
      6: {
        name: "Juniper",
        image: "holeImages/hole-map-6.jpg",
        description: "The downhill tee shot at No. 6 plays 7 to 8 yards shorter than the 180 yards listed on the scorecard. The strategy on this hole is heavily influenced by the hole location, but misses long are generally better as players benefit from the flatter chipping area beyond the green."
      },
      7: {
        name: "Pampas",
        image: "holeImages/hole-map-7.jpg",
        description: "“Pampas” presents a real birdie opportunity for players who find the fairway off the tee. The fairway slopes from left to right, directing tee shots toward the right side and the adjacent trees. From there, a special approach is required to earn a birdie chance."
      },
      8: {
        name: "Yellow Jasmine",
        image: "holeImages/hole-map-8.jpg",
        description: "Length off the tee on No. 8 is a big advantage in reaching this par 5 in two. The ideal tee shot will safely find the left side of the fairway, and aggressive drives will play closer to the fairway bunker to leave the best possible angle into the green for the second shot."
      },
      9: {
        name: "Carolina Cherry",
        image: "holeImages/hole-map-9.jpg",
        description: "The final tee shot of the first nine favors a right-to-left shot shape to follow the contours of the fairway. Misses in the right trees offer better sight lines toward the green, but misses left of the ninth fairway usually leave players with little chance of reaching the green in regulation."
      },
      10: {
        name: "Camellia",
        image: "holeImages/hole-map-10.jpg",
        description: "Much like the previous hole, the ideal opening tee shot of the second nine will move from right-to-left to follow the shape of the 10th fairway. Accurate tee shots can take advantage of a speed slot in the fairway to leave a short iron into the elevated green. Heavily wooded areas flank both sides of the fairway, making accuracy off the tee a priority."
      },
      11: {
        name: "White Dogwood",
        image: "holeImages/hole-map-11.jpg",
        description: "No. 11 has historically played as the most difficult hole at the Masters Tournament, and it starts with an exacting tee shot. The ideal tee drive will travel more than 325 yards up the left side of the fairway. Power off the tee helps on “White Dogwood.” When a player is between 175 and 200 yards out on the left side, he has a 77% chance of making par or better. When a player is 200 yards to 225 yards out his chances of making bogey increase from 18% to 25%."
      },
      12: {
        name: "Golden Bell",
        image: "holeImages/hole-map-12.jpg",
        description: "On No. 12, the wind and hole location are the two points of emphasis for what is the shortest tee shot at the Masters. Just 51% of players hit the green in regulation on this hole to give themselves a birdie putt. The safe play is to find the middle of the green, safely carrying the front bunker. But even shots that find the sand are preferable to catching the grassy slope in front of the green that almost always deposits the ball into Rae's Creek."
      },
      13: {
        name: "Azalea",
        image: "holeImages/hole-map-13.jpg",
        description: "The first real scoring opportunity on the second nine, “Azalea” provides the ultimate risk-reward opportunity. Players who successfully hug the left treeline with their tee shot are rewarded with a flatter lie and a shorter approach to the green, but a tributary of Rae's Creek will errant drives that drift too far to the left. The safer shot is to aim right, but this leaves a longer approach from the steep slope that frames the right side of the fairway. The No. 13 has historically played as the third-easiest hole at Augusta National with 39% of players making birdie or better."
      },
      14: {
        name: "Chinese Fir",
        image: "holeImages/hole-map-14.jpg",
        description: "On No. 14, players who find the fairway are rewarded with a great scoring opportunity, but those who are forced to play from the trees that line either side of “Chinese Fir” will gladly take par and move on. Driver is not required off the tee for the longer hitters as the ideal target is 290 yards out in the left-center of the fairway. From there, players have an 88% chance of making par or better."
      },
      15: {
        name: "Firethorn",
        image: "holeImages/hole-map-15.jpg",
        description: "On No. 15, the goal is to drive the ball up the right half of the fairway to avoid maneuvering past the trees along the left side on the second shot. Players that drive the ball 300-plus yards will see their birdie odds jump from 29% to 58% by finding the right side of the fairway versus the center. On the other side, drives that end up short of the trees on the left side result in a birdie or better only 31% of the time."
      },
      16: {
        name: "Redbud",
        image: "holeImages/hole-map-16.jpg",
        description: "The strategy on the 16th tee is determined by the day's wind and hole location, but hitting the green is paramount. The pond in front of the green punishes any shots that come up short, so long and right of the putting surface are generally the safest places to miss."
      },
      17: {
        name: "Nandina",
        image: "holeImages/hole-map-17.jpg",
        description: "The tee shot on No. 17 is predominantly uphill and straight through a chute of trees. The goal is simple: find the center of the fairway - particularly the right center where the lie is the flattest. From there, a player has a 72% chance of making par or better"
      },
      18: {
        name: "Holly",
        image: "holeImages/hole-map-18.jpg",
        description: "The finishing hole at Augusta National presents perhaps the narrowest tee shot on the golf course. The trees on either side of the 18th fairway frame a small target area between the fairway bunkers and the right treeline. Some players will hit less than driver to take these bunkers out of play, but the ideal tee shot will challenge them to get a clear view of the uphill second shot into the green."
      }
  };
  
  let currentHole = 1;
  
const holeStats = {
    1: { scoring: [4.1368,4.2737,4.0566,4.1321], difficulty: [7,3,11,7], shotDistribution: [{ doubleBogey:0.01, bogey:0.21, par:0.63, birdie:0.10, eagle:0.00 }, { doubleBogey:0.02, bogey:0.25, par:0.65, birdie:0.03, eagle:0.00 }, {doubleBogey:0.0, bogey:0.09, par:0.38, birdie:0.06, eagle:0.00 }, { doubleBogey:0.02, bogey:0.09, par:0.36, birdie:0.06, eagle:0.00 }]},
    2: { scoring: [4.768,4.4632,4.6604,4.5660], difficulty: [17,18,18,18], shotDistribution: [{ doubleBogey:0.01, bogey:0.08, par:0.55, birdie:0.30, eagle:0.01 }, { doubleBogey:0.0, bogey:0.04, par:0.40, birdie:0.47, eagle:0.04 }, {doubleBogey:0.1, bogey:0.03, par:0.29, birdie:0.17, eagle:0.03 }, { doubleBogey:0.0, bogey:0.02, par:0.27, birdie:0.23, eagle:0.01 }]},
    3: { scoring: [3.8316,3.9474,3.7170,4.1698], difficulty: [16,12,16,6], shotDistribution: [{ doubleBogey:0.0, bogey:0.12, par:0.55, birdie:0.28, eagle:0.00 }, { doubleBogey:0.02, bogey:0.08, par:0.67, birdie:0.18, eagle:0.00 }, {doubleBogey:0.0, bogey:0.03, par:0.32, birdie:0.18, eagle:0.00 }, { doubleBogey:0.01, bogey:0.16, par:0.27, birdie:0.09, eagle:0.00 }]},
    4: { scoring: [3.0316,3.3053,3.2642,3.3019], difficulty: [12,2,3,1], shotDistribution: [{ doubleBogey:0.02, bogey:0.11, par:0.70, birdie:0.12, eagle:0.00 }, { doubleBogey:0.01, bogey:0.31, par:0.59, birdie:0.04, eagle:0.00 }, {doubleBogey:0.0, bogey:0.17, par:0.33, birdie:0.03, eagle:0.00 }, { doubleBogey:0.0, bogey:0.19, par:0.31, birdie:0.03, eagle:0.00 }]},
    5: { scoring: [4.5474,4.1789,4.2830,4.2264], difficulty: [1,6,1,4], shotDistribution: [{ doubleBogey:0.08, bogey:0.36, par:0.49, birdie:0.02, eagle:0.00 }, { doubleBogey:0.01, bogey:0.21, par:0.67, birdie:0.06, eagle:0.00 }, {doubleBogey:0.1, bogey:0.16, par:0.33, birdie:0.03, eagle:0.00 }, { doubleBogey:0.02, bogey:0.15, par:0.29, birdie:0.07, eagle:0.00 }]},
    6: { scoring: [3.0947,2.9368,3.1321,2.9245], difficulty: [9,13,6,12], shotDistribution: [{ doubleBogey:0.0, bogey:0.16, par:0.72, birdie:0.07, eagle:0.00 }, { doubleBogey:0.0, bogey:0.14, par:0.61, birdie:0.2, eagle:0.00 }, {doubleBogey:0.0, bogey:0.12, par:0.36, birdie:0.05, eagle:0.00 }, { doubleBogey:0.0, bogey:0.05, par:0.39, birdie:0.09, eagle:0.00 }]},
    7: { scoring: [4.2,4.0737,4.1321,3.8868], difficulty: [6,10,6,13], shotDistribution: [{ doubleBogey:0.04, bogey:0.21, par:0.60, birdie:0.10, eagle:0.00 }, { doubleBogey:0.01, bogey:0.18, par:0.63, birdie:0.13, eagle:0.00 }, {doubleBogey:0.0, bogey:0.13, par:0.34, birdie:0.06, eagle:0.00 }, { doubleBogey:0.0, bogey:0.09, par:0.29, birdie:0.15, eagle:0.00 }]},
    8: { scoring: [4.7158,4.4842,4.6792,4.6226], difficulty: [18,17,17,17], shotDistribution: [{ doubleBogey:0.01, bogey:0.05, par:0.55, birdie:0.34, eagle:0.00 }, { doubleBogey:0.01, bogey:0.01, par:0.43, birdie:0.48, eagle:0.02 }, {doubleBogey:0.0, bogey:0.03, par:0.31, birdie:0.18, eagle:0.01 }, { doubleBogey:0.01, bogey:0.01, par:0.28, birdie:0.23, eagle:0.00 }]},
    9: { scoring: [4.0421,3.8947,3.8679,4.0], difficulty: [11,15,13,11], shotDistribution: [{ doubleBogey:0.04, bogey:0.16, par:0.55, birdie:0.20, eagle:0.00 }, { doubleBogey:0.0, bogey:0.09, par:0.68, birdie:0.17, eagle:0.01 }, {doubleBogey:0.0, bogey:0.05, par:0.36, birdie:0.12, eagle:0.00 }, { doubleBogey:0.01, bogey:0.09, par:0.32, birdie:0.11, eagle:0.00 }]},
    10: { scoring: [4.3263,4.0,4.2075,4.1132], difficulty: [2,11,4,9], shotDistribution: [{ doubleBogey:0.06, bogey:0.24, par:0.59, birdie:0.06, eagle:0.00 }, { doubleBogey:0.0, bogey:0.18, par:0.59, birdie:0.18, eagle:0.00 }, {doubleBogey:0.01, bogey:0.17, par:0.27, birdie:0.08, eagle:0.00 }, { doubleBogey:0.02, bogey:0.08, par:0.37, birdie:0.06, eagle:0.00 }]},
    11: { scoring: [4.2842,4.2526,4.0943,4.2830], difficulty: [3,4,10,2], shotDistribution: [{ doubleBogey:0.04, bogey:0.22, par:0.65, birdie:0.04, eagle:0.00 }, { doubleBogey:0.05, bogey:0.20, par:0.64, birdie:0.06, eagle:0.00 }, {doubleBogey:0.0, bogey:0.07, par:0.44, birdie:0.02, eagle:0.00 }, { doubleBogey:0.04, bogey:0.09, par:0.38, birdie:0.02, eagle:0.00 }]},
    12: { scoring: [3.0947,3.1684,3.1698,3.1321], difficulty: [9,7,5,7], shotDistribution: [{ doubleBogey:0.05, bogey:0.13, par:0.61, birdie:0.16, eagle:0.00 }, { doubleBogey:0.06, bogey:0.16, par:0.61, birdie:0.12, eagle:0.00 }, {doubleBogey:0.0, bogey:0.14, par:0.34, birdie:0.05, eagle:0.00 }, { doubleBogey:0.02, bogey:0.1, par:0.34, birdie:0.07, eagle:0.00 }]},
    13: { scoring: [5.0316,4.7474,4.7736,4.6604], difficulty: [13,16,14,16], shotDistribution: [{ doubleBogey:0.09, bogey:0.14, par:0.43, birdie:0.27, eagle:0.02 }, { doubleBogey:0.01, bogey:0.08, par:0.54, birdie:0.30, eagle:0.02 }, {doubleBogey:0.0, bogey:0.07, par:0.28, birdie:0.17, eagle:0.01 }, { doubleBogey:0.01, bogey:0.06, par:0.21, birdie:0.24, eagle:0.01 }]},
    14: { scoring: [4.1053,3.9053,4.0566,4.8868], difficulty: [8,14,11,13], shotDistribution: [{ doubleBogey:0.03, bogey:0.16, par:0.65, birdie:0.10, eagle:0.01 }, { doubleBogey:0.01, bogey:0.15, par:0.53, birdie:0.26, eagle:0.00 }, {doubleBogey:0.0, bogey:0.11, par:0.34, birdie:0.08, eagle:0.00 }, { doubleBogey:0.0, bogey:0.1, par:0.27, birdie:0.16, eagle:0.00 }]},
    15: { scoring: [4.9158,5.1368,4.7736,4.7170], difficulty: [15,8,14,15], shotDistribution: [{ doubleBogey:0.04, bogey:0.12, par:0.52, birdie:0.25, eagle:0.02 }, { doubleBogey:0.07, bogey:0.17, par:0.54, birdie:0.16, eagle:0.01 }, {doubleBogey:0.01, bogey:0.04, par:0.31, birdie:0.16, eagle:0.01 }, { doubleBogey:0.02, bogey:0.05, par:0.24, birdie:0.20, eagle:0.02 }]},
    16: { scoring: [3.2211,3.1368,3.1132,3.0189], difficulty: [5,8,9,10], shotDistribution: [{ doubleBogey:0.07, bogey:0.16, par:0.63, birdie:0.09, eagle:0.00 }, { doubleBogey:0.01, bogey:0.21, par:0.62, birdie:0.11, eagle:0.00 }, {doubleBogey:0.02, bogey:0.15, par:0.22, birdie:0.14, eagle:0.00 }, { doubleBogey:0.02, bogey:0.07, par:0.34, birdie:0.1, eagle:0.00 }]},
    17: { scoring: [4.2737,4.1895,4.2642,4.1887], difficulty: [4,5,2,5], shotDistribution: [{ doubleBogey:0.04, bogey:0.29, par:0.51, birdie:0.11, eagle:0.00 }, { doubleBogey:0.0, bogey:0.28, par:0.57, birdie:0.10, eagle:0.00 }, {doubleBogey:0.02, bogey:0.13, par:0.35, birdie:0.03, eagle:0.00 }, { doubleBogey:0.04, bogey:0.13, par:0.26, birdie:0.09, eagle:0.01 }]},
    18: { scoring: [3.9684,4.5789,4.1821,4.2453], difficulty: [14,1,6,3], shotDistribution: [{ doubleBogey:0.01, bogey:0.13, par:0.63, birdie:0.18, eagle:0.00 }, { doubleBogey:0.07, bogey:0.40, par:0.46, birdie:0.02, eagle:0.00 }, {doubleBogey:0.0, bogey:0.12, par:0.36, birdie:0.05, eagle:0.00 }, { doubleBogey:0.03, bogey:0.1, par:0.35, birdie:0.05, eagle:0.00 }]}
  };
  
  // State variables
  let currentPlayer = players[0];
  let currentRound = 1;
  let scoringChart, difficultyChart;
  let shotDistCharts = [];
  
  // Core Functions
  function updateHoleView() {
    const hole = holeData[currentHole];
    $('#current-hole').text(currentHole);
    $('#hole-name').text(hole.name);
    $('#hole-image')
      .attr('src', hole.image)
      .attr('alt', `Augusta National Hole ${currentHole}: ${hole.name}`);
    $('#hole-description').text(hole.description);
    $(document).trigger('holeChanged');
  }
  
  
  function renderScorecard() {
    const scores = currentPlayer.scores[currentRound];
    const total = scores.reduce((a, b) => a + b, 0);

    $('#par-row').html(
      '<td>Par</td>' +
        parValues.map((p, i) => `<td data-hole="${i + 1}">${p}</td>`).join('') +
        '<td>-</td>'
    );

    const scoreCells = scores
      .map((score, i) => {
        const par = parValues[i];
        let className = 'par';
        if (score === par - 2) className = 'eagle';
        else if (score === par - 1) className = 'birdie';
        else if (score === par + 1) className = 'bogey';
        else if (score >= par + 2) className = 'double-bogey';

        return `<td class="hole-score ${className}" data-hole="${i + 1}">${score}</td>`;
      })
      .join('');

    $('#score-row').html(`<td>R${currentRound}</td>${scoreCells}<td>${total}</td>`);
  }
  
  function updatePlayerInfo() {
    $('#player-name').text(currentPlayer.name);
    $('#player-country').text(currentPlayer.country);
    $('#player-desc').text(currentPlayer.description);
    $('#player-img').attr('src', currentPlayer.image);
    $('#player-position').text(currentPlayer.position);
    $('#player-total').text(currentPlayer.total);
    $('#player-thru').text(currentPlayer.thru);
  }
  
  function populateLeaderboard() {
    const container = $('#player-leaderboard .leaderboard-container');
    container.empty();
    players.forEach(player => {
      const card = $(`
        <div class="leaderboard-card" data-player-id="${player.id}">
          <div class="rank">${player.position}</div>
          <img src="${player.image}" alt="${player.name}">
          <div class="name">${player.name.split(' ')[1].toUpperCase()}</div>
          <div class="score">${player.total}</div>
          <div class="thru">Thru ${player.thru}</div>
        </div>
      `);
      if (player.id === currentPlayer.id) card.addClass('selected');
      container.append(card);
    });
  }

  
  // Stats Functions
  function initStatsCharts() {
    const scoringCtx = $('#scoringChart');
    const difficultyCtx = $('#difficultyChart');
  
    scoringChart = new Chart(scoringCtx, {
      type: 'line',
      data: getChartData('scoring'),
      options: chartOptions.scoring
    });
  
    difficultyChart = new Chart(difficultyCtx, {
      type: 'bar',
      data: getChartData('difficulty'),
      options: chartOptions.difficulty
    });
  
    for (let round = 1; round <= 4; round++) {
        const ctx = $(`#shotDistChart${round}`);
        const chart = new Chart(ctx, {
          type: 'doughnut',
          data: getChartData('shotDistribution', round - 1),
          options: chartOptions.shotDistribution
        });
        shotDistCharts.push(chart);
    }
  
    updateStatsTables();
  }
  
  function getChartData(type, roundIndex = 0) {
    const hole = holeStats[currentHole];
    switch(type) {
      case 'scoring':
        return {
          labels: ['Round 1', 'Round 2', 'Round 3', 'Round 4'],
          datasets: [{
            label: 'Scoring Average',
            data: hole.scoring,
            borderColor: '#076652',
            backgroundColor: 'rgba(7, 102, 82, 0.1)',
            tension: 0.3,
            fill: true
          }]
        };
      case 'difficulty':
        return {
          labels: ['Round 1', 'Round 2', 'Round 3', 'Round 4'],
          datasets: [{
            label: 'Difficulty Rank (1=Hardest)',
            data: hole.difficulty,
            backgroundColor: '#b22222'
          }]
        };
      case 'shotDistribution':
        const distArray = hole.shotDistribution;
        const dist = Array.isArray(distArray)
            ? distArray[roundIndex]
            : distArray;
        return {
            labels: ['Double Bogeys','Bogeys','Pars','Birdies','Eagles'],
            datasets: [{
            data: [
                dist.doubleBogey * 100,
                dist.bogey       * 100,
                dist.par         * 100,
                dist.birdie      * 100,
                dist.eagle       * 100
            ],
            backgroundColor: ['#d62728','#ff7f0e','#2ca02c','#1f77b4','#9467bd']
            }]
        };
    }
  }
  
  const chartOptions = {
    scoring: {
      responsive: true,
      scales: { y: { beginAtZero: false, min: 3, max: 5 } }
    },
    difficulty: {
      responsive: true,
      scales: { y: { reverse: true, beginAtZero: false, min: 1, max: 18 } }
    },
    shotDistribution: {
      responsive: true,
      cutout: '60%',
      plugins: { legend: { position: 'bottom' } }
    }
  };
  
  function updateStatsTables() {
    const hole = holeStats[currentHole];
    const avgScore = (hole.scoring.reduce((a,b) => a+b, 0)/4).toFixed(2);
    
    $('#scoring-data').html(`
      <tr>
        <td>${currentHole}. ${holeData[currentHole].name}</td>
        ${hole.scoring.map(s => `<td>${s.toFixed(2)}</td>`).join('')}
        <td>${avgScore}</td>
      </tr>
    `);
  
    $('.difficulty-grid').html(
      hole.difficulty.map((rank, i) => `
        <div class="difficulty-card">
          <div class="difficulty-rank">${rank}</div>
          <div>Round ${i+1}</div>
        </div>`
      ).join('')
    );
  }
  
  // Event Handlers
  function handleHoleChange() {
  if (scoringChart) {
    scoringChart.data = getChartData('scoring');
    scoringChart.update();
  }
  if (difficultyChart) {
    difficultyChart.data = getChartData('difficulty');
    difficultyChart.update();
  }
  shotDistCharts.forEach((ch, idx) => {
    ch.data = getChartData('shotDistribution', idx);
    ch.update();
  });
  updateStatsTables();
}
  
$(document).on('click', '.leaderboard-card', function() {
  const id = $(this).data('player-id');
  currentPlayer = players.find(p => p.id === id);
  updatePlayerInfo();
  renderScorecard();
  $('.leaderboard-card').removeClass('selected');
  $(this).addClass('selected');
});

$('#leaderboard-prev').on('click', () => {
  const c = $('.leaderboard-container');
  c.animate({ scrollLeft: '-=200' }, 300);
});
$('#leaderboard-next').on('click', () => {
  const c = $('.leaderboard-container');
  c.animate({ scrollLeft: '+=200' }, 300);
});

// Hole‐click in table nav
$('#scorecard').on('click', 'td[data-hole]', function() {
  currentHole = parseInt($(this).attr('data-hole'));
  updateHoleView();
});

// Round selector (unchanged)
$('#round-dropdown').on('change', function() {
  currentRound = Number($(this).val());
  renderScorecard();
});

// Tabs (unchanged)
$('.tab-btn').on('click', function() {
  $('.tab-btn').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').removeClass('active');
  $(`#${$(this).data('tab')}`).addClass('active');
});

$(document).on('holeChanged', handleHoleChange);

// ——— Initialization ———

$(document).ready(function() {
  // Build and show leaderboard instead of dropdown
  populateLeaderboard();

  // Initial render
  updatePlayerInfo();
  renderScorecard();
  updateHoleView();

  $('#prev-hole').on('click', () => {
    // wrap around if you like, or clamp at 1
    currentHole = currentHole > 1 ? currentHole - 1 : 18;
    updateHoleView();
  });
  $('#next-hole').on('click', () => {
    currentHole = currentHole < 18 ? currentHole + 1 : 1;
    updateHoleView();
  });

  // Charts
  if (typeof Chart !== 'undefined') {
    initStatsCharts();
  }
});