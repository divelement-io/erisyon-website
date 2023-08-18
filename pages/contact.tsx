import React from 'react'
import getPageProps from '../utils/getPageProps';
import SEO, { MetaProps } from '../src/Components/Global/SEO';
import imageBgOrangeLightGradient from '../public/Images/image_bg_orange_light_gradient_3.png';

type ContactProps = {
  meta: MetaProps;
  hero: {
    headline: string;
    description: string;
  };
  cta: {
    href?: string;
    text?: string;
    light?: boolean;
  };
};

export async function getStaticProps() {
  const data = getPageProps<ContactProps>(['pages', 'contact.yaml']);
  return {
    props: data,
  };
};

const Contact = ({ meta, hero, cta }: ContactProps) => {
  const lightClass = `${cta?.light ? 'text-white border-white' : 'text-black border-black'}`;
  const inputClass = `rounded-[20px] bg-white py-3 px-6 drop-shadow-xl sm:w-[450px] w-full placeholder:text-e-dark-grey tracking-widest`;
  return (
    <section id="section-hero" className="bg-cover" style={{ backgroundImage: `url(${imageBgOrangeLightGradient.src})` }}>
      <SEO metaValues={meta} />
      <div className="container mx-auto pt-[210px] pb-28 text-center px-4 md:px-6 font-poppins">
        <h1 className="mb-10 text-4xl tracking-wide">{hero.headline}</h1>
        <hr className="mb-10 w-[100px] border-2 border-black mx-auto" />
        <h2 className="mb-5 text-xl tracking-wide">{hero.description}</h2>
        <form action="/thank-you" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <p className="hidden">
            Don’t fill this out if you’re human: <input name="bot-field" />
          </p>
          <input type="hidden" name="form-name" value="contact"/>
          <section className='flex flex-col mt-11 gap-[50px] font-pt-mono font-bold items-center'>
            <input className={inputClass} type="text" placeholder='ENTER YOUR NAME' name='name' />
            <input className={inputClass} type="email" placeholder='ENTER YOUR EMAIL' name='email' />
            <textarea className={`${inputClass} pb-6`} placeholder='YOUR MESSAGE' rows={7} name='description' />
          </section>
          <div className="mt-[46px] max-w-fit mx-auto">
            <button
              className={`font-pt-mono font-bold py-1.5 px-5 border rounded-full inline-block tracking-widest text-center ${lightClass}`}
              type="submit"
            >
              {cta?.text}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
