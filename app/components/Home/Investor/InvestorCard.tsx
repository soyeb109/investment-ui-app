import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

type Props = {
  name: string;
  image: string;
  invest: string;
};

const InvestorCard = ({ name, image, invest }: Props) => {
  return (
    <div className="bg-blue-900 p-6">
      {/* image */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="mt-12"
      />
      <p className="mt-6 text-white text-lg text-center">{name}</p>
      <p className="mt-2  text-opacity-80 text-base text-yellow-400 text-center">
        ${invest}
      </p>
      {/* social icons */}
      <div className="mt-4 text-white flex items-center justify-center space-x-4">
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );
};

export default InvestorCard;
