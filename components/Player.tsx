import React from "react";
import Link from "next/link";
import Volume from "./icons/Volume";
import SkipBack from "./icons/SkipBack";
import Play from "./icons/Play";
import SkipNext from "./icons/SkipNext";

const Player = () => (
  <section className="w-full border-t border-gray-300 bg-white h-16 fixed bottom-0 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-row justify-between w-full h-full">
      {/* PLAYER CONTROLS */}
      <div className="flex flex-row justify-self-start items-center">
        <button className="p-2 mr-2">
          <SkipBack />
        </button>
        <button className="p-3 mr-2 rounded-full bg-purple-600">
          <Play />
        </button>
        <button className="p-2 mr-2">
          <SkipNext />
        </button>
      </div>
      {/* SONG INFO */}
      <div className="group flex flex-row items-center">
        {/* Song Thumbnail - ToDo: make seperate component */}
        <span
          className="w-12 h-12 bg-yellow-300 mr-2 flex justify-center content-center"
          style={{
            backgroundImage:
              "url('http://img.youtube.com/vi/othRjM828bk/0.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <button className="w-full invisible group-hover:visible text-white">
            {/* ToDo - Play Icon */}
            Play
          </button>
        </span>
        <div className="flex flex-col content-center">
          <p className="text-xs text-purple-600">
            Shared by <Link href="#">Goldie Alexander</Link>
          </p>
          <p className="text-sm hover:underline">
            <Link href="#">The Heinz Kiessling Orchestra - Remember Rio</Link>
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <button className="p-2 ml-4">
          <Volume />
        </button>
      </div>
    </div>
  </section>
);
export default Player;
