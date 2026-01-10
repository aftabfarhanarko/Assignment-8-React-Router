import { Trash2, Download, Star, HardDrive, Smartphone } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const SingleInstal = ({ apps, setMyApp }) => {
  const { image, companyName, title, downloads, ratingAvg, size } = apps;

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
    setMyApp(ubdeatValue);
    localStorage.setItem("items", JSON.stringify(ubdeatValue));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: -20 }}
      whileHover={{ y: -2 }}
      className="bg-base-100/60 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* App Icon */}
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            className="h-24 w-24 rounded-2xl object-cover shadow-md relative z-10 transform group-hover:scale-105 transition-transform duration-300" 
            src={image} 
            alt={title || companyName} 
          />
        </div>

        {/* App Info */}
        <div className="flex-1 w-full text-center sm:text-left">
          <h3 className="text-xl font-bold text-base-content mb-1 group-hover:text-primary transition-colors">
            {title || companyName}
          </h3>
          <p className="text-sm text-base-content/60 mb-4 flex items-center justify-center sm:justify-start gap-2">
            <Smartphone size={14} />
            {companyName}
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-base-200/50 text-base-content/80">
              <Download size={14} className="text-primary" />
              <span className="font-medium">{downloads}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-base-200/50 text-base-content/80">
              <Star size={14} className="text-warning fill-warning" />
              <span className="font-medium">{ratingAvg}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-base-200/50 text-base-content/80">
              <HardDrive size={14} className="text-secondary" />
              <span className="font-medium">{size} MB</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="self-center sm:self-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handelunstall(apps)}
            className="btn btn-error btn-outline btn-sm sm:btn-md gap-2 rounded-xl shadow-sm hover:shadow-red-500/20"
          >
            <Trash2 size={18} />
            <span className="hidden sm:inline">Uninstall</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleInstal;
