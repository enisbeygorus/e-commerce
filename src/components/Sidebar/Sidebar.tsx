import { navigationData } from "../Header/data";
import NavigationLink from "../Header/NavigationLink";
import { CloseIcon } from "../../assets/Icons";

interface ISidebar {
  showSideBar: boolean;
  toggleSideBarHandler: () => void;
}

const Sidebar = ({ showSideBar, toggleSideBarHandler }: ISidebar) => {
  const content = navigationData.map((navObj) => {
    return (
      <li className={"border-b "} key={navObj.name}>
        <NavigationLink text={navObj.name} value={navObj.path} />
      </li>
    );
  });

  return (
    <div className="block lg:hidden">
      <div
        onClick={toggleSideBarHandler}
        className={`fixed w-full h-full bg-gray-500 opacity-50 z-40 ${
          showSideBar ? "block" : "hidden"
        }`}
      ></div>
      <div
        style={{ transition: "all 0.5s ease-in-out" }}
        className={`fixed left-0 h-screen z-50 bg-white pt-4 overflow-hidden ${
          showSideBar ? "w-80 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="flex items-center text-lg mb-4 h-10">
          <div className="flex-1 text-center">Menu</div>
          <button
            onClick={toggleSideBarHandler}
            style={{}}
            type="button"
            className="text-gray-400 bg-transparent mx-4 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <CloseIcon width={25} height={25} />
          </button>
        </div>
        <hr />
        <ul>{content}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
