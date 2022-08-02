import CreateNotebookModal from "@/components/create-notebook-modal/CreateNotebookModal";
import { useCallback, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";

type Props = {
  onFold?: () => void;
};
const AppSideBarHeader = ({ onFold }: Props) => {
  const [isCreateNotebookModalOpen, setIsCreateNotebookModalOpen] =
    useState(false);

  const handleOpenCreateNotebookModal = useCallback(() => {
    setIsCreateNotebookModalOpen(true);
  }, []);

  const handleCloseCreateNotebookModal = useCallback(() => {
    setIsCreateNotebookModalOpen(false);
  }, []);

  return (
    <div className="header">
      <button onClick={onFold}>
        <h3>Notebooks</h3>
      </button>
      <ul role="list" className="tools-list">
        <li>
          <button onClick={handleOpenCreateNotebookModal}>
            <MdCreateNewFolder />
          </button>
        </li>
      </ul>
      <CreateNotebookModal
        isOpen={isCreateNotebookModalOpen}
        onClose={handleCloseCreateNotebookModal}
      />
    </div>
  );
};

export default AppSideBarHeader;
