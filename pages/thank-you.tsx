import React from 'react'
import Link from 'next/link';
import getPageProps from '../utils/getPageProps';
import SEO, { MetaProps } from '../src/Components/Global/SEO';

import imageBgOrangeLightGradient from '../public/Images/image_bg_orange_light_gradient_3.png';

type ThankYouProps = {
  meta: MetaProps;
};

export async function getStaticProps() {
  const data = getPageProps<ThankYouProps>();
  return {
    props: {
      ...data,
      meta: {
        title: 'Erisyon - Thank You',
        description: 'Erisyon - Thank You',
      },
    }
  };
};

const TyPage = ({ meta }: ThankYouProps) => (
  <section id="section-hero" className="bg-cover" style={{ backgroundImage: `url(${imageBgOrangeLightGradient.src})` }}>
    <SEO metaValues={meta} />
    <div className="container mx-auto pt-48 pb-16 text-center px-4 md:px-6 font-poppins min-w-full min-h-[calc(100vh-563px)] flex justify-center items-center">
      <div>
        <h1 className="mb-10 text-4xl tracking-wide">Thank You</h1>
        <hr className="mb-10 w-28 border-2 border-black mx-auto" />
        <h2 className="text-xl mb-2">We will review your message and we will contact you soon</h2>
        <h3 className="text-xl">{`We're so glad you're here!`}</h3>
        <div className="mt-8 font-pt-mono font-bold py-1.5 px-5 border rounded-full inline-block tracking-widest text-center border-b border-black">
          <Link href="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default TyPage;
