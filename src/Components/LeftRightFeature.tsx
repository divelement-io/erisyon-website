import React from 'react'
import Image from 'next/image'
import Button from './Global/Button';

export interface IOneFeatureLRElement {
  className?: string;
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

export type LeftRightFeatureProps = {
  list?: boolean;
  title?: string;
  description?: string;
  items: IOneFeatureLRElement[];
  buttonCta?: {
    text: string;
    href: string;
  };
}

type SectionLR = {
  section: LeftRightFeatureProps
  className?: string
}

const LeftRightFeature = ({section, className = ''}: SectionLR) => {
  const featureItems = section.items || [];
  const { buttonCta, list, title, description } = section;

  return (
    <div className={`sm:pb-8 lg:pb-[86px] bg-black text-white ${className}`}>
      {
        title && (
          <h1 className='text-center pb-11 text-4xl tracking-[0.02em] font-poppins'>{title}</h1>
        )
      }
      {
        description && (
          <p className='text-center uppercase pb-[87px] text-base tracking-[0.1em] font-bold font-pt-mono'>{description}</p>
        )
      }
      <ul>
        {
          featureItems.map((e, idx) => {
            const counter = `${idx + 1}.0`;
            return (
              <li key={`${e.right.title}-${idx}` || `${e.right.description}-${idx}`}>
                <div className={`grid sm:grid-cols-2 gap-x-[64px] pb-10 ${e?.className || ''}`}>
                  <div className={`flex justify-center sm:justify-end mb-8 sm:mb-0 items-center ${e.left.marginRight ? e.left.marginRight : ''}`}>
                    <Image src={e.left.href} alt={e.left.alt} width={e.left.width} height={e.left.height}/>
                  </div>
                  {
                    !list ? (
                      <div className='flex flex-col justify-center mx-auto sm:mx-0 tracking-[0.02em] font-poppins px-4 sm:px-0 sm:pr-4 lg:pr-0'>
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
              </li>
          )})
        }
      </ul>
      {buttonCta && (
        <Button className="[&>*]:!py-1" href={buttonCta?.href} isWhite >
          {buttonCta?.text}
        </Button>
      )}
    </div>
  )
}

export default LeftRightFeature
