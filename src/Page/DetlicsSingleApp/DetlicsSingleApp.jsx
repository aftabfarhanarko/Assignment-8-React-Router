import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router";
import { getItem, setItems } from "../../Components/VanilaJS/vanilajs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from "../Chart/Chart";
import { useInView } from "react-intersection-observer";
import { 
  Download, Star, Info, Shield, Calendar, Globe, Share2, ArrowLeft, 
  CheckCircle, Smartphone, Award, Zap, ChevronRight 
} from "lucide-react";
import { motion } from "framer-motion";

const DetlicsSingleApp = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const convartId = parseInt(id);
  const data = useLoaderData();
  const findApp = data.find((app) => app.id === convartId);
  
  // Related items logic (exclude current app, pick random 3)
  const relatedApps = data.filter(app => app.id !== convartId).sort(() => 0.5 - Math.random()).slice(0, 4);

  useEffect(() => {
    const getItems = getItem();
    const isExist = getItems.find((app) => app.id == id);
    setIsInstalled(!!isExist);
    window.scrollTo(0, 0);
  }, [id]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleInstall = () => {
    setIsInstalled(true);
    setItems(findApp);
    toast.success("✅ App installed successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  if (!findApp) return <div className="min-h-screen flex items-center justify-center">App not found</div>;

  return (
    <div className="bg-base-100 min-h-screen pb-20 overflow-x-hidden">
      {/* Premium Hero Section */}
      <div className="relative bg-base-100 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-[1250px] mx-auto px-6 pt-8 pb-16">
          {/* Breadcrumb */}
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-primary transition-colors mb-8 group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* App Icon / Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-[350px] flex-shrink-0"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <img
                  src={findApp.image}
                  alt={findApp.title}
                  className="relative rounded-3xl w-full aspect-square object-cover shadow-2xl ring-1 ring-base-content/5 z-10"
                />
                <div className="absolute top-4 right-4 z-20">
                   <button className="btn btn-circle btn-sm bg-base-100/80 backdrop-blur-md border-none hover:bg-white shadow-lg">
                      <Share2 className="w-4 h-4 text-base-content" />
                   </button>
                </div>
              </div>
            </motion.div>

            {/* App Details */}
            <div className="flex-1 w-full pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    Productivity
                  </span>
                  {findApp.ratingAvg > 4.5 && (
                    <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3 h-3" /> Editor's Choice
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-4 tracking-tight leading-tight">
                  {findApp.title}
                </h1>
                
                <p className="text-lg text-base-content/60 mb-8 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </span>
                  Developed by <span className="text-base-content font-semibold">{findApp.companyName}</span>
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                   <div className="bg-base-100/50 backdrop-blur-sm p-4 rounded-2xl border border-base-content/5">
                      <div className="text-sm text-base-content/50 mb-1">Downloads</div>
                      <div className="text-xl font-bold flex items-center gap-2">
                         <Download className="w-5 h-5 text-primary" /> {findApp.downloads}
                      </div>
                   </div>
                   <div className="bg-base-100/50 backdrop-blur-sm p-4 rounded-2xl border border-base-content/5">
                      <div className="text-sm text-base-content/50 mb-1">Rating</div>
                      <div className="text-xl font-bold flex items-center gap-2">
                         <Star className="w-5 h-5 text-warning fill-current" /> {findApp.ratingAvg}
                      </div>
                   </div>
                   <div className="bg-base-100/50 backdrop-blur-sm p-4 rounded-2xl border border-base-content/5">
                      <div className="text-sm text-base-content/50 mb-1">Size</div>
                      <div className="text-xl font-bold text-base-content">
                         {findApp.size} MB
                      </div>
                   </div>
                   <div className="bg-base-100/50 backdrop-blur-sm p-4 rounded-2xl border border-base-content/5">
                      <div className="text-sm text-base-content/50 mb-1">Version</div>
                      <div className="text-xl font-bold text-base-content">
                         1.0.2
                      </div>
                   </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleInstall} 
                    disabled={isInstalled}
                    className={`btn btn-lg px-8 rounded-2xl border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                      isInstalled 
                        ? 'bg-success text-white hover:bg-success/90' 
                        : 'bg-gradient-to-r from-primary to-secondary text-white'
                    }`}
                  >
                    {isInstalled ? (
                      <>
                        <CheckCircle className="w-6 h-6" /> Installed
                      </>
                    ) : (
                      <>
                        <Download className="w-6 h-6" /> Install Now
                      </>
                    )}
                  </button>
                  <button className="btn btn-lg px-8 rounded-2xl btn-ghost border border-base-content/10 hover:bg-base-200">
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
           
           {/* About Section */}
           <motion.section 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Info size={20} />
                 </div>
                 About this app
              </h2>
              <div className="prose prose-lg max-w-none text-base-content/80 leading-relaxed">
                 <p>{findApp.description}</p>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
              </div>
           </motion.section>

           {/* Features Grid (Mock) */}
           <motion.section 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <Zap size={20} />
                 </div>
                 Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Real-time Synchronization', 'Advanced Analytics', 'Cloud Backup', 'Multi-user Support'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-base-200/50 border border-base-content/5">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
           </motion.section>

           {/* Ratings & Reviews */}
           <motion.section 
             ref={ref}
             initial={{ opacity: 0, y: 20 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.5 }}
             className="bg-base-200/30 p-8 rounded-3xl border border-base-content/5"
           >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
                      <Star size={20} />
                   </div>
                   Ratings & Reviews
                </h2>
                <button className="btn btn-ghost btn-sm text-primary">See All</button>
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-center">
                 <div className="text-center md:text-left">
                    <div className="text-7xl font-bold text-base-content">{findApp.ratingAvg}</div>
                    <div className="rating rating-md gap-1 my-2">
                       {[1,2,3,4,5].map((s) => (
                         <input key={s} type="radio" name="rating-app" className="mask mask-star-2 bg-warning" checked={s <= Math.round(findApp.ratingAvg)} readOnly />
                       ))}
                    </div>
                    <div className="text-sm font-medium text-base-content/50">{findApp.reviews} Verified Reviews</div>
                 </div>
                 <div className="w-full h-[250px] flex-1">
                    {inView && <Chart app={findApp.ratings} />}
                 </div>
              </div>

              {/* Review Cards */}
              <div className="mt-10 space-y-4">
                 {[1, 2].map((i) => (
                    <div key={i} className="p-6 rounded-2xl bg-base-100 border border-base-content/5 shadow-sm">
                       <div className="flex items-center gap-3 mb-3">
                          <div className="avatar">
                             <div className="w-10 rounded-full">
                                <img src={`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} alt="User" />
                             </div>
                          </div>
                          <div>
                             <h4 className="font-bold text-sm">Alex Johnson</h4>
                             <div className="text-xs opacity-50">2 hours ago</div>
                          </div>
                          <div className="ml-auto flex gap-0.5">
                             {[1,2,3,4,5].map(star => <Star key={star} size={12} className="text-warning fill-current" />)}
                          </div>
                       </div>
                       <p className="text-base-content/80 text-sm leading-relaxed">
                          "This app completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed. Highly recommended!"
                       </p>
                    </div>
                 ))}
              </div>
           </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
           {/* App Information Card */}
           <div className="bg-base-100 p-6 rounded-3xl border border-base-content/10 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <Shield className="w-5 h-5 text-success" /> App Info
              </h3>
              <ul className="space-y-5">
                 <li className="flex justify-between items-center">
                    <span className="text-base-content/60 text-sm">License</span>
                    <span className="font-semibold text-sm bg-base-200 px-3 py-1 rounded-lg">Free</span>
                 </li>
                 <li className="flex justify-between items-center">
                    <span className="text-base-content/60 text-sm">Category</span>
                    <span className="font-semibold text-sm">Productivity</span>
                 </li>
                 <li className="flex justify-between items-center">
                    <span className="text-base-content/60 text-sm">Languages</span>
                    <span className="font-semibold text-sm text-right">English, Spanish</span>
                 </li>
                 <li className="flex justify-between items-center">
                    <span className="text-base-content/60 text-sm">Age Rating</span>
                    <span className="font-semibold text-sm">4+</span>
                 </li>
                 <li className="flex justify-between items-center">
                    <span className="text-base-content/60 text-sm">Updated</span>
                    <span className="font-semibold text-sm">Oct 20, 2025</span>
                 </li>
              </ul>
              
              <div className="divider my-6"></div>
              
              <h3 className="text-lg font-bold mb-4">You might also like</h3>
              <div className="space-y-4">
                 {relatedApps.map((app) => (
                    <Link to={`/appDetlics/${app.id}`} key={app.id} className="group flex gap-4 items-center p-2 rounded-xl hover:bg-base-200 transition-all">
                       <img src={app.image} alt={app.title} className="w-14 h-14 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                       <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm truncate group-hover:text-primary transition-colors">{app.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-base-content/60 mt-1">
                             <Star className="w-3 h-3 text-warning fill-current" /> {app.ratingAvg}
                             <span>•</span>
                             <span>{app.companyName}</span>
                          </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-base-content/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DetlicsSingleApp;
//
