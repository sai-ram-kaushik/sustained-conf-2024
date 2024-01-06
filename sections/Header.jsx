import Image from "next/image";
import logo from "../public/assets/logo.png";
import mrlogo from "../public/assets/mrlogo.png";
const Header = () => {
  return (
    <div className="hidden lg:block w-full">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          <Image src={logo} width={120} height={120} alt="sustained_logo" />
          <Image src={mrlogo} width={250} height={250} alt="sustained_logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
