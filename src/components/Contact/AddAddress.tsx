import Dropdown from "../Dropdown";
import InputMask from "react-input-mask";
import Input from "../Input/Input";

const AddAddress = () => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const countryDropDownOnChange = (id: string, value: string) => {
    console.log("id:", id);
  };

  const phoneOnChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    console.log("value:", event.currentTarget.value);
  };

  return (
    <div>
      <form className="px-2" onSubmit={onSubmitHandler}>
        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <label>Name</label>
            <Input
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
              onChange={phoneOnChangeHandler}
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
              data={[{ id: "1", value: "Turkey" }]}
              value={"Turkey"}
            />
          </div>
        </div>

        <div className="flex mb-4">
          <div className="flex-1 px-2">
            <div>City</div>
            <Dropdown
              buttonClassName="px-4 py-1 bg-gray-50 border border-gray-300 h-11"
              onChange={countryDropDownOnChange}
              data={[{ id: "1", value: "Turkey" }]}
              value={""}
            />
          </div>
          <div className="flex-1 px-2">
            <div>District</div>
            <Dropdown
              buttonClassName="px-4 py-1 bg-gray-50 border border-gray-300 h-11"
              onChange={countryDropDownOnChange}
              data={[{ id: "1", value: "Turkey" }]}
              value={""}
            />
          </div>
        </div>

        <div className="flex mb-4 px-2">
          <textarea
            className="h-16 text-sm px-1 py-2 rounded-md border border-gray-300 w-full"
            name="addressLine"
          />
        </div>

        <div className="px-2">
          <label>Address Title</label>
          <Input
            autoComplete="current-addressTitle"
            type="text"
            name="addressTitle"
            id="addressTitle"
            placeholder="address title"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
