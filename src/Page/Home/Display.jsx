import React from 'react';
import google from "../../assets/Google_Play_2022_icon.svg.png";
import app from "../../assets/App_Store_(iOS).svg.webp";
import banner from "../../assets/hero.png";

const Display = () => {
    return (
        <div className=''>
             <div className="text-center  mt-20 max-w-[1250px] mx-auto md-20 ">
        <div className=" max-w-[800px] mx-auto px-2 md:px-0">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-700">
            We Build <br />
            <span className="text-purple-600"> Productive </span>Apps
          </h1>
          <p className="mt-6 text-lg text-gray-500">
            Hero IO — Organize ideas, boost productivity, collaborate
            seamlessly, plan smarter, track progress, sync across devices,
            manage tasks, set reminders, hit goals, stay focused, work faster,
            reduce chaos, build habits, achieve more, and make work feel like
            flow.
          </p>

          <div className="mt-7  gap-4 ">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="btn py-6 px-5 rounded-lg shadow-xl border-2"
              >
                <img className="w-[30px]" src={google}></img>
                Google Play
              </button>
            </a>
            <a
              className="ml-5"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="submit"
                className="btn py-6 px-5 rounded-lg shadow-xl border-2"
              >
                <img className="w-[30px]" src={app}></img>
                App Store
              </button>
            </a>
          </div>
          <img className="mt-10" src={banner}></img>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] w-full text-white px-1 md:px-0">
        <div className="max-w-[1250px] mx-auto text-center py-20">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-around mt-10">
            <div>
              <p className="text-[13px]">Total Downloads</p>
              <h1 className="text-2xl md:text-5xl font-bold mt-3">29.6M</h1>
              <p className="text-[11px] md:text-[13px] mt-3">
                21% more than last month
              </p>
            </div>
            <div>
              <p className="text-[13px]">Total Reviews</p>
              <h1 className="text-2xl md:text-5xl font-bold mt-3">998K</h1>
              <p className="text-[11px] md:text-[13px] mt-3">
                46% more than last month
              </p>
            </div>
            <div>
              <p className="text-[13px]">Active Apps</p>
              <h1 className="text-2xl md:text-5xl font-bold mt-3">345+</h1>
              <p className="text-[11px] md:text-[13px] mt-3">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Display;