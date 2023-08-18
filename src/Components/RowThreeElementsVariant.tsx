/**
 * It takes an array of objects and returns a row of three elements
 * Example:
 */
/* <RowThreeElements elementsArray={[{
        src: 'next.svg',
        title: 'NEUROLOGY',
        description: 'Measure healthy vs pathological alpha-synuclean proteins'
      }, {
        src: 'next.svg',
        title: 'ONCOLOGY',
        description: 'Detect neoantigens directly for better immune-oncology treatments'
      }, {
        src: 'next.svg',
        title: 'INFECTIOUS DISEASE',
        description: 'Reveal the glycosylation sites COVID19 uses to evade the immune system'
      }]} /> */
import React from 'react'
import Image from 'next/image'

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
type IRowThreeElements = {
  elementsArray: IElement[]
  className?: string
}

const rgbDataURL = () =>
  `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkuA0AAOEA3a7yh7MAAAAASUVORK5CYII=`

const Element = (props: IElement) => {
  const { src, title, subTitle, description, width, height, marginCardTop = '0px', lineWidth } = props
  return (
    <div className="flex flex-col max-w-[300]" style={{marginTop: `${marginCardTop}`}}>
      <div className='relative flex justify-left pb-[30px] mx-auto md:mx-0'>
        <Image src={src} alt="" width={width} height={height} placeholder='blur' blurDataURL={rgbDataURL()} />
      </div>
      <span className='text-sm text-left pb-[10px] font-bold font-poppins uppercase tracking-[0.02em]'>{title}</span>
      <span className='text-xl text-left tracking-[.02rem] leading-[30px] font-normal font-poppins lg:whitespace-pre-wrap'>{subTitle}</span>
      <div className="border-[1px] border-black my-[30px]" style={{width: `${lineWidth}`}} />
      <span className='text-md text-left leading-6 font-normal font-poppins'>{description}</span>
    </div>
  )
}

const RowThreeElementsVariant = (props: IRowThreeElements) => {
  const { elementsArray, className = '' } = props
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-32 font-poppins ${className}`}>
      {elementsArray.map((it: IElement) => <Element key={it.title} src={it.src} width={it.width} height={it.height} title={it.title} subTitle={it.subTitle} description={it.description} marginCardTop={it.marginCardTop} lineWidth={it.lineWidth} />)}
    </div>
  )
}

export default RowThreeElementsVariant
