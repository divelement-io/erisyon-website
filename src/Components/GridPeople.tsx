import React, { FC } from 'react'
import Image from 'next/image';

import getBlurData from '../../utils/getBlurData';

type GridPeopleProps = {
  className?: string;
  title: string;
  members: Array<{
    name: string;
    role: string;
    image?: string;
  }>;
};

const GridPeople: FC<GridPeopleProps> = ({ className = "", title, members }) => (
  <div className={`container mx-auto lg:max-w-5xl xl:max-w-[73.5rem] ${className}`}>
    <h2 className="font-poppins text-3xl leading-[54px] tracking-[0.02em] sm:text-4xl pb-16 md:pb-[104px] text-center">{title}</h2>
    <ul className="flex flex-wrap justify-center gap-12 xl:gap-x-[6.25rem] xl:gap-y-[100px] px-4 md:px-6 lg:px-8">
      {members?.map((oneMember, idx) => {
        const key = `one-person-item-${idx}`;
        const isMiddleColumn = idx > 0 && ((idx + 2) % 5 === 0 || (idx + 1) % 5 === 0);
        const columnWidthXl = isMiddleColumn ? 'xl:w-[19.1rem]' : 'xl:w-[19rem]';
        const columnWidthLg = isMiddleColumn ? 'lg:w-[18.1rem]' : 'lg:w-[18rem]';

        return (
          <li key={key} className={`font-pt-mono sm:w-[46%] w-[16rem] min-h-[356px] ${columnWidthLg} ${columnWidthXl}`}>
            {oneMember?.image ? (
              <div className="aspect-square mb-[30px] mx-auto md:max-w-[16rem] lg:max-w-[15.625rem] rounded-full overflow-hidden relative w-full">
                <Image src={oneMember.image} alt={oneMember.name} fill placeholder="blur" blurDataURL={getBlurData(oneMember.image)} />
              </div>
            ) : (
              <div className="aspect-square mb-[30px] mx-auto md:max-w-[16rem] lg:w-[15.625rem] rounded-full bg-e-light-grey" />
            )}
            <h5 className="pt-5 box-border border-t-2 border-white font-bold tracking-wider pl-1">{oneMember.name}</h5>
            <p className="tracking-wider pl-1">{oneMember.role}</p>
          </li>
        );
      })}
    </ul>
  </div>
);

export default GridPeople;
