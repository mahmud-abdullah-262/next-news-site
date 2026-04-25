import Header from '@/components/shered/Header';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
  return (
    <>
       
        <Navbar></Navbar>
        {children}
    </>
  );
};

export default AuthLayout;