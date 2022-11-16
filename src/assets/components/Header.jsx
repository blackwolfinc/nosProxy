import React from "react";
import Logo from "../img/common/Logo.png";

export const Header = () => {
  return (
    <div className="flex w-full justify-between px-[3rem] py-[3rem] absolute top-0">
      <div>
        <img src={Logo} className={"w-[13rem]"} />
      </div>

      <div>
        <span className="counting text-[#fff]  tracking-[10px] text-7xl px-2">
          53536
        </span>
        <span className="counting  text-[#fff] text-lg">+IPS</span>
      </div>
    </div>
  );
};
