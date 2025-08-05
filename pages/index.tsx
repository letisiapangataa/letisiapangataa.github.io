import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import Layout from '../components/Layout'
import { format } from 'date-fns'

const getDifficultyColor = (difficulty?: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-800'
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800'
    case 'Difficult':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  featuredImage?: string
  difficulty?: 'Easy' | 'Intermediate' | 'Difficult'
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Letisia&apos;s Technology Portfolio - Empowering Innovation with Cloud, AI & Cybersecurity</title>
        <meta name="description" content="Explore cutting-edge technology insights from Letisia Pangata'a - Cloud Solution Architect specializing in Azure, cybersecurity, Power BI, and AI solutions. From beginner-friendly guides to advanced technical implementations." />
        <meta name="keywords" content="Cloud Computing, Azure, Cybersecurity, Power BI, AI, Technology Portfolio, Security Monitoring, Dashboard Development, KQL, DAX" />
        <meta name="author" content="Letisia Pangata'a" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://letisiapangataa.github.io" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Letisia's Technology Portfolio - Empowering Innovation with Cloud, AI & Cybersecurity" />
        <meta property="og:description" content="Explore cutting-edge technology insights from Letisia Pangata'a - Cloud Solution Architect specializing in Azure, cybersecurity, Power BI, and AI solutions." />
        <meta property="og:url" content="https://letisiapangataa.github.io" />
        <meta property="og:site_name" content="Letisia's Technology Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://letisiapangataa.github.io/images/azure-sentinel-power-bi-featured.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Letisia's Technology Portfolio - Cloud, AI & Cybersecurity" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@letisiapangataa" />
        <meta name="twitter:creator" content="@letisiapangataa" />
        <meta name="twitter:title" content="Letisia's Technology Portfolio - Empowering Innovation with Cloud, AI & Cybersecurity" />
        <meta name="twitter:description" content="Explore cutting-edge technology insights from Letisia Pangata'a - Cloud Solution Architect specializing in Azure, cybersecurity, Power BI, and AI solutions." />
        <meta name="twitter:image" content="https://letisiapangataa.github.io/images/azure-sentinel-power-bi-featured.png" />
        <meta name="twitter:image:alt" content="Letisia's Technology Portfolio - Cloud, AI & Cybersecurity" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
        
        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Letisia Pangata'a",
              "url": "https://letisiapangataa.github.io",
              "sameAs": [
                "https://www.linkedin.com/in/letisiapangataa/",
                "https://github.com/letisiapangataa"
              ],
              "jobTitle": "Cloud Solution Architect",
              "worksFor": {
                "@type": "Organization",
                "name": "Microsoft"
              },
              "knowsAbout": [
                "Cloud Computing",
                "Azure",
                "Cybersecurity",
                "Power BI",
                "Artificial Intelligence",
                "Data Analytics"
              ],
              "description": "Cloud Solution Architect specializing in Azure, cybersecurity, Power BI, and AI solutions"
            })
          }}
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">

        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              {/* Large Featured Image Above Content */}
              {/* Content */}
              <div>
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2 leading-snug">
                  {post.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-gray-500 text-m leading-relaxed">
                    {format(new Date(post.date), 'MMMM dd, yyyy')} 👩🏽‍🔬{' '}
                    <a
                    href="https://www.linkedin.com/in/letisiapangataa/"
                    target="_blank"
                    rel="noopener noreferrer"

                    >
                    Letisia Pangata&apos;a
                    </a>
                  </p>
                  {post.difficulty && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed mb-2">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer text-m leading-tight">
                  More Information
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts yet. Check back soon! 🧪
            </p>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}
