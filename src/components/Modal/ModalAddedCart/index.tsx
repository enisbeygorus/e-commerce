import { Modal, IModal } from "../Modal";
import CompletedAnimation from "../../Animations/CompletedAnimation";

type IModalAddedCart = Pick<IModal, "isModalOpen">;

const ModalAddedCartContent = () => {
  return (
    <div className="text-center text-2xl">
      <CompletedAnimation />
      Added to Cart
    </div>
  );
};

const ModalAddedCart = ({ isModalOpen }: IModalAddedCart) => {
  return (
    <Modal isModalOpen={isModalOpen} content={<ModalAddedCartContent />} />
  );
};

export default ModalAddedCart;
