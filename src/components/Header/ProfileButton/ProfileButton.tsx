import { Link } from "react-router-dom";
import { ProfileIcon } from "../../../assets/Icons";
import "./ProfileButton.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/reducers/user";

const ProfileButton = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(setUser(null));
  };

  return (
    <div
      id="header-profile-button-wrapper"
      className="cursor-pointer relative z-10 text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      <Link to={"/profile"}>
        <ProfileIcon width={25} height={25} />
      </Link>

      <div
        id="header-profile-list"
        className="header-profile-list hidden absolute left-1/2 -translate-x-1/2 top-full bg-white  pt-2 rounded-md"
      >
        <div className="flex flex-col text-sm w-48 border-2 rounded-md h-full max-h-[24rem] overflow-auto p-4">
          <Link className="py-2 hover:text-green-600" to="/profile/orders">
            Orders
          </Link>
          <Link className="py-2 hover:text-green-600" to="/profile/info">
            Adresses
          </Link>
          <button
            onClick={logOutHandler}
            className="py-2 hover:text-green-600 text-left"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
