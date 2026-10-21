/**
 * Class 10th AI - Automated Verification Test Suite
 * Asserts syllabus data structures, 20-year PYQ integrity, DPP scoring, and AI Guru responses.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Class 10th AI Verification Test Suite...\n');

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
const { SKETCH_NOTES_DATA } = require('./src/data/sketchnotes.js');
const { PYQ_VAULT_DATA } = require('./src/data/pyq-vault.js');
const { DPP_SETS } = require('./src/data/dpp.js');
const { SAMPLE_PAPERS_DATA } = require('./src/data/sample-papers.js');
const { Class10AIGuru } = require('./src/ai/ai-guru.js');
const { AuthManager } = require('./src/auth/auth-manager.js');

async function main() {
  await runTest('Master Syllabus covers Science, Maths, and Social Science with 25+ chapters', () => {
  assert(SYLLABUS_DATA.science.length >= 10, 'Science must have at least 10 chapters');
  assert(SYLLABUS_DATA.maths.length >= 10, 'Maths must have at least 10 chapters');
  assert(SYLLABUS_DATA.social_science.length >= 5, 'Social Science must have at least 5 chapters');

  // Verify fields
  SYLLABUS_DATA.science.forEach(c => {
    assert(c.id && c.name && c.unit && c.weightage, `Chapter missing required fields: ${JSON.stringify(c)}`);
  });
});

  await runTest('Notes dataset has both 1-Page Summaries and In-Depth Markdown notes', () => {
    const noteKeys = Object.keys(NOTES_DATA);
    assert(noteKeys.length >= 5, 'Must have at least 5 in-depth chapter notes');

    noteKeys.forEach(k => {
      const note = NOTES_DATA[k];
      assert(note.title, `Note missing title for ${k}`);
      assert(note.onePageSummary, `Note missing onePageSummary for ${k}`);
      assert(note.onePageSummary.keyDefinitions.length > 0, `Missing key definitions for ${k}`);
      assert(note.onePageSummary.mustKnowFormulas.length > 0, `Missing formulas for ${k}`);
      assert(note.fullNotesMarkdown && note.fullNotesMarkdown.length > 100, `Missing markdown notes for ${k}`);
    });
  });

  await runTest('Visual Sketch Notes Atlas contains valid SVG vector diagrams', () => {
    assert(SKETCH_NOTES_DATA.length >= 3, 'Must have at least 3 sketch notes');

    SKETCH_NOTES_DATA.forEach(s => {
      assert(s.id && s.title && s.svgContent, `Sketch note missing fields: ${s.title}`);
      assert(s.svgContent.includes('<svg') && s.svgContent.includes('</svg>'), `Invalid SVG in ${s.title}`);
      assert(s.examNotes && s.examNotes.length > 0, `Missing topper notes in ${s.title}`);
    });
  });

  await runTest('2004–2026 PYQ Vault spans 2004 to 2026 with step-by-step marking schemes', () => {
    assert(PYQ_VAULT_DATA.length >= 10, 'Must have at least 10 real board questions');

    const years = PYQ_VAULT_DATA.map(q => q.year);
    assert(years.includes(2026), 'Must include 2026 Board Specimen question');
    assert(years.includes(2025), 'Must include 2025 Board Exam question');
    assert(years.includes(2024), 'Must include 2024 Board Exam question');
    assert(years.includes(2004), 'Must span back to 2004 Board Exam question');

    PYQ_VAULT_DATA.forEach(q => {
      assert(q.year >= 2000 && q.year <= 2026, `Invalid year: ${q.year}`);
      assert(q.set, `Missing set info in ${q.id}`);
      assert(q.question && q.solution, `Missing Q or Solution in ${q.id}`);
      assert(q.solution.includes('Mark'), `Solution must include marking scheme breakdown in ${q.id}`);
      assert(q.topperTip, `Missing topper tip in ${q.id}`);
    });
  });

  await runTest('DPP (Daily Practice Problems) sets have valid multiple choice questions and answers', () => {
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

  await runTest('Official Sample Papers have blueprints and model answers', () => {
    assert(SAMPLE_PAPERS_DATA.length >= 2, 'Must have at least 2 sample papers (Science & Maths)');

    SAMPLE_PAPERS_DATA.forEach(p => {
      assert(p.totalMarks === 80, `Board paper must be 80 marks: ${p.title}`);
      assert(p.timeHours === 3, `Board paper must be 3 hours: ${p.title}`);
      assert(p.blueprint && Object.keys(p.blueprint).length >= 4, `Missing section blueprint in ${p.title}`);
      assert(p.sampleQuestions.length >= 2, `Missing model questions in ${p.title}`);
    });
  });

  await runTest('Class10AIGuru returns accurate NCERT board guidance for core topics', () => {
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
    const isSaved = auth.toggleBookmark('pyq-2026-sci-s1');
    assert(isSaved === true, 'Bookmark should be toggled ON');
    assert(auth.getUserBookmarks().includes('pyq-2026-sci-s1'), 'Bookmark list must contain bookmarked PYQ');

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

    // 5. Existing user (e.g. Student #1) can sign in again even when quota is full
    const reLoginUser1 = await auth.signInWithGoogle({
      uid: 'google_uid_01',
      displayName: 'Aarav Sharma',
      email: 'aarav.sharma@example.com'
    });

    assert(reLoginUser1.success === true, 'Existing student can log in even when 50 seats are full');
    assert(reLoginUser1.isNew === false, 'Existing student is recognized as already enrolled');
    assert(reLoginUser1.studentNumber === 1, 'Seat number must remain #1');
  });

  await runTest('UI Assets and Styles exist and are non-empty', () => {
    const indexPath = path.join(__dirname, 'index.html');
    const stylesPath = path.join(__dirname, 'styles.css');
    const appPath = path.join(__dirname, 'src/app.js');

    assert(fs.existsSync(indexPath), 'index.html must exist');
    assert(fs.existsSync(stylesPath), 'styles.css must exist');
    assert(fs.existsSync(appPath), 'src/app.js must exist');

    assert(fs.statSync(indexPath).size > 2000, 'index.html must be populated');
    assert(fs.statSync(stylesPath).size > 2000, 'styles.css must be populated');
    assert(fs.statSync(appPath).size > 2000, 'src/app.js must be populated');
  });

  console.log('\n========================================');
  console.log(`Class 10th AI Test Suite Summary:`);
  console.log(`Passed: ${passedTests} / ${totalTests}`);
  console.log('========================================\n');

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
