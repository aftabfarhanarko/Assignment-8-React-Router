import React from "react";

const AppLoder = () => {
  return (
    <div className="min-h-[70vh] bg-white flex col-span-4 flex-col justify-center items-center gap-4 ">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-blue-600 font-semibold">Loading...</p>
    </div>
  );
};

export default AppLoder;
