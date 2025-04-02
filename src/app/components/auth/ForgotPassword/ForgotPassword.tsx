'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      console.log('Password reset requested for:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({
        text: 'Password reset link has been sent to your email',
        type: 'success'
      });
      
    } catch {
      setMessage({
        text: 'Failed to send reset link. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
      <div className="mb-4">
        <Image 
          src="/Frame 40589.png" 
          alt="Finebank Logo" 
          width={120} 
          height={40} 
          className="mx-auto"
        />
        {/* <h1 className="text-3xl font-bold text-teal-600 mt-2">FINEbank.IO</h1> */}
      </div>
      
      <h2 className="text-black text-xl font-semibold mb-2">Forgot Password?</h2>
      <p className="text-gray-700 mb-6">
        Enter your email address to get the password reset link.
      </p>
      
      {message && (
        <div 
          className={`mb-4 p-3 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-left">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button
          className={`bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Password Reset'}
        </button>
      </form>
      
      <Link 
        href="/login" 
        className="text-gray-500 mt-4 inline-block hover:text-teal-600 transition-colors"
      >
        Back to login
      </Link>
    </div>
  );
};

export default ForgotPassword;
