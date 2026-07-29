const fs = require('fs');
const path = require('path');

const getFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFiles(res));
    } else if (res.endsWith('.tsx')) {
      files.push(res);
    }
  }
  return files;
};

const targetFiles = [
  ...getFiles('components/home'),
  'app/sobre/page.tsx',
  'app/processo/page.tsx',
  'app/projetos/page.tsx'
];

targetFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/(<(?:section|ScrollRevealSection|div)[^>]*?className=(?:\"|\{`)[^\"`]*?)(\s+border-[tby]\s+border-[a-zA-Z0-9\/\-]+)([^\"`]*?(?:\"|`\}))/g, '$1$3');
  content = content.replace(/(<(?:section|ScrollRevealSection|div)[^>]*?className=(?:\"|\{`)[^\"`]*?)(\s+border-[tby]\s+border-[a-zA-Z0-9\/\-]+)([^\"`]*?(?:\"|`\}))/g, '$1$3');
  
  content = content.replace(/ className=" /g, ' className="');
  content = content.replace(/  +/g, ' ');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Done fast!');
