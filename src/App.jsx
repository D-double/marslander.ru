import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { Projects } from './components/Projects';
import { Production } from './components/Production';
import { Reviews } from './components/Reviews';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export function App() {
  const [preselectedProject, setPreselectedProject] = useState(null);

  const handleOpenContactModal = () => {
    const contactsEl = document.getElementById('contacts');
    if (contactsEl) {
      contactsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForQuote = (project) => {
    setPreselectedProject(project);
    const contactsEl = document.getElementById('contacts');
    if (contactsEl) {
      contactsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-space-darkest text-slate-100 selection:bg-mars-red selection:text-white flex flex-col font-sans">
      <Navbar onOpenContactModal={handleOpenContactModal} />
      
      <main className="flex-1">
        <Hero onOpenContactModal={handleOpenContactModal} />
        <Clients />
        <About />
        <Projects onSelectProjectForQuote={handleSelectProjectForQuote} />
        <Production />
        <Reviews />
        <Contacts 
          preselectedProject={preselectedProject} 
          onClearPreselectedProject={() => setPreselectedProject(null)} 
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
