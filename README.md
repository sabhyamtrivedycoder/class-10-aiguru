# 🎓 Class 10 AI Guru (`class-10-aiguru`)

> **Mobile-First Android & Web Board Preparation Platform**  
> Architected and engineered by **Sabhyam Trivedy**.

[![Test Suite](https://img.shields.io/badge/Unit%20Tests-9%2F9%20Passed-00f0ff?style=flat-square)](./test.js)
[![CBSE Pattern](https://img.shields.io/badge/CBSE%20Curriculum-2004--2026%20Edition-8b5cf6?style=flat-square)](#)
[![Android Ready](https://img.shields.io/badge/Android%20APK-Capacitor%20Ready-10b981?style=flat-square)](#)
[![Founder Batch Quota](https://img.shields.io/badge/Google%20Auth-50%20Student%20Cap-f59e0b?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-6366f1?style=flat-square)](#)

---

## 🌟 Overview
**Class 10 AI Guru** is a clean, focused, mobile-first educational application built for students preparing for the CBSE / NCERT Class 10th Board Examinations. It features an archive of previous year questions spanning **2004 to 2026** (including the latest 2026 specimen and 2025 board series), visual SVG sketch notes, daily practice problems (DPP), and an embedded NCERT doubt solver.

Designed with an Android Material Design aesthetic and touch-friendly navigation, the platform is ready to be packaged directly into an `.apk` via Capacitor and Android Studio.

---

## 🚀 Key Features

### 1. 🏆 2004–2026 Solved PYQ Vault
- Curated archive spanning **2004 to 2026** with step-by-step CBSE marking schemes.
- Filterable by year, chapter, and marks allocation (1M, 2M, 3M, 4M Case Study, 5M Theorems).
- Includes real 2026 Specimen and 2025 Board examination questions.
- Offline and cloud bookmarking for quick revision.

### 2. 🔐 50-Student Google Authentication Gatekeeper
- Integrated **"Continue with Google"** authentication.
- **Strict 50-Student Quota**: Exclusively assigns Founder Student seat numbers (#1 to #50) to the first 50 registered scholars.
- New applicants beyond 50 receive an automated "Batch Full" prompt.
- Securely persists individual DPP quiz scores, bookmarked questions, and study progress.

### 3. 🎨 Visual Sketch Notes & Diagram Atlas
- Handcrafted vector SVG concept diagrams optimized for pre-exam visual recall:
  - **Human Heart & Double Circulation Flowchart**
  - **Concave Mirror Ray Diagrams**
  - **Series vs. Parallel Circuits**
  - **Left-Hand Trigonometry Mnemonic**

### 4. 📚 Chapter Notes Hub & 1-Page Summaries
- High-yield 1-page summaries with key definitions and must-know formulas.
- Comprehensive NCERT markdown notes across Science, Mathematics, and Social Science.

### 5. 📝 Daily Practice Problems (DPP)
- Topic-wise daily practice problem sets with instant feedback, timed scoring, and explanation breakdowns.

### 6. 📱 Clean Android Mobile UI
- Professional Material Design layout with safe-area support.
- Native-style fixed bottom navigation for Android viewports.
- Touch-friendly 48px+ tap targets.

---

## 📱 Building the Android APK (Capacitor)

The repository includes a pre-configured `capacitor.config.json` (`com.sabhyamtrivedy.class10aiguru`).

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Add Android Platform**:
   ```bash
   npx cap add android
   ```
3. **Sync Web Assets**:
   ```bash
   npx cap sync android
   ```
4. **Open in Android Studio & Generate APK**:
   ```bash
   npx cap open android
   ```
   In Android Studio, select **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate `app-debug.apk`.

---

## 🧪 Automated Test Verification

Run the verification test suite:
```bash
npm test
# or
node test.js
```

```
🧪 Starting Class 10th AI Verification Test Suite...

  ✅ PASS: Master Syllabus covers Science, Maths, and Social Science with 25+ chapters
  ✅ PASS: Notes dataset has both 1-Page Summaries and In-Depth Markdown notes
  ✅ PASS: Visual Sketch Notes Atlas contains valid SVG vector diagrams
  ✅ PASS: 2004–2026 PYQ Vault spans 2004 to 2026 with step-by-step marking schemes
  ✅ PASS: DPP (Daily Practice Problems) sets have valid multiple choice questions and answers
  ✅ PASS: Official Sample Papers have blueprints and model answers
  ✅ PASS: Class10AIGuru returns accurate NCERT board guidance for core topics
  ✅ PASS: AuthManager enforces strict 50-student quota, seat allocation, and study data persistence
  ✅ PASS: UI Assets and Styles exist and are non-empty

========================================
Class 10th AI Test Suite Summary:
Passed: 9 / 9
========================================

🎉 All Class 10th AI verification checks passed with 100% compliance!
```

---

## 🌐 Live Web Deployment
- **Live URL**: [https://sabhyamtrivedycoder.github.io/class-10-aiguru/](https://sabhyamtrivedycoder.github.io/class-10-aiguru/)
- **GitHub Repository**: [https://github.com/sabhyamtrivedycoder/class-10-aiguru](https://github.com/sabhyamtrivedycoder/class-10-aiguru)

---

## 👨‍💻 Author & Lead Engineer
**Sabhyam Trivedy**  
- 💼 **LinkedIn**: [linkedin.com/in/sabhyamtrivedy](https://www.linkedin.com/in/sabhyamtrivedy)  
- 🌐 **Portfolio**: [sabhyamtrivedycoder.github.io/portfolio](https://sabhyamtrivedycoder.github.io/portfolio/)  
- 🐙 **GitHub**: [@sabhyamtrivedycoder](https://github.com/sabhyamtrivedycoder)  

---

## 📄 License
This project is open-source under the **MIT License**.
