import React, { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerHeight < window.innerWidth) {
        setMenuOpen(false);
      }
    });
  }, []);
  return (
    <>
      <nav className='navMain'>
        <button>About</button>
        <button>Job Search</button>
        <button>Candidates</button>
        <button>Employers</button>
        <button>Latest News</button>
        <button>Contact</button>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={'menuBtn ' + (menuOpen ? 'menuOpenAnimation' : '')}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <nav className={'navMenu ' + (menuOpen ? 'navMenuOpen' : '')}>
        <button>About</button>
        <button>Job Search</button>
        <button>Candidates</button>
        <button>Employers</button>
        <button>Latest News</button>
        <button>Contact</button>
      </nav>
    </>
  );
}
