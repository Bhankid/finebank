'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const WelcomeCard: FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <Image 
          src="/Frame 40589.png" 
          alt="Finebank Logo" 
          width={120} 
          height={40} 
          className="mx-auto"
        />
      </div>
      
      <h1 className="text-gray-600 text-xl font-normal mb-2">Welcome to</h1>
      <h2 className="text-2xl font-bold text-teal-600 mb-4">
        Finebank - Financial Management Dashboard
      </h2>
      
      <p className="text-gray-600 mb-6">
        Your personal finance management solution that helps you track expenses,
        manage budgets, and achieve your financial goals with ease.
      </p>
      
      <hr className="border-gray-300 mb-6" />
      
      <p className="text-gray-700 mb-2">
        Ready to take control of your financial future?
      </p>
      <p className="text-gray-700 mb-6">
        Join thousands of users who have already improved their financial health with 
        <span className="font-bold text-teal-600"> Finebank</span>
      </p>
      
      <button 
        onClick={handleGetStarted}
        className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full text-lg mb-6 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 cursor-pointer"
      >
        Get Started
      </button>
      
      <div className="mt-4">
        <Link href="/login" className="text-teal-600 hover:text-teal-800 underline">
          Already have an account? Sign in
        </Link>
      </div>
      
      <p className="text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Finebank. All rights reserved.
      </p>
    </div>
  );
};

export default WelcomeCard;
