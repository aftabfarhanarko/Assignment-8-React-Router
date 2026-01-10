import { ArrowDownToLine, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const DisplayAllApp = ({ data, index }) => {
  const { image, title, downloads, ratingAvg, _id } = data;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link to={`/appDetlics/${_id}`} className="block h-full">
        <div className="h-full bg-base-100/60 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-xl overflow-hidden relative flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
          
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent z-10 opacity-60" />
             <img 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              src={image} 
              alt={title} 
            />
            
            {/* Overlay Badge */}
            <div className="absolute top-4 right-4 z-20 bg-base-100/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border border-white/20 flex items-center gap-1">
              <Star size={12} className="text-orange-400 fill-orange-400" />
              <span>{ratingAvg}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow relative z-20 -mt-10">
            <div className="bg-base-100 p-4 rounded-2xl shadow-lg border border-base-200/50 flex-grow flex flex-col">
              <h2 className="text-xl font-bold mb-3 line-clamp-1 group-hover:text-primary transition-colors">{title}</h2>
              
              <div className="mt-auto space-y-4">
                <div className="flex items-center justify-between text-sm text-base-content/60 font-medium">
                  <div className="flex items-center gap-1.5 bg-base-200/50 px-3 py-1.5 rounded-lg">
                    <ArrowDownToLine size={14} />
                    <span>{downloads}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-orange-400 bg-orange-50 px-3 py-1.5 rounded-lg">
                    <Star size={14} className="fill-orange-400" />
                    <span>Rating</span>
                  </div>
                </div>

                <div className="w-full py-3 rounded-xl bg-base-content/5 text-base-content/70 font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DisplayAllApp;
