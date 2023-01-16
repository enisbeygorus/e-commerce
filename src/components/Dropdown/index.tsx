import { useState } from "react";

interface IDataItem {
  id: string;
  value: string;
}

interface IDropdown {
  data: Array<IDataItem>;
  defaultSelectedId: string;
  onChange?: (id: string, value: string) => void;
  buttonClassName?: string;
}

const Dropdown = ({
  buttonClassName = "px-4 py-1",
  data,
  onChange,
  defaultSelectedId,
}: IDropdown) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [_seletedId, _setSelectedId] = useState<string>(defaultSelectedId);

  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const selectItem = (id: string, value: string) => {
    _setSelectedId(value);
    setShowDropDown(false);
    if (onChange) {
      onChange(id, value);
    }
  };

  const sortItem = (listItem: IDataItem, index: number) => (
    <li key={index}>
      <button
        onClick={() => selectItem(listItem.id, listItem.value)}
        className="block w-full text-center px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {listItem.value}
      </button>
    </li>
  );

  const sortList = data.map((listItem, index) => {
    return sortItem(listItem, index);
  });

  return (
    <div className="relative min-w-[96px]">
      <button
        onClick={toggleDropDown}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`relative w-full flex focus:outline-none text-gray-700 bg-white border-2 border-gray-400  font-medium rounded-lg text-sm text-center items-center ${buttonClassName}`}
        // className="px-4 py-1 relative w-full flex focus:outline-none text-white bg-gray-700 hover:bg-gray-800  font-medium rounded-lg text-sm text-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <div className="flex-1">
          {data.find((obj) => obj.id === _seletedId)?.value}
        </div>
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
        }  w-full max-h-[200px] overflow-auto z-10 absolute top-full  bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700`}
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

export default Dropdown;
