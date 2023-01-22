import "./SkeletonStyle.css";
import Section from "../../Section/Section";

const ProductSingleSkeletonLoading = () => {
  return (
    <Section maxWidth="max-w-[1250px]">
      <div id="" className="md:flex w-full">
        <div className="flex flex-1 md:w-1/2 justify-center mb-8">
          <div className="flex w-full ">
            <div className="hidden w-32 px-4 md:block">
              <div className="skeleton-loading h-32 w-full"> </div>
            </div>
            <div className="flex justify-center items-center w-full px-4">
              <div
                style={{ aspectRatio: "1/ 1.2" }}
                className="skeleton-loading w-1/2 md:w-full"
              ></div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:pl-4 md:w-1/2">
          <div className="skeleton-loading w-11/12  h-6 mb-4"></div>
          <div className="skeleton-loading w-3/12  h-6 mb-8"></div>
          <div className="skeleton-loading w-20 h-32  mb-8"></div>
          <div className="skeleton-loading w-3/12 h-6  mb-8"></div>
          <div className="skeleton-loading w-3/12 h-6  mb-8"></div>
          <div className="skeleton-loading w-5/12 h-10  mb-8"></div>
        </div>
      </div>
    </Section>
  );
};

export default ProductSingleSkeletonLoading;
