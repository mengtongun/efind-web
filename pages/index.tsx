import Link from 'next/link';

const IndexPage = () => {
  return (
    <div>
      <h1>IndexPage</h1>
      <Link href="/about">About Page</Link>
    </div>
  );
};

export default IndexPage;
