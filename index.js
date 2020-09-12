const path = require('path');
const fs = require('fs');
const directory = path.join(process.cwd(), 'out');

processFiles(directory);

function processFiles(pathName) {
  const names = fs.readdirSync(pathName);
  names.forEach(file => {
    if (file.match(/\./)) {
      const originalContent = fs.readFileSync(path.join(pathName, file), 'utf-8');
      const replacedContent = originalContent.replace(/\/_next/g, './_next');
      fs.writeFileSync(path.join(pathName, file), replacedContent);
    } else {
      processFiles(path.join(pathName, file));
    }
  })
}