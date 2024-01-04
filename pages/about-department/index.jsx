import React from 'react'
import TransitionEffect from '../../components/TransitionEffect'
import Image  from 'next/image'
import department_image from '../../public/assets/department.svg'
const AboutDepartment = () => {
  return (
    <>
    <TransitionEffect />
      <div className='w-full p-5'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-center  text-center'>
            <h2>About <span>Manav Rachna International Institute of Research and Studies (MRIIRS)</span></h2>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-10 mt-10'>
            <p className='text-lg text-justify'>Manav Rachna International Institute of Research and Studies (MRIIRS), formerly MRIU, a Deemed-to-be-University under section 3 of the UGC Act, 1956, and a NAAC accredited ‘A++’ Grade Institution, is a continuum of excellence from the Career Institute of Technology and Management (CITM). MRIIRS has been awarded a 5-star QS rating for Teaching, Facilities & Social Responsibility. MRIIRS is ranked among the top institutions by the Ministry of Education’s NIRF Ranking 2022. It strives for high-quality education in the fields of Engineering and Technology, Health and Applied Sciences, Management, Computer Applications, Hotel Management, Commerce, Humanities, Media, Architecture, Design, Liberal Arts, Economics, Applied Psychology, and many more. MRIIRS is a Founder and Member of the prestigious “College Board’s Indian Global Higher Education Alliance”.</p>
            <Image src={department_image} alt='department_image' />
          </div>

          <div className='flex items-center justify-center mt-10 text-center'>
            <h2>About <span>School of Engineering and Technology</span></h2>
          </div>

          <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-10 mt-10'>
            <p className='text-lg text-justify'>The School of Engineering and Technology at Manav Rachna International Institute of Research and Studies has established itself as a hub of excellence in engineering education since its inception in 1997. Comprising the Mechanical Engineering department, renowned for the Centre of Excellence in partnership with Honda, and Electric One, and cutting-edge research labs; the Electrical and Electronics Engineering department, with a focus on innovation and collaboration through well-equipped laboratories and a Centre of Excellence in partnership with Mitsubishi Electric India; the Electronics and Communication Engineering department, offering diverse specializations and fostering a culture of research; and the Civil Engineering department, dedicated to academic and placement success while emphasizing sustainable development and smart infrastructure. The school, with its commitment to values, ethics, and professionalism, provides a comprehensive and forward-looking education that prepares students for successful careers in both industry and academia on a global scale.</p>
            <Image src={department_image} alt='department_image' />
          </div>

          
        </div>
      </div>
    </>
  )
}

export default AboutDepartment