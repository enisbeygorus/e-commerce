import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";
import Address from "./Address";

const AddressList = () => {
  const { user } = useSelector(ACTION_SELECTORS.getUser);

  const listAddresses = () => {
    if (!user) return null;
    if (user.adresses.length === 0) return null;

    return user.adresses.map((address, index) => {
      return (
        <div key={index} className="flex w-1/2 md:w-1/3 p-2 sm:p-4">
          <Address {...address} />
        </div>
      );
    });
  };

  return <div className="flex flex-wrap">{listAddresses()}</div>;
};

export default AddressList;
