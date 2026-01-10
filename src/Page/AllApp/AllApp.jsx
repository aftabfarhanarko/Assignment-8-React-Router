import React, { useState } from "react";
import DisplayAllApp from "./DisplayAllApp";
import {
  Search,
  Sparkles,
  Filter,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  Download,
  Star,
} from "lucide-react";
import NotFound from "./NotFound";
import AppLoder from "../../Loder/AppLoder";
import { useQuery } from "@tanstack/react-query";
import useAxiosAPi from "../../hook/useAPi";

import { motion, AnimatePresence } from "framer-motion";

const AllApp = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const apies = useAxiosAPi();

  //   Positions
  const [page, setPage] = useState(1);
  const [allBook, setAllBook] = useState(0);
  const limit = 12;
  const skip = (page - 1) * limit;
  const totalPage = Math.ceil(allBook / limit);

  // Fetch data using React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allappes", page, limit],
    queryFn: async () => {
      const res = await apies.get(`allapp?limit=${limit}&skip=${skip}`);
      setAllBook(res.data.count);
      return res.data.result;
    },
    keepPreviousData: true,
  });

  // Filter products based on search
  const filterProducat = React.useMemo(() => {
    if (!data || !Array.isArray(data)) return [];

    let filtered = search.trim()
      ? data.filter(
          (app) =>
            app.name?.toLowerCase().includes(search.toLowerCase()) ||
            app.title?.toLowerCase().includes(search.toLowerCase()) ||
            app.description?.toLowerCase().includes(search.toLowerCase())
        )
      : [...data];

    // Sorting Logic
    switch (sortOption) {
      case "rating_high_low":
        filtered.sort((a, b) => (b.ratingAvg || 0) - (a.ratingAvg || 0));
        break;
      case "rating_low_high":
        filtered.sort((a, b) => (a.ratingAvg || 0) - (b.ratingAvg || 0));
        break;
      case "download_high_low":
        filtered.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        break;
      case "download_low_high":
        filtered.sort((a, b) => (a.downloads || 0) - (b.downloads || 0));
        break;
      default:
        // Default sort (optional: maintain original order or specific logic)
        break;
    }

    return filtered;
  }, [data, search, sortOption]);

  return (
    <div className="min-h-screen bg-base-100 relative overflow-hidden py-20 px-4">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50 animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] opacity-50 animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] opacity-30 animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 backdrop-blur-md border border-base-content/10 mb-6 text-sm font-medium text-primary"
          >
            <Sparkles size={16} />
            <span>Premium Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent mb-6 tracking-tight"
          >
            Explore Applications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-base-content/60 max-w-2xl mx-auto leading-relaxed"
          >
            Discover our curated marketplace of high-quality apps designed to
            enhance your digital lifestyle.
          </motion.p>
        </div>

        {/* Search & Sort Section */}
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full md:max-w-2xl bg-base-100/60 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-base-content/5 border  p-2 pl-6 pr-2 flex items-center gap-4 transition-all focus-within:ring-2 focus-within:ring-primary/20"
          >
            <Search className="text-base-content/40" size={24} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search apps by name, category..."
              className="w-full bg-transparent border-none focus:ring-0 text-lg font-medium placeholder:text-base-content/30 h-4 outline-none"
            />
            <div className="hidden sm:flex items-center gap-2 bg-base-200/50 rounded-xl px-4 py-2 text-sm font-bold text-base-content/60 whitespace-nowrap">
              {allBook} Apps
            </div>
          </motion.div>

          {/* Sort Dropdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-auto min-w-[200px]"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-base-content/50" />
              </div>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none w-full bg-base-100/60 backdrop-blur-xl border border-white/20 text-base-content font-medium py-4 pl-12 pr-10 rounded-[2rem] shadow-xl shadow-base-content/5 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="default">Default Sort</option>
                <option value="rating_high_low">Rating: High to Low</option>
                <option value="rating_low_high">Rating: Low to High</option>
                <option value="download_high_low">
                  Downloads: High to Low
                </option>
                <option value="download_low_high">
                  Downloads: Low to High
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <ChevronLeft className="h-5 w-5 text-base-content/50 rotate-[-90deg]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <AppLoder />
            </div>
          ) : isError ? (
            <div className="max-w-md mx-auto bg-error/5 border border-error/20 rounded-3xl p-8 text-center">
              <p className="text-error font-bold text-lg mb-2">
                Oops! Something went wrong
              </p>
              <p className="text-base-content/60 text-sm">
                {error?.message ||
                  "Failed to load applications. Please try again later."}
              </p>
            </div>
          ) : filterProducat.length === 0 ? (
            <NotFound />
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filterProducat.map((data, index) => (
                  <DisplayAllApp
                    key={data.id || data._id}
                    data={data}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* Premium Pagination */}
      <div className="max-w-7xl mx-auto px-6 pb-20 mt-12">
        <div className="bg-base-100/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl shadow-base-content/5">
          <div className="text-sm font-medium text-base-content/60 pl-2">
            Showing{" "}
            <span className="text-base-content font-bold">{skip + 1}</span> to{" "}
            <span className="text-base-content font-bold">
              {Math.min(skip + limit, allBook)}
            </span>{" "}
            of <span className="text-base-content font-bold">{allBook}</span>{" "}
            apps
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="btn btn-circle btn-ghost hover:bg-base-content/5 disabled:bg-transparent disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2 bg-base-200/50 p-1.5 rounded-xl">
              {Array.from({ length: totalPage }).map((_, i) => {
                // Logic to show limited page numbers (start, end, current, surrounding)
                if (
                  i === 0 || // First page
                  i === totalPage - 1 || // Last page
                  (i >= page - 2 && i <= page) // Current and neighbors
                ) {
                  return (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                        page === i + 1
                          ? "bg-primary text-primary-content shadow-lg shadow-primary/30 scale-105"
                          : "text-base-content/60 hover:bg-base-content/5 hover:text-base-content"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                } else if (
                  (i === 1 && page > 3) ||
                  (i === totalPage - 2 && page < totalPage - 2)
                ) {
                  // Ellipsis
                  return (
                    <span
                      key={i}
                      className="w-8 text-center text-base-content/30 font-bold"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              disabled={page === totalPage}
              onClick={() => setPage(page + 1)}
              className="btn btn-circle btn-ghost hover:bg-base-content/5 disabled:bg-transparent disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApp;
