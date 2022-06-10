import Image from "next/image";
import Link from "next/link";
import SubNav from "./SubNav";
import Logo from "../../images/logo1.png";

const Header = () => {
  return (
    <>
      <div className="w-full h-[80px] grid grid-cols-2 ">
        <Link href="/discover">
          <div className="relative flex items-center justify-center cursor-pointer">
            <Image
              src={Logo}
              layout="fixed"
              width={280}
              height={80}
              objectFit="cover"
              objectPosition="center"
              alt=""
            />
          </div>
        </Link>
        <div className="relative flex items-center justify-evenly">
          <button className=" text-gray-100 text-lg font-semibold px-4  lg:px-6 py-2 bg-[#E4003F] rounded-lg hover:scale-105 duration-150 shadow-lg shadow-grey-500/30">
            <Link href="/login">Logout</Link>
          </button>
        </div>
      </div>
      <SubNav />
    </>
  );
};

export default Header;
