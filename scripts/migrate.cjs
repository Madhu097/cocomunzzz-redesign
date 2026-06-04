const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log('Starting assets migration...');
  const root = path.resolve(__dirname, '..');
  copyDirSync(path.join(root, 'public/font'), path.join(root, 'src/assets/font'));
  copyDirSync(path.join(root, 'public/elements'), path.join(root, 'src/assets/elements'));
  console.log('Migration completed successfully!');
} catch (err) {
  console.error('Error during migration:', err);
  process.exit(1);
}
