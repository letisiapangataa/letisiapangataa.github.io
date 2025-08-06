# Letisia's Technology Portfolio

A modern, responsive blog built with Next.js, TypeScript, and Tailwind CSS, deployed on GitHub Pages.

## 🚀 Features

- **Next.js 14** with TypeScript for type-safe development
- **Tailwind CSS** for modern, responsive styling
- **Markdown Support** for blog posts with frontmatter
- **Featured Images** with full-screen hero display
- **Social Media Sharing** for blog posts
- **SEO Optimized** with structured data and meta tags
- **GitHub Pages** deployment with automatic CI/CD
- **Responsive Design** optimized for all devices

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/letisiapangataa/letisiapangataa.github.io.git
cd letisiapangataa.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Writing Posts

Create new blog posts by adding Markdown files to the `posts` directory. Each post should include frontmatter with metadata:

```markdown
---
title: "Your Post Title"
date: "2025-01-20"
excerpt: "A brief description of your post"
---

# Your Post Content

Write your post content here using Markdown syntax.
```

## Deployment

The blog is configured to automatically deploy to GitHub Pages when you push to the main branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

You can also build and export the site manually:

```bash
npm run build
```

This will generate a static site in the `out` directory.

## Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── components/          # React components
├── lib/                # Utility functions
├── pages/              # Next.js pages
├── posts/              # Blog posts (Markdown files)
├── styles/             # CSS styles
└── public/             # Static assets
```

## 🚀 Deployment Instructions

### Automatic Deployment (Recommended)

1. **Push to GitHub**: All changes pushed to the `main` branch will automatically trigger deployment via GitHub Actions.

2. **GitHub Pages Settings**: 
   - Go to your repository settings
   - Navigate to Pages section
   - Source: Deploy from a branch
   - Branch: `gh-pages` (this is created automatically by the workflow)

### Manual Deployment

If you need to deploy manually:

```powershell
# Build the project
npm run build

# The static files will be in the 'out' directory
# These can be deployed to any static hosting service
```

## 📝 Adding New Blog Posts

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
date: "2024-01-26"
description: "Brief description of your post"
featuredImage: "/images/your-image.svg"
---

# Your post content here...
```

3. Add your featured image to `public/images/`
4. Push to GitHub - the post will automatically be deployed!

## 🖼️ Featured Images

- Create SVG images for best scalability
- Recommended size: 1200x600px
- Place in `public/images/`
- Reference in frontmatter: `featuredImage: "/images/filename.svg"`

## Customization

- **Styling**: Modify `tailwind.config.js` and `styles/globals.css`
- **Layout**: Edit `components/Layout.tsx`
- **Configuration**: Update `next.config.js` for deployment settings
- **Content**: Add/edit posts in the `posts` directory

## 📊 SEO Features

- **Structured Data**: JSON-LD for better search engine understanding
- **Open Graph**: Social media preview optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: Auto-generated for search engines
- **Robots.txt**: Search engine crawling directives

## 🌐 Live Site

Visit: [https://letisiapangataa.github.io](https://letisiapangataa.github.io)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [Remark](https://remark.js.org/) - Markdown processing

## 📄 License

© 2025 Letisia Pangata'a. All Rights Reserved.

## License

This project is open source and available under the [MIT License](LICENSE).
