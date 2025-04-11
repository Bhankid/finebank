'use client';

import React, { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import Image from 'next/image';

interface UserProfile {
  fullName: string;
  email: string;
  username: string;
  phoneNumber: string;
}

interface AccountTabProps {
  initialProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
}

const AccountTab: React.FC<AccountTabProps> = ({
  initialProfile = {
    fullName: 'Tanzir Rahman',
    email: 'tanzir.rahman@email.com',
    username: 'tanzir.rahman',
    phoneNumber: '+880 | 51547 58868'
  },
  onUpdateProfile = () => {}
}) => {
  const [profile] = useState<UserProfile>(initialProfile);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUpdateProfile = () => {
    onUpdateProfile(profile);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1">
        <div className="mb-6">
          <h2 className="text-gray-700 font-semibold">Full name</h2>
          <p className="text-gray-500">{profile.fullName}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 font-semibold">Email</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 font-semibold">Username</h2>
          <p className="text-gray-500">{profile.username}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-gray-700 font-semibold">Phone Number</h2>
          <p className="text-gray-500">{profile.phoneNumber}</p>
        </div>
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors cursor-pointer"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <div className="text-center">
          <h2 className="text-gray-700 font-semibold mb-4">Your Profile Picture</h2>
          <label className="cursor-pointer">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-teal-500 transition-colors">
              {profileImage ? (
                <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={profileImage}
                    alt="Profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <FaUserPlus className="text-gray-300 text-4xl mx-auto mb-4" />
              )}
              <p className="text-gray-500">Upload your photo</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccountTab;
