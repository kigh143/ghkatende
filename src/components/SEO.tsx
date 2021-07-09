import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
  description: string;
  logo: string;
  image: string;
  url: string;
}

const SEO: React.FC<Props> = ({ title, description, logo, image, url }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Hakim Katende" />
      <meta name="generator" content="Hugo 0.80.0" />
      <link rel="apple-touch-icon" href={logo} sizes="180x180" />
      <link rel="icon" href={logo} sizes="32x32" type="image/png" />
      <link rel="icon" href={logo} sizes="16x16" type="image/png" />
      <link rel="icon" href={logo} />
      <link rel="icon" type="image/png" href={logo} />
      <meta name="twitter:card" content={title} />
      <meta name="twitter:site" content="@ghkatende" />
      <meta name="twitter:creator" content="@ghkatende" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
