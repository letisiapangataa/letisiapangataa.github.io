// This gets called at build time
import { GetStaticProps } from 'next'
import { getAllPosts } from '../lib/posts'

function generateSiteMap(posts: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://letisiapangataa.github.io</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${posts
    .map((post) => {
      return `
    <url>
      <loc>https://letisiapangataa.github.io/posts/${post.slug}</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    })
    .join('')}
</urlset>
`
}

function SiteMap() {
  // getStaticProps will do the heavy lifting
}

export const getStaticProps: GetStaticProps = async () => {
  // We make an API call to gather the URLs for our site
  const posts = getAllPosts()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  return {
    props: {
      sitemap
    },
  }
}

export default SiteMap
