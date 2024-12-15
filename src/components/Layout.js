// src/components/Layout.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; 
import Notes from './Notes';
import FloatingHelplineButton from './FloatingHelplineButton'; 
import Helpline from './Helpline'; 

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/news-archive';

  const [isNotesModalOpen, setNotesModalOpen] = useState(false);
  const [isHelplineModalOpen, setHelplineModalOpen] = useState(false); 

  const closeNotesModal = () => setNotesModalOpen(false);

  const openHelplineModal = () => setHelplineModalOpen(true);
  const closeHelplineModal = () => setHelplineModalOpen(false);

  return (
    <div>
      {!hideNavAndFooter && <Navbar />}
      <main>{children}</main>
      {!hideNavAndFooter && <Footer />}
      {!hideNavAndFooter && <FloatingHelplineButton onClick={openHelplineModal} />} 
      <Notes isOpen={isNotesModalOpen} onClose={closeNotesModal} />
      <Helpline isOpen={isHelplineModalOpen} onClose={closeHelplineModal} />
    </div>
  );
};

export default Layout;