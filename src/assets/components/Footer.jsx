import React from "react";
import {  useNavigate } from "react-router-dom";

export const Footer = (props) => {

    const navigate = useNavigate()
  return (
    <div className="flex md:space-x-4  flex-col md:flex-row  px-[0rem] md:pb-[2rem]   mt-[-1rem] bg-[#323639]  items-center justify-around  z-[9920]  text-[1.3rem] text-[#fff]">
      <div className="flex scale-75 md:scale-100 space-x-4">
        <button
          onClick={() => {
            navigate("/package");
          }}
          className="bg-[#323639]/80 px-[2rem] md:px-[4rem] flex   items-center hover:scale-105 shadow-2xl space-x-2 textbutton py-[0.7rem] hover:border-[#FF8311] duration-300 	 rounded-[52.11px] border-[#78818A] border-[2px]"
        >
          Package
        </button>
        <button
          onClick={() => {
            props.setOpenAbout(!props.OpenAbout);
          }}
          className="bg-[#323639]/80 px-[2rem] md:px-[4rem] flex   items-center hover:scale-105 shadow-2xl space-x-2 textbutton py-[0.7rem] hover:border-[#FF8311] duration-300 	 rounded-[52.11px] border-[#78818A] border-[2px]"
        >
          About Us
        </button>
      </div>
     <div className="flex flex-col scale-75 md:scale-100  mt-[2rem] md:mt-0 text-center md:text-left"> 
    
     <a
        className="hover:scale-95 duration-200 ease-in-out uppercase font-light hover:text-[#FF8311]"
        href="mailto:info@nosproxy.com"
        type="Email"
      >
      
        Email : info@nosproxy.com
      </a>
      <p className="text-[12px] font-extralight">© 2023 Nos-Proxy</p>
      </div>
    
    </div>
  );
};
