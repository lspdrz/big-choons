import React from "react";
import Link from "next/link";

const Player = () => (
  <section className="w-full border-t bg-white h-20 p-4 fixed bottom-0">
    <div className="flex flex-row justify-between w-full h-full">
      {/* PLAYER CONTROLS */}
      <div className="flex flex-row justify-self-start items-center">
        <span className="h-8 w-8 bg-pink-500 mr-2" />
        <span className="h-12 w-12 bg-pink-800 mr-2" />
        <span className="h-8 w-8 bg-pink-500 mr-2" />
      </div>
      {/* SONG INFO */}
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
          <button className="w-full invisible group-hover:visible text-white">
            {/* ToDo - Play Icon */}
            Play
          </button>
        </span>
        <div className="flex flex-col content-center">
          <p className="text-xs text-gray-600">
            Shared by <Link href="#">User Name</Link>
          </p>
          <p className="text-lg hover:underline">
            <Link href="#">►The Heinz Kiessling Orchestra◄ - Remember Rio</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default Player;
