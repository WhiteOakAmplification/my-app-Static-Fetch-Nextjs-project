import { useRouter } from 'next/router'
import posts from './posts.json'

export default function BlogPost() {
  const router = useRouter()

  const post = posts[router.query.id]
  if (!post) return <p></p>

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'test' } },
      { params: { id: 'second' } }
    ],
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const post = posts[params.id]
  return {
    props: {
      post,
    },
  }
}