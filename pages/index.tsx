import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../lib/posts'
import Layout from '../components/Layout'
import { format } from 'date-fns'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  featuredImage?: string
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Letisia&apos;s Technology Portfolio - Empowering Innovation with Cloud, AI & Cybersecurity</title>
        <meta name="description" content="Empowering Innovation with Cloud, AI & Cybersecurity" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">

        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              {/* Large Featured Image Above Content */}
              {post.featuredImage && (
                <div className="w-full mb-6">
                  <Link href={`/posts/${post.slug}`}>
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-lg cursor-pointer hover:opacity-95 transition-opacity shadow-lg"
                    />
                  </Link>
                </div>
              )}
              
              {/* Content */}
              <div>
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2 leading-snug">
                  {post.title}
                  </h3>
                </Link>
                <p className="text-gray-500 text-m mb-3 leading-relaxed">
                  {format(new Date(post.date), 'MMMM dd, yyyy')} 👩🏽‍🔬{' '}
                  <a
                  href="https://www.linkedin.com/in/letisiapangataa/"
                  target="_blank"
                  rel="noopener noreferrer"

                  >
                  Letisia Pangata&apos;a
                  </a>
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer text-m leading-tight">
                  🧪 More Information
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
