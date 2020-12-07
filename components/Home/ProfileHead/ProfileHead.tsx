import Link from 'next/link'
import React from 'react'

const ProfileHead: React.FC = () => {
  return (
    <div className="bg-white max-w-xl overflow-hidden flex flex-row ml-4 mb-4 p-4 border border-gray-300 mx-4 sm:mx-6 md:mx-6 lg:mx-8">
      <div
        className="w-16 h-16 bg-purple-600 rounded-full mr-4"
        style={{
          backgroundImage: "url('https://thispersondoesnotexist.com/image')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <p className="text-xl mr-2">Doug Walsh</p>
          <p className="text-purple-600">
            <Link href="#">Follow</Link>
          </p>
        </div>
        <div className="flex flex-row mt-1">
          <div className="mr-4">
            <span className="font-bold">294724</span> followers
          </div>
          <div className="mr-4">
            <span className="font-bold">2487293</span> following
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileHead
