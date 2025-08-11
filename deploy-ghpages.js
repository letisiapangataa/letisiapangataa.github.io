// This script deploys the static export to the gh-pages branch using gh-pages package
const ghpages = require('gh-pages');

ghpages.publish('out', {
  branch: 'gh-pages',
  repo: 'https://github.com/letisiapangataa/letisiapangataa.github.io.git',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  },
  message: 'Deploy Next.js static export to GitHub Pages',
  dotfiles: true
}, function(err) {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployment successful!');
  }
});
