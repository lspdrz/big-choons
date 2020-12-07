import React from 'react'
import Link from 'next/link'
import OverflowDots from 'components/icons/OverflowDots'
import Play from 'components/icons/Play'
import NowPlayingMarquee from 'components/NowPlayingMarquee'

const SharedTrack: React.FC = () => (
  // Shared track card
  <div
    className="bg-white min-w-full overflow-hidden flex flex-col border border-gray-300 sm:mx-auto"
    style={{ height: 'fit-content' }}
  >
    {/* Card Header */}
    <div className="w-full p-4 border-b border-gray-300 flex flex-row justify-between">
      <div className="flex flex-row items-center">
        {/* User Avatar */}
        <span
          className="rounded-full bg-purple-600 p-3 mr-2"
          style={{
            backgroundImage: "url('https://thispersondoesnotexist.com/image')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></span>
        <p className="text-s mr-2">
          <Link href="#">Doug Walsh</Link>
        </p>
      </div>
      <div className="flex flex-row items-center">
        <Link href="#">
          <>
            <OverflowDots color="#1a202c" />
          </>
        </Link>
      </div>
    </div>
    {/* Card Body */}
    <div className="flex flex-col">
      <div className="relative">
        {/* Song Thumbnail - ToDo: make seperate component */}
        <span className="absolute bottom-0 pt-2 pl-4">
          {/* ToDo - Ternary for now playing */}
          <NowPlayingMarquee />
        </span>
        <span
          className="bg-purple-300 mb-3 flex justify-center content-center w-full h-48"
          style={{
            backgroundImage: "url('https://i.ytimg.com/vi/60Bd_93hzAU/mqdefault.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundColor: '#fff5f7',
          }}
        ></span>
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex flex-row items-center">
          <button className="p-2 mr-2 rounded-full bg-white border border-gray-900 hover:border-gray-300">
            <Play color="#1a202c" />
          </button>
          <div className="flex flex-col">
            <p className="text-base hover:underline">
              <Link href="#">{`Surface | Falling in Love 7" Edit (1983)`}</Link>
            </p>
            <p className="text-sm text-gray-600">00:00</p>
          </div>
        </div>
        {/* If no comment hide */}
        <div className="w-full bg-gray-100 mt-4 p-4 flex flex-col">
          <p className="text-gray-900">
            {`"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`}
          </p>
        </div>
        <div className="pt-3 flex flex-row justify-between w-full">
          <p className="text-xs text-gray-700">242424 Listens</p>
          <p className="text-xs text-purple-400">Expires in 00:00:00</p>
        </div>
      </div>
    </div>
  </div>
)
export default SharedTrack
