import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import MoonIconFull from "../img/common/FullMoon.webp";
import Logo from "../img/common/Logo.png";
import NextButton from "../img/icon/Login.webp";
import Rocket from "../img/webp/Rocket.webp";
function Homepage() {
  const navigate = useNavigate();
  const myRef = useRef(null);
  const [OpenAbout, setOpenAbout] = useState(false);
  const [setFristLoad, setsetFristLoad] = useState(false);
 const [onScrolMobile, setonScrolMobile] = useState(false)

  useEffect(() => {
    if (setFristLoad == false) {
      setTimeout(() => {
        setsetFristLoad(true);
      }, 5000);
    }
  }, []);


  return (
    <div className="overflow-hidden">
      <div
        onScroll={(e) => {
          console.log(e)
          if (e.deltaY >= 60 && onScrolMobile === false  ) {
            setonScrolMobile(true)
          } else if (e.deltaY < 60 && onScrolMobile === true ) {
            setonScrolMobile(false)          }
        }}
        className="Homepage w-full   relative h-screen flex flex-col justify-center"
      >
        <Header data={onScrolMobile} />
        <div className="w-full z-50 flex justify-center mt-[6rem]  sm:mt-[7rem] relative PopUPAnimation items-center">
          <div className="bg-[#FF8311] w-[10rem] h-[0.4rem] text-[#FF8311]"></div>
          <img  src={Logo} alt="" className="w-[16rem] h-full  sm:w-[25rem]  " />
          <div className="bg-[#FF8311] ml-[1rem] h-[0.4rem] w-[10rem] text-[#FF8311]"></div>
        </div>
        <div className=" z-50  text-center text-[#fff] PopUPAnimation counting text-xl mt-[1rem]">
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
        <div className="w-full bg-gradient-to-br from-gray-700/20 via-gray-900/20 to-black/80  min-h-[107.7rem] 2xl:min-h-[114rem] absolute z-[45]"></div>
        <div className=" z-50 text-center text-[#fff] counting flex justify-center text-xl  PopUPAnimation mt-[3rem]">
          <button onClick={()=>{
            window.open('https://client.nosproxy.com/index.php?rp=/login','_blank')
        
          }} className="bg-[#323639]/80 px-[4rem] flex   items-center hover:scale-105 shadow-2xl space-x-2 textbutton py-[0.7rem] hover:border-[#FF8311] duration-300 	 rounded-[52.11px] border-[#78818A] border-[2px]">
            <span>LOGIN OR JOIN</span>
            <img src={NextButton} className={"w-[1rem] h-[1rem]"} alt=""></img>
          </button>
        </div>

        <div className="SpaceAnimationFrist ">
          <img
            src={Rocket}
            alt=""
            className="w-[65rem] mb-[-5rem] sm:mb-[-19.5rem] ml-[-5rem] sm:ml-0 z-40 absolute bottom-0   SpaceAnimation"
          />
        </div>
        <div className="hover:scale-5 ml-[-20rem] ">
          <img
            src={MoonIconFull}
            alt=""
            className="w-[85rem] mb-[-25rem] absolute bottom-0 z-10 opacity-70 MoonAnimation"
          />
        </div>

        {OpenAbout ? <AboutUs open={setOpenAbout} /> : null}
      </div>

      <div className="bg-[#323639]  w-full flex z-[5] h-[35rem]  md:h-[30rem] justify-center p-[4rem] ">
        <div className="z-[100] absolute  scale-75 md:scale-100 rounded-3xl mb-[-32rem] md:mb-[-20rem] bg-gradient-to-br from-[#323639] via-[#323639] to-[#51585c]  duration-500 ease-in-out  hover:scale-[0.8] md:hover:scale-105   flex-col w-full md:w-9/12 self-center flex py-[2rem] px-[2rem]  bottom-0 border-[#FF8311]/80  border-[4px] justify-center">
          <h1 className="font-semibold text-2xl text-white mt-[0.2rem] uppercase">
            Residential DC proxies
          </h1>
          <p className="text-white/60 mt-[1rem] md:mt-0">
            {" "}
            Top business level residential ISP as AT&T or COX
          </p>
          <hr className="my-[1rem] border-white/30" />
          <span className="text-white/80">
            Experience lightning-fast speeds with our premium DC proxies, all
            while enjoying the reliability and capabilities of premium
            residential IP addresses
          </span>
          <div className="flex justify-center flex-col md:flex-row items-center mt-[2rem] mb-[1rem]">
            <div className="flex w-full flex-col md:flex-row mb-[2rem] md:mb-0 justify-start  text-white/80 textbutton ">
              <span className="px-4 py-4 bg-[#4AB3FF]/20 font-semibold">
                Unlimited Data
              </span>
              <span className="px-4 py-4 bg-[#E72013]/20  font-semibold">
                100GBPS network
              </span>
              <span className="px-4 py-4 bg-[#47C9DB]/20  font-semibold">
                Residential ASN
              </span>
            </div>
            <button
              onClick={() => {
                navigate("/package");
              }}
              className="bg-[#323639] uppercase font-bold hover:bg-[#FF8311] hover:text-white text-[#FF8311] p-4 w-[10rem] border-[#FF8311] flex justify-center items-center border-[2px] hover:scale-105 duration-300 z-50  rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Footer setOpenAbout={setOpenAbout} OpenAbout={OpenAbout}/>
    </div>
  );
}

export default Homepage;
