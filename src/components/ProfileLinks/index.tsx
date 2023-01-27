import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/user";
import { profileLinks } from "../../constants";

interface IProfileLinks {
  className?: string;
}

const ProfileLinks = ({ className }: IProfileLinks) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(setUser(null));
    navigate("/");
  };

  const content = profileLinks.map((profileObj, index) => {
    if (profileObj.value === "logout") {
      return (
        <button
          key={index}
          onClick={logOutHandler}
          className="py-2 hover:text-green-600 text-left"
        >
          Log out
        </button>
      );
    }
    return (
      <Link
        key={index}
        to={profileObj.path}
        className="py-2 hover:text-green-600"
      >
        {profileObj.displayName}
      </Link>
    );
  });

  return (
    <div
      className={`flex text-sm  rounded-md h-full max-h-[24rem] overflow-auto ${className}`}
    >
      {content}
    </div>
  );
};

export default ProfileLinks;
