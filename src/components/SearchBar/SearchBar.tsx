import { useState } from "react";
import { SearchIcon } from "../../assets/Icons";

const SearchBar = () => {
  const [, setSearchText] = useState<string>("");

  const searchTextHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  return (
    <div className="w-full h-full">
      {/* <div
        className={`${
          showSearchInput ? "hidden" : "flex"
        } flex justify-end h-full`}
      >
        <div
          onClick={toggleShowSearchInput}
          className="aspect-square flex justify-center items-center cursor-pointer"
        >
          <SearchIcon width={20} height={20} fill="#374151" />
        </div>
      </div> */}
      <div className={`flex  relative `}>
        <label className="opacity-0" htmlFor="search-bar"></label>
        <input
          id="search-bar"
          onChange={searchTextHandler}
          className="flex-1 text-sm text-gray-700 rounded-md bg-gray-200 border-2 outline-none py-2 pr-10 pl-4"
        />
        <div className="absolute aspect-square h-full top-1/2 -translate-y-1/2 right-0 cursor-pointer ">
          <div className="w-full h-full flex justify-center items-center">
            <SearchIcon width={20} height={20} fill="#374151" />
          </div>
        </div>
      </div>
      <div className="hidden">drop down</div>
    </div>
  );
};

export default SearchBar;
