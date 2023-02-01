import { Modal, IModal } from "../Modal";
import AddAddress from "../../Address/AddAddress";
import CompletedAnimation from "../../Animations/CompletedAnimation";
import { useState } from "react";
import { SpinningLoading } from "../../Loading";
import { IAddress } from "../../../types";

type IModalAddAddress = Pick<IModal, "isModalOpen"> & {
  onModalClose: () => void;
  toggleAddAdressModal: (value?: boolean) => void;
  editAddress: IAddress | null;
};

const CompletedAnimationContent = () => {
  return (
    <div className="text-center text-2xl">
      <CompletedAnimation />
      Added to addresses
    </div>
  );
};
const LoadingAnimationContent = () => {
  return (
    <div className="flex justify-center items-center">
      <SpinningLoading />
    </div>
  );
};

const ModalAddAddress = ({
  toggleAddAdressModal,
  isModalOpen,
  onModalClose,
  editAddress,
}: IModalAddAddress) => {
  const [isModalTaskCompleted, setIsModalTaskCompleted] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onModalCloseController = () => {
    onModalClose();
    setIsModalTaskCompleted(false);
  };

  const onAddAddressSuccess = () => {
    setIsLoading(false);
    setIsModalTaskCompleted(true);
    setTimeout(() => {
      setIsModalTaskCompleted(false);
      toggleAddAdressModal(false);
    }, 1500);
  };
  const onAddAddressFail = () => {
    setIsLoading(false);
    setIsModalTaskCompleted(false);
  };
  const onAddAddressSubmitStart = () => {
    setIsLoading(true);
    setIsModalTaskCompleted(false);
  };

  const contentHandler = () => {
    if (isModalTaskCompleted) {
      return <CompletedAnimationContent />;
    }
    if (isLoading) {
      return <LoadingAnimationContent />;
    }
    return (
      <AddAddress
        address={editAddress}
        onSuccess={onAddAddressSuccess}
        onFail={onAddAddressFail}
        onSubmitStart={onAddAddressSubmitStart}
      />
    );
  };

  if (!isModalOpen) return null;
  return (
    <Modal
      onClose={onModalCloseController}
      isModalOpen={isModalOpen}
      content={contentHandler()}
    />
  );
};

export default ModalAddAddress;
