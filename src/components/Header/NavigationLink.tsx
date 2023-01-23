import { Link } from "react-router-dom";
interface INavigationLink {
  text: string;
  value: string;
}

const NavigationLink = ({ text, value }: INavigationLink) => {
  return (
    <Link
      to={value}
      className="mx-2 block py-2 px-2 text-xl  text-gray-700 rounded-lg border-b border-gray-100 hover:bg-gray-200  lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
    >
      {text}
    </Link>
  );
};

export default NavigationLink;
