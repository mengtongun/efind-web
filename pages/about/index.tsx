import Link from 'next/link';

export default function About() {
  return (
    <div>
      <main>
        <h1>About Page</h1>
        <p>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
