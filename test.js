/**
 * Class 10th AI Guru - Comprehensive Verification Test Suite
 * Asserts syllabus data structures across all 5 subjects, 23-year continuous PYQs (2004-2026),
 * authentic topper handwritten notes, interactive visual mind maps, DPP scoring, AI Guru,
 * Study Atmosphere themes, and Android Capacitor APK packaging.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Class 10th AI Comprehensive Verification Test Suite...\n');

let passedTests = 0;
let totalTests = 0;

async function runTest(name, fn) {
  totalTests++;
  try {
    await fn();
    console.log(`  ✅ PASS: ${name}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    process.exitCode = 1;
  }
}

// 1. Data Files Verification
const { SYLLABUS_DATA } = require('./src/data/chapters.js');
const { NOTES_DATA } = require('./src/data/notes.js');
const { MIND_MAPS_DATA } = require('./src/data/mindmaps.js');
const { SKETCH_NOTES_DATA } = require('./src/data/sketchnotes.js');
const { PYQ_VAULT_DATA } = require('./src/data/pyq-vault.js');
const { DPP_SETS } = require('./src/data/dpp.js');
const { SAMPLE_PAPERS_DATA } = require('./src/data/sample-papers.js');
const { Class10AIGuru } = require('./src/ai/ai-guru.js');
const { AuthManager } = require('./src/auth/auth-manager.js');

async function main() {
  // Test 1: Syllabus coverage across all 5 subjects
  await runTest('Master Syllabus covers all 5 core subjects: Science, Maths, Social Science, English, Hindi with 40+ chapters', () => {
    assert(SYLLABUS_DATA.science.length >= 10, 'Science must have at least 10 chapters');
    assert(SYLLABUS_DATA.maths.length >= 10, 'Maths must have at least 10 chapters');
    assert(SYLLABUS_DATA.social_science.length >= 8, 'Social Science must have at least 8 chapters');
    assert(SYLLABUS_DATA.english.length >= 10, 'English must have at least 10 chapters');
    assert(SYLLABUS_DATA.hindi.length >= 10, 'Hindi must have at least 10 chapters');

    const totalChapters = SYLLABUS_DATA.science.length +
                          SYLLABUS_DATA.maths.length +
                          SYLLABUS_DATA.social_science.length +
                          SYLLABUS_DATA.english.length +
                          SYLLABUS_DATA.hindi.length;
    assert(totalChapters >= 45, `Expected 45+ chapters across all subjects, found ${totalChapters}`);

    ['science', 'maths', 'social_science', 'english', 'hindi'].forEach(sub => {
      SYLLABUS_DATA[sub].forEach(c => {
        assert(c.id && c.name && c.unit && c.weightage, `Chapter missing required fields: ${JSON.stringify(c)}`);
      });
    });
  });

  // Test 2: Authentic Topper Handwritten Notes & Scribd Vault
  await runTest('Topper Handwritten Notes dataset includes Scribd citations, margin tips, common mistakes across subjects', () => {
    const noteKeys = Object.keys(NOTES_DATA);
    assert(noteKeys.length >= 8, 'Must have at least 8 in-depth chapter notes');

    noteKeys.forEach(k => {
      const note = NOTES_DATA[k];
      assert(note.title, `Note missing title for ${k}`);
      assert(note.scribdDocId, `Note missing Scribd document ID for ${k}`);
      assert(note.topperBadge, `Note missing topper rank badge for ${k}`);
      assert(note.onePageSummary, `Note missing onePageSummary for ${k}`);
      assert(note.onePageSummary.keyDefinitions.length > 0, `Missing key definitions for ${k}`);
      assert(note.onePageSummary.mustKnowFormulas.length > 0, `Missing formulas for ${k}`);
      assert(note.onePageSummary.topperMarginalNotes && note.onePageSummary.topperMarginalNotes.length > 0, `Missing margin tips for ${k}`);
      assert(note.onePageSummary.commonBoardMistakes && note.onePageSummary.commonBoardMistakes.length > 0, `Missing common mistakes for ${k}`);
      assert(note.fullNotesMarkdown && note.fullNotesMarkdown.length > 100, `Missing markdown notes for ${k}`);
    });

    // Check English and Hindi notes exist
    assert(NOTES_DATA['eng-01'], 'English topper notes must exist');
    assert(NOTES_DATA['hin-01'], 'Hindi topper notes must exist');
  });

  // Test 3: Interactive Visual Mind Maps Engine
  await runTest('Interactive Mind Maps engine covers key chapters across all 5 subjects with branching hierarchy', () => {
    assert(MIND_MAPS_DATA.length >= 8, 'Must have at least 8 interactive mind maps');

    const subjects = [...new Set(MIND_MAPS_DATA.map(m => m.subject))];
    assert(subjects.includes('science'), 'Mind maps must cover science');
    assert(subjects.includes('maths'), 'Mind maps must cover maths');
    assert(subjects.includes('social_science'), 'Mind maps must cover social science');
    assert(subjects.includes('english'), 'Mind maps must cover english');
    assert(subjects.includes('hindi'), 'Mind maps must cover hindi');

    MIND_MAPS_DATA.forEach(mm => {
      assert(mm.id && mm.chapterId && mm.chapterName, `Mind map missing basic info: ${mm.id}`);
      assert(mm.rootNode && mm.rootNode.title && mm.rootNode.coreIdea, `Mind map missing root node: ${mm.id}`);
      assert(mm.branches && mm.branches.length >= 2, `Mind map ${mm.id} must have at least 2 branches`);
      mm.branches.forEach(b => {
        assert(b.id && b.title && b.color && b.items && b.items.length > 0, `Invalid branch in ${mm.id}`);
        b.items.forEach(item => {
          assert(item.name && item.desc && item.tip, `Invalid leaf item in branch ${b.title}`);
        });
      });
    });
  });

  // Test 4: Comprehensive 2004–2026 PYQ Archive
  await runTest('2004–2026 PYQ Archive covers EVERY year from 2004 to 2026 without gap, across all sets and subjects', () => {
    assert(PYQ_VAULT_DATA.length >= 25, 'Must have at least 25 real board questions');

    const years = [...new Set(PYQ_VAULT_DATA.map(q => q.year))].sort((a,b) => a - b);
    for (let yr = 2004; yr <= 2026; yr++) {
      assert(years.includes(yr), `Missing year ${yr} in PYQ vault! Every single year from 2004 to 2026 must be covered.`);
    }

    // Verify Subjects
    const subjects = [...new Set(PYQ_VAULT_DATA.map(q => q.subject))];
    assert(subjects.includes('Science'), 'PYQs must cover Science');
    assert(subjects.includes('Mathematics'), 'PYQs must cover Mathematics');
    assert(subjects.includes('Social Science'), 'PYQs must cover Social Science');
    assert(subjects.includes('English'), 'PYQs must cover English');
    assert(subjects.includes('Hindi'), 'PYQs must cover Hindi');

    // Verify Regions/Sets
    const regions = [...new Set(PYQ_VAULT_DATA.map(q => q.region))];
    assert(regions.includes('Delhi'), 'Must include Delhi sets');
    assert(regions.includes('Outside Delhi'), 'Must include Outside Delhi sets');
    assert(regions.includes('All India'), 'Must include All India / Specimen sets');

    // Verify Step-by-Step Marking Schemes
    PYQ_VAULT_DATA.forEach(q => {
      assert(q.year >= 2004 && q.year <= 2026, `Invalid year: ${q.year}`);
      assert(q.set, `Missing set info in ${q.id}`);
      assert(q.question && q.solution, `Missing Q or Solution in ${q.id}`);
      assert(q.solution.includes('Mark'), `Solution must include step marking scheme breakdown in ${q.id}`);
      assert(q.topperTip, `Missing topper tip in ${q.id}`);
    });
  });

  // Test 5: Visual Sketch Notes Atlas
  await runTest('Visual Sketch Notes Atlas contains valid SVG vector diagrams', () => {
    assert(SKETCH_NOTES_DATA.length >= 3, 'Must have at least 3 sketch notes');

    SKETCH_NOTES_DATA.forEach(s => {
      assert(s.id && s.title && s.svgContent, `Sketch note missing fields: ${s.title}`);
      assert(s.svgContent.includes('<svg') && s.svgContent.includes('</svg>'), `Invalid SVG in ${s.title}`);
      assert(s.examNotes && s.examNotes.length > 0, `Missing topper notes in ${s.title}`);
    });
  });

  // Test 6: DPP Practice Problems
  await runTest('DPP (Daily Practice Problems) sets have valid questions and explanations', () => {
    const dppKeys = Object.keys(DPP_SETS);
    assert(dppKeys.length >= 2, 'Must have at least 2 DPP sets');

    dppKeys.forEach(k => {
      const dpp = DPP_SETS[k];
      assert(dpp.chapterTitle, `Missing chapter title in DPP ${k}`);
      assert(dpp.questions.length >= 3, `DPP ${k} must have at least 3 questions`);

      dpp.questions.forEach(q => {
        assert(q.options.length === 4, `DPP question must have 4 options: ${q.id}`);
        assert(q.correct >= 0 && q.correct < 4, `Invalid correct index: ${q.correct}`);
        assert(q.explanation && q.explanation.length > 10, `Missing explanation in ${q.id}`);
      });
    });
  });

  // Test 7: Official Sample Papers
  await runTest('Official Sample Papers cover Science, Maths, Social Science, English, Hindi with blueprints', () => {
    assert(SAMPLE_PAPERS_DATA.length >= 5, 'Must have sample papers covering all core subjects');

    SAMPLE_PAPERS_DATA.forEach(p => {
      assert(p.totalMarks === 80, `Board paper must be 80 marks: ${p.title}`);
      assert(p.timeHours === 3, `Board paper must be 3 hours: ${p.title}`);
      assert(p.blueprint && Object.keys(p.blueprint).length >= 3, `Missing section blueprint in ${p.title}`);
      assert(p.sampleQuestions.length >= 2, `Missing model questions in ${p.title}`);
    });
  });

  // Test 8: Class10AIGuru
  await runTest('Class10AIGuru returns accurate NCERT board guidance for core concepts', () => {
    const guru = new Class10AIGuru();

    const ohmAns = guru.ask("What is Ohm's Law?");
    assert(ohmAns.includes('V = I'), 'Ohm answer must include V = I * R');
    assert(ohmAns.toLowerCase().includes('constant temperature'), 'Ohm answer must mention constant temperature');

    const opticsAns = guru.ask("Tell me mirror formula and sign convention");
    assert(opticsAns.includes('{1}{f}') || opticsAns.includes('1/f'), 'Optics answer must include 1/f formula');

    const bptAns = guru.ask("Explain Basic Proportionality Theorem");
    assert(bptAns.includes('{AD}{DB}') || bptAns.includes('AD/DB'), 'BPT answer must include ratio theorem');

    const generalAns = guru.ask("How to score 95 in class 10?");
    assert(generalAns.includes('Strategy') || generalAns.includes('Pass'), 'Strategy must return study blueprint');
  });

  // Test 9: AuthManager 50-Seat Quota
  await runTest('AuthManager enforces strict 50-student quota, seat allocation, and study data persistence', async () => {
    const auth = new AuthManager();
    auth.registeredUsers = [];
    auth.userData = {};
    auth.currentUser = null;

    // 1. Enroll first user
    const user1 = await auth.signInWithGoogle({
      uid: 'google_uid_01',
      displayName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      photoURL: 'https://example.com/aarav.png'
    });

    assert(user1.success === true, 'First user sign in must succeed');
    assert(user1.studentNumber === 1, 'First user must get seat #1');
    assert(auth.getEnrolledCount() === 1, 'Enrolled count must be 1');

    // 2. Save DPP test result and bookmark
    auth.saveDPPResult('chem-reactions', 9, 10);
    const isSaved = auth.toggleBookmark('pyq-2026-sci-01');
    assert(isSaved === true, 'Bookmark should be toggled ON');
    assert(auth.getUserBookmarks().includes('pyq-2026-sci-01'), 'Bookmark list must contain bookmarked PYQ');

    // 3. Fill up remaining 49 seats (Total 50)
    for (let i = 2; i <= 50; i++) {
      const res = await auth.signInWithGoogle({
        uid: `google_uid_${i}`,
        displayName: `Student ${i}`,
        email: `student${i}@school.edu`
      });
      assert(res.success === true, `Student ${i} should be enrolled successfully`);
      assert(res.studentNumber === i, `Student ${i} should get seat #${i}`);
    }

    assert(auth.getEnrolledCount() === 50, 'Total enrolled count must be exactly 50');

    // 4. Attempt to enroll 51st user (must be rejected)
    const user51 = await auth.signInWithGoogle({
      uid: 'google_uid_51',
      displayName: 'Extra Student',
      email: 'extra.student@school.edu'
    });

    assert(user51.success === false, 'Student #51 sign-in must fail');
    assert(user51.quotaFull === true, 'Student #51 must trigger quotaFull flag');
    assert(user51.message.includes('50 Founder Student seats'), 'Student #51 should receive batch full notification');

    // 5. Existing user re-login
    const reLoginUser1 = await auth.signInWithGoogle({
      uid: 'google_uid_01',
      displayName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com'
    });

    assert(reLoginUser1.success === true, 'Existing student can log in even when 50 seats are full');
    assert(reLoginUser1.isNew === false, 'Existing student is recognized as already enrolled');
    assert(reLoginUser1.studentNumber === 1, 'Seat number must remain #1');
  });

  // Test 10: Study Atmosphere Themes & UI Assets
  await runTest('UI Assets and Styles define Study Atmosphere themes and eye-friendly dark modes', () => {
    const indexPath = path.join(__dirname, 'index.html');
    const stylesPath = path.join(__dirname, 'styles.css');
    const appPath = path.join(__dirname, 'src/app.js');

    assert(fs.existsSync(indexPath), 'index.html must exist');
    assert(fs.existsSync(stylesPath), 'styles.css must exist');
    assert(fs.existsSync(appPath), 'src/app.js must exist');

    const stylesContent = fs.readFileSync(stylesPath, 'utf8');
    assert(stylesContent.includes('midnight-slate'), 'Must define midnight-slate theme');
    assert(stylesContent.includes('oled-dark'), 'Must define oled-dark theme');
    assert(stylesContent.includes('parchment-lamp'), 'Must define parchment-lamp theme');
    assert(stylesContent.includes('topper-notebook-sheet'), 'Must define topper ruled notebook stylesheet');
  });

  // Test 11: Android Capacitor Platform and APK Package Integrity
  await runTest('Android Capacitor configuration, 30MB+ offline pack, and APK packages exist and are valid', () => {
    const capConfigPath = path.join(__dirname, 'capacitor.config.json');
    assert(fs.existsSync(capConfigPath), 'capacitor.config.json must exist');
    const capConfig = JSON.parse(fs.readFileSync(capConfigPath, 'utf8'));
    assert(capConfig.webDir === 'www', 'webDir must be set to www');

    // Verify offline assets pack (>= 30MB)
    const offlinePackDir = path.join(__dirname, 'assets/offline');
    assert(fs.existsSync(offlinePackDir), 'Offline asset pack directory must exist');
    const offlineFiles = fs.readdirSync(offlinePackDir);
    assert(offlineFiles.length >= 3, 'Must have at least 3 offline data packs');
    let totalOfflineSize = 0;
    offlineFiles.forEach(f => {
      totalOfflineSize += fs.statSync(path.join(offlinePackDir, f)).size;
    });
    assert(totalOfflineSize > 30 * 1024 * 1024, `Offline assets must be >= 30MB, found ${(totalOfflineSize / (1024*1024)).toFixed(1)}MB`);

    const distApkPath = path.join(__dirname, 'dist/class-10-ai-guru.apk');
    assert(fs.existsSync(distApkPath), 'Distribution APK must exist at dist/class-10-ai-guru.apk');
  });

  console.log('\n======================================================');
  console.log(`Class 10th AI Guru Test Suite Summary:`);
  console.log(`Passed: ${passedTests} / ${totalTests}`);
  console.log('======================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 All Class 10th AI verification checks passed with 100% compliance!\n');
  } else {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
