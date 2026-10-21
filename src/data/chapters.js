/**
 * Class 10th AI - Master Syllabus & Chapter Index
 * Covers CBSE / NCERT Class 10 curriculum for Science, Mathematics, Social Science, and English.
 */

const SYLLABUS_DATA = {
  science: [
    {
      id: "sci-01",
      number: 1,
      name: "Chemical Reactions and Equations",
      unit: "Chemical Substances - Nature and Behaviour",
      weightage: "7-8 Marks",
      tags: ["Chemistry", "Balancing", "Redox", "Corrosion"],
      icon: "🧪"
    },
    {
      id: "sci-02",
      number: 2,
      name: "Acids, Bases and Salts",
      unit: "Chemical Substances - Nature and Behaviour",
      weightage: "7-8 Marks",
      tags: ["Chemistry", "pH Scale", "Salts", "Chlor-Alkali"],
      icon: "🧫"
    },
    {
      id: "sci-03",
      number: 3,
      name: "Metals and Non-metals",
      unit: "Chemical Substances - Nature and Behaviour",
      weightage: "8-9 Marks",
      tags: ["Chemistry", "Reactivity Series", "Metallurgy", "Ionic Bonds"],
      icon: "🪙"
    },
    {
      id: "sci-04",
      number: 4,
      name: "Carbon and Its Compounds",
      unit: "Chemical Substances - Nature and Behaviour",
      weightage: "8-10 Marks",
      tags: ["Chemistry", "Covalent Bonds", "Homologous Series", "Ethanol"],
      icon: "💎"
    },
    {
      id: "sci-05",
      number: 5,
      name: "Life Processes",
      unit: "World of Living",
      weightage: "9-10 Marks",
      tags: ["Biology", "Nutrition", "Respiration", "Circulation", "Excretion"],
      icon: "🫀"
    },
    {
      id: "sci-06",
      number: 6,
      name: "Control and Coordination",
      unit: "World of Living",
      weightage: "6-7 Marks",
      tags: ["Biology", "Neurons", "Brain", "Plant Hormones", "Reflex Arc"],
      icon: "🧠"
    },
    {
      id: "sci-07",
      number: 7,
      name: "How do Organisms Reproduce?",
      unit: "World of Living",
      weightage: "7-8 Marks",
      tags: ["Biology", "Asexual", "Flower Reproduction", "Human Reproduction"],
      icon: "🌱"
    },
    {
      id: "sci-08",
      number: 8,
      name: "Heredity and Evolution",
      unit: "World of Living",
      weightage: "6-7 Marks",
      tags: ["Biology", "Mendel", "Monohybrid", "Dihybrid", "Sex Determination"],
      icon: "🧬"
    },
    {
      id: "sci-09",
      number: 9,
      name: "Light – Reflection and Refraction",
      unit: "Natural Phenomena",
      weightage: "9-10 Marks",
      tags: ["Physics", "Mirrors", "Lenses", "Ray Diagrams", "Refractive Index"],
      icon: "🔦"
    },
    {
      id: "sci-10",
      number: 10,
      name: "The Human Eye and the Colourful World",
      unit: "Natural Phenomena",
      weightage: "4-5 Marks",
      tags: ["Physics", "Eye Defects", "Prism", "Atmospheric Refraction", "Scattering"],
      icon: "👁️"
    },
    {
      id: "sci-11",
      number: 11,
      name: "Electricity",
      unit: "Effects of Current",
      weightage: "8-9 Marks",
      tags: ["Physics", "Ohm's Law", "Resistors", "Joule's Heating", "Power"],
      icon: "⚡"
    },
    {
      id: "sci-12",
      number: 12,
      name: "Magnetic Effects of Electric Current",
      unit: "Effects of Current",
      weightage: "6-7 Marks",
      tags: ["Physics", "Right Hand Thumb", "Solenoid", "Fleming's Left Hand"],
      icon: "🧲"
    },
    {
      id: "sci-13",
      number: 13,
      name: "Our Environment",
      unit: "Natural Resources",
      weightage: "4-5 Marks",
      tags: ["Biology", "Food Chain", "10% Law", "Biological Magnification", "Ozone"],
      icon: "🌿"
    }
  ],

  maths: [
    {
      id: "math-01",
      number: 1,
      name: "Real Numbers",
      unit: "Number Systems",
      weightage: "6 Marks",
      tags: ["Fundamental Theorem", "Irrationality Proofs", "L.C.M & H.C.F"],
      icon: "🔢"
    },
    {
      id: "math-02",
      number: 2,
      name: "Polynomials",
      unit: "Algebra",
      weightage: "4-5 Marks",
      tags: ["Zeroes", "Relationship with Coefficients", "Quadratic Graph"],
      icon: "📉"
    },
    {
      id: "math-03",
      number: 3,
      name: "Pair of Linear Equations in Two Variables",
      unit: "Algebra",
      weightage: "6-7 Marks",
      tags: ["Substitution", "Elimination", "Consistency", "Word Problems"],
      icon: "📊"
    },
    {
      id: "math-04",
      number: 4,
      name: "Quadratic Equations",
      unit: "Algebra",
      weightage: "6-7 Marks",
      tags: ["Factorisation", "Quadratic Formula", "Discriminant", "Nature of Roots"],
      icon: "🎯"
    },
    {
      id: "math-05",
      number: 5,
      name: "Arithmetic Progressions (AP)",
      unit: "Algebra",
      weightage: "6 Marks",
      tags: ["nth Term", "Sum of First n Terms", "Word Applications"],
      icon: "📈"
    },
    {
      id: "math-06",
      number: 6,
      name: "Triangles",
      unit: "Geometry",
      weightage: "8-9 Marks",
      tags: ["BPT (Thales Theorem)", "Converse of BPT", "Criteria for Similarity"],
      icon: "📐"
    },
    {
      id: "math-07",
      number: 7,
      name: "Coordinate Geometry",
      unit: "Coordinate Geometry",
      weightage: "6 Marks",
      tags: ["Distance Formula", "Section Formula", "Midpoint Formula"],
      icon: "🗺️"
    },
    {
      id: "math-08",
      number: 8,
      name: "Introduction to Trigonometry",
      unit: "Trigonometry",
      weightage: "7-8 Marks",
      tags: ["T-Ratios", "Standard Values 0-90°", "Trig Identities: sin²θ+cos²θ=1"],
      icon: "📏"
    },
    {
      id: "math-09",
      number: 9,
      name: "Some Applications of Trigonometry",
      unit: "Trigonometry",
      weightage: "4-5 Marks",
      tags: ["Heights & Distances", "Angle of Elevation", "Angle of Depression"],
      icon: "🏔️"
    },
    {
      id: "math-09b",
      number: 10,
      name: "Circles",
      unit: "Geometry",
      weightage: "6 Marks",
      tags: ["Tangent Theorem", "Lengths of Tangents from External Point"],
      icon: "⭕"
    },
    {
      id: "math-11",
      number: 11,
      name: "Areas Related to Circles",
      unit: "Mensuration",
      weightage: "4-5 Marks",
      tags: ["Sector of Circle", "Segment of Circle", "Perimeter & Area"],
      icon: "🍕"
    },
    {
      id: "math-12",
      number: 12,
      name: "Surface Areas and Volumes",
      unit: "Mensuration",
      weightage: "6-7 Marks",
      tags: ["Combination of Solids", "Cylinder", "Cone", "Hemisphere"],
      icon: "🧊"
    },
    {
      id: "math-13",
      number: 13,
      name: "Statistics",
      unit: "Statistics & Probability",
      weightage: "7 Marks",
      tags: ["Mean (Direct & Assumed)", "Median", "Mode", "Empirical Relationship"],
      icon: "📊"
    },
    {
      id: "math-14",
      number: 14,
      name: "Probability",
      unit: "Statistics & Probability",
      weightage: "4 Marks",
      tags: ["Theoretical Probability", "Cards", "Dice", "Coins"],
      icon: "🎲"
    }
  ],

  social_science: [
    {
      id: "sst-his-01",
      number: 1,
      name: "The Rise of Nationalism in Europe",
      unit: "History (India and the Contemporary World II)",
      weightage: "5-6 Marks",
      tags: ["French Revolution", "Giuseppe Mazzini", "Unification of Germany & Italy", "Balkans"],
      icon: "🏰"
    },
    {
      id: "sst-his-02",
      number: 2,
      name: "Nationalism in India",
      unit: "History (India and the Contemporary World II)",
      weightage: "6-7 Marks",
      tags: ["Non-Cooperation", "Civil Disobedience", "Rowlatt Act", "Dandi March", "Simon Commission"],
      icon: "🇮🇳"
    },
    {
      id: "sst-geo-01",
      number: 3,
      name: "Resources and Development",
      unit: "Geography (Contemporary India II)",
      weightage: "4 Marks",
      tags: ["Soil Types", "Soil Erosion", "Sustainable Development", "Agenda 21"],
      icon: "🌍"
    },
    {
      id: "sst-geo-04",
      number: 4,
      name: "Agriculture",
      unit: "Geography (Contemporary India II)",
      weightage: "5 Marks",
      tags: ["Kharif/Rabi/Zaid", "Rice & Wheat", "Commercial Farming", "Green Revolution"],
      icon: "🌾"
    },
    {
      id: "sst-pol-01",
      number: 5,
      name: "Power Sharing",
      unit: "Political Science (Democratic Politics II)",
      weightage: "4-5 Marks",
      tags: ["Belgium Model", "Sri Lanka Majoritarianism", "Horizontal & Vertical Sharing"],
      icon: "⚖️"
    },
    {
      id: "sst-pol-02",
      number: 6,
      name: "Federalism",
      unit: "Political Science (Democratic Politics II)",
      weightage: "4-5 Marks",
      tags: ["Union/State/Concurrent Lists", "Decentralisation", "Panchayati Raj", "Language Policy"],
      icon: "🏛️"
    },
    {
      id: "sst-eco-01",
      number: 7,
      name: "Development",
      unit: "Economics (Understanding Economic Development)",
      weightage: "4-5 Marks",
      tags: ["Per Capita Income", "HDI", "Public Facilities", "Sustainable Development"],
      icon: "📈"
    },
    {
      id: "sst-eco-03",
      number: 8,
      name: "Money and Credit",
      unit: "Economics (Understanding Economic Development)",
      weightage: "5-6 Marks",
      tags: ["Formal vs Informal Credit", "Reserve Bank Role", "SHGs", "Collateral"],
      icon: "💳"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SYLLABUS_DATA };
}
