'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Signup = () => {
  const [name, setName] = useState('Tanzir Rahman');
  const [email, setEmail] = useState('hello@example.com');
  const [password, setPassword] = useState('..........'); 
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log({ name, email, password });
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <Image 
            src="/Frame 40589.png" 
            alt="Finebank Logo" 
            width={150} 
            height={50} 
            className="mx-auto mb-2"
          />
          {/* <h1 className="text-2xl font-semibold text-teal-600">FINEbank.IO</h1> */}
        </div>
        
        <h2 className="text-xl text-black font-semibold text-center mb-6">Create an account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" 
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" 
              required
            />
          </div>
          
          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600" 
              required
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <span>👁️</span>
              ) : (
                <span>👁️‍🗨️</span>
              )}
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">
            By continuing, you agree to our <Link href="/terms" className="text-teal-600">terms of service</Link>.
          </p>
          
          <button 
            type="submit" 
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-200"
          >
            Sign up
          </button>
        </form>
        
        <div className="flex items-center my-6 whitespace-nowrap">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 flex-shrink-0">or sign up with</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        
        <button 
          className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-200 cursor-pointer whitespace-nowrap"
          type="button"
        >
          <Image 
            src="/google_logo.png" 
            alt="Google logo" 
            width={20} 
            height={20} 
            className="mr-2 flex-shrink-0" 
          />
          <span className="flex-shrink-0">Continue with Google</span>
        </button>
        
        <p className="text-center text-gray-600 mt-6">
          Already have an account? <Link href="/login" className="text-teal-600">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
