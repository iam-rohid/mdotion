import { DocView } from "@/types";
import { useCallback, useState } from "react";
import {
  MdCode,
  MdVisibility,
  MdSplitscreen,
  MdMoreHoriz,
  MdStar,
  MdStarOutline,
} from "react-icons/md";

const DocumentHeader = ({
  title,
  onTitleChange,
  onDocViewChange,
  docView,
}: {
  title: string;
  onTitleChange: (value: string) => void;
  docView: DocView;
  onDocViewChange: (value: DocView) => void;
}) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  const handleBlur = useCallback(() => {
    setIsTitleEditing(false);
  }, [title]);

  return (
    <div className="header">
      {isTitleEditing ? (
        <input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          autoFocus
          className="title-input"
          onBlur={handleBlur}
          onKeyDown={(e) => {
            switch (e.code) {
              case "Enter":
                setIsTitleEditing(false);
              case "Escape":
                setIsTitleEditing(false);
            }
          }}
        />
      ) : (
        <button onClick={() => setIsTitleEditing(true)}>
          <h3>{title}</h3>
        </button>
      )}
      <ul className="tools-list">
        <li>
          <ul className="button-group">
            <li>
              <button
                onClick={() => onDocViewChange("editor")}
                className={`${docView === "editor" ? "active" : undefined}`}
              >
                <MdCode />
              </button>
            </li>
            <li>
              <button
                onClick={() => onDocViewChange("preview")}
                className={`${docView === "preview" ? "active" : undefined}`}
              >
                <MdVisibility />
              </button>
            </li>
            <li>
              <button
                onClick={() => onDocViewChange("side-by-side")}
                className={`${
                  docView === "side-by-side" ? "active" : undefined
                }`}
              >
                <MdSplitscreen
                  style={{
                    transform: `rotateZ(90deg)`,
                  }}
                />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button>
            <MdStarOutline />
          </button>
        </li>
        <li>
          <button>
            <MdMoreHoriz />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DocumentHeader;
