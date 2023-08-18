import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getPageProps from '../utils/getPageProps';
import iconOrangeCircle from '../public/Images/Home/Orange_gradient_ball@2x.png';
import CTA from '../src/Components/CTA';
import FurtherReading from '../src/Components/FurtherReading';
import RowThreeElements from '../src/Components/RowThreeElements';
import SEO from '../src/Components/Global/SEO';

type Props = {
  [key:string]: any
}

export async function getStaticProps() {
  const data = getPageProps<Props>(['pages', 'home.yaml'])
  return {
    props: data,
  };
}

export default function Home({hero, subhero, leadinScince, gifSection, experiments, tec, meta}: Props) {
  const { bgImage, content, leftImage} = hero;
  const { topImage, title, bottomImage } = subhero;
  return (
    <>
      <SEO metaValues={meta} />
      <section className='bg-cover -z-10 mx-auto overflow-hidden' style={{ backgroundImage: `url(${bgImage.href})` }}>
        <div className='pt-[176px] pb-[138px] px-[80px] flex flex-col items-center relative max-w-[1440px] mx-auto'>
          <div className='absolute w-[2195px] h-[2195px] top-[-479px] left-[-1077px] hidden xl:block'>
            <Image src={leftImage.href} fill alt={leftImage.alt}/>
          </div>
          <div className='relative ml-[24px] w-[302px] h-[101px] md:w-[602px] md:h-[201px] lg:w-[802px] lg:h-[401px]'>
            <div className='w-full h-full absolute'>
              <img src={content.animation.href} style={{objectFit: "cover"}} alt={content.animation.alt}/>
            </div>
          </div>
          <div className='absolute  w-[50px] top-[280px] md:top-[43%] lg:top-[49.5%]'>
            <Image src={iconOrangeCircle} alt='placeholder'/>
          </div>
          <div className='flex flex-col items-center pt-[88px] text-center'>
            <h2 className='font-pt-mono ml-[8px] font-bold tracking-[0.1em] leading-[56px] text-[40px]'>{content.head.bold}</h2>
            <h2 className='font-poppins font-normal leading-[60px] text-[40px] tracking-[0.02em] ml-[45px]'>{content.head.normal}</h2>
          </div>
          <p className='font-poppins py-[40px] text-xl text-center leading-[30px] tracking-[0.02em] ml-[32px]'>{content.subhead}</p>
          <div className="max-w-fit max-h-[35px] ml-[34px] z-10">
            <Link className="font-pt-mono font-bold text-base leading-[18px] h-full px-5 box-border border border-black rounded-full tracking-widest text-center flex items-center py-2" href={content.buttonCta?.href}>
              {content.buttonCta?.text}
            </Link>
          </div>
        </div>
      </section>
      <section id='fluorosequencing' className='flex flex-col justify-between items-center bg-black'>
        <div className='relative w-[86px] h-[196px]'>
          <div className='w-full h-full absolute'>
            <Image src={topImage.href} alt={topImage.alt} style={{objectFit: "cover"}} fill/>
          </div>
        </div>
        <div className='flex flex-col text-center py-[57px] text-white max-w-[750px] px-6 md:px-0'>
          <h2 className='font-pt-mono font-bold text-[25px] tracking-widest leading-[56px] md:text-[40px]'>{title.bold}</h2>
          <h2 className='font-poppins text-[21px] tracking-[0.02em] leading-[54px] md:text-[36px]'>{title.normal}</h2>
        </div>
        <div className='relative w-[224.5px] h-[300px] mb-[150px]'>
          <div className='w-full h-full absolute'>
            <Image src={bottomImage.href} alt={bottomImage.alt} style={{objectFit: "cover"}} fill/>
          </div>
        </div>
      </section>
      <section className='bg-cover z-0 mx-auto flex flex-col items-center relative' style={{ backgroundImage: `url(${gifSection.bgImage.href})`}}>
        <div className='bg-cover w-screen h-[700px] overflow-x-hidden absolute top-[179px]' style={{ backgroundImage: `url(${gifSection.sprinkles.href})`}} />
        <div className='relative w-[142px] h-[142px] mt-[101px]'>
          <div className='w-full h-full absolute left-[-125%] md:left-[-180%]'>
            <Image src={gifSection.topImage.href} alt={gifSection.topImage.alt}  style={{objectFit: "cover"}} fill/>
          </div>
        </div>
        <div className='pt-[17px] px-5'>
          <h2 className='font-poppins text-[36px] tracking-[0.02em] leading-[54px] text-center'>{gifSection.title}</h2>
        </div>
        <div className='relative top-[-21px] mb-[110px] w-[330px] h-[100px] md:w-[756px] md:h-[227px] '>
          <div className='w-full h-full absolute'>
            <img src={gifSection.animation.href} alt={gifSection.animation.alt}  style={{objectFit: "cover"}}/>
          </div>
        </div>
      </section>
      <section className='flex flex-col py-[150px] bg-black justify-center items-center'>
        <div className='font-poppins max-w-[469px] text-white text-center'>
          <h2 className='text-[36px] tracking-[0.02em] leading-[54px] pb-[40px]'>{experiments.head}</h2>
          <p className='text-base leading-[24px] pb-[75px]'>{experiments.subhead}</p>
        </div>
        <div className='text-white xl:min-w-[1000px] xl:max-h-[321px]'>
          <RowThreeElements elementsArray={experiments.elementsArray} className='xl:gap-x-[50px]'/>
        </div>
      </section>
      <section className='mx-auto bg-black text-white'>
        <div className='pt-[50px] pb-[150px] px-[80px] flex flex-col items-center relative max-w-[1400px] mx-auto'>
          <div className='flex justify-left'>
            <Image src={tec?.img.href} alt={tec?.img.alt} width={226} height={210} />
          </div>
          <div className='flex flex-col items-center pt-[40px] text-center text-[36px] leading-[56px] lg:whitespace-pre-wrap'>
            <h2 className='font-poppins tracking-[0.02em]'>{tec?.head.text}</h2>
          </div>
          <p className='font-poppins py-[40px] text-md text-center max-w-[600px] lg:whitespace-pre-wrap'>{tec?.body.text}</p>
          <div className="max-w-fit max-h-[35px] mx-auto z-10">
            <Link className="font-pt-mono font-bold text-base leading-[18px] h-full px-5 box-border border border-white rounded-full tracking-widest text-center flex items-center py-2 uppercase" href={tec?.buttonCta?.href}>
              {tec?.buttonCta?.text}
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-cover mx-auto overflow-hidden' style={{ backgroundImage: `url(${leadinScince?.bgImage.href})` }}>
        <div className='pt-[150px] pb-[123px] px-[80px] flex flex-col items-center relative max-w-[1440px] mx-auto'>
          <div className='flex flex-col items-center text-center text-[36px] leading-[54px]'>
            <h2 className='font-poppins tracking-[0.02em]'>{leadinScince?.content.head.text}</h2>
          </div>
          <p className='font-poppins py-[40px] text-md text-center max-w-[600px]'>{leadinScince?.content.body.text}</p>
          <div className="max-w-fit max-h-[35px] mx-auto z-10">
            <Link className="font-pt-mono font-bold text-base leading-[18px] h-full px-5 box-border border border-black rounded-full tracking-widest text-center flex items-center py-2 uppercase" href={leadinScince?.content.buttonCta?.href}>
              {leadinScince?.content.buttonCta?.text}
            </Link>
          </div>
        </div>
        <div className='pb-[167px] grid grid-cols-2 relative max-w-[600px] mx-auto'>
          <div className="absolute top-[37px] -left-[69px]">
            <Image src={leadinScince?.natureBiotechnology.content.upperImage.href} alt={leadinScince.natureBiotechnology.content.upperImage.alt} width={129} height={129} />
          </div>
          <div className='flex justify-end pr-[72.67px]'>
            <Image src={leadinScince?.natureBiotechnology.content.img.href} width={188.33} height={250} alt='placeholder'/>
          </div>
          <div className='max-w-[267px]'>
            <div className='pb-[20px] box-border border-b border-b-black'>
              <Image src={leadinScince?.natureBiotechnology.content.logoImg.href} width={227} height={25} alt='placeholder'/>
            </div>
            <div className='py-[20px] box-border border-b border-b-black'>
              <p className='font-poppins font-medium text-xl leading-[30px] tracking-[0.02em] whitespace-pre-wrap'>
                {leadinScince?.natureBiotechnology.content.body.text}
              </p>
            </div>
            <div className='py-[12px]'>
              <CTA
                link={leadinScince?.natureBiotechnology.content.buttonCta.href}
                text={leadinScince?.natureBiotechnology.content.buttonCta.text}
              />
            </div>
          </div>
        </div>
        <div className=" text-black pb-28 relative z-10">
          <FurtherReading
            headline="FURTHER READING"
            bottomCta={{
              text: "SEE ADDITIONAL LITERATURE",
              href: "/newsandresearch",
              light: false,
            }}
            listItems={[
              {
                title: "ACS Chemical Biology",
                description: `"Photoredox-Catalyzed Decarboxylative C-Terminal Differentiation for Bulk- and Single-Molecule Proteomics"`,
                cta: {
                  text: "Read Paper",
                  href: "https://pubs.acs.org/doi/10.1021/acschembio.1c00631"
                }
              },
              {
                title: "ACS Chemical Biology",
                description: `"Solid-Phase Peptide Capture and Release for Bulk and Single-Molecule Proteomics"`,
                cta: {
                  text: "Read Paper",
                  href: "https://pubs.acs.org/doi/10.1021/acschembio.0c00040"
                }
              },
              {
                title: "PLOS Computational Biology",
                description: `"A Theoretical Justification for Single-Molecule Peptide Sequencing"`,
                cta: {
                  text: "Read Abstract",
                  href: "https://pubmed.ncbi.nlm.nih.gov/25714988/"
                }
              },
              {
                title: "Nature Biotechnology",
                description: `"Highly Parallel Single-Molecule Identification of Proteins in Zeptomole-Scale Mixtures"`,
                cta: {
                  text: "Read Abstract",
                  href: "https://www.nature.com/articles/nbt.4278"
                }
              },
            ]}
            headlineClass="mb-[10px]"
          />
        </div>
        <div className='relative h-[331px] max-w-[1024px] mx-auto'>
          <div className='absolute w-[860px] h-[677px] top-[-77%] right-[-60%] sm:top-[-90%] md:right-[-34%] lg:right-[-30%] xl:right-[-35%]'>
            <Image src={leadinScince.lsBottomImage.href} alt={leadinScince.lsBottomImage.alt} fill style={{objectFit: "cover"}}/>
          </div>
        </div>
      </section>
    </>
  )
}
