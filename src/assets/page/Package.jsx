import { Header } from "../components/Header";
import { useEffect, useRef, useState } from "react";
import { Navigate, Route, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Rocket from "../img/common/Rocket2.webp";
import NextButton from "../img/icon/ShoppingCart.webp";
import FullMoon from "../img/common/FullMoon.webp";

function Package() {
  const navigate = useNavigate();
  const myRef = useRef(null);

  const [OpenAbout, setOpenAbout] = useState(false);
  const [Nav1, setNav1] = useState(null);
  const [Nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(Slider1);
    setNav2(Slider2);
  }, [Nav1]);

  const [Slider1, setSlider1] = useState();
  const [Slider2, setSlider2] = useState();

  const slider1 = useRef();
  const slider2 = useRef();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };
  const setting1 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className="Package w-full   lg:overflow-y-hidden    overflow-x-hidden relative h-screen flex flex-col justify-center">
      <Header counter={false} />
      <img
        src={FullMoon}
        alt=""
        className=" absolute top-[20vh]    MoonAnimationPack  "
      />
      <div className=" PopUPAnimation2 counting tracking-[5.5px] z-20  mt-[22rem] md:mt-[6rem]  text-center text-4xl  lg:text-6xl text-[#FFFFFF]">
        Packages
      </div>
      <div className="relativ text-center   PopUPAnimation2 justify-center ">
        <Slider asNavFor={Nav2} ref={(slider) => setSlider1(slider)}>
          <div className="flex w-full scale-90 lg:scale-100  lg:p-10  justify-center text-center mt-[2rem] ">
          <div className="w-full flex flex-col md:flex-row justify-center group ">
              <div className="bg-[#323639]/90 border-[4px] min-h-[16rem] flex-col lg:flex-row justify-between p-[2rem]    flex w-full lg:w-6/12 2xl:w-9/12 border-[#4AB3FF]/80 rounded-[10px]">
                <div className="flex flex-col  lg:ml-9 2xl:ml-[17rem]">
                  <div className="bg-[#323639] py-2 px-4 rounded-md">
                    <span className="counting text-center text-4xl text-[#4AB3FF]/80">
                      STANDARD
                    </span>
                  </div>
                  <div className="flex flex-col mt-[1.5rem]">
                    <span className="counting text-center lg:text-left text-4xl lg:text-6xl text-[#FFFFFF]/80">
                      256 - 1024 <span className="text-[#4AB3FF]">IPs</span>
                    </span>
                    <span className=" mt-[1rem] text-left textbutton tracking-[5.5px] text-center  text-xl text-[#FFFFFF]/80">
                      This will cost you{" "}
                      <span className="text-[#4AB3FF] counting">$0.70 </span>per
                      IP
                    </span>
                    <span className="text-white/60 text-left textbutton uppercase tracking-[1.5px] mt-[1rem] text-[12px]">
                    Top business level residential ISP as AT&T or COX
                  </span>
                  </div>
                </div>
                <div className="w-full lg:w-2/12 flex items-center justify-center mt-[2rem] lg:mt-0">
                  <button className="bg-[#323639] p-4 border-[#4AB3FF] border-[2px] hover:scale-105 duration-300  rounded-md">
                    <img
                      src={NextButton}
                      className={"w-[3rem] h-[3rem]"}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="border-[#4AB3FF]/80 md:hidden group-hover:flex group-hover:block group-hover:duration-300  textbutton space-y-3 justify-center  mb-[1rem] md:mb-0  tracking-[4.5px]  flex-col  font-semibold bg-[#323639] border-[3px] w-full md:w-3/12 md:ml-[1rem] mt-4 md:mt-0 rounded-md p-4 text-white text-center">
                <p >Unlimited Data</p>
                <p>100GBPS network</p>
                <p>Residential ASN</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-row  scale-90 lg:scale-100  lg:p-10  justify-center text-center mt-[2rem] md:mt-[3rem]">
            <div className="w-full flex flex-col md:flex-row justify-center group ">
              <div className="bg-[#323639]/90   border-[4px] min-h-[16rem]  flex-col lg:flex-row  justify-between p-[2rem]     flex w-full lg:w-6/12 2xl:w-9/12 border-[#E72013]/80 rounded-[10px]">
                <div className="flex flex-col   lg:ml-9 2xl:ml-[17rem]">
                  <div className="bg-[#323639]  py-2 px-4 rounded-md">
                    <span className="counting text-center text-4xl text-[#E72013]/80">
                      PRO
                    </span>
                  </div>
                  <div className="flex flex-col mt-[1.5rem]">
                    <span className="counting text-center lg:text-left text-4xl lg:text-6xl text-[#FFFFFF]/80">
                      1024 - 2048 <span className="text-[#E72013]">IPs</span>
                    </span>

                    <span className=" mt-[1rem] text-left textbutton tracking-[5.5px]   text-xl text-[#FFFFFF]/80">
                      This will cost you{" "}
                      <span className="text-[#E72013] counting">$0.60 </span>per
                      IP
                    </span>
                  </div>
                  <span className="text-white/60 text-left textbutton uppercase tracking-[1.5px] mt-[1rem] text-[12px]">
                    Top business level residential ISP as AT&T or COX
                  </span>
                </div>
                <div className="w-full lg:w-2/12 flex items-center justify-center mt-[2rem] lg:mt-0">
                  <button className="bg-[#323639] p-4 border-[#E72013] border-[2px] hover:scale-105 duration-300 rounded-md">
                    <img
                      src={NextButton}
                      className={"w-[3rem] h-[3rem]"}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="border-[#E72013]/80 md:hidden group-hover:flex group-hover:block group-hover:duration-300  textbutton space-y-3 justify-center  mb-[1rem] md:mb-0  tracking-[4.5px]  flex-col  font-semibold bg-[#323639] border-[3px] w-full md:w-3/12 md:ml-[1rem] mt-4 md:mt-0 rounded-md p-4 text-white text-center">
                <p >Unlimited Data</p>
                <p>100GBPS network</p>
                <p>Residential ASN</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-row  scale-90 lg:scale-100  lg:p-10  justify-center text-center mt-[2rem] md:mt-[3rem]">
            <div className="w-full flex flex-col md:flex-row justify-center group ">
              <div className="bg-[#323639]/90   border-[4px] min-h-[16rem]  flex-col lg:flex-row  justify-between p-[2rem]     flex w-full lg:w-6/12 2xl:w-9/12 border-[#47C9DB]/80 rounded-[10px]">
              <div className="flex flex-col   lg:ml-9 2xl:ml-[17rem]">
                  <div className="bg-[#323639]  py-2 px-4 rounded-md">
                    <span className="counting text-center text-4xl text-[#47C9DB]/80">
                      STARTER
                    </span>
                  </div>
                  <div className="flex flex-col mt-[1.5rem]">
                    <span className="counting text-center lg:text-left text-4xl lg:text-6xl text-[#FFFFFF]/80">
                      1-256 <span className="text-[#47C9DB]">IPs</span>
                    </span>
                    <span className=" mt-[1rem] text-left textbutton tracking-[5.5px] text-center  text-xl text-[#FFFFFF]/80">
                      This will cost you{" "}
                      <span className="text-[#47C9DB] counting">$1.00 </span>per
                      IP
                    </span>
                    <span className="text-white/60 text-left textbutton uppercase tracking-[1.5px] mt-[1rem] text-[12px]">
                    Top business level residential ISP as AT&T or COX
                  </span>
                  </div>
                </div>
                <div className="w-full lg:w-2/12 flex items-center justify-center mt-[2rem] lg:mt-0">
                  <button className="bg-[#323639] p-4 border-[#47C9DB] border-[2px] hover:scale-105 duration-300 z-50  rounded-md">
                    <img
                      src={NextButton}
                      className={"w-[3rem] h-[3rem]"}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="border-[#47C9DB]/80 md:hidden group-hover:flex group-hover:block group-hover:duration-300  textbutton space-y-3 justify-center  mb-[1rem] md:mb-0  tracking-[4.5px]  flex-col  font-semibold bg-[#323639] border-[3px] w-full md:w-3/12 md:ml-[1rem] mt-4 md:mt-0 rounded-md p-4 text-white text-center">
                <p >Unlimited Data</p>
                <p>100GBPS network</p>
                <p>Residential ASN</p>
              </div>
            </div>
          </div>
          <div className="flex w-full  scale-90 lg:scale-100   lg:p-10  justify-center text-center mt-[3rem]">
          <div className="w-full flex flex-col md:flex-row justify-center group ">
              <div className="bg-[#323639]/90 border-[4px] min-h-[16rem] flex-col lg:flex-row   justify-between p-[2rem]    flex w-full w-6/12 2xl:w-9/12 border-[#FF8311]/80 rounded-[10px]">
                <div className="flex flex-col  lg:ml-9 2xl:ml-[17rem]">
                  <div className="bg-[#323639] py-2 px-4 rounded-md">
                    <span className="counting text-center text-4xl text-[#FF8311]">
                      POPULAR
                    </span>
                  </div>
                  <div className="flex flex-col mt-[1.5rem]">
                    <span className="counting text-center lg:text-left text-4xl lg:text-6xl text-[#FFFFFF]/80">
                      2048+ <span className="text-[#FF8311]">IPs</span>
                    </span>
                    <span className=" mt-[1rem] text-left textbutton tracking-[5.5px] text-center  text-xl text-[#FFFFFF]/80">
                      This will cost you{" "}
                      <span className="text-[#FF8311] counting">$0.50 </span>per
                      IP
                    </span>
                    <span className="text-white/60 text-left textbutton uppercase tracking-[1.5px] mt-[1rem] text-[12px]">
                    Top business level residential ISP as AT&T or COX
                  </span>
                  </div>
                </div>
                <div className="w-full lg:w-2/12 flex items-center justify-center mt-[2rem] lg:mt-0">
                  <button className="bg-[#323639] p-4 border-[#FF8311] border-[2px]  hover:scale-105 duration-300  rounded-md">
                    <img
                      src={NextButton}
                      className={"w-[3rem] h-[3rem]"}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="border-[#FF8311]/80 md:hidden group-hover:flex group-hover:block group-hover:duration-300  textbutton space-y-3 justify-center  mb-[1rem] md:mb-0  tracking-[4.5px]  flex-col  font-semibold bg-[#323639] border-[3px] w-full md:w-3/12 md:ml-[1rem] mt-4 md:mt-0 rounded-md p-4 text-white text-center">
                <p >Unlimited Data</p>
                <p>100GBPS network</p>
                <p>Residential ASN</p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="flex justify-center mb-[1rem] mt-[-1.4rem]">
          <h1 className="text-white/60 text-sm font-semibold  px-[1rem] hover:scale-105 duration-300 ease-in-out">
            Experience lightning-fast speeds with our premium DC proxies, all
            while enjoying the reliability and capabilities of premium
            residential IP addresses
          </h1>
        </div>
        <div className="w-full self-center flex justify-center mt-[1rem] lg:mt-0 2xl:mt-[3rem] ">
          <di className="relative  w-9/12 block inline-block hidden lg:block">
            <Slider
              asNavFor={Nav1}
              ref={(slider) => setSlider2(slider)}
              slidesToShow={3}
              swipeToSlide={true}
              autoplaySpeed={5000}
              // autoplay={true}
              focusOnSelect={true}
              {...settings}
            >
              <div className="px-2">
                <div className="bg-[#323639]/80 scale-90 2xl:scale-100 hover:scale-100 duration-300 flex-col border-[#4AB3FF]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#4AB3FF] mb-[1rem]">
                    STANDARD
                  </h3>
                  <span className="counting lg:tracking-[5.5px]   text-sm text-[#fff]">
                    256-1024 <span className="text-[#4AB3FF] text-sm">IPs</span>
                  </span>
                      
                </div>
              </div>

              <div className="px-2">
                <div className="bg-[#323639]/80  scale-90 2xl:scale-100  hover:scale-100 duration-300  flex-col border-[#E72013]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#E72013] mb-[1rem]">
                    PRO
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]   text-sm text-[#fff]">
                    1024-2048{" "}
                    <span className="text-[#E72013] text-sm">IPs</span>
                  </span>
                </div>
              </div>

              <div className="px-2">
                <div className="bg-[#323639]/80  scale-90 2xl:scale-100 hover:scale-100 duration-300  flex-col border-[#47C9DB]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#47C9DB] mb-[1rem]">
                    STARTER
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]   text-sm text-[#fff]">
                    1-256 <span className="text-[#47C9DB] text-sm">IPs</span>
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-[#323639]/80 scale-90 2xl:scale-100  hover:scale-100 duration-300  flex-col border-[#FF8311]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#FF8311] mb-[1rem]">
                    POPULAR
                  </h3>
                  <span className="counting lg:tracking-[5.5px]  text-sm text-[#fff]">
                    2048+ <span className="text-[#FF8311] text-sm">IPs</span>
                  </span>
                </div>
              </div>
            </Slider>
          </di>
          <div className="relative  w-9/12 block inline-block lg:hidden block">
            <Slider
              asNavFor={Nav1}
              ref={(slider) => setSlider2(slider)}
              slidesToShow={3}
              swipeToSlide={true}
              autoplaySpeed={5000}
              // autoplay={true}
              focusOnSelect={true}
              {...setting1}
            >
              <div className="px-2">
                <div className="bg-[#323639]/80 scale-90 2xl:scale-100  duration-300 flex-col border-[#4AB3FF]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#4AB3FF] mb-[1rem]">
                    STANDARD
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]   text-sm text-[#fff]">
                    256-1024 <span className="text-[#4AB3FF] text-sm">IPs</span>
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-[#323639]/80  scale-90 2xl:scale-100   duration-300  flex-col border-[#E72013]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#E72013] mb-[1rem]">
                    PRO
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]   text-sm text-[#fff]">
                    1024-2048{" "}
                    <span className="text-[#E72013] text-sm">IPs</span>
                  </span>
                </div>
              </div>

              <div className="px-2">
                <div className="bg-[#323639]/80  scale-90 2xl:scale-100  duration-300  flex-col border-[#47C9DB]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#47C9DB] mb-[1rem]">
                    STARTER
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]  text-sm text-[#fff]">
                    1-256 <span className="text-[#47C9DB] text-sm">IPs</span>
                  </span>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-[#323639]/80 scale-90 2xl:scale-100   duration-300  flex-col border-[#FF8311]/80 border-[2px]  flex z-40 text-center lg:px-4 h-[8rem] justify-center items-center mx-0 lg:mx-[1rem] rounded-[5.9px]">
                  <h3 className="counting text-sm lg:text-2xl tracking-[5.5px]  text-[#FF8311] mb-[1rem]">
                    POPULAR
                  </h3>
                  <span className="counting  lg:tracking-[5.5px]  text-sm text-[#fff]">
                    2048+ <span className="text-[#FF8311] text-sm">IPs</span>
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
