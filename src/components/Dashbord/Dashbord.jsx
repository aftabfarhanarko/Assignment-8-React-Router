import React from 'react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  Users, DollarSign, TrendingUp, Activity, Smartphone, 
  Monitor, Tablet, ArrowUp, ArrowDown, Bell, Search, Menu,
  LayoutDashboard, ShoppingBag, Settings, LogOut
} from 'lucide-react';

const Dashbord = () => {
  // --- Mock Data ---
  const userGrowthData = [
    { name: 'Jan', users: 4000, active: 2400 },
    { name: 'Feb', users: 3000, active: 1398 },
    { name: 'Mar', users: 2000, active: 9800 },
    { name: 'Apr', users: 2780, active: 3908 },
    { name: 'May', users: 1890, active: 4800 },
    { name: 'Jun', users: 2390, active: 3800 },
    { name: 'Jul', users: 3490, active: 4300 },
  ];

  const revenueData = [
    { name: 'Mon', revenue: 4000, cost: 2400 },
    { name: 'Tue', revenue: 3000, cost: 1398 },
    { name: 'Wed', revenue: 2000, cost: 9800 },
    { name: 'Thu', revenue: 2780, cost: 3908 },
    { name: 'Fri', revenue: 1890, cost: 4800 },
    { name: 'Sat', revenue: 2390, cost: 3800 },
    { name: 'Sun', revenue: 3490, cost: 4300 },
  ];

  const deviceData = [
    { name: 'Mobile', value: 400, color: '#0088FE' },
    { name: 'Desktop', value: 300, color: '#00C49F' },
    { name: 'Tablet', value: 300, color: '#FFBB28' },
    { name: 'Other', value: 200, color: '#FF8042' },
  ];

  const appPerformanceData = [
    { subject: 'Speed', A: 120, B: 110, fullMark: 150 },
    { subject: 'Reliability', A: 98, B: 130, fullMark: 150 },
    { subject: 'UI/UX', A: 86, B: 130, fullMark: 150 },
    { subject: 'Security', A: 99, B: 100, fullMark: 150 },
    { subject: 'Features', A: 85, B: 90, fullMark: 150 },
    { subject: 'Support', A: 65, B: 85, fullMark: 150 },
  ];

  const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <div className="min-h-screen bg-base-200 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-xl hidden lg:flex flex-col z-10">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <LayoutDashboard className="w-8 h-8" /> NEXIO
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium transition-colors">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-base-content/70 hover:bg-base-200 rounded-xl font-medium transition-colors">
            <Users size={20} /> Users
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-base-content/70 hover:bg-base-200 rounded-xl font-medium transition-colors">
            <ShoppingBag size={20} /> Products
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-base-content/70 hover:bg-base-200 rounded-xl font-medium transition-colors">
            <Activity size={20} /> Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-base-content/70 hover:bg-base-200 rounded-xl font-medium transition-colors">
            <Settings size={20} /> Settings
          </a>
        </nav>

        <div className="p-4 border-t border-base-content/10">
          <button className="flex items-center gap-3 px-4 py-3 text-error w-full hover:bg-error/10 rounded-xl transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Top Header */}
        <header className="bg-base-100 shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button className="lg:hidden btn btn-ghost btn-circle">
              <Menu size={24} />
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="input input-bordered pl-10 w-64 rounded-xl focus:outline-none focus:border-primary" 
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn btn-ghost btn-circle relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-pulse"></span>
            </button>
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span className="text-xs">AD</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8">
          {/* Welcome Section */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Dashboard Overview</h2>
            <p className="text-base-content/60">Welcome back, Admin. Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Total Revenue', value: '$54,239', icon: DollarSign, color: 'text-success', bg: 'bg-success/10', trend: '+12.5%' },
              { label: 'Total Users', value: '2,543', icon: Users, color: 'text-primary', bg: 'bg-primary/10', trend: '+8.2%' },
              { label: 'New Sales', value: '345', icon: ShoppingBag, color: 'text-warning', bg: 'bg-warning/10', trend: '-2.4%' },
              { label: 'Bounce Rate', value: '42.3%', icon: Activity, color: 'text-error', bg: 'bg-error/10', trend: '+4.1%' },
            ].map((stat, index) => (
              <div key={index} className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-base-content/60">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Row 1: Area & Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Growth Chart */}
            <div className="lg:col-span-2 bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Revenue Analytics</h3>
                <select className="select select-bordered select-sm rounded-lg">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
                    <YAxis axisLine={false} tickLine={false} tickMargin={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="revenue" stroke="#6366f1" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
                    <Area type="monotone" dataKey="cost" stroke="#10b981" fillOpacity={1} fill="url(#colorCost)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Device Distribution */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5">
              <h3 className="text-lg font-bold mb-6">Device Usage</h3>
              <div className="h-[300px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                  <span className="text-3xl font-bold">1.2k</span>
                  <span className="text-xs text-base-content/50">Total Devices</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row 2: Bar & Line */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Activity Bar Chart */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5">
              <h3 className="text-lg font-bold mb-6">Weekly User Activity</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                    <Bar dataKey="active" fill="#e5e7eb" radius={[4, 4, 0, 0]} barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Performance Line Chart */}
            <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5">
              <h3 className="text-lg font-bold mb-6">App Performance Trends</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} dot={{r: 4}} activeDot={{r: 8}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-content/5">
            <h3 className="text-lg font-bold mb-6">Recent Transactions</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="hover:bg-base-200/50">
                      <td className="font-mono text-xs">#TRX-78{item}9</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                              <span>U{item}</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">User Name {item}</div>
                            <div className="text-xs opacity-50">user{item}@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td>Premium Plan</td>
                      <td>Oct 24, 2025</td>
                      <td className="font-bold">$99.00</td>
                      <td>
                        <span className={`badge ${item % 2 === 0 ? 'badge-success' : 'badge-warning'} gap-2`}>
                          {item % 2 === 0 ? 'Completed' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashbord;