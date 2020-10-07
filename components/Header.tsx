import React from "react";
import Link from "next/link";
import useModal from "../hooks/useModal";
import modalConfirms from "../constants/confirms/modalConfirms";

const Header = () => {
  const { openModal } = useModal();
  return (
    <nav className="p-4 h-15 w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-900 fixed top-0">
      <div className="flex items-center justify-between">
        <p className="font-bold text-pink-500">
          <Link href="#">Big Choonz</Link>
        </p>
        <div className="flex">
          <p className="ml-4 text-pink-500">
            {/* TODO: Change focus to something else for accessibility */}
            <button
              className="focus:outline-none"
              onClick={() => openModal(modalConfirms.SEARCH_MODAL)}
            >
              + Song
            </button>
          </p>
          <p className="ml-4 text-black">
            <Link href="#">Profile</Link>
          </p>
          <p className="ml-4 text-black">
            <Link href="#">Logout</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Header;
