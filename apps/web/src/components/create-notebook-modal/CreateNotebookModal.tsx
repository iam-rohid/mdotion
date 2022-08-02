import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { createNewNotebookAsync } from "@/api/notebookApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
};

type CreateNotebookFields = {
  name: string;
};

const CreateNotebookModal = (props: Props) => {
  const { isOpen, onClose } = props;
  const formFields = useForm<CreateNotebookFields>();
  const queryClient = useQueryClient();
  const createNotebookMutation = useMutation(
    ["create-notebook"],
    createNewNotebookAsync
  );

  const onSubmit = useCallback(async ({ name }: CreateNotebookFields) => {
    createNotebookMutation.mutate(
      {
        title: name,
      },
      {
        onSettled: () => {
          queryClient.refetchQueries(["notebooks"]);
          onClose && onClose();
        },
      }
    );
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <div className="fullscreen-modal">
      <div className="overlay" onClick={onClose} />
      <div className="modal create-notebook-modal">
        <div className="header modal-header">
          <h3>Create Notebook</h3>
          <ul className="tools-list">
            <li>
              <button onClick={onClose}>
                <MdClose />
              </button>
            </li>
          </ul>
        </div>
        <form className="form" onSubmit={formFields.handleSubmit(onSubmit)}>
          <div className="modal-body">
            <div className="form-field">
              <label htmlFor="name">Notebook Name</label>
              <input
                type="text"
                placeholder="My Articles"
                id="name"
                autoFocus
                {...formFields.register("name", {
                  required: "Notebook name is required!",
                  maxLength: {
                    value: 50,
                    message:
                      "Notebook name can't be more than 50 characters long.",
                  },
                })}
              />
              {formFields.formState.errors.name && (
                <p className="error">
                  {formFields.formState.errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="reset" className="button secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="button primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default CreateNotebookModal;
