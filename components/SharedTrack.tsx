import React from "react";
import Link from "next/link";
import OverflowDots from "./icons/OverflowDots";
import ExternalLink from "./icons/ExternalLink";
import Play from "./icons/Play";

const SharedTrack = () => (
  // Shared track card
  <div className="bg-white max-w-2xl overflow-hidden shadow-sm flex flex-col m-auto mb-4">
    {/* Card Header */}
    <div className="w-full p-4 border-b border-gray-300 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {/* User Avatar */}
        <span className="rounded-full bg-green-600 p-3 mr-2"></span>
        <p className="text-s mr-2">User Name</p>
        <p className="text-xs text-gray-600">(00:00:00)</p>
      </div>
      <div className="flex flex-row">
        {/* ToDo - Ternary for now playing */}
        <p className="text-green-600 text-s mr-4">Now playing</p>
        <Link href="#">
          <OverflowDots />
        </Link>
      </div>
    </div>
    {/* Card Body */}
    <div className="p-4 flex flex-col">
      <div className="group flex flex-row justify-between content-center">
        <div className="group flex flex-row">
          {/* Song Thumbnail - ToDo: make seperate component */}
          <span
            className="w-16 h-16 bg-yellow-300 mr-2 flex justify-center content-center"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi/Zse87KUaAMo/hqdefault.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <button className="invisible group-hover:visible">
              <Play />
            </button>
          </span>
          <div className="flex flex-col content-center">
            <p className="text-lg hover:underline">
              <Link href="#">AEIOI</Link>
            </p>
            <p className="text-s text-gray-600">Di Melo</p>
          </div>
        </div>
        <div className="flex flex-col justify-center content-center invisible group-hover:visible">
          {/* ToDo - External youtube link icon*/}
          <Link href="#">
            <ExternalLink />
          </Link>
        </div>
      </div>
      {/* If no comment hide */}
      <div className="w-full bg-gray-100 mt-4 p-4 flex flex-col">
        <p className="text-sm font-bold mb-3">User Name:</p>
        <p>
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
        </p>
      </div>
    </div>
  </div>
);
export default SharedTrack;
