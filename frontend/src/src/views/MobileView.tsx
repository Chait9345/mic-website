import React, { useState } from 'react';
import MobileHome from './MobileHome';
import MobileAbout from './MobileAbout';
import MobileVentures from './MobileVentures';
import MobileEvents from './MobileEvents';

function MobileMenu({ onClose, onNavigateToHome, onNavigateToAbout, onNavigateToVentures, onNavigateToEvents, onScrollToPrograms, onScrollToContact }: { 
  onClose: () => void;
  onNavigateToHome: () => void;
  onNavigateToAbout: () => void;
  onNavigateToVentures: () => void;
  onNavigateToEvents: () => void;
  onScrollToPrograms: () => void;
  onScrollToContact: () => void;
}) {
  const handleNavigation = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#232A91]/95 z-50 flex items-center justify-center animate-fadeIn">
      <div className="relative w-[90%] max-w-[400px]">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-[40px] w-11 h-11 flex items-center justify-center cursor-pointer bg-transparent border-0 hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav>
          <ul className="list-none p-0 m-0">
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onNavigateToHome)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                Home
              </button>
            </li>
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onNavigateToAbout)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                About
              </button>
            </li>
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onScrollToPrograms)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                Labs + Programs
              </button>
            </li>
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onNavigateToVentures)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                Ventures
              </button>
            </li>
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onNavigateToEvents)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                Events
              </button>
            </li>
            <li className="mb-6">
              <button 
                onClick={() => handleNavigation(onScrollToContact)} 
                className="text-white no-underline text-[24px] block py-3 hover:opacity-70 transition-opacity bg-transparent border-0 cursor-pointer w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default function MobileView() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'ventures' | 'events'>('home');
  const [showMenu, setShowMenu] = useState(false);
  const [scrollToPrograms, setScrollToPrograms] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleNavigateToHome = () => {
    setCurrentPage('home');
    setScrollToPrograms(false);
    setScrollToContact(false);
  };

  const handleNavigateToAbout = () => {
    setCurrentPage('about');
  };

  const handleNavigateToVentures = () => {
    setCurrentPage('ventures');
  };

  const handleNavigateToEvents = () => {
    setCurrentPage('events');
  };

  const handleScrollToPrograms = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setScrollToPrograms(true);
    setScrollToContact(false);
  };

  const handleScrollToContact = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
    setScrollToContact(true);
    setScrollToPrograms(false);
  };

  return (
    <>
      {currentPage === 'home' && (
        <MobileHome 
          onToggleMenu={handleToggleMenu}
          onNavigateToVentures={handleNavigateToVentures}
          onNavigateToEvents={handleNavigateToEvents}
          scrollToPrograms={scrollToPrograms}
          scrollToContact={scrollToContact}
        />
      )}
      
      {currentPage === 'about' && (
        <MobileAbout 
          onToggleMenu={handleToggleMenu}
        />
      )}
      
      {currentPage === 'ventures' && (
        <MobileVentures 
          onToggleMenu={handleToggleMenu}
        />
      )}
      
      {currentPage === 'events' && (
        <MobileEvents 
          onToggleMenu={handleToggleMenu}
        />
      )}
      
      {showMenu && (
        <MobileMenu 
          onClose={handleToggleMenu}
          onNavigateToHome={handleNavigateToHome}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToVentures={handleNavigateToVentures}
          onNavigateToEvents={handleNavigateToEvents}
          onScrollToPrograms={handleScrollToPrograms}
          onScrollToContact={handleScrollToContact}
        />
      )}
    </>
  );
}
