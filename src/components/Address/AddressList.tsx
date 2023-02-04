import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";
import Button from "../Button/Button";
import Address from "./Address";
import { ModalAddAddress, VerificationModal } from "../Modal";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAddress } from "../../store/reducers/user";
import { IAddress } from "../../types";

const AddressList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(ACTION_SELECTORS.getUser);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] =
    useState<boolean>(false);
  const [editAddress, setEditAddress] = useState<IAddress | null>(null);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [currentlySelectedDeleteId, setCurrentlySelectedDeleteId] =
    useState<string>("");

  useEffect(() => {
    if (editAddress) {
      toggleAddAdressModal(true);
    }
  }, [editAddress]);

  const toggleAddAdressModal = (value?: boolean) => {
    if (typeof value === "boolean") {
      setIsAddAddressModalOpen(value);
      return;
    }
    setIsAddAddressModalOpen((prev) => !prev);
  };

  const onAddAddressModalClose = () => {
    toggleAddAdressModal(false);
    setEditAddress(null);
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

  const deleteAddressHandler = (addressId: string) => {
    setIsVerificationModalOpen(true);
    handleCurrentlySelectedDeleteId(addressId);
  };

  const handleCurrentlySelectedDeleteId = (id: string) => {
    setCurrentlySelectedDeleteId(id);
  };

  const toggleVerificationModal = (value?: boolean) => {
    if (typeof value === "boolean") {
      setIsVerificationModalOpen(value);
      return;
    }
    setIsVerificationModalOpen((prev) => !prev);
  };

  const onVerificationModalClose = () => {
    toggleVerificationModal(false);
    handleCurrentlySelectedDeleteId("");
  };

  const onVerificationModalAccept = () => {
    if (currentlySelectedDeleteId) {
      dispatch(deleteAddress(currentlySelectedDeleteId));
    }
    handleCurrentlySelectedDeleteId("");
    toggleVerificationModal(false);
  };

  const onVerificationModalCancel = () => {
    handleCurrentlySelectedDeleteId("");
    toggleVerificationModal(false);
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
        onModalClose={onAddAddressModalClose}
        isModalOpen={isAddAddressModalOpen}
      />
      <VerificationModal
        onVerificationModalCancel={onVerificationModalCancel}
        onVerificationModalAccept={onVerificationModalAccept}
        onModalClose={onVerificationModalClose}
        toggleVerificationModal={toggleVerificationModal}
        isModalOpen={isVerificationModalOpen}
      />
    </div>
  );
};

export default AddressList;
