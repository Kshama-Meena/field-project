import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';

const AdminLayout = () => {
  // Aapke branding colours aur Tailwind Utility Classes
  const brandGreen = 'bg-[#008080]'; 
  const textGreen = 'text-[#008080]';
  const brandOrange = 'bg-[#FF6600]';
  const hoverOrange = 'hover:bg-[#E65C00]';

  // State to manage which section is active
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Example data
  const notificationCount = 3;
  const adminName = "Admin Fresh";

  return (
    <div className="flex h-screen bg-gray-100 font-sans">

      {/* 1. SIDEBAR */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        brandGreen={brandGreen} 
      />

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP BAR / HEADER */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          
          <h1 className={`text-2xl font-bold ${textGreen} ml-2 hidden sm:block`}>
             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/([A-Z])/g, ' $1')} Management
          </h1>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <input 
              type="text" 
              placeholder="Search products, orders..." 
              className="p-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#008080] focus:border-[#008080] w-40 sm:w-64"
            />
            
            {/* Notification Icon */}
            <div className="relative">
              <span className={`text-gray-600 hover:${textGreen} cursor-pointer text-xl`}>🔔</span>
              {notificationCount > 0 && (
                <span className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 ${brandOrange} rounded-full`}>
                  {notificationCount}
                </span>
              )}
            </div>

            {/* Admin Profile Dropdown */}
            <div className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100">
              <img 
                className="h-8 w-8 rounded-full object-cover mr-2" 
                // Placeholder image URL ko theek kiya gaya hai
                src="https://picsum.photos/50/50?grayscale" 
                alt="Admin Profile"
              />
              <span className="text-sm font-medium text-gray-700 hidden md:block">{adminName}</span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
            {/* brandGreen prop ko DashboardContent mein pass kiya gaya hai */}
            <DashboardContent 
                activeSection={activeSection} 
                brandOrange={brandOrange} 
                textGreen={textGreen} 
                brandGreen={brandGreen} // ✅ FIX: brandGreen added
                hoverOrange={hoverOrange}
            />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;