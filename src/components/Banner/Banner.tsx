import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  const bgImageUrl =
    "https://st3.depositphotos.com/9880800/15621/i/1600/depositphotos_156219884-stock-photo-stylish-man-with-motorbike.jpg";
  return (
    <div
      style={{
        height: "80vh",
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImageUrl})`,
        backgroundSize: "cover",
      }}
      className="w-full bg-gray-700 bg-cover"
    >
      <div className="flex w-full md:w-4/5 h-full relative m-auto text-white">
        <div className="flex justify-start w-full  h-full ">
          <div className="w-full  px-4  flex flex-col justify-center text-left  md:px-10">
            <h6 className="text-lg font-bold">New Collection</h6>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              With great quality
            </h1>
            <h1 className="text-4xl font-bold mb-4">Make yourself happy</h1>
            <div className="flex">
              <Link to="/products">
                <Button
                  text="Shop Now"
                  className="bg-white hover:bg-gray-200 text-gray-700 rounded-full"
                />
              </Link>
            </div>
          </div>
          <div className=" lg:block w-full overflow-hidden h-full md:w-1/3 absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <div>
              {/* <img src="https://st3.depositphotos.com/9880800/15621/i/1600/depositphotos_156219884-stock-photo-stylish-man-with-motorbike.jpg" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
