/**
 * Class 10th AI - Daily Practice Problems (DPP) & Interactive Quizzes
 * Topic-wise practice problem sets with instant evaluation, hints, and explanations.
 */

const DPP_SETS = {
  "sci-01": {
    chapterId: "sci-01",
    chapterTitle: "Chemical Reactions and Equations",
    dppNumber: 1,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "dpp-sci-01-q1",
        difficulty: "Basic",
        question: "When dilute hydrochloric acid is added to iron fillings, what observation is recorded?",
        options: [
          "Hydrogen gas and iron(II) chloride are produced.",
          "Chlorine gas and iron hydroxide are produced.",
          "No reaction takes place.",
          "Iron salt and water are produced."
        ],
        correct: 0,
        explanation: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g)↑. Hydrogen gas is evolved and iron(II) chloride solution is formed.",
        hint: "Iron displaces hydrogen from acids because it is above hydrogen in the reactivity series."
      },
      {
        id: "dpp-sci-01-q2",
        difficulty: "Standard",
        question: "Barium chloride on reacting with ammonium sulphate forms barium sulphate and ammonium chloride. Which of the following correctly classifies this reaction?",
        options: [
          "Displacement reaction only",
          "Precipitation and Double displacement reaction",
          "Combination reaction",
          "Neutralization reaction only"
        ],
        correct: 1,
        explanation: "BaCl₂ + (NH₄)₂SO₄ → BaSO₄↓ (white ppt) + 2NH₄Cl. This is both double displacement (ion exchange) and precipitation (insoluble BaSO₄ solid).",
        hint: "Look for exchange of mutually paired ions creating an insoluble white precipitate."
      },
      {
        id: "dpp-sci-01-q3",
        difficulty: "HOTS",
        question: "A shiny brown element 'X' on heating in air becomes black in colour. Identify 'X' and the black coloured compound formed:",
        options: [
          "X = Cu, Black compound = CuO",
          "X = Fe, Black compound = Fe₂O₃",
          "X = Ag, Black compound = Ag₂S",
          "X = Mg, Black compound = MgO"
        ],
        correct: 0,
        explanation: "Copper (Cu) is a reddish-brown metal. On heating in air, it oxidizes to form Copper(II) Oxide (CuO), which is black: 2Cu + O₂ --Δ--> 2CuO.",
        hint: "This metal has a characteristic reddish-brown metallic luster before oxidation."
      },
      {
        id: "dpp-sci-01-q4",
        difficulty: "Standard",
        question: "Fatty foods become rancid upon long exposure to air due to:",
        options: [
          "Hydrolysis",
          "Aerial oxidation",
          "Hydrogenation",
          "Decomposition"
        ],
        correct: 1,
        explanation: "Rancidity is caused by the oxidation of unsaturated fats and oils present in food when exposed to atmospheric oxygen.",
        hint: "Think about why chips bags are packed with inert nitrogen gas."
      }
    ]
  },

  "sci-05": {
    chapterId: "sci-05",
    chapterTitle: "Life Processes",
    dppNumber: 2,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "dpp-sci-05-q1",
        difficulty: "Basic",
        question: "During deficiency of oxygen in human skeletal muscle cells, pyruvate is catabolized into:",
        options: [
          "Ethanol + CO₂",
          "Lactic Acid + Energy",
          "CO₂ + H₂O",
          "Glucose + ATP"
        ],
        correct: 1,
        explanation: "In muscle tissues under sudden heavy exercise, insufficient O₂ leads to anaerobic pathway converting pyruvate to 3-carbon Lactic Acid, leading to muscle fatigue/cramps.",
        hint: "Causes muscle cramps after sprinting."
      },
      {
        id: "dpp-sci-05-q2",
        difficulty: "Standard",
        question: "Which gland secretes an enzyme capable of digesting both emulsified fats and proteins in the duodenum?",
        options: [
          "Liver",
          "Pancreas",
          "Gastric glands",
          "Salivary glands"
        ],
        correct: 1,
        explanation: "Pancreas secretes Pancreatic Juice containing Trypsin (proteins to peptones) and Lipase (emulsified fats to fatty acids). Liver produces bile which emulsifies fats but contains no enzymes.",
        hint: "Produces both Trypsin and Lipase."
      },
      {
        id: "dpp-sci-05-q3",
        difficulty: "HOTS",
        question: "The filtration units of kidneys called nephrons filter blood in the:",
        options: [
          "Henle's Loop",
          "Glomerulus enclosed within Bowman's Capsule",
          "Collecting Duct",
          "Renal Pelvis"
        ],
        correct: 1,
        explanation: "Ultrafiltration of blood takes place under high pressure in the glomerulus—a tuft of capillaries enclosed inside the cup-shaped Bowman's capsule.",
        hint: "Cup-shaped structure surrounding the capillary cluster."
      }
    ]
  },

  "math-08": {
    chapterId: "math-08",
    chapterTitle: "Introduction to Trigonometry",
    dppNumber: 3,
    timeLimitMinutes: 12,
    questions: [
      {
        id: "dpp-math-08-q1",
        difficulty: "Basic",
        question: "If sin θ = 1/2, then the value of (sec θ × cot θ) is:",
        options: [
          "1",
          "2",
          "√3",
          "1/√3"
        ],
        correct: 1,
        explanation: "If sin θ = 1/2, θ = 30°. sec(30°) = 2/√3, cot(30°) = √3. Therefore, sec(30°) × cot(30°) = (2/√3) × √3 = 2.",
        hint: "Find angle θ first (sin 30° = 1/2)."
      },
      {
        id: "dpp-math-08-q2",
        difficulty: "Standard",
        question: "The value of (1 + tan² A) / (1 + cot² A) is equal to:",
        options: [
          "sec² A",
          "-1",
          "cot² A",
          "tan² A"
        ],
        correct: 3,
        explanation: "1 + tan² A = sec² A = 1/cos² A. 1 + cot² A = cosec² A = 1/sin² A. Ratio = (1/cos² A) / (1/sin² A) = sin² A / cos² A = tan² A.",
        hint: "Use fundamental identities: 1 + tan² A = sec² A and 1 + cot² A = cosec² A."
      },
      {
        id: "dpp-math-08-q3",
        difficulty: "HOTS",
        question: "If sec θ + tan θ = p, what is the value of sec θ in terms of p?",
        options: [
          "(p² + 1) / 2p",
          "(p² - 1) / 2p",
          "p / 2",
          "2p / (p² + 1)"
        ],
        correct: 0,
        explanation: "sec² θ - tan² θ = 1 ==> (sec θ - tan θ)(sec θ + tan θ) = 1. Since sec θ + tan θ = p, sec θ - tan θ = 1/p. Adding both equations: 2 sec θ = p + 1/p = (p² + 1)/p ==> sec θ = (p² + 1) / 2p.",
        hint: "Recall identity sec² θ - tan² θ = 1 and factor as (sec θ - tan θ)(sec θ + tan θ)."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DPP_SETS };
}
