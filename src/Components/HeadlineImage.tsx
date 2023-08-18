import React, { useState } from 'react';
import Button from './Global/Button';

import iconOrangePlay from '../../public/Icons/icon_orange_play.svg';
import iconOrangeCircle from '../../public/Icons/icon_orange_circle.png';

export type HeadlineImageProps = {
  className?: string;
  variant?: string;
  headlineTop: string;
  headline: string;
  description: string;
  bgImage?: string;
  bottomImage: string;
  videoUrl?: string;
  cta?: {
    text: string;
    href: string;
  };
};

const HeadlineImage = ({
  variant = '', className = '', headlineTop, headline, description, bgImage, bottomImage, videoUrl, cta,
}: HeadlineImageProps) => {
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const [endAnimation, setEndAnimation] = useState<boolean>(false);

  if (variant === 'video') {
    const bottomClasses = `h-full w-full flex bg-contain bg-center bg-no-repeat lg:bg-auto xl:bg-[left_53%_top_34%] lg:block lg:pt-[212px] ${showVideo ? 'animation-hide' : ''}`;
    const bottomStyles = { backgroundImage: `url(${bottomImage})` };

    return (
      <div className={`${className} py-4 bg-black text-white`}>
        <div className="container mx-auto md:whitespace-pre-wrap text-center mb-8 px-4">
          <h1 className="font-pt-mono text-3xl sm:text-[2.5rem] font-bold tracking-widest mb-5">{headlineTop}</h1>
          <h2 className="font-poppins text-3xl sm:text-4xl tracking-[0.02em]">{headline}</h2>
          <div className="mb-12 mt-14">
            <img className="mx-auto w-9" src={iconOrangeCircle.src} alt="Icon Orange Circle" />
          </div>
          <p className="font-poppins">{description}</p>
        </div>
        <div id="section-hero-video" className="h-52 sm:h-96 md:h-[32rem] lg:h-[723px] max-w-[72rem] flex items-center mx-auto">
          {!(showVideo && endAnimation) 
            ? (
              <div className={bottomClasses} style={bottomStyles} onAnimationEnd={() => setEndAnimation(true)}>
                <button type="button" className="flex items-center mx-auto gap-5" onClick={() => setShowVideo(true)}>
                  <span className="font-pt-mono font-bold text-white md:text-xl tracking-widest">SEE HOW IT WORKS</span>
                  <img className="w-10 md:w-auto" src={iconOrangePlay.src} alt="Icon Orange Play Circle" />
                </button>
              </div>
            ) : (
              <div className="h-full w-full animation-show">
                <video className='h-full w-full' controls src={videoUrl}>
                  <track kind="captions" />
                </video>
              </div>
            )}
        </div>
      </div>
    )
  }

  return (
    <div className={`pt-40 bg-cover ${className}`} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto md:whitespace-pre-wrap text-center px-4">
        <h1 className="font-pt-mono text-3xl sm:text-[2.5rem] font-bold tracking-widest mb-4">{headlineTop}</h1>
        <h2 className="font-poppins text-3xl sm:text-4xl">{headline}</h2>
        <p className="font-poppins mt-12 mb-11 text-xl tracking-wide">{description}</p>
        <Button className="[&>*]:!py-1.5" href={cta?.href}>
          {cta?.text}
        </Button>
      </div>
      <div
        className="container mx-auto h-96 md:h-[32rem] bg-cover lg:h-[60.5rem] lg:bg-auto xl:bg-[bottom_center] bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bottomImage})` }}
      />
    </div>
  );
};

export default HeadlineImage;
