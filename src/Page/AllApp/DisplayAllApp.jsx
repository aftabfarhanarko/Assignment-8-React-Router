import { ArrowDownToLine } from "lucide-react";

import reating from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const DisplayAllApp = ({ data }) => {
  const { image, title, downloads, ratingAvg,id } = data;
  return (
    <Link to={`/appDetlics/${id}`}>
      <div className="mt-10 bg-base-300 shadow-xl rounded-lg transition-transform duration-400 hover:-translate-y-10 md:hover:-translate-y-5 hover:shadow-2xl ">
        <div className="p-5">
          <img className="rounded-lg h-[290px] w-full" src={image}></img>
          <h2 className="mt-2 text-lg font-semibold">Name : {title}</h2>

          <div className="flex justify-between mt-4">
            <div className="text-[15px] flex  items-center text-green-400 bg-green-100 rounded-lg px-2 gap-1  ">
              <span className="text-[12px]">
                {" "}
                <ArrowDownToLine className="h-4" />
              </span>
              <p className=" text-[15px] font-semibold">{downloads}</p>
            </div>
            <div className="flex  items-center text-orange-400 bg-orange-100 rounded-lg  px-3 gap-2">
              <img className="h-[15px] text-green-400" src={reating}></img>
              <p className=" text-[15px] font-semibold">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DisplayAllApp;
