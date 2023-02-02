import InputMask from "react-input-mask";
import Input from "../Input/Input";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { IAddress } from "../../types/userTypes";
import { useDispatch } from "react-redux";
import { setAddress, updateAddress } from "../../store/reducers/user";
import { ReactSelect, SelectOptionType } from "../Dropdown/ReactSelect";

interface IAddAddress {
  onSuccess: () => void;
  onFail: () => void;
  onSubmitStart: () => void;
  address?: IAddress | null;
  isEdit: boolean;
}

const AddAddress = ({
  onSubmitStart,
  onSuccess,
  address,
  isEdit,
  onFail,
}: IAddAddress) => {
  const dispatch = useDispatch();

  const [addressInfo, setAddresseInfo] = useState<IAddress>(
    address
      ? address
      : {
          addressId: "",
          name: "",
          adddressTitle: "",
          city: "",
          district: "",
          country: "",
          fullAddress: "",
          lastName: "",
          phone: "",
        }
  );

  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (address) {
      setAddresseInfo(address);
    }
  }, [address]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const isFormValid = !(
      Object.keys(addressInfo) as Array<keyof typeof addressInfo>
    ).some((key) => {
      if (key !== "addressId") {
        return addressInfo[key] === "";
      }
      return false;
    });

    if (!isFormValid) {
      setIsValid(false);
      return;
    }

    // onFail();

    const phoneModified = addressInfo.phone
      .replace("(", "")
      .replace(")", "")
      .split(" ")
      .join("");
    const _addresseInfo = {
      ...addressInfo,
      addressId: Math.floor(Math.random() * 1000000).toString(),
      phone: phoneModified,
    };

    console.log("_addresseInfo:", _addresseInfo);
    onSubmitStart();

    if (isEdit) {
      setTimeout(() => {
        onSuccess();
        dispatch(updateAddress(_addresseInfo));
      }, 2000);
      return;
    }

    setTimeout(() => {
      onSuccess();
      dispatch(setAddress(_addresseInfo));
    }, 2000);
  };

  const setAddresseInfoHandler = (propertyName: string, value: string) => {
    setIsValid(true);

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

  const countryDropDownOnChange = (option: SelectOptionType) => {
    setAddresseInfoHandler("country", option.value);
  };
  const cityDropDownOnChange = (option: SelectOptionType) => {
    setAddresseInfoHandler("city", option.value);
  };
  const districtDropDownOnChange = (option: SelectOptionType) => {
    setAddresseInfoHandler("district", option.value);
  };

  const countrySelectOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const selectDefaultValueHandler = (value: string) => {
    if (!value) return undefined;
    const option = countrySelectOptions.find(
      (option) => option.value === value
    );
    return option;
  };

  return (
    <div>
      <div className="px-4 text-xl text-black font-semibold mb-2">
        Add Address
      </div>
      <hr />
      <form className="px-2" onSubmit={onSubmitHandler}>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <label>Name</label>
            <Input
              defaultValue={addressInfo.name}
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
              defaultValue={addressInfo.lastName}
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
              // defaultValue={addressInfo.phone}
              defaultValue={"05112223344"}
              onChange={inputOnChangeHandler}
              name="phone"
              className="bg-gray-50 border border-gray-300 rounded-md w-full p-2 h-11"
              mask="0(599) 999 99 99"
              maskPlaceholder="_(___) ___ __ __"
            />
          </div>
          <div className="flex-1 px-2">
            <div>Country</div>
            <ReactSelect
              defaultValue={selectDefaultValueHandler(addressInfo.country)}
              wrapperStyle={{
                backgroundColor: "#f9fafb",
                height: "44px",
                borderRadius: "8px",
              }}
              options={countrySelectOptions}
              onChange={countryDropDownOnChange}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <div>City</div>
            <ReactSelect
              defaultValue={selectDefaultValueHandler(addressInfo.city)}
              wrapperStyle={{
                backgroundColor: "#f9fafb",
                height: "44px",
                borderRadius: "8px",
              }}
              options={countrySelectOptions}
              onChange={cityDropDownOnChange}
            />
          </div>
          <div className="flex-1 px-2">
            <div>District</div>
            <ReactSelect
              defaultValue={selectDefaultValueHandler(addressInfo.district)}
              wrapperStyle={{
                backgroundColor: "#f9fafb",
                height: "44px",
                borderRadius: "8px",
              }}
              options={countrySelectOptions}
              onChange={districtDropDownOnChange}
            />
          </div>
        </div>
        <div className="flex mb-4 px-2">
          <textarea
            defaultValue={addressInfo.fullAddress}
            onChange={textAreaOnChangeHandler}
            className="h-16 text-sm px-1 py-2 rounded-md border border-gray-300 w-full"
            name="fullAddress"
          />
        </div>
        <div className="px-2 mb-2">
          <label>Address Title</label>
          <Input
            defaultValue={addressInfo.adddressTitle}
            onChange={inputOnChangeHandler}
            autoComplete="current-addressTitle"
            type="text"
            name="adddressTitle"
            id="adddressTitle"
            placeholder="address title"
            required
          />
        </div>
        <div
          className={`px-2 mb-2 text-red-500 font-bold ${
            isValid ? "opacity-0" : ""
          } `}
        >
          Please fill all fields
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
