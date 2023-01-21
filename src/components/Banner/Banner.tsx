import Button from "../Button/Button";
import _women_model_1 from "../../assets/images/women_model_1_transparent.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "#ffa861", height: "80vh" }}
      className="w-full "
    >
      <div className="max-w-[1250px] flex h-full w-4/5 relative m-auto">
        <div className="flex w-full  h-full ">
          <div className="flex flex-col justify-center text-left ">
            <h6 className="text-lg font-bold">New Collection</h6>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              With great quality
            </h1>
            <h1 className="text-4xl font-bold mb-4">Make yourself happy</h1>
            <div className="flex">
              <Link to="/products">
                <Button
                  text="Shop Now"
                  className="bg-white hover:bg-gray-200 text-black rounded-full"
                />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden h-full max-w-[410px] w-1/3 absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <img alt="banner_image" className="w-full" src={_women_model_1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
