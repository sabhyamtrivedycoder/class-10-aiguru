/**
 * Class 10th AI - Official Pattern Sample Question Papers (SQP) & Blueprints
 * Structured for the 80-mark Class 10 Board Exam simulation.
 */

const SAMPLE_PAPERS_DATA = [
  {
    id: "sqp-sci-2025",
    subject: "Science (086)",
    title: "CBSE Class 10 Science Official Model Mock Paper",
    totalMarks: 80,
    timeHours: 3,
    blueprint: {
      sectionA: "20 Questions (Q1 - Q20) of 1 Mark each (16 MCQs + 4 Assertion-Reason)",
      sectionB: "6 Very Short Answer Questions (Q21 - Q26) of 2 Marks each",
      sectionC: "7 Short Answer Questions (Q27 - Q33) of 3 Marks each",
      sectionD: "3 Long Answer Questions (Q34 - Q36) of 5 Marks each",
      sectionE: "3 Source-based / Case-based units of assessment (Q37 - Q39) of 4 Marks each"
    },
    strategyTips: [
      "Utilize the first 15 minutes of cool-off reading time to scan Section D (5-markers) and decide internal choices.",
      "Target finishing Section A (20 MCQs) within 35 minutes.",
      "Reserve at least 20 minutes at the end for checking units, ray diagram arrows, and equation balancing."
    ],
    sampleQuestions: [
      {
        section: "Section A (1 Mark)",
        qNum: 1,
        question: "A student performs the experiment of heating ferrous sulphate crystals in a boiling tube. Which gas is responsible for the characteristic smell of burning sulphur?",
        answer: "Sulphur Dioxide (SO₂) gas: 2FeSO₄(s) --Δ--> Fe₂O₃(s) + SO₂(g) + SO₃(g)."
      },
      {
        section: "Section B (2 Marks)",
        qNum: 21,
        question: "Why does the cord of an electric heater not glow while the heating element does?",
        answer: "The heating element is made of an alloy (like Nichrome) which possesses high resistivity. According to Joule's Law of heating (H = I²Rt), higher resistance generates intense heat, making it glow red hot. In contrast, the connecting copper cord has negligible resistance, so very little heat is developed."
      },
      {
        section: "Section D (5 Marks)",
        qNum: 34,
        question: "(a) Draw the ray diagram for a convex lens when the object is placed between F₁ and 2F₁.\n(b) A 5 cm tall object is placed perpendicular to the principal axis of a convex lens of focal length 20 cm. The distance of the object from the lens is 30 cm. Find the position, size, and nature of the image formed.",
        answer: `
(a) Ray diagram shows rays refracting through optical center and principal focus, converging to form a real, inverted, and magnified image beyond 2F₂.
(b) Given: h = +5 cm, f = +20 cm, u = -30 cm
Lens formula: 1/f = 1/v - 1/u ==> 1/v = 1/f + 1/u = 1/20 + 1/(-30) = (3 - 2)/60 = 1/60
v = +60 cm (Image formed 60 cm on the other side of lens; Real and Inverted).
Magnification m = v / u = +60 / -30 = -2
Height of image h' = m × h = -2 × 5 cm = -10 cm (Twice the object size).
        `
      }
    ]
  },

  {
    id: "sqp-math-2025",
    subject: "Mathematics Standard (041)",
    title: "CBSE Class 10 Mathematics Standard Official Model Paper",
    totalMarks: 80,
    timeHours: 3,
    blueprint: {
      sectionA: "20 Questions of 1 Mark each (18 MCQs + 2 Assertion-Reason)",
      sectionB: "5 Short Answer Type-I Questions of 2 Marks each",
      sectionC: "6 Short Answer Type-II Questions of 3 Marks each",
      sectionD: "4 Long Answer Questions of 5 Marks each",
      sectionE: "3 Case-based Integrated Assessment units of 4 Marks each (sub-components: 1, 1, 2 marks)"
    },
    strategyTips: [
      "Attempt theorems (BPT, Tangent Theorem) with neat diagrams drawn with pencil and ruler.",
      "In AP and Quadratic word problems, always explicitly define what variable 'x' represents.",
      "Check calculations twice in Surface Areas & Volumes before final submission."
    ],
    sampleQuestions: [
      {
        section: "Section A (1 Mark)",
        qNum: 1,
        question: "If two positive integers a and b are written as a = x³y² and b = xy³, where x, y are prime numbers, then HCF(a, b) is:",
        answer: "HCF(a, b) is the product of lowest powers of common prime factors = x¹ × y² = xy²."
      },
      {
        section: "Section D (5 Marks)",
        qNum: 32,
        question: "From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower.",
        answer: `
Let AB be the building = 7 m, and CD be the cable tower of height H.
Draw horizontal line from A meeting CD at E. Then DE = AB = 7 m, and CE = (H - 7) m.
In right ΔABD: tan(45°) = AB / BD ==> 1 = 7 / BD ==> BD = 7 m.
Since AE = BD, AE = 7 m.
In right ΔAEC: tan(60°) = CE / AE ==> √3 = (H - 7) / 7 ==> H - 7 = 7√3
H = 7√3 + 7 = 7(√3 + 1) m ≈ 7(1.732 + 1) = 7(2.732) = 19.124 m.
Height of cable tower is 7(√3 + 1) m or 19.12 m.
        `
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_PAPERS_DATA };
}
