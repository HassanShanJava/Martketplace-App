import React from "react";
import logo from "/public/logo.png"; //direct use of public
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center  py-6 px-8">
      <div className="relative h-8 w-40">
        <Image src={logo} alt="logo" fill />
      </div>

      <ul className="flex  gap-x-10">
        <li>
          <Link href="/">Female</Link>
        </li>
        <li>
          <Link href="/">Male</Link>
        </li>
        <li>
          <Link href="/">Kids</Link>
        </li>
        <li>
          <Link href="/">All Products</Link>
        </li>
      </ul>

      <div className="h-10 w-10 bg-gray-200 rounded-full ">
        {/* serch icon */}
      </div>
    </div>
  );
};

export default Header;
