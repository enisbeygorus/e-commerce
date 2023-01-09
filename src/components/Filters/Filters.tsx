import React from "react";

const filtersData = [
  {
    name: "size",
    displayName: "Size",
    data: [
      { id: 0, displayName: "S", value: "s" },
      { id: 1, displayName: "M", value: "m" },
      { id: 2, displayName: "L", value: "l" },
      { id: 3, displayName: "XL", value: "xl" },
      { id: 4, displayName: "XLL", value: "xll" },
    ],
  },
  {
    name: "color",
    displayName: "Color",
    data: [
      { id: 0, displayName: "black", value: "black" },
      { id: 1, displayName: "blue", value: "blue" },
      { id: 2, displayName: "green", value: "green" },
      { id: 3, displayName: "red", value: "red" },
      { id: 4, displayName: "yellow", value: "yellow" },
      { id: 5, displayName: "black", value: "black" },
      { id: 6, displayName: "blue", value: "blue" },
      { id: 7, displayName: "green", value: "green" },
      { id: 8, displayName: "red", value: "red" },
      { id: 9, displayName: "yellow", value: "yellow" },
      { id: 10, displayName: "black", value: "black" },
      { id: 11, displayName: "blue", value: "blue" },
      { id: 12, displayName: "green", value: "green" },
      { id: 13, displayName: "red", value: "red" },
    ],
  },
];

const Filters = () => {
  const filters = filtersData.map((filter, index) => {
    return (
      <div className="border-b border-gray-300" key={index}>
        <h4 className="text-left font-bold text-lg mb-2">
          {filter.displayName}
        </h4>
        <ul className="pl-2 max-h-72 overflow-auto mb-2">
          {filter.data.map((filterObj, i) => {
            return (
              <li key={i} className="flex mb-2">
                <input
                  name="filter_checkbox"
                  id={`${index}_${filterObj.id}_${filterObj.value}`}
                  className="mr-4"
                  type="checkbox"
                />
                <label
                  htmlFor={`${index}_${filterObj.id}_${filterObj.value}`}
                  className="hover:underline cursor-pointer"
                >
                  {filterObj.displayName}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="pt-4">
      <h4 className="text-lg font-bold mb-2">Filters</h4>
      <hr />
      {filters}
    </div>
  );
};

export default Filters;
