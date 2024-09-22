import React from 'react';
import './Home.css';
import Intro from './static/Intro';
import Projects from './Project';
import Contact from './Contact';

const Home = () => {

  return (
    <>
    <div className='bg-white min-h-screen p-5 m-5  bg-opacity-10 rounded-2xl '>
      <Intro />
    </div>
    </>
  );
};

export default Home;
