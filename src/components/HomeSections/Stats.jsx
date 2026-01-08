import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Users, Star, Smartphone, ArrowUpRight } from "lucide-react";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      id: 1,
      label: "Total Downloads",
      value: 29.6,
      suffix: "M",
      decimals: 1,
      growth: "21%",
      icon: Users,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      id: 2,
      label: "Total Reviews",
      value: 998,
      suffix: "K",
      decimals: 0,
      growth: "46%",
      icon: Star,
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      id: 3,
      label: "Active Apps",
      value: 345,
      suffix: "+",
      decimals: 0,
      growth: "80%",
      icon: Smartphone,
      color: "text-accent",
      bg: "bg-accent/10"
    }
  ];

  return (
    <div className="relative z-20 -mt-20 px-4">
      <div ref={ref} className="max-w-[1250px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-base-100/80 backdrop-blur-xl border border-base-200 shadow-2xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x divide-base-200"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center md:items-start text-center md:text-left px-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} mb-4`}>
                <stat.icon size={24} />
              </div>
              
              <h2 className="text-4xl font-bold text-base-content mb-1">
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix} 
                  />
                ) : (
                  <span>{stat.value}{stat.suffix}</span>
                )}
              </h2>
              
              <p className="text-base-content/60 font-medium mb-2">{stat.label}</p>
              
              <div className="flex items-center gap-1 text-success text-sm font-semibold bg-success/10 px-2 py-1 rounded-full">
                <ArrowUpRight size={14} />
                {stat.growth}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
