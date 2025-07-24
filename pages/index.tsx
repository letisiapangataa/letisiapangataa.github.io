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
}

interface HomeProps {
  posts: Post[]
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Letisia Pangataa - Blog</title>
        <meta name="description" content="Personal blog by Letisia Pangataa" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-gray-600">
            Thoughts, ideas, and insights by Letisia Pangataa
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-3">
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
              <Link href={`/posts/${post.slug}`}>
                <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts yet. Check back soon!
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
