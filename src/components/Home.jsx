import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';
import { QueueBooking } from './QueueBooking';
import { UserDashboard } from './UserDashboard';
import { AdminDashboard } from './AdminDashboard';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <div 
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-white text-3xl font-bold">Queue Management System</h1>
              <div className="flex items-center space-x-4">
                {user?.role === 'admin' && (
                  <a
                    href="/admin"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Admin Panel
                  </a>
                )}
                <button
                  onClick={logout}
                  className="flex items-center px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {user?.role === 'admin' ? (
          <AdminDashboard />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Queue</h2>
              <QueueBooking />
            </div>
            <div>
              <UserDashboard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;