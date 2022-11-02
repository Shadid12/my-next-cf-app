import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/about">
        <span>About</span>
      </Link>
    </div>
  )
}
