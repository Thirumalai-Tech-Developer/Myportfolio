import React from 'react';
import Studies from '../Studies.json';
import TypingEff from '../typingEff';

const Education = () => {
  return (
      <div
        className='relative'
        style={{ 
          width: '100%', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr', 
          gap: '20px',
        }}
      >
        {Studies.map((stud) => (
          <div 
            key={stud.id} 
            className='rounded-3xl w-full'
            style={{
              zIndex: 10, 
              height: 'auto', 
              color: 'white',
              background: 'rgba(0, 0, 0, 0.2)', 
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h1 className='font-bold mb-2 text-lg sm:text-xl md:text-2xl' style={{ 
              color: '#98ff00',
            }}>
              <TypingEff text={stud.College} speed="100" />
            </h1>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold mb-2' style={{ color: '#f2c7ff' }}>
              <TypingEff text={stud.Course} speed="80" />
            </h2>
            <p className='text-base sm:text-lg md:text-xl mb-3' style={{ color: '#f2c7ff' }}>
              <TypingEff text={stud.Year} speed="80" />
            </p>
            <p className='text-lg sm:text-xl md:text-2xl font-medium' style={{ color: '#f2c7ff' }}>
              <TypingEff text={stud.percent + ' %'} speed="40" />
            </p>
          </div>
        ))}
      </div>
  );
};

export default Education;
