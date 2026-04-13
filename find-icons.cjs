const si = require('simple-icons');
console.log('Sample keys:', Object.keys(si).slice(0, 20));
console.log('Contains CapCut?', Object.values(si).some(v => v.title && v.title.toLowerCase().includes('capcut')));
console.log('Contains After Effects?', Object.values(si).some(v => v.title && v.title.toLowerCase().includes('after effects')));
