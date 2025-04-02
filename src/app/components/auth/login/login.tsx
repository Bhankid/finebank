'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <Image 
          src="/Frame 40589.png" 
          alt="Finebank Logo" 
          width={150} 
          height={50} 
          className="mx-auto"
        />
        {/* <h1 className="text-3xl font-bold text-teal-600 mt-2">
          FINE<span className="font-normal">bank.IO</span>
        </h1> */}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <span>👁️</span>
              ) : (
                <span>👁️‍🗨️</span>
              )}
            </button>
          </div>
          <div className="text-right mt-2">
            <Link href="/forgot-password" className="text-sm text-teal-600 hover:text-teal-800">
              Forgot Password?
            </Link>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input 
              type="checkbox" 
              className="form-checkbox text-teal-600"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="ml-2 text-gray-700">Keep me signed in</span>
          </label>
        </div>
        
        <div className="mb-4">
          <button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        
        <div className="flex items-center justify-center mb-4 whitespace-nowrap">
        <hr className="w-full border-gray-300" />
        <span className="px-2 text-gray-500 flex-shrink-0">or sign in with</span>
        <hr className="w-full border-gray-300" />
        </div>


        <div className="mb-4">
        <button
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center cursor-pointer whitespace-nowrap"
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
        </div>

        
        <div className="text-center">
          <Link href="/signup" className="text-teal-600 hover:text-teal-800">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
