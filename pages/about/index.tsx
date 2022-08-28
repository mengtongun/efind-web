import Link from 'next/link';

export default function About() {
  return (
    <div className="pb-32">
      <main>
        <h1 className="text-center text-2xl font-bold py-4">About Us</h1>

        <section>
          <p className="m-12 p-8 text-xl font-mono border border-blue-700 rounded-md indent-8">
            <span className="font-bold">
              <a target="_blank" href="/">
                eFind
              </a>
            </span>{' '}
            is Web and mobile application that gather all the trusted Online Shop page holder in one place and make it
            easier for user who are struggling with finding what they really are looking for easily without having to
            deal with all the unwanted or false leaded ads and pages where they will see all the rating and real time
            feedback from the previous shoppers which could determined the products quality and services that help them
            making the right decision. Not just that, they are able to search and interaction with the actual active
            online shop owner as they will be linked and redirect to the online shop owner for further assist on what
            you need easily where we will kept all the record of all the page that they have interacted with since it
            will easier for them to come back and repurchase again. What’s more special about our platform is that we
            made it easier for not just users but also the shop owners who only rely on social media platforms as a
            commercial reach, so within this platform they are able to gain more consumers coming their way within the
            right need for the right product they are advertising for.
            <Link href="/">
              <a className="block pt-4 font-bold">&larr; Go Back</a>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
