import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../img/common/Logo.png";
import MenuIcon from "../img/icon/menuIcon.webp";
import { AboutUs } from "./AboutUs";

export const Header = (data) => {
  const navigate = useNavigate();
  const [Count, setCount] = useState(0);
  const [CounterStats, setCounterStats] = useState(
    data.counter == false ? data.counter : true
  );
  const [OpenAbout, setOpenAbout] = useState(false);
  const [OpenNavabar, setOpenNavabar] = useState(false);

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
    <div className="flex w-full justify-between  md:px-[3rem] md:py-[2rem] absolute top-0 z-[200]">
      <div
        onClick={() => {
          navigate("/");
        }}
        className=" hidden md:flex"
      >
        <img src={Logo} alt="" className={"w-[13rem] h-full"} />
      </div>
      <div
        className={`${
          OpenNavabar ? " bg-gradient-to-b from-[#222325]  to-[#222325]" : null
        }  flex md:hidden w-full py-[1.5rem] items-center px-[1.5rem]  justify-between top-0  fixed `}
      >
        <img
          onClick={() => {
            navigate("/");
          }}
          src={Logo}
          alt=""
          className={"w-[5rem] opacity-75 h-full"}
        />
        <img
          src={MenuIcon}
          onClick={() => {
            setOpenNavabar(!OpenNavabar);
          }}
          alt=""
          className={"w-[2rem] opacity-75 h-full"}
        />
      </div>
      {CounterStats ? null : (
        <div className="flex justify-end    w-full textbutton items-center text-xl tracking-widest space-x-4 text-[#fff]">
          <div className="hidden  md:flex space-x-6 justify-end w-fit text-right">
            <Link to={"/"} className="hover:text-[#FF8311] hover:font-bold">
              Homepage
            </Link>
            <Link
              to={"/package"}
              className="hover:text-[#FF8311] hover:font-bold"
            >
              Packages
            </Link>
            <button
              onClick={() => {
                setOpenAbout(!OpenAbout);
              }}
              className="hover:text-[#FF8311]   tracking-widest hover:font-bold"
            >
              About Us
            </button>
          </div>
        </div>
      )}
      {OpenAbout ? <AboutUs open={setOpenAbout} /> : null}
      <div className="PopUPAnimationNumber hidden md:flex">
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

      {OpenNavabar ? (
        <div className="fixed bottom-0 w-screen h-[90vh] flex justify-center space-y-10 text-2xl  text-white flex-col py-[2rem] bg-[#323639] z-50">
          <button
            onClick={() => {
              setOpenNavabar(false);
              navigate("/");
            }}
            className="hover:text-[#FF8311] tracking-widest  hover:font-bold"
          >
            Homepage
          </button>

          <button
            onClick={() => {
              setOpenNavabar(false);
              navigate("/package");
            }}
            className="hover:text-[#FF8311] tracking-widest hover:font-bold"
          >
            Packages
          </button>
          <button
            onClick={() => {
              setOpenAbout(!OpenAbout);
              setOpenNavabar(false);
            }}
            className="hover:text-[#FF8311] tracking-widest  tracking-widest hover:font-bold"
          >
            About Us
          </button>
        </div>
      ) : null}
    </div>
  );
};
