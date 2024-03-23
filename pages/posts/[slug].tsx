import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

import { NextPage } from 'next'

import { useMDXComponent } from 'next-contentlayer/hooks'

export async function getStaticPaths() {
  
  return <></>
}

export async function getStaticProps({ params }) {
  
  return <></>
}

const PostLayout: NextPage = ({ post }: any) => {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <div className="cl-post-body">
          <MDXContent />
        </div>
      </article>
    </>
  )
}

export default PostLayout
