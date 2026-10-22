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
  ],

  english: [
    {
      id: "eng-01",
      number: 1,
      name: "A Letter to God (G.L. Fuentes)",
      unit: "First Flight (Prose)",
      weightage: "4-5 Marks",
      tags: ["Lencho", "Faith", "Irony", "Postmaster"],
      icon: "✉️"
    },
    {
      id: "eng-02",
      number: 2,
      name: "Nelson Mandela: Long Walk to Freedom",
      unit: "First Flight (Prose)",
      weightage: "5-6 Marks",
      tags: ["Apartheid", "Freedom", "Courage", "Inauguration"],
      icon: "🇿🇦"
    },
    {
      id: "eng-03",
      number: 3,
      name: "From the Diary of Anne Frank",
      unit: "First Flight (Prose)",
      weightage: "4-5 Marks",
      tags: ["Kitty", "Secret Annex", "Introspection", "Mr Keesing"],
      icon: "📔"
    },
    {
      id: "eng-04",
      number: 4,
      name: "Glimpses of India (Baker, Coorg, Tea from Assam)",
      unit: "First Flight (Prose)",
      weightage: "5-6 Marks",
      tags: ["Pader", "Kodagu", "Assam Tea Plantations"],
      icon: "☕"
    },
    {
      id: "eng-05",
      number: 5,
      name: "Madam Rides the Bus",
      unit: "First Flight (Prose)",
      weightage: "4-5 Marks",
      tags: ["Valli", "Self-respect", "Journey of Life and Death"],
      icon: "🚌"
    },
    {
      id: "eng-06",
      number: 6,
      name: "The Sermon at Benares",
      unit: "First Flight (Prose)",
      weightage: "4-5 Marks",
      tags: ["Gautama Buddha", "Kisa Gotami", "Mustard Seed", "Mortality"],
      icon: "🧘"
    },
    {
      id: "eng-07",
      number: 7,
      name: "Poetry: Dust of Snow, Fire and Ice, Tiger in the Zoo",
      unit: "First Flight (Poetry)",
      weightage: "6-7 Marks",
      tags: ["Robert Frost", "Metaphor", "Symbolism", "Rhyme Scheme"],
      icon: "❄️"
    },
    {
      id: "eng-08",
      number: 8,
      name: "A Triumph of Surgery",
      unit: "Footprints without Feet",
      weightage: "4 Marks",
      tags: ["Tricki", "Mrs Pumphrey", "Dr Herriot", "Overfeeding"],
      icon: "🐕"
    },
    {
      id: "eng-09",
      number: 9,
      name: "The Thief's Story",
      unit: "Footprints without Feet",
      weightage: "4-5 Marks",
      tags: ["Hari Singh", "Anil", "Trust", "Transformation"],
      icon: "🗝️"
    },
    {
      id: "eng-10",
      number: 10,
      name: "The Necklace",
      unit: "Footprints without Feet",
      weightage: "5 Marks",
      tags: ["Matilda Loisel", "M. Loisel", "Madame Forestier", "Vanity"],
      icon: "📿"
    },
    {
      id: "eng-11",
      number: 11,
      name: "Bholi",
      unit: "Footprints without Feet",
      weightage: "5-6 Marks",
      tags: ["Sulekha", "Education", "Self-Reliance", "Bishamber"],
      icon: "👧"
    },
    {
      id: "eng-12",
      number: 12,
      name: "Formal Letter & Analytical Paragraph Writing",
      unit: "Writing & Grammar Skills",
      weightage: "10 Marks",
      tags: ["Letter to Editor", "Complaint", "Data Interpretation", "Trend Analysis"],
      icon: "📝"
    }
  ],

  hindi: [
    {
      id: "hin-01",
      number: 1,
      name: "नेताजी का चश्मा (स्वयं प्रकाश)",
      unit: "क्षितिज भाग-2 (गद्य खंड)",
      weightage: "4-5 Marks",
      tags: ["हालदार साहब", "कैप्टन चश्मेवाला", "देशभक्ति", "मूर्ति"],
      icon: "👓"
    },
    {
      id: "hin-02",
      number: 2,
      name: "बालगोबिन भगत (रामवृक्ष बेनीपुरी)",
      unit: "क्षितिज भाग-2 (गद्य खंड)",
      weightage: "5 Marks",
      tags: ["कबीरपंथी", "सामाजिक रूढ़ियों का खंडन", "प्रभाती", "पुतोहू"],
      icon: "🪕"
    },
    {
      id: "hin-03",
      number: 3,
      name: "लखनवी अंदाज़ (यशपाल)",
      unit: "क्षितिज भाग-2 (गद्य खंड)",
      weightage: "4 Marks",
      tags: ["नवाब साहब", "व्यंग्य", "दिखावा", "खीरा"],
      icon: "🥒"
    },
    {
      id: "hin-04",
      number: 4,
      name: "पद - सूरदास",
      unit: "क्षितिज भाग-2 (काव्य खंड)",
      weightage: "4-5 Marks",
      tags: ["गोपियाँ", "उद्धव", "भ्रमरगीत", "योग संदेश vs प्रेम"],
      icon: "🦚"
    },
    {
      id: "hin-05",
      number: 5,
      name: "राम-लक्ष्मण-परशुराम संवाद (तुलसीदास)",
      unit: "क्षितिज भाग-2 (काव्य खंड)",
      weightage: "5 Marks",
      tags: ["धनुष भंग", "लक्ष्मण के व्यंग्य", "चौपाई-दोहा", "वीर एवं रौद्र रस"],
      icon: "🏹"
    },
    {
      id: "hin-06",
      number: 6,
      name: "माता का आँचल (शिवपूजन सहाय)",
      unit: "कृतिका भाग-2",
      weightage: "4 Marks",
      tags: ["भोलानाथ", "बाल सुलभ क्रीड़ाएँ", "शिशु-स्नेह", "माँ का ममत्व"],
      icon: "🤱"
    },
    {
      id: "hin-07",
      number: 7,
      name: "साना-साना हाथ जोड़ि (मधु कांकरिया)",
      unit: "कृतिका भाग-2",
      weightage: "4-5 Marks",
      tags: ["सिक्किम यात्रा", "गंतोक", "कटाओ", "प्रकृति की विराटता"],
      icon: "🏔️"
    },
    {
      id: "hin-08",
      number: 8,
      name: "बड़े भाई साहब (प्रेमचंद)",
      unit: "स्पर्श भाग-2",
      weightage: "5 Marks",
      tags: ["अनुभव बनाम किताबी ज्ञान", "कनकौआ", "भाई का उत्तरदायित्व"],
      icon: "🪁"
    },
    {
      id: "hin-09",
      number: 9,
      name: "साखी - कबीरदास",
      unit: "स्पर्श भाग-2 (पद्य खंड)",
      weightage: "4 Marks",
      tags: ["दोहे", "मीठी वाणी", "कस्तूरी मृग", "ईश्वर भक्ति"],
      icon: "📜"
    },
    {
      id: "hin-10",
      number: 10,
      name: "हिंदी व्याकरण (रचना के आधार पर वाक्य, वाच्य, पद-परिचय, रस / मुहावरे)",
      unit: "व्यावहारिक व्याकरण",
      weightage: "16 Marks",
      tags: ["सरल-संयुक्त-मिश्र", "कर्तृ-कर्म-भाववाच्य", "संज्ञा-सर्वनाम परिचय", "रस निष्पत्ति"],
      icon: "📖"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SYLLABUS_DATA };
}
