/**
 * Class 10th AI - Guru AI Doubt Solver & Concept Assistant
 * Client-side intelligent board examination tutor with embedded NCERT knowledge base.
 */

class Class10AIGuru {
  constructor() {
    this.history = [];
    this.geminiApiKey = typeof localStorage !== 'undefined' ? localStorage.getItem('class10_gemini_api_key') : null;

    // Preloaded High-Yield Class 10 Board Knowledge Base
    this.knowledgeBase = [
      {
        keywords: ["ohm", "ohms law", "v=ir", "resistance", "current potential"],
        response: `⚡ **Ohm's Law Master Breakdown**:
- **Statement**: At a constant temperature, the electric current ($I$) flowing through a metallic conductor is directly proportional to the potential difference ($V$) applied across its ends.
- **Formula**: $$V = I \\times R$$
- **SI Unit of Resistance**: Ohm ($\\Omega$). $1\\,\\Omega = \\frac{1\\,\\text{Volt}}{1\\,\\text{Ampere}}$.
- **V-I Graph**: A straight line passing through the origin. Slope of V-I graph equals Resistance ($R$).
- **Exam Warning**: Remember to state **'at constant temperature'**; failing to write this loses 0.5 marks!`
      },
      {
        keywords: ["mirror formula", "lens formula", "sign convention", "optics formula"],
        response: `🔦 **Optics Sign Convention & Formulas**:
- **Mirror Formula**: $$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$$  *(Magnification: $m = -\\frac{v}{u}$)*
- **Lens Formula**: $$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$$  *(Magnification: $m = +\\frac{v}{u}$)*
- **Topper Sign Convention Rules**:
  1. Object distance $u$ is **ALWAYS negative**.
  2. Focal length $f$ is **negative for Concave** (mirror & lens).
  3. Focal length $f$ is **positive for Convex** (mirror & lens).
  4. Real & inverted image $\\implies m < 0$; Virtual & erect $\\implies m > 0$.`
      },
      {
        keywords: ["photosynthesis", "life processes equation", "nutrition in plants"],
        response: `🌿 **Photosynthesis Core Concept**:
- **Equation**: 
  $$6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow{\\text{Chlorophyll, Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2\\uparrow + 6\\text{H}_2\\text{O}$$
- **Three Sequential Steps (Direct 3-Marker)**:
  1. Absorption of light energy by chlorophyll.
  2. Conversion of light energy to chemical energy and splitting (photolysis) of water into hydrogen and oxygen.
  3. Reduction of carbon dioxide to carbohydrates.`
      },
      {
        keywords: ["bpt", "thales", "basic proportionality theorem", "triangles theorem"],
        response: `📐 **Basic Proportionality Theorem (BPT / Thales)**:
- **Statement**: If a line is drawn parallel to one side of a triangle intersecting the other two sides in distinct points, then it divides the two sides in the same ratio.
- **In $\\Delta ABC$, if $DE \\parallel BC$**:
  $$\\frac{AD}{DB} = \\frac{AE}{EC}$$
- **Corollary**: $\\frac{AD}{AB} = \\frac{AE}{AC}$ and $\\frac{AB}{DB} = \\frac{AC}{EC}$.`
      },
      {
        keywords: ["salt march", "dandi", "civil disobedience", "cdm"],
        response: `🇮🇳 **Dandi Salt March (1930) Key Points**:
- **Leader**: Mahatma Gandhi with 78 volunteers.
- **Route**: Sabarmati Ashram to Dandi (Gujarat coast) — 240 miles in 24 days (12 March – 6 April 1930).
- **Core Action**: Ceremonially manufactured salt by boiling sea water, breaking the British salt monopoly.
- **Significance**: Inaugurated the Civil Disobedience Movement nationwide.`
      },
      {
        keywords: ["schedule", "timetable", "how to study", "score 95", "revision strategy"],
        response: `🎯 **Class 10 Board 95%+ Strategy Blueprint**:
1. **The 3-Pass Rule**: 
   - Pass 1: NCERT line-by-line reading (especially Science boxes and Intext questions).
   - Pass 2: Solve 10 years of chapter-wise PYQs from our PYQ Vault.
   - Pass 3: Timed 3-hour sample papers to master speed and presentation.
2. **Daily Routine**:
   - Morning (6:00 - 8:00 AM): High-retention topics (Biology diagrams, History dates, Chemistry formulas).
   - Afternoon: Maths numerical practice (30 problems/day).
   - Evening: Solve 1 DPP set on this app and analyze incorrect options.`
      }
    ];
  }

  ask(query) {
    if (!query || typeof query !== 'string') {
      return "Please type a question or select a topic to ask Guru AI!";
    }

    const cleanQuery = query.toLowerCase().trim();

    // 1. Search knowledge base
    for (const item of this.knowledgeBase) {
      if (item.keywords.some(kw => cleanQuery.includes(kw))) {
        return item.response;
      }
    }

    // 2. Generic subject router
    if (cleanQuery.includes("math") || cleanQuery.includes("quadratic") || cleanQuery.includes("polynomial")) {
      return `📐 **Class 10 Mathematics Tip**:
For quadratic equations $ax^2 + bx + c = 0$, calculate the Discriminant:
$$D = b^2 - 4ac$$
- If $D > 0$: Two distinct real roots ($x = \\frac{-b \\pm \\sqrt{D}}{2a}$).
- If $D = 0$: Two equal real roots ($x = -\\frac{b}{2a}$).
- If $D < 0$: No real roots.
Always remember to check your solutions by back-substituting into the original equation!`;
    }

    if (cleanQuery.includes("chem") || cleanQuery.includes("acid") || cleanQuery.includes("metal")) {
      return `🧪 **Class 10 Chemistry Tip**:
Remember the Reactivity Series mnemonic:
**P**lease **S**top **C**alling **M**e **A** **C**areless **Z**ebra, **I**nstead **T**ry **L**earning **H**ow **C**opper **M**akes **S**ilver **G**old
(K > Na > Ca > Mg > Al > Zn > Fe > Pb > [H] > Cu > Hg > Ag > Au).
Metals placed above hydrogen displace hydrogen gas from dilute acids!`;
    }

    if (cleanQuery.includes("bio") || cleanQuery.includes("nephron") || cleanQuery.includes("respiration")) {
      return `🫀 **Class 10 Biology Tip**:
Aerobic vs Anaerobic Respiration:
- Aerobic: Occurs in Mitochondria, requires $O_2$, releases $38\\text{ ATP} + \\text{CO}_2 + \\text{H}_2\\text{O}$.
- Anaerobic in Muscle: Occurs during oxygen lack, releases Lactic Acid $+ 2\\text{ ATP}$ (causes muscle cramps).
- Anaerobic in Yeast: Releases Ethanol $+ \\text{CO}_2 + 2\\text{ ATP}$ (used in brewing/baking).`;
    }

    // Default intelligent guidance
    return `💡 **Class 10 Board AI Assistant**:
I analyzed your query: *"**${query}**"*.
To prepare this topic for board exams:
1. Review the corresponding chapter in the **Notes Hub**.
2. Inspect the visual **Sketch Notes** to memorize any associated ray or anatomy diagrams.
3. Solve the **PYQs from 2004-2024** to observe the exact question variations asked by CBSE.
4. Attempt today's **DPP set** to verify your speed!`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Class10AIGuru };
}
