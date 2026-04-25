import Header from '@/components/shered/Header';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <>
       <Header></Header>
        <Navbar></Navbar>
        {children}
    </>
  );
};

export default MainLayout;