import { Link } from "react-router-dom";
import { HeartIcon2 } from "../../../assets/Icons";

const FavoriteButton = () => {
  return (
    <Link to="/profile/favorites">
      <div className="cursor-pointer text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
        <HeartIcon2 fill="#000" height={25} width={25} />
      </div>
    </Link>
  );
};

export default FavoriteButton;
