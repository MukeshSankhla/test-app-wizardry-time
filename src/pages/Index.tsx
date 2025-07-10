
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';
import UserTable from '../components/UserTable';
import ActivityFeed from '../components/ActivityFeed';
import { Users, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header onMenuToggle={toggleSidebar} />
        
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Users"
              value="2,543"
              change="+12%"
              changeType="positive"
              icon={Users}
            />
            <StatsCard
              title="Revenue"
              value="$45,231"
              change="+8%"
              changeType="positive"
              icon={DollarSign}
            />
            <StatsCard
              title="Growth"
              value="23.5%"
              change="+2.1%"
              changeType="positive"
              icon={TrendingUp}
            />
            <StatsCard
              title="Orders"
              value="1,234"
              change="-3%"
              changeType="negative"
              icon={ShoppingCart}
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Chart type="bar" title="User Growth" />
            <Chart type="line" title="Revenue Trend" />
          </div>

          {/* Tables and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <UserTable />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
