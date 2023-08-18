import React from 'react'
import getPageProps from '../utils/getPageProps';

import FurtherReading, { FurtherReadingProps } from '../src/Components/FurtherReading';
import SEO, { MetaProps } from '../src/Components/Global/SEO';

import imageBgOrangeLightGradient from '../public/Images/image_bg_orange_light_gradient_4.png';
import imageBgGreyGradient from '../public/Images/image_bg_grey_gradient.png';
import iconWhiteArrowRight from '../public/Icons/icon_white_arrow_right.svg';
import iconGreyCircle from '../public/Icons/icon_grey_circle_3xl.svg';

type NewsroomProps = {
  meta: MetaProps;
  newsroomHero: {
    headline: string;
    description: string;
    contact: string;
  };
  posts: {
    headline: string;
    cards: Array<{
      title: string;
      description: string;
      cta: {
        text: string;
        href: string;
      };
    }>;
  };
  journalArticles: FurtherReadingProps;
  applicationNotes: FurtherReadingProps;
};

export async function getStaticProps() {
  const data = getPageProps<NewsroomProps>(['pages', 'newsandresearch.yaml']);
  return {
    props: data,
  };
};

const Newsroom = ({ meta, newsroomHero, posts, journalArticles, applicationNotes }: NewsroomProps) => (
  <>
    <SEO metaValues={meta} />
    <section id="section-hero" className="bg-cover" style={{ backgroundImage: `url(${imageBgOrangeLightGradient.src})` }}>
      <div className="container mx-auto pt-[200px] pb-[70px] text-center px-4 md:px-6 font-poppins">
        <h1 className="mb-[38px] text-4xl leading-[54px] tracking-[0.02em]">{newsroomHero.headline}</h1>
        <hr className="mb-10 w-[100px] box-border border-2 border-black mx-auto" />
        <h2 className="mb-5 text-xl tracking-wide">{newsroomHero.description}</h2>
        <p>{newsroomHero.contact}</p>  
      </div>
    </section>
    <section id="section-news" className="bg-black text-white">
      <div className="container mx-auto xl:max-w-[75rem] py-28 md:pt-[151px] md:pb-[239px] px-4 md:px-6 xl:pl-[19px] relative">
        <div
          className="absolute w-[156px] aspect-square bg-contain -top-[2.2rem] left-[33%]"
          style={{ backgroundImage: `url(${iconGreyCircle.src})` }}
        />
        <h3 className="text-center text-4xl pb-14 font-poppins leading-[54px] tracking-[0.02em] pl-[10.4px]">{posts.headline}</h3>
        <ul className="flex gap-[54px] flex-col lg:flex-row max-lg:items-center">
          {posts.cards.map((oneCard, idx) => {
            const key = `one-news-card-${idx}`;
            return (
              <li key={key} className="bg-white w-full lg:w-1/3 p-[30px] pb-2 font-poppins tracking-[0.02em] rounded-[20px]">
                <h5 className="text-sm text-e-vivid-orange pb-2 mb-[10px] box-border border-b-2 border-black font-bold">
                  {oneCard.title}
                </h5>
                <p className="text-xl leading-[30px] text-black mb-[10px]">{oneCard.description}</p>
                <a href={oneCard.cta?.href} className="font-pt-mono flex gap-2 items-center p-2 pl-0 w-fit" target="_blank" rel="noopener noreferrer">
                  <span className="font-bold tracking-widest text-black">{oneCard.cta?.text}</span>
                  <img src={iconWhiteArrowRight.src} alt="Icon Arrow Right" />
                </a>
              </li>
            );
          })}
        </ul>
        <div
          className="absolute w-[140px] aspect-square bg-contain -bottom-[34.4px] right-[7.1%] rotate-[-62.82deg]"
          style={{ backgroundImage: `url(${iconGreyCircle.src})` }}
        />
      </div>
    </section>
    <section id="section-cards" className="bg-cover font-poppins py-20 md:pt-[150px] md:pb-32" style={{ backgroundImage: `url(${imageBgGreyGradient.src})` }}>
      <div id="section-journal-articles" className="container mx-auto pb-20 md:pb-[100px]">
        <h3 className="text-center text-4xl leading-[54px] mb-12 lg:whitespace-pre-wrap px-4 tracking-[0.02em] xl:px-0">
          {journalArticles.headline}
        </h3>
        <FurtherReading  variant="articlesNR" listItems={journalArticles.listItems} className='lg:!px-0 lg:!max-w-[1080px]'/>
      </div>
      <div id="section-application-notes" className="container mx-auto">
        <h3 className="text-center text-4xl leading-[54px] mb-12 lg:whitespace-pre-wrap px-4 md:px-6 tracking-[0.02em]">
          {applicationNotes.headline}
        </h3>
        <FurtherReading variant="notesNR" listItems={applicationNotes.listItems} className='lg:!px-0 lg:!max-w-[1080px]' liClassName='min-h-[135px]'/>
      </div>
    </section>
  </>
);

export default Newsroom;
