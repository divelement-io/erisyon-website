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

export type IOneRowElement = {
  src: string
  title: string
  description: string
  className?: string
  width?: number
  height?: number
  line?: boolean
  mb?: string
}

type IRowThreeElements = {
  elementsArray: IOneRowElement[]
  className?: string
}

const rgbDataURL = () =>
  `data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkuA0AAOEA3a7yh7MAAAAASUVORK5CYII=`

const Element = (props: IOneRowElement) => {
  const { src, title, description, className = '', width, height, line, mb } = props
  return (
    <div className={`grid grid-rows-2 gap-3 max-w-[300px] ${className}`}>
      <div className="flex justify-center self-center" style={{marginBottom: `${mb || 0}`}}>
        <Image src={src} alt="" width={width || 300} height={height || 300} placeholder='blur' blurDataURL={rgbDataURL()} />
      </div>
      <div className='flex flex-col tracking-[0.02em]'>
        {
          line && (
            <div className='w-full flex justify-center self-center mt-[27px]'>
              <div className='w-[50px] h-0 box-border border-t-[1px] border-white'/>
            </div>
          )
        }
        <span className='text-sm text-center pb-[10px] mt-[28px] font-bold whitespace-pre-wrap'>{title}</span>
        <span className='text-md text-center whitespace-pre-wrap'>{description}</span>
      </div>
    </div>
  )
}

const RowThreeElements = (props: IRowThreeElements) => {
  const { elementsArray, className = '' } = props
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 lg:gap-16 xl:gap-32 font-poppins ${className}`}>
      {elementsArray.map((it: IOneRowElement) => (
        <Element key={it.title} src={it.src} title={it.title} description={it.description} className={it.className} width={it.width} height={it.height} line={it.line} mb={it.mb} />
      ))}
    </div>
  )
}

export default RowThreeElements
