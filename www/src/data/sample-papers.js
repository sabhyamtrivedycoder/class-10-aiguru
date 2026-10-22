/**
 * Class 10 AI Guru - Official Pattern Sample Question Papers (SQP) & Blueprints
 * Structured for the 80-mark Class 10 Board Exam simulation across all subjects.
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
  },

  {
    id: "sqp-sst-2025",
    subject: "Social Science (087)",
    title: "CBSE Class 10 Social Science Board Blueprint Paper",
    totalMarks: 80,
    timeHours: 3,
    blueprint: {
      sectionA: "20 MCQs (Q1 - Q20) of 1 Mark each",
      sectionB: "4 Very Short Answer Questions (Q21 - Q24) of 2 Marks each (limit: 40 words)",
      sectionC: "5 Short Answer Questions (Q25 - Q29) of 3 Marks each (limit: 60 words)",
      sectionD: "4 Long Answer Questions (Q30 - Q33) of 5 Marks each (limit: 120 words)",
      sectionE: "3 Case-Based Questions (Q34 - Q36) of 4 Marks each with sub-questions",
      sectionF: "1 Map Skill Based Question (Q37) of 5 Marks (History: 2 marks, Geography: 3 marks)"
    },
    strategyTips: [
      "Use bullet points with underline headings in 5-markers instead of continuous running paragraphs.",
      "Label map locations with capital letters and arrows."
    ],
    sampleQuestions: [
      {
        section: "Section A (1 Mark)",
        qNum: 1,
        question: "Which of the following treaties recognized Greece as an independent nation in 1832?",
        answer: "Treaty of Constantinople of 1832."
      },
      {
        section: "Section D (5 Marks)",
        qNum: 30,
        question: "Explain the role of credit in economic development. Distinguish between formal and informal sources of credit.",
        answer: "Credit acts as capital for investment in farms, businesses, and education, raising national income. Formal sources (Banks, Cooperatives) are supervised by RBI, offer reasonable interest rates, and protect borrowers from debt traps. Informal sources (Moneylenders, Traders) charge exorbitant rates without oversight, leading to rural impoverishment."
      }
    ]
  },

  {
    id: "sqp-eng-2025",
    subject: "English Language & Literature (184)",
    title: "CBSE Class 10 English Board Blueprint Paper",
    totalMarks: 80,
    timeHours: 3,
    blueprint: {
      sectionA: "Reading Skills (20 Marks) - 2 Unseen Passages (Discursive & Factual)",
      sectionB: "Writing Skills and Grammar (20 Marks) - Formal Letter, Analytical Paragraph, Integrated Grammar",
      sectionC: "Language Through Literature (40 Marks) - Reference to Context (10 Marks), Short & Long Questions (30 Marks)"
    },
    strategyTips: [
      "Follow standard format strictly for Letter to Editor (sender address, date, receiver address, subject, salutation, body, sign-off).",
      "Stick to the 100-120 word count limit for Analytical Paragraph."
    ],
    sampleQuestions: [
      {
        section: "Section B (5 Marks)",
        qNum: 4,
        question: "Write a letter to the Editor of a national daily highlighting the urgent need to preserve groundwater and harvest rainwater in residential colonies.",
        answer: "Format followed: Sender's address, Date, The Editor (National Daily, New Delhi), Subject: Urgent Need for Rainwater Harvesting, Body (Introductory concern regarding depleted water table, practical harvesting solutions, appeal to civic authorities), Yours sincerely."
      },
      {
        section: "Section C (6 Marks)",
        qNum: 10,
        question: "Compassion and empathy can transform any human being. Discuss with reference to Anil and Hari Singh in 'The Thief's Story'.",
        answer: "Anil's calm trust and unconditional kindness touched Hari Singh's conscience. When Hari tried to flee with the stolen cash, the realization of losing an education and a genuine benefactor compelled him to return the wet notes, proving that compassion triumphs over criminality."
      }
    ]
  },

  {
    id: "sqp-hin-2025",
    subject: "Hindi Course 'A' (002)",
    title: "CBSE Class 10 Hindi Board Model Paper",
    totalMarks: 80,
    timeHours: 3,
    blueprint: {
      sectionA: "अपठित बोध (10 अंक) - अपठित गद्यांश एवं काव्यांश",
      sectionB: "व्यावहारिक व्याकरण (16 अंक) - वाक्य भेद, वाच्य, पद-परिचय, रस / मुहावरे",
      sectionC: "पाठ्यपुस्तक एवं पूरक पाठ्यपुस्तक (क्षितिज एवं कृतिका - 34 अंक)",
      sectionD: "रचनात्मक लेखन (20 अंक) - अनुच्छेद, पत्र-लेखन, स्ववृत्त/ई-मेल, विज्ञापन/संदेश"
    },
    strategyTips: [
      "व्याकरण के बहुविकल्पीय प्रश्नों में नियम स्मरण करके सटीक उत्तर चुनें।",
      "साहित्यिक प्रश्नों में पाठ का संदर्भ और लेखक का दृष्टिकोण अवश्य समाहित करें।"
    ],
    sampleQuestions: [
      {
        section: "खंड 'ख' (1 अंक)",
        qNum: 3,
        question: "'जो मेहनत करता है, वह अवश्य सफल होता है।' रचना की दृष्टि से वाक्य का भेद बताइए।",
        answer: "मिश्र वाक्य (यहाँ 'जो मेहनत करता है' आश्रित उपवाक्य है और 'वह अवश्य सफल होता है' मुख्य उपवाक्य है)।"
      },
      {
        section: "खंड 'ग' (6 अंक)",
        qNum: 9,
        question: "गोपियों ने उद्धव के योग संदेश को 'कड़वी ककड़ी' जैसा क्यों बताया? उनके अनुसार योग की आवश्यकता किसे है?",
        answer: "गोपियों का हृदय श्रीकृष्ण के अनन्य प्रेम में लीन था। उद्धव का नीरस, ज्ञान-प्रधान और निराकार ईश्वर का संदेश उनके प्रेम-रस के समक्ष कड़वी ककड़ी के समान अरुचिकर और अग्राह्य लगा। सूरदास जी के अनुसार गोपियों ने कहा कि योग की सीख उन लोगों को दी जानी चाहिए जिनके मन चंचल हैं (चकरी के समान घूमते हैं), उनका मन तो केवल श्रीकृष्ण में स्थिर है।"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SAMPLE_PAPERS_DATA };
}
