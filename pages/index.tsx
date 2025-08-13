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
  difficulty?: 'Easy' | 'Intermediate' | 'Difficult'
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Letisia&apos;s Technical Notebook - Building Secure Digital Futures with AI, Cloud & Cybersecurity</title>
        <meta name="description" content="Explore cutting-edge technology insights from Letisia Pangata'a - Cloud Solution Architect specializing in Azure, cybersecurity, Power BI, and AI solutions. From beginner-friendly guides to advanced technical implementations." />
        <meta name="keywords" content="Cloud Computing, Azure, Cybersecurity, Power BI, AI, Technology Portfolio, Security Monitoring, Dashboard Development, KQL, DAX" />
        <meta name="author" content="Letisia Pangata'a" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://letisiapangataa.github.io" />
        
        {/* Additional SEO Meta Tags */}
        
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
              {/* Removed all featured image rendering */}
              {/* Content */}
              <div>
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-2xl font-semibold text-blue-600 hover:text-blue-600 cursor-pointer mb-2 leading-snug">
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
  const posts = getAllPosts(); // No need to destructure featuredImage
  return {
    props: {
      posts,
    },
  };
};
