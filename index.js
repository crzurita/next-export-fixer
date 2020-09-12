var path = require('path');
var fs = require('fs');
var directory = path.join(process.cwd(), 'out');

console.log('Checking html files...')
processFiles(directory);
console.log('The next project exported was successfully fixed');
process.exit();

function processFiles(pathName) {
  var names = fs.readdirSync(pathName);
  names.forEach(function(file) {
    if (file.match(/\.html/)) {
      var originalContent = fs.readFileSync(path.join(pathName, file), 'utf-8');
      var replacedContent = originalContent.replace(/\/_next/g, './_next');
      if(originalContent !== replacedContent) {
        fs.writeFileSync(path.join(pathName, file), replacedContent);
        console.log(path.join(pathName, file) + ' fixed! :)')
      }
    } else if (!file.match(/\./)) {
      processFiles(path.join(pathName, file));
    }
  })
}