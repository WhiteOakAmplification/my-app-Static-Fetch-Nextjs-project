import Link from 'next/link'
import posts from './blog/posts.json'

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>

      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href='/blog/[id]' as={'/blog/' + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}