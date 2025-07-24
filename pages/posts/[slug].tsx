import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, markdownToHtml } from '../../lib/posts'
import Layout from '../../components/Layout'
import { format } from 'date-fns'

interface PostProps {
  post: {
    slug: string
    title: string
    date: string
    content: string
  }
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} - Letisia Pangataa</title>
        <meta name="description" content={post.title} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/">
          <span className="text-blue-600 hover:text-blue-800 cursor-pointer mb-8 inline-block">
            ← Back to posts
          </span>
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500">
              {format(new Date(post.date), 'MMMM dd, yyyy')}
            </p>
          </header>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
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
