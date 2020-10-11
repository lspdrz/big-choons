import React from "react";
import BaseModal from "./BaseModal";

const SearchModal = () => (
  <BaseModal>
    <div className="max-w-2xl flex flex-col">
      <div className="flex flex-row w-full border-b border-gray-400 px-8 py-4 ">
        <p className="text-lg text-purple-600">Choose a song</p>
      </div>
      <form className="bg-white px-8 py-8">
        <div className="flex items-center justify-between focus:border-b focus:border-purple-500">
          <input
            className="text-2xl w-full appearance-none bg-transparent text-gray-700 mr-3 py-4 border-b border-white leading-tight bg-white focus:outline-none transition-all"
            type="text"
            placeholder="What's your favorite song today?"
            aria-label="Search for a song"
          />
          <button
            className="flex-shrink-0 bg-purple-600 hover:bg-tepurpleal-700 border-purple-600 hover:border-purple-700 border-4 text-white py-4 px-4"
            type="button"
          >
            Search{" "}
          </button>
        </div>
      </form>
    </div>
  </BaseModal>
);

export default SearchModal;
