import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll'; 
import bgImage from './bg.jpg';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div 
        className='min-h-screen p-2' 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}>

        <nav className='bg-white py-3 px-8 rounded-3xl bg-opacity-20 w-[80%] md:w-[50%] mx-auto mt-5'>
          <ul className='flex justify-center gap-5 items-center text-white'>
            <li className='hover:text-[#6fff8f] transition duration-700'>
              <ScrollLink 
                to="home-section" 
                smooth={true} 
                duration={500} 
                offset={-70} // Optional offset for sticky header
              >
                Home
              </ScrollLink>
            </li>
            <li className='hover:text-[#6fff8f] transition duration-700'>
              <ScrollLink 
                to="project-section" 
                smooth={true} 
                duration={500} 
                offset={-70}
              >
                Project
              </ScrollLink>
            </li>
            <li className='hover:text-[#6fff8f] transition duration-700'>
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

        <Element name="home-section" className="my-20">
          <Home />
        </Element>

        <Element name="project-section" className="my-20">
          <Project />
        </Element>

        <Element name="contact-section" className="my-20">
          <Contact />
        </Element>

      </div>
      <Footer />
    </div>
  );
}

export default App;
