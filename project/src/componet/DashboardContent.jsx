import React from 'react';

// Example Data for Dashboard Cards
const kpiData = [
  { title: "Total Revenue", value: "₹45,678", color: "text-green-600", icon: "💰" },
  { title: "New Orders", value: "125", color: "text-orange-600", icon: "📦" },
  { title: "Customers Today", value: "45", color: "text-blue-600", icon: "👤" },
  { title: "Out of Stock", value: "8", color: "text-red-600", icon: "🚨" },
];

// Example Data for Recent Orders Table
const recentOrders = [
    { id: '#1001', customer: 'Ravi Kumar', total: '₹450', status: 'Delivered' },
    { id: '#1002', customer: 'Priya Sharma', total: '₹890', status: 'Processing' },
    { id: '#1003', customer: 'Ali Khan', total: '₹210', status: 'Cancelled' },
    { id: '#1004', customer: 'Neha Singh', total: '₹1200', status: 'Shipped' },
];

// Function to get Tailwind color for status
const getStatusBadge = (status) => {
    switch (status) {
        case 'Delivered': return 'bg-green-200 text-green-800';
        case 'Processing': return 'bg-yellow-200 text-yellow-800';
        case 'Cancelled': return 'bg-red-200 text-red-800';
        case 'Shipped': return 'bg-blue-200 text-blue-800';
        default: return 'bg-gray-200 text-gray-800';
    }
};

// Main Component (brandGreen, hoverOrange props ab yahan receive ho rahe hain)
const DashboardContent = ({ activeSection, brandOrange, textGreen, brandGreen, hoverOrange }) => {
  
  // Border color utility class ko dynamic banane ke liye
  const borderGreenClass = brandGreen.replace('bg-', 'border-');

  if (activeSection !== 'dashboard') {
    return (
      <div className="p-10 text-center text-xl text-gray-500">
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section is under development.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      
      {/* 1. KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          // border-l-4 border-[#008080] ko hardcoded rakha hai ya borderGreenClass use karein
          <div key={index} className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${borderGreenClass} hover:shadow-xl transition duration-300`}>
            <p className="text-sm text-gray-500 font-medium">{kpi.title}</p>
            <div className="flex items-center justify-between mt-1">
              <h2 className={`text-3xl font-extrabold ${kpi.color}`}>{kpi.value}</h2>
              <span className={`text-3xl p-2 rounded-full bg-gray-100`}>{kpi.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 2. Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sales Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
          <h3 className={`text-xl font-bold ${textGreen} mb-4`}>Last 7 Days Sales Trend</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 border border-dashed border-gray-300 rounded-lg">
            [Line Chart Placeholder]
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          <h3 className={`text-xl font-bold ${textGreen} mb-4`}>Quick Actions</h3>
          <button className={`w-full py-3 px-4 text-white font-semibold rounded-lg shadow-md ${brandOrange} transition duration-300 ${hoverOrange}`}>
            + Add New Product
          </button>
          <button className={`w-full py-3 px-4 text-white font-semibold rounded-lg shadow-md ${brandGreen} hover:bg-green-700 transition duration-300`}>
            Manage Inventory
          </button>
        </div>
      </div>

      {/* 3. Recent Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className={`text-xl font-bold ${textGreen} mb-4`}>Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">{order.total}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className={`text-[#008080] hover:text-green-700 mr-3`}>View</button>
                    <button className={`text-red-500 hover:text-red-700`}>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;``