import React from 'react';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Table from '../TableList/index';
import Footer from '../Footer/Footer';

const ContentWrapper = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <Table/>
    <Footer/>
    </React.Fragment>
  );
};

export default ContentWrapper;
