import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Display from "./Display";
import Stats from "../../Components/HomeSections/Stats";
import { 
  Features, Categories, Testimonials, Pricing, 
  Newsletter, Contact, TrustedBy, HowItWorks 
} from "../../Components/HomeSections/ExtraSections";
import TrindingApp from "../TrindingApp/TrindingApp";
import { Link } from "react-router";
import { TrendingUp, ArrowRight } from 'lucide-react';
import useProducts from "../../Components/LodingSpiner/lodingSpiner";

const CardSkeleton = () => (
  <div className="card bg-base-100 shadow-xl h-[400px] animate-pulse border border-base-200">
    <div className="h-[200px] bg-base-300 rounded-t-2xl w-full"></div>
    <div className="card-body p-6">
      <div className="h-4 bg-base-300 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-base-300 rounded w-1/2 mb-4"></div>
      <div className="h-16 bg-base-300 rounded w-full mb-4"></div>
      <div className="flex justify-between mt-auto">
        <div className="h-8 bg-base-300 rounded w-16"></div>
        <div className="h-8 bg-base-300 rounded w-8 rounded-full"></div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const { producat, loding } = useProducts();
  const slicesData = producat.slice(0, 8);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <Display />
      
      {/* Overlapping Stats Section */}
      <div className="relative z-20">
        <Stats />
      </div>
      
      <TrustedBy />
      <HowItWorks />
      <Categories />

      {/* Trending Apps Section */}
      <div className="py-24 bg-base-100 relative">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
         
        <div className="max-w-[1250px] mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-4"
            >
              <TrendingUp size={16} /> Trending Now
            </motion.div>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-bold text-base-content mb-4"
            >
              Hot This Week
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-base-content/60 max-w-2xl mx-auto"
            >
              Discover the most popular applications chosen by our community.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loding
              ? Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
              : slicesData.map((data) => (
                  <TrindingApp data={data} key={data.id} />
                ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <Link to="/allApp">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg text-white px-12 text-lg shadow-2xl rounded-full gap-2"
              >
                View All Apps <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      <Features />
      <Testimonials />
      <Pricing />
      {/* <FAQ /> */}
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Home;
