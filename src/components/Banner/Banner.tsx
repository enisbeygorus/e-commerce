import Button from "../Button/Button";
import _women_model_1 from "../../assets/images/women_model_1_transparent.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "#ffa861", height: "70vh" }}
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
              <a href="/products">
                <Button text="Shop Now" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block max-w-[410px] w-1/3 absolute right-0 top-1/2 -translate-y-1/2 z-20">
            <img className="w-full" src={_women_model_1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
