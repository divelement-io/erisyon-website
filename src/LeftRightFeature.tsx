import React from 'react'
import Image from 'next/image'

interface IFeatureLR {
  left: {
    href: string;
    alt: string;
    width: number;
    height: number;
    marginRight?: string;
  };
  right: {
    title?: string;
    description?: string;
  }
}

type Props = {
  list?: boolean;
  title?: string;
  description?: string;
  items: IFeatureLR[];
  buttonCta?: {
    text: string;
    href: string;
  };
}

type SectionLR = {
  section: Props
}

const LeftRightFeature = ({section}: SectionLR) => {
  const featureItems = section.items || [];
  const { buttonCta, list, title, description } = section;
  return (
    <section className='pt-[100px] pb-[86px] bg-black text-white'>
      {
        featureItems.map((e, idx) => {
          const counter = `${idx + 1}.0`;
          return (
            <>
              {
                title && (
                  <h1 className='text-center pt-[50px] pb-10 text-4xl tracking-[0.02em] font-poppins'>{title}</h1>
                )
              }
              {
                description && (
                  <p className='text-center uppercase pb-[87px] text-base tracking-[0.1em] font-bold font-pt-mono'>{description}</p>
                )
              }
              <div key={`${e.right.title}` || `${e.right.description}`} className='grid grid-cols-2 gap-x-[64px] pb-[41px]'>
                <div className={`flex justify-end items-center ${e.left.marginRight && e.left.marginRight}`}>
                  <Image src={e.left.href} alt={e.left.alt} width={e.left.width} height={e.left.height}/>
                </div>

                {
                  !list ? (
                    <div className='flex flex-col justify-center max-w-[450px] tracking-[0.02em] font-poppins pr-4 lg:pr-0'>
                      <h2 className='uppercase pb-[10px] text-sm font-bold'>
                        {e.right.title}
                      </h2>
                      <p className='text-base'>
                        {e.right.description}
                      </p>
                    </div>
                  ) : (
                    <div className='flex flex-row font-pt-mono text-base max-w-[348px] my-auto tracking-[0.05em]'>
                      <p className='pr-5'>{counter}</p>
                      <p>
                        {e.right.description}
                      </p>
                    </div>
                  )
                }
              </div>
            </>
        )})
      }
      {buttonCta && (
        <div className="mt-12 max-w-fit mx-auto">
          <a className="font-pt-mono font-bold py-3 px-5 border border-white rounded-full inline-block tracking-widest text-center" href={buttonCta?.href}>
            {buttonCta?.text}
          </a>
        </div>
      )}
    </section>
  )
}

export default LeftRightFeature
