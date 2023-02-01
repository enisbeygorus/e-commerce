import { IAddress } from "../../types";
import { TrashCanIcon } from "../../assets/Icons";
import Button from "../Button/Button";

interface IAddressFC extends IAddress {
  onDeleteButtonClick: (addressId: string) => void;
  onEditButtonClick: (addressId: string) => void;
}

const Address = ({
  addressId,
  adddressTitle,
  city,
  district,
  fullAddress,
  name,
  lastName,
  phone,
  onDeleteButtonClick,
  onEditButtonClick,
}: IAddressFC) => {
  return (
    <div className="w-full border border-gray-200 rounded-md">
      <div className="h-10 bg-gray-100 w-full flex items-center px-3 text-black font-semibold">
        {adddressTitle}
      </div>
      <div className="text-xs leading-6 p-3 pb-1 h-32">
        <div className="text-sm font-semibold">
          {name} {lastName}
        </div>
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {fullAddress}
        </div>
        <div>
          {district} / {city}
        </div>
        <div>{phone}</div>
      </div>
      <div className="flex justify-between items-center px-2 my-2">
        <Button onClick={() => onDeleteButtonClick(addressId)}>
          <TrashCanIcon width={20} height={20} />
        </Button>
        <div>
          <Button
            onClick={() => onEditButtonClick(addressId)}
            text="Edit"
            className="border border-gray-500 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
