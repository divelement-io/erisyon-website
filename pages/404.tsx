import React from 'react'
import Link from 'next/link';
import SEO, { MetaProps } from '../src/Components/Global/SEO';
import getPageProps from '../utils/getPageProps';

type Page404Props = {
  meta: MetaProps;
};

export async function getStaticProps() {
  const data = getPageProps<Page404Props>();
  return {
    props: {
      ...data,
      meta: {
        title: 'Erisyon',
        description: 'Erisyon',
      },
    },
  };
};

const Page404 = ({ meta }: Page404Props) => (
  <>
    <SEO metaValues={meta} />
    <section id="section-hero">
      <div className="container mx-auto pt-48 pb-16 text-center px-4 md:px-6 font-poppins min-w-full min-h-[calc(100vh-226px)] flex justify-center items-center">
        <div>
          <h1 className="mb-10 text-4xl tracking-wide">404 | This page could not be found</h1>
          <hr className="mb-10 w-28 border-2 border-black mx-auto" />
          <h2 className="text-xl mb-2">Come back again later</h2>
          <div className="mt-8 font-pt-mono font-bold py-1.5 px-5 border rounded-full inline-block tracking-widest text-center border-b border-black">
            <Link href="/">
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Page404;
