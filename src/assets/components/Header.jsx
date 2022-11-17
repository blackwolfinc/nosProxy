import React, { useEffect, useState } from "react";
import Logo from "../img/common/Logo.png";

export const Header = () => {
  const [Count, setCount] = useState(0);

  const counter = (minimum, maximum) => {
    for (let count = minimum; count <= maximum; count++) {
      setTimeout(() => {
        setCount(count);
      }, 1300);
    }
  };

  useEffect(() => {
    counter(0, 53536);
  }, []);

  return (
    <div className="flex w-full justify-between px-[3rem] py-[3rem] absolute top-0 z-30">
      <div>
        <img src={Logo} className={"w-[13rem]"} />
      </div>

      <div className="PopUPAnimationNumber">
        <span className="counting text-[#fff]  tracking-[10px] text-7xl px-2 ">
          {Count}
        </span>
        <span className="counting  text-[#fff] text-lg">+IPS</span>
      </div>
    </div>
  );
};
