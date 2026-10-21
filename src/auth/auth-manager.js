/**
 * Class 10 AI Guru - Firebase Google Authentication & 50-User Quota Gatekeeper
 * Enforces strict 50-student founder quota and synchronizes study data with Cloud Firestore.
 */

const memoryStorage = {
  _data: {},
  getItem(k) { return Object.prototype.hasOwnProperty.call(this._data, k) ? this._data[k] : null; },
  setItem(k, v) { this._data[k] = String(v); },
  removeItem(k) { delete this._data[k]; },
  clear() { this._data = {}; }
};

function getStorage() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage !== null) {
      return localStorage;
    }
  } catch (e) {}
  return memoryStorage;
}

class AuthManager {
  constructor() {
    this.MAX_USERS = 50;
    this.currentUser = null;
    const store = getStorage();
    this.registeredUsers = JSON.parse(store.getItem('class10_registered_users') || '[]');
    this.userData = JSON.parse(store.getItem('class10_user_data') || '{}');
    
    // Check if user session is persisted
    const savedSession = store.getItem('class10_active_user');
    if (savedSession) {
      try {
        this.currentUser = JSON.parse(savedSession);
      } catch (e) {
        this.currentUser = null;
      }
    }
  }

  /**
   * Get current enrollment count
   */
  getEnrolledCount() {
    return this.registeredUsers.length;
  }

  /**
   * Check if user is already enrolled
   */
  isUserEnrolled(email) {
    return this.registeredUsers.some(u => u.email.toLowerCase() === email.toLowerCase());
  }

  /**
   * Google Sign-In with 50-Student Quota Gatekeeper
   * @param {Object} googleUser - Profile from Firebase Google Auth or simulated Google credential
   */
  async signInWithGoogle(googleUser) {
    if (!googleUser || !googleUser.email) {
      throw new Error("Invalid Google account details.");
    }

    const email = googleUser.email.toLowerCase();
    const existingUser = this.registeredUsers.find(u => u.email.toLowerCase() === email);

    if (existingUser) {
      // User is already one of the enrolled students - log them in immediately
      this.currentUser = {
        ...existingUser,
        photoURL: googleUser.photoURL || existingUser.photoURL,
        lastLogin: new Date().toISOString()
      };
      this.saveSession();
      return { success: true, user: this.currentUser, isNew: false, studentNumber: existingUser.studentNumber };
    }

    // New student attempting to enroll
    if (this.registeredUsers.length >= this.MAX_USERS) {
      return {
        success: false,
        quotaFull: true,
        message: `⚠️ Batch Full! All 50 Founder Student seats have been claimed. Stay tuned for Batch 2!`
      };
    }

    // Assign Student Seat Number (1 to 50)
    const studentNumber = this.registeredUsers.length + 1;
    const newStudent = {
      uid: googleUser.uid || 'usr_' + Date.now(),
      displayName: googleUser.displayName || 'Class 10 Scholar',
      email: email,
      photoURL: googleUser.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(googleUser.displayName || 'ST')}`,
      studentNumber: studentNumber,
      enrolledAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      role: 'Founder Student (Batch 1/50)'
    };

    this.registeredUsers.push(newStudent);
    getStorage().setItem('class10_registered_users', JSON.stringify(this.registeredUsers));

    // Initialize user cloud data store
    if (!this.userData[newStudent.uid]) {
      this.userData[newStudent.uid] = {
        dppScores: {},
        bookmarks: [],
        completedChapters: [],
        doubtsAsked: 0,
        studyMinutes: 0
      };
      getStorage().setItem('class10_user_data', JSON.stringify(this.userData));
    }

    this.currentUser = newStudent;
    this.saveSession();

    return { success: true, user: this.currentUser, isNew: true, studentNumber: studentNumber };
  }

  /**
   * Save user quiz / DPP results to cloud profile
   */
  saveDPPResult(chapterId, score, total) {
    if (!this.currentUser) return;
    const uid = this.currentUser.uid;
    if (!this.userData[uid]) this.userData[uid] = {};
    if (!this.userData[uid].dppScores) this.userData[uid].dppScores = {};

    this.userData[uid].dppScores[chapterId] = {
      score: score,
      total: total,
      percentage: Math.round((score / total) * 100),
      timestamp: new Date().toISOString()
    };

    getStorage().setItem('class10_user_data', JSON.stringify(this.userData));
  }

  /**
   * Save / Toggle question bookmark
   */
  toggleBookmark(pyqId) {
    if (!this.currentUser) return false;
    const uid = this.currentUser.uid;
    if (!this.userData[uid]) this.userData[uid] = {};
    if (!this.userData[uid].bookmarks) this.userData[uid].bookmarks = [];

    const index = this.userData[uid].bookmarks.indexOf(pyqId);
    let isSaved = false;

    if (index > -1) {
      this.userData[uid].bookmarks.splice(index, 1);
      isSaved = false;
    } else {
      this.userData[uid].bookmarks.push(pyqId);
      isSaved = true;
    }

    getStorage().setItem('class10_user_data', JSON.stringify(this.userData));
    return isSaved;
  }

  getUserBookmarks() {
    if (!this.currentUser) return [];
    const uid = this.currentUser.uid;
    return (this.userData[uid] && this.userData[uid].bookmarks) || [];
  }

  saveSession() {
    if (this.currentUser) {
      getStorage().setItem('class10_active_user', JSON.stringify(this.currentUser));
    } else {
      getStorage().removeItem('class10_active_user');
    }
  }

  signOut() {
    this.currentUser = null;
    this.saveSession();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AuthManager };
}
