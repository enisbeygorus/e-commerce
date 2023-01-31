import { useState, useEffect } from "react";
import Section from "../components/Section/Section";
import Orders from "../components/Orders/Orders";
import ProfileLinks from "../components/ProfileLinks";
import { useParams } from "react-router-dom";
import FavoriteProducts from "../components/FavoriteProducts/FavoriteProducts";
import { AngleDownIcon } from "../assets/Icons";
import AddressList from "../components/Address/AddressList";

const Profile = () => {
  const { profileTab } = useParams();
  const [shoMobileDropDownMenu, setMobileDropDownMenu] =
    useState<boolean>(false);

  const mobileDropDownMenuHandler = (value?: boolean) => {
    if (typeof value === "boolean") {
      setMobileDropDownMenu(false);
      return;
    }
    setMobileDropDownMenu((prev) => !prev);
  };

  useEffect(() => {
    mobileDropDownMenuHandler(false);
  }, [profileTab]);

  const contentComponentHandler = () => {
    if (profileTab === "orders") {
      return <Orders />;
    }

    if (profileTab === "favorites") {
      return <FavoriteProducts />;
    }
    if (profileTab === "adresses") {
      return <AddressList />;
    }

    return <Orders />;
  };

  const mobileSideBarMenu = () => {
    return (
      <>
        <button
          onClick={() => mobileDropDownMenuHandler()}
          className="flex justify-between items-center border rounded-md p-2 border-gray-400 md:hidden"
        >
          <div>Menu</div>
          <div>
            <AngleDownIcon width={10} height={10} />
          </div>
        </button>
        <div className="flex justify-center order-2 mb-4  text-center text-lg capitalize">
          <div className="border-b border-gray-400 md:hidden">{profileTab}</div>
        </div>
        <div
          className={` px-2 rounded-md mb-2 md:mb-0 overflow-hidden ${
            shoMobileDropDownMenu ? "" : "h-0"
          }`}
        >
          <ProfileLinks className="text-base flex-col w-full md-hidden" />
        </div>
      </>
    );
  };

  return (
    <Section maxWidth="max-w-[1250px]">
      <div className="w-full flex flex-col md:flex-row min-h-[80vh]">
        <div className="w-full px-2 flex flex-col md:w-48 font-bold">
          <div className="flex flex-col">
            {mobileSideBarMenu()}

            <div className="hidden mb-4 text-2xl text-left border-b border-gray-400 md:block md:mb-0">
              Profile
            </div>
            <ProfileLinks className="hidden text-base flex-col w-full  md:flex" />
          </div>
        </div>
        <div className="flex-1">
          <div>{contentComponentHandler()}</div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
