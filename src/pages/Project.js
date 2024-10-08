import React from 'react'
import proj from './projects.json'
import './project.css'

const Projects = () => {
  return (
    <div className='bg-white p-5 m-5 w-full bg-opacity-10 rounded-2xl '>
      <h1 className='text-3xl mb-4 p-4 text-[#04ff96]'>
      PROJECTS</h1>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-4 gap-6 mx-5 justify-items-center align-items-center'>
          {
            proj.map((pro) => (
              <div key={pro.id} className='w-[400px] h-[400px] bg-black rounded-2xl ease-in hover:scale-110 transition-transform duration-300 bg-opacity-20 p-5'>
                <h1 className='text-xl font-bold h-[20%] text-black'>{pro.title}</h1>
                <p className='h-[60%] text-white'>{pro.description}</p>
                <div className='flex justify-center m-10'>
                  <a href={pro.url} className='p-2 bg-violet-700 flex rounded-xl text-white justify-center hover:bg-violet-500'>View Code</a>
                </div>
              </div>
            ))
          }
    </div>
    </div>
  )
}

export default Projects