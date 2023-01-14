import "./SkeletonStyle.css";
const SkeletonLoading = () => {
  return (
    <div className="w-full relative flex flex-col overflow-hidden">
      <div
        style={{ aspectRatio: "1 / 1.42" }}
        className="skeleton-loading h-full flex-1 rounded-md  relative flex justify-center items-center  bg-gray-200"
      ></div>
      <div className="w-full rounded-md h-4 my-3 bg-gray-200"></div>
      <div className="flex justify-between">
        <div className="skeleton-loading w-1/2 rounded-md h-4 my-3 bg-gray-200"></div>
        <div className="skeleton-loading w-1/4 rounded-md h-4 my-3 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
