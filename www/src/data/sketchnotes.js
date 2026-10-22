/**
 * Class 10th AI - Visual Sketch Notes Atlas
 * High-yield visual diagrams and concept sketch notes with SVG rendering.
 */

const SKETCH_NOTES_DATA = [
  {
    id: "sketch-heart",
    chapterId: "sci-05",
    subject: "Science (Biology)",
    title: "Human Heart & Double Circulation Anatomy",
    description: "Visual breakdown of four chambers, heart valves, pulmonary loop, and systemic cycle.",
    badge: "Must Draw in 5-Mark Question",
    svgContent: `
    <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style="background: #091224; border-radius: 12px; width: 100%; height: auto;">
      <defs>
        <linearGradient id="deoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e3a8a" /><stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
        <linearGradient id="oxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b91c1c" /><stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
      </defs>
      
      <!-- Outer Heart Schematic Silhouette -->
      <path d="M 160 80 C 130 30 70 50 60 110 C 40 190 200 280 250 300 C 300 280 460 190 440 110 C 430 50 370 30 340 80 C 310 120 250 160 250 160 C 250 160 190 120 160 80 Z" fill="#131e38" stroke="#334155" stroke-width="3" />

      <!-- Left / Right Division Wall (Septum) -->
      <line x1="250" y1="90" x2="250" y2="295" stroke="#f8fafc" stroke-width="4" stroke-dasharray="6,4" />
      <text x="250" y="315" fill="#94a3b8" font-size="11" text-anchor="middle" font-weight="600">SEPTUM (Prevents Mixing)</text>

      <!-- Right Side (Deoxygenated - Blue) -->
      <rect x="100" y="100" width="120" height="70" rx="8" fill="url(#deoxGrad)" opacity="0.9" />
      <text x="160" y="130" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">RIGHT ATRIUM</text>
      <text x="160" y="148" fill="#cbd5e1" font-size="10" text-anchor="middle">Receives from Vena Cava</text>

      <rect x="90" y="190" width="130" height="80" rx="8" fill="url(#deoxGrad)" opacity="0.9" />
      <text x="155" y="225" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">RIGHT VENTRICLE</text>
      <text x="155" y="243" fill="#cbd5e1" font-size="10" text-anchor="middle">Pumps to Pulmonary Artery</text>

      <!-- Left Side (Oxygenated - Red) -->
      <rect x="280" y="100" width="120" height="70" rx="8" fill="url(#oxGrad)" opacity="0.9" />
      <text x="340" y="130" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">LEFT ATRIUM</text>
      <text x="340" y="148" fill="#fee2e2" font-size="10" text-anchor="middle">Receives from Pulmonary Vein</text>

      <rect x="280" y="190" width="130" height="80" rx="8" fill="url(#oxGrad)" opacity="0.9" />
      <text x="345" y="225" fill="#fff" font-size="13" font-weight="bold" text-anchor="middle">LEFT VENTRICLE</text>
      <text x="345" y="243" fill="#fee2e2" font-size="10" text-anchor="middle">Thickest Muscle (Pumps to Aorta)</text>

      <!-- Valves Indicators -->
      <circle cx="160" cy="180" r="10" fill="#0284c7" stroke="#fff" stroke-width="2" />
      <text x="160" y="184" fill="#fff" font-size="8" text-anchor="middle">TV</text>
      <circle cx="340" cy="180" r="10" fill="#b91c1c" stroke="#fff" stroke-width="2" />
      <text x="340" y="184" fill="#fff" font-size="8" text-anchor="middle">BV</text>

      <!-- Callout Labels -->
      <text x="20" y="40" fill="#38bdf8" font-size="12" font-weight="bold">🔵 DEOXYGENATED BLOOD</text>
      <text x="330" y="40" fill="#f87171" font-size="12" font-weight="bold">🔴 OXYGENATED BLOOD</text>
    </svg>
    `,
    examNotes: [
      "Key Exam Catch: Left ventricle has significantly thicker muscular walls because it must generate enough systolic pressure to pump blood to entire systemic body organs.",
      "Valves (Tricuspid & Bicuspid/Mitral) ensure that blood flows in ONE direction only, preventing regurgitation/backflow."
    ]
  },

  {
    id: "sketch-ray-optics",
    chapterId: "sci-09",
    subject: "Science (Physics)",
    title: "Concave Mirror Master Ray Diagram (Dentist Case)",
    description: "Ray diagram when object is placed between Focus (F) and Pole (P), forming a Virtual, Erect, and Enlarged image.",
    badge: "Most Repeated Board 3-Marker",
    svgContent: `
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="background: #091224; border-radius: 12px; width: 100%; height: auto;">
      <!-- Principal Axis -->
      <line x1="20" y1="140" x2="480" y2="140" stroke="#64748b" stroke-width="2" />
      <text x="470" y="132" fill="#64748b" font-size="11">Axis</text>

      <!-- Concave Mirror Arc -->
      <path d="M 280 40 A 200 200 0 0 0 280 240" fill="none" stroke="#00f0ff" stroke-width="4" />
      <!-- Silvering hatched lines -->
      <path d="M 283 50 L 293 45 M 287 90 L 297 85 M 289 140 L 299 135 M 287 190 L 297 185 M 283 230 L 293 225" stroke="#475569" stroke-width="2" />

      <!-- Landmark Points -->
      <circle cx="289" cy="140" r="4" fill="#00f0ff" />
      <text x="286" y="160" fill="#00f0ff" font-weight="bold">P</text>

      <circle cx="200" cy="140" r="4" fill="#a855f7" />
      <text x="196" y="160" fill="#a855f7" font-weight="bold">F</text>

      <circle cx="100" cy="140" r="4" fill="#ec4899" />
      <text x="96" y="160" fill="#ec4899" font-weight="bold">C</text>

      <!-- Object AB between P and F -->
      <line x1="240" y1="140" x2="240" y2="90" stroke="#22c55e" stroke-width="4" stroke-linecap="round" />
      <polygon points="240,82 235,92 245,92" fill="#22c55e" />
      <text x="235" y="78" fill="#22c55e" font-weight="bold">A (Object)</text>
      <text x="235" y="155" fill="#22c55e" font-size="11">B</text>

      <!-- Incident Ray 1: Parallel to Principal Axis -->
      <line x1="240" y1="90" x2="284" y2="90" stroke="#facc15" stroke-width="2" />
      <!-- Reflected Ray 1 through F -->
      <line x1="284" y1="90" x2="160" y2="165" stroke="#facc15" stroke-width="2" />
      <!-- Virtual Extension Ray 1 behind mirror -->
      <line x1="284" y1="90" x2="410" y2="40" stroke="#facc15" stroke-width="2" stroke-dasharray="4,4" />

      <!-- Incident Ray 2: Passing through C -->
      <line x1="100" y1="140" x2="282" y2="60" stroke="#f43f5e" stroke-width="2" />
      <!-- Virtual Extension Ray 2 behind mirror -->
      <line x1="282" y1="60" x2="410" y2="40" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,4" />

      <!-- Virtual Image A'B' Behind Mirror -->
      <line x1="410" y1="140" x2="410" y2="40" stroke="#38bdf8" stroke-width="4" stroke-dasharray="4,3" />
      <polygon points="410,32 405,42 415,42" fill="#38bdf8" />
      <text x="400" y="28" fill="#38bdf8" font-weight="bold">A' (Virtual Image)</text>
      <text x="405" y="155" fill="#38bdf8" font-size="11">B'</text>

      <!-- Properties Callout -->
      <rect x="20" y="200" width="220" height="65" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(0, 240, 255, 0.3)" />
      <text x="30" y="218" fill="#38bdf8" font-size="11" font-weight="bold">IMAGE PROPERTIES:</text>
      <text x="30" y="234" fill="#e2e8f0" font-size="10">1. Position: Behind mirror</text>
      <text x="30" y="248" fill="#e2e8f0" font-size="10">2. Nature: Virtual & Erect</text>
      <text x="30" y="260" fill="#e2e8f0" font-size="10">3. Size: Enlarged / Magnified (m > 1)</text>
    </svg>
    `,
    examNotes: [
      "This is the ONLY case where a concave mirror produces a virtual and erect image.",
      "Used in: Shaving mirrors, makeup mirrors, and by dentists to observe magnified teeth."
    ]
  },

  {
    id: "sketch-circuits",
    chapterId: "sci-11",
    subject: "Science (Physics)",
    title: "Series vs Parallel Resistor Circuits",
    description: "Visual schematic comparing current division, voltage sharing, and equivalent formulas.",
    badge: "Core Physics Foundation",
    svgContent: `
    <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="background: #091224; border-radius: 12px; width: 100%; height: auto;">
      <!-- Series Circuit Side -->
      <rect x="15" y="15" width="225" height="230" rx="8" fill="#0d1b33" stroke="#0284c7" stroke-width="1.5" />
      <text x="127" y="40" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SERIES CIRCUIT</text>
      
      <!-- Series Resistors -->
      <path d="M 40 100 L 70 100 L 75 90 L 85 110 L 95 90 L 105 110 L 110 100 L 130 100 L 135 90 L 145 110 L 155 90 L 165 110 L 170 100 L 200 100" fill="none" stroke="#facc15" stroke-width="3" />
      <text x="92" y="80" fill="#facc15" font-size="11" text-anchor="middle">R₁</text>
      <text x="150" y="80" fill="#facc15" font-size="11" text-anchor="middle">R₂</text>

      <text x="127" y="145" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">R_eq = R₁ + R₂</text>
      <text x="127" y="170" fill="#94a3b8" font-size="11" text-anchor="middle">• Current (I) is SAME everywhere</text>
      <text x="127" y="190" fill="#94a3b8" font-size="11" text-anchor="middle">• Potential divides: V = V₁ + V₂</text>
      <text x="127" y="215" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">⚠️ One fail = entire circuit OFF</text>

      <!-- Parallel Circuit Side -->
      <rect x="260" y="15" width="225" height="230" rx="8" fill="#0d1b33" stroke="#a855f7" stroke-width="1.5" />
      <text x="372" y="40" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">PARALLEL CIRCUIT</text>

      <!-- Parallel Branch 1 -->
      <path d="M 290 85 L 340 85 L 345 78 L 355 92 L 365 78 L 375 92 L 380 85 L 430 85" fill="none" stroke="#38bdf8" stroke-width="2.5" />
      <text x="362" y="72" fill="#38bdf8" font-size="11" text-anchor="middle">R₁</text>

      <!-- Parallel Branch 2 -->
      <path d="M 290 120 L 340 120 L 345 113 L 355 127 L 365 113 L 375 127 L 380 120 L 430 120" fill="none" stroke="#a855f7" stroke-width="2.5" />
      <text x="362" y="140" fill="#a855f7" font-size="11" text-anchor="middle">R₂</text>

      <!-- Connecting vertical wires -->
      <line x1="290" y1="85" x2="290" y2="120" stroke="#f8fafc" stroke-width="2.5" />
      <line x1="430" y1="85" x2="430" y2="120" stroke="#f8fafc" stroke-width="2.5" />

      <text x="372" y="165" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">1/R_eq = 1/R₁ + 1/R₂</text>
      <text x="372" y="188" fill="#94a3b8" font-size="11" text-anchor="middle">• Voltage (V) is EQUAL (220V)</text>
      <text x="372" y="206" fill="#94a3b8" font-size="11" text-anchor="middle">• Current divides: I = I₁ + I₂</text>
      <text x="372" y="228" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">✅ Used in Domestic Wiring</text>
    </svg>
    `,
    examNotes: [
      "Why domestic appliances are connected in parallel: 1. Independent switches 2. Each receives full 220V 3. Total resistance decreases, drawing required operational current."
    ]
  },

  {
    id: "sketch-trig-hand",
    chapterId: "math-08",
    subject: "Mathematics",
    title: "Trigonometry Hand Trick (Standard Values Mnemonic)",
    description: "Finger formula: sin θ = √(Fingers Below) / 2; cos θ = √(Fingers Above) / 2.",
    badge: "Never Forget Trig Values",
    svgContent: `
    <svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="background: #091224; border-radius: 12px; width: 100%; height: auto;">
      <!-- Title & Formula Banner -->
      <text x="250" y="30" fill="#00f0ff" font-size="15" font-weight="bold" text-anchor="middle">LEFT-HAND TRIGONOMETRY TRICK</text>
      
      <!-- Hand Silhouette & Finger Lines -->
      <path d="M 120 220 L 120 180 C 120 150 140 120 160 110 L 190 60 L 210 65 L 180 120 L 220 50 L 240 55 L 205 125 L 260 55 L 280 60 L 230 135 L 305 75 L 320 85 L 250 155 L 260 220 Z" fill="#1e293b" stroke="#00f0ff" stroke-width="2" />

      <!-- Finger Labels -->
      <text x="175" y="50" fill="#facc15" font-size="12" font-weight="bold">Thumb: 0°</text>
      <text x="220" y="35" fill="#facc15" font-size="12" font-weight="bold">Index: 30°</text>
      <text x="270" y="40" fill="#facc15" font-size="12" font-weight="bold">Middle: 45°</text>
      <text x="330" y="65" fill="#facc15" font-size="12" font-weight="bold">Ring: 60°</text>
      <text x="280" y="240" fill="#facc15" font-size="12" font-weight="bold">Little: 90°</text>

      <!-- Formula Cards -->
      <rect x="330" y="110" width="155" height="60" rx="8" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" />
      <text x="407" y="132" fill="#67e8f9" font-size="12" font-weight="bold" text-anchor="middle">sin θ = √(Fingers Below) / 2</text>
      <text x="407" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">sin(30°) = √(1)/2 = 1/2</text>

      <rect x="330" y="180" width="155" height="60" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" />
      <text x="407" y="202" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">cos θ = √(Fingers Above) / 2</text>
      <text x="407" y="222" fill="#cbd5e1" font-size="10" text-anchor="middle">cos(30°) = √(3)/2</text>

      <rect x="15" y="100" width="125" height="80" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
      <text x="77" y="125" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">tan θ Formula</text>
      <text x="77" y="145" fill="#f8fafc" font-size="10" text-anchor="middle">√(Fingers Below)</text>
      <line x1="30" y1="152" x2="125" y2="152" stroke="#34d399" stroke-width="1.5" />
      <text x="77" y="168" fill="#f8fafc" font-size="10" text-anchor="middle">√(Fingers Above)</text>
    </svg>
    `,
    examNotes: [
      "For tan(45°): 2 fingers below, 2 fingers above ==> √(2)/√(2) = 1.",
      "For tan(60°): 3 fingers below, 1 finger above ==> √(3)/√(1) = √3."
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SKETCH_NOTES_DATA };
}
