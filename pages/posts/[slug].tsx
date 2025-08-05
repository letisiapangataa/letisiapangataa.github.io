import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../lib/posts'
import Layout from '../../components/Layout'
import ShareButtons from '../../components/ShareButtons'
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

interface PostProps {
  post: {
    slug: string
    title: string
    date: string
    content: string
    excerpt: string
    difficulty?: 'Easy' | 'Intermediate' | 'Difficult'
  }
}

export default function Post({ post }: PostProps) {
  const baseUrl = 'https://letisiapangataa.github.io'
  const postUrl = `${baseUrl}/posts/${post.slug}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "author": {
      "@type": "Person",
      "name": "Letisia Pangata'a",
      "url": "https://www.linkedin.com/in/letisiapangataa/",
      "sameAs": [
        "https://www.linkedin.com/in/letisiapangataa/",
        "https://github.com/letisiapangataa",
        "https://letisiapangataa.github.io"
      ]
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "Letisia Pangata'a - Technology Portfolio",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.svg`
      }
    },
    "keywords": post.difficulty ? `${post.difficulty}, Technology, Cloud Computing, Cybersecurity` : "Technology, Cloud Computing, Cybersecurity",
    "articleSection": "Technology",
    "inLanguage": "en-US"
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} - Letisia Pangata&apos;a</title>
        <meta name="description" content={post.excerpt || post.title} />
        <meta name="keywords" content={`${post.difficulty || 'Technology'}, Cloud Computing, Cybersecurity, Azure, Power BI, Security Monitoring, Dashboard Development`} />
        <meta name="author" content="Letisia Pangata'a" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={postUrl} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.title} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:site_name" content="Letisia's Technology Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Letisia Pangata'a" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:section" content="Technology" />
        {post.difficulty && <meta property="article:tag" content={post.difficulty} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@letisiapangataa" />
        <meta name="twitter:creator" content="@letisiapangataa" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || post.title} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <article>
            <header className="mt-8 mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {post.title} 
              </h1>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-gray-500">
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
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(post.difficulty)}`}>
                      {post.difficulty}
                    </span>
                  )}
                </div>
            </header>

            <div 
              className="prose max-w-none text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Media Share Buttons */}

        </article>
          <Link href="/">
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer mb-8 mt-8 inline-block font-bold">
              ← Go Back
            </span>
          </Link>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const content = await markdownToHtml(post.content)

  // No need to remove featuredImage, as it should not exist anymore
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}
