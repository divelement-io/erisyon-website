import React from 'react';
import Image from 'next/image';

import getPageProps from '../utils/getPageProps';
import getBlurData from '../utils/getBlurData';
import SEO, { MetaProps } from '../src/Components/Global/SEO';
import GridPeople from '../src/Components/GridPeople';

import imageBgOrangeLightGradient from '../public/Images/image_bg_orange_light_gradient_2.png';

type AboutProps = {
  meta: MetaProps;
  aboutHero: {
    headlineTop: string;
    headline: string;
    descriptionTop: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
  };
  team: {
    title: string;
    description: string;
    members: Array<{
      name: string;
      role: string;
      image?: string;
    }>;
  };
};

export async function getStaticProps() {
  const data = getPageProps<AboutProps>(['pages', 'about.yaml'])
  return {
    props: data,
  };
};

const About = ({ meta, aboutHero, team }: AboutProps) => (
  <>
    <SEO metaValues={meta} />
    <section id="section-hero" className="bg-cover max-h-[1031px]" style={{ backgroundImage: `url(${imageBgOrangeLightGradient.src})` }}>
      <div className="pt-[250px] pb-[36px] text-center px-4 md:px-6">
        <h1 className="font-poppins text-3xl sm:text-[2.5rem] mx-auto w-64 sm:w-auto leading-[60px] tracking-[0.02em] -ml-3">{aboutHero.headlineTop}</h1>
        <h2 className="font-pt-mono text-3xl sm:text-[2.5rem] font-bold tracking-widest leading-[56px]">{aboutHero.headline}</h2>
      </div>
      <div className="container mx-auto relative font-poppins px-4 md:px-6 lg:whitespace-pre-wrap xl:pl-16">
        <div className="relative w-full aspect-[1.06] lg:max-w-[50%] xl:max-w-[671px]">
          <Image src={aboutHero.image.src} alt={aboutHero.image.alt} fill placeholder="blur" blurDataURL={getBlurData(aboutHero.image.src)} />
        </div>
        <div className="lg:absolute lg:left-[28rem] lg:bottom-6 xl:left-[41.7rem] xl:bottom-20 pb-8 lg:pb-0">
          <strong className="block mb-5 font-semibold">
            {aboutHero.descriptionTop}
          </strong>
          <p className='mb-[5px] leading-6'>
            {aboutHero.description}
          </p>
        </div>
      </div>
    </section>
    <section id="section-our-team" className="bg-black text-white">
      <GridPeople className="py-16 md:pb-[150px] md:pt-[159px]" title={team.title} members={team.members} />
    </section>
  </>
);

export default About;
