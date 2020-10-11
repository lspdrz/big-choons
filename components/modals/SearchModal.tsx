import React from "react";
import BaseModal from "./BaseModal";

const SearchModal = () => (
  <BaseModal>
    <div className="max-w-2xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-between focus:border-b focus:border-purple-500 py-2">
          <input
            className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="What's your favorite song today?"
            aria-label="Search for a song"
          />
          <button
            className="flex-shrink-0 bg-purple-600 hover:bg-tepurpleal-700 border-purple-600 hover:border-purple-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Search{" "}
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </BaseModal>
);

export default SearchModal;
