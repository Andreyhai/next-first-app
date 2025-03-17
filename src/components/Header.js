import Image from "next/image";

import logo from "../../public/scissors 1.svg";
import Link from "next/link";

// src/app/components/Header.js
const Header = () => (
  <header className="bg-white text-primary text-sky-200 flex justify-center ">
    <div className="container border-2 px-2.5 flex items-start pb-3 columns-12">
      <div className="flex items-end py-2 columns-4">
        <Image src={logo} alt="Логотип" width={60} height={60} />
        <span className="text-blue-300 relative right-4 top-0.5 text-2xl">
          arber
        </span>
      </div>
      <nav className="flex gap-3">
        <div className="bg-blue-300 pt-11 pb-2 px-2 rounded-b-lg">
          <Link className="text-white" href={"/"}>
            Home
          </Link>
        </div>
        <div className=" pt-11 pb-2 px-2 rounded-b-lg">
          <Link className="text-blue-300" href={"/"}>
            History
          </Link>
        </div>
        <div className=" pt-11 pb-2 px-2 rounded-b-lg">
          <Link className="text-blue-300" href={"/"}>
            Service
          </Link>
        </div>
        <div className=" pt-11 pb-2 px-2 rounded-b-lg">
          <Link className="text-blue-300" href={"/"}>
            Gallary
          </Link>
        </div>
        <div className=" pt-11 pb-2 px-2 rounded-b-lg">
          <Link className="text-blue-300" href={"/test"}>
            test
          </Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
