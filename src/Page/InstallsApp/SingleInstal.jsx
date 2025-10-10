import { ArrowDownToLine } from "lucide-react";
import { Star } from "lucide-react";
// Tostfy
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleInstal = ({ apps, setMyApp }) => {

   const { image, companyName, downloads, ratingAvg, size } = apps;

  const handelunstall = (data) => {
     toast.success("✅ App Uninstall successfully!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  const findes = JSON.parse(localStorage.getItem("items"));
  const ubdeatValue = findes.filter((app) => app.id !== data.id);
  setMyApp(ubdeatValue)
  localStorage.setItem("items", JSON.stringify(ubdeatValue));

  };
  
  return (
    <div>
      <div className="mt-7 bg-base-300 p-3 rounded-xl flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div>
            <img className="h-[80px] w-[80px] rounded-lg" src={image}></img>
          </div>
          <div>
            <h1 className="text-xl  ">Name : {companyName}</h1>
            <div className="flex gap-5 mt-1">
              <span className="flex  text-green-500 text-md items-center font-semibold">
                <ArrowDownToLine className="h-4" />
                {downloads}
              </span>
              <span className="flex gap-1 text-orange-500 text-md items-center  font-semibold">
                <Star className="h-4" />
                {ratingAvg}
              </span>
              <span className="text-md ">{size} MB</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => handelunstall(apps)}
          className="btn btn-accent text-white px-5 shadow-2xl"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default SingleInstal;
