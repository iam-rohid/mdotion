import CreateNotebookModal from "@/components/create-notebook-modal/CreateNotebookModal";
import { useCallback, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";

const AppSideBarHeader = () => {
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
      <h3>Notebooks</h3>
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
