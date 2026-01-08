import React, { useState } from 'react';
import { 
  Zap, Shield, Smartphone, HelpCircle, Mail, MapPin, Phone, Send, 
  Loader2, CheckCircle, AlertCircle, ArrowRight, Star, 
  Download, Globe, Layers, Users, Play, ChevronDown, Check,
  CreditCard, Layout, Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---
const SectionHeader = ({ title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/60"
    >
      {title}
    </motion.h2>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-lg text-base-content/60 max-w-2xl mx-auto leading-relaxed"
    >
      {subtitle}
    </motion.p>
  </div>
);

// 1. Trusted By Section (Infinite Marquee)
export const TrustedBy = () => {
  const brands = ['Google', 'Microsoft', 'Spotify', 'Amazon', 'Slack', 'Netflix', 'Adobe', 'Figma'];
  
  return (
    <div className="py-12 border-y border-base-200 bg-base-100/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-base-100 to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-base-100 to-transparent z-10" />
      
      <div className="flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap px-8"
        >
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="text-2xl font-bold text-base-content/30 font-mono uppercase tracking-widest hover:text-primary transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// 2. How It Works (Timeline)
export const HowItWorks = () => {
  const steps = [
    { title: "Discover Apps", desc: "Explore our curated marketplace.", icon: <Globe className="w-6 h-6" /> },
    { title: "One-Click Install", desc: "Secure and instant delivery.", icon: <Download className="w-6 h-6" /> },
    { title: "Seamless Sync", desc: "Works across all your devices.", icon: <Smartphone className="w-6 h-6" /> }
  ];

  return (
    <div className="py-24 bg-base-100 relative overflow-hidden">
      <SectionHeader title="How It Works" subtitle="Start your journey in three simple steps." />
      
      <div className="max-w-[1250px] mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
         <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
         
         {steps.map((step, i) => (
           <motion.div 
             key={i}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.2 }}
             className="relative bg-base-100 p-8 rounded-2xl shadow-lg border border-base-200 text-center z-10 group hover:-translate-y-2 transition-transform duration-300"
           >
             <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-content transition-colors duration-300">
               {step.icon}
             </div>
             <h3 className="text-xl font-bold mb-2">{step.title}</h3>
             <p className="text-base-content/60">{step.desc}</p>
             
             <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-base-content text-base-100 flex items-center justify-center font-bold text-sm">
               {i + 1}
             </div>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

// 3. Features (Bento Grid)
export const Features = () => {
  return (
    <div className="py-24 bg-base-200/50" id="features">
      <div className="max-w-[1250px] mx-auto px-4">
        <SectionHeader title="Why Choose Us?" subtitle="Engineered for performance, designed for you." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cross-Platform Ecosystem</h3>
              <p className="text-base-content/60 max-w-md">Seamlessly sync your data across mobile, desktop, and web. Start on your phone, finish on your laptop.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent skew-x-12 translate-x-12" />
          </motion.div>

          {/* Tall Feature */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="row-span-2 bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200 flex flex-col relative overflow-hidden"
          >
             <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
            <h3 className="text-2xl font-bold mb-3">Bank-Grade Security</h3>
            <p className="text-base-content/60 mb-8">End-to-end encryption ensures your sensitive information stays private. We never sell your data.</p>
            <div className="mt-auto bg-base-200/50 rounded-xl p-4 border border-base-300">
               <div className="flex items-center gap-2 text-sm text-success mb-2">
                 <CheckCircle size={14} /> AES-256 Encryption
               </div>
               <div className="flex items-center gap-2 text-sm text-success">
                 <CheckCircle size={14} /> SOC2 Compliant
               </div>
            </div>
          </motion.div>

          {/* Small Feature 1 */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200">
             <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-sm text-base-content/60">Optimized for sub-second load times.</p>
          </motion.div>

          {/* Small Feature 2 */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-base-100 p-8 rounded-3xl shadow-sm border border-base-200">
             <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5" />
              </div>
            <h3 className="text-xl font-bold mb-2">Global Support</h3>
            <p className="text-sm text-base-content/60">Available in 30+ languages worldwide.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// 4. Categories (Modern Grid)
export const Categories = () => {
  const categories = [
    { name: 'Productivity', count: '120+', color: 'from-blue-500 to-cyan-400' },
    { name: 'Design', count: '85+', color: 'from-purple-500 to-pink-500' },
    { name: 'Finance', count: '50+', color: 'from-emerald-500 to-teal-400' },
    { name: 'Health', count: '90+', color: 'from-orange-500 to-red-500' },
    { name: 'Education', count: '200+', color: 'from-indigo-500 to-violet-500' },
    { name: 'Games', count: '300+', color: 'from-rose-500 to-orange-400' },
  ];

  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-[1250px] mx-auto px-4">
         <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-bold mb-2">Top Categories</h2>
               <p className="text-base-content/60">Explore apps by interest</p>
            </div>
            <button className="btn btn-ghost gap-2">View All <ArrowRight size={16} /></button>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {categories.map((cat, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="group relative overflow-hidden rounded-2xl bg-base-200 aspect-square flex flex-col justify-end p-4 cursor-pointer"
             >
               <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
               <h3 className="relative z-10 font-bold text-lg group-hover:text-white transition-colors">{cat.name}</h3>
               <p className="relative z-10 text-sm opacity-60 group-hover:text-white/80 group-hover:opacity-100 transition-all">{cat.count}</p>
             </motion.div>
           ))}
         </div>
      </div>
    </div>
  );
};

// 5. Testimonials (Masonry)
export const Testimonials = () => {
  const reviews = [
    { name: "Sarah J.", role: "Product Manager", text: "This platform completely changed how our team collaborates. The UI is stunning and intuitive." },
    { name: "Mike T.", role: "Developer", text: "Finally, a marketplace that cares about quality. Every app I've installed has been top-tier." },
    { name: "Emily R.", role: "Designer", text: "The visual attention to detail is unmatched. It's a joy to use every single day." }
  ];

  return (
    <div className="py-24 bg-base-200/50">
      <SectionHeader title="Loved by Thousands" subtitle="Don't just take our word for it." />
      <div className="max-w-[1250px] mx-auto px-4 grid md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-200 relative"
          >
            <div className="text-4xl text-primary/20 font-serif absolute top-4 right-6">"</div>
            <div className="flex gap-1 text-warning mb-4">
              {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
            </div>
            <p className="mb-6 text-base-content/80 italic">{review.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-base-300" />
              <div>
                <div className="font-bold">{review.name}</div>
                <div className="text-xs opacity-60">{review.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 6. Pricing (Premium Cards)
export const Pricing = () => {
  return (
    <div className="py-24 bg-base-100">
      <SectionHeader title="Simple, Transparent Pricing" subtitle="Choose the plan that fits your needs." />
      <div className="max-w-[1000px] mx-auto px-4 grid md:grid-cols-3 gap-8 items-center">
        {/* Basic */}
        <div className="p-8 rounded-3xl border border-base-200 text-center opacity-80 hover:opacity-100 transition-opacity">
          <h3 className="font-bold mb-2">Starter</h3>
          <div className="text-3xl font-bold mb-6">Free</div>
          <ul className="space-y-3 text-sm mb-8 text-left">
             <li className="flex gap-2"><Check size={16} /> Access to free apps</li>
             <li className="flex gap-2"><Check size={16} /> Basic support</li>
          </ul>
          <button className="btn btn-outline w-full rounded-xl">Get Started</button>
        </div>

        {/* Pro (Highlighted) */}
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-base-content text-base-100 shadow-2xl relative scale-110 z-10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
            Most Popular
          </div>
          <h3 className="font-bold mb-2">Pro Member</h3>
          <div className="text-4xl font-bold mb-6">$12<span className="text-lg font-normal opacity-70">/mo</span></div>
           <ul className="space-y-3 text-sm mb-8 text-left">
             <li className="flex gap-2"><Check size={16} /> Unlimited downloads</li>
             <li className="flex gap-2"><Check size={16} /> Priority support</li>
             <li className="flex gap-2"><Check size={16} /> Ad-free experience</li>
             <li className="flex gap-2"><Check size={16} /> Early access</li>
          </ul>
          <button className="btn btn-primary w-full rounded-xl border-none shadow-lg">Go Pro</button>
        </motion.div>

        {/* Enterprise */}
         <div className="p-8 rounded-3xl border border-base-200 text-center opacity-80 hover:opacity-100 transition-opacity">
          <h3 className="font-bold mb-2">Business</h3>
          <div className="text-3xl font-bold mb-6">$49<span className="text-lg font-normal opacity-70">/mo</span></div>
          <ul className="space-y-3 text-sm mb-8 text-left">
             <li className="flex gap-2"><Check size={16} /> Team management</li>
             <li className="flex gap-2"><Check size={16} /> API Access</li>
          </ul>
          <button className="btn btn-outline w-full rounded-xl">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

// 7. FAQ (Accordion)
export const FAQ = () => {
  const faqs = [
    { q: "Is there a free trial?", a: "Yes, you can try Pro for 14 days free." },
    { q: "Can I cancel anytime?", a: "Absolutely. No hidden fees or lock-in contracts." },
    { q: "How do I install apps?", a: "Just click install and our launcher handles the rest." }
  ];

  return (
    <div className="py-24 bg-base-200/30">
       <div className="max-w-2xl mx-auto px-4">
         <SectionHeader title="Frequently Asked Questions" subtitle="Got questions? We've got answers." />
         <div className="space-y-4">
           {faqs.map((faq, i) => (
             <div key={i} className="collapse collapse-plus bg-base-100 border border-base-200 rounded-2xl">
               <input type="radio" name="my-accordion-3" defaultChecked={i===0} /> 
               <div className="collapse-title text-lg font-medium">
                 {faq.q}
               </div>
               <div className="collapse-content"> 
                 <p className="opacity-70">{faq.a}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
    </div>
  );
};

// 8. Newsletter (CTA)
export const Newsletter = () => {
  return (
    <div className="py-24 px-4">
      <div className="max-w-[1250px] mx-auto bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-10">Join 50,000+ users building the future of productivity today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="input input-lg bg-white/10 border-white/20 text-white placeholder-white/60 focus:bg-white/20 w-full rounded-xl" />
            <button className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none rounded-xl">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Contact (Minimal)
export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="py-24 bg-base-100">
      <div className="max-w-[1250px] mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg opacity-70 mb-10">Have a question or just want to say hi? We'd love to hear from you.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
              <div>
                <div className="font-bold">Email Us</div>
                <div className="opacity-70">support@hero.io</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
              <div>
                <div className="font-bold">Visit Us</div>
                <div className="opacity-70">123 Tech Blvd, San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-base-200/50 p-8 rounded-3xl border border-base-200">
          <div className="form-control mb-4">
            <label className="label">Name</label>
            <input 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              type="text" 
              className="input input-bordered bg-base-100 rounded-xl" 
              required 
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Email</label>
            <input 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              type="email" 
              className="input input-bordered bg-base-100 rounded-xl" 
              required 
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">Message</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="textarea textarea-bordered bg-base-100 h-32 rounded-xl" 
              required 
            />
          </div>
          <button 
            disabled={status === 'loading'}
            className="btn btn-primary w-full rounded-xl"
          >
            {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="alert alert-success mt-4 rounded-xl">
              <CheckCircle size={20} /> Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
