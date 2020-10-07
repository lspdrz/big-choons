import React from "react";
import Link from "next/link";
import OverflowDots from "./icons/OverflowDots";
import ExternalLink from "./icons/ExternalLink";
import Play from "./icons/Play";
import NowPlayingMarquee from "./NowPlayingMarquee";

const SharedTrack = () => (
  // Shared track card
  <div className="bg-white max-w-2xl overflow-hidden flex flex-col m-auto mb-4 border-t border-b sm:border-l sm:border-r border-gray-900">
    {/* Card Header */}
    <div className="w-full p-4 border-b border-gray-900 flex flex-row justify-between">
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
        <p className="text-xs text-gray-600">(Expires in 00:00:00)</p>
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
            <button className="w-full flex justify-center items-center invisible group-hover:visible">
              <Play height="48" width="48" />
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
