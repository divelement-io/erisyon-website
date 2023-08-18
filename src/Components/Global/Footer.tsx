import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

import logoWhite from '../../../public/Images/Navbar/Erisyon_logo_white.png'

interface IFooterLink {
  href: string;
  title: string
}

interface IFooterSocial {
  href: string;
  icon: string;
  size?: number;
  left?: string;
}

export interface FooterProps {
  links: IFooterLink[];
  social: IFooterSocial[];
  logo: {
    alt: string
  };
  copyright: string;
}

const Footer = ({ links, social, logo, copyright }: FooterProps) => {
  const footerLinkItems = links || [];
  const footerSocialItems = social || [];
  return (
    <footer className='flex flex-col py-[63px] bg-black text-white'>
      <ul className='flex flex-col items-center font-poppins font-medium text-[12px] leading-[18px]'>
        {
          footerLinkItems?.map((e) => (
            <li key={e.title} className='pb-[35px] tracking-wider ml-[10px]'>
              <Link href={e.href}>{e.title}</Link>
            </li>
          ))
        }
      </ul>
      <div className='flex flex-row justify-center gap-x-[35px] max-h-[25px]'>
        {
          footerSocialItems?.map((e, idx) => {
            const key = `social-media-key-${idx}`
            return (
              <div key={key}>
                <Link href={e.href} key={e.href} className="relative " style={{left: `${e.left}` || '0px'}}>
                  <Image src={e.icon} alt={e.href} width={e.size} height={e.size} />
                </Link>
              </div>
            )
          })
        }
      </div>

      <Link href='/' className='flex flex-col items-center py-[35px]'>
        <div className='w-[100.78px] h-[30px] ml-[9px]'>
          <Image src={logoWhite} alt={logo?.alt || ''} width={100} height={100}/>
        </div>
      </Link>

      <p className='text-center leading-[15px] text-[10px] tracking-[0.02em] mt-[1px]'>{copyright}</p>
    </footer>
  )
}

export default Footer
