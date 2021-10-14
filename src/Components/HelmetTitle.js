import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const HelmetTitle = ({ text }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{text} | Nomflix</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetTitle;
