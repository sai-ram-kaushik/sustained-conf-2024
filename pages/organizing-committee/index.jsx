import React from 'react'
import TransitionEffect from '../../components/TransitionEffect'

const index = () => {
  return (
    <div className='w-full h-[80vh]'>
      <TransitionEffect />
        <div className='container mx-auto w-full h-full'>
            <div className='flex items-center justify-center w-full h-full'>
                <h3>This page is under development</h3>
            </div>
        </div>
    </div>
  )
}

export default index