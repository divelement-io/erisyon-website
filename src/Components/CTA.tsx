import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

interface CTAProps {
  link: string
  text: string
}


export default function CTA(props: CTAProps) {
  const {link, text} = props
  return (
    <Link href={link} className="flex gap-3 items-center pt-[13.5px] pl-0 w-fit" target="_blank" rel="noopener noreferrer">
      <span className="font-pt-mono font-bold tracking-widest text-black uppercase">{text}</span>
      <Image src='/Icons/icon_white_arrow_right.svg' width={25} height={25} alt="placeholder" />
    </Link>
  )
}
