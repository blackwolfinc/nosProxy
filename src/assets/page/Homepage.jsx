import { Header } from "../components/Header";
import Logo from "../img/common/Logo.png";
import MoonIcon from "../img/webp/Moon.webp";
import NextButton from "../img/icon/Login.webp";
import Rocket from "../img/webp/Rocket.webp";
import Typewriter from "typewriter-effect";
import { AboutUs } from "../components/AboutUs";
import { useEffect, useRef, useState } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  const myRef = useRef(null);

  const [OpenAbout, setOpenAbout] = useState(false);

  return (
    <div
      onWheel={(e) => {
        if (e.deltaY < 150) {
          //   navigate("/package");
        }
      }}
      className="Homepage w-full overflow-hidden relative h-screen flex flex-col justify-center"
    >
      <Header />
      <div className="w-full z-20 flex justify-center  sm:mt-[7rem] relative PopUPAnimation items-center">
        <div className="bg-[#FF8311] w-[10rem] h-[0.4rem] text-[#FF8311]"></div>
        <img src={Logo} alt="" className="w-[16rem] h-full  sm:w-[25rem] " />
        <div className="bg-[#FF8311] ml-[1rem] h-[0.4rem] w-[10rem] text-[#FF8311]"></div>
      </div>
      <div className="z-20 text-center text-[#fff] PopUPAnimation counting text-xl mt-[1rem]">
        <Typewriter
          options={{
            strings: [
              "Constantly Growing Network",
              "Fastest Proxy Ever",
              "Global Presence",
            ],
            delay: 200,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="w-full bg-gradient-to-br from-gray-700/20 via-gray-900/20 to-black/80 h-screen absolute z-[18]">
        {" "}
      </div>
      <div className="z-20 text-center text-[#fff] counting flex justify-center text-xl  PopUPAnimation mt-[3rem]">
        <button className="bg-[#323639]/80 px-[4rem] flex  items-center hover:scale-105 shadow-2xl space-x-2 textbutton py-[0.7rem] hover:border-[#FF8311] duration-300 	 rounded-[52.11px] border-[#78818A] border-[2px]">
          <span>LOGIN OR JOIN</span>
          <img src={NextButton} className={"w-[1rem] h-[1rem]"} alt=""></img>
        </button>
      </div>
      <div className="SpaceAnimationFrist">
        <img
          src={Rocket}
          alt=""
          className="w-[65rem] mb-[-5rem] sm:mb-[-19.5rem] ml-[-5rem] sm:ml-0 z-10 absolute bottom-0  SpaceAnimation"
        />
      </div>
      <div>
        <img
          src={MoonIcon}
          alt=""
          className="w-[55rem] absolute bottom-0 opacity-80 MoonAnimation"
        />
      </div>
      <div className="z-20 hidden sm:flex absolute space-x-4 PopUPAnimation  bottom-[2rem] counting right-[4rem] text-[1.3rem] text-[#fff]">
        <button
          onClick={() => {
            navigate("/package");
          }}
        >
          Package
        </button>
        <button
          onClick={() => {
            setOpenAbout(!OpenAbout);
          }}
        >
          About Us
        </button>
      </div>

      {OpenAbout ? <AboutUs open={setOpenAbout} /> : null}
    </div>
  );
}

export default Homepage;
