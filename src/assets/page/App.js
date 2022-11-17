import { Header } from "../components/Header";
import Logo from "../img/common/Logo.png";
import MoonIcon from "../img/common/Moon.png";
import NextButton from "../img/icon/Login.png";
import Rocket from "../img/common/Rocket.png";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="Homepage w-full overflow-hidden relative h-screen flex flex-col justify-center">
      <Header />
      <div className="w-full z-20 flex justify-center mt-[7rem] relative PopUPAnimation items-center">
        <div className="bg-[#FF8311] w-[10rem] h-[0.4rem] text-[#FF8311]"></div>
        <img src={Logo} alt="" className="w-[25rem] " />
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
      <div className="z-20 text-center text-[#fff] counting flex justify-center text-xl PopUPAnimation mt-[3rem]">
        <button className="bg-[#323639]/80 px-[4rem] flex  items-center hover:scale-105  space-x-2 textbutton py-[0.7rem] hover:border-[#FF8311] duration-300	 rounded-[52.11px] border-[#78818A] border-[2px]">
          <span>LOGIN OR JOIN</span>
          <img src={NextButton} alt=""></img>
        </button>
      </div>
      <div>
        <img
          src={Rocket}
          alt=""
          className="w-[65rem] mb-[-19.5rem] z-10 absolute bottom-0 SpaceAnimation"
        />
      </div>
      <div>
        <img
          src={MoonIcon}
          alt=""
          className="w-[55rem] absolute bottom-0 opacity-80 MoonAnimation"
        />
      </div>
    </div>
  );
}

export default App;
