import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/common/Logo.png";

export const Header = (data) => {
  const navigate = useNavigate();
  const [Count, setCount] = useState(0);
  const [CounterStats, setCounterStats] = useState(
    data.counter == false ? data.counter : true
  );

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
      <div
        onClick={() => {
          navigate("/");
        }}
        className=" hidden sm:flex"
      >
        <img src={Logo} alt="" className={"w-[13rem] h-full"} />
      </div>

      <div className="PopUPAnimationNumber hidden sm:flex">
        {CounterStats ? (
          <>
            {" "}
            <span className="counting text-[#fff] drop-shadow-2xl	   tracking-[10px] text-7xl px-2 ">
              {Count}
            </span>
            <span className="counting  text-[#fff]  text-lg">+IPS</span>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};
