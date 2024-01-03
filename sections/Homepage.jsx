import Image from "next/image";
import vector from "../public/assets/conference.svg";
import bg from "../public/assets/bgVector.svg";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import Button from "../components/Button";
const Homepage = () => {
    return (
        <>
            <Image src={bg} className='absolute top-0 right-0' />
            <div className='w-full lg:h-[85vh] p-5 z-[990] relative'>
                <div className='container mx-auto w-full h-full'>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-28 w-full h-full'>
                        <div className='flex flex-col items-center lg:items-start gap-3 lg:gap-8'>
                            <h1 className='text-secondary'>Sustained - 2024</h1>
                            <p className='text-xl lg:text-3xl text-center lg:text-start font-semibold lg:leading-[2.5rem]'>
                                International Conference on <span>Sustainability</span>, and{" "}
                                <span>Technological Advancements</span> in Engineering Domain
                            </p>

                            <div className='flex flex-col lg:flex-row items-start gap-3 lg:gap-10'>
                                <div className='flex items-center gap-2 text-xl lg:text-2xl'>
                                    <CiCalendarDate
                                        size={40}
                                        className='text-secondary font-bold'
                                    />
                                    <p>
                                        30<sup>th</sup> - 31<sup>st</sup> August, 2024{" "}
                                    </p>
                                </div>

                                <div className='flex items-center gap-2 text-xl lg:text-2xl'>
                                    <CiLocationOn
                                        size={40}
                                        className='text-secondary font-bold'
                                    />
                                    <p>Manav Rachna</p>
                                </div>
                            </div>

                            <Button className="shadow-lg shadow-secondary">Register Now !</Button>
                        </div>

                        <div>
                            <Image src={vector} alt='vector' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
