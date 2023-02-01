import { useState, useEffect } from "react";
import { CloseIcon } from "../../../assets/Icons";

export interface IModal {
  isModalOpen: boolean;
  header?: React.ReactNode;
  content: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({
  isModalOpen,
  onClose,
  content,
  header = null,
}: IModal) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModalHandler = (value?: boolean) => {
    if (value === false && modalOpen === true && onClose) {
      onClose();
    }

    if (typeof value === "boolean") {
      setModalOpen(value);
      return;
    }

    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    toggleModalHandler(isModalOpen);
  }, [isModalOpen]);

  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        modalOpen ? "" : "hidden"
      } fixed top-0 left-0 right-0 z-50 h-full w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal text-gray-700`}
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <div
          onClick={() => toggleModalHandler(false)}
          className="overlay w-full h-full absolute top-0 left-0 bg-gray-700 opacity-50"
        ></div>
        <div className="relative w-full max-w-2xl md:h-auto z-10 p-4 sm:p-0">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div
              className={`${
                header ? "border-b p-4 " : "px-2"
              } flex items-start justify-between rounded-t dark:border-gray-600`}
            >
              {header ? header : null}
              <button
                onClick={() => toggleModalHandler(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <CloseIcon width={20} height={20} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh]">
              {content}
            </div>
            {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
