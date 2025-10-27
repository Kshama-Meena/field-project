import React from 'react';

const navItems = [
    { name: 'Dashboard', icon: '🏠', section: 'dashboard' },
    { name: 'Products', icon: '🍎', section: 'products' },
    { name: 'Orders', icon: '🛒', section: 'orders' },
    { name: 'Customers', icon: '👥', section: 'customers' },
    { name: 'Discounts', icon: '🏷️', section: 'discounts' },
    { name: 'Settings', icon: '⚙️', section: 'settings' },
];

const Sidebar = ({ activeSection, setActiveSection, brandGreen }) => {
  return (
    <div className={`w-64 flex flex-col ${brandGreen} text-white shadow-2xl transition-all duration-300 ease-in-out hidden lg:flex`}>
      
      {/* Logo/Title */}
      <div className="flex items-center justify-center h-20 border-b border-green-700">
        <span className="text-2xl font-extrabold tracking-wider">FreshDose Admin</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => setActiveSection(item.section)}
            className={`w-full flex items-center p-3 rounded-lg transition-colors duration-200 text-left ${
              activeSection === item.section
                ? 'bg-green-700 font-bold shadow-md'
                : 'hover:bg-green-600'
            }`}
          >
            <span className="text-xl mr-3">{item.icon}</span>
            <span className="text-lg">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-green-700">
        <button className="w-full flex items-center p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors duration-200">
          <span className="text-xl mr-3">🚪</span>
          <span className="text-lg font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;