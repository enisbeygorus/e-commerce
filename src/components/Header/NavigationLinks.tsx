import NavigationLink from "./NavigationLink";
import { navigationData } from "./data";

interface INavigationLink {
  listClassName?: string;
}

const NavigationLinks = ({ listClassName }: INavigationLink) => {
  const content = navigationData.map((navObj) => {
    return (
      <li className={listClassName} key={navObj.name}>
        <NavigationLink text={navObj.name} value={navObj.path} />
      </li>
    );
  });

  return <>{content}</>;
};

export default NavigationLinks;
