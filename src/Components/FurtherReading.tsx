import React, { useState } from 'react'

import ModalDownload from './ModalDownload';
import Button from './Global/Button';
import iconWhiteArrowRight from '../../public/Icons/icon_white_arrow_right.svg';

type OneItemProps = {
  title: string;
  description: string;
  cta?: {
    text?: string;
    href?: string;
    downloadLink?: string;
  };
  minHeight?: string;
};

type ModalDataProps = {
  open: boolean;
  title: string;
  description: string;
  downloadLink: string;
};

export type FurtherReadingProps = {
  variant?: string;
  className?: string;
  liClassName?: string;
  headline?: string;
  bottomCta?: {
    text: string;
    href: string;
    light?: boolean;
  };
  listItems: OneItemProps[];
  headlineClass?: string;
};

type variantType = { 
  [x: string]: { 
    cont: string;
    row: string;
    right: string;
  };
};

const initialModalValue: ModalDataProps = {
  open: false,
  title: '',
  description: '',
  downloadLink: '',
};

const variants: variantType = {
  technology: {
    cont: 'xl:pl-[21px] xl:pr-[36px] xl:[&>*:last-child]:mt-[77px] xl:[&_a]:!py-1',
    row: 'xl:first:pt-[26px] xl:first:pb-8 xl:[&:nth-child(2)]:h-[106px] xl:last:h-32 [&:nth-child(2)_h5]:text-e-dark-grey [&:last-child_h5]:text-e-dark-grey',
    right: '',
  },
  articles: {
    cont: 'xl:pr-6',
    row: '',
    right: 'xl:w-[370px]',
  },
  notes: {
    cont: 'xl:pr-6',
    row: '[&_h5]:text-e-dark-grey',
    right: 'xl:w-[350px] xl:!pl-16',
  },
  notesApp: {
    cont: 'xl:pr-6',
    row: '[&_h5]:text-e-dark-grey',
    right: 'xl:w-[263px] xl:!pl-[36px]',
  },
  articlesNR: {
    cont: 'xl:pr-6',
    row: '[&_h5]:text-e-vivid-orange',
    right: 'xl:!w-[372px] xl:!pl-[36px]',
  },
  notesNR: {
    cont: 'xl:pr-6',
    row: '[&_h5]:text-e-dark-grey',
    right: 'xl:!w-[350px] xl:!pl-[64px]',
  },
};

const FurtherReading = (props: FurtherReadingProps) => {
  const [selectModal, setSelectModal] = useState<ModalDataProps>(initialModalValue);
  const { variant = '', className = '', headline, listItems, bottomCta, liClassName = '', headlineClass } = props;

  const handleDownloadClick = (oneItem: OneItemProps) => {
    setSelectModal({
      open: true,
      title: oneItem.title,
      description: oneItem.description,
      downloadLink: oneItem.cta?.downloadLink || '',
    });
  };

  return (
    <>
      <div className={`container mx-auto font-pt-mono px-4 md:px-6 xl:px-7 xl:max-w-[64rem] ${variants?.[variant]?.cont || ''} ${className}`}>
        {
          headline && (
            <h4 className={`leading-6 tracking-widest font-bold ${headlineClass || "mb-5"}`}>{headline}</h4>
          )
        }
        <ul className="bg-white box-border border border-b-0 border-black rounded-xl overflow-hidden">
          {listItems?.map((oneItem, idx) => {
            const key = `one-item-${idx}`;
            return (
              <li key={key} className={`box-border border-b border-black py-[20px] pl-10 sm:flex font-bold xl:justify-between ${variants?.[variant]?.row || ''} ${listItems.length - 1 > idx ? 'border-black' : ''} ${liClassName}`} style={{minHeight: `${oneItem.minHeight}`}}>
                <div className="flex flex-col justify-center py-2 sm:py-0 sm:w-2/3 lg:w-[56rem] lg:whitespace-pre-wrap xl:max-w-[586px] xl:py-[10px] flex-1">
                  <h5 className="font-poppins text-sm text-e-vivid-orange tracking-[0.02em] uppercase">
                    {oneItem.title}
                  </h5>
                  <p className="tracking-wider text-black pt-[1px]">{oneItem.description}</p>
                </div>
                <div 
                  className={`flex items-center justify-center pt-4 sm:w-1/3 xl:w-[260px] sm:box-border sm:border-l-2 sm:border-black sm:border-dashed sm:pt-0 md:pl-7 xl:pl-[36px] md:justify-start ${variants?.[variant]?.right || ''}`}
                >
                  {oneItem?.cta?.downloadLink && oneItem.cta.downloadLink?.length > 0 ? (
                    <button type="button" className="flex gap-[10px]" onClick={() => handleDownloadClick(oneItem)}>
                      <span className="font-bold tracking-widest text-black">DOWNLOAD</span>
                      <img className="rotate-90" src={iconWhiteArrowRight.src} alt="Icon Arrow Down" />
                    </button>
                  ) : (
                    <a href={oneItem.cta?.href} className="flex gap-[10px]" target="_blank" rel="noopener noreferrer">
                      <span className="font-bold tracking-widest text-black uppercase">{oneItem.cta?.text}</span>
                      <img src={iconWhiteArrowRight.src} alt="placeholder" />
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
        {bottomCta && (
          <Button className="mt-12 lg:mt-24" href={bottomCta?.href} isWhite={bottomCta.light} >
            {bottomCta?.text}
          </Button>
        )}
      </div>
      <ModalDownload
        open={selectModal.open}
        title={selectModal.title}
        description={selectModal.description}
        downloadLink={selectModal.downloadLink}
        onClose={() => setSelectModal(initialModalValue)}
      />
    </>
  );
};

export default FurtherReading;
