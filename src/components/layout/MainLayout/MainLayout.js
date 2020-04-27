import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MainLayout.scss';

const MainLayout = ({children}) => (
  <div className='mainLayout'>
    <Header />
      {children}
    <Footer />
  </div>
);

export default MainLayout;