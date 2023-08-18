import React from 'react'
import Image from 'next/image'



type SectionIT = {
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

const ImageText = ({ headline, right, left, pb }: SectionIT) => (
  <section className='bg-black text-white'>
    <h1 className="max-w-[937px] font-poppins tracking-[0.02em] text-4xl leading-[54px] text-left" style={{paddingBottom: `${pb || '60px'}`}}>{headline}</h1>
    <div key={`${right.description}`} className='flex flex-col justify-between lg:flex-row'>
      <div className='relative mx-auto pb-5 lg:pb-0 lg:mx-0'>
        <Image src={left.href} alt={left.alt} width={left.width} height={left.height} />
      </div>
      <p className='font-poppins text-[16px] leading-[24px] max-w-[550px] text-left mr-[48px] flex items-center' style={{alignItems: `${right.alignItem}` || 'center'}}>
        {right.description}
      </p>
    </div>
  </section>
)

export default ImageText
