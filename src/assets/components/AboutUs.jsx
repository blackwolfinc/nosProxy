import React from "react";
import NextButton from "../img/icon/Close.webp";
export const AboutUs = (data) => {
  console.log(data);
  return (
    <div className="w-screen h-screen bg-[#323639]/80 absolute z-[30] md:px-[5.8rem] md:py-[6rem]">
      <div className="bg-[#323639] w-full h-full md:rounded-2xl  p-[1rem] md:p-[3rem] md:border-[8px] overflow-hidden overflow-y-auto border-[#C3752D] relative">
        <button
          onClick={() => {
            data.open(false);
          }}
          className="flex absolute right-[0.8rem] top-[0.8rem]"
        >
          <img src={NextButton} className={"w-[2rem] h-[2rem]"} alt=""></img>
        </button>
        <h1 className="mt-[2rem] text-6xl counting text-[#fff]">About Us</h1>
        <hr className="border-[#FFFFFF]/40 my-[2rem]" />
        <div className="flex flex-col overflow-y-hidden ">
          <p className="textbutton text-xl tracking-[5.5px] leading-10 text-[#FFFFFF]">
            <span className="counting text-3xl text-[#C3752D]"> NOSPROXY</span>{" "}
            is the world's fastest and most reliable proxy development company.{" "}
            We have a team of 30+ engineers from all corners of the globe, and
            we'rededicated to helping businesses of all sizes achieve their
            online goals.
          </p>
          <br />
          <p className="textbutton text-xl tracking-[5.5px] leading-10 text-[#FFFFFF]">
            Our network consists of over 60,000 IPs in 5 data centers around the
            world – so you'll never be limited by bottlenecks again. And because
            we believe in privacy and its availability to all, we work with some
            of the top ISPs in the United States.
          </p>
          <br />
          <p className="textbutton text-xl tracking-[5.5px] leading-10 text-[#FFFFFF]">
            No matter what your business focus or needs are, we have a solution
            for you.
          </p>
        </div>
      </div>
    </div>
  );
};
