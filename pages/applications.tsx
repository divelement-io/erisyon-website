import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import getPageProps from '../utils/getPageProps';
import SEO, { MetaProps } from '../src/Components/Global/SEO';
import ColorfulGradientApplication from '../public/Images/application/ColorfulGradientApplication.png';
import imageMjffLogo from '../public/Images/application/image_mjff_logo.png';
import FurtherReading from '../src/Components/FurtherReading';
import ImageText from '../src/Components/ImageText';
import Seedling from '../public/Images/application/Seedling.png';
import PillBottle from '../public/Images/application/PillBottle.png';
import Enzyme from '../public/Images/application/Enzyme.png';
import RowThreeElementsVariant from '../src/Components/RowThreeElementsVariant';
import OrangeBall from '../public/Images/application/Orange_gradient_ball.png';
import PinkSphere from '../public/Images/application/PinkSphere.png';
import GrayGradient from '../public/Images/application/GreyGradient_Lighter.png';

type IElement = {
  src: string
  width: number
  height: number
  title: string
  subTitle: string
  description: string
  marginCardTop?: string
  lineWidth?: string
}

type ApplicationPageProps = {
  meta: MetaProps;
  hero: {
    headline: string;
    headlineTop: string;
    description: string;
  };
  cta: {
    href?: string
    text?: string
    light?: boolean
  }
  applicationNotes: {
    headline: string;
    listItems: Array<{
      title: string;
      description: string;
      cta: {
        text: string;
        href: string;
        downloadLink?: string;
      };
    }>;
  };
  section1: {
    headline: string
    pb?: string;
    left: {
      href: string;
      alt: string;
      width: number;
      height: number;
      marginRight?: string;
    };
    right: {
      description?: string;
      alignItem?: string;
    }
  }
  section3: {
    headline: string
    pb?: string;
    left: {
      href: string;
      alt: string;
      width: number;
      height: number;
      marginRight?: string;
    };
    right: {
      description?: string;
      alignItem?: string;
    }
  }
  section4: {
    headline: string
    pb?: string;
    left: {
      href: string;
      alt: string;
      width: number;
      height: number;
      marginRight?: string;
    };
    right: {
      description?: string;
      alignItem?: string;
    }
  }
  elements: IElement[]
};



export async function getStaticProps() {
  const data = getPageProps<ApplicationPageProps>(['pages', 'application.yaml']);
  return {
    props: data,
  };
}

const Applications = ({ meta, hero, cta, applicationNotes, section1, section3, section4, elements }: ApplicationPageProps) => {
  const lightClass = `${cta?.light ? 'text-white border-white' : 'text-black border-black'}`;
  const e = elements.map((it) => {
    if (it.src === 'Seedling.png') {
      return { ...it, src: Seedling.src }
    }
    if (it.src === 'PillBottle.png') {
      return { ...it, src: PillBottle.src }
    }
    return { ...it, src: Enzyme.src }
  })
  return (
    <>
      <SEO metaValues={meta} />
      <section className='pb-[134px] pt-[254px] bg-cover xl:max-h-[640px]' style={{ backgroundImage: `url(${ColorfulGradientApplication.src})` }}>
        <div className="container relative mx-auto md:whitespace-pre-wrap text-center px-4">
          <div className='absolute -top-[26%] lg:-top-[47%] left-[23.7%] z-0 rotate-[-12deg]'>
            <Image src={PinkSphere.src} alt="Pink Sphere" width={211.67} height={211.67} />
          </div>
          <h1 className='relative font-pt-mono text-3xl leading-[56px] font-bold tracking-widest z-10 sm:text-[2.5rem]'>
            {hero.headlineTop}
          </h1>
          <h2 className="relative z-10 font-poppins text-3xl leading-[54px] tracking-[0.02em] sm:text-[36px]">{hero.headline}</h2>
          <p className="font-poppins pt-[52px] text-[20px] leading-[30px] tracking-[0.02em]">{hero.description}</p>
        </div>
      </section>

      <section className="pt-[147px] pb-[167px] bg-black text-white ">
        <div className="mx-auto text-center px-4 flex flex-col gap-y-[100px] md:whitespace-pre-wrap xl:ml-[234px] xl:mr-[206px] xl:px-0">
          <ImageText {...section1} />
          <div className="py-[10px] px-[17px] w-full rounded-[20px] text-e-dark-grey bg-gradient-to-tr from-gray-100 to-gray-200 flex flex-col lg:flex-row lg:py-[50px] lg:px-[57px]">
            <div className='w-full h-[100px] box-border lg:border-r lg:border-black lg:w-[338px]'>
              <Image src={imageMjffLogo.src} alt="Michel J Fox Fundation" width={265} height={87} />
            </div>
            <p className='font-poppins flex items-center max-w-[515px] ml-[33px] text-start text-[16px] leading-[24px]'>
              Erisyon is a proud recipient of the Michael J. Fox Foundation for our work in developing molecular biomarkers that can help diagnose Parkinson’s decades earlier.
            </p>
          </div>
          <ImageText {...section3} />
          <ImageText {...section4} />

        </div>
      </section>

      <section className="bg-cover relative " style={{ backgroundImage: `url(${GrayGradient.src})` }}>
        <section id="section-application-notes" className="container mx-auto pt-[150px] pb-[105px]">
          <div className='absolute top-[-65px] right-[102px]'>
            <Image src={OrangeBall.src} alt="Orange Ball" width={116} height={116} />
          </div>
          <div className='pb-[100px]'>
            <h1 className="font-poppins text-center text-[36px] leading-[54px] tracking-[0.02em] px-4 pb-[100px] md:px-6">
              Additional Applications
            </h1>
            <div className='w-full xl:ml-[135px] px-4 lg:px-0 xl:max-w-[1156px]'>
              <RowThreeElementsVariant elementsArray={e} className='xl:gap-x-[53px]' />
            </div>
          </div>
          <div className='container mx-auto font-pt-mono lg:max-w-[64rem]'>
            <FurtherReading
              headline={applicationNotes?.headline} 
              listItems={applicationNotes?.listItems}
              variant="notesApp"
              liClassName='max-w-[964px]'
            />
            <div className="flex items-center justify-center my-12">
              <Link href="/newsandresearch">
                <button type='button' className={`font-pt-mono font-bold pt-[10px] pb-[7px] px-5 border rounded-full inline-block tracking-widest leading-[18px] text-center uppercase ${lightClass}`}>
                  {cta?.text}
                </button>
              </Link>
            </div>
            <div className="mt-[100px]">
              <img className="mx-auto w-[39px]" src={OrangeBall.src} alt="placeholder" />
            </div>
          </div>
        </section>
      </section>
    </>

  );
};

export default Applications;
