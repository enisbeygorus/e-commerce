import { useState } from "react";

interface IDataItem {
  id: string;
  value: string;
}

interface IDropdown {
  data: Array<IDataItem>;
  value: string;
  onChange?: (id: string, value: string) => void;
  buttonClassName?: string;
}

const Dropdown = ({
  buttonClassName = "px-4 py-1",
  data,
  onChange,
  value = "",
}: IDropdown) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const toggleDropDown = (value?: boolean) => {
    if (typeof value === "boolean") {
      setShowDropDown(value);
      return;
    }
    setShowDropDown((prev) => !prev);
  };

  const selectItem = (id: string, value: string) => {
    setShowDropDown(false);
    if (onChange) {
      onChange(id, value);
    }
  };

  const sortItem = (listItem: IDataItem, index: number) => {
    return (
      <li key={index}>
        <div
          onClick={() => selectItem(listItem.id, listItem.value)}
          className="block w-full cursor-pointer text-center px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {listItem.value}
        </div>
      </li>
    );
  };

  const sortList = data.map((listItem, index) => {
    return sortItem(listItem, index);
  });

  const focusLost = () => {};

  return (
    <div onBlur={focusLost} className="relative min-w-[96px]">
      <button
        onClick={() => toggleDropDown()}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`relative w-full flex focus:outline-none text-gray-700 bg-white border-2 border-gray-400  font-medium rounded-lg text-sm text-center items-center ${buttonClassName}`}
        type="button"
      >
        <div className="flex-1">{value}</div>
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
