import { IAddress } from "../../types";
const Address = ({
  adddressTitle,
  city,
  district,
  fullAddress,
  name,
  lastName,
  phone,
}: IAddress) => {
  return (
    <div className="w-full border border-gray-200 rounded-md">
      <div className="h-10 bg-gray-100 w-full flex items-center px-2">
        {adddressTitle}
      </div>
      <div className="text-xs leading-6 p-3 pb-1">
        <div className="text-sm font-semibold">
          {name} {lastName}
        </div>
        <div>{fullAddress}</div>
        <div>
          {district} / {city}
        </div>
        <div>{phone}</div>
      </div>
      <div className="flex justify-between px-2">
        <div>delete</div>
        <div>edit</div>
      </div>
    </div>
  );
};

export default Address;
