import React from "react";
import Link from "next/link";
import OverflowDots from "./icons/OverflowDots";
import Play from "./icons/Play";
import NowPlayingMarquee from "./NowPlayingMarquee";

const SharedTrack = () => (
  // Shared track card
  <div
    className="bg-white max-w-lg overflow-hidden flex flex-col border border-gray-500"
    style={{ height: "fit-content" }}
  >
    {/* Card Header */}
    <div className="w-full p-4 border-b border-gray-500 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {/* User Avatar */}
        <span
          className="rounded-full bg-pink-500 p-3 mr-2"
          style={{
            backgroundImage: "url('https://thispersondoesnotexist.com/image')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></span>
        <p className="text-s mr-2">User Name</p>
      </div>
      <div className="flex flex-row items-center">
        {/* ToDo - Ternary for now playing */}
        <NowPlayingMarquee />
        <Link href="#">
          <OverflowDots color="#1a202c" />
        </Link>
      </div>
    </div>
    {/* Card Body */}
    <div className="p-4 flex flex-col">
      <div className="group flex justify-between content-center flex-col">
        <div className="group flex flex-col">
          {/* Song Thumbnail - ToDo: make seperate component */}
          <span
            className="bg-pink-300 mb-3 flex justify-center content-center w-full h-64"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi/9Gj47G2e1Jc/hqdefault.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundColor: "#fff5f7",
            }}
          ></span>
          <div className="flex flex-row items-center">
            <button className="p-2 mr-2 rounded-full bg-white border border-gray-900">
              <Play color="#1a202c" />
            </button>
            <p className="text-base hover:underline">
              <Link href="#">Mariya Takeuchi Plastic Love 竹内 まりや</Link>
            </p>
          </div>
        </div>
      </div>
      {/* If no comment hide */}
      <div className="w-full bg-gray-100 mt-4 p-4 flex flex-col">
        <p className="text-sm font-bold mb-3 text-gray-900">User Name:</p>
        <p className="text-gray-900">
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
        </p>
      </div>
      <div className="pt-3 flex flex-row justify-end w-full">
        <p className="text-xs text-pink-400">Expires in 00:00:00</p>
      </div>
    </div>
  </div>
);
export default SharedTrack;
