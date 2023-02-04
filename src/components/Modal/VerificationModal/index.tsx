import { Modal, IModal } from "../Modal";
type IModalAddedCart = Pick<IModal, "isModalOpen"> & {
  onModalClose: () => void;
  toggleVerificationModal: (value?: boolean) => void;
  onVerificationModalAccept: () => void;
  onVerificationModalCancel: () => void;
};

const VerificationModal = ({
  isModalOpen,
  onModalClose,
  toggleVerificationModal,
  onVerificationModalAccept,
  onVerificationModalCancel,
}: IModalAddedCart) => {
  const content = (
    <div className="text-center">Are you sure the delete this address</div>
  );
  return (
    <Modal
      onAccept={onVerificationModalAccept}
      onDecline={onVerificationModalCancel}
      onClose={onModalClose}
      isModalOpen={isModalOpen}
      isVerification={true}
      content={content}
    />
  );
};

export default VerificationModal;
