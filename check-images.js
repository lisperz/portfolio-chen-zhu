const { about } = require('./src/resources/content.js');

console.log('Checking work experience images configuration:\n');

about.work.experiences.forEach((exp, index) => {
  console.log(`${index + 1}. ${exp.company}`);
  console.log(`   URL: ${exp.url || 'No URL'}`);
  console.log(`   Images: ${exp.images.length} image(s)`);
  
  exp.images.forEach((img, imgIndex) => {
    console.log(`   - Image ${imgIndex + 1}:`);
    console.log(`     src: ${img.src}`);
    console.log(`     alt: ${img.alt}`);
    console.log(`     dimensions: ${img.width}x${img.height}`);
  });
  console.log('');
});