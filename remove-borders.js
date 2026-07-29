const fs = require('fs');
const glob = require('glob');

const files = [
  ...glob.sync('components/home/*.tsx'),
  ...glob.sync('app/sobre/page.tsx'),
  ...glob.sync('app/processo/page.tsx'),
  ...glob.sync('app/projetos/page.tsx')
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace only within className="..." strings or template literals on specific tags
  // Actually, we can just replace border-t border-[^\s"']+ globally if we are careful,
  // but let's be safe. We only want to remove border-[tby] border-... if they are part of a section's className
  // The easiest way is to use a regex that matches `className="... border-t border-... ..."` 
  // Let's just remove them globally for the target files if they match border-t/b/y border-[black|white|border]/*
  // Wait! We don't want to remove border-t from small cards inside those files!
  
  // Let's replace specifically in <section className="..."> or <ScrollRevealSection ... className="..."> or <div className="sticky...
  content = content.replace(/(<(?:section|ScrollRevealSection|div)[^>]*?className=(?:\"|\{`)[^\"`]*?)(\s+border-[tby]\s+border-[a-zA-Z0-9\/\-]+)([^\"`]*?(?:\"|`\}))/g, '$1$3');
  content = content.replace(/(<(?:section|ScrollRevealSection|div)[^>]*?className=(?:\"|\{`)[^\"`]*?)(\s+border-[tby]\s+border-[a-zA-Z0-9\/\-]+)([^\"`]*?(?:\"|`\}))/g, '$1$3'); // run twice just in case there are multiple
  
  // Clean up any double spaces left behind
  content = content.replace(/ className=" /g, ' className="');
  content = content.replace(/  +/g, ' ');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Done!');
