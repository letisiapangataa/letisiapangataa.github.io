import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Letisia Pangataa</title>
        <meta name="description" content="About Letisia Pangataa" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Hello! I'm Letisia Pangataa, and welcome to my blog. This is where I share my thoughts, 
            ideas, and insights on various topics that interest me.
          </p>
          
          <p>
            This blog is built with Next.js and deployed on GitHub Pages. It supports markdown 
            for writing posts and has a clean, responsive design.
          </p>

          <p>
            Feel free to explore the posts and get in touch if you'd like to connect!
          </p>
        </div>
      </div>
    </Layout>
  )
}
