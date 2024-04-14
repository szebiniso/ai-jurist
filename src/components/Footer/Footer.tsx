import React from "react";
import { footerMenuItems, socialMedias } from "@/constants/landing/footer";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black p-20">
      <div className="bg-c-dark-gray w-11/12 rounded-3xl m-auto  p-8">
        <div className="flex justify-between text-c-white">
          {footerMenuItems.map(({ id, title, items }) => (
            <div className="flex flex-col gap-4" key={id}>
              <p className="font-medium text-md">{title}</p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li className="text-md" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-4">
            <p className="font-medium text-md">Follow us</p>
            <div className="flex gap-2">
              {socialMedias.map(({ id, icon, label }) => (
                <div className="rounded-full bg-c-white p-4" key={id}>
                  <Image src={icon} alt={label} width={24} height={24} />
                </div>
              ))}
            </div>
            <p className="w-60 text-md">
              1234 Main Street, Suite 567 Anytown, USA 12345
            </p>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex justify-between text-c-white">
          <Image src="/images/Logo.svg" alt="logo" width={140} height={140} />
          <p>&copy; AI Jurist 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
