import React, { ReactNode } from 'react';
import Link from 'next/link';

type ButtonProps = {
  className?: string;
  href?: string;
  isWhite?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ className = '', href, isWhite, onClick, children }: ButtonProps) => {
  const renderBody = () => {
    if (href) {
      if (/^\/(?!\/)|#/.test(href)) {
        return <Link href={href}>{children}</Link>;
      };

      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    };

    return <button type="button" onClick={onClick}>{children}</button>;
  };

  const color = isWhite ? 'bg-black text-white border-white' : 'text-black border-black';
  return (
    <div className={`font-pt-mono font-bold box-border border rounded-full w-fit mx-auto leading-[18px] [&>*]:block [&>*]:pt-[10px] [&>*]:pb-[7px] [&>*]:px-5 [&>*]:tracking-widest [&>*]:text-center ${color} ${className}`}>
      {renderBody()}
    </div>
  );
};

export default Button;
