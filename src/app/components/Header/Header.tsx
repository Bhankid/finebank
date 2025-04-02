'use client';

import { useState, useEffect } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName = 'Tanzir' }) => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Format the current date
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-black">Hello {userName}</h1>
        <span className="text-gray-800">»</span>
        <span className="text-gray-800">{currentDate}</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-600 text-xl" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-teal-500 rounded-full"></span>
        </div>
        
        <form onSubmit={handleSearch} className="relative">
    <input
        type="text"
        placeholder="Search here"
        className="pl-4 pr-10 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 placeholder-opacity-100 text-gray-800"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
    >
        <FaSearch />
    </button>
    </form>

      </div>
    </header>
  );
};

export default Header;
