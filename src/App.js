import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll'; 
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <div>
      <div 
        className='min-h-screen flex flex-col items-center justify-start p-2 bg-gradient-to-r from-pink-700 via-orange-500 to-red-500 '>

        <nav className='py-3 px-8 bg-opacity-20 w-[80%] md:w-[50%] rounded-3xl mt-5 flex justify-center fixed top-0'>
          <ul className='flex justify-center gap-5 items-center text-white'>
            <li className='hover:text-[#2b0038] transition duration-700'>
              <ScrollLink 
                to="home-section" 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Home
              </ScrollLink>
            </li>
            <li className='hover:text-[#2b0038] transition duration-700'>
              <ScrollLink 
                to="project-section" 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Project
              </ScrollLink>
            </li>
            <li className='hover:text-[#2b0038] transition duration-700'>
              <ScrollLink 
                to="contact-section" 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <Element name="home-section" className="my-20 w-full flex justify-center">
          <Home />
        </Element>

        <Element name="project-section" className="my-20 w-full flex justify-center">
          <Project />
        </Element>

        <Element name="contact-section" className="my-20 w-full flex justify-center">
          <Contact />
        </Element>

      </div>
      <Footer />
    </div>
  );
}

export default App;
