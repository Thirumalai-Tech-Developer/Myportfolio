import React from 'react'
import proj from './projects.json'
import './project.css'

const Projects = () => {
  return (
    <div className='bg-white p-5 m-5  bg-opacity-10 rounded-2xl '>
      <h1 className='text-3xl mb-4 p-4 text-[#04ff96]'>
      PROJECTS</h1>
    <div className='grid max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-2 2xl:grid-cols-3 gap-6 mx-5 justify-items-center align-items-center'>
          {
            proj.map((pro) => (
              <div key={pro.id} className='w-[41vh] h-[41vh] bg-white rounded-2xl ease-in hover:scale-110 transition-transform duration-300 bg-opacity-5 p-5'>
                <h1 className='text-xl font-bold h-[10%] text-white'>{pro.title}</h1>
                <p className='h-[60%] text-gray-300'>{pro.description}</p>
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