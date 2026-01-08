import React from "react";
import { ArrowDownToLine, Star, HardDrive, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const TrindingApp = ({ data }) => {
  const { image, title, downloads, ratingAvg, id, companyName, size, description } = data;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-base-100 rounded-3xl p-4 shadow-sm hover:shadow-2xl border border-base-200 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative h-[200px] mb-4 overflow-hidden rounded-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-3 right-3 bg-base-100/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
          {size} MB
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <div>
             <h2 className="text-lg font-bold text-base-content line-clamp-1" title={title}>
              {title}
            </h2>
            <div className="flex items-center text-xs text-base-content/50 mb-3">
               <Building2 className="w-3 h-3 mr-1" />
               <span className="line-clamp-1">{companyName}</span>
            </div>
           </div>
           <div className="flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-lg text-xs font-bold">
              <Star className="w-3 h-3 fill-current" />
              {ratingAvg}
           </div>
        </div>
        
        <p className="text-sm text-base-content/70 line-clamp-2 mb-4 leading-relaxed">
           {description}
        </p>

        <div className="mt-auto pt-4 border-t border-base-200">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-1 text-xs font-medium text-base-content/60">
                <ArrowDownToLine className="w-3 h-3" />
                {downloads}
             </div>
             
             <Link to={`/appDetlics/${id}`}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-sm btn-circle btn-primary text-white"
                >
                  <ArrowRight size={16} />
                </motion.button>
             </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrindingApp;
