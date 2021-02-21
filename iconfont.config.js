const path = require('path');
const svgtofont = require('svgtofont');

const pkg = require('./package.json');

svgtofont({
  src: path.resolve(process.cwd(), 'src/assets/icons'),
  dist: path.resolve(process.cwd(), 'src/assets/fonts'),
  fontName: 'if', // font name

  website: {
    title: 'if',
    logo: '',
    version: pkg.version,
  },
});
