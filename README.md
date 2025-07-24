# Letisia Pangataa's Blog

A modern, fast blog built with Next.js, TypeScript, and Tailwind CSS. Deployed automatically to GitHub Pages.

## Features

- 📝 Markdown support for blog posts
- 🎨 Beautiful, responsive design with Tailwind CSS
- ⚡ Fast static site generation with Next.js
- 🔒 Type-safe development with TypeScript
- 🚀 Automatic deployment to GitHub Pages
- 📱 Mobile-friendly responsive design

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

## Customization

- **Styling**: Modify `tailwind.config.js` and `styles/globals.css`
- **Layout**: Edit `components/Layout.tsx`
- **Configuration**: Update `next.config.js` for deployment settings
- **Content**: Add/edit posts in the `posts` directory

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Frontmatter parsing
- [Remark](https://remark.js.org/) - Markdown processing

## License

This project is open source and available under the [MIT License](LICENSE).
