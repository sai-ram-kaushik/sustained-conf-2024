import Image from "next/image";
import logo from "../public/assets/logo.png";
import mrlogo from "../public/assets/mrlogo.png";
import sustained from "../public/assets/sustained-2024.svg";
const Header = () => {
  return (
    <div className="hidden lg:block w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <Image src={logo} width={120} height={120} alt="sustained_logo" />
          <div className="flex flex-col items-center">
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

            <h3 className="text-[#BA2026]">Manav Rachna International Institute of Research and Studies</h3>
          </div>
          <Image src={mrlogo} width={250} height={250} alt="sustained_logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
