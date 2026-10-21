/**
 * Class 10th AI - Master Application Controller
 * Handles UI interactions, tab switching, search filtering, DPP quizzes, and AI tutor.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AI Guru
  const aiGuru = new Class10AIGuru();

  // App State
  const state = {
    currentTab: 'notes',
    activeSubject: 'all',
    searchQuery: '',
    activeDppChapter: 'sci-01',
    dppAnswers: {},
    dppSubmitted: false,
    bookmarks: JSON.parse(localStorage.getItem('class10_bookmarks') || '[]')
  };

  // DOM Elements
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.app-section');
  const subjectPills = document.querySelectorAll('.subject-pill');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const notesContainer = document.getElementById('notesContainer');
  const sketchNotesContainer = document.getElementById('sketchNotesContainer');
  const pyqContainer = document.getElementById('pyqContainer');
  const dppContainer = document.getElementById('dppContainer');
  const papersContainer = document.getElementById('papersContainer');
  const pyqYearFilter = document.getElementById('pyqYearFilter');
  const pyqMarksFilter = document.getElementById('pyqMarksFilter');
  
  // AI Chat Elements
  const aiInput = document.getElementById('aiChatInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiChatMessages = document.getElementById('aiChatMessages');
  const aiPromptChips = document.querySelectorAll('.prompt-chip');

  // --- Tab Navigation ---
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add('active');

      state.currentTab = targetId.replace('Section', '');
      renderCurrentView();
    });
  });

  // --- Subject Filtering ---
  subjectPills.forEach(pill => {
    pill.addEventListener('click', () => {
      subjectPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeSubject = pill.dataset.subject;
      renderCurrentView();
    });
  });

  // --- Search Input ---
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCurrentView();
    });
  }

  // --- Year & Marks Filter for PYQs ---
  if (pyqYearFilter) {
    pyqYearFilter.addEventListener('change', () => renderPYQs());
  }
  if (pyqMarksFilter) {
    pyqMarksFilter.addEventListener('change', () => renderPYQs());
  }

  // --- AI Chat Handlers ---
  function sendAIMessage(text) {
    const q = text || (aiInput ? aiInput.value : '');
    if (!q.trim()) return;

    appendChatMessage('user', q);
    if (aiInput) aiInput.value = '';

    // Show simulated typing indicator
    const typingId = 'typing-' + Date.now();
    appendChatMessage('ai', 'Thinking with Class 10 NCERT knowledge base...', typingId);

    setTimeout(() => {
      const typingEl = document.getElementById(typingId);
      if (typingEl) typingEl.remove();

      const response = aiGuru.ask(q);
      appendChatMessage('ai', formatMarkdown(response));
    }, 450);
  }

  if (aiSendBtn) {
    aiSendBtn.addEventListener('click', () => sendAIMessage());
  }
  if (aiInput) {
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendAIMessage();
    });
  }
  aiPromptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendAIMessage(chip.dataset.prompt);
    });
  });

  function appendChatMessage(sender, htmlContent, id) {
    if (!aiChatMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}-msg`;
    if (id) msgDiv.id = id;

    const avatar = sender === 'ai' ? '🤖' : '👤';
    msgDiv.innerHTML = `
      <div class="msg-avatar">${avatar}</div>
      <div class="msg-bubble">${htmlContent}</div>
    `;
    aiChatMessages.appendChild(msgDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  // --- Format Markdown Helper ---
  function formatMarkdown(text) {
    if (!text) return '';
    let out = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/### (.*?)\n/g, '<h4 style="color: var(--cyan); margin: 0.8rem 0 0.3rem;">$1</h4>')
      .replace(/## (.*?)\n/g, '<h3 style="color: #fff; margin: 1rem 0 0.4rem;">$1</h3>')
      .replace(/# (.*?)\n/g, '<h2 style="color: #fff; margin: 1.2rem 0 0.5rem;">$1</h2>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
    return out;
  }

  // --- View Renderers ---
  function renderCurrentView() {
    renderNotes();
    renderSketchNotes();
    renderPYQs();
    renderDPP();
    renderSamplePapers();
  }

  // 1. Render Notes
  function renderNotes() {
    if (!notesContainer) return;
    notesContainer.innerHTML = '';

    // Collect chapters by subject filter
    let subjects = ['science', 'maths', 'social_science'];
    if (state.activeSubject !== 'all') {
      subjects = [state.activeSubject];
    }

    let allChapters = [];
    subjects.forEach(sub => {
      if (SYLLABUS_DATA[sub]) {
        allChapters = allChapters.concat(SYLLABUS_DATA[sub]);
      }
    });

    if (state.searchQuery) {
      allChapters = allChapters.filter(c => 
        c.name.toLowerCase().includes(state.searchQuery) ||
        c.tags.some(t => t.toLowerCase().includes(state.searchQuery))
      );
    }

    if (allChapters.length === 0) {
      notesContainer.innerHTML = `<div class="empty-state">No chapters found matching "${state.searchQuery}". Try searching for 'light', 'heart', or 'trig'.</div>`;
      return;
    }

    allChapters.forEach(chap => {
      const noteData = NOTES_DATA[chap.id];
      const card = document.createElement('div');
      card.className = 'chapter-card glass-panel';

      let badgesHtml = chap.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
      let hasFullNotes = !!noteData;

      card.innerHTML = `
        <div class="chap-header">
          <div class="chap-icon-title">
            <span class="chap-icon">${chap.icon}</span>
            <div>
              <span class="chap-num">Chapter ${chap.number} • ${chap.unit}</span>
              <h3 class="chap-title">${chap.name}</h3>
            </div>
          </div>
          <span class="weight-badge">${chap.weightage}</span>
        </div>
        <div class="chap-tags">${badgesHtml}</div>
        <div class="chap-actions">
          <button class="btn-action btn-summary" data-id="${chap.id}">⚡ 1-Page Summary</button>
          ${hasFullNotes ? `<button class="btn-action btn-full" data-id="${chap.id}">📖 In-Depth Notes</button>` : `<span class="coming-soon">Standard NCERT Sync</span>`}
          <button class="btn-action btn-dpp-link" data-id="${chap.id}">📝 Practice DPP</button>
        </div>
      `;

      notesContainer.appendChild(card);
    });

    // Attach button listeners
    notesContainer.querySelectorAll('.btn-summary').forEach(btn => {
      btn.addEventListener('click', () => openNoteModal(btn.dataset.id, 'summary'));
    });
    notesContainer.querySelectorAll('.btn-full').forEach(btn => {
      btn.addEventListener('click', () => openNoteModal(btn.dataset.id, 'full'));
    });
    notesContainer.querySelectorAll('.btn-dpp-link').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeDppChapter = btn.dataset.id;
        document.querySelector('[data-target="dppSection"]').click();
      });
    });
  }

  // 2. Render Sketch Notes
  function renderSketchNotes() {
    if (!sketchNotesContainer) return;
    sketchNotesContainer.innerHTML = '';

    let items = SKETCH_NOTES_DATA;
    if (state.activeSubject !== 'all') {
      const map = { science: 'Science', maths: 'Mathematics', social_science: 'Social Science' };
      const subName = map[state.activeSubject];
      if (subName) {
        items = items.filter(s => s.subject.includes(subName));
      }
    }

    if (state.searchQuery) {
      items = items.filter(s => 
        s.title.toLowerCase().includes(state.searchQuery) ||
        s.description.toLowerCase().includes(state.searchQuery)
      );
    }

    items.forEach(sketch => {
      const card = document.createElement('div');
      card.className = 'sketch-card glass-panel';

      let notesList = sketch.examNotes.map(n => `<li>${n}</li>`).join('');

      card.innerHTML = `
        <div class="sketch-header">
          <div>
            <span class="subject-tag">${sketch.subject}</span>
            <h3 class="sketch-title">${sketch.title}</h3>
          </div>
          <span class="badge-accent">${sketch.badge}</span>
        </div>
        <p class="sketch-desc">${sketch.description}</p>
        <div class="svg-viewport">${sketch.svgContent}</div>
        <div class="sketch-notes-box">
          <strong>💡 Topper Exam Tip:</strong>
          <ul>${notesList}</ul>
        </div>
      `;

      sketchNotesContainer.appendChild(card);
    });
  }

  // 3. Render 20-Year PYQs
  function renderPYQs() {
    if (!pyqContainer) return;
    pyqContainer.innerHTML = '';

    const selectedYear = pyqYearFilter ? pyqYearFilter.value : 'all';
    const selectedMarks = pyqMarksFilter ? pyqMarksFilter.value : 'all';

    let list = PYQ_VAULT_DATA;

    if (selectedYear !== 'all') {
      list = list.filter(q => q.year.toString() === selectedYear);
    }
    if (selectedMarks !== 'all') {
      list = list.filter(q => q.marks.toString() === selectedMarks);
    }
    if (state.activeSubject !== 'all') {
      const map = { science: 'Science', maths: 'Mathematics', social_science: 'Social Science' };
      const subName = map[state.activeSubject];
      if (subName) list = list.filter(q => q.subject.includes(subName));
    }
    if (state.searchQuery) {
      list = list.filter(q => 
        q.question.toLowerCase().includes(state.searchQuery) ||
        q.chapterName.toLowerCase().includes(state.searchQuery)
      );
    }

    if (list.length === 0) {
      pyqContainer.innerHTML = `<div class="empty-state">No PYQ found for this filter criteria. Try changing year or marks filter!</div>`;
      return;
    }

    list.forEach(q => {
      const item = document.createElement('div');
      item.className = 'pyq-item glass-panel';

      const isBookmarked = state.bookmarks.includes(q.id);

      item.innerHTML = `
        <div class="pyq-header">
          <div class="pyq-meta">
            <span class="pyq-year">${q.year} (${q.set})</span>
            <span class="pyq-chap">${q.chapterName}</span>
            <span class="pyq-marks">${q.marks} Marks • ${q.type}</span>
          </div>
          <div class="pyq-actions-top">
            <span class="freq-tag">🔥 ${q.frequency}</span>
            <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-id="${q.id}">
              ${isBookmarked ? '★ Saved' : '☆ Save'}
            </button>
          </div>
        </div>

        <div class="pyq-question">
          <p><strong>Q:</strong> ${q.question.replace(/\n/g, '<br>')}</p>
        </div>

        <button class="btn-toggle-solution" data-target="sol-${q.id}">
          👁️ Reveal Step-by-Step Marking Solution
        </button>

        <div class="pyq-solution hidden" id="sol-${q.id}">
          <div class="sol-inner">
            <h4 style="color: var(--cyan); margin-bottom: 0.5rem;">Official Marking Scheme Solution:</h4>
            <div class="sol-text">${q.solution.replace(/\n/g, '<br>')}</div>
            <div class="topper-note-box">
              <strong>🎯 Topper Presentation Tip:</strong> ${q.topperTip}
            </div>
          </div>
        </div>
      `;

      pyqContainer.appendChild(item);
    });

    // Attach Toggle & Bookmark listeners
    pyqContainer.querySelectorAll('.btn-toggle-solution').forEach(btn => {
      btn.addEventListener('click', () => {
        const solDiv = document.getElementById(btn.dataset.target);
        if (solDiv) {
          solDiv.classList.toggle('hidden');
          btn.textContent = solDiv.classList.contains('hidden') 
            ? '👁️ Reveal Step-by-Step Marking Solution' 
            : '🙈 Hide Solution';
        }
      });
    });

    pyqContainer.querySelectorAll('.btn-bookmark').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (state.bookmarks.includes(id)) {
          state.bookmarks = state.bookmarks.filter(b => b !== id);
          btn.classList.remove('bookmarked');
          btn.textContent = '☆ Save';
        } else {
          state.bookmarks.push(id);
          btn.classList.add('bookmarked');
          btn.textContent = '★ Saved';
        }
        localStorage.setItem('class10_bookmarks', JSON.stringify(state.bookmarks));
      });
    });
  }

  // 4. Render DPP
  function renderDPP() {
    if (!dppContainer) return;
    const dpp = DPP_SETS[state.activeDppChapter] || DPP_SETS['sci-01'];
    if (!dpp) return;

    let questionsHtml = dpp.questions.map((q, qIndex) => {
      const userSelected = state.dppAnswers[q.id];
      const isSubmitted = state.dppSubmitted;

      let optionsHtml = q.options.map((opt, optIndex) => {
        let optClass = 'dpp-option';
        if (userSelected === optIndex) optClass += ' selected';
        if (isSubmitted) {
          if (optIndex === q.correct) optClass += ' correct';
          else if (userSelected === optIndex && userSelected !== q.correct) optClass += ' wrong';
        }

        return `
          <div class="${optClass}" data-qid="${q.id}" data-optindex="${optIndex}">
            <span class="opt-letter">${String.fromCharCode(65 + optIndex)}</span>
            <span class="opt-text">${opt}</span>
          </div>
        `;
      }).join('');

      let explanationHtml = '';
      if (isSubmitted) {
        explanationHtml = `
          <div class="dpp-explanation">
            <strong>Explanation:</strong> ${q.explanation}<br>
            <span style="color: var(--cyan); font-size: 0.85rem;">💡 Hint: ${q.hint}</span>
          </div>
        `;
      }

      return `
        <div class="dpp-question-block">
          <div class="dpp-q-header">
            <span class="dpp-q-num">Q${qIndex + 1}</span>
            <span class="dpp-diff-tag ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
          </div>
          <p class="dpp-q-text">${q.question}</p>
          <div class="dpp-options-grid">${optionsHtml}</div>
          ${explanationHtml}
        </div>
      `;
    }).join('');

    dppContainer.innerHTML = `
      <div class="dpp-header-bar glass-panel">
        <div>
          <span class="dpp-pill">DPP SET #${dpp.dppNumber}</span>
          <h2 style="color: #fff; margin: 0.3rem 0;">${dpp.chapterTitle}</h2>
          <span style="color: var(--text-muted); font-size: 0.88rem;">⏱️ Time Suggested: ${dpp.timeLimitMinutes} Mins • ${dpp.questions.length} Questions</span>
        </div>
        <div class="dpp-header-actions">
          <button class="btn-primary" id="btnSubmitDpp">${state.dppSubmitted ? '🔄 Retake DPP' : '⚡ Submit Answers'}</button>
        </div>
      </div>

      <div class="dpp-questions-wrapper">
        ${questionsHtml}
      </div>
    `;

    // Option Click Handlers
    dppContainer.querySelectorAll('.dpp-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (state.dppSubmitted) return;
        const qid = opt.dataset.qid;
        const optIndex = parseInt(opt.dataset.optindex);
        state.dppAnswers[qid] = optIndex;
        renderDPP();
      });
    });

    const submitBtn = document.getElementById('btnSubmitDpp');
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (state.dppSubmitted) {
          state.dppSubmitted = false;
          state.dppAnswers = {};
        } else {
          state.dppSubmitted = true;
          // Calculate score
          let score = 0;
          dpp.questions.forEach(q => {
            if (state.dppAnswers[q.id] === q.correct) score++;
          });
          alert(`🎯 DPP Completed!\nYour Score: ${score} / ${dpp.questions.length}\nCheck detailed explanations below.`);
        }
        renderDPP();
      });
    }
  }

  // 5. Render Sample Papers
  function renderSamplePapers() {
    if (!papersContainer) return;
    papersContainer.innerHTML = '';

    SAMPLE_PAPERS_DATA.forEach(paper => {
      const card = document.createElement('div');
      card.className = 'paper-card glass-panel';

      let blueprintRows = Object.entries(paper.blueprint).map(([sec, desc]) => `
        <div class="blueprint-row">
          <strong>${sec.toUpperCase()}:</strong> <span>${desc}</span>
        </div>
      `).join('');

      let strategyRows = paper.strategyTips.map(t => `<li>${t}</li>`).join('');

      card.innerHTML = `
        <div class="paper-header">
          <div>
            <span class="subject-tag">${paper.subject}</span>
            <h3 style="color: #fff; font-size: 1.4rem; margin: 0.3rem 0;">${paper.title}</h3>
            <span style="color: var(--cyan); font-size: 0.9rem;">Maximum Marks: ${paper.totalMarks} • Time Allowed: ${paper.timeHours} Hours</span>
          </div>
          <button class="btn-primary btn-print-paper" onclick="window.print()">🖨️ Print / Save PDF</button>
        </div>

        <div class="paper-body">
          <h4 style="color: #fff; margin-bottom: 0.5rem;">📋 Exam Section Blueprint:</h4>
          <div class="blueprint-box">${blueprintRows}</div>

          <h4 style="color: #fff; margin: 1.2rem 0 0.5rem;">⏱️ 3-Hour Time Strategy:</h4>
          <ul class="strategy-list">${strategyRows}</ul>

          <h4 style="color: var(--cyan); margin: 1.2rem 0 0.5rem;">🎯 Featured High-Yield Model Questions:</h4>
          <div class="sample-q-list">
            ${paper.sampleQuestions.map(sq => `
              <div class="sample-q-item">
                <span class="sample-q-sec">${sq.section} • Q${sq.qNum}</span>
                <p><strong>Q:</strong> ${sq.question.replace(/\n/g, '<br>')}</p>
                <div class="sample-q-ans"><strong>Model Answer:</strong><br>${sq.answer.replace(/\n/g, '<br>')}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      papersContainer.appendChild(card);
    });
  }

  // --- Modal Note Viewer ---
  function openNoteModal(chapterId, type) {
    const note = NOTES_DATA[chapterId];
    if (!note) {
      alert("Notes for this chapter are currently being indexed from the latest NCERT revision.");
      return;
    }

    const modal = document.getElementById('noteModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalBody) return;

    modalTitle.textContent = `${note.title} (${type === 'summary' ? '1-Page Flash Recall' : 'Full In-Depth Notes'})`;

    if (type === 'summary') {
      const summary = note.onePageSummary;
      let defsHtml = summary.keyDefinitions.map(d => `
        <div class="modal-def-item">
          <strong style="color: var(--cyan);">${d.term}:</strong> ${d.def}
        </div>
      `).join('');

      let formulasHtml = summary.mustKnowFormulas.map(f => `<li><code>${f}</code></li>`).join('');
      let tipsHtml = summary.topperExamTips.map(t => `<li>${t}</li>`).join('');

      modalBody.innerHTML = `
        <div class="summary-modal-inner">
          <div class="summary-badge-banner">⚡ 1-PAGE REVISION CHEAT SHEET • ${note.subject}</div>
          
          <h4 style="color: #fff; margin-bottom: 0.5rem;">📌 Essential Board Definitions:</h4>
          <div class="modal-defs-grid">${defsHtml}</div>

          <h4 style="color: #fff; margin: 1.5rem 0 0.5rem;">🔢 Core Reactions / Formulas:</h4>
          <ul class="modal-formula-list">${formulasHtml}</ul>

          <h4 style="color: var(--cyan); margin: 1.5rem 0 0.5rem;">🎯 Topper Exam Strategy:</h4>
          <ul class="modal-tips-list">${tipsHtml}</ul>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="full-notes-markdown">
          ${formatMarkdown(note.fullNotesMarkdown)}
        </div>
      `;
    }

    modal.classList.add('open');
  }

  // Modal Close
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modal = document.getElementById('noteModal');
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  // Initial Render
  renderCurrentView();
});
