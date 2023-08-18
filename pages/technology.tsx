import React from 'react';
import Image from 'next/image';
import getPageProps from '../utils/getPageProps';
import getBlurData from '../utils/getBlurData';

import HeadlineImage, { HeadlineImageProps } from '../src/Components/HeadlineImage';
import FurtherReading, { FurtherReadingProps } from '../src/Components/FurtherReading';
import RowThreeElements, { IOneRowElement } from '../src/Components/RowThreeElements';
import CardComparation, { IOneCardElement } from '../src/Components/CardComparation';
import LeftRightFeature, { LeftRightFeatureProps } from '../src/Components/LeftRightFeature';
import SEO, { MetaProps } from '../src/Components/Global/SEO';
import Button from '../src/Components/Global/Button';

import imageBgOrangeLightGradient from '../public/Images/image_bg_orange_light_gradient_2.png';
import iconOrangeCircle from '../public/Icons/icon_orange_circle.png';

type CtaProps = {
  text: string;
  href: string;
  light?: boolean;
  downloadLink?: string;
};

type CommonTypeProps = {
  headline?: string;
  title?: string;
  description?: string;
  source?: string;
  bgImage?: string;
  image?: {
    src: string;
    alt: string;
  };
};

type TechnologyProps = {
  meta: MetaProps;
  techHero: HeadlineImageProps;
  section2: {
    headlineTop: string;
    headline: string;
    description: string;
    bottomCta: CtaProps;
    elementsArray: IOneRowElement[];
  };
  section3: {
    headline: string;
    elementsArray: IOneRowElement[];
  };
  section4: {
    topGroup: CommonTypeProps;
    middleGroup: {
      headline: string;
      elementsArray: IOneCardElement[];
    };
    bottomGroup: {
      left: CommonTypeProps;
      right: CommonTypeProps;
    };
  };
  section5: {
    headline: string;
    elementsArray: IOneCardElement[];
    featureList: LeftRightFeatureProps;
  };
  section6: CommonTypeProps;
  section7: {
    headline: string;
    description: string;
    featureList: LeftRightFeatureProps;
    tableList: FurtherReadingProps;
  };
  section8: HeadlineImageProps;
};

export async function getStaticProps() {
  const data = getPageProps<TechnologyProps>(['pages', 'technology.yaml']);
  return {
    props: data,
  };
};

const extraClasses = {
  section2: [
    '[&>*:last-child]:h-20 [&>*:first-child]:px-12', 
    '[&>*:last-child]:h-20 [&>*:first-child]:px-11', 
    '[&>*:last-child]:h-20 md:w-96 lg:w-full md:mx-auto lg:mx-0',
  ],
  section3: [
    '', 
    'mr-[18px]', 
    '',
  ],
  section4: [
    'xl:w-[130%] xl:pl-[52px]',
    'xl:w-[94%] xl:-mt-1 xl:[&_span]:text-[11.6px] xl:[&_li]:text-[12.6px] xl:[&_li_svg]:w-[11px] xl:[&_li_svg]:h-[11px] xl:[&_li]:mt-4 xl:rounded-[18px]',
    'xl:!pl-[142px]',
  ],
  section5a: [
    'md:pb-0 xl:py-[60px]',
    'md:pb-0 xl:py-[60px] xl:pl-[7px]',
    'xl:py-[60px] xl:pl-[0px]',
    'xl:w-[93%] xl:[&_span]:text-[11.6px] xl:[&_li]:text-[12.6px] xl:[&_li_svg]:w-[11px] xl:[&_li_svg]:h-[11px] xl:[&_li]:mt-4 xl:pt-5 xl:pb-6 xl:mt-2 xl:rounded-[18px]',
  ],
  section5b: [
    'lg:mr-[46px] lg:pb-[62px]',
    'lg:mr-[46px] lg:pb-[94px]',
    'lg:mr-[46px] lg:pb-24',
    'lg:mr-[46px]',
  ],
  section7: [
    'lg:mr-12 lg:[&>*:first-child]:mr-2 lg:pb-[100px]',
    'lg:mr-11 lg:[&>*:first-child]:-mr-4 lg:pb-[103px]',
    'lg:mr-12 lg:[&>*:first-child]:-mr-9 lg:[&>*:first-child]:mt-[26px] lg:pb-[180px]',
    'lg:mr-11 lg:[&>*:first-child]:-mr-4 lg:pb-[120px]',
    'lg:mr-12 lg:[&>*:first-child]:mr-7 lg:[&>*:first-child]:-mt-8 lg:pb-[144px]',
    'lg:mr-12 lg:[&>*:first-child]:-mr-8 lg:[&>*:first-child]:-mt-10 lg:pb-[103px]',
    'lg:mr-12 lg:[&>*:first-child]:-mr-4 lg:[&>*:first-child]:-mt-4 lg:pb-[53px]',
  ],
};

const Technology = ({
  meta, techHero, section2, section3, section4, section5, section6, section7, section8
}: TechnologyProps) => {

  const elementsArraySection2 = section2
    .elementsArray
    .map((oneElement, idx) => {return { ...oneElement, className: extraClasses?.section2?.[idx] || '' }});

  const elementsArraySection3 = section3
    .elementsArray
    .map((oneElement, idx) => {return { ...oneElement, className: extraClasses?.section3?.[idx] || '' }});

  const elementsArraySection4 = section4
    .middleGroup
    .elementsArray
    .map((oneElement, idx) => {return { ...oneElement, className: extraClasses?.section4?.[idx] || '' }});

  const featureListSection5 = {
    elementsArray: section5
      .elementsArray
      .map((oneElement, idx) => {return { ...oneElement, className: extraClasses?.section5a?.[idx] || '' }}),
    items: section5
      .featureList
      .items
      .map((oneItem, idx) => {return { ...oneItem, className: extraClasses?.section5b?.[idx] || '' }}),
  };

  const featureListSection7 = {
    ...section7.featureList,
    items: section7
      .featureList
      .items
      .map((oneItem, idx) => {return { ...oneItem, className: extraClasses?.section7?.[idx] || '' }})
  };

  return (
    <>
      <SEO metaValues={meta} />
      <section id="section-hero">
        <HeadlineImage
          className="pt-[259px]"
          variant={techHero.variant}
          headlineTop={techHero.headlineTop}
          headline={techHero.headline}
          description={techHero.description}
          bottomImage={techHero.bottomImage}
          videoUrl={techHero.videoUrl}
        />
      </section>
      <section id="section-ask-more" className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 py-12 lg:pt-[84px] lg:pb-[148px] max-w-[74rem] text-center md:whitespace-pre-wrap">
          <h2 className="font-poppins text-3xl sm:text-4xl tracking-[0.02em] mb-5">{section2.headlineTop}</h2>
          <h3 className="font-pt-mono font-bold tracking-widest text-3xl sm:text-[2.5rem] mb-[50px]">{section2.headline}</h3>
          <p className="font-poppins text-xl mb-12 lg:mb-44 tracking-[0.02em]">{section2.description}</p>
          <RowThreeElements
            className="[&_span:first-child]:mt-[31px] tracking-[0.02em] xl:gap-x-[126px]"
            elementsArray={elementsArraySection2}
          />
          <Button className="mt-12 lg:mt-[68px] [&>*]:!py-1.5" href={section2.bottomCta.href} isWhite >
            {section2.bottomCta.text}
          </Button>
        </div>
      </section>
      <section id="section-transform" className="bg-cover" style={{ backgroundImage: `url(${imageBgOrangeLightGradient.src})` }}>
        <div className="container mx-auto px-4 md:px-6 py-12 lg:pt-[155px] text-center lg:max-w-[1070px]">
          <h2 className="font-poppins text-3xl sm:text-4xl tracking-[0.02em] mb-20">{section3.headline}</h2>
          <RowThreeElements
            className="[&_span:first-child]:mt-[18px] tracking-[0.02em]"
            elementsArray={elementsArraySection3}
          />
        </div>
      </section>
      <section id="section-fluorosequencings">
        <div className="bg-black text-white">
          <div className="container mx-auto relative lg:pt-[150px] lg:pb-[186px] py-16 px-4 font-poppins">
            <div className="relative mx-auto w-full lg:ml-12 xl:ml-[134px] max-w-[630px] aspect-[1.04]">
              <Image
                blurDataURL={getBlurData(section4?.topGroup?.image?.src)}
                src={section4?.topGroup?.image?.src || ''}
                alt={section4?.topGroup?.image?.alt || ''}
                placeholder="blur"
                fill
              />
            </div>
            <div className="lg:absolute lg:text-left lg:mt-0 lg:w-[22rem] lg:top-[35rem] lg:left-[38rem] xl:w-[28rem] xl:left-[730px] mx-auto text-center mt-16">
              <h2 className="text-2xl sm:text-4xl sm:leading-[54px] mb-10 tracking-[0.02em]">{section4.topGroup.headline}</h2>
              <p>{section4.topGroup.description}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute -z-10 bg-black h-64 lg:h-[284px] w-full" />
          <div className="container mx-auto pt-4 pb-11 lg:pb-[78px]">
            <h3 className="font-poppins text-xl lg:mb-[77px] text-white text-center px-4 md:px-6 tracking-[0.02em] xl:mr-5">{section4.middleGroup.headline}</h3>
            <CardComparation className="xl:pr-32" highlightedElement={2} elementsArray={elementsArraySection4} />
          </div>
        </div>
        <div>
          <div className="container mx-auto md:flex gap-12 lg:justify-between pb-[38px] font-poppins px-4 md:px-6">
            <div className="w-64 sm:w-96 mb-8 md:mb-0 md:w-[22rem] mx-auto xl:ml-[164px]">
              <strong className="tracking-[0.02em]">{section4.bottomGroup.left.title}</strong>
              <h5 className="pb-4 mb-[11px] border-b-2 border-black">{section4.bottomGroup.left.description}</h5>
              <p className="font-pt-mono font-bold text-[0.625rem] leading-6 tracking-[0.02em]">{section4.bottomGroup.left.source}</p>
            </div>
            <div className="w-64 sm:w-96 md:w-1/2 lg:w-[390px] relative mx-auto xl:mr-[163px]">
              <img className="absolute -left-11 w-6 h-6" src={iconOrangeCircle.src} alt="Icon Orange Circle" />
              <strong className="text-e-vivid-orange tracking-[0.02em]">{section4.bottomGroup.right.title}</strong>
              <h5 className="lg:whitespace-pre-wrap">{section4.bottomGroup.right.description}</h5>
            </div>
          </div>
        </div>
      </section>
      <section id="section-affinity">
        <div className="bg-black">
          <div className="container mx-auto py-20 lg:pb-[183px]">
            <h3 className="font-poppins text-xl lg:mb-10 text-white text-center px-4 md:px-6 tracking-[0.02em] mr-8">{section5.headline}</h3>
            <CardComparation
              className='xl:pl-[119px] xl:pr-[143px] relative before:absolute before:z-0 before:bg-stone-100 before:h-3/4 before:lg:h-[304px] xl:before:h-[272px] before:w-[calc(100%-4rem)] sm:before:w-[calc(100%-12rem)] md:before:w-3/4'
              highlightedElement={4}
              elementsArray={featureListSection5.elementsArray}
            />
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto">
            <LeftRightFeature className="lg:whitespace-pre-wrap" section={featureListSection5} />
          </div>
        </div>
      </section>
      <section id="section-key-concept" className="bg-cover" style={{ backgroundImage: `url(${section6.bgImage})` }}>
        <div className="container mx-auto px-4 py-16 items-end md:px-6 md:flex lg:pb-32 xl:pl-[232px] xl:pt-[65px]">
          <div className="font-poppins tracking-[0.02em] border-b-2 border-black pb-6 md:pb-0 md:w-1/2 md:border-b-0 md:border-r-2 md:whitespace-pre-wrap xl:w-[442px] xl:mb-4">
            <h3 className="mb-11 text-3xl lg:text-4xl">{section6.headline}</h3>
            <p className="lg:text-xl lg:leading-[30px]">{section6.description}</p>
          </div>
          <img className="md:w-1/2 md:mb-4 md:ml-6 lg:mb-2 lg:ml-12 xl:mb-0 xl:w-[626px] xl:ml-6" src={section6.image?.src || ''} alt={section6.image?.alt || ''} />
        </div>
      </section>
      <section id="section-how-it-works" className="bg-black text-white py-20 lg:pt-[159px] lg:pb-28">
        <LeftRightFeature className="px-4 md:px-6 xl:px-0 pb-16 lg:!pb-[77px]" section={featureListSection7}/>
        <FurtherReading
          variant="technology"
          headline={section7.tableList.headline}
          bottomCta={section7.tableList.bottomCta}
          listItems={section7.tableList.listItems}
        />
      </section>
      <section id="section-bottom">
        <HeadlineImage
          headlineTop={section8.headlineTop}
          headline={section8.headline}
          description={section8.description}
          bgImage={section8.bgImage}
          bottomImage={section8.bottomImage}
          cta={section8.cta}
        />
      </section>
    </>
  );
};

export default Technology;
