import Dropdown from "../Dropdown";
import InputMask from "react-input-mask";
import Input from "../Input/Input";
import { useState } from "react";
import Button from "../Button/Button";

interface Address {
  name: string;
  lastName: string;
  phone: string;
  country: string;
  city: string;
  district: string;
  fullAddress: string;
  adddressTitle: string;
}

const AddAddress = () => {
  const [addresseInfo, setAddresseInfo] = useState<Address>({
    name: "",
    adddressTitle: "",
    city: "",
    district: "",
    country: "",
    fullAddress: "",
    lastName: "",
    phone: "",
  });

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const setAddresseInfoHandler = (propertyName: string, value: string) => {
    setAddresseInfo((prev) => {
      return { ...prev, [propertyName]: value };
    });
  };

  const inputOnChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAddresseInfoHandler(e.currentTarget.name, e.currentTarget.value);
  };
  const textAreaOnChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setAddresseInfoHandler(e.currentTarget.name, e.currentTarget.value);
  };

  const countryDropDownOnChange = (id: string) => {
    setAddresseInfoHandler("country", id);
  };
  const cityDropDownOnChange = (id: string, value: string) => {
    setAddresseInfoHandler("city", id);
  };
  const districtDropDownOnChange = (id: string, value: string) => {
    setAddresseInfoHandler("district", id);
  };

  return (
    <div>
      <form className="px-2" onSubmit={onSubmitHandler}>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <label>Name</label>
            <Input
              onChange={inputOnChangeHandler}
              autoComplete="current-name"
              type="text"
              name="name"
              id="name"
              placeholder="name"
              required
            />
          </div>
          <div className="flex-1 px-2">
            <label>Last Name</label>
            <Input
              onChange={inputOnChangeHandler}
              autoComplete="current-lastName"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name"
              required
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <div>Phone</div>
            <InputMask
              onChange={inputOnChangeHandler}
              name="phone"
              className="bg-gray-50 border border-gray-300 rounded-md w-full p-2 h-11"
              mask="0(599) 999 99 99"
              maskPlaceholder="_(___) ___ __ __"
            />
          </div>
          <div className="flex-1 px-2">
            <div>Country</div>
            <Dropdown
              buttonClassName="p-2 bg-gray-50 border border-gray-300 h-11"
              onChange={countryDropDownOnChange}
              data={[{ id: "turkey", value: "Turkey" }]}
              value={"Turkey"}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <div>City</div>
            <Dropdown
              buttonClassName="px-4 py-1 bg-gray-50 border border-gray-300 h-11"
              onChange={cityDropDownOnChange}
              data={[{ id: "istanbul", value: "istanbul" }]}
              value={""}
            />
          </div>
          <div className="flex-1 px-2">
            <div>District</div>
            <Dropdown
              buttonClassName="px-4 py-1 bg-gray-50 border border-gray-300 h-11"
              onChange={districtDropDownOnChange}
              data={[
                { id: "şişli", value: "şişli" },
                { id: "beşiktaş", value: "beşiktaş" },
                { id: "kağıthane", value: "kağıthane" },
              ]}
              value={""}
            />
          </div>
        </div>
        <div className="flex mb-4 px-2">
          <textarea
            onChange={textAreaOnChangeHandler}
            className="h-16 text-sm px-1 py-2 rounded-md border border-gray-300 w-full"
            name="fullAddress"
          />
        </div>
        <div className="px-2 mb-8">
          <label>Address Title</label>
          <Input
            onChange={inputOnChangeHandler}
            autoComplete="current-addressTitle"
            type="text"
            name="addressTitle"
            id="addressTitle"
            placeholder="address title"
            required
          />
        </div>
        <div className="flex justify-end px-2">
          <Button
            text="Save"
            className="bg-green-700 w-full  md:w-1/3 rounded-md text-white capitalize"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
