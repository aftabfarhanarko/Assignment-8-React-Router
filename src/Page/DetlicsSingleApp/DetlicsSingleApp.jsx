import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getItem, setItems } from "../../Components/VanilaJS/vanilajs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import {
  Download,
  Star,
  Info,
  Shield,
  Calendar,
  Globe,
  Share2,
  ArrowLeft,
  CheckCircle,
  Smartphone,
  Award,
  Zap,
  ChevronRight,
  BarChart2,
  PieChart as PieChartIcon,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";
import useAxiosAPi from "../../hook/useAPi";
import { useQuery } from "@tanstack/react-query";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { Toaster } from "sonner";

const DetlicsSingleApp = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { id } = useParams();
  const apies = useAxiosAPi();

  // Fetch single app data
  const { data: findApp, isLoading } = useQuery({
    queryKey: ["singleApp", id],
    queryFn: async () => {
      const res = await apies.get(`singleApp/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    const getItems = getItem();
    const isExist = getItems.find((app) => app.id == id);
    setIsInstalled(!!isExist);
    window.scrollTo(0, 0);
  }, [id]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInstall = () => {
    if (!findApp) return;
    setIsInstalled(true);
    setItems(findApp);
    Toaster.success("✅ App installed successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  // Chart Data Preparation
  const chartData = findApp?.ratings || [
    { name: "1 star", count: 850 },
    { name: "2 star", count: 850 },
    { name: "3 star", count: 1700 },
    { name: "4 star", count: 3400 },
    { name: "5 star", count: 10200 },
  ];

  const pieData = chartData.map((d) => ({ name: d.name, value: d.count }));
  const COLORS = ["#FF8042", "#FFBB28", "#00C49F", "#0088FE", "#8884d8"];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Not found state
  if (!findApp) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100">
        <h2 className="text-3xl font-bold">App not found</h2>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen pb-20 overflow-x-hidden font-sans">
      {/* Premium Hero Section */}
      <div className="relative bg-base-100 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 via-base-100/50 to-base-100 -z-10" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -z-10"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10"
        />

        <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* App Icon / Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full lg:w-[320px] flex-shrink-0"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <img
                  src={findApp.image}
                  alt={findApp.title}
                  className="relative rounded-[2.5rem] w-full aspect-square object-cover shadow-2xl ring-1 ring-white/20 z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 z-20">
                  <button className="btn btn-circle btn-sm bg-black/20 backdrop-blur-md border-none hover:bg-black/40 text-white shadow-lg">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* App Details */}
            <div className="flex-1 w-full pt-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                    {findApp.category || "Productivity"}
                  </span>
                  {findApp.ratingAvg > 4.5 && (
                    <span className="px-4 py-1.5 rounded-full bg-warning/10 text-warning text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-warning/20">
                      <Award className="w-3.5 h-3.5" /> Editor's Choice
                    </span>
                  )}
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-base-content mb-6 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-base-content to-base-content/60">
                  {findApp.title}
                </h1>

                <p className="text-xl text-base-content/60 mb-10 flex items-center gap-3 font-medium">
                  <span className="w-10 h-10 rounded-full bg-base-200/80 flex items-center justify-center shadow-inner">
                    <Globe className="w-5 h-5 text-base-content/70" />
                  </span>
                  Developed by{" "}
                  <span className="text-base-content font-bold">
                    {findApp.companyName}
                  </span>
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <div className="bg-base-100/40 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-lg hover:bg-base-100/60 transition-colors">
                    <div className="text-sm font-medium text-base-content/50 mb-1">
                      Downloads
                    </div>
                    <div className="text-2xl font-bold flex items-center gap-2 text-base-content">
                      <Download className="w-5 h-5 text-primary" />{" "}
                      {findApp.downloads
                        ? findApp.downloads > 1000000
                          ? (findApp.downloads / 1000000).toFixed(1) + "M"
                          : findApp.downloads
                        : "10K+"}
                    </div>
                  </div>
                  <div className="bg-base-100/40 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-lg hover:bg-base-100/60 transition-colors">
                    <div className="text-sm font-medium text-base-content/50 mb-1">
                      Rating
                    </div>
                    <div className="text-2xl font-bold flex items-center gap-2 text-base-content">
                      <Star className="w-5 h-5 text-warning fill-warning" />{" "}
                      {findApp.ratingAvg || "4.5"}
                    </div>
                  </div>
                  <div className="bg-base-100/40 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-lg hover:bg-base-100/60 transition-colors">
                    <div className="text-sm font-medium text-base-content/50 mb-1">
                      Size
                    </div>
                    <div className="text-2xl font-bold text-base-content flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-secondary" />{" "}
                      {findApp.size || "25"} MB
                    </div>
                  </div>
                  <div className="bg-base-100/40 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-lg hover:bg-base-100/60 transition-colors">
                    <div className="text-sm font-medium text-base-content/50 mb-1">
                      Version
                    </div>
                    <div className="text-2xl font-bold text-base-content flex items-center gap-2">
                      <Activity className="w-5 h-5 text-accent" />{" "}
                      {findApp.version || "1.0.2"}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleInstall}
                    disabled={isInstalled}
                    className={`btn btn-xl h-16 px-10 rounded-[2rem] border-none shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 text-lg font-bold ${
                      isInstalled
                        ? "bg-success text-white hover:bg-success/90"
                        : "bg-gradient-to-r from-primary via-primary to-secondary text-white"
                    }`}
                  >
                    {isInstalled ? (
                      <>
                        <CheckCircle className="w-7 h-7" /> Installed
                      </>
                    ) : (
                      <>
                        <Download className="w-7 h-7" /> Install App
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-xl h-16 px-10 rounded-[2rem] btn-ghost border-2 border-base-content/10 hover:bg-base-200 hover:border-base-content/20 text-lg font-bold"
                  >
                    <Share2 className="w-6 h-6" /> Share
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-16">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Info size={24} />
              </div>
              About this app
            </h2>
            <div className="prose prose-lg prose-headings:font-bold prose-p:text-base-content/80 max-w-none">
              <p className="leading-loose">{findApp.description}</p>
              {findApp.longDescription && (
                <p className="leading-loose">{findApp.longDescription}</p>
              )}
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Zap size={24} />
              </div>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(
                findApp.features || [
                  "Real-time Synchronization",
                  "Advanced Analytics",
                  "Cloud Backup",
                  "Multi-user Support",
                  "Offline Mode",
                  "Dark Theme",
                ]
              ).map((feature, idx) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-base-100 shadow-lg shadow-base-content/5 border border-base-content/5 hover:border-primary/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <span className="font-semibold text-base-content/80">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Premium Analytics & Reviews Section */}
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-base-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-base-content/10 border border-base-content/5 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-[100px] -z-10" />

            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-warning/10 flex items-center justify-center text-warning">
                    <BarChart2 size={24} />
                  </div>
                  Ratings Analysis
                </h2>
                <p className="text-base-content/60 ml-16">
                  Based on {findApp.reviews || "10,000+"} verified user reviews
                </p>
              </div>
              <div className="text-right">
                <div className="text-6xl font-black text-base-content tracking-tighter">
                  {findApp.ratingAvg || "4.5"}
                </div>
                <div className="rating rating-sm gap-1 justify-end">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <input
                      key={s}
                      type="radio"
                      name="rating-app"
                      className="mask mask-star-2 bg-warning"
                      checked={s <= Math.round(findApp.ratingAvg || 4.5)}
                      readOnly
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Chart 1: Rating Breakdown (Bar Chart) */}
              <div className="bg-base-200/30 rounded-3xl p-6 border border-base-content/5">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Activity size={18} className="text-primary" /> Rating
                  Breakdown
                </h3>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={chartData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                        strokeOpacity={0.1}
                      />
                      <XAxis type="number" hide />
                      <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fontSize: 12,
                          fill: "currentColor",
                          opacity: 0.7,
                        }}
                        width={60}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "none",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        }}
                        cursor={{ fill: "rgba(0,0,0,0.05)" }}
                      />
                      <Bar
                        dataKey="count"
                        radius={[0, 10, 10, 0]}
                        barSize={24}
                        animationDuration={1500}
                      >
                        {chartData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Chart 2: Distribution (Pie Chart) */}
              <div className="bg-base-200/30 rounded-3xl p-6 border border-base-content/5">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <PieChartIcon size={18} className="text-secondary" />{" "}
                  Sentiment Distribution
                </h3>
                <div className="h-[250px] w-full relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ borderRadius: "12px", border: "none" }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Center Stats */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-base-content">
                        {Math.round(
                          (chartData[4]?.count /
                            chartData.reduce((a, b) => a + b.count, 0)) *
                            100
                        ) || 75}
                        %
                      </div>
                      <div className="text-xs text-base-content/50 font-bold uppercase">
                        5 Star
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Cards */}
            <div className="mt-12 space-y-6">
              <h3 className="font-bold text-lg mb-4">Latest Reviews</h3>
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-base-100 border border-base-content/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`}
                          alt="User"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Alex Johnson</h4>
                      <div className="text-xs font-medium text-base-content/50">
                        2 hours ago
                      </div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className="text-warning fill-warning"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-base-content/80 leading-relaxed italic">
                    "This app completely transformed how I manage my daily
                    tasks. The interface is intuitive and the features are
                    exactly what I needed. Highly recommended for anyone looking
                    to boost productivity!"
                  </p>
                </div>
              ))}
              <button className="btn btn-outline btn-block rounded-xl">
                View All Reviews
              </button>
            </div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          {/* App Information Card */}
          <div className="bg-base-100 p-8 rounded-[2rem] border border-base-content/10 shadow-2xl sticky top-24">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <Shield className="w-6 h-6 text-success" /> App Info
            </h3>
            <ul className="space-y-6">
              <li className="flex justify-between items-center pb-4 border-b border-base-content/5">
                <span className="text-base-content/60 font-medium">
                  License
                </span>
                <span className="font-bold text-sm bg-base-200 px-4 py-1.5 rounded-full">
                  {findApp.license || "Free"}
                </span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-base-content/5">
                <span className="text-base-content/60 font-medium">
                  Category
                </span>
                <span className="font-bold text-sm text-right">
                  {findApp.category || "Productivity"}
                </span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-base-content/5">
                <span className="text-base-content/60 font-medium">
                  Languages
                </span>
                <span className="font-bold text-sm text-right">
                  {findApp.languages || "English, Spanish"}
                </span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-base-content/5">
                <span className="text-base-content/60 font-medium">
                  Age Rating
                </span>
                <span className="font-bold text-sm bg-base-200 px-3 py-1 rounded-lg">
                  {findApp.ageRating || "4+"}
                </span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-base-content/5">
                <span className="text-base-content/60 font-medium">
                  Last Updated
                </span>
                <span className="font-bold text-sm flex items-center gap-2">
                  <Calendar size={14} />{" "}
                  {findApp.updatedAt
                    ? new Date(findApp.updatedAt).toLocaleDateString()
                    : "Oct 20, 2025"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetlicsSingleApp;
