import React from "react";
import Link from "next/link";

const ProfileHead = () => {
  return (
    <div className="bg-white max-w-2xl overflow-hidden flex flex-row m-auto mb-4 p-4 border border-gray-500">
      <div
        className="w-16 h-16 bg-pink-500 rounded-full mr-4"
        style={{
          backgroundImage: "url('https://thispersondoesnotexist.com/image')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <p className="text-xl mr-2">User Name</p>
          <p className="text-pink-500">
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
  );
};
export default ProfileHead;
