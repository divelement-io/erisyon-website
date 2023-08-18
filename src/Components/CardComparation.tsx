/* eslint-disable no-nested-ternary */
/* A React component that renders a card with a title and a list of elements. */
/* Example */
/* <CardComparation
        highlightedElement={3}
        elementsArray={[{
          list: ['Indirect measurement', 'Diverse set of peptides', 'Poorly correlated quantification'],
          title: 'DNA/RNA Sequencing'
        }, {
          list: ['Ultimate sensitivity', 'Ultra-low sample requirement', 'Massively parallel throughput', 'Absoute quantification', 'De novo PTM discovery'],
          title: 'Fluorosequencing Advantages'
        }, {
          list: ['High sample requirement', 'Sequential processing', 'PTM low resolution'],
          title: 'Mass Spectrometry'
        }]} /> */

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCheck } from '@fortawesome/free-solid-svg-icons'

export interface IOneCardElement {
  list: string[]
  title: string
  className?: string
}

interface IElementRendered extends IOneCardElement {
  highlightedElement: number
  index: number
}

interface IRowCardElements {
  elementsArray: IOneCardElement[]
  highlightedElement: number
  className?: string;
}

const Element = (props: IElementRendered) => {
  const { list, title, highlightedElement, index, className = '' } = props
  const isHighlighted = highlightedElement === (index + 1);
  const mainClassName = `
    ${
      isHighlighted
        ? 'bg-white drop-shadow-3xl scale-110 sm:scale-125 md:px-10 md:py-6 lg:px-8 lg:py-11 z-20'
        : (highlightedElement + 1) === (index + 1)
          ? 'bg-stone-100 lg:pl-16 xl:pl-28 z-10'
          : 'bg-stone-100 z-10'
    }
  `.replace(/(\r\n|\n|\r)/gm, ' ').replace(/  +/g, ' ');

  return (
    <div className={`flex flex-col rounded-[30px] p-8 sm:p-16 lg:p-10 h-fit w-full ${mainClassName} ${className}`}>
      <span className='text-sm font-bold uppercase'>{title}</span>
      <ul className="list-none list-inside">
        {list.map((it, idx) => {
          const key = `${it}-${idx}`;
          return (
            <li className='mt-5 pl-8 relative' key={key}>
              <FontAwesomeIcon
                icon={isHighlighted ? faCheck : faClose}
                className={`absolute w-4 h-4 left-0 rounded-full p-1 text-white ${isHighlighted ? 'bg-e-mid-orange' : 'bg-black '}`}
              />
              {it}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

const CardComparation = (props: IRowCardElements) => {
  const { elementsArray, highlightedElement, className = '' } = props
  return (
    <div className={`flex flex-col lg:flex-row mt-8 lg:mt-10 font-poppins justify-center px-8 sm:px-24 lg:px-12 xl:px-28 ${className}`}>
      {elementsArray.map((it: IOneCardElement, i: number) => (
        <Element key={it.title} className={it.className} list={it.list} title={it.title} highlightedElement={highlightedElement} index={i} />
      ))}
    </div>
  )
}

export default CardComparation
