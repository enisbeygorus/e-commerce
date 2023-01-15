import { useState, useEffect } from "react";

export interface IModal {
  isModalOpen: boolean;
  header?: React.ReactNode;
  content: React.ReactNode;
}

export const Modal = ({ isModalOpen, content, header = null }: IModal) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModalHandler = (value?: boolean) => {
    if (typeof value === "boolean") {
      setModalOpen(value);
      return;
    }

    setModalOpen((prev) => !prev);
  };

  useEffect(() => {
    setModalOpen(isModalOpen);
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
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">
              {content}
            </div>
            {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
