/**
 * Class 10th AI - Comprehensive Chapter Notes & One-Page Cheat Sheets
 * Meticulously curated for CBSE Board Exam high-yield scoring.
 */

const NOTES_DATA = {
  "sci-01": {
    chapterId: "sci-01",
    title: "Chemical Reactions and Equations",
    subject: "Science (Chemistry)",
    readTime: "12 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Chemical Reaction", def: "A process in which one or more substances (reactants) undergo a transformation to form new substances (products) with entirely different properties." },
        { term: "Balanced Chemical Equation", def: "An equation where the number of atoms of each element is equal on both the reactant and product sides, satisfying the Law of Conservation of Mass." },
        { term: "Precipitate", def: "An insoluble solid that emerges from a liquid solution during a double displacement reaction." },
        { term: "Rancidity", def: "Aerial oxidation of fats and oils in food marked by unpleasant smell and taste." }
      ],
      mustKnowFormulas: [
        "Combination: A + B → AB (e.g., CaO + H₂O → Ca(OH)₂ + Heat [Slaking of Lime])",
        "Decomposition (Thermal): 2FeSO₄(s) --Δ--> Fe₂O₃(s) + SO₂(g) + SO₃(g) [Green to Reddish Brown]",
        "Photolytic Decomposition: 2AgCl(s) --Sunlight--> 2Ag(s) + Cl₂(g) [White to Grey, Black & White photography]",
        "Displacement: Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s) [Blue solution turns light green]",
        "Double Displacement / Precipitation: Na₂SO₄(aq) + BaCl₂(aq) → BaSO₄(s)↓ (white ppt) + 2NaCl(aq)",
        "Redox: CuO + H₂ --Δ--> Cu + H₂O (CuO is reduced to Cu; H₂ is oxidised to H₂O)"
      ],
      topperExamTips: [
        "Always write physical state notations: (s), (l), (g), (aq) in 3-mark and 5-mark answers.",
        "Respiration is an exothermic reaction because glucose combines with oxygen in cells releasing ATP energy.",
        "To prevent rancidity: flush chips bags with inert Nitrogen (N₂) gas, use airtight containers, or add antioxidants like BHA."
      ]
    },
    fullNotesMarkdown: `
# Chemical Reactions and Equations — Master Board Notes

## 1. Characteristics of Chemical Reactions
A chemical reaction is confirmed by any of these 4 observable changes:
1. **Change in State**: e.g., Wax candle burning (solid to liquid and gas).
2. **Change in Colour**: Rusting of iron; $Fe + CuSO_4$ turning blue to green.
3. **Evolution of a Gas**: $Zn(s) + H_2SO_4(aq) \\rightarrow ZnSO_4(aq) + H_2(g)\\uparrow$ (Hydrogen pops with burning splinter).
4. **Change in Temperature**: Quicklime reaction with water releases vigorous heat (Exothermic).

---

## 2. Types of Chemical Reactions
### A. Combination Reaction
Two or more reactants combine to yield a single product.
$$\\text{CaO (Quicklime)} + \\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 \\text{ (Slaked lime)} + \\Delta H$$
*Note: A solution of slaked lime is applied to walls. It reacts with atmospheric $\\text{CO}_2$ to form a shiny thin layer of Calcium Carbonate ($\\text{CaCO}_3$) after 2-3 days.*

### B. Decomposition Reaction
A single reactant breaks down into two or more simpler products under heat, light, or electricity.
1. **Thermal Decomposition**:
   $$2\\text{Pb(NO}_3)_2(s) \\xrightarrow{\\Delta} 2\\text{PbO}(s) + 4\\text{NO}_2(g)\\uparrow \\text{ [Brown fumes]} + \\text{O}_2(g)$$
2. **Electrolytic Decomposition**:
   $$2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{Electricity}} 2\\text{H}_2(g) [\\text{Cathode}] + \\text{O}_2(g) [\\text{Anode}]$$
   *Volume of $H_2$ gas collected is double the volume of $O_2$ because water contains 2 parts Hydrogen to 1 part Oxygen by mole ratio.*
3. **Photolytic Decomposition**:
   $$2\\text{AgBr}(s) \\xrightarrow{\\text{Sunlight}} 2\\text{Ag}(s) + \\text{Br}_2(g)$$

### C. Displacement Reaction
A more reactive metal displaces a less reactive metal from its aqueous salt solution.
$$\\text{Zn}(s) + \\text{CuSO}_4(aq) \\rightarrow \\text{ZnSO}_4(aq) + \\text{Cu}(s)$$

### D. Double Displacement (Precipitation)
Exchange of ions between two compounds forming an insoluble salt.
$$\\text{BaCl}_2(aq) + \\text{Na}_2\\text{SO}_4(aq) \\rightarrow \\text{BaSO}_4(s)\\downarrow \\text{ (White Precipitate)} + 2\\text{NaCl}(aq)$$

### E. Oxidation and Reduction (Redox)
- **Oxidation**: Addition of Oxygen OR Removal of Hydrogen.
- **Reduction**: Addition of Hydrogen OR Removal of Oxygen.
$$\\text{ZnO} + \\text{C} \\rightarrow \\text{Zn} + \\text{CO}$$
Here, $\\text{ZnO}$ is reduced to $\\text{Zn}$ (Oxidising agent is $\\text{ZnO}$), and $\\text{C}$ is oxidised to $\\text{CO}$ (Reducing agent is $\\text{C}$).
    `
  },

  "sci-05": {
    chapterId: "sci-05",
    title: "Life Processes",
    subject: "Science (Biology)",
    readTime: "15 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Autotrophic Nutrition", def: "Synthesis of organic food from simple inorganic raw materials (CO₂ and H₂O) in presence of sunlight and chlorophyll." },
        { term: "Peristalsis", def: "Rhythmic wave-like contraction and relaxation of muscular walls along the alimentary canal to push food downwards." },
        { term: "Translocation", def: "Transport of soluble photosynthetic food products (sucrose) through phloem using energy from ATP." },
        { term: "Nephron", def: "The microscopic structural and functional filtration unit of the human kidney." }
      ],
      mustKnowFormulas: [
        "Photosynthesis: 6CO₂ + 12H₂O --Sunlight/Chlorophyll--> C₆H₁₂O₆ + 6O₂ + 6H₂O",
        "Aerobic Respiration: Glucose --Cytoplasm--> 2 Pyruvate --Mitochondria + O₂--> 6CO₂ + 6H₂O + 38 ATP",
        "Anaerobic in Yeast (Fermentation): Pyruvate --Absence of O₂--> Ethanol + CO₂ + 2 ATP",
        "Anaerobic in Muscle Cells: Pyruvate --Lack of O₂--> Lactic Acid + Energy (causes muscle cramps)"
      ],
      topperExamTips: [
        "Draw the Human Heart with clear labeled arrows indicating deoxygenated blood in Right side and oxygenated blood in Left side.",
        "Remember: Pulmonary Artery is the ONLY artery carrying deoxygenated blood; Pulmonary Vein is the ONLY vein carrying oxygenated blood.",
        "Steps of urine formation in nephron: 1. Ultrafiltration (Glomerulus) 2. Selective Reabsorption (Tubule: glucose, amino acids, salts, water) 3. Tubular Secretion."
      ]
    },
    fullNotesMarkdown: `
# Life Processes — Complete Exam Mastery Notes

## 1. Nutrition in Humans (Alimentary Canal Flow)
1. **Mouth (Buccal Cavity)**: Teeth masticate; Salivary Glands secrete Salivary Amylase (Ptyalin) which breaks Starch into Maltose (pH 6.8).
2. **Stomach**: Secretes Gastric Juice:
   - **Pepsin**: Protein-digesting enzyme (active only in acidic medium).
   - **HCl**: Creates acidic medium (pH 1.5-2.0) and kills ingested microbes.
   - **Mucus**: Protects inner mucosal lining from excoriation by HCl.
3. **Small Intestine (Site of Complete Digestion)**:
   - **Liver**: Produces Bile juice (emulsifies large fat globules into micro-droplets; provides alkaline medium).
   - **Pancreas**: Secretes Trypsin (digests proteins to peptones) and Lipase (breaks emulsified fats into fatty acids and glycerol).
   - **Villi**: Finger-like projections rich in blood capillaries that increase surface area for rapid absorption.
4. **Large Intestine**: Reabsorbs excess water; unabsorbed waste expelled via Anus regulated by anal sphincter.

---

## 2. Human Circulatory System (Double Circulation)
Humans feature **Double Circulation** because blood travels through the heart twice during each complete cardiac cycle:
1. **Pulmonary Circulation**: Deoxygenated blood from Right Ventricle $\\rightarrow$ Pulmonary Artery $\\rightarrow$ Lungs (oxygenated) $\\rightarrow$ Pulmonary Veins $\\rightarrow$ Left Atrium.
2. **Systemic Circulation**: Oxygenated blood from Left Ventricle $\\rightarrow$ Aorta $\\rightarrow$ Body Tissues $\\rightarrow$ Vena Cava $\\rightarrow$ Right Atrium.
*Significance: Complete anatomical separation of oxygenated and deoxygenated blood maintains high oxygen delivery efficiency required for thermoregulation in warm-blooded animals.*
    `
  },

  "sci-09": {
    chapterId: "sci-09",
    title: "Light – Reflection and Refraction",
    subject: "Science (Physics)",
    readTime: "14 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Refractive Index (n)", def: "Ratio of the speed of light in vacuum (c) to the speed of light in a given medium (v): n = c / v." },
        { term: "Snell's Law", def: "The ratio of the sine of angle of incidence to the sine of angle of refraction is a constant: sin(i) / sin(r) = n₂ / n₁." },
        { term: "Power of a Lens (P)", def: "The reciprocal of focal length measured in metres: P = 1 / f(m). Unit is Dioptre (D)." },
        { term: "Principal Focus", def: "Point on the principal axis where rays parallel to principal axis converge (concave mirror) or appear to diverge (convex mirror)." }
      ],
      mustKnowFormulas: [
        "Mirror Formula: 1/f = 1/v + 1/u",
        "Magnification (Mirror): m = h'/h = -v/u",
        "Lens Formula: 1/f = 1/v - 1/u",
        "Magnification (Lens): m = h'/h = +v/u",
        "Radius of Curvature: R = 2f",
        "Power of Combination: P = P₁ + P₂ + P₃..."
      ],
      topperExamTips: [
        "New Cartesian Sign Convention: Object distance (u) is ALWAYS NEGATIVE.",
        "Focal length (f) is NEGATIVE for Concave mirror and Concave lens.",
        "Focal length (f) is POSITIVE for Convex mirror and Convex lens.",
        "If m is positive, the image is VIRTUAL & ERECT. If m is negative, the image is REAL & INVERTED."
      ]
    },
    fullNotesMarkdown: `
# Light – Reflection and Refraction — Board Master Notes

## 1. Concave Mirror Ray Diagram Summary
| Object Position | Image Position | Size | Nature | Practical Application |
|---|---|---|---|---|
| At Infinity | At Focus (F) | Highly Diminished | Real, Inverted | Solar Furnace |
| Beyond C | Between F and C | Diminished | Real, Inverted | Telescope objective |
| At C | At C | Same Size | Real, Inverted | Inverted optical projection |
| Between C and F | Beyond C | Enlarged | Real, Inverted | Cinema projector |
| At F | At Infinity | Infinitely Large | Real, Inverted | Torch searchlights |
| Between P and F | Behind Mirror | Enlarged | **Virtual & Erect** | **Dentist mirror, Shaving mirror** |

---

## 2. Absolute Refractive Index & Optical Density
$$\\text{Refractive Index } n_{21} = \\frac{\\text{Speed of light in medium 1 } (v_1)}{\\text{Speed of light in medium 2 } (v_2)}$$
- Light bending towards normal: Going from Rarer to Denser medium ($v$ decreases).
- Light bending away from normal: Going from Denser to Rarer medium ($v$ increases).
    `
  },

  "sci-11": {
    chapterId: "sci-11",
    title: "Electricity",
    subject: "Science (Physics)",
    readTime: "12 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Electric Current (I)", def: "Rate of flow of electric charges through a cross-section: I = Q / t. Unit is Ampere (A)." },
        { term: "Potential Difference (V)", def: "Work done to move a unit positive charge from one point to another: V = W / Q. Unit is Volt (V)." },
        { term: "Ohm's Law", def: "Current flowing through a conductor is directly proportional to potential difference across its terminals at constant temperature: V = IR." },
        { term: "Resistivity (ρ)", def: "Intrinsic resistance of a conductor of unit length and unit cross-sectional area: R = ρ(l / A). Unit is Ω·m." }
      ],
      mustKnowFormulas: [
        "Current: I = Q / t = ne / t  (where e = 1.6 × 10⁻¹⁹ C)",
        "Potential: V = W / Q",
        "Ohm's Law: V = I × R",
        "Resistance with dimensions: R = ρ × (L / A) = ρ × (L / πr²)",
        "Series Combination: R_s = R₁ + R₂ + R₃ (Current same, Voltage divides)",
        "Parallel Combination: 1/R_p = 1/R₁ + 1/R₂ + 1/R₃ (Voltage same, Current divides)",
        "Joule's Law of Heating: H = I²Rt = VIt = (V²/R)t",
        "Electric Power: P = VI = I²R = V²/R (Unit: Watt)",
        "Commercial Unit of Energy: 1 kWh = 1 Unit = 3.6 × 10⁶ Joules"
      ],
      topperExamTips: [
        "Tungsten is used for filament because of its very high melting point (3380°C) and high resistivity.",
        "Alloys (like Nichrome) are preferred in electric toasters/irons over pure metals because they have higher resistivity and do not oxidise (burn) easily at high temperatures.",
        "Domestic wiring is always connected in parallel so each appliance gets equal 220V voltage and operates independently."
      ]
    },
    fullNotesMarkdown: `
# Electricity — Complete Board Revision Notes

## 1. Resistance and Resistivity Rules
Resistance $R$ of a cylindrical conductor depends on:
1. Directly on its length: $R \\propto l$
2. Inversely on its cross-sectional area: $R \\propto \\frac{1}{A}$
3. Nature of the material (Resistivity $\\rho$)
4. Temperature (increases with temperature in metals)

$$R = \\rho \\frac{l}{A}$$

*Classic Exam Problem: If a wire of resistance $R$ is stretched to double its original length ($l' = 2l$), its volume remains constant ($A'l' = Al \\implies A' = A/2$). Therefore its new resistance becomes $R' = \\rho \\frac{2l}{A/2} = 4R$.*
    `
  },

  "math-01": {
    chapterId: "math-01",
    title: "Real Numbers",
    subject: "Mathematics",
    readTime: "8 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Fundamental Theorem of Arithmetic", def: "Every composite number can be expressed (factorised) as a product of primes uniquely, apart from the order in which prime factors occur." },
        { term: "Irrational Number", def: "A real number that cannot be written in the form p/q (q ≠ 0) and has non-terminating, non-repeating decimal expansion." }
      ],
      mustKnowFormulas: [
        "HCF(a, b) × LCM(a, b) = a × b  (Applicable strictly for 2 numbers only!)",
        "HCF: Product of the smallest power of each common prime factor.",
        "LCM: Product of the greatest power of each prime factor involved in the numbers."
      ],
      topperExamTips: [
        "Standard proof question: 'Prove that √5 is irrational'. Must use Method of Contradiction.",
        "Always state that p and q are co-prime integers with q ≠ 0.",
        "Remember HCF of two consecutive integers is always 1, and HCF of two consecutive even integers is always 2."
      ]
    },
    fullNotesMarkdown: `
# Real Numbers — High Yield Board Notes

## Core Theorem: Proof of Irrationality of $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}$
**Theorem**: Prove that $\\sqrt{5}$ is an irrational number.
1. Assume the contrary, that $\\sqrt{5}$ is rational.
2. Therefore, $\\sqrt{5} = \\frac{a}{b}$, where $a$ and $b$ are co-prime integers and $b \\neq 0$.
3. Squaring both sides: $5 = \\frac{a^2}{b^2} \\implies 5b^2 = a^2$.
4. This means $5$ divides $a^2$, hence by fundamental theorem, $5$ divides $a$.
5. Let $a = 5c$ for some integer $c$.
6. Substitute into (3): $5b^2 = (5c)^2 = 25c^2 \\implies b^2 = 5c^2$.
7. This implies $5$ divides $b^2$, so $5$ divides $b$.
8. Hence, $5$ is a common factor of both $a$ and $b$.
9. This contradicts our initial assumption that $a$ and $b$ are co-prime.
10. Therefore, our assumption was incorrect, and $\\sqrt{5}$ is an irrational number. (Q.E.D.)
    `
  },

  "math-08": {
    chapterId: "math-08",
    title: "Introduction to Trigonometry",
    subject: "Mathematics",
    readTime: "10 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Trigonometric Ratio", def: "Ratio of the sides of a right-angled triangle with respect to its acute angles." },
        { term: "Trigonometric Identity", def: "An equation involving trigonometric ratios of an angle that is true for all values of the angles." }
      ],
      mustKnowFormulas: [
        "Mnemonic: Some People Have / Curly Brown Hair / Turned Permanent Black",
        "sin θ = Perpendicular / Hypotenuse",
        "cos θ = Base / Hypotenuse",
        "tan θ = Perpendicular / Base = sin θ / cos θ",
        "cosec θ = 1 / sin θ, sec θ = 1 / cos θ, cot θ = 1 / tan θ",
        "Identity 1: sin² θ + cos² θ = 1",
        "Identity 2: 1 + tan² θ = sec² θ  ==>  sec² θ - tan² θ = 1",
        "Identity 3: 1 + cot² θ = cosec² θ  ==>  cosec² θ - cot² θ = 1"
      ],
      topperExamTips: [
        "Standard Angle Values Table: sin(0°)=0, sin(30°)=1/2, sin(45°)=1/√2, sin(60°)=√3/2, sin(90°)=1.",
        "Cosine values are simply the reverse of Sine values from 90° to 0°.",
        "In proving identities, if you get stuck, convert everything into sin θ and cos θ."
      ]
    },
    fullNotesMarkdown: `
# Introduction to Trigonometry — Formulas & Standard Angles

## Standard Angles Table (0° - 90°)
| Angle $\\theta$ | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| **$\\sin\\theta$** | $0$ | $\\frac{1}{2}$ | $\\frac{1}{\\sqrt{2}}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ |
| **$\\cos\\theta$** | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{2}}$ | $\\frac{1}{2}$ | $0$ |
| **$\\tan\\theta$** | $0$ | $\\frac{1}{\\sqrt{3}}$ | $1$ | $\\sqrt{3}$ | Undefined |
| **$\\text{cosec}\\theta$** | Undefined | $2$ | $\\sqrt{2}$ | $\\frac{2}{\\sqrt{3}}$ | $1$ |
| **$\\sec\\theta$** | $1$ | $\\frac{2}{\\sqrt{3}}$ | $\\sqrt{2}$ | $2$ | Undefined |
| **$\\cot\\theta$** | Undefined | $\\sqrt{3}$ | $1$ | $\\frac{1}{\\sqrt{3}}$ | $0$ |
    `
  },

  "sst-his-02": {
    chapterId: "sst-his-02",
    title: "Nationalism in India",
    subject: "Social Science (History)",
    readTime: "12 min read",
    onePageSummary: {
      keyDefinitions: [
        { term: "Satyagraha", def: "A method of non-violent agitation based on truth (Satya) and love/soul force to appeal to the conscience of the oppressor." },
        { term: "Rowlatt Act (1919)", def: "Black act giving British police sweeping powers to arrest any political suspect without trial for up to 2 years." },
        { term: "Boycott", def: "Refusal to deal with or associate with people, or purchase goods as an expression of political protest." },
        { term: "Poona Pact (1932)", def: "Agreement between Mahatma Gandhi and Dr. B.R. Ambedkar giving reserved seats to Depressed Classes in provincial and central councils." }
      ],
      mustKnowFormulas: [
        "Timeline: 1915 - Gandhiji returns from South Africa",
        "1917 - Champaran (Indigo peasants) & Kheda (Crop failure tax relief)",
        "1918 - Ahmedabad Cotton Mill Workers strike (wage hike)",
        "April 13, 1919 - Jallianwala Bagh Massacre (General Dyer fires on unarmed crowd)",
        "1921 - Non-Cooperation & Khilafat Movement officially launched",
        "Feb 1922 - Chauri Chaura incident (Gandhiji withdraws NCM)",
        "1928 - Simon Commission arrives ('Simon Go Back')",
        "Dec 1929 - Lahore Congress adopts Purna Swaraj (Jawaharlal Nehru)",
        "March 12 - April 6, 1930 - Dandi Salt March (Civil Disobedience begins)"
      ],
      topperExamTips: [
        "5-Marker Question on Differences between NCM and CDM: In NCM people refused to cooperate; in CDM people broke colonial laws (e.g. Salt law).",
        "Remember the 3 tribal / peasant leaders: Baba Ramchandra (Awadh peasants), Alluri Sitaram Raju (Andhra Gudem Hills tribals), and plantation workers in Assam."
      ]
    },
    fullNotesMarkdown: `
# Nationalism in India — Complete History Blueprint

## 1. The Salt March & Civil Disobedience Movement
On 31 January 1930, Mahatma Gandhi sent an 11-point ultimatum letter to Viceroy Irwin. The most essential demand was the abolition of the Salt Tax.
- Salt was an indispensable ingredient consumed by rich and poor alike.
- The state monopoly over its manufacture and taxation revealed the oppressive face of British rule.
- **The March**: Accompanied by 78 trusted volunteers, Gandhiji marched 240 miles from Sabarmati Ashram to Dandi in 24 days (10 miles/day).
- On 6 April 1930, he ceremonially boiled sea water to produce salt, officially launching the Civil Disobedience Movement.
    `
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { NOTES_DATA };
}
