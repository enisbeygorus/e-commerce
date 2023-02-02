import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";
import Button from "../Button/Button";
import Address from "./Address";
import { ModalAddAddress } from "../Modal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../store/reducers/user";
import { IAddress } from "../../types";

const AddressList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(ACTION_SELECTORS.getUser);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<IAddress | null>(null);

  useEffect(() => {
    if (editAddress) {
      toggleAddAdressModal(true);
    }
  }, [editAddress]);

  const toggleAddAdressModal = (value?: boolean) => {
    if (typeof value === "boolean") {
      setIsModalOpen(value);
      return;
    }
    setIsModalOpen((prev) => !prev);
  };

  const onModalClose = () => {
    toggleAddAdressModal(false);
    setEditAddress(null);
  };

  const deleteAddressHandler = (addressId: string) => {
    dispatch(deleteAddress(addressId));
  };

  const editAddressHandler = (addressId: string) => {
    if (!user) return;
    if (user.addresses.length === 0) return;

    const filteredAddress = user.addresses.find(
      (address) => address.addressId === addressId
    );

    if (filteredAddress) {
      setEditAddress(filteredAddress);
    }
  };

  const listAddresses = () => {
    if (!user) return null;
    if (!user.addresses) return null;
    if (user.addresses.length === 0) {
      return (
        <div className="text-center w-full text-lg font-semibold ">
          Address list is empty...
        </div>
      );
    }

    return user.addresses.map((address: IAddress, index) => {
      return (
        <div key={index} className="flex w-1/2 lg:w-1/3 p-2 sm:p-4">
          <Address
            onEditButtonClick={editAddressHandler}
            onDeleteButtonClick={deleteAddressHandler}
            {...address}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="px-4 flex justify-end">
        <Button
          onClick={() => toggleAddAdressModal()}
          className="border rounded-md border-gray-500 mb-2"
          text="Add New Address"
        />
      </div>
      <div className="flex flex-wrap">{listAddresses()}</div>
      <ModalAddAddress
        editAddress={editAddress}
        toggleAddAdressModal={toggleAddAdressModal}
        onModalClose={onModalClose}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default AddressList;
