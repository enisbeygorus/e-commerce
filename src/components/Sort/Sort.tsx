import { useState } from "react";

const sortData = [
  { id: 0, displayName: "Recommended" },
  { id: 1, displayName: "Price: Low to High" },
  { id: 2, displayName: "Price: High to Low" },
  { id: 3, displayName: "A-Z" },
  { id: 4, displayName: "Z-A" },
];

interface ISortDataItem {
  id: number;
  displayName: string;
}

const Sort = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [seletedValue, setSelectedValue] = useState<number>(0);

  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const selectItem = (value: number) => {
    setSelectedValue(value);
    setShowDropDown(false);
  };

  const sortItem = (listItem: ISortDataItem, index: number) => (
    <li key={index}>
      <button
        onClick={() => selectItem(listItem.id)}
        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {listItem.displayName}
      </button>
    </li>
  );

  const sortList = sortData.map((listItem, index) => {
    return sortItem(listItem, index);
  });

  return (
    <div className="relative min-w-[175px]">
      <button
        onClick={toggleDropDown}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="relative w-full text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {sortData.find((data) => data.id === seletedValue)?.displayName}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`${
          showDropDown ? "block" : "hidden"
        } z-10 absolute top-full  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {sortList}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
