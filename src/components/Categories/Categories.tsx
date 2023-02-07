import { Link } from "react-router-dom";
import Button from "../Button/Button";
const Categories = () => {
  return (
    <div className="categories w-full flex flex-col md:flex-row gap-2 h-auto md:h-screen max-h-[750px] text-gray-700 px-2 md:px-0">
      <div className="col w-full  md:w-1/4 flex flex-col gap-2">
        <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            // src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            src="https://www.hollylolly.net/palasia-pantolon-gri-_pantolon-_holly-lolly-17758-27-O.jpg"
            alt=""
          />
          <Link className="link" to="/discount">
            <Button
              text="Discount"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
            ></Button>
          </Link>
        </div>
        <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            // src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            src="https://i.pinimg.com/750x/fc/2f/6e/fc2f6ee37f27f8bd1204e7fb32f88955.jpg"
            alt=""
          />
          <Link to="/new-season" className="link">
            <Button
              text="New Season"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
            ></Button>
          </Link>
        </div>
      </div>
      <div className="col w-full md:w-1/4 flex flex-col gap-2">
        <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            // src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            src="https://thumbs.dreamstime.com/b/attention-black-man-shouting-megaphone-yellow-background-happy-young-male-model-screaming-loud-speaker-studio-157508305.jpg"
            alt=""
          />
          <Link to="/sweatshirt" className="link">
            <Button
              text="Sweatshirt"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
            ></Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 col col-1 flex flex-col gap-2">
        <div className="row flex-col md:flex-row md:flex-1 flex gap-2 overflow-hidden relative">
          <div className="col md:flex-1 flex flex-col gap-2">
            <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
              <img
                loading="lazy"
                className="object-cover w-full h-full"
                // src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                src="https://i.pinimg.com/736x/97/88/e0/9788e0e1e958c9484b7e43ff91ce103d.jpg"
                alt=""
              />
              <Link to="/men" className="link">
                <Button
                  text="Men"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
                ></Button>
              </Link>
            </div>
          </div>
          <div className="col md:flex-1 flex flex-col gap-2">
            <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
              <img
                loading="lazy"
                className="object-cover w-full h-full"
                // src="https://www.hollylolly.net/palasia-pantolon-gri-_pantolon-_holly-lolly-17758-27-O.jpg"
                // src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                src="https://i.pinimg.com/originals/5f/5e/84/5f5e849584d136179caa8ae061901a09.jpg"
                alt=""
              />
              <Link to="/women" className="link">
                <Button
                  text="Women"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
                ></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row h-14 md:h-auto md:flex-1 md:flex overflow-hidden relative">
          <img
            loading="lazy"
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link to="/shoes" className="link">
            <Button
              text="Shoes"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-10"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
