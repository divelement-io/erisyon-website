import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import logoWhite from '../../../public/Images/Navbar/Erisyon_logo_white.png'
import logoBlack from '../../../public/Images/Navbar/Erisyon_logo_black.png'


export type ILogo = {
  white?: {
    href: string;
    alt: string;
  }
  black?: {
    href: string;
    alt: string;
  }
}
export interface IHeaderItem {
  title: string;
  href: string;
}

type Props = {
  colorLogo: string;
  logo: ILogo;
  setShowMenu: (showMenu: boolean) => void
}

export type HeaderProps = {
  items: IHeaderItem[];
  logo: ILogo;
  textColor: string;
};

const ChooseLogo = ({colorLogo, logo, setShowMenu}: Props) => {
  if (colorLogo === 'white') {
    return (
      <Link href='/' onClick={() => setShowMenu(false)}>
        <div className='relative left-[6px] w-[120.42px] h-[35px]'>
          <Image src={logoWhite} alt={logo?.white?.alt || ''} style={{objectFit: "contain"}}/>
        </div>
      </Link>
    )
  } 
  return (
    <Link href='/' onClick={() => setShowMenu(false)}>
      <div className='relative left-[6px] w-[120.42px] h-[35px]'>
        <Image src={logoBlack} alt={logo?.black?.alt || ''} style={{objectFit: "contain"}}/>
      </div>
    </Link>
  )
}

const Header = ({ items, logo, textColor }: HeaderProps) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter();
  const { asPath } = router;
  const headerItems = items || [];
  const colorLogo = textColor.split("-")[1]
  const Underline = (href: String) => {
    if (href === asPath) {
      return 'underline underline-offset-[9px] decoration-e-vivid-orange'
    }
    return ''
  }

  const handleOpen = () => {
    setShowMenu(!showMenu)
  }

  return (
    <section className='w-screen absolute z-20 max-w-full'>
      <header className='flex flex-row justify-between items-center max-w-[891px] pt-[75px] mx-auto px-7 lg:px-0'>
        <ChooseLogo colorLogo={colorLogo} logo={logo} setShowMenu={setShowMenu}/>
        <nav className='hidden w-[599px] md:block md:relative md:left-[2px]'>
          <ul className='flex flex-row justify-between'>
            {
              headerItems?.map((e) => {
                const isActive = Underline(e.href)
                return (
                  <li key={e.title} className={`font-poppins text-[14px] font-medium leading-[21px] tracking-wider py-[9px] ${isActive && isActive} ${textColor}`}>
                    <Link href={e.href}>{e.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <nav className='md:hidden'>
          <div style={{ height: "24px" }} className="no-visible">
            <FontAwesomeIcon
              icon={showMenu ? faTimes : faBars}
              style={{ width: "24px", height: "24px", fontSize: "24px" }}
              onClick={handleOpen}
              className={`${colorLogo === 'white' ? 'text-white' : 'text-black'}`}
            />
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {
        showMenu && 
        <ul className={`${colorLogo === 'white' ? 'bg-black' : 'bg-white'} mt-4 flex flex-col md:hidden`}>
          {
            headerItems?.map((e) => {
              const isActive = Underline(e.href) || "";
              return (
                <li key={e.title} className={`${textColor} text-[14px] text-center w-screen`}>
                  <Link href={e.href} onClick={() => setShowMenu(false)}>
                    <button type='button' className={`${isActive && isActive} py-4 w-full tracking-wider`}>{e.title}</button>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      }
    </section>
  )
}

export default Header
