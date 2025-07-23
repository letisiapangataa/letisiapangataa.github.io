# Deployment Guide for Letisia's Technology Portfolio

This guide will help you deploy the revamped portfolio to GitHub Pages.

## Prerequisites

Before deploying, ensure you have:
- Git installed and configured
- GitHub account with repository access
- Ruby 3.2+ (for local development only)

## Quick Deployment to GitHub Pages

### Option 1: Direct Push (Recommended)

1. **Commit all changes**:
   ```bash
   git add .
   git commit -m "Revamp portfolio with modern design and enhanced features"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - The site will automatically build and deploy

### Option 2: GitHub Actions (Automated)

The repository now includes a GitHub Actions workflow (`.github/workflows/jekyll.yml`) that will:
- Automatically build the site when you push to main
- Deploy to GitHub Pages
- Handle all dependencies and build processes

## Local Development (Optional)

If you want to test locally before deploying:

### Windows Setup

1. **Install Ruby**:
   - Download Ruby+Devkit from [RubyInstaller](https://rubyinstaller.org/)
   - Run the installer and select "Add Ruby executables to PATH"

2. **Install Bundler**:
   ```powershell
   gem install bundler
   ```

3. **Install Dependencies**:
   ```powershell
   bundle install
   ```

4. **Serve Locally**:
   ```powershell
   bundle exec jekyll serve
   ```

5. **View Site**:
   Open `http://localhost:4000` in your browser

### Troubleshooting Local Setup

**Common Issues**:

1. **Ruby not found**: Ensure Ruby is in your PATH
2. **Bundle command not found**: Install bundler with `gem install bundler`
3. **Permission errors**: Run commands as administrator
4. **Port conflicts**: Use `bundle exec jekyll serve --port 4001`

## Site Configuration

### Key Files Updated

- `_config.yml` - Site configuration and settings
- `index.html` - Homepage with feature sections
- `_data/navigation.yml` - Main navigation menu
- `_pages/` - All static pages (About, Portfolio, Contact, etc.)
- `_posts/` - Blog posts with new content

### SEO Optimization

The site now includes:
- Meta descriptions and Open Graph tags
- Structured data markup
- XML sitemap generation
- Robots.txt file
- Optimized images and performance

### Social Media Integration

- LinkedIn, GitHub, Twitter links
- Social sharing buttons on posts
- Author profile with contact information

## Content Management

### Adding New Blog Posts

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Include front matter with title, categories, tags
3. Write content in Markdown
4. Commit and push to publish

### Updating Portfolio

1. Edit `_pages/portfolio.md`
2. Add new projects or update existing ones
3. Include images in `assets/images/`
4. Update navigation if needed

## Performance Monitoring

The site is optimized for:
- **Loading Speed**: < 2 seconds
- **Mobile Performance**: Responsive design
- **SEO**: Structured data and meta tags
- **Accessibility**: WCAG 2.1 compliance

## Security Considerations

- All forms use HTTPS
- No sensitive data in repository
- External images served via CDN (Cloudinary)
- Comments handled by Disqus

## Analytics Setup (Optional)

To enable Google Analytics:
1. Get tracking ID from Google Analytics
2. Update `_config.yml` with your tracking ID:
   ```yaml
   analytics:
     provider: "google-gtag"
     google:
       tracking_id: "YOUR_TRACKING_ID"
   ```

## Backup and Maintenance

### Regular Maintenance

1. **Monthly**: Update Ruby gems with `bundle update`
2. **Quarterly**: Review and update content
3. **Annually**: Audit performance and SEO

### Backup Strategy

- Repository is backed up on GitHub
- Images stored on Cloudinary CDN
- Regular local clones recommended

## Support and Resources

### Documentation

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

### Getting Help

- Check GitHub Issues for common problems
- Jekyll community forums
- Stack Overflow for technical questions

## Next Steps

After deployment:

1. **Verify Site**: Check all pages load correctly
2. **Test Mobile**: Ensure responsive design works
3. **SEO Check**: Submit sitemap to Google Search Console
4. **Social Media**: Share your new portfolio
5. **Monitor**: Set up analytics and monitoring

---

**Your revamped portfolio is ready to go live! 🚀**

The site now features modern design, enhanced functionality, and professional presentation that showcases your expertise in cloud architecture and technology leadership.
