import React from 'react'

const ScrollingContent = () => {
  return (
    <div className='w-full h-[5vh] bg-secondary sticky top-20'>
        <div className='container mx-auto w-full h-full'>
            <div className='flex items-center justify-center'>
                <marquee scrollamount="20" className="text-background">All the accepted papers will be indexed in Scopus database</marquee>
            </div>
        </div>      
    </div>
  )
}

export default ScrollingContent