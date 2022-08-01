import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateNotebookModal = (props: Props) => {
  const [canOpen, setCanOpen] = useState(false);
  const { isOpen, onClose } = props;

  useEffect(() => {
    setCanOpen(true);
    return () => {
      setCanOpen(false);
    };
  }, []);

  if (!canOpen || !isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-30">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 z-10 py-32 flex justify-center pointer-events-none">
        <div className="bg-white dark:bg-gray-900 w-screen max-w-lg h-fit rounded-xl overflow-hidden pointer-events-auto">
          <div className="border-b border-gray-200 dark:border-r-gray-700 px-4 py-2 flex items-center">
            <p className="flex-1 truncate font-bold text-xl">Add Notebook</p>
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={onClose}
            >
              <MdClose className="text-2xl" />
            </button>
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Notebook Name"
              className="px-4 h-10 rounded-md bg-gray-100 dark:bg-gray-800 w-full"
              autoFocus
            />
          </div>
          <div className="px-4 py-2 flex items-center justify-end border-t border-gray-200 dark:border-r-gray-700 gap-2">
            <button
              className="px-4 h-10 items-center justify-center flex font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="px-4 h-10 items-center justify-center flex font-medium bg-accent-500 hover:bg-accent-600 text-white dark:text-white rounded-lg">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CreateNotebookModal;
