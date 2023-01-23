import { IFiltersData, filtersData } from "./data";

const Filters = () => {
  const filters = filtersData.map((filter: IFiltersData, index) => {
    return (
      <div className="border-b border-gray-300" key={index}>
        <h4 className="text-black text-left font-bold text-lg mb-2">
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
                  className="capitalize hover:underline cursor-pointer text-black w-24"
                >
                  {filterObj.displayName}
                </label>
                {filterObj.colorCode ? (
                  <div className="ml-3 flex justify-center items-center">
                    <div
                      style={{ backgroundColor: filterObj.colorCode }}
                      className="w-5 h-5 rounded-full "
                    ></div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="pt-4">
      <div className="mb-8"></div>
      {filters}
    </div>
  );
};

export default Filters;
