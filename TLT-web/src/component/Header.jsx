import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Navlogo from './Navlogo';
import { HeaderContent } from './HeaderContent';
import Breadcrumbs from './utiliti/breadcrumbs/Breadcrumbs';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const breadcrumbPages = []; 
  const isBreadcrumbPage = breadcrumbPages.includes(location.pathname);

  return (
    <div className='navbody'>
      <marquee width="100%" behavior="scroll" className="bg-red-600 fixed bottom-0 z-20 font-bold py-1 text-white text-shadow">
      Admissions are open :- Empowerment batch is going to start from 1st of July 2024....!!!!   Hurry up get yourself registered 
      </marquee>
      <Navlogo />
      <Navbar />
      {isHome ? (
        <HeaderContent isHome={isHome} />
      ) : (
        isBreadcrumbPage ? (
          <Breadcrumbs >
            <HeaderContent isHome={isHome} />
          </Breadcrumbs>
        ) : (
          <HeaderContent isHome={isHome} />
        )
      )}
    </div>
  );
};

export default Header;
