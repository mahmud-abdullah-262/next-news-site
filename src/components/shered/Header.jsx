import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='text-center space-y-2 p-8'>
     <Image src={logo} width={300} height={150} alt='logo' className='mx-auto'></Image>
     <p>Journalism Without Fear or Favour</p>
     <p>date</p>
    </div>
  );
};

export default Header;