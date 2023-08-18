import React from 'react';
import Head from 'next/head';

export type MetaProps = {
  title: string;
  description: string;
}

type SEOProps = {
  metaValues: MetaProps;
};

const SEO = ({ metaValues }: SEOProps) => (
  <Head>
    <title>{metaValues.title}</title>
    <meta name="description" key="description" content={metaValues.description} />
  </Head>
);

export default SEO;
