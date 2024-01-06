import Image from "next/image";
import vector from "../public/assets/conference1.svg";
import bg from "../public/assets/bgVector.svg";
import sustained from "../public/assets/sustained-2024.svg";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import Button from "../components/Button";
import TransitionEffect from "../components/TransitionEffect";
import Link from "next/link";
const Homepage = () => {
  return (
    <>
      <TransitionEffect />
      <div className="w-full px-4 lg:px-16 lg:h-[75vh] z-[990]">
        <div className="container mx-auto w-full h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 w-full h-full px-4 lg:px-0">
            <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-5">
              <h1 className="text-secondary flex flex-col lg:flex-row items-center mt-10 lg:mt-0">
                SUSTAINED -{" "}
                <span>
                  <Image
                    src={sustained}
                    alt="sustained-zero"
                    width={150}
                    height={150}
                  />
                </span>
              </h1>
              <p className="text-xl lg:text-3xl text-center lg:text-start font-semibold lg:leading-[2.5rem] lg:w-[40rem]">
                International Conference on <span>Sustainability</span>, and{" "}
                <span>Technological Advancements</span> in Engineering Domain
              </p>

              <div className="flex flex-col lg:flex-row items-start gap-3 lg:gap-10">
                <div className="flex items-center gap-2 text-xl lg:text-2xl">
                  <CiCalendarDate
                    size={40}
                    className="text-secondary font-bold"
                  />
                  <p>
                    30<sup>th</sup> - 31<sup>st</sup> August, 2024{" "}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xl lg:text-2xl">
                  <CiLocationOn
                    size={40}
                    className="text-secondary font-bold"
                  />
                  <p>Manav Rachna</p>
                </div>
              </div>

              <p className="text-lg text-center lg:text-start lg:w-[40rem] font-semibold">
                Organised by Department of Mechanical Engineering, School of
                Engineering & Technology, Manav Rachna International Institute
                of Research and Studies
              </p>

              <Link href="/registration">
                <Button className="shadow-lg shadow-secondary">
                  Register Now !
                </Button>
              </Link>
            </div>

            <div>
              <Image src={vector} alt="vector" priority />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
