import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import earth from './earth.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const serid = "portfolio_gt";
  const temid = "template_gtportfolio";
  const pubkey = "c6ekTqV_-7psi2f1p";

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,      
      to_name: 'Thirumalai',         
      message: formData.message,     
      from_email: formData.email,   
    };

    emailjs.send(
      serid,
      temid,
      templateParams,
      pubkey
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSent(true);
    }, (error) => {
      console.error('Failed to send email', error);
      setError('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className='bg-white p-5 m-5 w-full bg-opacity-10 rounded-2xl '>
      <h1 className='text-3xl mb-4 text-[#04ff96]'>
      CONTACT</h1>
      <div className='xl:grid xl:grid-cols-2'>
    <div className='bg-black bg-opacity-25 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-6'>Contact Me</h2>
      
      {isSent ? (
        <p className='text-green-500 text-center'>Email sent successfully!</p>
      ) : (
        <form onSubmit={sendEmail} className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor="name" className='mb-2 font-semibold'>Name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className='p-2 border border-gray-300 rounded-md bg-white bg-opacity-20 text-black'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="email" className='mb-2 font-semibold'>Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className='p-2 border border-gray-300 rounded-md bg-white bg-opacity-20 text-black'
            />
          </div>

          <div className='flex flex-col'>
            <label htmlFor="message" className='mb-2 font-semibold'>Message:</label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              className='p-2 border border-gray-300 rounded-md bg-white bg-opacity-20 text-black'
              rows="5"
            />
          </div>

          <button type="submit" className='w-full py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700'>
            Send
          </button>
        </form>
      )}
      </div>
      {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
      <div className='2xl:block xl:block md:hidden sm:hidden lg:hidden'>
        <img className='w-[500px] h-[500px]' src={earth}></img>
      </div>
    </div>
    </div>
  );
};

export default Contact;
