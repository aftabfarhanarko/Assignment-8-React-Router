import React from "react";
import google from '../../assets/Google_Play_2022_icon.svg.png'
import app from '../../assets/App_Store_(iOS).svg.webp';
import banner from '../../assets/hero.png';

const Home = () => {
  return (
    <div className="text-center  mt-20 w-[800px] mx-auto md-20">
      <h1 className="text-6xl font-semibold ">
        We Build <br />
        <span className="text-purple-600"> Productive </span>Apps
      </h1>
      <p className="mt-6 text-lg text-gray-500">
        Hero IO — Organize ideas, boost productivity, collaborate seamlessly,
        plan smarter, track progress, sync across devices, manage tasks, set
        reminders, hit goals, stay focused, work faster, reduce chaos, build
        habits, achieve more, and make work feel like flow.
      </p>

      <div className="mt-7  gap-4 ">
        <a href="https://play.google.com/store/games?hl=en" target="_blank" rel="noopener noreferrer">
          <button type="submit" className="btn py-6 px-5 rounded-lg shadow-xl border-2">
            <img className="w-[30px]" src={google}></img>
           Google Play
          </button>
        </a>
        <a className="ml-5" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <button type="submit" className="btn py-6 px-5 rounded-lg shadow-xl border-2">
            <img className="w-[30px]" src={app}></img>
           App Store
          </button>
        </a>
      </div>
      <img className="mt-10" src={banner}></img>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
