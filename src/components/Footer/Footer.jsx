import React from "react";
import { Link } from "react-router";
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Github,
  ArrowRight,
  Heart,
  Globe,
  Box,
  Hexagon,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-base-200/50 pt-20 pb-10 border-t border-base-content/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1250px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-3xl font-bold mb-6 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Hexagon size={28} className="fill-primary/20" />
              </div>
              <span>
                Nex<span className="text-primary">io</span>
              </span>
            </Link>
            <p className="text-base-content/60 mb-8 max-w-sm leading-relaxed">
              Nexio — Your all-in-one productivity companion. Organize thoughts,
              plan smarter, and collaborate effortlessly with the world's most
              intuitive platform.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Github, href: "https://github.com/aftabfarhanarko" },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/aftabfarhan/",
                },
                { Icon: Twitter, href: "https://x.com/home" },
                { Icon: Facebook, href: "https://www.facebook.com/profile" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-base-100 border border-base-content/10 flex items-center justify-center text-base-content/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h6 className="font-bold text-base-content mb-6">Product</h6>
            <ul className="space-y-4">
              {["Features", "Integrations", "Pricing", "Changelog", "Docs"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base-content/60 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-base-content mb-6">Company</h6>
            <ul className="space-y-4">
              {["About Us", "Careers", "Blog", "Contact", "Partners"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base-content/60 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-base-content mb-6">Legal</h6>
            <ul className="space-y-4">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-base-content/60 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-base-100 p-8 rounded-3xl border border-base-content/5 shadow-sm mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold mb-2">
              Subscribe to our newsletter
            </h4>
            <p className="text-base-content/60">
              Get the latest updates, articles, and resources.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full md:w-64 rounded-xl focus:outline-none focus:border-primary"
            />
            <button className="btn btn-primary rounded-xl">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-base-content/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-base-content/50 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Nexio. Made with{" "}
            <Heart size={14} className="text-red-500 fill-current" /> by
            GreenNest
          </p>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors">
              <Globe size={16} /> English (US)
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-sm text-base-content/60">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
