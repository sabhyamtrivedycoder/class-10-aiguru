/**
 * Class 10 AI Guru - Interactive Visual Mind Maps Engine & Dataset
 * Concept maps structured hierarchically for Science, Maths, Social Science, English, and Hindi.
 */

const MIND_MAPS_DATA = [
  // --- Science: Chemical Reactions and Equations ---
  {
    id: "mm-sci-01",
    chapterId: "sci-01",
    subject: "science",
    subjectName: "Science (Chemistry)",
    chapterName: "Chemical Reactions and Equations",
    icon: "🧪",
    rootNode: {
      title: "Chemical Reactions & Equations",
      badge: "Chapter 1",
      coreIdea: "Transformation of reactants to products adhering to Conservation of Mass"
    },
    branches: [
      {
        id: "b1",
        title: "Observable Signs",
        color: "#38bdf8",
        icon: "👀",
        items: [
          { name: "Change in State", desc: "Wax burning solid to gas/liquid", tip: "Physical vs chemical" },
          { name: "Change in Colour", desc: "Fe in CuSO4 turns blue to light green", tip: "Fe displaces Cu" },
          { name: "Evolution of Gas", desc: "Zn + H2SO4 releases H2 gas (pop sound)", tip: "Test with burning splinter" },
          { name: "Change in Temperature", desc: "CaO + H2O releases vigorous heat (Exothermic)", tip: "Slaking of lime" }
        ]
      },
      {
        id: "b2",
        title: "5 Major Reaction Types",
        color: "#34d399",
        icon: "⚗️",
        items: [
          { name: "Combination (A+B→AB)", desc: "Quicklime to Slaked lime: CaO + H2O → Ca(OH)2", tip: "White washing layer: CaCO3" },
          { name: "Decomposition (AB→A+B)", desc: "Thermal (FeSO4, Pb(NO3)2), Electrolytic (H2O), Photolytic (AgCl)", tip: "H2:O2 volume is 2:1 in water" },
          { name: "Displacement", desc: "More reactive metal displaces less reactive: Fe + CuSO4 → FeSO4 + Cu", tip: "Reactivity Series: K > Na > Ca..." },
          { name: "Double Displacement", desc: "Ion exchange yielding ppt: Na2SO4 + BaCl2 → BaSO4↓ + 2NaCl", tip: "BaSO4 is white precipitate" },
          { name: "Redox Reactions", desc: "Simultaneous oxidation (loss of e-) and reduction (gain of e-)", tip: "Oxidizing agent gets reduced" }
        ]
      },
      {
        id: "b3",
        title: "Redox in Daily Life",
        color: "#fbbf24",
        icon: "🛡️",
        items: [
          { name: "Corrosion", desc: "Oxidation of metals by moisture & air. Iron forms rust Fe2O3.xH2O", tip: "Galvanization uses Zinc layer" },
          { name: "Rancidity", desc: "Oxidation of food fats and oils causing foul smell & taste", tip: "Flushed with Nitrogen gas" }
        ]
      },
      {
        id: "b4",
        title: "Board Exam Pitfalls",
        color: "#f87171",
        icon: "⚠️",
        items: [
          { name: "Balancing Rule", desc: "Never alter chemical formula subscripts when balancing coefficients", tip: "Count atoms on both sides" },
          { name: "State Symbols", desc: "Mandatory: (s), (l), (g), (aq) in 3-marker and 5-marker board answers", tip: "Deduction of 0.5M if omitted" }
        ]
      }
    ]
  },

  // --- Science: Life Processes ---
  {
    id: "mm-sci-05",
    chapterId: "sci-05",
    subject: "science",
    subjectName: "Science (Biology)",
    chapterName: "Life Processes",
    icon: "🫀",
    rootNode: {
      title: "Life Processes",
      badge: "Chapter 5",
      coreIdea: "Vital physiological mechanisms maintaining living homeostasis"
    },
    branches: [
      {
        id: "b1",
        title: "Nutrition",
        color: "#4ade80",
        icon: "🌿",
        items: [
          { name: "Autotrophic (Plants)", desc: "6CO2 + 12H2O --Light/Chlorophyll--> C6H12O6 + 6O2 + 6H2O", tip: "Stomata guarded by guard cells" },
          { name: "Heterotrophic (Human)", desc: "Mouth (Amylase) → Stomach (Pepsin, HCl) → Small Intestine (Villi)", tip: "Complete digestion in Small Intestine" }
        ]
      },
      {
        id: "b2",
        title: "Respiration",
        color: "#60a5fa",
        icon: "🫁",
        items: [
          { name: "Aerobic Respiration", desc: "Pyruvate + O2 in Mitochondria → 6CO2 + 6H2O + 38 ATP", tip: "Maximum ATP yield" },
          { name: "Anaerobic (Yeast)", desc: "Pyruvate in absence of O2 → Ethanol + CO2 + 2 ATP", tip: "Fermentation process" },
          { name: "Anaerobic (Muscle)", desc: "Lack of O2 during heavy exercise → Lactic acid (cramps)", tip: "Relieved by hot water bath" }
        ]
      },
      {
        id: "b3",
        title: "Circulation & Heart",
        color: "#f43f5e",
        icon: "❤️",
        items: [
          { name: "Double Circulation", desc: "Blood passes twice through 4-chambered heart per cycle", tip: "Separates oxygenated / deoxygenated" },
          { name: "Arteries vs Veins", desc: "Arteries: thick walls, no valves; Veins: thin walls, have valves", tip: "Pulmonary Artery carries deox blood" }
        ]
      },
      {
        id: "b4",
        title: "Excretion & Nephron",
        color: "#a78bfa",
        icon: "💧",
        items: [
          { name: "Glomerular Filtration", desc: "High hydrostatic pressure filters blood in Bowman capsule", tip: "Proteins & blood cells stay in blood" },
          { name: "Selective Reabsorption", desc: "Tubules reabsorb glucose, amino acids, salts, water", tip: "Regulated by hydration level" }
        ]
      }
    ]
  },

  // --- Science: Electricity ---
  {
    id: "mm-sci-11",
    chapterId: "sci-11",
    subject: "science",
    subjectName: "Science (Physics)",
    chapterName: "Electricity",
    icon: "⚡",
    rootNode: {
      title: "Electricity & Circuits",
      badge: "Chapter 11",
      coreIdea: "Electric charge motion, potential difference, circuits and heating power"
    },
    branches: [
      {
        id: "b1",
        title: "Ohm's Law & Resistance",
        color: "#eab308",
        icon: "📐",
        items: [
          { name: "V = I × R", desc: "Potential difference is directly proportional to current at constant temp", tip: "Slope of V-I graph = R" },
          { name: "Resistance Factors", desc: "R = ρ(L / A). Depends on length, cross-section, material, temperature", tip: "Resistivity ρ unit is Ω·m" }
        ]
      },
      {
        id: "b2",
        title: "Combination of Resistors",
        color: "#3b82f6",
        icon: "🔄",
        items: [
          { name: "Series Circuit", desc: "R_s = R1 + R2 + R3. Current I is same everywhere, voltage divides", tip: "Total resistance increases" },
          { name: "Parallel Circuit", desc: "1/R_p = 1/R1 + 1/R2. Voltage V is same everywhere, current divides", tip: "Total resistance decreases" }
        ]
      },
      {
        id: "b3",
        title: "Heating Effect & Power",
        color: "#ef4444",
        icon: "🔥",
        items: [
          { name: "Joule's Law: H = I²Rt", desc: "Heat produced is proportional to I², R, and time t", tip: "Derive using W = VIt = I²Rt" },
          { name: "Electric Power: P = VI", desc: "P = VI = I²R = V²/R. SI unit Watt (W)", tip: "1 kWh = 3.6 × 10⁶ Joules" }
        ]
      }
    ]
  },

  // --- Mathematics: Real Numbers & Polynomials ---
  {
    id: "mm-math-01",
    chapterId: "math-01",
    subject: "maths",
    subjectName: "Mathematics",
    chapterName: "Real Numbers & Number Systems",
    icon: "🔢",
    rootNode: {
      title: "Real Numbers & Primes",
      badge: "Chapter 1",
      coreIdea: "Fundamental Theorem of Arithmetic and Irrationality Proofs"
    },
    branches: [
      {
        id: "b1",
        title: "Fundamental Theorem",
        color: "#06b6d4",
        icon: "🌲",
        items: [
          { name: "Prime Factorisation", desc: "Every composite number can be uniquely expressed as product of primes", tip: "Unique apart from order" },
          { name: "HCF × LCM = a × b", desc: "Valid strictly for TWO numbers. Fails for three numbers!", tip: "Always test product identity" }
        ]
      },
      {
        id: "b2",
        title: "Irrationality Proofs",
        color: "#ec4899",
        icon: "⚡",
        items: [
          { name: "Proof by Contradiction", desc: "Assume √p = a/b where a, b are co-prime integers", tip: "Deduce that p divides both a and b" },
          { name: "Composite Irrational", desc: "Proof for (3 + 2√5) or (1/√2) using contradiction", tip: "Isolate irrational radical on LHS" }
        ]
      }
    ]
  },

  // --- Mathematics: Triangles & Trigonometry ---
  {
    id: "mm-math-06",
    chapterId: "math-06",
    subject: "maths",
    subjectName: "Mathematics",
    chapterName: "Triangles & Trigonometry",
    icon: "📐",
    rootNode: {
      title: "Triangles & Trigonometry",
      badge: "Chapters 6 & 8",
      coreIdea: "Geometric similarity theorems and angle-ratio relationships"
    },
    branches: [
      {
        id: "b1",
        title: "BPT (Thales Theorem)",
        color: "#8b5cf6",
        icon: "📏",
        items: [
          { name: "Statement", desc: "DE || BC in ΔABC  ==>  AD/DB = AE/EC", tip: "Mandatory 5-mark theorem proof" },
          { name: "Similarity Criteria", desc: "AAA, SSS, SAS criteria for similarity between triangles", tip: "Ratio of corresponding sides equal" }
        ]
      },
      {
        id: "b2",
        title: "Trigonometric Identities",
        color: "#14b8a6",
        icon: "🎯",
        items: [
          { name: "Fundamental Identity", desc: "sin²θ + cos²θ = 1  ==>  1 + tan²θ = sec²θ  ==>  1 + cot²θ = cosec²θ", tip: "Convert everything to sin and cos" },
          { name: "Heights & Distances", desc: "Angle of Elevation (looking up) vs Angle of Depression (looking down)", tip: "tan 30° = 1/√3, tan 45° = 1, tan 60° = √3" }
        ]
      }
    ]
  },

  // --- Social Science: Nationalism in India ---
  {
    id: "mm-sst-his-02",
    chapterId: "sst-his-02",
    subject: "social_science",
    subjectName: "Social Science (History)",
    chapterName: "Nationalism in India",
    icon: "🇮🇳",
    rootNode: {
      title: "Nationalism in India",
      badge: "History Ch 2",
      coreIdea: "Anti-colonial mass mobilization, Satyagraha and civil resistance"
    },
    branches: [
      {
        id: "b1",
        title: "Early Satyagrahas (1916-1919)",
        color: "#f97316",
        icon: "✊",
        items: [
          { name: "Champaran (1916)", desc: "Against oppressive indigo plantation system in Bihar", tip: "First civil disobedience" },
          { name: "Kheda & Ahmedabad (1917-18)", desc: "Crop failure revenue remission & cotton mill workers wage hike", tip: "Hunger strike used" },
          { name: "Rowlatt Act (1919)", desc: "Detention without trial for 2 years; led to nationwide hartal", tip: "Called the Black Act" }
        ]
      },
      {
        id: "b2",
        title: "Non-Cooperation Movement (1920-22)",
        color: "#10b981",
        icon: "🕊️",
        items: [
          { name: "Nagpur Congress 1920", desc: "Adopted NCM combining Khilafat and Swaraj demands", tip: "Boycott of British titles, cloth, courts" },
          { name: "Chauri Chaura (Feb 1922)", desc: "Violent incident in Gorakhpur killing 22 police; Gandhi calls off NCM", tip: "Led to formation of Swaraj Party" }
        ]
      },
      {
        id: "b3",
        title: "Civil Disobedience & Salt March (1930)",
        color: "#6366f1",
        icon: "🌊",
        items: [
          { name: "Dandi Salt March", desc: "12 March to 6 April 1930: 240 miles from Sabarmati to Dandi with 78 volunteers", tip: "Broke salt law on 6 April" },
          { name: "Gandhi-Irwin Pact (1931)", desc: "Agreed to attend Second Round Table Conference in London", tip: "Released political prisoners" }
        ]
      }
    ]
  },

  // --- English: First Flight & Writing Skills ---
  {
    id: "mm-eng-01",
    chapterId: "eng-01",
    subject: "english",
    subjectName: "English Language & Literature",
    chapterName: "Prose, Poetry & Analytical Writing",
    icon: "📖",
    rootNode: {
      title: "English Board Blueprint",
      badge: "Code 184",
      coreIdea: "Theme comprehension, character arcs, and formal analytical writing"
    },
    branches: [
      {
        id: "b1",
        title: "Key Literature Themes",
        color: "#0ea5e9",
        icon: "✉️",
        items: [
          { name: "A Letter to God", desc: "Lencho's absolute innocent faith in God juxtaposed with human irony", tip: "Irony: post office clerks helped him" },
          { name: "Nelson Mandela", desc: "Apartheid struggle, meaning of courage, twin obligations of man", tip: "Courage is triumph over fear" },
          { name: "Bholi", desc: "Transformation from stammering neglected girl to confident self-reliant woman", tip: "Education as empowerment catalyst" }
        ]
      },
      {
        id: "b2",
        title: "Writing & Grammar Skills",
        color: "#a855f7",
        icon: "✍️",
        items: [
          { name: "Formal Letter to Editor", desc: "Sender address → Date → Receiver address → Subject → Salutation → 3 Body paras", tip: "Closing: Yours sincerely" },
          { name: "Analytical Paragraph", desc: "Introductory trend statement → Data comparison (peaks, troughs) → Concluding insight", tip: "Strict 100-120 word count" }
        ]
      }
    ]
  },

  // --- Hindi: Kshitij, Sparsh & Vyakaran ---
  {
    id: "mm-hin-01",
    chapterId: "hin-01",
    subject: "hindi",
    subjectName: "Hindi (Course A & B)",
    chapterName: "क्षितिज, स्पर्श एवं व्यावहारिक व्याकरण",
    icon: "🪶",
    rootNode: {
      title: "हिंदी बोर्ड संपूर्ण संकलन",
      badge: "हिंदी 'अ' एवं 'ब'",
      coreIdea: "साहित्यिक संवेदना, चरित्र-चित्रण एवं व्यावहारिक व्याकरण के सूत्र"
    },
    branches: [
      {
        id: "b1",
        title: "प्रमुख गद्य एवं पद्य पाठ",
        color: "#f43f5e",
        icon: "👓",
        items: [
          { name: "नेताजी का चश्मा", desc: "कैप्टन चश्मेवाले की निःस्वार्थ देशभक्ति एवं हालदार साहब की संवेदनशीलता", tip: "मूर्ति पर सरकंडे का चश्मा नई पीढ़ी की आशा" },
          { name: "बालगोबिन भगत", desc: "कबीरपंथी गृहस्थ साधु, समाज-सुधारक, पुत्रवधू का पुनर्विवाह", tip: "कर्मकांड का विरोध" },
          { name: "सूरदास के पद", desc: "गोपियों का अनन्य कृष्ण-प्रेम बनाम उद्धव का शुष्क ज्ञान-योग", tip: "भ्रमरगीत परंपरा का व्यंग्य" }
        ]
      },
      {
        id: "b2",
        title: "व्यावहारिक व्याकरण (16 अंक)",
        color: "#10b981",
        icon: "📝",
        items: [
          { name: "रचना के आधार पर वाक्य", desc: "सरल वाक्य (एक समापिका क्रिया), संयुक्त वाक्य (योजक शब्द), मिश्र वाक्य (प्रधान+आश्रित)", tip: "योजक: किंतु, परंतु, क्योंकि, जो...सो" },
          { name: "वाच्य (Voice)", desc: "कर्तृवाच्य (कर्ता प्रधान), कर्मवाच्य (कर्म प्रधान - 'के द्वारा'), भाववाच्य (भाव प्रधान)", tip: "भाववाच्य में अकर्मक क्रिया प्रयुक्त" },
          { name: "पद-परिचय", desc: "संज्ञा, सर्वनाम, विशेषण, क्रिया का लिंग, वचन, कारक व काल निर्देश", tip: "व्याकरणिक कोटियाँ पूर्ण लिखें" }
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MIND_MAPS_DATA };
}
