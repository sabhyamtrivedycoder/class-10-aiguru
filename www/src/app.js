/**
 * Class 10 AI Guru - Application Controller
 * Features Study Atmosphere Theme Switcher, Focus Pomodoro Timer,
 * Authentic Topper Handwritten Manuscripts, Interactive Mind Maps,
 * and 2004-2026 PYQ Solutions Hub.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Services
  const aiGuru = new Class10AIGuru();
  const authManager = new AuthManager();

  // App State
  const state = {
    currentTab: 'notes',
    activeSubject: 'all',
    searchQuery: '',
    activeDppChapter: 'sci-01',
    activeMindMapChapter: 'sci-01',
    dppAnswers: {},
    dppSubmitted: false,
    timerSeconds: 25 * 60,
    timerRunning: false,
    timerInterval: null
  };

  // DOM Elements
  const desktopTabs = document.querySelectorAll('.tab-btn');
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  const sections = document.querySelectorAll('.app-section');
  const subjectButtons = document.querySelectorAll('.btn-subject');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const notesContainer = document.getElementById('notesContainer');
  const mindMapContainer = document.getElementById('mindMapContainer');
  const mindMapChapterSelect = document.getElementById('mindMapChapterSelect');
  const sketchNotesContainer = document.getElementById('sketchNotesContainer');
  const pyqContainer = document.getElementById('pyqContainer');
  const dppContainer = document.getElementById('dppContainer');
  const papersContainer = document.getElementById('papersContainer');
  const pyqYearFilter = document.getElementById('pyqYearFilter');
  const pyqRegionFilter = document.getElementById('pyqRegionFilter');
  const pyqMarksFilter = document.getElementById('pyqMarksFilter');
  const seatsLeftSpan = document.getElementById('seatsLeftSpan');
  
  // Theme & Focus Timer Elements
  const studyThemeSelect = document.getElementById('studyThemeSelect');
  const focusTimerPill = document.getElementById('focusTimerPill');
  const timerDisplay = document.getElementById('timerDisplay');
  const timerIcon = document.getElementById('timerIcon');

  // Auth Elements
  const authArea = document.getElementById('authArea');
  const userModal = document.getElementById('userModal');
  const userModalClose = document.getElementById('userModalClose');
  const userModalBody = document.getElementById('userModalBody');

  // AI Chat Elements
  const aiInput = document.getElementById('aiChatInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiChatMessages = document.getElementById('aiChatMessages');
  const aiPromptChips = document.querySelectorAll('.prompt-chip');

  // --- 1. Study Atmosphere Theme Manager ---
  function initTheme() {
    const savedTheme = localStorage.getItem('class10_study_theme') || 'midnight-slate';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (studyThemeSelect) {
      studyThemeSelect.value = savedTheme;
      studyThemeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('class10_study_theme', theme);
      });
    }
  }
  initTheme();

  // --- 2. Focus Study Pomodoro Timer (25 Min Sprint) ---
  function initFocusTimer() {
    if (!focusTimerPill || !timerDisplay) return;

    function formatTime(totalSec) {
      const mins = Math.floor(totalSec / 60);
      const secs = totalSec % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    focusTimerPill.addEventListener('click', () => {
      if (state.timerRunning) {
        // Pause
        clearInterval(state.timerInterval);
        state.timerRunning = false;
        if (timerIcon) timerIcon.textContent = '▶';
      } else {
        // Start
        state.timerRunning = true;
        if (timerIcon) timerIcon.textContent = '⏸';
        state.timerInterval = setInterval(() => {
          if (state.timerSeconds > 0) {
            state.timerSeconds--;
            timerDisplay.textContent = formatTime(state.timerSeconds);
          } else {
            clearInterval(state.timerInterval);
            state.timerRunning = false;
            if (timerIcon) timerIcon.textContent = '🔄';
            alert('🔔 25-Minute Board Study Sprint Completed! Take a 5-minute break.');
            state.timerSeconds = 25 * 60;
            timerDisplay.textContent = '25:00';
          }
        }, 1000);
      }
    });
  }
  initFocusTimer();

  // --- 3. Auth UI & Quota Indicator ---
  function updateAuthUI() {
    const enrolled = authManager.getEnrolledCount();
    const remainingSeats = Math.max(0, authManager.MAX_USERS - enrolled);
    if (seatsLeftSpan) {
      seatsLeftSpan.textContent = `${remainingSeats} / ${authManager.MAX_USERS} Seats Left`;
    }

    if (!authArea) return;

    if (authManager.currentUser) {
      const u = authManager.currentUser;
      authArea.innerHTML = `
        <div class="user-profile-badge" id="btnOpenUserProfile">
          <img src="${u.photoURL}" alt="${u.displayName}" class="user-avatar">
          <span class="user-name-text">${u.displayName.split(' ')[0]}</span>
          <span class="user-seat-tag">#${u.studentNumber || 1}</span>
        </div>
      `;

      document.getElementById('btnOpenUserProfile').addEventListener('click', () => {
        openUserProfileModal();
      });
    } else {
      authArea.innerHTML = `
        <button class="btn-google-login" id="btnGoogleSignIn">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Continue with Google
        </button>
      `;

      document.getElementById('btnGoogleSignIn').addEventListener('click', handleGoogleSignInClick);
    }
  }

  async function handleGoogleSignInClick() {
    let studentName = prompt("Welcome to Class 10 AI Guru!\nEnter your name to join Founder Student Batch (Max 50):", "Sabhyam");
    if (!studentName || !studentName.trim()) return;

    let studentEmail = prompt("Enter your Google Account email:", `${studentName.toLowerCase().replace(/\s+/g, '')}@gmail.com`);
    if (!studentEmail || !studentEmail.trim()) return;

    const googleUser = {
      uid: 'goog_' + btoa(studentEmail).substring(0, 12),
      displayName: studentName.trim(),
      email: studentEmail.trim(),
      photoURL: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(studentName.trim())}`
    };

    const result = await authManager.signInWithGoogle(googleUser);
    if (!result.success) {
      alert(result.message);
    } else {
      alert(`🎉 Welcome ${result.user.displayName}!\nYou have been enrolled as Founder Student #${result.studentNumber} of 50.\nYour DPP scores and bookmarks will now sync automatically.`);
    }

    updateAuthUI();
    renderCurrentView();
  }

  function openUserProfileModal() {
    if (!userModal || !userModalBody || !authManager.currentUser) return;
    const u = authManager.currentUser;
    const bookmarks = authManager.getUserBookmarks();
    const uData = authManager.userData[u.uid] || {};
    const dppScores = uData.dppScores || {};

    let dppListHtml = Object.entries(dppScores).map(([chapId, data]) => `
      <div style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px solid var(--border);">
        <span>${chapId.toUpperCase()}</span>
        <strong style="color:var(--green);">${data.score} / ${data.total} (${data.percentage}%)</strong>
      </div>
    `).join('') || '<span style="color:var(--text-muted); font-size:0.85rem;">No DPP quizzes completed yet.</span>';

    userModalBody.innerHTML = `
      <div style="text-align:center; margin-bottom:1.25rem;">
        <img src="${u.photoURL}" alt="${u.displayName}" style="width:70px; height:70px; border-radius:50%; border:3px solid var(--primary); margin-bottom:0.5rem;">
        <h3 style="color:#fff; font-size:1.25rem;">${u.displayName}</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">${u.email}</p>
        <span class="user-seat-tag" style="font-size:0.8rem; padding:0.25rem 0.75rem; margin-top:0.4rem; display:inline-block;">
          🎓 Founder Batch Seat: #${u.studentNumber || 1} of 50
        </span>
      </div>

      <div style="background:var(--bg-input); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:1rem;">
        <h4 style="color:#fff; font-size:0.95rem; margin-bottom:0.5rem;">📊 Your Cloud Performance:</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; text-align:center; margin-bottom:0.75rem;">
          <div style="background:var(--bg-surface); padding:0.6rem; border-radius:8px;">
            <div style="font-size:1.3rem; font-weight:700; color:var(--primary);">${Object.keys(dppScores).length}</div>
            <div style="font-size:0.72rem; color:var(--text-muted);">DPP Completed</div>
          </div>
          <div style="background:var(--bg-surface); padding:0.6rem; border-radius:8px;">
            <div style="font-size:1.3rem; font-weight:700; color:var(--amber);">${bookmarks.length}</div>
            <div style="font-size:0.72rem; color:var(--text-muted);">Saved PYQs</div>
          </div>
        </div>

        <h5 style="color:var(--text-muted); font-size:0.82rem; margin-bottom:0.3rem;">Recent DPP Records:</h5>
        ${dppListHtml}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <button class="btn-card" id="btnSignOutUser" style="background:rgba(225,29,72,0.15); color:#fb7185; border-color:rgba(225,29,72,0.3);">
          🚪 Sign Out
        </button>
        <button class="btn-primary" id="btnCloseProfileModal">
          Close Profile
        </button>
      </div>
    `;

    userModal.classList.add('open');

    document.getElementById('btnSignOutUser').addEventListener('click', () => {
      authManager.signOut();
      userModal.classList.remove('open');
      updateAuthUI();
      renderCurrentView();
    });

    document.getElementById('btnCloseProfileModal').addEventListener('click', () => {
      userModal.classList.remove('open');
    });
  }

  if (userModalClose) {
    userModalClose.addEventListener('click', () => userModal.classList.remove('open'));
  }

  // --- 4. Synchronized Tab Navigation ---
  function switchTab(targetId) {
    desktopTabs.forEach(t => {
      if (t.dataset.target === targetId) t.classList.add('active');
      else t.classList.remove('active');
    });

    bottomNavItems.forEach(b => {
      if (b.dataset.target === targetId) b.classList.add('active');
      else b.classList.remove('active');
    });

    sections.forEach(s => s.classList.remove('active'));
    const targetSection = document.getElementById(targetId);
    if (targetSection) targetSection.classList.add('active');

    state.currentTab = targetId.replace('Section', '');
    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  desktopTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.target));
  });

  bottomNavItems.forEach(item => {
    item.addEventListener('click', () => switchTab(item.dataset.target));
  });

  // --- 5. Subject Filtering ---
  subjectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      subjectButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeSubject = btn.dataset.subject;
      renderCurrentView();
    });
  });

  // --- 6. Search Input ---
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderCurrentView();
    });
  }

  // --- 7. PYQ Filter Selects ---
  if (pyqYearFilter) {
    pyqYearFilter.addEventListener('change', () => renderPYQs());
  }
  if (pyqRegionFilter) {
    pyqRegionFilter.addEventListener('change', () => renderPYQs());
  }
  if (pyqMarksFilter) {
    pyqMarksFilter.addEventListener('change', () => renderPYQs());
  }

  // --- 8. AI Chat Logic ---
  function sendAIMessage(text) {
    const q = text || (aiInput ? aiInput.value : '');
    if (!q.trim()) return;

    appendChatMessage('user', q);
    if (aiInput) aiInput.value = '';

    const typingId = 'typing-' + Date.now();
    appendChatMessage('guru', 'Thinking with Class 10 NCERT knowledge base...', typingId);

    setTimeout(() => {
      const typingEl = document.getElementById(typingId);
      if (typingEl) typingEl.remove();

      const response = aiGuru.ask(q);
      appendChatMessage('guru', formatMarkdown(response));
    }, 350);
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
    msgDiv.className = `bubble ${sender}`;
    if (id) msgDiv.id = id;
    msgDiv.innerHTML = htmlContent;
    aiChatMessages.appendChild(msgDiv);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
  }

  function formatMarkdown(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/### (.*?)\n/g, '<h4 style="color:var(--primary); margin:0.6rem 0 0.2rem;">$1</h4>')
      .replace(/## (.*?)\n/g, '<h3 style="color:#fff; margin:0.8rem 0 0.3rem;">$1</h3>')
      .replace(/# (.*?)\n/g, '<h2 style="color:#fff; margin:1rem 0 0.4rem;">$1</h2>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  // --- View Renderers ---
  function renderCurrentView() {
    renderNotes();
    renderMindMaps();
    renderSketchNotes();
    renderPYQs();
    renderDPP();
    renderSamplePapers();
  }

  // 1. Render Authentic Topper Handwritten Notes
  function renderNotes() {
    if (!notesContainer) return;
    notesContainer.innerHTML = '';

    let subjects = ['science', 'maths', 'social_science', 'english', 'hindi'];
    if (state.activeSubject !== 'all') subjects = [state.activeSubject];

    let allChapters = [];
    subjects.forEach(sub => {
      if (SYLLABUS_DATA[sub]) allChapters = allChapters.concat(SYLLABUS_DATA[sub]);
    });

    if (state.searchQuery) {
      allChapters = allChapters.filter(c => 
        c.name.toLowerCase().includes(state.searchQuery) ||
        c.tags.some(t => t.toLowerCase().includes(state.searchQuery))
      );
    }

    if (allChapters.length === 0) {
      notesContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:3rem; color:var(--text-muted);">No chapters found matching "${state.searchQuery}". Try searching 'chemical', 'triangles', or 'letter'.</div>`;
      return;
    }

    allChapters.forEach(chap => {
      const noteData = NOTES_DATA[chap.id];
      const card = document.createElement('div');
      card.className = 'study-card';

      let badgesHtml = chap.tags.map(t => `<span class="tag-item">${t}</span>`).join('');
      let hasTopperNotes = !!noteData;

      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="chapter-number-pill">Ch ${chap.number} • ${chap.unit}</span>
            <span class="tag-item" style="color:#fbbf24; font-weight:700;">${chap.weightage}</span>
          </div>
          <h3 class="card-title">${chap.icon} ${chap.name}</h3>
          <p class="card-sub">${hasTopperNotes ? (noteData.topperBadge || 'CBSE 100/100 Topper Curated') : 'NCERT Master Syllabus'}</p>
          <div class="tag-list">${badgesHtml}</div>
        </div>

        <div class="card-actions">
          <button class="btn-card primary btn-topper-sheet" data-id="${chap.id}">
            📝 Topper Sheet
          </button>
          <button class="btn-card btn-mindmap-link" data-id="${chap.id}">
            🧠 Mind Map
          </button>
          <button class="btn-card btn-dpp-link" data-id="${chap.id}">
            📝 DPP
          </button>
        </div>
      `;

      notesContainer.appendChild(card);
    });

    notesContainer.querySelectorAll('.btn-topper-sheet').forEach(btn => {
      btn.addEventListener('click', () => openTopperModal(btn.dataset.id));
    });
    notesContainer.querySelectorAll('.btn-mindmap-link').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeMindMapChapter = btn.dataset.id;
        switchTab('mindMapSection');
      });
    });
    notesContainer.querySelectorAll('.btn-dpp-link').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeDppChapter = btn.dataset.id;
        switchTab('dppSection');
      });
    });
  }

  // 2. Render Interactive Visual Mind Maps
  function renderMindMaps() {
    if (!mindMapContainer) return;
    
    // Populate chapter select dropdown if empty or on subject change
    if (mindMapChapterSelect && mindMapChapterSelect.options.length <= 1) {
      mindMapChapterSelect.innerHTML = '';
      MIND_MAPS_DATA.forEach(mm => {
        const opt = document.createElement('option');
        opt.value = mm.chapterId;
        opt.textContent = `${mm.icon} ${mm.subjectName}: ${mm.chapterName}`;
        if (mm.chapterId === state.activeMindMapChapter) opt.selected = true;
        mindMapChapterSelect.appendChild(opt);
      });

      mindMapChapterSelect.addEventListener('change', (e) => {
        state.activeMindMapChapter = e.target.value;
        renderMindMaps();
      });
    }

    // Find active mind map
    let mm = MIND_MAPS_DATA.find(m => m.chapterId === state.activeMindMapChapter) || MIND_MAPS_DATA[0];
    if (!mm) return;

    let branchesHtml = mm.branches.map(b => {
      let itemsHtml = b.items.map(item => `
        <div class="mindmap-leaf-item" style="border-left-color: ${b.color};">
          <div class="leaf-name">${item.name}</div>
          <div class="leaf-desc">${item.desc}</div>
          <div class="leaf-tip-badge">💡 ${item.tip}</div>
        </div>
      `).join('');

      return `
        <div class="mindmap-branch-box" style="border-top: 3px solid ${b.color};">
          <div class="mindmap-branch-head" style="color: ${b.color};">
            <span>${b.icon}</span>
            <span>${b.title}</span>
          </div>
          <div class="mindmap-items-list">
            ${itemsHtml}
          </div>
        </div>
      `;
    }).join('');

    mindMapContainer.innerHTML = `
      <div class="mindmap-shell">
        <div class="mindmap-toolbar">
          <div>
            <span class="topper-badge-stamp">Interactive Mind Map Engine</span>
            <span style="font-size:0.8rem; color:var(--text-muted); margin-left:0.5rem;">${mm.subjectName}</span>
          </div>
          <button class="btn-card" onclick="window.print()" style="max-width:140px;">🖨️ Export PDF</button>
        </div>

        <div class="mindmap-core-node">
          <div class="mindmap-core-title">${mm.icon} ${mm.rootNode.title}</div>
          <div class="mindmap-core-sub">${mm.rootNode.coreIdea}</div>
        </div>

        <div class="mindmap-branches-grid">
          ${branchesHtml}
        </div>
      </div>
    `;
  }

  // 3. Render Visual Sketch Notes
  function renderSketchNotes() {
    if (!sketchNotesContainer) return;
    sketchNotesContainer.innerHTML = '';

    let items = SKETCH_NOTES_DATA;
    if (state.activeSubject !== 'all') {
      const map = { 
        science: 'Science', 
        maths: 'Mathematics', 
        social_science: 'Social Science',
        english: 'English',
        hindi: 'Hindi'
      };
      const subName = map[state.activeSubject];
      if (subName) items = items.filter(s => s.subject.includes(subName));
    }

    if (state.searchQuery) {
      items = items.filter(s => 
        s.title.toLowerCase().includes(state.searchQuery) ||
        s.description.toLowerCase().includes(state.searchQuery)
      );
    }

    items.forEach(sketch => {
      const card = document.createElement('div');
      card.className = 'study-card';

      card.innerHTML = `
        <div style="margin-bottom:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
            <span style="font-size:0.72rem; color:var(--primary); font-weight:600; text-transform:uppercase;">${sketch.subject}</span>
            <span class="topper-badge-stamp" style="font-size:0.65rem;">${sketch.badge}</span>
          </div>
          <h3 style="color:#fff; font-size:1.1rem; font-weight:700;">${sketch.title}</h3>
          <p style="color:var(--text-muted); font-size:0.82rem; margin-top:0.2rem;">${sketch.description}</p>
        </div>

        <div style="width:100%; border-radius:12px; overflow:hidden; border:1px solid var(--border); margin-bottom:0.75rem;">
          ${sketch.svgContent}
        </div>

        <div class="topper-secret-box">
          <span>💡</span>
          <div>
            ${sketch.examNotes.map(n => `<div>• ${n}</div>`).join('')}
          </div>
        </div>
      `;

      sketchNotesContainer.appendChild(card);
    });
  }

  // 4. Render 2004 - 2026 PYQ Vault & Dedicated Solutions Hub
  function renderPYQs() {
    if (!pyqContainer) return;
    pyqContainer.innerHTML = '';

    const selectedYear = pyqYearFilter ? pyqYearFilter.value : 'all';
    const selectedRegion = pyqRegionFilter ? pyqRegionFilter.value : 'all';
    const selectedMarks = pyqMarksFilter ? pyqMarksFilter.value : 'all';

    let list = PYQ_VAULT_DATA;

    if (selectedYear !== 'all') {
      list = list.filter(q => q.year.toString() === selectedYear);
    }
    if (selectedRegion !== 'all') {
      list = list.filter(q => q.region === selectedRegion || q.set.includes(selectedRegion));
    }
    if (selectedMarks !== 'all') {
      list = list.filter(q => q.marks.toString() === selectedMarks);
    }
    if (state.activeSubject !== 'all') {
      const map = { 
        science: 'Science', 
        maths: 'Mathematics', 
        social_science: 'Social Science',
        english: 'English',
        hindi: 'Hindi'
      };
      const subName = map[state.activeSubject];
      if (subName) list = list.filter(q => q.subject.includes(subName));
    }
    if (state.searchQuery) {
      list = list.filter(q => 
        q.question.toLowerCase().includes(state.searchQuery) ||
        q.chapterName.toLowerCase().includes(state.searchQuery) ||
        q.solution.toLowerCase().includes(state.searchQuery)
      );
    }

    if (list.length === 0) {
      pyqContainer.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted);">No board question found matching your filter criteria. Try resetting year or marks filter!</div>`;
      return;
    }

    const savedBookmarks = authManager.getUserBookmarks();

    list.forEach(q => {
      const card = document.createElement('div');
      card.className = 'pyq-card';

      const isBookmarked = savedBookmarks.includes(q.id);

      card.innerHTML = `
        <div class="pyq-card-head">
          <div class="pyq-pill-group">
            <span class="pill-year">${q.year}</span>
            <span class="pill-region">${q.set}</span>
            <span class="pill-marks">${q.marks} Marks • ${q.type}</span>
            <span style="color:var(--text-main); font-size:0.85rem; font-weight:600;">${q.subject} • ${q.chapterName}</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span style="font-size:0.75rem; color:var(--amber);">🔥 ${q.frequency}</span>
            <button class="btn-card btn-save-pyq" data-id="${q.id}" style="padding:0.25rem 0.6rem; font-size:0.75rem;">
              ${isBookmarked ? '★ Saved' : '☆ Save'}
            </button>
          </div>
        </div>

        <div class="pyq-q-body">
          <p><strong>Q:</strong> ${q.question.replace(/\n/g, '<br>')}</p>
        </div>

        <button class="btn-show-solution" data-target="sol-${q.id}">
          👁️ Show Step-by-Step Marking Scheme Solution
        </button>

        <div class="solution-box hidden" id="sol-${q.id}">
          <div style="color:var(--primary); font-weight:700; margin-bottom:0.4rem; display:flex; justify-content:space-between;">
            <span>Official CBSE Step-by-Step Marking Scheme:</span>
            <span class="solution-mark-badge">+${q.marks} Marks Full Credit</span>
          </div>
          <div class="solution-step-callout">
            ${q.solution.replace(/\n/g, '<br>')}
          </div>
          <div class="topper-secret-box">
            <span>🎯</span>
            <div><strong>CBSE 100/100 Topper Strategy:</strong> ${q.topperTip}</div>
          </div>
        </div>
      `;

      pyqContainer.appendChild(card);
    });

    pyqContainer.querySelectorAll('.btn-show-solution').forEach(btn => {
      btn.addEventListener('click', () => {
        const solBox = document.getElementById(btn.dataset.target);
        if (solBox) {
          solBox.classList.toggle('hidden');
          btn.textContent = solBox.classList.contains('hidden') 
            ? '👁️ Show Step-by-Step Marking Scheme Solution' 
            : '🙈 Hide Solution';
        }
      });
    });

    pyqContainer.querySelectorAll('.btn-save-pyq').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!authManager.currentUser) {
          alert("Please sign in with Google to save questions to your founder cloud profile!");
          handleGoogleSignInClick();
          return;
        }

        const isSaved = authManager.toggleBookmark(btn.dataset.id);
        btn.textContent = isSaved ? '★ Saved' : '☆ Save';
      });
    });
  }

  // 5. Render DPP (Daily Practice Problems)
  function renderDPP() {
    if (!dppContainer) return;
    const dpp = DPP_SETS[state.activeDppChapter] || DPP_SETS['sci-01'];
    if (!dpp) return;

    let questionsHtml = dpp.questions.map((q, qIndex) => {
      const userSelected = state.dppAnswers[q.id];
      const isSubmitted = state.dppSubmitted;

      let optionsHtml = q.options.map((opt, optIndex) => {
        let optClass = 'dpp-opt-row';
        if (userSelected === optIndex) optClass += ' selected';
        if (isSubmitted) {
          if (optIndex === q.correct) optClass += ' correct';
          else if (userSelected === optIndex && userSelected !== q.correct) optClass += ' wrong';
        }

        return `
          <div class="${optClass}" data-qid="${q.id}" data-optindex="${optIndex}">
            <span style="font-weight:700; width:24px; height:24px; border-radius:50%; background:var(--bg-input); display:flex; align-items:center; justify-content:center; font-size:0.75rem;">${String.fromCharCode(65 + optIndex)}</span>
            <span style="font-size:0.9rem;">${opt}</span>
          </div>
        `;
      }).join('');

      let explanationHtml = '';
      if (isSubmitted) {
        explanationHtml = `
          <div style="background:var(--bg-input); padding:0.85rem; border-left:3px solid var(--green); border-radius:6px; font-size:0.85rem; color:#e2e8f0; margin-top:0.75rem;">
            <strong>Explanation:</strong> ${q.explanation}<br>
            <span style="color:var(--primary); font-size:0.8rem;">💡 Hint: ${q.hint}</span>
          </div>
        `;
      }

      return `
        <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:1.25rem; margin-bottom:1rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
            <span style="color:var(--primary); font-weight:700; font-size:0.85rem;">Question ${qIndex + 1}</span>
            <span class="topper-badge-stamp">${q.difficulty}</span>
          </div>
          <p style="color:#fff; font-size:0.95rem; margin-bottom:1rem; line-height:1.5;">${q.question}</p>
          <div>${optionsHtml}</div>
          ${explanationHtml}
        </div>
      `;
    }).join('');

    dppContainer.innerHTML = `
      <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:1.25rem; margin-bottom:1.25rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div>
          <span class="topper-badge-stamp">DPP SET #${dpp.dppNumber}</span>
          <h2 style="color:#fff; font-size:1.25rem; margin:0.25rem 0;">${dpp.chapterTitle}</h2>
          <span style="color:var(--text-muted); font-size:0.82rem;">⏱️ Suggested Time: ${dpp.timeLimitMinutes} Mins • ${dpp.questions.length} Questions</span>
        </div>
        <button class="btn-primary" id="btnSubmitDpp">${state.dppSubmitted ? '🔄 Retake DPP' : '⚡ Submit Test'}</button>
      </div>

      <div>${questionsHtml}</div>
    `;

    dppContainer.querySelectorAll('.dpp-opt-row').forEach(opt => {
      opt.addEventListener('click', () => {
        if (state.dppSubmitted) return;
        state.dppAnswers[opt.dataset.qid] = parseInt(opt.dataset.optindex);
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
          let score = 0;
          dpp.questions.forEach(q => {
            if (state.dppAnswers[q.id] === q.correct) score++;
          });

          if (authManager.currentUser) {
            authManager.saveDPPResult(state.activeDppChapter, score, dpp.questions.length);
          }

          alert(`🎯 DPP Completed!\nYour Score: ${score} / ${dpp.questions.length}\n${authManager.currentUser ? '✅ Score synced to your Founder cloud profile!' : 'Tip: Sign in with Google to save scores to your profile.'}`);
        }
        renderDPP();
      });
    }
  }

  // 6. Render Sample Papers
  function renderSamplePapers() {
    if (!papersContainer) return;
    papersContainer.innerHTML = '';

    SAMPLE_PAPERS_DATA.forEach(paper => {
      const card = document.createElement('div');
      card.className = 'study-card';

      let blueprintRows = Object.entries(paper.blueprint).map(([sec, desc]) => `
        <div style="font-size:0.85rem; padding:0.35rem 0; border-bottom:1px solid var(--border);">
          <strong style="color:#fff;">${sec.toUpperCase()}:</strong> <span style="color:var(--text-muted);">${desc}</span>
        </div>
      `).join('');

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
          <div>
            <span class="topper-badge-stamp">${paper.subject}</span>
            <h3 style="color:#fff; font-size:1.25rem; margin-top:0.3rem;">${paper.title}</h3>
            <span style="color:var(--primary); font-size:0.85rem; font-weight:600;">Max Marks: ${paper.totalMarks} • Time: ${paper.timeHours} Hours</span>
          </div>
          <button class="btn-card" onclick="window.print()" style="max-width:140px;">🖨️ Print / PDF</button>
        </div>

        <div style="background:var(--bg-input); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border); margin-bottom:1rem;">
          <h4 style="color:#fff; font-size:0.95rem; margin-bottom:0.5rem;">📋 Exam Section Blueprint:</h4>
          ${blueprintRows}
        </div>

        <h4 style="color:var(--primary); font-size:0.95rem; margin-bottom:0.5rem;">🎯 Featured Model Questions:</h4>
        <div style="display:flex; flex-direction:column; gap:0.75rem;">
          ${paper.sampleQuestions.map(sq => `
            <div style="background:var(--bg-surface); padding:0.85rem; border-radius:var(--radius-md); font-size:0.88rem;">
              <span style="color:var(--teal); font-weight:700; font-size:0.75rem;">${sq.section} • Q${sq.qNum}</span>
              <p style="color:#fff; margin:0.3rem 0;"><strong>Q:</strong> ${sq.question.replace(/\n/g, '<br>')}</p>
              <div style="color:#cbd5e1; font-size:0.85rem; margin-top:0.3rem;"><strong>Model Answer:</strong><br>${sq.answer.replace(/\n/g, '<br>')}</div>
            </div>
          `).join('')}
        </div>
      `;

      papersContainer.appendChild(card);
    });
  }

  // --- Modal: Authentic Topper Handwritten Ruled Manuscript Viewer ---
  function openTopperModal(chapterId) {
    const note = NOTES_DATA[chapterId];
    if (!note) {
      alert("Topper notes for this chapter are currently in transcription from official CBSE topper answer scripts.");
      return;
    }

    const modal = document.getElementById('noteModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (!modal || !modalBody) return;

    modalTitle.textContent = `${note.title}`;

    const summary = note.onePageSummary;
    let defsHtml = summary.keyDefinitions.map(d => `
      <div style="margin-bottom:0.6rem;">
        <span class="topper-highlighter">${d.term}</span>: <span class="topper-hand-note">${d.def}</span>
      </div>
    `).join('');

    let formulasHtml = summary.mustKnowFormulas.map(f => `
      <div style="padding:0.2rem 0; font-family:var(--font-mono); font-size:0.88rem; color:#93c5fd;">
        ⚡ ${f}
      </div>
    `).join('');

    let marginalHtml = (summary.topperMarginalNotes || []).map(m => `
      <div class="topper-margin-card">
        <span class="topper-margin-tag">${m.tag}</span>
        <span>${m.note}</span>
      </div>
    `).join('');

    let mistakesHtml = (summary.commonBoardMistakes || []).map(m => `
      <li style="color:#fda4af; margin-bottom:0.25rem;">${m}</li>
    `).join('');

    modalBody.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:0.5rem;">
        <span class="topper-badge-stamp">🏅 ${note.topperBadge || 'CBSE 100/100 Topper Manuscript'}</span>
        <span class="scribd-ref-pill">Scribd Archive: ${note.scribdDocId || 'CBSE-TOP-2024'}</span>
      </div>

      <div class="topper-notebook-sheet">
        <div class="topper-notebook-header">
          <div>
            <div class="topper-script-title">${note.title}</div>
            <span style="font-size:0.75rem; color:var(--text-sub);">${note.subject} • ${note.readTime}</span>
          </div>
          <span style="font-size:1.3rem;">🖋️</span>
        </div>

        <div style="margin-bottom:1.25rem;">
          <h4 style="font-family:var(--font-sans); color:var(--primary); font-size:0.85rem; text-transform:uppercase; margin-bottom:0.4rem;">
            📌 Core Definitions & Concepts:
          </h4>
          ${defsHtml}
        </div>

        <div style="margin-bottom:1.25rem;">
          <h4 style="font-family:var(--font-sans); color:var(--primary); font-size:0.85rem; text-transform:uppercase; margin-bottom:0.4rem;">
            🔢 High-Yield Equations & Formulas:
          </h4>
          ${formulasHtml}
        </div>

        <div style="margin-bottom:1rem;">
          <h4 style="font-family:var(--font-sans); color:#fbbf24; font-size:0.85rem; text-transform:uppercase; margin-bottom:0.4rem;">
            💡 Topper Margin Secrets:
          </h4>
          ${marginalHtml}
        </div>

        <div style="background:rgba(225,29,72,0.1); border-left:3px solid var(--rose); padding:0.75rem; border-radius:6px; margin-top:1rem;">
          <h4 style="color:#fb7185; font-size:0.82rem; text-transform:uppercase; margin-bottom:0.3rem;">
            ⚠️ Common Mistakes in Board Answer Copies (Avoid These!):
          </h4>
          <ul style="padding-left:1.2rem; font-size:0.82rem; line-height:1.6;">
            ${mistakesHtml}
          </ul>
        </div>
      </div>

      <div style="margin-top:1.25rem; padding-top:1rem; border-top:1px solid var(--border);">
        <h4 style="color:#fff; font-size:0.95rem; margin-bottom:0.5rem;">📖 Full Markdown Manuscript Notes:</h4>
        <div style="font-size:0.88rem; line-height:1.7; color:#cbd5e1;">
          ${formatMarkdown(note.fullNotesMarkdown)}
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modal = document.getElementById('noteModal');
  if (modalCloseBtn && modal) {
    modalCloseBtn.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  // Initial Run
  updateAuthUI();
  renderCurrentView();
});
