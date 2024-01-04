import Image from 'next/image'
import mrlogo from '../public/assets/mrlogo.png'
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
const Header = () => {
    return (
        <div className="w-full lg:h-[40vh] 2xl:h-[20vh]">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-6 lg:px-16">
                <Image src={mrlogo} width={400} height={400} />


                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-secondary">Sustained - 2024</h1>
                    <p className="text-xl text-center font-semibold lg:w-[70vh]">International Conference on <span>Sustainability</span>, and <span>Technological Advancements</span> in Engineering Domain</p>
                    <div className='flex flex-col lg:flex-row items-start gap-3 lg:gap-10'>
                        <div className='flex items-center gap-2 text-xl'>
                            <CiCalendarDate
                                size={35}
                                className='text-secondary font-bold'
                            />
                            <p>
                                30<sup>th</sup> - 31<sup>st</sup> August, 2024{" "}
                            </p>
                        </div>

                        <div className='flex items-center gap-2 text-xl'>
                            <CiLocationOn
                                size={35}
                                className='text-secondary font-bold'
                            />
                            <p>Manav Rachna</p>
                        </div>
                    </div>
                    <hr className='w-full' />
                    <p className='text-xl lg:w-[70rem] text-center'>Organised by Department of Mechanical Engineering, School of Engineering and Technology,
                        Manav Rachna International Institute of Research and Studies</p>
                </div>

                <div>
                    <Image src={mrlogo} width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Header