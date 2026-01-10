import React, { useState } from "react";
import { getItem } from "../../Components/VanilaJS/vanilajs";
import SingleInstal from "./SingleInstal";
import InstalPageError from "../InstalPageError/InstalPageError";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Package, ArrowUpDown } from "lucide-react";

const InstallsApp = () => {
  const [myApp, setMyApp] = useState(() => getItem());

  const handleSort = (names) => {
    if (names === "Low-High") {
      const sortByInstallApp = [...myApp].sort((a, b) => a.size - b.size);
      setMyApp(sortByInstallApp);
    }
    if (names === "High-Low") {
      const sortLowToHighApp = [...myApp].sort((a, b) => b.size - a.size);
      setMyApp(sortLowToHighApp);
    }
  };

  return (
    <div className="bg-base-100 min-h-screen relative overflow-hidden">
       {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-md border border-base-content/10 mb-6 text-sm font-medium text-primary"
          >
            <Sparkles size={16} />
            <span>My Collection</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight"
          >
            Your Installed Apps
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-base-content/60 max-w-2xl mx-auto"
          >
            Manage your personal library of installed applications.
          </motion.p>
        </div>

        {/* Controls Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-base-100/60 backdrop-blur-xl p-4 rounded-[2rem] border border-white/20 shadow-lg"
        >
          <div className="flex items-center gap-3 px-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Package size={20} />
            </div>
            <h2 className="text-lg font-bold text-base-content">
              {myApp.length} <span className="text-base-content/50 font-normal">Apps Installed</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-48">
              <select 
                onChange={(e) => handleSort(e.target.value)}
                className="select select-bordered w-full rounded-xl bg-base-200/50 border-transparent focus:border-primary focus:outline-none"
              >
                <option disabled selected>Sort by Size</option>
                <option value="Low-High">Size: Low to High</option>
                <option value="High-Low">Size: High to Low</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-base-content/50">
                <ArrowUpDown size={16} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* App List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {myApp.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <InstalPageError />
              </motion.div>
            ) : (
              myApp.map((apps) => (
                <SingleInstal
                  apps={apps}
                  key={apps.id}
                  setMyApp={setMyApp}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default InstallsApp;
;
