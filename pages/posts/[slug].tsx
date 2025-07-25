import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../lib/posts'
import Layout from '../../components/Layout'
import ShareButtons from '../../components/ShareButtons'
import { format } from 'date-fns'

interface PostProps {
  post: {
    slug: string
    title: string
    date: string
    content: string
    excerpt: string
    featuredImage?: string
  }
}

export default function Post({ post }: PostProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "author": {
      "@type": "Person",
      "name": "Letisia Pangata'a",
      "url": "https://www.linkedin.com/in/letisiapangataa/"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://letisiapangataa.github.io/posts/${post.slug}/`
    },
    "publisher": {
      "@type": "Person",
      "name": "Letisia Pangata'a"
    },
    ...(post.featuredImage && {
      "image": `https://letisiapangataa.github.io${post.featuredImage}`
    })
  }

  return (
    <Layout>
      <Head>
        <title>{post.title} - Letisia Pangata&apos;a</title>
        <meta name="description" content={post.excerpt || post.title} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.title} />
        <meta property="og:site_name" content="Letisia's Technology Portfolio" />
        {post.featuredImage && (
          <meta property="og:image" content={`https://letisiapangataa.github.io${post.featuredImage}`} />
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || post.title} />
        <meta name="twitter:creator" content="@letisiapangataa" />
        {post.featuredImage && (
          <meta name="twitter:image" content={`https://letisiapangataa.github.io${post.featuredImage}`} />
        )}
      </Head>

      {/* Full-Screen Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-96 mb-8 overflow-hidden bg-gray-100">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <article>
            <header className="mt-8 mb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {post.title} 🧪
              </h1>
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
            </header>

            <div 
              className="prose max-w-none text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Media Share Buttons */}
            <ShareButtons 
              title={post.title}
              url={`/posts/${post.slug}`}
              description={post.excerpt || `Check out this post: ${post.title}`}
            />
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

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}
