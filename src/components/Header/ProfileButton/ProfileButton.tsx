import { Link } from "react-router-dom";
import { ProfileIcon } from "../../../assets/Icons";
import "./ProfileButton.css";

import ProfileLinks from "../../ProfileLinks";

const ProfileButton = () => {
  return (
    <div
      id="header-profile-button-wrapper"
      className="cursor-pointer relative z-10 text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm  mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
    >
      <Link to={"/profile"}>
        <div className="px-4 lg:px-8 py-2 lg:py-2.5">
          <ProfileIcon width={25} height={25} />
        </div>
      </Link>

      <div
        id="header-profile-list"
        className="header-profile-list hidden absolute left-1/2 -translate-x-1/2 top-full bg-white  pt-2 rounded-md"
      >
        <ProfileLinks className="border-2 p-4" />
      </div>
    </div>
  );
};

export default ProfileButton;
