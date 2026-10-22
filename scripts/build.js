/**
 * Class 10 AI Guru - Asset Sync & Build Script
 * Synchronizes web assets to www/ directory for Capacitor Android packaging.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const wwwDir = path.join(rootDir, 'www');

// Recursive directory copy helper
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('📦 Building web assets for Android packaging into www/...');
  if (fs.existsSync(wwwDir)) {
    fs.rmSync(wwwDir, { recursive: true, force: true });
  }
  fs.mkdirSync(wwwDir, { recursive: true });

  // Copy root web files
  fs.copyFileSync(path.join(rootDir, 'index.html'), path.join(wwwDir, 'index.html'));
  fs.copyFileSync(path.join(rootDir, 'styles.css'), path.join(wwwDir, 'styles.css'));

  // Copy directories
  copyDirSync(path.join(rootDir, 'src'), path.join(wwwDir, 'src'));
  if (fs.existsSync(path.join(rootDir, 'assets'))) {
    copyDirSync(path.join(rootDir, 'assets'), path.join(wwwDir, 'assets'));
  }

  console.log('✅ Web assets successfully synchronized to www/');
}

if (require.main === module) {
  build();
}

module.exports = { build };
